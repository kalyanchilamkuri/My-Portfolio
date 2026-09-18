"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, FileText } from "lucide-react";
import { profile, links, heroTags } from "@/lib/content";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { ParticleHero } from "@/components/ui/animated-hero";

const SOCIALS = [
  { label: "GitHub", href: links.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: links.linkedin, Icon: LinkedInIcon },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [fade, setFade] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = sectionRef.current;
        if (!el) return;
        const t = Math.min(1, Math.max(0, window.scrollY / (el.offsetHeight * 0.85)));
        setFade((prev) => (Math.abs(prev - t) > 0.01 ? t : prev));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <ParticleHero
      ref={sectionRef}
      id="top"
      className="h-[100svh] min-h-[560px]"
      particleCount={13}
    >
      <div
        className="shell absolute inset-0 z-10 flex flex-col justify-end pb-14 pt-[calc(var(--nav-h)+24px)] md:pb-20"
        style={{ opacity: 1 - fade * 1.1 }}
      >
        <div className="rise" style={{ animationDelay: "80ms" }}>
          <h1 className="text-[clamp(2.5rem,1.6rem+4.2vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-[13px] uppercase tracking-[0.22em] text-text-muted md:text-[14px]">
            {profile.role}
          </p>
          <p className="mt-2 font-mono text-[11.5px] uppercase tracking-[0.18em] text-text-faint md:text-[12px]">
            {heroTags.join("  ×  ")}
          </p>
        </div>

        <div
          className="rise mt-8 flex flex-wrap items-center gap-x-8 gap-y-5"
          style={{ animationDelay: "160ms" }}
        >
          <a href="#about" onClick={handleEnter} className="btn-primary">
            Enter portfolio
            <ChevronDown size={14} aria-hidden="true" />
          </a>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-mono text-[12px] tracking-wide"
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-[12px] tracking-wide"
            >
              <FileText size={14} aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-6 z-10 flex justify-center"
        style={{ opacity: 1 - fade * 3 }}
      >
        <ChevronDown size={16} className="animate-bounce text-text-faint" />
      </div>
    </ParticleHero>
  );
}
