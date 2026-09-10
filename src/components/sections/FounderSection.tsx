"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Link as LinkIcon } from "lucide-react";
import { BookingCta } from "@/components/booking/BookingCta";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { aboutSection, founder } from "@/data/site";

/**
 * Credibility in one place: who you work with, how they work, and where.
 */
export function FounderSection() {
  const reduced = useReducedMotion();

  return (
    <section id="about" className="pl-section relative" aria-labelledby="about-heading">
      <div className="pl-shell relative">
        <Reveal className="max-w-[720px]">
          <p className="pl-eyebrow">{aboutSection.eyebrow}</p>
          <h2 id="about-heading" className="pl-h2 mt-4">
            {aboutSection.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16">
          {/* Portrait and introduction */}
          <div>
            <motion.div
              initial={
                reduced
                  ? false
                  : { opacity: 0, y: 16, clipPath: "inset(14% 0% 0% 0% round 20px)" }
              }
              whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 20px)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: reduced ? 0.001 : 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-[var(--surface-soft)]">
                <Image
                  src={founder.image}
                  alt={founder.imageAlt}
                  fill
                  sizes="(max-width: 1023px) 92vw, 420px"
                  className="object-cover object-[center_20%]"
                />
              </div>
            </motion.div>

            <Reveal y={32} className="mt-7">
              <h3 className="text-[22px] font-semibold leading-7 tracking-[-0.03em]">
                {founder.name}
              </h3>
              <p className="mt-1.5 text-[14px] font-semibold text-[var(--ink-muted)]">
                {founder.role}
              </p>
              <p className="mt-4 text-[15px] leading-[25px] text-[var(--ink-muted)]">
                {founder.bio}
              </p>

              {founder.linkedin ? (
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-textlink mt-5"
                >
                  <LinkIcon size={15} aria-hidden="true" />
                  Connect on LinkedIn
                </a>
              ) : null}
            </Reveal>
          </div>

          {/* Working principles */}
          <div className="lg:pt-2">
            <Reveal y={32}>
              <h3 className="text-[15px] font-semibold uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                {aboutSection.principlesTitle}
              </h3>
            </Reveal>

            <StaggerGroup className="mt-7 flex flex-col" stagger={0.09} as="ul">
              {aboutSection.principles.map((principle, index) => (
                <StaggerItem
                  key={principle.title}
                  as="li"
                  y={36}
                  className={`border-t border-[var(--line-soft)] py-7 ${
                    index === aboutSection.principles.length - 1
                      ? "border-b border-[var(--line-soft)]"
                      : ""
                  }`}
                >
                  <h4 className="text-[19px] font-semibold leading-7 tracking-[-0.03em]">
                    {principle.title}
                  </h4>
                  <p className="mt-2 max-w-[52ch] text-[15px] leading-6 text-[var(--ink-muted)]">
                    {principle.body}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <Reveal y={28} delay={0.1} className="mt-8">
              <p className="max-w-[52ch] text-[14px] leading-6 text-[var(--ink-muted)]">
                {aboutSection.coverageNote}
              </p>
              <div className="mt-7">
                <BookingCta label={founder.ctaLabel} variant="dark" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
