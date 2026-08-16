"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "@/lib/motion";
import { ArrowRight, Download, Award, Code2 } from "lucide-react";

/* ─── Lightweight Constellation/Particle Canvas ─── */
function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 12000));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(99, 102, 241, 0.4)"; // Indigo dots
      ctx.strokeStyle = "rgba(99, 102, 241, 0.05)"; // Indigo connecting lines
      ctx.lineWidth = 0.8;

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-0" />;
}

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Background decoration grid / particles */}
      <ConstellationBackground />

      {/* Decorative Blur Spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-teal-500/5 blur-[90px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto w-full px-6 flex flex-col items-center text-center gap-6 md:gap-8">
        
        {/* Subtle top badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/10 bg-indigo-500/5 text-xs font-mono text-indigo-300 uppercase tracking-wider"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] animate-pulse" />
          Software Engineer & Competitive Programmer
        </motion.div>

        {/* Hero Title */}
        <motion.div
          variants={textVariant(0.1)}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white">
            <span className="text-accent-gradient">Kalyan Chilamkuri</span>
          </h1>
        </motion.div>

        {/* Core Subtitle / Description */}
        <motion.p
          variants={fadeIn("up", "spring", 0.3, 0.8)}
          initial="hidden"
          animate="show"
          className="font-sans text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          I am a Computer Science junior at IIIT Lucknow with experience in sprinklr 6 months internship and a strong passion for competitive programming. I have solved over 1000 problems on various platforms, honing my problem-solving skills and algorithmic thinking.
        </motion.p>

        {/* Dynamic Metric Badges - Marquee */}
        <div className="w-full max-w-2xl overflow-hidden relative mt-2">
          {/* Fading edges for the marquee */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            className="flex items-center gap-4 w-max text-xs font-mono text-slate-400"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 shrink-0">
                <span className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 flex items-center gap-1.5">
                  <Code2 size={13} className="text-[#14b8a6]" />
                  1000+ Problems Solved
                </span>
                <span className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 flex items-center gap-1.5">
                  <Award size={13} className="text-[#14b8a6]" />
                  IIIT Lucknow CS Junior
                </span>
                <span className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Sprinklr Intern
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Call to Actions */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.8)}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <a href="#projects" className="btn-primary group w-auto px-10 py-4 rounded-full flex items-center justify-center gap-2">
            View My Projects
            <ArrowRight size={15} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/Kalyan_Chilamkuri_Resume.pdf"
            download
            className="btn-secondary group w-auto px-10 py-4 rounded-full flex items-center justify-center"
          >
            Download Resume
            <Download size={14} className="ml-2 text-slate-400 group-hover:text-white transition-colors" />
          </a>
        </motion.div>

        {/* Social / Profile Links */}
        <motion.div
          variants={fadeIn("up", "spring", 0.6, 0.8)}
          initial="hidden"
          animate="show"
          className="flex items-center gap-6"
        >
          {[
            { label: "GitHub", href: "https://github.com/kalyanchilamkuri" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/kalyan-chilamkuri-72a521304/" },
            { label: "LeetCode", href: "https://leetcode.com/u/Jaswanth__167/" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-white transition-all uppercase tracking-wider"
            >
              {label === "GitHub" && (
                <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-indigo-400 transition-colors"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              )}
              {label === "LinkedIn" && (
                <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-indigo-400 transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              )}
              <span>{label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Decorative Bottom Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <a href="#overview" aria-label="Scroll down" className="flex flex-col items-center">
          <span className="text-[10px] font-mono tracking-widest text-slate-400 mb-1">SCROLL</span>
          <div className="w-5 h-8 rounded-full border border-slate-600 flex justify-center items-start p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-1.5 h-1.5 rounded-full bg-[#14b8a6]"
            />
          </div>
        </a>
      </div>
    </section>
  );
}