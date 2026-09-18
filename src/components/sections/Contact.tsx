import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import SectionBackdrop from "@/components/ui/SectionBackdrop";
import ContactForm from "@/components/ContactForm";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { profile, links } from "@/lib/content";

const CHANNELS = [
  { label: "Email", value: profile.email, href: links.email, Icon: null },
  { label: "LinkedIn", value: "in/kalyan-chilamkuri", href: links.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", value: "@kalyanchilamkuri", href: links.github, Icon: GitHubIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionBackdrop delay={1} />
      <div className="shell">
        <SectionHeader
          index="07"
          eyebrow="Contact"
          title="Let's build something worth shipping."
          lede="I'm open to software engineering roles and collaborations — particularly anything involving agentic systems, backend infrastructure, or hard algorithmic problems."
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
          {/* Direct channels */}
          <Reveal>
            <ul className="flex flex-col">
              {CHANNELS.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center justify-between gap-6 border-b border-line py-5 transition-colors first:border-t"
                  >
                    <div className="flex min-w-0 flex-col gap-1">
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-text-faint">
                        {label}
                      </span>
                      <span className="truncate text-[15px] text-text transition-colors group-hover:text-accent">
                        {value}
                      </span>
                    </div>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-line text-text-faint transition-colors group-hover:border-[var(--accent-line)] group-hover:text-accent">
                      {Icon ? <Icon size={14} /> : <ArrowUpRight size={14} aria-hidden="true" />}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-8 flex items-center gap-2.5 text-[13.5px] text-text-muted">
              <span
                aria-hidden="true"
                className="live-dot size-1.5 rounded-full bg-signal"
              />
              Based in {profile.location} · Open to remote and relocation
            </p>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.08}>
            <div className="panel p-6 md:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
