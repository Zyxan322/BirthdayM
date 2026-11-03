import { letter } from "@/content/story";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";

export function LetterSection() {
  return (
    <section
      id="letter"
      className="relative overflow-hidden py-28 sm:py-36"
      style={{
        background:
          "linear-gradient(180deg, var(--cream), oklch(0.95 0.03 55) 30%, oklch(0.94 0.035 45) 70%, var(--cream) 100%)",
      }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <TiltCard intensity={6}>
            <div className="relative mx-auto max-w-sm">
              <div
                className="overflow-hidden rounded-2xl p-[6px]"
                style={{
                  backgroundImage: "var(--gradient-gold)",
                  boxShadow: "0 60px 100px -50px oklch(0.42 0.05 48 / 0.24)",
                }}
              >
                <img
                  src={letter.image}
                  alt={letter.imageAlt}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full rounded-[1.4rem] object-cover"
                />
              </div>
            </div>
          </TiltCard>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-16 text-center text-[0.6rem] uppercase tracking-[0.5em] text-gold-deep">
            {letter.kicker}
          </p>
          <h2 className="mt-5 text-center font-display text-4xl italic text-cocoa sm:text-6xl">
            {letter.heading}
          </h2>
        </Reveal>

        <div
          className="relative mx-auto mt-14 max-w-3xl rounded-3xl px-8 py-14 sm:px-16"
          style={{
            background: "linear-gradient(160deg, oklch(1 0 0), oklch(0.985 0.012 78))",
            boxShadow:
              "0 50px 100px -50px oklch(0.42 0.05 48 / 0.2), inset 0 0 0 1px oklch(0.78 0.09 78 / 0.45)",
          }}
        >
          <div
            className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full text-lg"
            style={{
              background: "radial-gradient(circle at 35% 30%, oklch(0.72 0.085 50), var(--rose))",
              boxShadow: "0 10px 24px -10px oklch(0.56 0.07 48 / 0.4)",
              color: "oklch(0.98 0.02 40 / 0.9)",
            }}
            aria-hidden="true"
          >
            ❤
          </div>

          <p className="font-display text-3xl italic text-cocoa">{letter.salutation}</p>

          <div className="mt-8 space-y-5">
            {letter.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.02 * i} y={18}>
                <p className="font-display text-lg leading-relaxed text-cocoa/85 sm:text-xl">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p
              className="mt-12 text-right font-display text-2xl italic"
              style={{ color: "var(--rose)" }}
            >
              {letter.signature}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
