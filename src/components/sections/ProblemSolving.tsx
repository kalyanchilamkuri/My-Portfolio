"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { cpProfiles, problemsSolved } from "@/lib/content";

const COLS = 18;
const ROWS = 7;
const CELL_COUNT = COLS * ROWS;

/** Deterministic pseudo-random intensity per cell, stable across renders. */
function cellSeed(i: number) {
  const v = Math.sin(i * 12.9898) * 43758.5453;
  return v - Math.floor(v);
}

function ProblemGrid() {
  const reduceMotion = useReducedMotion();
  const cells = Array.from({ length: CELL_COUNT }, (_, i) => i);

  return (
    <div
      aria-hidden="true"
      className="grid gap-[3px] rounded-xl border border-line bg-surface-1 p-3"
      style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
    >
      {cells.map((i) => {
        const seed = cellSeed(i);
        const lit = seed > 0.4;
        const delay = (i % COLS) * 0.012 + Math.floor(i / COLS) * 0.05;

        if (reduceMotion) {
          return (
            <div
              key={i}
              className="aspect-square rounded-[2px]"
              style={{
                background: lit ? "rgba(122,119,255,0.55)" : "rgba(255,255,255,0.04)",
              }}
            />
          );
        }

        return (
          <motion.div
            key={i}
            className="aspect-square rounded-[2px]"
            initial={{ opacity: 0.06 }}
            whileInView={{
              opacity: lit ? [0.06, 0.9, 0.4 + seed * 0.3] : [0.06, 0.18, 0.1],
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, delay, ease: "easeOut" }}
            style={{
              background: lit ? "rgba(122,119,255,0.6)" : "rgba(255,255,255,0.05)",
            }}
          />
        );
      })}
    </div>
  );
}

export default function ProblemSolving() {
  return (
    <section id="problem-solving" className="section">
      <div className="shell">
        <SectionHeader
          index="04"
          eyebrow="Problem solving"
          title="Algorithms under constraints."
          lede="A running habit, not a one-time push — the tighter complexity bounds that show up in production code."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <ProblemGrid />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-8">
              <div>
                <div className="font-mono text-[13px] uppercase tracking-[0.16em] text-text-faint">
                  Total solved
                </div>
                <div className="mt-2 text-[clamp(2.5rem,2rem+2vw,3.5rem)] font-semibold leading-none tracking-[-0.03em] text-white">
                  {problemsSolved}
                </div>
              </div>

              <ul className="flex flex-col">
                {cpProfiles.map((cp) => (
                  <li key={cp.platform}>
                    <a
                      href={cp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 border-t border-line py-4 transition-colors hover:bg-surface-2"
                    >
                      <div>
                        <div className="flex items-center gap-1.5 text-[14.5px] text-text">
                          {cp.platform}
                          <ArrowUpRight
                            size={13}
                            aria-hidden="true"
                            className="text-text-faint transition-colors group-hover:text-accent"
                          />
                        </div>
                        <div className="mt-0.5 text-[12px] text-text-faint">
                          {cp.ratingLabel} {cp.rating}
                        </div>
                      </div>
                      <span className="font-mono text-[13px] text-accent">{cp.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
