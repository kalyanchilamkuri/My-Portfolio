"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "@/lib/motion";
import { ExternalLink, Folder, Plus } from "lucide-react";

interface Project {
  _id?: string;
  title: string;
  description: string;
  tech?: string[];
  techStack?: string[];
  github?: string;
  githubLink?: string;
  demo?: string;
  liveDemoLink?: string;
}

const defaultProjects: Project[] = [
  {
    title: "CrowdInfra",
    description: "Geospatial crowdsourced infrastructure demand-mapping platform with interactive location pinning and automated Google Gemini AI insights. Hack-O-Fiesta Runner-up.",
    tech: ["Next.js", "Node.js", "MongoDB", "Gemini API", "Maps API"],
    github: "https://github.com/kalyanchilamkuri",
  },
  {
    title: "TravelPedia",
    description: "Secure full-stack travel planning application supporting concurrent sessions, RBAC, and real-time data aggregation via 15+ REST endpoints.",
    tech: ["React.js", "Spring Boot", "MySQL", "JWT", "REST API"],
    github: "https://github.com/kalyanchilamkuri",
  },
  {
    title: "AI On-Call Agent (Sprinklr)",
    description: "Designed and deployed an AI agent integrating PagerDuty, Grafana, and Kibana to automate RCA workflows and reduce triage time by 40%.",
    tech: ["Python", "MCP", "LLMs", "Grafana", "Kibana"],
  },
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsAdmin(document.cookie.includes("is_admin=true"));
    fetch("/api/projects")
      .then((r) => r.json())
      .then((data) => {
        if (data?.length) setProjects([...defaultProjects, ...data]);
      })
      .catch(() => {});
  }, []);

  return (
    <motion.section
      id="projects"
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="section-container border-t border-white/5"
    >
      <div className="section-inner">
        {/* Title + Admin Button */}
        <div className="section-title-wrapper">
          <motion.p variants={textVariant(0)} className="section-sub-label">My Works</motion.p>
          <motion.h2 variants={textVariant(0.05)} className="section-head">Projects.</motion.h2>
          {isAdmin && (
            <motion.button
              variants={fadeIn("up", "spring", 0.1, 0.5)}
              className="btn-secondary py-2 px-5 text-xs font-semibold flex items-center gap-1.5 mt-2"
            >
              <Plus size={13} /> Add Project
            </motion.button>
          )}
        </div>

        {/* Project Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const techList = p.tech || p.techStack || [];
            const gitUrl = p.github || p.githubLink;
            const demoUrl = p.demo || p.liveDemoLink;

            return (
              <motion.div
                key={i}
                variants={fadeIn("up", "spring", i * 0.1, 0.75)}
                className="glass rounded-2xl border border-white/5 hover:border-teal-500/25 transition-all duration-300 flex flex-col h-full group"
                style={{ padding: '36px' }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                {/* Top: icon + links */}
                <div className="flex items-start justify-between mb-7">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-[#14b8a6]">
                    <Folder size={18} />
                  </div>
                  <div className="flex gap-2">
                    {gitUrl && (
                      <a
                        href={gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/4 border border-white/6 text-slate-400 hover:text-white hover:border-indigo-500/25 transition-all"
                        aria-label="GitHub Repository"
                      >
                        <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2.2" fill="none">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                      </a>
                    )}
                    {demoUrl && (
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/4 border border-white/6 text-slate-400 hover:text-white hover:border-indigo-500/25 transition-all"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-4">
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#14b8a6] transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="font-sans text-slate-400 text-sm md:text-base leading-loose flex-grow">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {techList.map((t, j) => (
                      <span
                        key={j}
                        className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/8 bg-white/4 text-slate-400 hover:text-teal-400 hover:border-teal-500/25 transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}