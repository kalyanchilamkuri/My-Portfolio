"use client";

import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "@/lib/motion";

export default function Overview() {
  return (
    <motion.section
      id="overview"
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="section-container border-t border-white/5"
    >
      <div className="section-inner">
        {/* Section Title */}
        <div className="section-title-wrapper">
          <motion.p variants={textVariant(0)} className="section-sub-label">Introduction</motion.p>
          <motion.h2 variants={textVariant(0.05)} className="section-head">Overview.</motion.h2>
        </div>

        {/* Metric Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            { label: "Problems Solved", val: "1000+", sub: "Codeforces, CodeChef & LeetCode" },
            { label: "Academic CGPA",   val: "8.80",   sub: "Computer Science & Engineering" },
            { label: "Triage Time Saved", val: "40%",  sub: "AI-powered agents at Sprinklr" },
          ].map(({ label, val, sub }, i) => (
            <motion.div
              key={label}
              variants={fadeIn("up", "spring", i * 0.15, 0.75)}
              className="glass rounded-2xl border border-white/6 hover:border-indigo-500/25 transition-all duration-300 group text-center flex flex-col items-center gap-4"
              style={{ padding: '36px 24px' }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-4xl md:text-5xl font-extrabold font-heading bg-gradient-to-r from-[#14b8a6] to-indigo-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                {val}
              </div>
              <div className="font-heading text-xs font-bold text-slate-300 uppercase tracking-widest">
                {label}
              </div>
              <div className="font-sans text-xs text-slate-500 leading-relaxed">{sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Divider spacer */}
        <div className="w-full flex items-center gap-6 mb-24 mt-24">
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />    
          <div className="flex-1 h-px bg-linear-to-l from-transparent via-white/8 to-transparent" />
        </div>

        {/* Narrative Card */}
        <motion.div
          variants={fadeIn("up", "spring", 0.35, 0.8)}
          className="glass rounded-2xl border border-white/6 w-full max-w-3xl flex flex-col items-center gap-10 text-center"
          style={{ padding: '56px 52px' }}
        >
          <p className="font-sans text-base md:text-lg text-slate-200 leading-loose font-medium">
            I am a Computer Science junior at IIIT Lucknow with experience building AI agents and microservices at Sprinklr. I specialize in distributed systems, LLM integrations, and full-stack development.
          </p>

          <p className="font-sans text-slate-400 text-sm md:text-base leading-loose">
            Working at the intersection of scalable architectures and intelligent agents — building systems that are robust, observable, and deeply integrated with modern AI protocols.
          </p>

          {/* Highlight block */}
          <div className="w-full p-5 md:p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-center gap-4 bg-indigo-500/5 border-indigo-500/12 text-center">
            <span className="text-2xl flex-shrink-0">⚡</span>
            <p className="font-sans text-sm md:text-base text-indigo-200 leading-loose">
              Reduced mean-time-to-triage by{" "}
              <strong className="text-white font-semibold">40%</strong> and saved{" "}
              <strong className="text-white font-semibold">10+ hrs/week</strong> of manual debugging at{" "}
              <strong className="text-white font-semibold">Sprinklr</strong> by building an AI-powered on-call agent.
            </p>
          </div>

          <p className="font-sans text-slate-400 text-sm md:text-base leading-loose">
            As an elite Competitive Programmer (Knight on LeetCode, Specialist on Codeforces), I apply deep algorithmic problem-solving patterns to optimize execution time and build highly efficient backends.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}