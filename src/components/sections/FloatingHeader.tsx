"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/ui/BrandMark";
import { ArrowButton } from "@/components/ui/ArrowButton";
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

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
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
          <motion.button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed inset-0 z-40 cursor-default bg-[rgba(35,25,5,0.16)]"
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
        initial={reduced ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduced ? 0.001 : 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          ref={shellRef}
          className="w-full max-w-[1192px] overflow-hidden rounded-[26px] border border-[var(--line-soft)] bg-white md:w-[calc(100%-152px)] md:rounded-[32px]"
          style={{ boxShadow: "0 0 3px rgba(0,0,0,0.16)" }}
          animate={{ height: open ? "auto" : 62 }}
          initial={false}
          transition={{ duration: reduced ? 0.001 : 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Capsule row */}
          <div className="flex h-[62px] items-center justify-between pl-4 pr-2 md:pl-6 md:pr-3">
            <a
              href="#top"
              className="flex items-center gap-2.5 rounded-full py-2 pr-2 text-[var(--ink)]"
              onClick={() => setOpen(false)}
            >
              <BrandMark size={28} title={`${brand.name} home`} />
              <span className="text-[17px] font-semibold tracking-[-0.03em]">
                {brand.name}
              </span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href={primaryCta.href}
                className="pl-btn hidden min-h-[44px] items-center rounded-full bg-[var(--dark)] px-5 text-white transition-colors hover:bg-[#33260c] sm:inline-flex"
                onClick={() => setOpen(false)}
              >
                {primaryCta.label}
              </a>
              <button
                ref={triggerRef}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => (open ? close() : setOpen(true))}
                className="grid size-[46px] place-items-center rounded-[14px] border border-[var(--line-soft)] bg-[var(--surface-soft)] text-[var(--ink)] transition-colors hover:bg-[#f2f1ec] active:scale-[0.98]"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={open ? "close" : "menu"}
                    initial={reduced ? false : { opacity: 0, rotate: -35 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={reduced ? { opacity: 0 } : { opacity: 0, rotate: 35 }}
                    transition={{ duration: reduced ? 0.001 : 0.22 }}
                    className="grid place-items-center"
                  >
                    {open ? <X size={20} /> : <Menu size={20} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Expanded sheet */}
          <AnimatePresence initial={false}>
            {open ? (
              <motion.nav
                id={panelId}
                aria-label="Main"
                className="max-h-[calc(100dvh-120px)] overflow-y-auto border-t border-[var(--line-soft)] px-4 pb-8 pt-6 md:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduced ? 0.001 : 0.25 }}
              >
                <ul className="flex flex-col md:min-h-[220px]">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={reduced ? false : { opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
                      transition={{
                        duration: reduced ? 0.001 : 0.38,
                        delay: reduced ? 0 : 0.06 + index * 0.045,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={close}
                        className="flex min-h-[48px] items-center text-[26px] font-semibold tracking-[-0.035em] text-[var(--ink)] transition-colors hover:text-[var(--orange)] md:text-[30px]"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="mt-6 flex justify-center border-t border-[var(--line-soft)] pt-6"
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: reduced ? 0.001 : 0.4,
                    delay: reduced ? 0 : 0.28,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <ArrowButton
                    href={primaryCta.href}
                    label={primaryCta.label}
                    variant="dark"
                    onClick={close}
                  />
                </motion.div>
              </motion.nav>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </motion.header>
    </>
  );
}
