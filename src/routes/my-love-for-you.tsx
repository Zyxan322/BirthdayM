import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "motion/react";
import { LoveMessagePage } from "@/components/LoveMessagePage";

export const Route = createFileRoute("/my-love-for-you")({
  head: () => ({
    meta: [
      { title: "One More Thing, Moiza — A Letter From Zeeshan" },
      {
        name: "description",
        content:
          "A quiet, heartfelt letter from Zeeshan to Moiza about how deeply she is loved and how much she matters.",
      },
      { property: "og:title", content: "One More Thing, Moiza — A Letter From Zeeshan" },
      {
        property: "og:description",
        content:
          "A quiet, heartfelt letter from Zeeshan to Moiza about how deeply she is loved and how much she matters.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LoveMessageRoute,
});

function LoveMessageRoute() {
  return (
    <MotionConfig reducedMotion="user">
      <LoveMessagePage />
    </MotionConfig>
  );
}
