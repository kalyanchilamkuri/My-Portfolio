"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { navSections, links, profile } from "@/lib/content";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section: whichever tracked section currently spans the viewport's middle band.
  useEffect(() => {
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const current = navSections.find((s) => visible.has(s.id));
        setActive(current?.id ?? "");
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const section of navSections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled || menuOpen
            ? "border-b border-line bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className={`shell flex items-center justify-between transition-[height] duration-300 ${
            scrolled ? "h-[60px]" : "h-[76px]"
          }`}
        >
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label={`${profile.name} — back to top`}
          >
            <span className="grid size-7 place-items-center rounded-md border border-line-strong bg-surface-2 font-mono text-[13px] font-medium text-text transition-colors group-hover:border-accent">
              K
            </span>
            <span className="hidden text-[14px] font-medium tracking-tight text-text sm:block">
              Kalyan Chilamkuri
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navSections.map((section) => {
              const isActive = active === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-lg px-3 py-2 text-[13.5px] transition-colors ${
                      isActive
                        ? "text-text"
                        : "text-text-faint hover:text-text-muted"
                    }`}
                  >
                    {section.label}
                    {isActive && (
                      <motion.span
                        layoutId={reduceMotion ? undefined : "nav-active"}
                        className="absolute inset-x-3 -bottom-px h-px bg-accent"
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hidden size-9 place-items-center rounded-lg text-text-faint transition-colors hover:bg-surface-2 hover:text-text lg:grid"
            >
              <GitHubIcon size={16} />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hidden size-9 place-items-center rounded-lg text-text-faint transition-colors hover:bg-surface-2 hover:text-text lg:grid"
            >
              <LinkedInIcon size={16} />
            </a>
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 hidden h-9 items-center gap-1.5 rounded-lg border border-line-strong px-3 text-[13px] font-medium text-text transition-colors hover:bg-surface-2 sm:inline-flex"
            >
              <FileText size={13} aria-hidden="true" />
              Resume
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid size-9 place-items-center rounded-lg text-text-muted transition-colors hover:bg-surface-2 hover:text-text md:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
        {scrolled && <ScrollProgress />}
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg pt-[76px] md:hidden"
          >
            <nav aria-label="Mobile" className="shell flex h-full flex-col">
              <ul className="flex flex-col border-t border-line">
                {navSections.map((section) => (
                  <li key={section.id} className="border-b border-line">
                    <a
                      href={`#${section.id}`}
                      onClick={closeMenu}
                      className="flex items-baseline gap-4 py-5 text-[22px] font-medium tracking-tight text-text"
                    >
                      <span className="font-mono text-[11px] text-text-faint">
                        {String(navSections.indexOf(section) + 1).padStart(2, "0")}
                      </span>
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 pb-10 pt-8">
                <a
                  href={links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  <FileText size={14} aria-hidden="true" />
                  Resume
                </a>
                <div className="flex gap-3">
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1"
                  >
                    <GitHubIcon size={15} />
                    GitHub
                  </a>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1"
                  >
                    <LinkedInIcon size={15} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
