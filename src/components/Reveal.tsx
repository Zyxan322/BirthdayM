import { motion } from "motion/react";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  rotate?: number;
};

export function Reveal({ children, delay = 0, y = 40, className, rotate = 0 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, rotateX: rotate }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
