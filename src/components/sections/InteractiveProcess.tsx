"use client";

import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { CrossfadeStage } from "@/components/motion/CrossfadeStage";
import { Reveal } from "@/components/motion/Reveal";
import { processScenes } from "@/components/illustrations/ProcessScenes";
import { processHeading, processStepDuration, processSteps } from "@/data/site";

export function InteractiveProcess() {
  const reduced = useReducedMotion();
  const baseId = useId().replace(/:/g, "");
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycle, setCycle] = useState(0);
  /* Automatic progression stops for good once the reader takes control. */
  const [manual, setManual] = useState(false);
  const [paused, setPaused] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const autoRunning = !manual && !reduced && !paused;

  const select = useCallback((index: number, viaKeyboard = false) => {
    setManual(true);
    setActiveIndex(index);
    setCycle((value) => value + 1);
    if (viaKeyboard) tabRefs.current[index]?.focus();
  }, []);

  useEffect(() => {
    if (!autoRunning) return;
    const id = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % processSteps.length);
      setCycle((value) => value + 1);
    }, processStepDuration);
    return () => window.clearTimeout(id);
  }, [activeIndex, cycle, autoRunning]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    const last = processSteps.length - 1;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      select(activeIndex === last ? 0 : activeIndex + 1, true);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      select(activeIndex === 0 ? last : activeIndex - 1, true);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0, true);
    } else if (event.key === "End") {
      event.preventDefault();
      select(last, true);
    }
  };

  const activeStep = processSteps[activeIndex];
  const ActiveScene = processScenes[activeStep.id];
  const panelIds = `${baseId}-panel-desktop ${baseId}-panel-mobile`;

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

        <Reveal delay={0.08} className="mt-14">
          <div
            className="grid gap-8 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Steps */}
            <ol
              role="tablist"
              aria-label="How an engagement runs"
              aria-orientation="vertical"
              className="flex flex-col gap-2"
              onKeyDown={onKeyDown}
            >
              {processSteps.map((step, index) => {
                const isActive = index === activeIndex;
                const StepScene = processScenes[step.id];

                return (
                  <li key={step.id}>
                    <button
                      ref={(node) => {
                        tabRefs.current[index] = node;
                      }}
                      type="button"
                      role="tab"
                      id={`${baseId}-tab-${step.id}`}
                      aria-selected={isActive}
                      aria-controls={panelIds}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => select(index)}
                      className={`relative w-full overflow-hidden rounded-[16px] px-5 text-left transition-colors duration-200 ${
                        isActive
                          ? "border border-[var(--line-soft)] bg-white py-5"
                          : "border border-transparent bg-transparent py-4 hover:bg-white/60"
                      }`}
                    >
                      {isActive && autoRunning ? (
                        <motion.span
                          key={`${step.id}-${cycle}`}
                          aria-hidden="true"
                          className="absolute left-0 top-0 h-[2px] bg-[var(--dark)]"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: processStepDuration / 1000, ease: "linear" }}
                        />
                      ) : null}

                      <span className="flex items-start gap-4">
                        <span
                          aria-hidden="true"
                          className={`grid size-8 flex-none place-items-center rounded-full text-[13px] font-semibold transition-colors duration-200 ${
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
                      </span>
                    </button>

                    {/* On smaller screens the demonstration sits under its own step */}
                    {isActive ? (
                      <div
                        id={`${baseId}-panel-mobile`}
                        role="tabpanel"
                        aria-labelledby={`${baseId}-tab-${step.id}`}
                        className="mt-3 lg:hidden"
                      >
                        <div className="h-[320px] rounded-[16px] border border-[var(--line-soft)] bg-[var(--surface-soft)] p-2 sm:h-[400px]">
                          <StepScene />
                        </div>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ol>

            {/* Fixed-height stage */}
            <div
              id={`${baseId}-panel-desktop`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${activeStep.id}`}
              className="hidden lg:block"
            >
              <div className="h-[404px] rounded-[20px] border border-[var(--line-soft)] bg-[var(--surface-soft)] p-3">
                <CrossfadeStage
                  activeKey={`${activeStep.id}-${cycle}`}
                  className="h-full w-full"
                >
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
