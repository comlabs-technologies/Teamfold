import { Check } from "lucide-react";

type CheckLineProps = {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

/** A single checkmarked statement used across value lists. */
export function CheckLine({ children, tone = "dark", className = "" }: CheckLineProps) {
  return (
    <li className={`flex items-start gap-3 ${className}`}>
      <span
        aria-hidden="true"
        className={`mt-0.5 grid size-5 flex-none place-items-center rounded-full ${
          tone === "dark" ? "bg-[var(--dark)] text-white" : "bg-white/15 text-white"
        }`}
      >
        <Check size={12} strokeWidth={3} />
      </span>
      <span className={tone === "dark" ? "text-[15px] leading-6" : "text-[15px] leading-6 text-white/80"}>
        {children}
      </span>
    </li>
  );
}
