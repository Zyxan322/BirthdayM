import { createFileRoute } from "@tanstack/react-router";
import { BirthdaySurprise } from "@/components/BirthdaySurprise";
import { images } from "@/content/story";

export const Route = createFileRoute("/birthday-surprise")({
  head: () => ({
    meta: [
      { title: "A Birthday Surprise for Moiza — With Love, Zeeshan" },
      {
        name: "description",
        content: "A heartfelt birthday letter and a little celebration, made with love for Moiza.",
      },
      { property: "og:title", content: "A Birthday Surprise for Moiza" },
      {
        property: "og:description",
        content: "A heartfelt birthday letter and a little celebration, made with love for Moiza.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: images.cakeHero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "A Birthday Surprise for Moiza — With Love, Zeeshan" },
      {
        name: "twitter:description",
        content: "A heartfelt birthday letter and a little celebration, made with love for Moiza.",
      },
      { name: "twitter:image", content: images.cakeHero },
    ],
  }),
  component: BirthdaySurpriseRoute,
});

function BirthdaySurpriseRoute() {
  return <BirthdaySurprise />;
}
