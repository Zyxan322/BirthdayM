import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, Cake, Heart, Sparkles } from "lucide-react";
import { HeartSparkles } from "@/components/HeartSparkles";
import { MusicToggle } from "@/components/MusicToggle";
import { Reveal } from "@/components/Reveal";
import { couple } from "@/content/story";
import { loveLetterParagraphs } from "@/content/romantic-story";

export function LoveMessagePage() {
  return (
    <main className="love-message-page relative isolate min-h-screen overflow-hidden">
      <div className="love-message-ambient" aria-hidden="true" />
      <HeartSparkles hearts={9} sparkles={14} />
      <header className="love-message-header relative z-20">
        <Link to="/" className="love-message-back">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to the birthday story
        </Link>
        <span className="text-rose-glow" aria-label="Birthday cake">
          <Cake size={24} strokeWidth={1.7} aria-hidden="true" />
        </span>
      </header>

      <section className="love-message-opening relative z-10 flex min-h-[82svh] items-center px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="chapter-eyebrow"
          >
            A quieter page, just for us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.12 }}
            className="mt-7 max-w-4xl font-display text-5xl leading-[1.04] text-white sm:text-7xl lg:text-8xl"
          >
            Moiza, before you leave...
            <br />
            <span className="text-rose-glow">there&apos;s one more thing.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-2xl font-display text-2xl italic leading-relaxed text-white/65 sm:text-3xl"
          >
            If there were a way to measure how much you mean to me, the universe would still not be
            enough.
          </motion.p>
          <div className="mt-12 flex items-center gap-3 text-rose-glow">
            <Heart size={16} fill="currentColor" aria-hidden="true" />
            <span className="text-[0.65rem] uppercase tracking-[0.3em] text-white/45">
              A letter from Zeeshan
            </span>
          </div>
        </div>
      </section>

      <section className="love-letter-body relative z-10 px-6 pb-32 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="love-letter-salutation">
            <Sparkles size={18} aria-hidden="true" />
            <p>My dearest Moiza,</p>
          </div>

          <div className="love-letter-paragraphs">
            {loveLetterParagraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index % 2 === 0 ? 0.02 : 0.08} y={24}>
                <article className={`love-letter-paragraph love-letter-paragraph-${index + 1}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{paragraph}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="love-letter-signature mt-16 text-right">
            <p>With all the love I know how to give,</p>
            <p className="mt-3 font-display text-4xl italic text-rose-glow sm:text-5xl">
              Yours, Zeeshan
            </p>
          </Reveal>
        </div>
      </section>

      <section className="love-letter-ending relative z-10 overflow-hidden px-6 py-32 text-center sm:px-10 sm:py-44">
        <div className="ending-heart-glow" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-4xl">
          <p className="chapter-eyebrow">
            After all these words, one thing will always remain true...
          </p>
          <motion.p
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="mt-8 font-display text-4xl font-medium leading-tight text-rose-glow sm:text-6xl lg:text-7xl"
          >
            I LOVE YOU, MOIZA.
            <br />
            MORE THAN WORDS COULD EVER EXPLAIN.
          </motion.p>
          <Heart
            className="mx-auto mt-10 text-rose-glow"
            size={40}
            fill="currentColor"
            aria-hidden="true"
          />
          <p className="mx-auto mt-8 max-w-2xl font-display text-xl italic leading-relaxed text-white/65 sm:text-2xl">
            You matter. You are cherished. And I hope you carry that truth with you, today and every
            day after.
          </p>
          <Link to="/" className="love-message-home-button mt-12">
            <ArrowLeft size={16} aria-hidden="true" />
            Return to the birthday story
          </Link>
        </Reveal>
      </section>

      <footer className="love-message-footer relative z-10 px-6 py-8 text-center">
        <p className="font-display text-sm tracking-[0.3em] text-white/45">
          {couple.monogram} · Always with love
        </p>
      </footer>

      <MusicToggle />
    </main>
  );
}
