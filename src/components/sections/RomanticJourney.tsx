import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown, ArrowRight, Heart, Moon, Sparkles, Star, Sun } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { images } from "@/content/story";
import {
  birthdayHopes,
  chapterMoments,
  futureHopes,
  openWhenLetters,
  promisesFromMyHeart,
  reasonsIAdoreYou,
  specialQualities,
  universeNotes,
} from "@/content/romantic-story";

function ChapterHeading({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="chapter-eyebrow">{eyebrow}</p>
      <h2 className={`chapter-title mt-5 ${light ? "chapter-title-light" : ""}`}>{title}</h2>
      {copy && <p className="chapter-copy mx-auto mt-5 max-w-2xl">{copy}</p>}
      <span className="chapter-rule mx-auto mt-8" aria-hidden="true" />
    </Reveal>
  );
}

export function BirthdayIntro() {
  return (
    <section
      id="introduction"
      className="story-intro relative flex min-h-[76svh] items-center overflow-hidden px-6 py-28 sm:px-10"
    >
      <div
        className="story-intro-image absolute inset-0"
        style={{ backgroundImage: `url(${images.letterImg})` }}
        aria-hidden="true"
      />
      <div className="story-intro-overlay absolute inset-0" aria-hidden="true" />
      <Reveal className="relative mx-auto w-full max-w-6xl">
        <p className="chapter-eyebrow">A birthday made just for you</p>
        <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-white sm:text-7xl">
          The world became
          <br />
          <span className="text-rose-glow">more beautiful</span> when you arrived.
        </h2>
        <p className="mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:text-lg sm:leading-8">
          Today is more than a date on the calendar. It is a chance to celebrate the person whose
          existence brings so much warmth, meaning, and happiness into my life.
        </p>
        <a href="#meaning" className="story-scroll-link mt-10">
          <span>Keep discovering</span>
          <ArrowDown size={16} aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  );
}

export function MeaningSection() {
  return (
    <section
      id="meaning"
      className="night-chapter meaning-chapter relative flex min-h-[84svh] items-center overflow-hidden px-6 py-32 sm:px-10"
    >
      <div className="meaning-orbit meaning-orbit-one" aria-hidden="true" />
      <div className="meaning-orbit meaning-orbit-two" aria-hidden="true" />
      <Reveal className="relative mx-auto max-w-6xl">
        <p className="chapter-eyebrow">You mean more than words</p>
        <h2 className="mt-7 max-w-5xl font-display text-5xl leading-[1.06] text-white sm:text-7xl lg:text-8xl">
          There are feelings
          <br className="hidden sm:block" /> too beautiful for{" "}
          <span className="text-rose-glow">language.</span>
        </h2>
        <p className="mt-9 max-w-2xl font-display text-2xl italic leading-relaxed text-white/70 sm:text-3xl">
          “You matter to me in the quiet moments, the exciting ones, and every ordinary day in
          between.”
        </p>
        <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
          So I will keep trying to say it—with a birthday, a page, a hundred little reasons, and all
          the care I can put into the words. My world feels better with you in it; your presence
          brings a different kind of brightness to the life I know.
        </p>
      </Reveal>
    </section>
  );
}

export function FavouritePersonSection() {
  return (
    <section
      id="favourite"
      className="night-chapter relative overflow-hidden px-6 py-28 sm:px-10 sm:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
        <Reveal className="relative">
          <div className="favourite-photo-main">
            <img
              src={images.cakeHero}
              alt="A candlelit pink birthday cake decorated with flowers"
              width={1024}
              height={640}
              loading="lazy"
            />
            <span>For the person who makes every day brighter</span>
          </div>
          <div className="favourite-photo-inset">
            <img
              src={images.roses}
              alt="Blush roses arranged for a birthday celebration"
              width={1024}
              height={640}
              loading="lazy"
            />
          </div>
          <span className="favourite-photo-index" aria-hidden="true">
            Z <Heart size={13} fill="currentColor" /> M
          </span>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="chapter-eyebrow">My favourite person</p>
          <h2 className="chapter-title mt-5">
            Of all the lovely things in my world, you are my favourite.
          </h2>
          <p className="chapter-copy mt-7">
            Not because you need to be perfect, or because you have to do anything extraordinary.
            Simply because you are you. Your heart, your smile, your thoughts, your little ways of
            seeing the world—each detail gives me another reason to feel lucky that you are in my
            life.
          </p>
          <p className="mt-6 font-display text-2xl italic text-rose-glow sm:text-3xl">
            You will always be someone worth celebrating.
          </p>
          <p className="chapter-copy mt-5">
            If love had a face, it would look like your beautiful, completely unique self. Your
            smile, your spirit, and the warmth you bring are lovelier than any picture could ever
            capture.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function ReasonsSection() {
  const [visibleCount, setVisibleCount] = useState(12);

  return (
    <section
      id="reasons-100"
      className="night-chapter relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="reason-halo" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <ChapterHeading
          eyebrow="A hundred little truths"
          title="100 Reasons I Love You"
          copy="Each one is a small piece of a feeling that could never fit inside a single list. Open any card to read it."
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {reasonsIAdoreYou.slice(0, visibleCount).map((reason, index) => (
            <details className="reason-detail-card" key={reason}>
              <summary>
                <span className="reason-card-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="reason-card-hint">A little reason</span>
                <Heart className="reason-card-heart" size={17} aria-hidden="true" />
              </summary>
              <p>{reason}</p>
            </details>
          ))}
        </div>
        {visibleCount < reasonsIAdoreYou.length && (
          <div className="mt-11 text-center">
            <button
              type="button"
              className="story-outline-button"
              onClick={() =>
                setVisibleCount((count) => Math.min(count + 16, reasonsIAdoreYou.length))
              }
            >
              Read the next {Math.min(16, reasonsIAdoreYou.length - visibleCount)} reasons
              <ArrowRight size={16} aria-hidden="true" />
            </button>
            <p className="mt-4 text-xs tracking-[0.16em] text-white/45">
              Showing {visibleCount} of {reasonsIAdoreYou.length}
            </p>
          </div>
        )}
        {visibleCount === reasonsIAdoreYou.length && (
          <p className="mt-11 text-center font-display text-2xl italic text-rose-glow">
            And even these hundred are only the beginning.
          </p>
        )}
      </div>
    </section>
  );
}

export function WorldSection() {
  return (
    <section className="night-chapter world-chapter relative flex min-h-[76svh] items-center overflow-hidden px-6 py-32 text-center sm:px-10">
      <div className="world-light world-light-left" aria-hidden="true" />
      <div className="world-light world-light-right" aria-hidden="true" />
      <Reveal className="relative mx-auto max-w-5xl">
        <p className="chapter-eyebrow">My world feels better with you</p>
        <p className="mt-8 font-display text-4xl leading-tight text-white/70 sm:text-6xl">
          Before you, the days were days.
        </p>
        <h2 className="mt-3 font-display text-5xl leading-tight text-rose-glow sm:text-7xl">
          Then you made them mean more.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-white/60 sm:text-lg sm:leading-8">
          You did not have to change everything. Your presence alone brought another kind of
          brightness into my life—a reason to notice the good, to hope for more, and to be grateful
          for the person I get to care about.
        </p>
      </Reveal>
    </section>
  );
}

export function SpecialQualitiesSection() {
  return (
    <section id="special" className="night-chapter relative px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <ChapterHeading
          eyebrow="Things that make you special"
          title="Every little thing adds up to you."
          copy="There is no single reason you are precious to me. It is the beautiful combination of all the ways you are yourself."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specialQualities.map((quality, index) => (
            <Reveal key={quality.number} delay={(index % 3) * 0.07}>
              <article className={`quality-card quality-card-${index + 1}`}>
                <span>{quality.number}</span>
                <h3>{quality.title}</h3>
                <p>{quality.text}</p>
                <Heart size={18} aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UniverseSection() {
  const [noteIndex, setNoteIndex] = useState(0);

  return (
    <section className="night-chapter universe-chapter relative isolate flex min-h-[78svh] items-center overflow-hidden px-6 py-28 sm:px-10">
      <div className="universe-stars" aria-hidden="true" />
      <div className="universe-ring universe-ring-one" aria-hidden="true" />
      <div className="universe-ring universe-ring-two" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <p className="chapter-eyebrow">Our little universe</p>
          <h2 className="chapter-title mt-5">A whole sky of things I wish for you.</h2>
          <p className="chapter-copy mt-6">
            If every star could hold a hope, I would fill the night with peaceful mornings, bright
            ideas, joyful surprises, and all the love your heart deserves.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="universe-note-card">
            <span className="universe-note-star">
              <Star size={20} fill="currentColor" aria-hidden="true" />
            </span>
            <AnimatePresence mode="wait">
              <motion.p
                key={noteIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                “{universeNotes[noteIndex]}”
              </motion.p>
            </AnimatePresence>
            <button
              type="button"
              className="story-text-button"
              onClick={() => setNoteIndex((index) => (index + 1) % universeNotes.length)}
            >
              Find another little thought <ArrowRight size={15} aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CrazyLoveSection() {
  return (
    <section className="night-chapter crazy-love-chapter relative flex min-h-[90svh] items-center overflow-hidden px-6 py-32 sm:px-10">
      <div className="crazy-love-glow" aria-hidden="true" />
      <Reveal className="relative mx-auto w-full max-w-6xl">
        <Moon className="mb-9 text-rose-glow" size={24} strokeWidth={1.4} aria-hidden="true" />
        <p className="chapter-eyebrow">A little crazy about you</p>
        <h2 className="mt-6 max-w-5xl font-display text-5xl leading-[1.04] text-white sm:text-7xl lg:text-8xl">
          You cross my mind
          <br />
          <span className="text-rose-glow">more often than the moon crosses the sky.</span>
        </h2>
        <p className="mt-9 max-w-2xl text-sm leading-7 text-white/65 sm:text-lg sm:leading-8">
          In the middle of a busy day, in a quiet pause, or when something lovely reminds me of you,
          there you are in my thoughts again. I care about how you are doing, what you are dreaming
          about, and whether you know just how much you matter to me.
        </p>
        <p className="mt-8 font-display text-2xl italic text-white/80 sm:text-3xl">
          Not because I expect anything from you—because loving you makes caring feel natural.
        </p>
        <p className="mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
          Every little detail—the kindness you give, the dreams you carry, the small things that
          make you unmistakably you—has a place in my heart. You are loved in the details, too.
        </p>
      </Reveal>
    </section>
  );
}

export function FutureSection() {
  return (
    <section className="night-chapter relative overflow-hidden px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <ChapterHeading
          eyebrow="Little things I hope to do with you"
          title="Not memories from the past—possibilities for the days ahead."
          copy="No promises about a perfect story. Just sincere hopes for more time, more laughter, and more chances to cheer for you."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {futureHopes.map((hope, index) => (
            <Reveal key={hope.title} delay={(index % 3) * 0.08}>
              <article className="future-hope-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{hope.title}</h3>
                <p>{hope.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CelebrationSection() {
  const [wishCount, setWishCount] = useState(0);

  return (
    <section
      id="birthday-celebration"
      className="night-chapter celebration-chapter relative overflow-hidden px-6 py-28 sm:px-10 sm:py-36"
    >
      <div className="celebration-glow" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal className="celebration-image-wrap">
          <img
            src={images.cakeHero}
            alt="A decorated birthday cake waiting for a candlelit wish"
            width={1024}
            height={640}
            loading="lazy"
          />
          <div className="celebration-candle" aria-hidden="true">
            <span />
          </div>
          <AnimatePresence>
            {wishCount > 0 &&
              Array.from({ length: 18 }, (_, index) => (
                <motion.span
                  key={`${wishCount}-${index}`}
                  className="celebration-confetti"
                  style={{
                    backgroundColor: ["#e8c987", "#d98ca6", "#f7e6bd", "#a68bd1"][index % 4],
                  }}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0.4 }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: ((index * 47) % 260) - 130,
                    y: -70 - ((index * 39) % 190),
                    rotate: (index * 61) % 280,
                    scale: [0.4, 1, 0.65],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                  aria-hidden="true"
                />
              ))}
          </AnimatePresence>
        </Reveal>
        <Reveal delay={0.1}>
          <Sun className="mb-6 text-rose-glow" size={24} aria-hidden="true" />
          <p className="chapter-eyebrow">Make a wish, my love</p>
          <h2 className="chapter-title mt-5">Today, every candle is glowing just for you.</h2>
          <p className="chapter-copy mt-6">
            Take a quiet moment. Think of something your heart hopes for. Whatever the wish may be,
            I hope the coming year brings you closer to it—with beautiful surprises along the way.
          </p>
          <button
            type="button"
            className="story-glow-button mt-8"
            onClick={() => setWishCount((count) => count + 1)}
          >
            <Sparkles size={17} aria-hidden="true" />
            {wishCount === 0 ? "Light a wish" : "Make another wish"}
          </button>
          {wishCount > 0 && (
            <p className="mt-5 font-display text-xl italic text-rose-glow" aria-live="polite">
              May this wish find its way to you. ♡
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function OpenWhenSection() {
  const [activeLetter, setActiveLetter] = useState<number | null>(null);

  return (
    <section className="night-chapter open-when-chapter relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <ChapterHeading
          eyebrow="Keep these close"
          title="Open when you need a little love."
          copy="Choose the note that feels right for this moment. Each one will be here whenever you need it."
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-2">
          {openWhenLetters.map((letter, index) => {
            const isOpen = activeLetter === index;
            const letterId = `open-when-note-${index}`;

            return (
              <article className={`open-when-card ${isOpen ? "is-open" : ""}`} key={letter.title}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={letterId}
                  onClick={() => setActiveLetter(isOpen ? null : index)}
                >
                  <span className="open-when-number">{String(index + 1).padStart(2, "0")}</span>
                  <span>{letter.title}</span>
                  <Heart size={17} aria-hidden="true" />
                </button>
                <div id={letterId} hidden={!isOpen} className="open-when-message">
                  <p>{letter.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ChapterSection() {
  return (
    <section className="night-chapter chapter-timeline relative overflow-hidden px-6 py-32 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-5xl">
        <ChapterHeading
          eyebrow="You are my favourite chapter"
          title="A story that keeps finding new ways to celebrate you."
        />
        <div className="chapter-timeline-list mt-16">
          {chapterMoments.map((moment, index) => (
            <Reveal key={moment.label} delay={index * 0.1}>
              <article className="chapter-timeline-item">
                <span className="chapter-timeline-marker">
                  <Heart size={14} fill="currentColor" aria-hidden="true" />
                </span>
                <div>
                  <p>{moment.label}</p>
                  <h3>{moment.title}</h3>
                  <span>{moment.text}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PromisesSection() {
  return (
    <section className="night-chapter relative overflow-hidden px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <ChapterHeading
          eyebrow="A promise from my heart"
          title="The kind of love I want you to feel."
          copy="Not grand vows that ask you to believe in perfection—just honest intentions for the ways I want to care for you."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {promisesFromMyHeart.map((promise, index) => (
            <Reveal key={promise.title} delay={(index % 3) * 0.08}>
              <article className="promise-card">
                <span className="promise-card-index">{String(index + 1).padStart(2, "0")}</span>
                <Heart size={19} aria-hidden="true" />
                <h3>{promise.title}</h3>
                <p>{promise.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ThousandSmilesSection() {
  return (
    <section className="smiles-chapter relative overflow-hidden px-6 py-28 sm:px-10 sm:py-36">
      <div className="smiles-orb" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <ChapterHeading
          eyebrow="A thousand more smiles"
          title="For your next trip around the sun."
          copy="My wishes for you are simple, and I mean every one. May this new year of your life make room for everything that brings your heart alive."
          light
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-x-12 sm:grid-cols-2">
          {birthdayHopes.map((hope, index) => (
            <Reveal key={hope} delay={(index % 2) * 0.08}>
              <p className="birthday-hope">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {hope}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
