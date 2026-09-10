"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type CrossfadeStageProps = {
  activeKey: string;
  children: ReactNode;
  className?: string;
};

/**
 * Swaps a scene in a fixed-height container: the outgoing scene blurs
 * and lifts away, the incoming scene rises into focus. Height never changes.
 */
export function CrossfadeStage({ activeKey, children, className }: CrossfadeStageProps) {
  const reduced = useReducedMotion();

  return (
    <div className={className} style={{ position: "relative" }}>
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={activeKey}
          className="absolute inset-0"
          initial={
            reduced
              ? { opacity: 0 }
              : { opacity: 0, y: 10, filter: "blur(4px)" }
          }
          animate={
            reduced
              ? { opacity: 1 }
              : { opacity: 1, y: 0, filter: "blur(0px)" }
          }
          exit={
            reduced
              ? { opacity: 0 }
              : { opacity: 0, y: -8, filter: "blur(4px)" }
          }
          transition={{ duration: reduced ? 0.001 : 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
