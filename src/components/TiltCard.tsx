import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
};

export function TiltCard({ children, className, intensity = 12, glare = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, o: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setStyle({
      transform: `perspective(1100px) rotateY(${(px - 0.5) * intensity * 2}deg) rotateX(${(0.5 - py) * intensity * 2}deg) translateZ(26px) scale(1.02)`,
    });
    setGlarePos({ x: px * 100, y: py * 100, o: 1 });
  };

  const onLeave = () => {
    setStyle({ transform: "perspective(1100px) rotateY(0deg) rotateX(0deg) translateZ(0) scale(1)" });
    setGlarePos((g) => ({ ...g, o: 0 }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ ...style, transition: "transform 0.45s cubic-bezier(0.2,0.8,0.2,1)" }}
      className={cn("relative will-change-transform", className)}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: glarePos.o * 0.5,
            background: `radial-gradient(400px circle at ${glarePos.x}% ${glarePos.y}%, oklch(0.95 0.05 90 / 0.22), transparent 60%)`,
          }}
        />
      )}
    </div>
  );
}
