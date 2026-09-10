"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/ui/BrandMark";
import { BookingCta, BookingPill } from "@/components/booking/BookingCta";
import { brand, navLinks, primaryCta } from "@/data/site";

export function FloatingHeader() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  /* Escape closes, focus is trapped, background scroll is locked. */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = shellRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;

      const visible = Array.from(focusables).filter(
        (element) => element.offsetParent !== null,
      );
      if (visible.length === 0) return;

      const first = visible[0];
      const last = visible[visible.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <>
      {/* Scrim blocks background interaction while the sheet is open */}
      <AnimatePresence>
        {open ? (
          <motion.div
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-[rgba(35,25,5,0.16)] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0.001 : 0.3 }}
            onClick={close}
          />
        ) : null}
      </AnimatePresence>

      <motion.header
        className="fixed inset-x-0 top-3 z-50 flex justify-center px-4 md:top-6 md:px-0"
        initial={reduced ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduced ? 0.001 : 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          ref={shellRef}
          className="w-full max-w-[1192px] overflow-hidden rounded-[26px] border border-[var(--line-soft)] bg-white md:w-[calc(100%-152px)] md:rounded-[30px] lg:w-[calc(100%-152px)]"
          style={{ boxShadow: "0 0 3px rgba(0,0,0,0.16)" }}
          animate={{ height: open ? "auto" : 60 }}
          initial={false}
          transition={{ duration: reduced ? 0.001 : 0.42, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Capsule row */}
          <div className="flex h-[60px] items-center justify-between pl-4 pr-2 md:pl-5 md:pr-2.5">
            <a
              href="#top"
              className="flex items-center gap-2.5 rounded-full py-2 pr-2 text-[var(--ink)]"
              onClick={() => setOpen(false)}
            >
              <BrandMark size={26} title={`${brand.name} — home`} />
              <span className="text-[17px] font-semibold tracking-[-0.03em]">{brand.name}</span>
            </a>

            {/* Desktop navigation */}
            <nav aria-label="Main" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="pl-navlink">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <BookingPill
                label={primaryCta.label}
                className="pl-btn hidden min-h-[44px] items-center justify-center rounded-full bg-[var(--dark)] px-5 text-white transition-colors duration-200 hover:bg-[#33260c] sm:inline-flex"
                onActivate={() => setOpen(false)}
              />
              <button
                ref={triggerRef}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => (open ? close() : setOpen(true))}
                className="grid size-11 place-items-center rounded-[14px] border border-[var(--line-soft)] bg-[var(--surface-soft)] text-[var(--ink)] transition-colors duration-200 hover:bg-[#f2f1ec] active:scale-[0.97] lg:hidden"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={open ? "close" : "menu"}
                    initial={reduced ? false : { opacity: 0, rotate: -35 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={reduced ? { opacity: 0 } : { opacity: 0, rotate: 35 }}
                    transition={{ duration: reduced ? 0.001 : 0.2 }}
                    className="grid place-items-center"
                  >
                    {open ? <X size={20} /> : <Menu size={20} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Expanded sheet — mobile and tablet only */}
          <AnimatePresence initial={false}>
            {open ? (
              <motion.nav
                id={panelId}
                aria-label="Mobile"
                className="max-h-[calc(100dvh-120px)] overflow-y-auto border-t border-[var(--line-soft)] px-4 pb-7 pt-5 md:px-8 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduced ? 0.001 : 0.22 }}
              >
                <ul className="flex flex-col">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={reduced ? false : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
                      transition={{
                        duration: reduced ? 0.001 : 0.34,
                        delay: reduced ? 0 : 0.05 + index * 0.04,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={close}
                        className="flex min-h-[52px] items-center text-[24px] font-semibold tracking-[-0.035em] text-[var(--ink)] transition-colors duration-200 hover:text-[var(--orange)]"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="mt-5 flex justify-center border-t border-[var(--line-soft)] pt-5"
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: reduced ? 0.001 : 0.36,
                    delay: reduced ? 0 : 0.24,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <BookingCta label={primaryCta.label} variant="dark" onActivate={close} />
                </motion.div>
              </motion.nav>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </motion.header>
    </>
  );
}
