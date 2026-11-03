import { useEffect, useState } from "react";
import { countdown } from "@/content/story";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { Cake, Heart } from "lucide-react";

// 19 November 2026, midnight in the visitor's own timezone.
const TARGET = new Date(2026, 10, 19, 0, 0, 0).getTime();

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function compute(): Parts | null {
  const diff = TARGET - Date.now();
  if (diff <= 0) return null;
  const total = Math.floor(diff / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

export function CountdownSection() {
  // `undefined` before mount (SSR-safe), `null` once the day has arrived.
  const [parts, setParts] = useState<Parts | null | undefined>(undefined);

  useEffect(() => {
    setParts(compute());
    const id = setInterval(() => setParts(compute()), 1000);
    return () => clearInterval(id);
  }, []);

  const arrived = parts === null;

  const cells = [
    { key: "days", value: parts?.days },
    { key: "hours", value: parts?.hours },
    { key: "minutes", value: parts?.minutes },
    { key: "seconds", value: parts?.seconds },
  ] as const;

  return (
    <section
      id="countdown"
      className="relative overflow-hidden py-28 sm:py-36"
      style={{
        background:
          "linear-gradient(180deg, var(--cream), oklch(0.95 0.035 62) 55%, var(--cream) 100%)",
      }}
    >
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <Reveal className="flex flex-col items-center">
          <span className="flex w-fit items-center justify-center" style={{ color: "var(--rose)" }}>
            <Cake size={20} />
          </span>
          <p className="mt-6 text-[0.6rem] uppercase tracking-[0.5em] text-gold-deep">
            {countdown.kicker}
          </p>
          <h2 className="mt-5 font-display text-4xl text-cocoa sm:text-5xl">{countdown.heading}</h2>
          <div className="gold-hairline mx-auto mt-8 w-28" />
          <p className="mt-6 text-sm font-light tracking-[0.2em] text-cocoa/60">
            {countdown.dateLabel}
          </p>
        </Reveal>

        {arrived ? (
          <Reveal delay={0.15}>
            <p
              className="mx-auto mt-16 flex items-center justify-center gap-4 font-display text-5xl text-rose sm:text-7xl"
              style={{ color: "var(--rose)" }}
            >
              <Heart fill="var(--rose)" color="var(--rose)" size={40} />
              {countdown.today}
              <Heart fill="var(--rose)" color="var(--rose)" size={40} />
            </p>
          </Reveal>
        ) : (
          <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-7">
            {cells.map((c, i) => (
              <Reveal key={c.key} delay={0.1 + i * 0.08}>
                <TiltCard intensity={9} className="h-full">
                  <div className="surface-glass flex h-full flex-col items-center justify-center rounded-3xl px-6 py-10">
                    <span className="font-display text-5xl leading-none text-gold-metal sm:text-6xl">
                      {c.value === undefined ? "—" : String(c.value).padStart(2, "0")}
                    </span>
                    <span className="mt-4 text-[0.6rem] uppercase tracking-[0.4em] text-cocoa/60">
                      {countdown.units[c.key]}
                    </span>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
