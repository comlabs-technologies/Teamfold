import { ArrowButton } from "@/components/ui/ArrowButton";
import { Reveal } from "@/components/motion/Reveal";
import { DrawnMap } from "@/components/illustrations/DrawnMap";
import { coverage } from "@/data/site";

export function CoverageSection() {
  return (
    <section id="coverage" className="pl-section relative" aria-labelledby="coverage-heading">
      <div className="pl-shell relative">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <h2 id="coverage-heading" className="pl-h2">
            {coverage.title}
          </h2>
          <p className="pl-lead mx-auto mt-5 max-w-[560px]">{coverage.body}</p>
        </Reveal>

        <div className="mx-auto mt-14 w-full max-w-[720px]">
          <DrawnMap className="h-auto w-full" />
        </div>

        <Reveal delay={0.1} y={30} className="mt-12 flex justify-center">
          <ArrowButton href={coverage.cta.href} label={coverage.cta.label} variant="dark" />
        </Reveal>
      </div>
    </section>
  );
}
