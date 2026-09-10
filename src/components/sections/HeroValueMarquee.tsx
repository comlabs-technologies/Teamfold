import { Check } from "lucide-react";
import { ValueMarquee } from "@/components/illustrations/ValueMarquee";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { valueColumns } from "@/data/site";

export function HeroValueMarquee() {
  return (
    <div className="relative">
      <ValueMarquee />

      <div className="pl-shell">
        <StaggerGroup
          className="mt-14 grid gap-10 border-t border-[var(--line-soft)] pt-12 md:grid-cols-3 md:gap-8"
          stagger={0.09}
        >
          {valueColumns.map((column) => (
            <StaggerItem key={column.title} y={32}>
              <div className="flex flex-col gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-7 place-items-center rounded-full bg-[var(--dark)] text-white"
                >
                  <Check size={14} strokeWidth={3} />
                </span>
                <h3 className="text-[18px] font-semibold leading-6 tracking-[-0.03em]">
                  {column.title}
                </h3>
                <p className="text-[15px] leading-6 text-[var(--ink-muted)]">{column.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </div>
  );
}
