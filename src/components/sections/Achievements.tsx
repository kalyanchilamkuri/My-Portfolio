"use client";

import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "@/lib/motion";
import { Award, Trophy, Medal } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "Hack-O-Fiesta 2025 Runner-up",
    date: "IIIT Lucknow",
    desc: "Secured Runner-up out of 100+ competing teams by developing CrowdInfra within a strict 24-hour sprint.",
    color: "from-amber-500/10 to-transparent",
    border: "border-amber-500/15",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: Award,
    title: "Coordinator, Utkrisht Fine Arts",
    date: "Leadership",
    desc: "Managed end-to-end logistics, vendor relations, and on-site operations for cultural exhibitions attended by 500+ participants.",
    color: "from-indigo-500/10 to-transparent",
    border: "border-indigo-500/15",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    icon: Medal,
    title: "Corporate & PR Lead, Equinox",
    date: "Leadership",
    desc: "Spearheaded corporate outreach and secured strategic sponsorships, meaningfully expanding the annual tech fest's operational budget and reach.",
    color: "from-teal-500/10 to-transparent",
    border: "border-teal-500/15",
    iconColor: "text-teal-400",
    iconBg: "bg-teal-500/10 border-teal-500/20",
  },
];

export default function Achievements() {
  return (
    <motion.section
      id="achievements"
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="section-container border-t border-white/5"
    >
      <div className="section-inner">
        {/* Title */}
        <div className="section-title-wrapper">
          <motion.p variants={textVariant(0)} className="section-sub-label">
            Milestones & Accolades
          </motion.p>
          <motion.h2 variants={textVariant(0.05)} className="section-head">
            Achievements.
          </motion.h2>
        </div>

        {/* Achievement Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, index) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.15, 0.75)}
                className={`glass rounded-2xl border ${ach.border} bg-gradient-to-b ${ach.color} hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center gap-6`}
                style={{ padding: '40px 32px' }}
                whileHover={{ y: -6 }}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${ach.iconBg} ${ach.iconColor}`}>
                  <Icon size={28} />
                </div>
                <h3 className="font-heading text-base md:text-lg font-bold text-white leading-snug">
                  {ach.title}
                </h3>
                <div className="font-mono text-[10px] px-3 py-1.5 rounded-full border border-white/8 bg-white/5 text-slate-400 tracking-wider uppercase">
                  {ach.date}
                </div>
                <p className="font-sans text-slate-400 text-sm md:text-base leading-loose">{ach.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}