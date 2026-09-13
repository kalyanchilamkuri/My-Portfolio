import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <SectionHeader
          index="05"
          eyebrow="Skills"
          title="The toolkit."
          lede="Technologies I've used to ship production or near-production work — grouped by where they sit in the stack."
        />

        <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.05} className="h-full">
              <div className="h-full bg-surface-1 p-6 transition-colors hover:bg-surface-2">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-faint">
                  {group.group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
