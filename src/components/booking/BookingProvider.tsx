"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { ContactModal } from "./ContactModal";

type BookingContextValue = {
  openBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be used inside <BookingProvider>");
  return context;
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  /* Bumped on each open so the modal remounts with a clean form. */
  const [instance, setInstance] = useState(0);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const openBooking = useCallback(() => {
    lastTrigger.current = document.activeElement as HTMLElement | null;
    setInstance((value) => value + 1);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    lastTrigger.current?.focus();
  }, []);

  const value = useMemo(() => ({ openBooking }), [openBooking]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      <ContactModal key={instance} open={open} onClose={close} />
    </BookingContext.Provider>
  );
}
