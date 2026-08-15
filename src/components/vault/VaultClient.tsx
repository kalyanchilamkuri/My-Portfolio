"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import TaskManager from "@/components/vault/TaskManager";
import DocumentHub from "@/components/vault/DocumentHub";
import Link from "next/link";
import { ShieldCheck, LogOut, Terminal as TermIcon } from "lucide-react";

function MovingGridBg() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030408] via-[#090b11] to-[#030408] opacity-98" />
    </div>
  );
}

function Panel({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", delay, 0.7)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function VaultClient() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-100 bg-[#030408]">
      <MovingGridBg />
      
      {/* Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 px-6 md:px-8 pb-12 pt-8 max-w-[1400px] mx-auto">

        {/* Header */}
        <Panel delay={0}>
          <header className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono text-indigo-300 uppercase tracking-widest mb-3">
                <ShieldCheck size={11} className="text-[#14b8a6]" />
                Secure Admin Session
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
                Command Center
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] animate-pulse" />
                ONLINE
              </span>
              <Link
                href="/"
                className="btn-secondary py-2 px-4 text-xs font-semibold flex items-center gap-1.5 hover:border-red-500/30 hover:bg-red-500/5 hover:text-red-400"
              >
                <LogOut size={13} />
                Exit Panel
              </Link>
            </div>
          </header>
        </Panel>

        {/* Status / Welcome Banner */}
        <Panel delay={0.1}>
          <div className="glass mb-8 p-8 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="relative z-10 space-y-2">
              <h2 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                <TermIcon size={16} className="text-[#14b8a6]" />
                System Active
              </h2>
              <p className="font-sans text-sm text-slate-400 max-w-xl leading-relaxed">
                Welcome back. Use this interface to manage database records, dynamic project lists, and handle files. All database operations are authenticated and logged.
              </p>
            </div>
            
            <div className="relative z-10 flex gap-4 text-xs font-mono">
              <div className="px-4 py-2.5 rounded-xl border border-white/5 bg-white/5">
                <div className="text-slate-500 text-[9px] uppercase tracking-wider mb-0.5">Session Node</div>
                <div className="text-white font-semibold">KALYAN-001</div>
              </div>
              <div className="px-4 py-2.5 rounded-xl border border-white/5 bg-white/5">
                <div className="text-slate-500 text-[9px] uppercase tracking-wider mb-0.5">DB Status</div>
                <div className="text-[#14b8a6] font-semibold flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-[#14b8a6]" />
                  CONNECTED
                </div>
              </div>
            </div>
            
            {/* Ambient inner glow */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-indigo-500/5 to-transparent pointer-events-none" />
          </div>
        </Panel>

        <div className="grid grid-cols-1 gap-8">
          {/* Task Manager — full width */}
          <Panel delay={0.2} className="min-h-[500px]">
            <TaskManager />
          </Panel>

          {/* Document Hub — full width */}
          <Panel delay={0.3} className="min-h-[400px]">
            <DocumentHub />
          </Panel>
        </div>

      </div>
    </div>
  );
}
