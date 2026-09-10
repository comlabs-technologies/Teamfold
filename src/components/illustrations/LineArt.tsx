/**
 * Original low-opacity geometric line art. Faceted polygon forms drawn
 * from scratch — used as quiet background structure behind dark panels.
 */
export function PolygonLineArt({
  className = "",
  stroke = "rgba(255,255,255,0.16)",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 520 420"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke={stroke} strokeWidth="1.1" strokeLinejoin="round">
        <path d="M60 350 L120 180 L240 120 L360 170 L430 320 L300 400 L160 396 Z" />
        <path d="M120 180 L300 400" />
        <path d="M240 120 L160 396" />
        <path d="M360 170 L160 396" />
        <path d="M120 180 L430 320" />
        <path d="M240 120 L430 320" />
        <path d="M60 350 L240 120" />
        <circle cx="240" cy="120" r="46" />
        <circle cx="240" cy="120" r="86" />
        <path d="M196 40 L284 40 L330 118 L284 196 L196 196 L150 118 Z" />
      </g>
    </svg>
  );
}

/** A second, lighter arrangement used behind the proof carousel. */
export function LatticeLineArt({
  className = "",
  stroke = "rgba(35,25,5,0.10)",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg viewBox="0 0 640 400" fill="none" className={className} aria-hidden="true">
      <g stroke={stroke} strokeWidth="1.1" strokeLinejoin="round">
        <path d="M40 320 L150 90 L330 40 L520 110 L600 300 L420 380 L190 372 Z" />
        <path d="M150 90 L420 380" />
        <path d="M330 40 L190 372" />
        <path d="M520 110 L190 372" />
        <path d="M150 90 L600 300" />
        <path d="M40 320 L520 110" />
        <ellipse cx="330" cy="200" rx="130" ry="130" />
        <ellipse cx="330" cy="200" rx="72" ry="72" />
      </g>
    </svg>
  );
}

/** Outlined abstract forms that sit along the base of the final CTA panel. */
export function BaselineLineArt({ className = "" }: { className?: string }) {
  const stroke = "rgba(35,25,5,0.20)";
  return (
    <svg viewBox="0 0 1200 220" fill="none" className={className} aria-hidden="true">
      <g stroke={stroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* faceted bird-like form */}
        <path d="M120 190 L168 96 L246 66 L318 108 L296 178 L206 206 Z" />
        <path d="M168 96 L296 178" />
        <path d="M246 66 L206 206" />
        {/* arch cluster */}
        <path d="M430 200 L430 130 A44 44 0 0 1 518 130 L518 200" />
        <path d="M474 200 L474 86" />
        {/* stacked planes */}
        <path d="M640 200 L720 152 L800 200" />
        <path d="M660 168 L720 132 L780 168" />
        <path d="M680 138 L720 114 L760 138" />
        {/* faceted vessel */}
        <path d="M920 200 L900 132 L960 96 L1032 122 L1020 200 Z" />
        <path d="M900 132 L1020 200" />
        <path d="M960 96 L920 200" />
        <circle cx="1108" cy="152" r="42" />
        <path d="M1066 152 L1150 152" />
      </g>
    </svg>
  );
}
