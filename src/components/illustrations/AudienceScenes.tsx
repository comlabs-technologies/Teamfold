"use client";

import Image from "next/image";
import { PhoneOff, Mic, Video } from "lucide-react";
import { callParticipants, problemPills, processSteps } from "@/data/site";
import { editorialImages } from "@/data/images";

/** Floating problem pills that settle toward level when the card is hovered. */
export function ProblemsScene({ hovered }: { hovered: boolean }) {
  return (
    <div className="relative h-full w-full rounded-[16px] border border-[var(--line-soft)] bg-[var(--surface-soft)] p-5">
      <ul className="flex h-full flex-col justify-center gap-3">
        {problemPills.map((pill) => (
          <li
            key={pill.label}
            className="pl-problem-pill w-fit rounded-full border border-[var(--line-soft)] bg-white px-4 py-2 text-[13px] font-semibold"
            style={{
              transform: `translateX(${hovered ? 0 : pill.offset}px) rotate(${hovered ? 0 : pill.rotate}deg)`,
              boxShadow: "0 0 3px rgba(0,0,0,0.10)",
            }}
          >
            {pill.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Three stacked plan rows joined by a thin orange timeline. */
export function PlanScene() {
  return (
    <div className="relative h-full w-full rounded-[16px] border border-[var(--line-soft)] bg-[var(--surface-soft)] p-5">
      <div className="relative flex h-full flex-col justify-center gap-3 pl-6">
        <span
          aria-hidden="true"
          className="absolute bottom-4 left-[9px] top-4 w-px bg-gradient-to-b from-[var(--orange)] via-[var(--orange-soft)] to-transparent"
        />
        {processSteps.slice(0, 3).map((step, index) => (
          <div
            key={step.id}
            className="relative rounded-[12px] border border-[var(--line-soft)] bg-white px-4 py-3"
            style={{ boxShadow: "0 0 3px rgba(0,0,0,0.08)" }}
          >
            <span
              aria-hidden="true"
              className="absolute -left-[22px] top-1/2 size-[9px] -translate-y-1/2 rounded-full border-2 border-white bg-[var(--orange)]"
            />
            <p className="text-[13px] font-semibold leading-5">{step.title}</p>
            <p className="mt-1 text-[11px] leading-4 text-[var(--ink-muted)]">
              {["Weeks 1–2", "Weeks 3–6", "Weeks 7–12"][index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Miniature video-call composition built from semantic HTML. */
export function CallScene() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[16px] border border-[var(--line-soft)] bg-[var(--dark)]">
      <Image
        src={editorialImages.remoteMeeting}
        alt="A remote discovery call shown on a laptop screen"
        fill
        sizes="(max-width: 768px) 90vw, 360px"
        className="object-cover opacity-90"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[rgba(35,25,5,0.72)] via-[rgba(35,25,5,0.18)] to-transparent"
      />

      <div
        className="absolute left-3 top-3 w-[62%] rounded-[12px] border border-white/15 bg-[rgba(35,25,5,0.62)] p-2.5 backdrop-blur-[2px]"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60">
          In the room
        </p>
        <ul className="mt-2 flex flex-col gap-1.5">
          {callParticipants.map((participant) => (
            <li key={participant.name} className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={`size-1.5 rounded-full ${
                  participant.active ? "bg-[var(--orange)]" : "bg-white/40"
                }`}
              />
              <span className="text-[11px] font-medium leading-4 text-white">
                {participant.name}
              </span>
              <span className="ml-auto text-[10px] text-white/50">{participant.role}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
        <span
          aria-hidden="true"
          className="grid size-8 place-items-center rounded-full bg-white/15 text-white"
        >
          <Mic size={14} />
        </span>
        <span
          aria-hidden="true"
          className="grid size-8 place-items-center rounded-full bg-white/15 text-white"
        >
          <Video size={14} />
        </span>
        <span
          aria-hidden="true"
          className="grid size-8 place-items-center rounded-full bg-[#d8462f] text-white"
        >
          <PhoneOff size={14} />
        </span>
      </div>
    </div>
  );
}
