import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { skillGroups, cpProfiles, problemsSolved } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <SectionHeader
          index="04"
          eyebrow="Skills"
          title="The toolkit."
          lede="Technologies I've used to ship production or near-production work — grouped by where they sit in the stack."
        />

        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-20">
          {/* Grouped stack */}
          <dl className="flex flex-col">
            {skillGroups.map((group, i) => (
              <Reveal key={group.group} delay={i * 0.05}>
                <div className="grid gap-3 border-b border-line py-6 first:pt-0 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-6">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-faint sm:pt-1.5">
                    {group.group}
                  </dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li key={item} className="chip">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>

          {/* Competitive programming */}
          <Reveal delay={0.1}>
            <div className="panel p-6 md:p-7">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-faint">
                Competitive programming
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.7] text-text-muted">
                <span className="text-text">{problemsSolved} problems</span> solved
                across three platforms — the habit behind tighter complexity bounds
                in everything above.
              </p>

              <ul className="mt-6 flex flex-col">
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
                      <span className="font-mono text-[13px] text-accent">
                        {cp.title}
                      </span>
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
