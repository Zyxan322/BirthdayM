import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { MotionConfig } from "motion/react";
import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MusicToggle } from "@/components/MusicToggle";
import { Hero } from "@/components/sections/Hero";
import { CountdownSection } from "@/components/sections/CountdownSection";
import { WishesSection } from "@/components/sections/WishesSection";
import { LetterSection } from "@/components/sections/LetterSection";
import { GiftsSection } from "@/components/sections/GiftsSection";
import { MomentsSection } from "@/components/sections/MomentsSection";
import { Finale, RomanticFooter } from "@/components/sections/Finale";
import {
  BirthdayIntro,
  ChapterSection,
  CelebrationSection,
  CrazyLoveSection,
  FavouritePersonSection,
  FutureSection,
  MeaningSection,
  OpenWhenSection,
  PromisesSection,
  ReasonsSection,
  SpecialQualitiesSection,
  ThousandSmilesSection,
  UniverseSection,
  WorldSection,
} from "@/components/sections/RomanticJourney";
import { images } from "@/content/story";

const title = "Happy Birthday, Moiza! ♡ — 19th November, from Zeeshan";
const description =
  "A birthday love letter from Zeeshan to Moiza — wishes, a handwritten letter, gifts and sweet moments for the most special day of the year: 19 November.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: images.cakeHero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: images.cakeHero },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    let lenis: { destroy: () => void; raf: (t: number) => void } | null = null;
    let raf = 0;
    let cancelled = false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const instance = new Lenis({ duration: 1.25, smoothWheel: true });
      lenis = instance;
      const loop = (time: number) => {
        instance.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative bg-background">
        <ScrollProgress />
        <Nav />
        <MusicToggle />
        <Hero />
        <BirthdayIntro />
        <CountdownSection />
        <MeaningSection />
        <FavouritePersonSection />
        <ReasonsSection />
        <WorldSection />
        <SpecialQualitiesSection />
        <UniverseSection />
        <WishesSection />
        <LetterSection />
        <CrazyLoveSection />
        <FutureSection />
        <CelebrationSection />
        <GiftsSection />
        <MomentsSection />
        <OpenWhenSection />
        <ChapterSection />
        <PromisesSection />
        <ThousandSmilesSection />
        <Finale />
        <RomanticFooter />
      </main>
    </MotionConfig>
  );
}
