"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

export const revealEase = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: number;
  duration?: number;
  amount?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView" | "transition" | "viewport">;

/**
 * Default scroll reveal: rises from 60px below rest with a light blur.
 * Under reduced motion the content is simply present.
 */
export function Reveal({
  children,
  delay = 0,
  y = 60,
  blur = 4,
  duration = 0.72,
  amount = 0.18,
  className,
  ...rest
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={className} {...(rest as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: revealEase }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
