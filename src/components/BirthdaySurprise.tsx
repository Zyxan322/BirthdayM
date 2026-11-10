import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import {
  ArrowDown,
  ArrowLeft,
  Cake,
  Heart,
  Menu,
  Smile,
  Sparkles,
  Star,
  Sun,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { couple, images } from "@/content/story";
import { Reveal } from "@/components/Reveal";
import { MusicToggle } from "@/components/MusicToggle";

const letterParagraphs = [
  "Happy Birthday to the most special person in my life.",
  "Sometimes, I wonder how I got so lucky to have someone like you in my life. Out of all the people in this world, you are the one my heart chose, and loving you has become one of the most beautiful parts of my life.",
  "You are not just someone I love. You are my best choice, one of the best decisions I have ever made, and someone I would choose again and again without a second thought. If life gave me a thousand chances to start over, I would still want to find you, know you, and fall in love with you all over again.",
  "You make ordinary moments feel special just by being part of them. You give my heart reasons to smile, dreams something beautiful to look forward to, and my life a kind of happiness that words can never fully explain.",
  "On your birthday, I wish I could give you everything your heart has ever wished for. I hope this new year of your life brings you endless happiness, peace, success, beautiful surprises, and all the love you deserve.",
  "I want you to know that you are incredibly special to me. I may not always find the perfect words to express what I feel, but my heart holds so much love for you. I hope I can keep making you smile, support you through every difficult day, celebrate every little victory with you, and remind you how precious you are.",
  "Today is all about celebrating you — your beautiful heart, your smile, your dreams, and the wonderful person you are.",
];

const reasons: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Your Smile",
    text: "One smile from you can make an ordinary day feel extraordinary.",
    icon: Smile,
  },
  {
    title: "Your Heart",
    text: "The kindness and warmth you carry make you truly special.",
    icon: Heart,
  },
  {
    title: "Your Presence",
    text: "Even the simplest moments feel better when you're part of them.",
    icon: Sparkles,
  },
  {
    title: "Your Happiness",
    text: "Seeing you happy is one of the sweetest feelings in my life.",
    icon: Sun,
  },
  {
    title: "Your Uniqueness",
    text: "There is no one else quite like you, and that is what makes you irreplaceable.",
    icon: Star,
  },
  {
    title: "My Choice",
    text: "No matter how many times I could choose, my heart would keep choosing you.",
    icon: Heart,
  },
];

const wishes = [
  "A lifetime filled with reasons to smile.",
  "The courage to chase every dream in your heart.",
  "Peace on difficult days and happiness in unexpected moments.",
  "Success in everything you work hard for.",
  "People who appreciate your beautiful heart.",
  "A love that makes you feel valued, respected, safe, and appreciated.",
];

const confetti = Array.from({ length: 34 }, (_, index) => ({
  x: ((index * 67) % 260) - 130,
  y: -70 - ((index * 43) % 160),
  rotate: (index * 79) % 360,
  color: ["#bd493c", "#d4ae69", "#e7b5a5", "#f2d89a", "#fffaf2"][index % 5],
  shape: index % 3 === 0 ? "50%" : "2px",
}));

export function BirthdaySurprise() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishCount, setWishCount] = useState(0);
  const [wishMessageVisible, setWishMessageVisible] = useState(false);
  const [revealedReasons, setRevealedReasons] = useState<Set<number>>(() => new Set());
  const resetWishTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resetWishTimer.current) clearTimeout(resetWishTimer.current);
    },
    [],
  );

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const makeWish = () => {
    setWishCount((count) => count + 1);
    setWishMessageVisible(true);
    if (resetWishTimer.current) clearTimeout(resetWishTimer.current);
    resetWishTimer.current = setTimeout(() => setWishMessageVisible(false), 6000);
  };

  return (
    <MotionConfig reducedMotion="user">
      <main className="surprise-page relative overflow-hidden bg-background text-cocoa">
        <header className="surprise-header sticky top-0 z-40 transition-all duration-300">
          <nav
            aria-label="Birthday surprise navigation"
            className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-7 sm:py-4"
          >
            <Link
              to="/"
              aria-label="Birthday cake, back to home"
              className="surprise-monogram inline-flex items-center justify-center"
            >
              <Cake size={24} strokeWidth={1.7} aria-hidden="true" />
            </Link>
            <ul className="surprise-nav-links hidden items-center gap-7 xl:flex">
              <li>
                <a href="#reasons" className="surprise-nav-link">
                  Reasons
                </a>
              </li>
              <li>
                <a href="#wishes" className="surprise-nav-link">
                  Wishes
                </a>
              </li>
              <li>
                <a href="#celebration" className="surprise-nav-link">
                  Celebration
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3">
              <Link to="/" className="surprise-back-link">
                <ArrowLeft size={15} aria-hidden="true" />
                <span>Back to home</span>
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="site-menu-toggle flex h-11 w-11 items-center justify-center rounded-md transition-colors xl:hidden"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="surprise-mobile-navigation"
              >
                {menuOpen ? <X size={21} /> : <Menu size={21} />}
              </button>
            </div>
          </nav>
          <AnimatePresence>
            {menuOpen && (
              <motion.ul
                id="surprise-mobile-navigation"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="site-mobile-nav flex flex-col gap-1 overflow-hidden border-t px-5 py-3 text-xs uppercase tracking-[0.2em] xl:hidden"
              >
                {[
                  { label: "Reasons", href: "#reasons" },
                  { label: "Wishes", href: "#wishes" },
                  { label: "Celebration", href: "#celebration" },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="link-cinema block rounded-md px-3 py-3"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <section className="surprise-letter-section relative overflow-hidden px-5 pb-24 pt-12 sm:px-8 sm:pb-32 sm:pt-20">
            <div className="surprise-orb surprise-orb-one" aria-hidden="true" />
            <div className="surprise-orb surprise-orb-two" aria-hidden="true" />

            <div className="relative mx-auto max-w-4xl">
              <div className="mb-9 text-center sm:mb-12">
                <p className="surprise-eyebrow">A little something, just for you</p>
                <p className="mt-4 font-display text-lg italic text-gold-deep">
                  19 November · with all my heart
                </p>
              </div>

              <motion.article
                initial={{ opacity: 0, y: 32, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                className="surprise-letter-card relative mx-auto max-w-3xl px-6 py-10 sm:px-12 sm:py-14 lg:px-16"
              >
                <div className="letter-corner letter-corner-top" aria-hidden="true" />
                <div className="letter-corner letter-corner-bottom" aria-hidden="true" />
                <Heart className="letter-heart" size={23} fill="currentColor" aria-hidden="true" />
                <p className="letter-script text-3xl text-rose sm:text-4xl">
                  My Dearest Love, Moiza ❤️
                </p>

                <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
                  {letterParagraphs.map((paragraph, index) => (
                    <motion.p
                      key={paragraph}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.65, delay: 0.35 + index * 0.12 }}
                      className={index === 0 ? "letter-opening" : "letter-paragraph"}
                    >
                      {paragraph}
                    </motion.p>
                  ))}

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 1.25 }}
                    className="letter-paragraph"
                  >
                    If there is one thing I want you to remember, it is this:{" "}
                    <strong className="font-medium text-cocoa">
                      You are my favorite person, my best choice, and a love I would choose over and
                      over again.
                    </strong>
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 1.35 }}
                    className="letter-paragraph"
                  >
                    Happy Birthday, my love. May this day be as beautiful as the happiness you bring
                    into my life.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.55 }}
                  className="mt-10 border-t border-[var(--letter-rule)] pt-7 sm:mt-12"
                >
                  <p className="letter-paragraph">With all my love, today and always,</p>
                  <p className="letter-script mt-2 text-3xl text-rose sm:text-4xl">
                    Yours, Zeeshan ❤️
                  </p>
                </motion.div>
              </motion.article>

              <a href="#reasons" className="surprise-scroll-cue">
                <span>There is more, my love</span>
                <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </section>

          <section id="reasons" className="surprise-section relative px-5 py-24 sm:px-8 sm:py-32">
            <div className="mx-auto max-w-7xl">
              <Reveal className="mx-auto max-w-2xl text-center">
                <p className="surprise-eyebrow">All the little things I adore</p>
                <h2 className="surprise-heading mt-4">A Few Reasons You're So Special to Me</h2>
              </Reveal>

              <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {reasons.map(({ title, text, icon: Icon }, index) => (
                  <Reveal key={title} delay={index * 0.07}>
                    <article className="surprise-reason-card h-full">
                      <button
                        type="button"
                        className="w-full text-left"
                        aria-expanded={revealedReasons.has(index)}
                        aria-controls={`reason-note-${index}`}
                        onClick={() =>
                          setRevealedReasons((current) => {
                            const next = new Set(current);
                            if (next.has(index)) next.delete(index);
                            else next.add(index);
                            return next;
                          })
                        }
                      >
                        <span className="surprise-icon-wrap">
                          <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                        </span>
                        <span className="mt-6 block font-display text-2xl text-cocoa">{title}</span>
                        <span className="mt-3 block text-[0.65rem] uppercase tracking-[0.16em] text-gold-deep">
                          {revealedReasons.has(index) ? "A little note for you" : "Tap to reveal"}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {revealedReasons.has(index) && (
                          <motion.p
                            id={`reason-note-${index}`}
                            initial={{ opacity: 0, height: 0, y: 8 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: 8 }}
                            transition={{ duration: 0.24 }}
                            className="overflow-hidden pt-3 text-sm leading-7 text-cocoa/70"
                          >
                            {text}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section
            id="wishes"
            className="surprise-wishes-section relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
          >
            <div className="surprise-orb surprise-orb-three" aria-hidden="true" />
            <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
              <Reveal>
                <p className="surprise-eyebrow">Every beautiful thing, for you</p>
                <h2 className="surprise-heading mt-4">If I Could Wish You Anything…</h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-cocoa/70">
                  I would wish you a year that feels like being held by all the goodness you give to
                  everyone around you.
                </p>
                <div className="mt-8 h-px w-20 bg-[var(--gold)]" aria-hidden="true" />
              </Reveal>

              <div className="space-y-3">
                {wishes.map((wish, index) => (
                  <Reveal key={wish} delay={index * 0.06} y={18}>
                    <div className="surprise-wish-row">
                      <span className="surprise-wish-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-6 text-cocoa/80 sm:text-base">{wish}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal className="relative mx-auto mt-14 max-w-3xl text-center sm:mt-20">
              <Heart
                className="mx-auto text-rose"
                size={25}
                fill="currentColor"
                aria-hidden="true"
              />
              <p className="mt-5 font-display text-2xl italic leading-relaxed text-cocoa sm:text-3xl">
                “You deserve all the beautiful things this world has to offer, and I hope life gives
                you more happiness than you can imagine.”
              </p>
            </Reveal>
          </section>

          <section className="surprise-forever-section relative isolate overflow-hidden px-5 py-28 text-center sm:px-8 sm:py-40">
            <div
              className="forever-image absolute inset-0 -z-20"
              style={{ backgroundImage: `url(${images.roses})` }}
            />
            <div className="forever-overlay absolute inset-0 -z-10" aria-hidden="true" />
            <Reveal className="mx-auto max-w-4xl">
              <p className="surprise-eyebrow surprise-eyebrow-light">
                In every version of our story
              </p>
              <h2 className="mt-5 font-display text-4xl leading-tight text-white sm:text-6xl">
                If I Had to Choose Again,
                <br className="hidden sm:block" /> I'd Still Choose You.
              </h2>
              <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-white/85 sm:text-lg sm:leading-8">
                Not because every day has to be perfect, but because the thought of sharing life's
                little moments, celebrating the good days, learning through the difficult ones, and
                creating beautiful memories with you is something my heart would choose again and
                again.
              </p>
              <Heart
                className="mx-auto mt-9 text-white"
                size={32}
                fill="currentColor"
                aria-hidden="true"
              />
            </Reveal>
          </section>

          <section
            id="celebration"
            className="surprise-celebration-section relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
          >
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal className="order-2 lg:order-1">
                <div className="surprise-cake-frame">
                  <img
                    src={images.cakeHero}
                    alt="A candlelit birthday cake decorated with flowers and strawberries"
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full max-h-[34rem] w-full rounded-[1.4rem] object-cover object-center"
                  />
                  <div className="cake-caption">
                    <Cake size={16} aria-hidden="true" />
                    <span>A wish just for you</span>
                  </div>
                </div>
              </Reveal>

              <Reveal className="order-1 lg:order-2">
                <p className="surprise-eyebrow">A little birthday magic</p>
                <h2 className="surprise-heading mt-4">Today, the World Celebrates You!</h2>
                <p className="mt-6 text-sm leading-7 text-cocoa/75 sm:text-base">
                  Make a wish, close your eyes for a moment, and remember how loved and special you
                  are. Today is your day, and I hope it brings you a thousand little reasons to
                  smile.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button type="button" onClick={makeWish} className="surprise-wish-button">
                    <Sparkles size={17} aria-hidden="true" />
                    Make a Birthday Wish
                  </button>
                  <span className="text-xs tracking-wide text-cocoa/55">
                    Close your eyes and make it count
                  </span>
                </div>

                <div className="relative mt-5 min-h-20" aria-live="polite">
                  {wishMessageVisible && (
                    <motion.p
                      key={wishCount}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="wish-confirmation"
                    >
                      May your birthday wish find its way to you, and may this new chapter of your
                      life be filled with beautiful surprises. ❤️
                    </motion.p>
                  )}
                </div>
              </Reveal>
            </div>

            {wishMessageVisible && (
              <div key={wishCount} className="confetti-layer" aria-hidden="true">
                {confetti.map((piece, index) => (
                  <motion.span
                    key={`${wishCount}-${index}`}
                    className="confetti-piece"
                    style={{ backgroundColor: piece.color, borderRadius: piece.shape }}
                    initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 0.3 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      x: piece.x,
                      y: piece.y,
                      rotate: piece.rotate,
                      scale: [0.5, 1, 0.7],
                    }}
                    transition={{ duration: 2.4, ease: "easeOut" }}
                  />
                ))}
              </div>
            )}
          </section>

          <section className="surprise-closing-section relative overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-36">
            <div className="surprise-orb surprise-orb-four" aria-hidden="true" />
            <Reveal className="relative mx-auto max-w-3xl">
              <p className="surprise-eyebrow">Before this little letter ends</p>
              <h2 className="surprise-heading mt-4">One Last Thing, My Love…</h2>
              <p className="mt-8 font-display text-xl leading-relaxed text-cocoa/80 sm:text-2xl">
                Among all the beautiful things life could give me, getting to know you and having
                you in my heart is something I will always treasure. Thank you for being you, for
                the happiness you bring, and for becoming such a special part of my story.
              </p>
              <p className="mt-6 font-display text-xl leading-relaxed text-cocoa/80 sm:text-2xl">
                Today, tomorrow, and in all the little moments in between, I hope you always
                remember how special you are to me.
              </p>
              <p className="mt-7 font-display text-2xl italic text-rose sm:text-3xl">
                Happy Birthday, Moiza. ❤️
              </p>
              <Heart
                className="mx-auto mt-8 text-red-600"
                size={62}
                fill="currentColor"
                aria-hidden="true"
              />
              <p className="letter-script mt-5 text-3xl text-rose sm:text-4xl">
                With love, always — Zeeshan ❤️
              </p>
              <Link to="/" className="surprise-home-button mt-10">
                <ArrowLeft size={16} aria-hidden="true" />
                Back to Our Birthday Page
              </Link>
            </Reveal>
          </section>
        </motion.div>
      </main>
      <MusicToggle />
    </MotionConfig>
  );
}
