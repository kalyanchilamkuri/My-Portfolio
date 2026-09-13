/** Shown while the R3F chunk loads. Same footprint as the canvas so nothing shifts on hydration. */
export default function HeroFallback() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div
        className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[70px]"
        style={{
          background: "radial-gradient(closest-side, rgba(122,119,255,0.35), transparent 70%)",
        }}
      />
    </div>
  );
}
