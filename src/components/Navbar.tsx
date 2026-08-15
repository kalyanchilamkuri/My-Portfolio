"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Overview",  href: "#overview"   },
  { label: "Skills",    href: "#skills"      },
  { label: "Experience", href: "#experience"  },
  { label: "Projects",  href: "#projects"    },
  { label: "Contact",   href: "#contact"     },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#030408]/92 backdrop-blur-xl border-b border-white/6 py-5 shadow-lg shadow-black/30" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-heading font-extrabold text-2xl tracking-tight hover:opacity-90 transition-opacity">
          <span className="text-white">Kalyan</span>
          <span className="text-[#14b8a6]">.dev</span>
        </Link>

        {/* Desktop Nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-mono text-sm uppercase tracking-wider text-slate-400 hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-400 hover:text-white p-1 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav menu drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#090b11] border-b border-white/5"
          >
            <ul className="px-6 py-6 space-y-4 flex flex-col">
              {LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-mono text-sm uppercase tracking-wider text-slate-300 hover:text-white transition-colors py-2"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
