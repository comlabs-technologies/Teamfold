"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import { CONTACT_EMAIL, contactModal } from "@/data/site";

type Status = "idle" | "loading" | "success" | "error";
type Values = { name: string; email: string; company: string; teamSize: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = { name: "", email: "", company: "", teamSize: "", message: "" };

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!values.email.trim()) {
    errors.email = "Please add a work email so we can reply.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "That email address doesn't look right.";
  }
  if (!values.company.trim()) errors.company = "Please add your company name.";
  return errors;
}

const fieldClass =
  "min-h-[48px] w-full rounded-[12px] border border-[var(--line)] bg-white px-4 text-[15px] text-[var(--ink)] transition-colors duration-200 placeholder:text-[var(--ink-muted)]/70 hover:border-[rgba(35,25,5,0.24)] focus-visible:border-[var(--orange)]";

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduced = useReducedMotion();
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  /* The provider remounts this component on each open, so the form always
     starts clean; here we only move focus into the dialog. */
  useEffect(() => {
    if (!open) return;
    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 60);
    return () => window.clearTimeout(focusTimer);
  }, [open]);

  /* Escape closes, focus is trapped, background scroll is locked. */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
  }, [open, onClose]);

  const update = (key: keyof Values) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((current) => ({ ...current, [key]: event.target.value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    /* No endpoint is configured yet, so nothing is transmitted. Wire a real
       submission here (fetch to your API route) and keep the states below. */
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    setStatus("success");
  };

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6">
          <motion.div
            className="absolute inset-0 bg-[rgba(35,25,5,0.32)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0.001 : 0.24 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="relative max-h-[92dvh] w-full max-w-[540px] overflow-y-auto rounded-t-[24px] border border-[var(--line-soft)] bg-[var(--surface)] p-6 sm:rounded-[24px] sm:p-8"
            style={{ boxShadow: "0 0 3px rgba(0,0,0,0.24)" }}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: reduced ? 0.001 : 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-[var(--line-soft)] bg-[var(--surface-soft)] text-[var(--ink)] transition-colors duration-200 hover:bg-[#f2f1ec] active:scale-[0.97]"
            >
              <X size={18} aria-hidden="true" />
            </button>

            {status === "success" ? (
              <div className="py-6 text-center">
                <span
                  aria-hidden="true"
                  className="mx-auto grid size-12 place-items-center rounded-full bg-[var(--peach-light)] text-[var(--ink)]"
                >
                  <Check size={22} strokeWidth={2.2} />
                </span>
                <h2 id={titleId} className="pl-h3 mt-5">
                  {contactModal.successTitle}
                </h2>
                <p id={descriptionId} className="mt-3 text-[15px] leading-6 text-[var(--ink-muted)]">
                  {contactModal.successBody}
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="pl-btn pl-btn-dark mt-6 inline-flex justify-center px-7"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            ) : (
              <>
                <h2 id={titleId} className="pl-h3 pr-12">
                  {contactModal.title}
                </h2>
                <p id={descriptionId} className="mt-3 text-[15px] leading-6 text-[var(--ink-muted)]">
                  {contactModal.body}
                </p>

                <form className="mt-6 flex flex-col gap-4" onSubmit={onSubmit} noValidate>
                  <Field
                    id="cm-name"
                    label={contactModal.fields.name.label}
                    error={errors.name}
                  >
                    <input
                      ref={firstFieldRef}
                      id="cm-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className={fieldClass}
                      placeholder={contactModal.fields.name.placeholder}
                      value={values.name}
                      onChange={update("name")}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "cm-name-error" : undefined}
                    />
                  </Field>

                  <Field
                    id="cm-email"
                    label={contactModal.fields.email.label}
                    error={errors.email}
                  >
                    <input
                      id="cm-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={fieldClass}
                      placeholder={contactModal.fields.email.placeholder}
                      value={values.email}
                      onChange={update("email")}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "cm-email-error" : undefined}
                    />
                  </Field>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      id="cm-company"
                      label={contactModal.fields.company.label}
                      error={errors.company}
                    >
                      <input
                        id="cm-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className={fieldClass}
                        placeholder={contactModal.fields.company.placeholder}
                        value={values.company}
                        onChange={update("company")}
                        aria-invalid={Boolean(errors.company)}
                        aria-describedby={errors.company ? "cm-company-error" : undefined}
                      />
                    </Field>

                    <Field id="cm-team" label={contactModal.fields.teamSize.label}>
                      <select
                        id="cm-team"
                        name="teamSize"
                        className={`${fieldClass} appearance-none`}
                        value={values.teamSize}
                        onChange={update("teamSize")}
                      >
                        <option value="">{contactModal.fields.teamSize.placeholder}</option>
                        {contactModal.teamSizeOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field id="cm-message" label={contactModal.fields.message.label}>
                    <textarea
                      id="cm-message"
                      name="message"
                      rows={3}
                      className={`${fieldClass} resize-y py-3 leading-6`}
                      placeholder={contactModal.fields.message.placeholder}
                      value={values.message}
                      onChange={update("message")}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="pl-btn pl-btn-dark mt-2 justify-center px-7 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === "loading" ? "Sending…" : contactModal.submitLabel}
                  </button>

                  <p aria-live="polite" className="min-h-5 text-[13px] text-[var(--ink-muted)]">
                    {status === "error" && Object.keys(errors).length > 0
                      ? "Please check the highlighted fields."
                      : ""}
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="pl-label">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-[13px] text-[#b1361e]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
