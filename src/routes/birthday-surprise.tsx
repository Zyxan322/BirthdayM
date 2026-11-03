import { createFileRoute } from "@tanstack/react-router";
import { BirthdaySurprise } from "@/components/BirthdaySurprise";

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
    ],
  }),
  component: BirthdaySurpriseRoute,
});

function BirthdaySurpriseRoute() {
  return <BirthdaySurprise />;
}
