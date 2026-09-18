import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SectionBackdrop from "@/components/ui/SectionBackdrop";
import AgentPipeline from "@/components/AgentPipeline";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionBackdrop delay={2} />
      <div className="shell">
        <SectionHeader
          index="02"
          eyebrow="Experience"
          title="Where I've shipped."
          lede="Production work on the systems that keep a platform observable — and the agents that read them."
        />

        <ol className="flex flex-col">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} delay={i * 0.08}>
              <article className="grid gap-8 border-t border-line pt-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 lg:grid-cols-[180px_minmax(0,1fr)_300px]">
                {/* Meta rail */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[12px] text-text">{job.period}</span>
                  <span className="text-[13px] text-text-faint">{job.location}</span>
                </div>

                <div className="lg:order-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-[21px] font-medium tracking-tight text-white md:text-[24px]">
                      {job.role}
                    </h3>
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-[16px] text-accent hover:text-accent"
                    >
                      {job.company}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </div>
                  <p className="mt-1.5 font-mono text-[12px] uppercase tracking-[0.14em] text-text-faint">
                    {job.team}
                  </p>

                  {/* Metrics — scannable in a glance */}
                  <SpotlightCard as="div" className="mt-7 overflow-hidden rounded-xl">
                    <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
                      {job.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="flex flex-col gap-1 bg-surface-1 px-4 py-4 transition-colors hover:bg-surface-2"
                        >
                          <dt className="sr-only">{metric.label}</dt>
                          <dd className="font-mono text-[22px] leading-none tracking-tight text-white">
                            <CountUp value={metric.value} suffix={metric.suffix} />
                          </dd>
                          <p className="text-[11.5px] leading-tight text-text-faint">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </dl>
                  </SpotlightCard>

                  <ul className="mt-7 flex flex-col gap-4">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3.5">
                        <span
                          aria-hidden="true"
                          className="mt-[9px] size-1 shrink-0 rounded-full bg-text-faint"
                        />
                        <p className="text-[14.5px] leading-[1.7] text-text-muted">
                          {bullet}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-7 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* System architecture: signals in, agent in the middle, structured output out */}
                <div className="md:col-start-2 lg:col-start-3 lg:row-start-1">
                  <AgentPipeline />
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
