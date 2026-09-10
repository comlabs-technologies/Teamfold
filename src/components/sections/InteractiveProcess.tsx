"use client";

import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CrossfadeStage } from "@/components/motion/CrossfadeStage";
import { Reveal } from "@/components/motion/Reveal";
import { processScenes } from "@/components/illustrations/ProcessScenes";
import { processHeading, processStepDuration, processSteps } from "@/data/site";

export function InteractiveProcess() {
  const reduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);
  const timerRef = useRef<number | null>(null);

  const activate = useCallback((index: number) => {
    setActiveIndex(index);
    setCycle((value) => value + 1);
  }, []);

  useEffect(() => {
    if (reduced || paused) return;
    timerRef.current = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % processSteps.length);
      setCycle((value) => value + 1);
    }, processStepDuration);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [activeIndex, cycle, paused, reduced]);

  const activeStep = processSteps[activeIndex];
  const ActiveScene = processScenes[activeStep.id];

  return (
    <section id="process" className="pl-section relative" aria-labelledby="process-heading">
      <div className="pl-grid-bg pl-grid-fade" aria-hidden="true" />

      <div className="pl-shell relative">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <h2 id="process-heading" className="pl-h2">
            {processHeading.title}
          </h2>
          <p className="pl-lead mx-auto mt-5 max-w-[560px]">{processHeading.body}</p>
        </Reveal>

        <Reveal delay={0.08} className="mt-16">
          <div
            className="grid gap-8 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            {/* Steps */}
            <ol className="flex flex-col gap-2">
              {processSteps.map((step, index) => {
                const isActive = index === activeIndex;
                const StepScene = processScenes[step.id];

                return (
                  <li key={step.id}>
                    <button
                      type="button"
                      onClick={() => activate(index)}
                      aria-current={isActive ? "step" : undefined}
                      className={`relative w-full overflow-hidden rounded-[16px] px-5 text-left transition-colors duration-300 ${
                        isActive
                          ? "border border-[var(--line-soft)] bg-white py-6"
                          : "border border-transparent bg-transparent py-4 hover:bg-white/50"
                      }`}
                    >
                      {isActive && !reduced ? (
                        <motion.span
                          key={`${step.id}-${cycle}`}
                          aria-hidden="true"
                          className="absolute left-0 top-0 h-[2px] bg-[var(--dark)]"
                          initial={{ width: "0%" }}
                          animate={{ width: paused ? undefined : "100%" }}
                          transition={{ duration: processStepDuration / 1000, ease: "linear" }}
                        />
                      ) : null}

                      <div className="flex items-start gap-4">
                        <span
                          aria-hidden="true"
                          className={`grid size-8 flex-none place-items-center rounded-full text-[13px] font-semibold transition-colors duration-300 ${
                            isActive
                              ? "bg-[var(--dark)] text-white"
                              : "bg-[rgba(35,25,5,0.06)] text-[var(--ink-muted)]"
                          }`}
                        >
                          {index + 1}
                        </span>
                        <span className="flex-1">
                          <span className="block text-[17px] font-semibold tracking-[-0.03em]">
                            {step.title}
                          </span>
                          <span className="mt-1 block text-[14px] leading-5 text-[var(--ink-muted)]">
                            {step.body}
                          </span>
                        </span>
                      </div>
                    </button>

                    {/* On mobile the active scene sits directly beneath its row */}
                    {isActive ? (
                      <div className="mt-3 lg:hidden">
                        <div className="h-[320px] rounded-[16px] border border-[var(--line-soft)] bg-[var(--surface-soft)] p-2 sm:h-[420px]">
                          <StepScene />
                        </div>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ol>

            {/* Fixed-height stage */}
            <div className="hidden lg:block">
              <div className="h-[420px] rounded-[20px] border border-[var(--line-soft)] bg-[var(--surface-soft)] p-3">
                <CrossfadeStage activeKey={activeStep.id} className="h-full w-full">
                  <ActiveScene />
                </CrossfadeStage>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
