import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { couple, finale } from "@/content/story";
import { HeartSparkles } from "@/components/HeartSparkles";
import { Heart } from "lucide-react";

export function Finale() {
  return (
    <section
      className="night-chapter finale-chapter relative flex min-h-[82svh] items-center justify-center overflow-hidden px-6 py-32 text-center"
      style={{
        background:
          "radial-gradient(70% 60% at 50% 30%, oklch(0.27 0.065 325), oklch(0.15 0.035 285) 58%, oklch(0.1 0.02 280) 100%)",
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
            className="text-rose-glow"
            style={{ textShadow: "0 18px 50px oklch(0.77 0.12 355 / 0.25)" }}
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
          <Heart size={76} fill="var(--rose)" color="var(--rose)" strokeWidth={0} />
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
          className="mt-12 text-[0.6rem] uppercase tracking-[0.5em] text-white/45"
        >
          {finale.dateLabel}
        </motion.p>
      </div>
    </section>
  );
}

export function RomanticFooter() {
  return (
    <footer className="romantic-footer relative isolate overflow-hidden px-6 py-24 text-center sm:px-10 sm:py-36">
      <div className="romantic-footer-ambient" aria-hidden="true" />
      <HeartSparkles hearts={9} sparkles={16} />
      <div className="romantic-footer-content relative z-20 mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="footer-eyebrow"
        >
          Before you go, my love
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.1 }}
          className="footer-title mt-6 font-display"
        >
          Before You Go,
          <br />
          <span>My Love...</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="footer-intro mx-auto mt-7 max-w-2xl"
        >
          I&apos;ve shared so many feelings throughout this little world, but there&apos;s still
          something special I want you to know.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="footer-promise mx-auto mt-10 max-w-3xl font-display"
        >
          You Mean More to Me
          <br />
          <span>Than Words Can Ever Explain.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, delay: 0.6 }}
          className="mt-10"
        >
          <Link to="/my-love-for-you" className="footer-surprise-button">
            <Heart size={19} fill="currentColor" aria-hidden="true" />
            <span>Discover Your Special Surprise</span>
          </Link>
          <p className="footer-button-note mt-4">A little something from my heart, just for you.</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="footer-signoff mt-14"
        >
          Made with endless love, just for you, {couple.her}.
          <motion.span
            className="inline-flex text-rose-glow"
            animate={{ scale: [1, 1.16, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            aria-label="love"
          >
            <Heart size={17} fill="currentColor" aria-hidden="true" />
          </motion.span>
        </motion.p>

        <div className="footer-divider mx-auto mt-10" aria-hidden="true">
          <span />
          <Heart size={13} fill="currentColor" />
          <span />
        </div>

        <p className="footer-closing mt-6">
          Every little piece of this experience was made with you in mind.
        </p>
      </div>
    </footer>
  );
}
