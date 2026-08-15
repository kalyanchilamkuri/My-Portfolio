"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={scrollToTop}
          className="scroll-top-btn"
          aria-label="Scroll to top"
          title="Back to top"
        >
          {/* Pulsing outer ring */}
          <span
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              animation: "glow-ring 2.4s ease-in-out infinite",
              borderRadius: "9999px",
            }}
          />
          <ChevronUp
            size={20}
            className="text-indigo-400 group-hover:text-white transition-colors"
            strokeWidth={2.5}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
