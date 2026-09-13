"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import CoreNetworkScene from "./CoreNetworkScene";

/** Pauses the render loop while the tab is hidden, so it never burns cycles in the background. */
function useTabVisible() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const onChange = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
  }, []);
  return visible;
}

type CoreNetworkCanvasProps = {
  scrollRef: React.MutableRefObject<number>;
};

export default function CoreNetworkCanvas({ scrollRef }: CoreNetworkCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const tabVisible = useTabVisible();

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setIsMobile(mobileQuery.matches);
      setReduceMotion(motionQuery.matches);
    };
    update();
    mobileQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);
    return () => {
      mobileQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, isMobile ? 1.4 : 2]}
        camera={{ position: [0, 0, isMobile ? 6.8 : 6.2], fov: 44 }}
        frameloop={tabVisible ? "always" : "never"}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <CoreNetworkScene
          quality={isMobile ? "low" : "high"}
          reduceMotion={reduceMotion}
          scrollRef={scrollRef}
        />
      </Canvas>
    </div>
  );
}
