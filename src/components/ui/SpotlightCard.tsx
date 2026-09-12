"use client";

import { useRef, type ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "aside";
};

/**
 * Soft light that follows the pointer across a card.
 * Position is written straight to CSS custom properties — no React state,
 * so moving the mouse never triggers a re-render.
 */
export default function SpotlightCard({
  children,
  className = "",
  as: Component = "div",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = event;

    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${clientX - rect.left}px`);
      el.style.setProperty("--my", `${clientY - rect.top}px`);
    });
  };

  return (
    <Component
      ref={ref as React.Ref<HTMLDivElement & HTMLElement>}
      onPointerMove={handlePointerMove}
      className={`spotlight ${className}`}
    >
      {children}
    </Component>
  );
}
