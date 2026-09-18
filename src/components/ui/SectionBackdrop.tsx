/**
 * Ambient backdrop shared by every section below the hero: a fixed dot-grid
 * plus a slow accent-tinted scanline sweeping top to bottom. Non-interactive
 * and decorative only — sits behind `.shell` content in document order.
 */
export default function SectionBackdrop({ delay = 0 }: { delay?: number }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="scanline absolute inset-x-0 h-64" style={{ animationDelay: `${delay}s` }} />
    </div>
  );
}
