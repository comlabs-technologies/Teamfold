import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { iconMap } from "@/components/ui/icons";
import { services, servicesHeading } from "@/data/site";

export function ServicesGrid() {
  return (
    <section id="services" className="pl-section relative overflow-x-clip" aria-labelledby="services-heading">
      {/* Broad, soft peach illumination behind the grid */}
      <div
        aria-hidden="true"
        className="pl-glow-peach left-1/2 top-[22%] h-[720px] w-[min(1240px,130vw)] -translate-x-1/2 opacity-70"
      />

      <div className="pl-shell relative">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <h2 id="services-heading" className="pl-h2">
            {servicesHeading.title}
          </h2>
          <p className="pl-lead mx-auto mt-5 max-w-[560px]">{servicesHeading.body}</p>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-2" stagger={0.08} as="ul">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <StaggerItem key={service.id} as="li" y={48}>
                <article className="pl-card pl-service-card flex h-full flex-col px-8 py-10 md:min-h-[348px]">
                  <span className="pl-icon-tile size-12" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <h3 className="pl-h3 mt-7">{service.title}</h3>
                  <p className="mt-4 max-w-[420px] text-[15px] leading-6 text-[var(--ink-muted)]">
                    {service.body}
                  </p>
                  <div className="mt-auto pt-9">
                    <a className="pl-textlink" href="#contact">
                      Learn more
                      <ArrowRight size={15} aria-hidden="true" />
                      <span className="sr-only"> about {service.title}</span>
                    </a>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
