"use client";

import { motion, useReducedMotion } from "motion/react";
import { useId } from "react";

/**
 * Original, deliberately simplified outline map of the United States,
 * authored by hand as inline SVG — no mapping package, no imported paths.
 * Regions are vertical bands clipped to the silhouette so they highlight
 * in sequence without ever escaping the coastline.
 */

const MAINLAND =
  "M52 64 L214 56 L400 50 L428 70 L455 57 L488 84 L506 72 L517 96 L500 131 L477 167 L463 195 " +
  "L471 214 L487 267 L474 287 L457 261 L446 223 L410 241 L378 251 L350 247 L331 261 L318 287 " +
  "L300 252 L250 250 L230 250 L150 254 L120 266 L96 240 L74 186 L58 140 Z";

const REGION_BANDS = [
  { x: 40, width: 66 },
  { x: 106, width: 78 },
  { x: 184, width: 96 },
  { x: 280, width: 110 },
  { x: 390, width: 140 },
];

const INTERNAL_LINES = [
  "M106 60 L106 262",
  "M184 56 L184 254",
  "M280 52 L280 252",
  "M390 50 L390 248",
  "M52 152 L512 140",
];

const HUBS = [
  { cx: 92, cy: 128 },
  { cx: 176, cy: 96 },
  { cx: 268, cy: 176 },
  { cx: 372, cy: 108 },
  { cx: 468, cy: 122 },
];

export function DrawnMap({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  const clipId = useId().replace(/:/g, "");

  const drawTransition = (delay: number) => ({
    duration: reduced ? 0.001 : 1.5,
    delay: reduced ? 0 : delay,
    ease: [0.16, 1, 0.3, 1] as const,
  });

  return (
    <svg
      viewBox="0 0 560 330"
      fill="none"
      className={className}
      role="img"
      aria-label="Simplified outline map of the United States indicating nationwide coverage"
    >
      <defs>
        <clipPath id={`mainland-${clipId}`}>
          <path d={MAINLAND} />
        </clipPath>
      </defs>

      {/* Region bands, revealed one after another inside the coastline */}
      <g clipPath={`url(#mainland-${clipId})`}>
        <rect x="0" y="0" width="560" height="330" fill="var(--peach-light)" />
        {REGION_BANDS.map((band, index) => (
          <motion.rect
            key={band.x}
            x={band.x}
            y="0"
            width={band.width}
            height="330"
            fill="var(--peach)"
            initial={reduced ? { opacity: 0.45 } : { opacity: 0 }}
            whileInView={{ opacity: 0.45 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reduced ? 0.001 : 0.6,
              delay: reduced ? 0 : 0.5 + index * 0.16,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        ))}
        {INTERNAL_LINES.map((line, index) => (
          <motion.path
            key={line}
            d={line}
            stroke="var(--orange)"
            strokeOpacity="0.35"
            strokeWidth="1"
            initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={drawTransition(0.35 + index * 0.1)}
          />
        ))}
      </g>

      {/* Coastline */}
      <motion.path
        d={MAINLAND}
        stroke="var(--orange)"
        strokeWidth="1.6"
        strokeLinejoin="round"
        initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={drawTransition(0.05)}
      />

      {/* Two outlying groups, kept schematic */}
      <motion.path
        d="M60 288 L92 276 L112 288 L104 308 L70 312 Z"
        fill="var(--peach-light)"
        stroke="var(--orange)"
        strokeWidth="1.4"
        strokeLinejoin="round"
        initial={reduced ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.4 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={drawTransition(1)}
      />
      {[0, 1, 2].map((dot) => (
        <motion.circle
          key={dot}
          cx={152 + dot * 15}
          cy={296 + dot * 9}
          r={4 - dot * 0.6}
          fill="var(--peach)"
          stroke="var(--orange)"
          strokeWidth="1.1"
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduced ? 0.001 : 0.4, delay: reduced ? 0 : 1.2 + dot * 0.1 }}
        />
      ))}

      {/* Hub markers */}
      {HUBS.map((hub, index) => (
        <motion.g
          key={`${hub.cx}-${hub.cy}`}
          initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduced ? 0.001 : 0.45,
            delay: reduced ? 0 : 1.05 + index * 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformOrigin: `${hub.cx}px ${hub.cy}px` }}
        >
          <circle cx={hub.cx} cy={hub.cy} r="7" fill="var(--orange)" fillOpacity="0.16" />
          <circle cx={hub.cx} cy={hub.cy} r="2.6" fill="var(--orange)" />
        </motion.g>
      ))}
    </svg>
  );
}
