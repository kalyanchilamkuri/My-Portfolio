"use client";

import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "@/lib/motion";
import { Calendar, MapPin, Zap, ArrowUpRight, TrendingDown } from "lucide-react";

const BULLETS = [
  {
    title: "AI-Powered Alert Triage",
    text: "Reduced mean-time-to-triage by 40% and saved 10+ hrs/week of manual debugging by building an AI-powered on-call agent integrating PagerDuty, Grafana, Kibana, and Graylog.",
  },
  {
    title: "Automated RCA Workflows",
    text: "Automated end-to-end workflows from alert ingestion to structured Root Cause Analysis (RCA) generation, improving platform observability and reliability at scale.",
  },
  {
    title: "Model Context Protocol (MCP)",
    text: "Designed and deployed Model Context Protocol (MCP) servers in Python, establishing secure, low-latency bridges between LLM-driven agents and internal APIs.",
  },
];

const METRICS = [
  { val: "40%",  label: "Triage Reduction", color: "text-teal-400",   bg: "bg-teal-500/8",   border: "border-teal-500/15",   icon: TrendingDown },
  { val: "10+",  label: "Hrs/Week Saved",   color: "text-indigo-400", bg: "bg-indigo-500/8", border: "border-indigo-500/15", icon: Zap },
  { val: "500+", label: "Daily Alerts",     color: "text-amber-400",  bg: "bg-amber-500/8",  border: "border-amber-500/15",  icon: ArrowUpRight },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="section-container border-t border-white/5"
    >
      <div className="section-inner">
        {/* Title */}
        <div className="section-title-wrapper">
          <motion.p variants={textVariant(0)} className="section-sub-label">Professional Journey</motion.p>
          <motion.h2 variants={textVariant(0.05)} className="section-head">Experience.</motion.h2>
        </div>

        {/* Main Card */}
        <motion.div
          variants={fadeIn("up", "spring", 0.15, 0.8)}
          className="w-full max-w-3xl"
          whileHover={{ y: -4 }}
        >
          {/* Gradient border wrapper */}
          <div className="glow-card">
            <div className="glow-card-inner flex flex-col gap-12" style={{ padding: '48px 52px' }}>

              {/* Header */}
              <div className="flex flex-col items-center text-center gap-5">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center"
                >
                  <Zap size={28} className="text-indigo-400" />
                </motion.div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white leading-tight">
                    Software Engineering Intern
                  </h3>
                  <a
                    href="https://www.sprinklr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 font-heading text-lg font-semibold text-[#14b8a6] hover:underline transition-all"
                  >
                    Sprinklr <ArrowUpRight size={16} />
                  </a>
                </div>

                <div className="flex flex-wrap justify-center gap-5 text-sm text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-indigo-400" /> March 2026 – August 2026
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-indigo-400" /> Gurugram, Haryana
                  </span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6">
                {METRICS.map(({ val, label, color, bg, border, icon: Icon }) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className={`${bg} border ${border} rounded-2xl flex flex-col items-center gap-2.5`}
                    style={{ padding: '24px 16px' }}
                  >
                    <Icon size={15} className={`${color} mb-0.5`} />
                    <div className={`font-heading text-2xl font-extrabold ${color}`}>{val}</div>
                    <div className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">{label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

              {/* Bullets */}
              <div className="flex flex-col gap-7 text-left">
                {BULLETS.map(({ title, text }, i) => (
                  <motion.div
                    key={title}
                    variants={fadeIn("up", "spring", 0.25 + i * 0.08, 0.6)}
                    className="flex items-start gap-4"
                  >
                    {/* Icon dot */}
                    <div className="flex-shrink-0 mt-1.5 w-6 h-6 rounded-full bg-teal-500/12 border border-teal-500/25 flex items-center justify-center">
                      <span className="text-teal-400 text-[10px] font-bold">{i + 1}</span>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <span className="font-heading text-sm md:text-base font-bold text-white">
                        {title}
                      </span>
                      <p className="font-sans text-slate-400 text-sm md:text-base leading-loose">
                        {text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}