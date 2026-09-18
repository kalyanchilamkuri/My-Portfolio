import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import SectionBackdrop from "@/components/ui/SectionBackdrop";
import { strengths, interests, education, problemsSolved } from "@/lib/content";

const FACTS = [
  { value: education.cgpa, label: "CGPA at IIIT Lucknow" },
  { value: problemsSolved, label: "Algorithmic problems solved" },
  { value: "May 2027", label: "Graduating" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <SectionBackdrop delay={0} />
      <div className="shell">
        <SectionHeader
          index="01"
          eyebrow="About"
          title="Systems thinking, end to end."
          lede="I like problems where the hard part is the seam between things — an LLM and a production API, an alert stream and a human on call, a data model and the interface built on top of it."
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
          {/* Facts + interests */}
          <div className="flex flex-col gap-10">
            <dl className="flex flex-col">
              {FACTS.map((fact, i) => (
                <Reveal key={fact.label} delay={i * 0.06}>
                  <div className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                    <dt className="text-[13.5px] text-text-muted">{fact.label}</dt>
                    <dd className="font-mono text-[15px] tracking-tight text-text">
                      {fact.value}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={0.18}>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-faint">
                  Currently interested in
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <li key={interest} className="chip">
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Strengths */}
          <ul className="flex flex-col">
            {strengths.map((strength, i) => (
              <Reveal as="li" key={strength.title} delay={i * 0.08}>
                <div className="group flex gap-6 border-b border-line py-7 first:pt-0">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 font-mono text-[11px] text-text-faint transition-colors group-hover:text-accent"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-medium tracking-tight text-text">
                      {strength.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.7] text-text-muted">
                      {strength.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
