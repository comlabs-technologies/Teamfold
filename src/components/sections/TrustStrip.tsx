"use client";

import { motion, useReducedMotion } from "motion/react";
import { trustStrip } from "@/data/site";

const styleMap: Record<string, string> = {
  wide: "tracking-[0.2em] uppercase text-[13px] font-semibold",
  serifish: "tracking-[-0.02em] text-[19px] font-bold",
  tight: "tracking-[-0.045em] text-[19px] font-semibold",
};

export function TrustStrip() {
  const reduced = useReducedMotion();

  return (
    <section className="relative border-y border-[var(--line-soft)] bg-white/70 py-10">
      <div className="pl-shell">
        <p className="pl-eyebrow text-center">{trustStrip.label}</p>

        <ul className="pl-scroll-x mt-7 flex items-center justify-start gap-10 md:justify-between md:gap-6">
          {trustStrip.companies.map((company, index) => (
            <motion.li
              key={company.name}
              className="flex-none text-[var(--ink-muted)] opacity-80"
              initial={reduced ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: reduced ? 0.001 : 0.5,
                delay: reduced ? 0 : index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className={styleMap[company.style] ?? styleMap.tight}>{company.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
