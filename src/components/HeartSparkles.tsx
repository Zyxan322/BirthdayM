import { useMemo } from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";

type Floater = {
  left: number;
  delay: number;
  duration: number;
  size: number;
  drift: number;
  color: string;
};

const HEART_COLORS = [
  "oklch(0.78 0.11 355)",
  "oklch(0.85 0.07 350)",
  "oklch(0.81 0.09 85)",
  "oklch(0.88 0.05 320)",
];

function makeFloaters(count: number, seedOffset: number): Floater[] {
  return Array.from({ length: count }, (_, i) => ({
    left: (i * 89 + seedOffset) % 100,
    delay: (i * 1.31 + seedOffset * 0.37) % 14,
    duration: 16 + ((i * 3.7) % 10),
    size: 12 + ((i * 7) % 18),
    drift: (((i * 13) % 20) - 10) * 9,
    color: HEART_COLORS[(i + seedOffset) % HEART_COLORS.length] as string,
  }));
}

/**
 * Gentle floating hearts and champagne-gold sparkles.
 * Purely decorative — hover-safe and pointer-events free.
 */
export function HeartSparkles({
  hearts = 9,
  sparkles = 14,
}: {
  hearts?: number;
  sparkles?: number;
}) {
  const floaters = useMemo(() => makeFloaters(hearts, 3), [hearts]);
  const sparkList = useMemo(
    () =>
      Array.from({ length: sparkles }, (_, i) => ({
        top: (i * 61) % 100,
        left: (i * 37 + 11) % 100,
        delay: (i * 0.83) % 6,
        size: 3 + ((i * 3) % 4),
      })),
    [sparkles],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {floaters.map((f, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute -bottom-10"
          style={{ left: `${f.left}%` }}
          initial={{ y: 0, x: 0, opacity: 0 }}
          animate={{
            y: ["2vh", "-108vh"],
            x: [0, f.drift, -f.drift * 0.6, f.drift * 0.4],
            opacity: [0, 0.55, 0.55, 0],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.12, 0.85, 1],
          }}
        >
          <Heart size={f.size} fill={f.color} color={f.color} strokeWidth={0} />
        </motion.div>
      ))}

      {sparkList.map((s, i) => (
        <motion.span
          key={`s-${i}`}
          className="absolute rounded-full"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            background: "oklch(0.85 0.08 88)",
            boxShadow: "0 0 10px 2px oklch(0.85 0.08 88 / 0.7)",
          }}
          animate={{ opacity: [0.1, 0.9, 0.1], scale: [1, 1.4, 1] }}
          transition={{
            duration: 3.2,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
