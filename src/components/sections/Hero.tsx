"use client";

import { motion, useReducedMotion } from "motion/react";
import { BookingCta } from "@/components/booking/BookingCta";
import { RotatingQuote } from "@/components/illustrations/RotatingQuote";
import { HandArrow } from "@/components/illustrations/HandArrow";
import { hero } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();

  /* Restrained entrance: ≤12px of travel, ≤4px of blur, settling by ~1s. */
  const step = (order: number) => {
    if (reduced) return { initial: false as const, animate: { opacity: 1 } };
    return {
      initial: { opacity: 0, y: 12, filter: "blur(4px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      transition: { duration: 0.6, delay: 0.28 + order * 0.09, ease: EASE },
    };
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[640px] flex-col justify-center overflow-hidden pb-24 pt-[128px] lg:min-h-[760px] lg:pb-28 lg:pt-[164px]"
    >
      <div className="pl-grid-bg pl-grid-fade" aria-hidden="true" />

      {/* Warm illumination rising from the base of the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(248,234,219,0) 0%, rgba(251,214,164,0.40) 55%, rgba(245,163,49,0.26) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pl-glow-peach bottom-[-150px] left-1/2 h-[400px] w-[min(1100px,120vw)] -translate-x-1/2"
      />

      <div className="pl-shell relative">
        <div className="flex flex-col items-center text-center">
          <motion.div className="w-full" {...step(0)}>
            <RotatingQuote />
          </motion.div>

          <motion.h1 className="pl-h1 mt-6 max-w-[900px]" {...step(1)}>
            {hero.headingLines[0]}
            <span className="block">{hero.headingLines[1]}</span>
          </motion.h1>

          <motion.p className="pl-lead mt-6 max-w-[650px]" {...step(2)}>
            {hero.supporting}
          </motion.p>

          <motion.div className="relative mt-10 flex flex-col items-center" {...step(3)}>
            <BookingCta label={hero.ctaLabel} variant="dark" size="hero" />

            <div className="pointer-events-none absolute left-full top-1/2 hidden -translate-y-7 translate-x-1 items-start gap-1 xl:flex">
              <HandArrow className="-scale-x-100" />
              <span className="mt-6 -rotate-6 whitespace-nowrap text-[13px] font-semibold text-[var(--ink-muted)]">
                Free
              </span>
            </div>

            <p className="mt-5 text-[13px] font-medium text-[var(--ink-muted)]">
              {hero.reassurance}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
