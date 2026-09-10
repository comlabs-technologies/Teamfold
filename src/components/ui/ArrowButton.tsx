import { ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes } from "react";

type ArrowButtonProps = {
  href: string;
  label: string;
  variant?: "dark" | "light" | "outline";
  size?: "md" | "hero";
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

const variantClass = {
  dark: "pl-btn-dark",
  light: "pl-btn-light",
  outline: "pl-btn-outline",
} as const;

/**
 * Pill call-to-action with a circular arrow surface on the right.
 */
export function ArrowButton({
  href,
  label,
  variant = "dark",
  size = "md",
  className = "",
  ...rest
}: ArrowButtonProps) {
  const dotTone = variant === "dark" ? "pl-arrow-dot--light" : "pl-arrow-dot--dark";
  const dotSize = size === "hero" ? "" : "pl-arrow-dot--sm";

  return (
    <a
      href={href}
      className={`pl-btn ${variantClass[variant]} ${size === "hero" ? "pl-btn-hero" : ""} ${className}`}
      {...rest}
    >
      <span className="flex-1 whitespace-nowrap text-left">{label}</span>
      <span className={`pl-arrow-dot ${dotTone} ${dotSize}`} aria-hidden="true">
        <ArrowUpRight size={size === "hero" ? 20 : 17} strokeWidth={2} />
      </span>
    </a>
  );
}

type PlainButtonProps = {
  href: string;
  label: string;
  className?: string;
};

/** Outlined pill without an arrow surface. */
export function OutlineButton({ href, label, className = "" }: PlainButtonProps) {
  return (
    <a href={href} className={`pl-btn pl-btn-outline ${className}`}>
      {label}
    </a>
  );
}
