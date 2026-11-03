import { gifts } from "@/content/story";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { Gift } from "lucide-react";

export function GiftsSection() {
  return (
    <section
      id="gifts"
      className="relative overflow-hidden py-28 sm:py-36"
      style={{
        background:
          "linear-gradient(180deg, var(--cream), oklch(0.95 0.035 48) 45%, oklch(0.96 0.025 78) 75%, var(--cream) 100%)",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <span className="flex w-fit items-center justify-center mx-auto text-rose">
            <Gift size={20} />
          </span>
          <p className="mt-6 text-[0.6rem] uppercase tracking-[0.5em] text-gold-deep">
            {gifts.kicker}
          </p>
          <h2 className="mt-5 font-display text-4xl text-cocoa sm:text-6xl">{gifts.heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed tracking-[0.12em] text-cocoa/60">
            {gifts.subheading}
          </p>
          <div className="gold-hairline mx-auto mt-9 w-32" />
        </Reveal>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {gifts.items.map((g, i) => (
            <Reveal key={g.caption} delay={(i % 3) * 0.1}>
              <TiltCard className="h-full" intensity={8}>
                <figure className="surface-glass flex h-full flex-col overflow-hidden rounded-[1.8rem]">
                  <div className="overflow-hidden">
                    <img
                      src={g.src}
                      alt={g.caption}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="h-60 w-full object-cover transition-transform duration-700 hover:scale-[1.06] sm:h-64"
                    />
                  </div>
                  <figcaption className="flex flex-1 flex-col px-7 py-7 text-center">
                    <h3 className="font-display text-2xl text-cocoa">{g.caption}</h3>
                    <div className="gold-hairline mx-auto my-4 w-12" />
                    <p className="text-sm font-light leading-relaxed text-cocoa/65">{g.note}</p>
                  </figcaption>
                </figure>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
