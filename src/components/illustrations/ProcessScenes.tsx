import Image from "next/image";
import { CalendarDays, MessageSquare, TrendingUp, Users } from "lucide-react";
import { editorialImages } from "@/data/images";
import type { ProcessStep } from "@/data/site";

const panelClass =
  "h-full w-full rounded-[16px] border border-[var(--line-soft)] bg-white p-5 sm:p-7";

/** Thin editorial strip that gives a scene a sense of place. */
function SceneMedia({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mt-4 hidden h-16 w-full overflow-hidden rounded-[12px] bg-[var(--surface-soft)] sm:block">
      <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 60vw, 620px" className="object-cover" />
    </div>
  );
}

/** Founder intake form captured on the discovery call. */
function DiscoveryScene() {
  const fields = [
    { label: "Company stage", value: "Series A · 48 people" },
    { label: "Hiring in the next quarter", value: "9 roles across product and sales" },
    { label: "Who owns People today", value: "Founder, part time" },
  ];

  return (
    <div className={panelClass}>
      <header className="flex items-center gap-2">
        <span className="pl-icon-tile size-9" aria-hidden="true">
          <MessageSquare size={16} strokeWidth={1.8} />
        </span>
        <p className="text-[14px] font-semibold">Discovery notes</p>
        <span className="ml-auto rounded-full bg-[var(--peach-light)] px-3 py-1 text-[11px] font-semibold">
          30 min
        </span>
      </header>

      <SceneMedia
        src={editorialImages.recruitmentInterview}
        alt="An interviewer taking notes during a structured hiring conversation"
      />

      <dl className="mt-4 flex flex-col gap-3">
        {fields.map((field) => (
          <div
            key={field.label}
            className="rounded-[12px] border border-[var(--line-soft)] bg-[var(--surface-soft)] px-4 py-3"
          >
            <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--ink-muted)]">
              {field.label}
            </dt>
            <dd className="mt-1 text-[14px] font-medium">{field.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** 90-day roadmap laid out across three phases. */
function PlanScene() {
  const phases = [
    { window: "Days 1–30", items: ["Hiring loop redesign", "Manager expectations"] },
    { window: "Days 31–60", items: ["Onboarding rebuild", "Handbook refresh"] },
    { window: "Days 61–90", items: ["First review cycle", "Leveling draft"] },
  ];

  return (
    <div className={panelClass}>
      <header className="flex items-center gap-2">
        <span className="pl-icon-tile size-9" aria-hidden="true">
          <CalendarDays size={16} strokeWidth={1.8} />
        </span>
        <p className="text-[14px] font-semibold">90-day plan</p>
      </header>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {phases.map((phase, index) => (
          <section
            key={phase.window}
            className="rounded-[12px] border border-[var(--line-soft)] bg-[var(--surface-soft)] p-4"
          >
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="size-2 rounded-full"
                style={{ background: ["#ff8812", "#f5a331", "#fbd6a4"][index] }}
              />
              <p className="text-[12px] font-semibold">{phase.window}</p>
            </div>
            <ul className="mt-3 flex flex-col gap-2">
              {phase.items.map((item) => (
                <li
                  key={item}
                  className="rounded-[8px] bg-white px-3 py-2 text-[12px] leading-4 text-[var(--ink)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

/** Manager coaching workspace with session agenda. */
function ExecutionScene() {
  const sessions = [
    { name: "Weekly one-to-ones", status: "Running", tone: "#ff8812" },
    { name: "Feedback practice", status: "In progress", tone: "#f5a331" },
    { name: "Difficult conversations", status: "Scheduled", tone: "#fbd6a4" },
  ];

  return (
    <div className={panelClass}>
      <header className="flex items-center gap-2">
        <span className="pl-icon-tile size-9" aria-hidden="true">
          <Users size={16} strokeWidth={1.8} />
        </span>
        <p className="text-[14px] font-semibold">Manager coaching</p>
      </header>

      <SceneMedia
        src={editorialImages.managerCoaching}
        alt="A manager being coached through a one-to-one conversation"
      />

      <ul className="mt-4 flex flex-col gap-2.5">
        {sessions.map((session) => (
          <li
            key={session.name}
            className="flex items-center gap-3 rounded-[12px] border border-[var(--line-soft)] bg-[var(--surface-soft)] px-4 py-3"
          >
            <span
              aria-hidden="true"
              className="size-2.5 flex-none rounded-full"
              style={{ background: session.tone }}
            />
            <p className="text-[13px] font-medium">{session.name}</p>
            <span className="ml-auto rounded-full border border-[var(--line-soft)] bg-white px-3 py-1 text-[11px] font-semibold text-[var(--ink-muted)]">
              {session.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Operating-health dashboard: qualitative status, no invented metrics. */
function OptimiseScene() {
  const signals = [
    { label: "Hiring loop", state: "Documented", level: 3 },
    { label: "Review cycle", state: "Ran once", level: 2 },
    { label: "Leveling", state: "Drafted", level: 2 },
    { label: "Handbook", state: "Current", level: 3 },
  ];

  return (
    <div className={panelClass}>
      <header className="flex items-center gap-2">
        <span className="pl-icon-tile size-9" aria-hidden="true">
          <TrendingUp size={16} strokeWidth={1.8} />
        </span>
        <p className="text-[14px] font-semibold">Operating health</p>
      </header>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {signals.map((signal) => (
          <div
            key={signal.label}
            className="rounded-[12px] border border-[var(--line-soft)] bg-[var(--surface-soft)] p-4"
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--ink-muted)]">
              {signal.label}
            </p>
            <p className="mt-1 text-[14px] font-semibold">{signal.state}</p>
            <div className="mt-3 flex gap-1" aria-hidden="true">
              {[0, 1, 2].map((slot) => (
                <span
                  key={slot}
                  className="h-1.5 flex-1 rounded-full"
                  style={{
                    background: slot < signal.level ? "var(--orange)" : "rgba(35,25,5,0.10)",
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const processScenes: Record<ProcessStep["id"], () => React.ReactElement> = {
  discovery: DiscoveryScene,
  plan: PlanScene,
  execution: ExecutionScene,
  optimise: OptimiseScene,
};
