"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { founderPrompts } from "@/data/site";

const INTERVAL = 4200;

/**
 * The problems founders describe, rotated one at a time above the heading.
 * Pauses when the tab is hidden and holds still under reduced motion.
 */
export function RotatingQuote() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onVisibility = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (reduced || !visible) return;
    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % founderPrompts.length),
      INTERVAL,
    );
    return () => window.clearInterval(id);
  }, [reduced, visible]);

  const active = founderPrompts[index];

  return (
    <div
      className="relative mx-auto flex h-[76px] w-full max-w-[520px] items-start justify-center sm:h-[52px]"
      style={{ perspective: "900px" }}
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.p
          key={active.id}
          className="absolute inset-x-0 top-0 mx-auto flex w-fit max-w-full items-center gap-2.5 rounded-[20px] border border-[var(--line-soft)] bg-white px-4 py-2.5 text-[13px] font-medium leading-5 text-[var(--ink-muted)] sm:rounded-full sm:text-[14px]"
          style={{ boxShadow: "0 0 3px rgba(0,0,0,0.10)", transformStyle: "preserve-3d" }}
          initial={reduced ? { opacity: 0 } : { opacity: 0, rotateX: -40, y: 14 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, rotateX: 0, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, rotateX: 40, y: -14 }}
          transition={{ duration: reduced ? 0.001 : 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            aria-hidden="true"
            className="mt-[7px] size-1.5 flex-none self-start rounded-full bg-[var(--orange)]"
          />
          <span className="text-balance">{active.message}</span>
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
