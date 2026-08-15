"use client";

import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "@/lib/motion";
import { Terminal, Award, Trophy, Code2 } from "lucide-react";

const PLATFORMS = [
  { name: "Codeforces",    rating: "Expert", maxRating: "1722",    icon: Code2,     color: "from-indigo-500/20 to-indigo-500/5",  border: "border-indigo-500/20", href: "https://codeforces.com/profile/anonymous2025" },
  { name: "LeetCode",      rating: "Knight",     maxRating: "1978",    icon: Award,     color: "from-amber-500/15 to-amber-500/5",    border: "border-amber-500/20", href: "https://leetcode.com/u/Jaswanth__167/" },
  { name: "CodeChef",      rating: "4-Star",     maxRating: "1888",    icon: Trophy,    color: "from-teal-500/20 to-teal-500/5",      border: "border-teal-500/20", href: "https://www.codechef.com/users/jaswanth__167" },
];

export default function CompetitiveProgramming() {
  return (
    <motion.section
      id="cp"
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
            Algorithms & Problem Solving
          </motion.p>
          <motion.h2 variants={textVariant(0.05)} className="section-head">
            Competitive Programming.
          </motion.h2>
        </div>

        {/* Platform Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PLATFORMS.map((plat, i) => {
            const Icon = plat.icon;
            return (
              <motion.a
                key={plat.name}
                href={plat.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeIn("up", "spring", i * 0.1, 0.75)}
                className={`relative glass rounded-2xl border ${plat.border} bg-gradient-to-b ${plat.color} hover:scale-[1.03] transition-all duration-300 shadow-sm text-center flex flex-col items-center gap-3`}
                style={{ padding: '32px 28px' }}
                whileHover={{ y: -6 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-white/5 border ${plat.border} flex items-center justify-center text-white/70`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-heading text-sm font-semibold text-slate-200">{plat.name}</h3>
                <div className="text-2xl font-extrabold text-[#14b8a6] font-heading">{plat.rating}</div>
                <div className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                  Peak: {plat.maxRating}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
