"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowButton, OutlineButton } from "@/components/ui/ArrowButton";
import { BaselineLineArt } from "@/components/illustrations/LineArt";
import { finalCta } from "@/data/site";

export function FinalCTA() {
  const reduced = useReducedMotion();

  return (
    <section id="contact" className="relative pb-16" aria-labelledby="final-cta-heading">
      <div className="pl-shell">
        <div className="pl-final-cta relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden rounded-[32px] border border-[var(--line-soft)] px-6 py-20 text-center sm:px-12">
          <BaselineLineArt className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] w-full" />

          <motion.div
            className="relative max-w-[640px]"
            initial={reduced ? false : { opacity: 0, y: 36, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduced ? 0.001 : 0.72, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 id="final-cta-heading" className="pl-h2">
              {finalCta.title}
            </h2>
            <p className="pl-lead mx-auto mt-5 max-w-[520px] text-[var(--ink)]/70">
              {finalCta.body}
            </p>
          </motion.div>

          <motion.div
            className="relative mt-10 flex flex-wrap items-center justify-center gap-3"
            initial={reduced ? false : { opacity: 0.25, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reduced ? 0.001 : 0.7,
              delay: reduced ? 0 : 0.16,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <ArrowButton href={finalCta.primary.href} label={finalCta.primary.label} variant="dark" />
            <OutlineButton href={finalCta.secondary.href} label={finalCta.secondary.label} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
