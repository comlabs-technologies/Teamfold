# Teamfold

A marketing site for **Teamfold** — senior People Operations leadership, folded
into your team — built natively in Next.js (App Router) with TypeScript, Tailwind CSS v4,
Motion for React and Lucide icons.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Structure

```
src/
  app/
    layout.tsx          Manrope via next/font, metadata, global styles
    page.tsx            Homepage composition (section order lives here)
    [legal]/page.tsx    Statically generated /privacy and /terms
    globals.css         Design tokens, typography scale, utilities
  data/
    site.ts             All brand copy, navigation, sections, FAQ, footer
    images.ts           The image registry (swap URLs to rebrand)
  components/
    booking/            BookingProvider, BookingCta, ContactModal
    motion/             Reveal, StaggerGroup, CrossfadeStage
    ui/                 ArrowButton, BrandMark, AccordionItem, CheckLine, icons
    illustrations/      RotatingQuote, ValueMarquee, scenes, line art
    sections/           One file per page section
```

### Rebranding

Every user-facing string is a typed export in `src/data/site.ts`, and every
photograph is referenced through `src/data/images.ts`. Changing the brand name,
navigation, services, process steps, FAQ or footer requires no changes to markup.

Three constants at the top of `src/data/site.ts` control the conversion path:

| Constant | Effect |
| --- | --- |
| `BOOKING_URL` | While it is `"#"`, every primary CTA opens the built-in contact modal. Set a real scheduling URL and the same CTAs link straight to it. |
| `CONTACT_EMAIL` | The single source for every `mailto:` link on the site. |
| `LINKEDIN_URL` | `null` hides the LinkedIn icon entirely rather than linking nowhere. |

The contact modal does **not** post anywhere yet — wire a real submission inside
`ContactModal`'s `onSubmit` and keep the existing loading, success and error states.

Design tokens (colour, gutters, radii, shadows) are CSS variables at the top of
`src/app/globals.css`; Tailwind reads them through the `@theme inline` block.

## Motion

Scroll reveals default to a 60px rise with a light blur over 0.72s on
`cubic-bezier(0.16, 1, 0.3, 1)`. Every animated component consults
`useReducedMotion()`: under `prefers-reduced-motion` all content stays visible,
transforms and blurs are dropped, and the marquee, rotating quote chip,
process auto-advance and crossfades all hold still while remaining fully
operable by hand. The process steps also stop advancing permanently once the
reader selects a step themselves.

## Images

Four remote photographs are served through `next/image`, each used exactly once
and requested at a width suited to its largest container. The allowed host is
declared in `next.config.ts`:

```ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "images.pexels.com" },
  ],
}
```

Product mockups, icons, the brand mark and all background line art are
hand-authored HTML/CSS/SVG rather than raster assets.
