import { motion } from "motion/react";
import { finale } from "@/content/story";
import { HeartSparkles } from "@/components/HeartSparkles";
import { Heart } from "lucide-react";

export function Finale() {
  return (
    <section
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-32 text-center"
      style={{
        background:
          "radial-gradient(70% 60% at 50% 30%, oklch(0.97 0.025 78), oklch(0.94 0.035 48) 55%, oklch(0.92 0.04 64) 100%)",
      }}
    >
      <HeartSparkles hearts={12} sparkles={18} />

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full glow-pulse sm:h-[46rem] sm:w-[46rem]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.9 0.055 62 / 0.45), oklch(0.9 0.06 78 / 0.2) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.8em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.42em" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4 }}
          className="text-[0.6rem] uppercase text-gold-deep sm:text-xs"
        >
          {finale.kicker}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.6, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-7 font-display text-4xl leading-[1.1] sm:text-6xl"
        >
          <span
            className="text-gold-metal"
            style={{ textShadow: "0 18px 50px oklch(0.81 0.09 85 / 0.25)" }}
          >
            {finale.heading}
          </span>
        </motion.h2>

        <div className="mt-12 space-y-6">
          {finale.message.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.2, delay: 0.5 + i * 0.4 }}
              className="mx-auto max-w-2xl font-display text-xl font-light leading-relaxed text-cocoa/80 sm:text-2xl"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-14 flex justify-center"
        >
          <Heart size={76} fill="#dc2626" color="#dc2626" strokeWidth={0} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 1.8 }}
          className="mx-auto mt-12 max-w-xl font-display text-2xl italic text-cocoa/80 sm:text-3xl"
        >
          “{finale.closing}”
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 2.4 }}
          className="mt-12 text-[0.6rem] uppercase tracking-[0.5em] text-cocoa/45"
        >
          {finale.dateLabel}
        </motion.p>
      </div>
    </section>
  );
}
