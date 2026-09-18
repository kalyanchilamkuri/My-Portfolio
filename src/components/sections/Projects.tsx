import { ArrowUpRight, Trophy } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { GitHubIcon } from "@/components/ui/Icons";
import { projects, type Project } from "@/lib/content";
import ExtraProjects from "@/components/ExtraProjects";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SectionBackdrop from "@/components/ui/SectionBackdrop";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <SpotlightCard as="article" className="panel-hover group overflow-hidden">
      {/* Header */}
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-line px-6 py-5 md:px-8 md:py-6">
        <div className="flex items-baseline gap-4">
          <span
            aria-hidden="true"
            className="font-mono text-[11px] text-text-faint"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-[22px] font-medium tracking-tight text-white md:text-[26px]">
              {project.name}
            </h3>
            <p className="mt-1 text-[14px] text-text-muted">{project.tagline}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="chip-interactive"
              aria-label={`${project.name} source code on GitHub`}
            >
              <GitHubIcon size={13} />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="chip-interactive"
              aria-label={`${project.name} live demo`}
            >
              Live
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          )}
        </div>
      </header>

      <div className="grid gap-8 px-6 py-7 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:gap-12 md:px-8 md:py-8">
        {/* Narrative */}
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-text-faint">
              Problem
            </h4>
            <p className="mt-2 text-[14.5px] leading-[1.7] text-text-muted">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-text-faint">
              What I built
            </h4>
            <p className="mt-2 text-[14.5px] leading-[1.7] text-text">
              {project.build}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-text-faint">
              Engineering
            </h4>
            <ul className="mt-2 flex flex-col gap-2.5">
              {project.engineering.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] size-1 shrink-0 rounded-full bg-text-faint"
                  />
                  <span className="text-[14.5px] leading-[1.7] text-text-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Spec panel */}
        <aside className="flex flex-col gap-5 rounded-xl border border-line bg-surface-2 p-5">
          <div>
            <h4 className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-text-faint">
              Year
            </h4>
            <p className="mt-1.5 font-mono text-[14px] text-text">{project.year}</p>
          </div>

          <div className="h-px bg-line" />

          <div>
            <h4 className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-text-faint">
              Stack
            </h4>
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-line bg-surface-3 px-2 py-1 font-mono text-[11px] text-text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {project.note && (
            <>
              <div className="h-px bg-line" />
              <p className="flex items-center gap-2 text-[12.5px] text-text">
                <Trophy size={13} className="shrink-0 text-accent" aria-hidden="true" />
                {project.note}
              </p>
            </>
          )}
        </aside>
      </div>
    </SpotlightCard>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionBackdrop delay={4} />
      <div className="shell">
        <SectionHeader
          index="03"
          eyebrow="Projects"
          title="Things I've built."
          lede="Two products taken from problem statement to working software — one under a 24-hour deadline, one built for concurrency and access control."
        />

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        <ExtraProjects />
      </div>
    </section>
  );
}
