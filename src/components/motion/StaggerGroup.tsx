"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { revealEase } from "./Reveal";

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
  as?: "div" | "ul" | "section";
};

/**
 * Reveals direct children in sequence. Pair with <StaggerItem>.
 */
export function StaggerGroup({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  amount = 0.18,
  as = "div",
}: StaggerGroupProps) {
  const reduced = useReducedMotion();
  const Comp = motion[as];

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </Comp>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li";
};

export function StaggerItem({ children, className, y = 60, as = "div" }: StaggerItemProps) {
  const reduced = useReducedMotion();
  const Comp = motion[as];

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Comp
      className={className}
      variants={{
        hidden: { opacity: 0, y, filter: "blur(4px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.72, ease: revealEase },
        },
      }}
    >
      {children}
    </Comp>
  );
}
