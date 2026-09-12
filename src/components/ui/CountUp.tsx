"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

// useLayoutEffect warns during SSR; the count only matters in the browser.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Counts up to `value` the first time it scrolls into view.
 * The final number is rendered on the server, so it stays correct without
 * JavaScript and for reduced-motion visitors. Frames are written straight to
 * the DOM node rather than through state, so counting never re-renders React.
 */
export default function CountUp({ value, suffix = "", duration = 1000 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const paint = (n: number) => {
      el.textContent = `${n}${suffix}`;
    };
    paint(0);

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          paint(Math.round(easeOut(progress) * value));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      paint(value);
    };
  }, [value, suffix, duration]);

  return (
    <span ref={ref} className="tabular-nums" suppressHydrationWarning>
      {value}
      {suffix}
    </span>
  );
}
