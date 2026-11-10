import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import songUrl from "@/assets/Golden Brown - The Stranglers (slowed + reverb).mp3";

export function MusicToggle() {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [playbackError, setPlaybackError] = useState(false);

  useEffect(() => {
    const audio = new Audio(songUrl);
    audio.loop = true;
    audio.volume = 0.45;
    audio.preload = "none";
    ref.current = audio;

    const onPlay = () => {
      setPlaying(true);
      setPlaybackError(false);
    };
    const onPause = () => setPlaying(false);
    const onError = () => {
      setPlaying(false);
      setPlaybackError(true);
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("error", onError);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("error", onError);
      audio.pause();
      ref.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = ref.current;
    if (!audio) return;
    if (audio.paused) {
      setPlaybackError(false);
      audio.play().catch(() => {
        setPlaying(false);
        setPlaybackError(true);
      });
    } else {
      audio.pause();
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause background music" : "Play background music"}
      title={`${playing ? "Pause" : "Play"} Golden Brown`}
      className="fixed right-4 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-500 hover:scale-110 sm:right-6"
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
          ? "Background music could not be played. Try again."
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
