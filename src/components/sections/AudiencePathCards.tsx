"use client";

import { useState } from "react";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { BookingCta } from "@/components/booking/BookingCta";
import { Reveal } from "@/components/motion/Reveal";
import { CallScene, PlanScene, ProblemsScene } from "@/components/illustrations/AudienceScenes";
import { audienceHeading, audiencePaths } from "@/data/site";

export function AudiencePathCards() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="start" className="pl-section relative" aria-labelledby="audience-heading">
      <div className="pl-grid-bg pl-grid-fade" aria-hidden="true" />

      <div className="pl-shell relative">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <h2 id="audience-heading" className="pl-h2">
            {audienceHeading.title}
          </h2>
          <p className="pl-lead mx-auto mt-4 max-w-[540px]">{audienceHeading.body}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audiencePaths.map((path, index) => (
            <Reveal key={path.id} delay={index * 0.09} className="h-full">
              <article
                className="pl-card pl-audience-card flex h-full flex-col px-7 py-8 lg:min-h-[520px]"
                onMouseEnter={() => setHoveredId(path.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <h3 className="pl-h3">{path.title}</h3>
                <p className="mt-3 max-w-[46ch] text-[15px] leading-6 text-[var(--ink-muted)]">
                  {path.body}
                </p>

                <div className="mt-6">
                  {path.ctaStyle === "booking" ? (
                    <BookingCta label={path.ctaLabel} variant="dark" />
                  ) : (
                    <ArrowButton
                      href={path.ctaHref ?? "#top"}
                      label={path.ctaLabel}
                      variant="light"
                    />
                  )}
                </div>

                <div className="pl-audience-art mt-8 h-[220px] flex-1 lg:h-auto lg:min-h-[220px]">
                  {path.scene === "problems" ? (
                    <ProblemsScene hovered={hoveredId === path.id} />
                  ) : null}
                  {path.scene === "plan" ? <PlanScene /> : null}
                  {path.scene === "call" ? <CallScene /> : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
