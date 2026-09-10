"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { rotatingQuotes } from "@/data/site";

const INTERVAL = 3800;

/**
 * A restrained rotating message wheel of short recommendation chips.
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
      () => setIndex((current) => (current + 1) % rotatingQuotes.length),
      INTERVAL,
    );
    return () => window.clearInterval(id);
  }, [reduced, visible]);

  const active = rotatingQuotes[index];

  return (
    <div
      className="relative mx-auto h-[58px] w-full max-w-[430px]"
      style={{ perspective: "900px" }}
      aria-live="off"
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.figure
          key={active.id}
          className="absolute inset-x-0 top-0 mx-auto flex w-fit max-w-full items-center gap-3 rounded-full border border-[var(--line-soft)] bg-white px-4 py-3"
          style={{ boxShadow: "0 0 3px rgba(0,0,0,0.12)", transformStyle: "preserve-3d" }}
          initial={
            reduced
              ? { opacity: 0 }
              : { opacity: 0, rotateX: -48, y: 18 }
          }
          animate={
            reduced ? { opacity: 1 } : { opacity: 1, rotateX: 0, y: 0 }
          }
          exit={reduced ? { opacity: 0 } : { opacity: 0, rotateX: 48, y: -18 }}
          transition={{ duration: reduced ? 0.001 : 0.62, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            aria-hidden="true"
            className="grid size-8 flex-none place-items-center rounded-full text-[11px] font-semibold text-[var(--ink)]"
            style={{ background: active.tone }}
          >
            {active.initials}
          </span>
          <figcaption className="truncate text-[13px] font-medium leading-5 text-[var(--ink-muted)] sm:text-[14px]">
            {active.quote}
          </figcaption>
        </motion.figure>
      </AnimatePresence>
    </div>
  );
}
