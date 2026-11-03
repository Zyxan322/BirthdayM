import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import song from "@/assets/ijazat.mp3.asset.json";

export function MusicToggle() {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(song.url);
    audio.loop = true;
    audio.volume = 0.45;
    ref.current = audio;

    const tryPlay = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    };
    tryPlay();

    const onFirst = () => {
      if (audio.paused) tryPlay();
      window.removeEventListener("pointerdown", onFirst);
      window.removeEventListener("keydown", onFirst);
      window.removeEventListener("scroll", onFirst);
    };
    window.addEventListener("pointerdown", onFirst);
    window.addEventListener("keydown", onFirst);
    window.addEventListener("scroll", onFirst, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", onFirst);
      window.removeEventListener("keydown", onFirst);
      window.removeEventListener("scroll", onFirst);
      audio.pause();
      ref.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = ref.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
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
      {playing && (
        <span
          className="pointer-events-none absolute inset-0 rounded-full animate-ping"
          style={{ border: "1px solid oklch(0.75 0.11 355 / 0.35)" }}
        />
      )}
    </button>
  );
}
