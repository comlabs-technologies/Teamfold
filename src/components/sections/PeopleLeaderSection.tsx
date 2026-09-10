"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { CheckLine } from "@/components/ui/CheckLine";
import { Reveal } from "@/components/motion/Reveal";
import { leader } from "@/data/site";

export function PeopleLeaderSection() {
  const reduced = useReducedMotion();

  return (
    <section id="leader" className="pl-section relative" aria-labelledby="leader-heading">
      <div className="pl-shell relative">
        <motion.div
          className="mx-auto w-full max-w-[596px]"
          initial={
            reduced
              ? false
              : { opacity: 0, y: 16, clipPath: "inset(18% 0% 0% 0% round 20px)" }
          }
          whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 20px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduced ? 0.001 : 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-[596/660] w-full overflow-hidden rounded-[20px] bg-[var(--surface-soft)]">
            <Image
              src={leader.imageUrl}
              alt={leader.imageAlt}
              fill
              sizes="(max-width: 640px) 92vw, 596px"
              className="object-cover object-[center_22%]"
            />
          </div>
        </motion.div>

        <div className="mx-auto mt-12 max-w-[596px]">
          <Reveal y={40}>
            <p className="pl-eyebrow">{leader.eyebrow}</p>
            <h2 id="leader-heading" className="pl-h2 mt-4">
              {leader.name}
            </h2>
            <p className="mt-2 text-[15px] font-semibold text-[var(--ink-muted)]">{leader.role}</p>
            <p className="pl-lead mt-6">{leader.body}</p>
          </Reveal>

          <Reveal y={36} delay={0.1}>
            <ul className="mt-8 flex flex-col gap-3">
              {leader.credentials.map((credential) => (
                <CheckLine key={credential}>{credential}</CheckLine>
              ))}
            </ul>
          </Reveal>

          <Reveal y={30} delay={0.16} className="mt-9">
            <ArrowButton href={leader.cta.href} label={leader.cta.label} variant="dark" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
