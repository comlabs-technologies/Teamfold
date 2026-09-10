"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { LatticeLineArt } from "@/components/illustrations/LineArt";
import { proofCards, proofSection } from "@/data/site";

const AUTO_ADVANCE = 7000;
const SWIPE_THRESHOLD = 48;

export function SocialProofCarousel() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [perView, setPerView] = useState(1);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const sync = () => setPerView(query.matches ? 2 : 1);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const pageCount = Math.max(1, proofCards.length - perView + 1);
  const safeIndex = Math.min(index, pageCount - 1);

  const go = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex(((next % pageCount) + pageCount) % pageCount);
    },
    [pageCount],
  );

  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setTimeout(() => go(safeIndex + 1, 1), AUTO_ADVANCE);
    return () => window.clearTimeout(id);
  }, [go, paused, reduced, safeIndex]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(safeIndex + 1, 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(safeIndex - 1, -1);
    }
  };

  const visible = proofCards.slice(safeIndex, safeIndex + perView);

  return (
    <section className="pl-section relative overflow-hidden" aria-labelledby="proof-heading">
      <div
        aria-hidden="true"
        className="pl-glow-peach left-1/2 top-1/3 h-[620px] w-[min(1180px,125vw)] -translate-x-1/2 opacity-80"
      />
      <LatticeLineArt className="pointer-events-none absolute -left-24 top-1/4 hidden h-[420px] w-[640px] opacity-70 md:block" />
      <LatticeLineArt className="pointer-events-none absolute -right-28 bottom-8 hidden h-[380px] w-[600px] opacity-50 md:block" />

      <div className="pl-shell relative">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <h2 id="proof-heading" className="pl-h2">
            {proofSection.title}
          </h2>
          <p className="pl-lead mx-auto mt-5 max-w-[560px]">{proofSection.body}</p>
        </Reveal>

        <Reveal delay={0.08} className="mt-14">
          <div
            className="relative"
            role="group"
            aria-roledescription="carousel"
            aria-label="Principles for working with a People partner"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onTouchStart={(event) => {
              touchStart.current = event.touches[0].clientX;
            }}
            onTouchEnd={(event) => {
              if (touchStart.current === null) return;
              const delta = event.changedTouches[0].clientX - touchStart.current;
              if (Math.abs(delta) > SWIPE_THRESHOLD) {
                go(safeIndex + (delta < 0 ? 1 : -1), delta < 0 ? 1 : -1);
              }
              touchStart.current = null;
            }}
          >
            <div className="mx-auto max-w-[760px] overflow-hidden px-1 py-1">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.ul
                  key={safeIndex}
                  className="grid gap-6 lg:grid-cols-2"
                  custom={direction}
                  initial={
                    reduced ? { opacity: 0 } : { opacity: 0, x: direction * 60 }
                  }
                  animate={reduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, x: direction * -60 }}
                  transition={{ duration: reduced ? 0.001 : 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  {visible.map((card) => (
                    <li key={card.id}>
                      <figure className="pl-card flex h-full flex-col p-7 lg:min-h-[355px] lg:w-[320px]">
                        <div className="flex items-center gap-3">
                          <span
                            aria-hidden="true"
                            className="grid size-10 flex-none place-items-center rounded-full text-[12px] font-semibold"
                            style={{ background: card.tone }}
                          >
                            {card.initials}
                          </span>
                          <figcaption className="text-[13px] font-semibold leading-5 text-[var(--ink-muted)]">
                            {card.context}
                          </figcaption>
                        </div>
                        <p className="mt-6 text-[15px] leading-6">{card.statement}</p>
                      </figure>
                    </li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>

            {/* Controls sit outside the cards on desktop */}
            <button
              type="button"
              onClick={() => go(safeIndex - 1, -1)}
              aria-label="Previous"
              className="absolute -left-1 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-[var(--dark)] text-white transition-colors hover:bg-[#3a2b0d] active:scale-[0.98] lg:-left-8"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => go(safeIndex + 1, 1)}
              aria-label="Next"
              className="absolute -right-1 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-[var(--dark)] text-white transition-colors hover:bg-[#3a2b0d] active:scale-[0.98] lg:-right-8"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, dot) => (
              <button
                key={dot}
                type="button"
                aria-label={`Go to slide ${dot + 1}`}
                aria-current={dot === safeIndex}
                onClick={() => go(dot, dot > safeIndex ? 1 : -1)}
                className="grid size-6 place-items-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    dot === safeIndex
                      ? "w-6 bg-[var(--dark)]"
                      : "w-1.5 bg-[rgba(35,25,5,0.22)]"
                  }`}
                />
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
