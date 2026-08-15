"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "hero",         label: "Home" },
  { id: "overview",     label: "About" },
  { id: "cp",           label: "CP" },
  { id: "experience",   label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "projects",     label: "Projects" },
  { id: "skills",       label: "Skills" },
  { id: "contact",      label: "Contact" },
];

export default function SectionNav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);

      // determine active section
      let current = "hero";
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) current = section.id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="section-scroll-nav"
          aria-label="Section navigation"
        >
          {/* Scroll Mouse Icon at the top */}
          <button
            onClick={() => {
              const currentIndex = SECTIONS.findIndex(s => s.id === active);
              const nextIndex = currentIndex < SECTIONS.length - 1 ? currentIndex + 1 : 0;
              goToSection(SECTIONS[nextIndex].id);
            }}
            title="Scroll down"
            aria-label="Scroll down"
            className="scroll-mouse mb-2"
          >
            <div className="scroll-mouse-dot" />
          </button>

          {/* Vertical line */}
          <div className="w-px h-4 bg-white/10 rounded-full" />

          {/* Section Dots */}
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => goToSection(sec.id)}
              title={sec.label}
              aria-label={`Navigate to ${sec.label}`}
              className="group relative flex items-center justify-end"
              style={{ outline: "none" }}
            >
              {/* Tooltip */}
              <span className="absolute right-7 text-[10px] font-mono text-slate-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-[#0d0f18] border border-white/8 px-2.5 py-1 rounded-md tracking-wider">
                {sec.label}
              </span>

              {/* Dot */}
              <motion.div
                animate={
                  active === sec.id
                    ? { scale: 1.3, backgroundColor: "#14b8a6" }
                    : { scale: 1, backgroundColor: "rgba(255,255,255,0.2)" }
                }
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-2 h-2 rounded-full border border-white/10"
                style={{
                  boxShadow: active === sec.id ? "0 0 8px #14b8a6" : "none",
                }}
              />
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
