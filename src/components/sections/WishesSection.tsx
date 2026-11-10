import { wishes } from "@/content/story";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { Sun, Camera, Heart, Star, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  sun: Sun,
  camera: Camera,
  heart: Heart,
  star: Star,
};

export function WishesSection() {
  return (
    <section id="wishes" className="night-chapter relative overflow-hidden py-28 sm:py-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 40% at 85% 10%, oklch(0.94 0.035 78 / 0.7), transparent 65%), radial-gradient(45% 40% at 8% 85%, oklch(0.94 0.035 45 / 0.55), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <span className="mx-auto flex w-fit items-center justify-center text-rose">
            <Sparkles size={20} />
          </span>
          <p className="mt-6 text-[0.6rem] uppercase tracking-[0.5em] text-gold-deep">
            {wishes.kicker}
          </p>
          <h2 className="mt-5 font-display text-4xl text-cocoa sm:text-6xl">{wishes.heading}</h2>
          <p className="mt-4 text-sm font-light tracking-[0.16em] text-cocoa/60">
            {wishes.subheading}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wishes.items.map((w, i) => {
            const Icon = ICONS[w.icon] ?? Heart;
            return (
              <Reveal key={w.title} delay={i * 0.08}>
                <TiltCard className="h-full">
                  <div className="surface-glass flex h-full flex-col rounded-3xl px-8 py-10">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-full"
                      style={{
                        background:
                          "linear-gradient(140deg, oklch(0.94 0.035 45), oklch(0.94 0.035 78))",
                        color: "var(--rose)",
                        boxShadow: "0 10px 24px -10px oklch(0.56 0.07 48 / 0.24)",
                      }}
                    >
                      <Icon size={18} />
                    </span>
                    <h3 className="mt-6 font-display text-2xl leading-snug text-cocoa">
                      {w.title}
                    </h3>
                    <div className="gold-hairline my-5 w-14" />
                    <p className="text-sm font-light leading-relaxed tracking-[0.04em] text-cocoa/70">
                      {w.text}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
