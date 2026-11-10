import { useMemo } from "react";
import { motion } from "motion/react";

type Petal = {
  left: number;
  delay: number;
  duration: number;
  size: number;
  drift: number;
  spin: number;
  hue: string;
  opacity: number;
};

function makePetals(count: number): Petal[] {
  const hues = [
    "oklch(0.78 0.11 355)",
    "oklch(0.86 0.07 350)",
    "oklch(0.83 0.09 20)",
    "oklch(0.81 0.09 85)",
  ];
  return Array.from({ length: count }, (_, i) => ({
    left: (i * 97) % 100,
    delay: (i * 0.73) % 12,
    duration: 11 + ((i * 3.7) % 9),
    size: 12 + ((i * 5) % 16),
    drift: (((i * 13) % 20) - 10) * 12,
    spin: (i % 2 === 0 ? 1 : -1) * (180 + ((i * 37) % 320)),
    hue: hues[i % hues.length] as string,
    opacity: 0.3 + ((i * 7) % 40) / 100,
  }));
}

/** Soft pink petals drifting down from the top of the hero. */
export function RosePetals({ count = 26 }: { count?: number }) {
  const petals = useMemo(() => makePetals(count), [count]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {petals.map((p, i) => (
        <motion.div
          key={i}
          className="absolute -top-16"
          style={{ left: `${p.left}%` }}
          initial={{ y: "-10vh", x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: ["-10vh", "110vh"],
            x: [0, p.drift, -p.drift * 0.6, p.drift * 0.3],
            rotate: [0, p.spin],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.15, 0.85, 1],
          }}
        >
          <div
            style={{
              width: p.size,
              height: p.size * 0.72,
              background: `radial-gradient(120% 100% at 20% 20%, oklch(1 0 0 / 0.5), ${p.hue} 60%, oklch(0.72 0.1 350) 100%)`,
              borderRadius: "100% 0 100% 0",
              filter: "blur(0.2px) drop-shadow(0 2px 5px oklch(0.6 0.08 355 / 0.35))",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
