import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { moments } from "@/content/story";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { Camera, Heart, X } from "lucide-react";

export function MomentsSection() {
  const [open, setOpen] = useState<number | null>(null);
  const active = open === null ? null : (moments.items[open] ?? null);
  const isOpen = open !== null;
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowLeft") {
        setOpen((index) =>
          index === null ? null : (index - 1 + moments.items.length) % moments.items.length,
        );
      }
      if (event.key === "ArrowRight") {
        setOpen((index) => (index === null ? null : (index + 1) % moments.items.length));
      }
      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
      triggerRef.current = null;
    };
  }, [isOpen]);

  return (
    <section
      id="moments"
      className="night-chapter relative overflow-hidden py-28 sm:py-36"
      style={{
        background:
          "linear-gradient(180deg, var(--cream), oklch(0.94 0.035 48) 50%, var(--cream) 100%)",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <span className="flex w-fit items-center justify-center mx-auto text-rose">
            <Camera size={20} />
          </span>
          <p className="mt-6 text-[0.6rem] uppercase tracking-[0.5em] text-gold-deep">
            {moments.kicker}
          </p>
          <h2 className="mt-5 font-display text-4xl text-cocoa sm:text-6xl">{moments.heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed tracking-[0.12em] text-cocoa/60">
            {moments.subheading}
          </p>
          <div className="gold-hairline mx-auto mt-9 w-32" />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
          {moments.items.map((m, i) => (
            <Reveal key={m.caption} delay={(i % 4) * 0.08}>
              <TiltCard intensity={9} className="h-full">
                <button
                  type="button"
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget;
                    setOpen(i);
                  }}
                  aria-label={`See ${m.caption} up close`}
                  aria-haspopup="dialog"
                  className="surface-glass group block w-full overflow-hidden rounded-[1.6rem] text-left"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={m.src}
                      alt={m.caption}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-[1.08] sm:h-52"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 40%, oklch(0.4 0.06 350 / 0.45))",
                      }}
                    />
                    <span
                      className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100"
                      style={{ background: "oklch(0.985 0.012 78 / 0.92)", color: "var(--rose)" }}
                    >
                      <Heart size={14} fill="currentColor" />
                    </span>
                  </div>
                  <div className="px-5 py-5 text-center sm:px-6">
                    <h3 className="font-display text-lg text-cocoa sm:text-xl">{m.caption}</h3>
                    <p className="mt-2 text-xs font-light leading-relaxed text-cocoa/55 sm:text-[0.8rem]">
                      {m.note}
                    </p>
                  </div>
                </button>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[80] flex items-center justify-center px-5 py-10"
            style={{ background: "oklch(0.3 0.04 350 / 0.72)", backdropFilter: "blur(14px)" }}
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="moments-dialog-title"
          >
            <motion.figure
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 16, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative max-h-full w-full max-w-3xl overflow-hidden rounded-[2rem] p-[6px]"
              style={{
                backgroundImage: "var(--gradient-gold)",
                boxShadow: "0 60px 120px -40px oklch(0.3 0.05 350 / 0.8)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden rounded-[1.8rem] bg-cream">
                <img
                  src={active.src}
                  alt={active.caption}
                  className="max-h-[62vh] w-full object-cover"
                />
                <figcaption className="px-8 py-7 text-center">
                  <h3 id="moments-dialog-title" className="font-display text-3xl text-cocoa">
                    {active.caption}
                  </h3>
                  <div className="gold-hairline mx-auto my-4 w-16" />
                  <p className="text-sm font-light leading-relaxed text-cocoa/65">{active.note}</p>
                </figcaption>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(null)}
                aria-label="Close photo"
                className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full text-cocoa transition-transform hover:scale-110 sm:-right-4 sm:-top-4"
                style={{
                  background: "oklch(0.98 0.015 40)",
                  boxShadow: "0 14px 30px -12px oklch(0.5 0.08 350 / 0.7)",
                }}
              >
                <X size={18} />
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
