import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import songUrl from "@/assets/golden-brown-best-part.mp3";

let backgroundAudio: HTMLAudioElement | null = null;
let pausedByUser = false;

function getBackgroundAudio() {
  if (typeof Audio === "undefined") return null;

  if (!backgroundAudio) {
    backgroundAudio = new Audio(songUrl);
    backgroundAudio.loop = true;
    backgroundAudio.volume = 0.45;
    backgroundAudio.preload = "auto";
  }

  return backgroundAudio;
}

export function MusicToggle() {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [playbackError, setPlaybackError] = useState(false);

  useEffect(() => {
    const audio = getBackgroundAudio();
    if (!audio) return;

    let active = true;
    ref.current = audio;

    const onPlay = () => {
      removeInteractionListeners();
      pausedByUser = false;
      setPlaying(true);
      setPlaybackError(false);
    };
    const onPause = () => setPlaying(false);
    const onError = () => {
      setPlaying(false);
      setPlaybackError(true);
    };
    const removeInteractionListeners = () => {
      document.removeEventListener("pointerdown", resumeAfterInteraction);
      document.removeEventListener("keydown", resumeAfterInteraction);
    };
    const resumeAfterInteraction = (event: Event) => {
      const target = event.target;
      if (target instanceof Element && target.closest("[data-music-toggle]")) return;
      if (pausedByUser || !audio.paused) return;
      audio.play().catch(() => {
        if (active) setPlaybackError(true);
      });
    };
    const startAutoplay = () => {
      if (pausedByUser || !audio.paused) return;
      audio.play().catch(() => {
        if (!active) return;
        setPlaybackError(true);
        document.addEventListener("pointerdown", resumeAfterInteraction);
        document.addEventListener("keydown", resumeAfterInteraction);
      });
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("error", onError);
    startAutoplay();

    return () => {
      active = false;
      removeInteractionListeners();
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("error", onError);
      ref.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = ref.current;
    if (!audio) return;
    if (audio.paused) {
      pausedByUser = false;
      setPlaybackError(false);
      audio.play().catch(() => {
        setPlaying(false);
        setPlaybackError(true);
      });
    } else {
      pausedByUser = true;
      audio.pause();
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause background music" : "Play background music"}
      title={`${playing ? "Pause" : "Play"} Golden Brown`}
      data-music-toggle
      className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 hover:scale-110"
      style={{
        borderColor: "oklch(0.75 0.11 355 / 0.4)",
        background: "oklch(0.985 0.008 40 / 0.85)",
        boxShadow: playing
          ? "0 0 26px oklch(0.79 0.09 85 / 0.5), 0 16px 34px -18px oklch(0.6 0.08 355 / 0.6)"
          : "0 16px 34px -18px oklch(0.6 0.08 355 / 0.45)",
        color: "oklch(0.62 0.12 355)",
      }}
    >
      {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
      <span className="sr-only" role="status" aria-live="polite">
        {playbackError
          ? "Background music is waiting for your first interaction."
          : playing
            ? "Background music playing."
            : ""}
      </span>
      {playing && (
        <span
          className="pointer-events-none absolute inset-0 rounded-full animate-ping"
          style={{ border: "1px solid oklch(0.75 0.11 355 / 0.35)" }}
        />
      )}
    </button>
  );
}
