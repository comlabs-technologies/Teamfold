type BrandMarkProps = {
  size?: number;
  className?: string;
  title?: string;
};

/**
 * Original Peoplelayer mark: three stacked "layers" resolving into a
 * rounded aperture — drawn, never imported as an asset.
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
      <path
        d="M9 11.5 16 8l7 3.5-7 3.5-7-3.5Z"
        fill="#FF8812"
        fillOpacity="0.95"
      />
      <path
        d="M9 16.25 16 19.75l7-3.5"
        stroke="#FBD6A4"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 20.75 16 24.25l7-3.5"
        stroke="#F8EADB"
        strokeWidth="1.9"
        strokeOpacity="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
