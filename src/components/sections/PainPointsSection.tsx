import { ArrowButton, OutlineButton } from "@/components/ui/ArrowButton";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { iconMap } from "@/components/ui/icons";
import { painPoints } from "@/data/site";

export function PainPointsSection() {
  return (
    <section id="problems" className="pl-section relative" aria-labelledby="pain-heading">
      <div className="pl-shell relative">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <h2 id="pain-heading" className="pl-h2">
            {painPoints.title}
          </h2>
          <p className="pl-lead mx-auto mt-5 max-w-[600px]">{painPoints.body}</p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8" stagger={0.1} delay={0.06}>
          {painPoints.items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <StaggerItem key={item.title} y={40}>
                <div className="flex h-full flex-col items-start text-left">
                  <span className="pl-icon-tile size-14" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-6 text-[20px] font-semibold leading-7 tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[42ch] text-[15px] leading-6 text-[var(--ink-muted)]">
                    {item.body}
                  </p>
                  <p className="mt-4 border-t border-[var(--line-soft)] pt-4 text-[14px] font-medium leading-5 text-[var(--ink)]">
                    {item.consequence}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal delay={0.12} y={36} className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <ArrowButton
            href={painPoints.ctas.primaryHref}
            label={painPoints.ctas.primaryLabel}
            variant="dark"
          />
          <OutlineButton
            href={painPoints.ctas.secondaryHref}
            label={painPoints.ctas.secondaryLabel}
          />
        </Reveal>
      </div>
    </section>
  );
}
