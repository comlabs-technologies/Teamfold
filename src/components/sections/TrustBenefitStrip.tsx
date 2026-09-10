import { Check } from "lucide-react";
import { ValueMarquee } from "@/components/illustrations/ValueMarquee";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { Reveal } from "@/components/motion/Reveal";
import { trustStrip } from "@/data/site";

/**
 * Process-based credibility: what the engagement actually involves,
 * rather than logos or ratings we cannot evidence.
 */
export function TrustBenefitStrip() {
  return (
    <section className="relative pb-24 lg:pb-28" aria-labelledby="trust-heading">
      <ValueMarquee />

      <div className="pl-shell mt-14">
        <Reveal y={32}>
          <h2
            id="trust-heading"
            className="mx-auto max-w-[560px] text-center text-[20px] font-semibold leading-7 tracking-[-0.03em]"
          >
            {trustStrip.headline}
          </h2>
        </Reveal>

        <StaggerGroup
          className="mt-12 grid gap-10 border-t border-[var(--line-soft)] pt-12 md:grid-cols-3 md:gap-8"
          stagger={0.09}
        >
          {trustStrip.points.map((point) => (
            <StaggerItem key={point.title} y={32}>
              <div className="flex flex-col gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-7 place-items-center rounded-full bg-[var(--dark)] text-white"
                >
                  <Check size={14} strokeWidth={3} />
                </span>
                <h3 className="text-[17px] font-semibold leading-6 tracking-[-0.03em]">
                  {point.title}
                </h3>
                <p className="max-w-[46ch] text-[15px] leading-6 text-[var(--ink-muted)]">
                  {point.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
