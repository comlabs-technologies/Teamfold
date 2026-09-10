"use client";

import { ArrowButtonBody, arrowButtonClass } from "@/components/ui/ArrowButton";
import { BOOKING_URL, isBookingConfigured } from "@/data/site";
import { useBooking } from "./BookingProvider";

type BookingCtaProps = {
  label: string;
  variant?: "dark" | "light" | "outline";
  size?: "md" | "hero";
  className?: string;
  onActivate?: () => void;
};

/**
 * Every primary booking action on the site routes through here, so the
 * destination is configured in exactly one place. With a real BOOKING_URL
 * it becomes a link; otherwise it opens the local contact modal.
 */
export function BookingCta({
  label,
  variant = "dark",
  size = "md",
  className = "",
  onActivate,
}: BookingCtaProps) {
  const { openBooking } = useBooking();
  const classes = arrowButtonClass(variant, size, className);

  if (isBookingConfigured) {
    return (
      <a
        href={BOOKING_URL}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onActivate}
      >
        <ArrowButtonBody label={label} variant={variant} size={size} />
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={() => {
        onActivate?.();
        openBooking();
      }}
    >
      <ArrowButtonBody label={label} variant={variant} size={size} />
    </button>
  );
}

/** Compact text-only booking control, used inside the navigation capsule. */
export function BookingPill({
  label,
  className = "",
  onActivate,
}: {
  label: string;
  className?: string;
  onActivate?: () => void;
}) {
  const { openBooking } = useBooking();

  if (isBookingConfigured) {
    return (
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onActivate}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onActivate?.();
        openBooking();
      }}
    >
      {label}
    </button>
  );
}
