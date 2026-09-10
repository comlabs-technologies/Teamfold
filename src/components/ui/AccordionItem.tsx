"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";

type AccordionItemProps = {
  question: string;
  answer: string;
};

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const panelId = useId();
  const buttonId = `${panelId}-trigger`;

  return (
    <div
      className={`rounded-[16px] border-b border-[var(--line-soft)] transition-colors duration-200 ${
        open ? "bg-white/70" : "bg-transparent"
      }`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="group flex min-h-[80px] w-full items-center gap-6 px-4 py-5 text-left sm:px-6"
        >
          <span className="flex-1 text-[19px] font-semibold leading-7 tracking-[-0.03em] sm:text-[21px] md:text-[24px] md:leading-8">
            {question}
          </span>
          <span
            aria-hidden="true"
            className="grid size-11 flex-none place-items-center rounded-full bg-[rgba(35,25,5,0.05)] text-[var(--ink)] transition-colors duration-200 group-hover:bg-[rgba(35,25,5,0.09)]"
          >
            {open ? <Minus size={18} /> : <Plus size={18} />}
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0.001 : 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-[760px] px-4 pb-7 text-[15px] leading-6 text-[var(--ink-muted)] sm:px-6 sm:text-[16px]">
              {answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
