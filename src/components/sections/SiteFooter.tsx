import { Link as LinkIcon, Mail } from "lucide-react";
import { BrandMark } from "@/components/ui/BrandMark";
import { brand, CONTACT_EMAIL, footerColumns, footerMeta, LINKEDIN_URL } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[var(--page)] pt-20">
      <div className="pl-shell">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:gap-20">
          <div className="max-w-[320px]">
            <div className="flex items-center gap-2.5 text-[var(--ink)]">
              <BrandMark size={30} />
              <span className="text-[19px] font-semibold tracking-[-0.03em]">{brand.name}</span>
            </div>
            <p className="mt-4 text-[15px] leading-6 text-[var(--ink-muted)]">
              {brand.tagline} {brand.descriptor} for growing teams.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:gap-16">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="pl-label text-[var(--ink)]">{column.title}</h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="inline-flex min-h-[24px] items-center text-[15px] text-[var(--ink-muted)] transition-colors duration-200 hover:text-[var(--ink)]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div>
              <h2 className="pl-label text-[var(--ink)]">{footerMeta.connectTitle}</h2>
              <ul className="mt-4 flex items-center gap-3">
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    aria-label={`Email ${brand.name}`}
                    className="grid size-11 place-items-center rounded-full border border-[var(--line-soft)] bg-white text-[var(--ink)] transition-colors duration-200 hover:bg-[var(--surface-soft)]"
                  >
                    <Mail size={17} aria-hidden="true" />
                  </a>
                </li>
                {/* Shown only once a real profile URL is configured */}
                {LINKEDIN_URL ? (
                  <li>
                    <a
                      href={LINKEDIN_URL}
                      aria-label={`${brand.name} on LinkedIn`}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="grid size-11 place-items-center rounded-full border border-[var(--line-soft)] bg-white text-[var(--ink)] transition-colors duration-200 hover:bg-[var(--surface-soft)]"
                    >
                      <LinkIcon size={17} aria-hidden="true" />
                    </a>
                  </li>
                ) : null}
              </ul>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-4 inline-flex min-h-[24px] items-center text-[14px] text-[var(--ink-muted)] transition-colors duration-200 hover:text-[var(--ink)]"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line-soft)] pt-6">
          <p className="text-[13px] text-[var(--ink-muted)]">
            © {year} {brand.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {footerMeta.legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-flex min-h-[24px] items-center text-[13px] text-[var(--ink-muted)] transition-colors duration-200 hover:text-[var(--ink)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Oversized, cropped brand wordmark */}
      <div className="mt-10 select-none overflow-hidden" aria-hidden="true">
        <span
          className="block whitespace-nowrap text-center text-[clamp(56px,16.5vw,170px)] font-bold leading-[0.82] tracking-[-0.055em] text-[var(--dark)]"
          style={{ marginBottom: "-0.14em" }}
        >
          {brand.wordmark}
        </span>
      </div>
    </footer>
  );
}
