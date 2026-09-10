import { ArrowUpRight } from "lucide-react";

type Variant = "dark" | "light" | "outline";
type Size = "md" | "hero";

const variantClass: Record<Variant, string> = {
  dark: "pl-btn-dark",
  light: "pl-btn-light",
  outline: "pl-btn-outline",
};

export function arrowButtonClass(variant: Variant, size: Size, className = "") {
  return `pl-btn ${variantClass[variant]} ${size === "hero" ? "pl-btn-hero" : ""} ${className}`.trim();
}

/** Label plus the circular arrow surface, shared by links and buttons. */
export function ArrowButtonBody({
  label,
  variant = "dark",
  size = "md",
}: {
  label: string;
  variant?: Variant;
  size?: Size;
}) {
  const dotTone = variant === "dark" ? "pl-arrow-dot--light" : "pl-arrow-dot--dark";
  const dotSize = size === "hero" ? "" : "pl-arrow-dot--sm";

  return (
    <>
      <span className="flex-1 whitespace-nowrap text-left">{label}</span>
      <span className={`pl-arrow-dot ${dotTone} ${dotSize}`} aria-hidden="true">
        <ArrowUpRight size={size === "hero" ? 20 : 17} strokeWidth={2} />
      </span>
    </>
  );
}

type ArrowLinkProps = {
  href: string;
  label: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
};

/** Pill call-to-action rendered as a link. */
export function ArrowButton({
  href,
  label,
  variant = "dark",
  size = "md",
  className = "",
  onClick,
}: ArrowLinkProps) {
  return (
    <a href={href} className={arrowButtonClass(variant, size, className)} onClick={onClick}>
      <ArrowButtonBody label={label} variant={variant} size={size} />
    </a>
  );
}

/** Outlined pill without an arrow surface. */
export function OutlineButton({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <a href={href} className={`pl-btn pl-btn-outline ${className}`}>
      {label}
    </a>
  );
}
