/** Hand-drawn annotation arrow pointing back toward the primary CTA. */
export function HandArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="74"
      height="52"
      viewBox="0 0 74 52"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M69 6c-6.5 9.8-15.2 17.6-25 22.7C36.4 32.6 28 34.7 19.6 34.2c-4-.2-8.3-1.2-11.2-4"
        stroke="var(--ink)"
        strokeOpacity="0.45"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray="0.1 5"
      />
      <path
        d="M8.4 30.2c1 3.6 2.1 7.1 3.4 10.6M8.4 30.2c3.4-.4 6.8-1.1 10.1-2"
        stroke="var(--ink)"
        strokeOpacity="0.45"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
