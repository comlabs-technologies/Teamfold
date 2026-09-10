# Peoplelayer

A premium marketing site for **Peoplelayer**, an original fractional People Operations
brand, built natively in Next.js (App Router) with TypeScript, Tailwind CSS v4,
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
    motion/             Reveal, StaggerGroup, CrossfadeStage
    ui/                 ArrowButton, BrandMark, AccordionItem, CheckLine, icons
    illustrations/      RotatingQuote, ValueMarquee, DrawnMap, scenes, line art
    sections/           One file per page section
```

### Rebranding

Every user-facing string is a typed export in `src/data/site.ts`, and every
photograph is referenced through `src/data/images.ts`. Changing the brand name,
navigation, services, process steps, FAQ or footer requires no changes to markup.

Design tokens (colour, gutters, radii, shadows) are CSS variables at the top of
`src/app/globals.css`; Tailwind reads them through the `@theme inline` block.

## Motion

Scroll reveals default to a 60px rise with a light blur over 0.72s on
`cubic-bezier(0.16, 1, 0.3, 1)`. Every animated component consults
`useReducedMotion()`: under `prefers-reduced-motion` all content stays visible,
transforms and blurs are dropped, and the marquee, rotating quote chip,
auto-advancing process steps, carousel auto-play and map drawing all hold still
while remaining fully operable by hand.

## Images

Remote photographs are served through `next/image`. The allowed host is declared
in `next.config.ts`:

```ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "images.pexels.com", pathname: "/photos/**" },
  ],
}
```

Product mockups, icons, the brand mark, the coverage map and all background line
art are hand-authored HTML/CSS/SVG rather than raster assets.
