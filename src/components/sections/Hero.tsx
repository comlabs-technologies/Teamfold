"use client";

import { motion, useReducedMotion } from "motion/react";
import { Star } from "lucide-react";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { RotatingQuote } from "@/components/illustrations/RotatingQuote";
import { HandArrow } from "@/components/illustrations/HandArrow";
import { hero } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero({ children }: { children?: React.ReactNode }) {
  const reduced = useReducedMotion();

  const step = (order: number) => {
    if (reduced) return { initial: false as const, animate: { opacity: 1 } };
    return {
      initial: { opacity: 0, y: 24, filter: "blur(5px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      transition: { duration: 0.7, delay: 0.15 + order * 0.11, ease: EASE },
    };
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[760px] flex-col overflow-hidden pt-[132px] lg:min-h-[850px] lg:pt-[168px]"
    >
      <div className="pl-grid-bg pl-grid-fade" aria-hidden="true" />

      {/* Warm illumination rising from the base of the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(248,234,219,0) 0%, rgba(251,214,164,0.42) 55%, rgba(245,163,49,0.30) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pl-glow-peach left-1/2 bottom-[-140px] h-[420px] w-[min(1100px,120vw)] -translate-x-1/2"
      />

      <div className="pl-shell relative flex flex-1 flex-col">
        <div className="flex flex-1 flex-col items-center text-center">
          <motion.div className="w-full" {...step(0)}>
            <RotatingQuote />
          </motion.div>

          <motion.h1 className="pl-h1 mt-8 max-w-[860px]" {...step(1)}>
            {hero.headingLines[0]}
            <span className="block">{hero.headingLines[1]}</span>
          </motion.h1>

          <motion.p className="pl-lead mt-6 max-w-[650px]" {...step(2)}>
            {hero.supporting}
          </motion.p>

          <motion.div
            className="relative mt-10 flex flex-col items-center"
            {...step(3)}
          >
            <ArrowButton
              href={hero.cta.href}
              label={hero.cta.label}
              variant="dark"
              size="hero"
            />
            <div className="pointer-events-none absolute left-full top-1/2 hidden -translate-y-6 translate-x-1 items-start gap-1 lg:flex">
              <HandArrow className="-scale-x-100" />
              <span className="mt-6 -rotate-6 text-[14px] font-semibold text-[var(--ink-muted)]">
                {hero.ctaAnnotation}
              </span>
            </div>
            <span className="mt-4 text-[13px] font-semibold text-[var(--ink-muted)] lg:hidden">
              {hero.ctaAnnotation}
            </span>
          </motion.div>

          <motion.div className="mt-12 flex flex-col items-center gap-3" {...step(4)}>
            <div className="flex items-center -space-x-3">
              {hero.avatars.map((avatar) => (
                <span
                  key={avatar.initials}
                  aria-hidden="true"
                  className="grid size-11 place-items-center rounded-full border-2 border-[var(--page)] text-[12px] font-semibold text-[var(--ink)]"
                  style={{ background: avatar.tone }}
                >
                  {avatar.initials}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={15}
                  className="fill-[var(--orange-soft)] text-[var(--orange-soft)]"
                />
              ))}
            </div>
            <p className="max-w-[380px] text-[13px] leading-5 text-[var(--ink-muted)]">
              {hero.trustStatement}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom value ticker arrives last */}
      <motion.div className="relative mt-16 lg:mt-20" {...step(5)}>
        {children}
      </motion.div>
    </section>
  );
}
