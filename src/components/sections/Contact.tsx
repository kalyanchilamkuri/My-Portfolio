"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { textVariant, fadeIn, staggerContainer } from "@/lib/motion";

const LinkedinIcon = ({ size = 17, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const SOCIALS = [
  { label: "LinkedIn",   href: "https://www.linkedin.com/in/kalyan-chilamkuri-72a521304/",   icon: LinkedinIcon },
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.08 }}
      className="section-container border-t border-white/5"
      style={{ background: "radial-gradient(circle 600px at 50% 100%, rgba(99,102,241,0.04), transparent 70%)" }}
    >
      <div className="section-inner">
        {/* Title */}
        <div className="section-title-wrapper">
          <motion.p variants={textVariant(0)} className="section-sub-label">Get In Touch</motion.p>
          <motion.h2 variants={textVariant(0.05)} className="section-head">Contact.</motion.h2>
          <motion.p
            variants={fadeIn("up", "spring", 0.1, 0.8)}
            className="font-sans text-slate-400 text-base md:text-lg max-w-xl leading-loose"
          >
            Whether it&apos;s a full-stack opportunity, a collaboration, or just a hello — I&apos;m always happy to connect.
          </motion.p>
        </div>

        {/* Centered layout */}
        <div className="w-full max-w-2xl mx-auto items-start text-left">

          {/* ── Info Panel ── */}
          <motion.div
            variants={fadeIn("up", "spring", 0.15, 0.8)}
            className="glass rounded-2xl border border-white/6 flex flex-col gap-10"
            style={{ padding: '44px 40px' }}
          >
            {/* Tagline */}
            <div className="flex flex-col gap-5">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white leading-snug">
                Let&apos;s build something{" "}
                <span className="text-accent-gradient">extraordinary</span>{" "}
                together.
              </h3>
              <p className="font-sans text-slate-400 text-sm md:text-base leading-loose">
                I&apos;m currently open to SDE roles, freelance collaborations, and research partnerships. Reach out and let&apos;s make it happen.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />

            {/* Contact info blocks */}
            <div className="flex flex-col gap-4">
              {[
                { Icon: Mail,   label: "Email",    value: "kalyanchilamkuri167@gmail.com", href: "mailto:kalyanchilamkuri167@gmail.com" },
                { Icon: MapPin, label: "Location", value: "India 🇮🇳",              href: null },
              ].map(({ Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-5 rounded-xl border border-white/6 hover:border-indigo-500/25 transition-all group"
                  style={{ padding: '18px 20px', background: 'rgba(255,255,255,0.025)' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/18 flex items-center justify-center text-indigo-400 flex-shrink-0 group-hover:scale-105 group-hover:border-indigo-400/35 transition-all">
                    <Icon size={19} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-slate-500">{label}</div>
                    {href ? (
                      <a href={href} className="font-sans text-sm md:text-base text-slate-200 hover:text-white transition-colors font-semibold break-all">{value}</a>
                    ) : (
                      <div className="font-sans text-sm md:text-base text-slate-200 font-semibold">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />

            {/* Socials */}
            <div className="flex flex-col gap-5">
              <p className="font-mono text-[9px] uppercase tracking-widest text-slate-500">Find me on</p>
              <div className="flex gap-3">
                {SOCIALS.map(({ label, href, icon: Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl border border-white/8 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all"
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  >
                    <Icon size={17} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 rounded-xl border border-emerald-500/15 w-fit" style={{ padding: '12px 18px', background: 'rgba(16,185,129,0.04)' }}>
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">Available for opportunities</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}