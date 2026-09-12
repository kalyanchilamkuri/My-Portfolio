import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { education, achievements, leadership } from "@/lib/content";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="shell">
        <SectionHeader
          index="05"
          eyebrow="Education & recognition"
          title="Background."
        />

        {/* Education */}
        <Reveal>
          <div className="grid gap-6 border-t border-line pt-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[12px] text-text">{education.period}</span>
              <span className="text-[13px] text-text-faint">{education.location}</span>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="text-[21px] font-medium tracking-tight text-white md:text-[24px]">
                  {education.institution}
                </h3>
                <span className="chip">CGPA {education.cgpa}</span>
              </div>
              <p className="mt-1.5 text-[15px] text-text-muted">{education.degree}</p>

              <h4 className="mt-7 font-mono text-[10.5px] uppercase tracking-[0.18em] text-text-faint">
                Relevant coursework
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <li key={course} className="chip">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Achievements + leadership */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.06}>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-faint">
                Achievements
              </h3>
              <ul className="mt-5 flex flex-col">
                {achievements.map((item) => (
                  <li key={item.title} className="border-t border-line py-5">
                    <h4 className="text-[16px] font-medium tracking-tight text-text">
                      {item.title}
                    </h4>
                    <p className="mt-1 font-mono text-[11.5px] text-text-faint">
                      {item.org}
                    </p>
                    <p className="mt-2.5 text-[14px] leading-[1.7] text-text-muted">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-faint">
                Leadership
              </h3>
              <ul className="mt-5 flex flex-col">
                {leadership.map((item) => (
                  <li key={item.org} className="border-t border-line py-5">
                    <h4 className="text-[16px] font-medium tracking-tight text-text">
                      {item.role}
                    </h4>
                    <p className="mt-1 font-mono text-[11.5px] text-text-faint">
                      {item.org}
                    </p>
                    <p className="mt-2.5 text-[14px] leading-[1.7] text-text-muted">
                      {item.body}
                    </p>
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
