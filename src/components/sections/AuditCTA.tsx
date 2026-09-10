import { ArrowButton } from "@/components/ui/ArrowButton";
import { CheckLine } from "@/components/ui/CheckLine";
import { Reveal } from "@/components/motion/Reveal";
import { PolygonLineArt } from "@/components/illustrations/LineArt";
import { auditCta } from "@/data/site";

export function AuditCTA() {
  return (
    <section className="relative pb-8" aria-labelledby="audit-heading">
      <div className="pl-shell">
        <div className="relative overflow-hidden rounded-[32px] bg-[var(--dark)] px-6 py-16 sm:px-12 lg:px-20 lg:py-24">
          <PolygonLineArt className="pointer-events-none absolute -left-16 top-1/2 h-[420px] w-[420px] -translate-y-1/2 opacity-70" />
          <PolygonLineArt className="pointer-events-none absolute -right-20 top-1/2 hidden h-[460px] w-[460px] -translate-y-1/2 opacity-50 md:block" />

          <div className="relative mx-auto max-w-[640px] text-center">
            <Reveal y={36}>
              <h2 id="audit-heading" className="pl-h2 text-white">
                {auditCta.title}
              </h2>
              <p className="mt-5 text-[17px] leading-[26px] text-white/70">{auditCta.body}</p>
            </Reveal>

            <Reveal y={36} delay={0.1} className="mt-10">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/50">
                {auditCta.outcomesLabel}
              </p>
              <ul className="mx-auto mt-5 flex max-w-[460px] flex-col gap-3 text-left">
                {auditCta.outcomes.map((outcome) => (
                  <CheckLine key={outcome} tone="light">
                    {outcome}
                  </CheckLine>
                ))}
              </ul>
            </Reveal>

            <Reveal y={36} delay={0.18} className="mt-11 flex flex-col items-center gap-4">
              <ArrowButton
                href={auditCta.cta.href}
                label={auditCta.cta.label}
                variant="light"
                size="hero"
              />
              <p className="text-[13px] text-white/50">{auditCta.reassurance}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
