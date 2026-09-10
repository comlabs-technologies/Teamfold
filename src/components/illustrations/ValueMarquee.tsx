import { valueStatements } from "@/data/site";

/**
 * Seamless horizontal ticker of outlined value pills.
 * The list is duplicated so the CSS translation loops without a seam.
 */
export function ValueMarquee() {
  const items = [...valueStatements, ...valueStatements];

  return (
    <div className="pl-marquee-mask w-full overflow-hidden py-2">
      <ul className="pl-marquee-track gap-3" aria-hidden="true">
        {items.map((statement, index) => (
          <li
            key={`${statement}-${index}`}
            className="flex-none rounded-full border border-[var(--line)] bg-white/55 px-5 py-2.5 text-[14px] font-semibold whitespace-nowrap text-[var(--ink)]"
          >
            {statement}
          </li>
        ))}
      </ul>
      {/* Accessible, static equivalent of the ticker */}
      <ul className="sr-only">
        {valueStatements.map((statement) => (
          <li key={statement}>{statement}</li>
        ))}
      </ul>
    </div>
  );
}
