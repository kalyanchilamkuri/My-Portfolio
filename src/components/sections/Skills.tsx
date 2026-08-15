"use client";

import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "@/lib/motion";
import { Code2, Layout, Database, Wrench } from "lucide-react";

const SKILLS = [
  {
    category: "Languages",
    icon: Code2,
    items: ["C++", "Python", "JavaScript", "Java", "C", "SQL", "HTML/CSS"],
  },
  {
    category: "AI & Gen Systems",
    icon: Wrench,
    items: ["LLM Tool Orchestration", "MCP", "RAG", "Prompt Engineering"],
  },
  {
    category: "Backend & Databases",
    icon: Database,
    items: ["Node.js", "Express.js", "Spring Boot", "MongoDB", "MySQL", "PostgreSQL", "REST APIs", "Microservices"],
  },
  {
    category: "Frontend",
    icon: Layout,
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "DevOps & Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Docker", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="section-container border-t border-white/5"
    >
      <div className="section-inner">
        {/* Title */}
        <div className="section-title-wrapper">
          <motion.p variants={textVariant(0)} className="section-sub-label">My Stack</motion.p>
          <motion.h2 variants={textVariant(0.05)} className="section-head">Skills & Competencies.</motion.h2>
        </div>

        {/* Skill Category Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                variants={fadeIn("up", "spring", idx * 0.1, 0.75)}
                className="glass rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-all duration-300"
                style={{ padding: '36px 36px' }}
                whileHover={{ y: -4 }}
              >
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-white">{cat.category}</h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-lg border border-white/6 bg-white/4 font-mono text-xs text-slate-300 hover:text-white hover:border-teal-500/40 hover:bg-teal-500/5 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}