type BrandMarkProps = {
  size?: number;
  className?: string;
  title?: string;
};

/**
 * Teamfold mark: two folded layers interlocking around a shared crease.
 * Deliberately simple — one dark plane, one warm plane, one fold line.
 */
export function BrandMark({ size = 28, className = "", title }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="9.25" fill="currentColor" />
      {/* upper layer, folding down to the crease */}
      <path d="M8 13.2 16 8.4l8 4.8-8 3.4-8-3.4Z" fill="#FBD6A4" />
      {/* lower layer, folding up behind it */}
      <path d="M8 18.8 16 23.6l8-4.8-8-3.4-8 3.4Z" fill="#FF8812" />
      {/* the shared crease */}
      <path
        d="M8 16h16"
        stroke="#231905"
        strokeOpacity="0.35"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
