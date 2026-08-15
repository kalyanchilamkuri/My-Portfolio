/* eslint-disable @typescript-eslint/no-explicit-any */
/* ─────────────────────────────────────────────────
   Shared Framer Motion variants
   Ported from reference MyPortfolio-main/src/utils/motion.js
   Used across all sections for consistent scroll animations
   Cast to 'any' for compilation compatibility across Framer Motion versions.
 ───────────────────────────────────────────────── */

export const textVariant = (delay?: number): any => ({
  hidden: { y: -20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: delay ?? 0 } as any,
  },
});

export const fadeIn = (
  direction: "left" | "right" | "up" | "down" | "",
  type: string,
  delay: number,
  duration: number
): any => ({
  hidden: {
    x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type: type as any, delay, duration, ease: "easeOut" } as any,
  },
});

export const zoomIn = (delay: number, duration: number): any => ({
  hidden: { scale: 0.95, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "tween", delay, duration, ease: "easeOut" } as any,
  },
});

export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  type: string,
  delay: number,
  duration: number
): any => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" || direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: { type: type as any, delay, duration, ease: "easeOut" } as any,
  },
});

export const staggerContainer = (
  staggerChildren?: number,
  delayChildren?: number
): any => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerChildren ?? 0,
      delayChildren: delayChildren ?? 0,
    } as any,
  },
});
