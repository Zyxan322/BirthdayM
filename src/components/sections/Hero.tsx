import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { hero } from "@/content/story";
import heroVideo from "@/assets/Birthday_cake_in_decorated_room_8acf1892.mp4";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      if (motionPreference.matches) {
        video.pause();
        return;
      }
      video.play().catch(() => {
        // The poster remains visible if a browser blocks decorative autoplay.
      });
    };

    syncPlayback();
    motionPreference.addEventListener("change", syncPlayback);
    return () => {
      motionPreference.removeEventListener("change", syncPlayback);
      video.pause();
    };
  }, []);

  return (
    <section
      id="top"
      className="hero-section relative isolate flex min-h-[100svh] items-end overflow-hidden px-6 pb-24 pt-32 sm:pb-28 lg:items-center"
    >
      <video
        ref={videoRef}
        className="hero-video absolute inset-0 -z-20 h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="auto"
        poster={hero.cake}
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-grain pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-2xl lg:py-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-kicker flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.3em] sm:text-xs"
          >
            <span className="h-px w-9 bg-[var(--gold-soft)]" aria-hidden="true" />
            {hero.kicker}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            className="hero-title mt-7 max-w-[12ch] font-display text-6xl leading-[0.98] sm:text-7xl lg:text-[6.5rem]"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="hero-copy mt-7 max-w-xl text-sm font-light leading-7 sm:text-base sm:leading-8"
          >
            {hero.message}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-5 font-display text-xl italic text-[var(--gold-soft)] sm:text-2xl"
          >
            {hero.signature}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
          >
            <Link
              to="/birthday-surprise"
              className="hero-cta mt-9 inline-flex min-h-12 items-center gap-4 rounded-full px-6 py-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] transition-all duration-300 sm:px-7"
            >
              {hero.cta}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>

      <a
        href="#countdown"
        aria-label="Scroll to the birthday countdown"
        className="hero-scroll absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.55rem] uppercase tracking-[0.35em] transition-opacity hover:opacity-70 sm:bottom-9"
      >
        <span>Scroll to discover</span>
        <ArrowDown size={15} className="animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
