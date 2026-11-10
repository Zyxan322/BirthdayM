import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
};

export function TiltCard({ children, className, intensity = 12, glare = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const tiltAllowed = useRef(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      tiltAllowed.current = !preference.matches;
    };

    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || !tiltAllowed.current) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(1100px) rotateY(${(px - 0.5) * intensity * 2}deg) rotateX(${(0.5 - py) * intensity * 2}deg) translateZ(26px) scale(1.02)`;

    const glareElement = glareRef.current;
    if (glareElement) {
      glareElement.style.background = `radial-gradient(400px circle at ${px * 100}% ${py * 100}%, oklch(0.95 0.05 90 / 0.22), transparent 60%)`;
      glareElement.style.opacity = "0.5";
    }
  };

  const onLeave = () => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(1100px) rotateY(0deg) rotateX(0deg) translateZ(0) scale(1)";
    }
    if (glareRef.current) glareRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transform: "perspective(1100px) rotateY(0deg) rotateX(0deg) translateZ(0) scale(1)",
        transition: "transform 0.45s cubic-bezier(0.2,0.8,0.2,1)",
      }}
      className={cn("tilt-card-interactive relative", className)}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{ opacity: 0 }}
        />
      )}
    </div>
  );
}
