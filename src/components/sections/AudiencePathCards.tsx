"use client";

import { useState } from "react";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Reveal } from "@/components/motion/Reveal";
import { CallScene, PlanScene, ProblemsScene } from "@/components/illustrations/AudienceScenes";
import { audienceHeading, audiencePaths } from "@/data/site";

export function AudiencePathCards() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="pl-section relative" aria-labelledby="audience-heading">
      <div className="pl-grid-bg pl-grid-fade" aria-hidden="true" />

      <div className="pl-shell relative">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <h2 id="audience-heading" className="pl-h2">
            {audienceHeading.title}
          </h2>
          <p className="pl-lead mx-auto mt-5 max-w-[560px]">{audienceHeading.body}</p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audiencePaths.map((path, index) => (
            <Reveal key={path.id} delay={index * 0.1} className="h-full">
              <article
                className="pl-card pl-audience-card flex h-full flex-col px-8 py-10 lg:min-h-[605px]"
                onMouseEnter={() => setHoveredId(path.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <h3 className="pl-h3">{path.title}</h3>
                <p className="mt-4 text-[15px] leading-6 text-[var(--ink-muted)]">{path.body}</p>

                <div className="mt-7">
                  <ArrowButton
                    href={path.cta.href}
                    label={path.cta.label}
                    variant={path.ctaStyle === "dark" ? "dark" : "light"}
                  />
                </div>

                <div className="pl-audience-art mt-10 h-[240px] flex-1 lg:h-auto lg:min-h-[240px]">
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
