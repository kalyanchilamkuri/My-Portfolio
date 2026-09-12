import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { profile, links } from "@/lib/content";
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from "@/components/ui/Icons";
import AgentPipeline from "@/components/AgentPipeline";

const SOCIALS = [
  { label: "GitHub", href: links.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: links.linkedin, Icon: LinkedInIcon },
  { label: "LeetCode", href: links.leetcode, Icon: LeetCodeIcon },
];

/** Staggered entrance without client JS — the resting state is already visible. */
const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-40px)] items-center overflow-hidden pb-20 pt-28 md:pb-28 md:pt-32"
    >
      {/* Ambient depth — large, dim, slow. */}
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute -top-40 left-1/2 -z-10 h-[620px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-[120px] motion-reduce:animate-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(110,107,255,0.16), transparent 70%)",
        }}
      />

      <div className="shell grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16">
        <div className="flex flex-col items-start">
          <span className="rise chip border-line-strong text-text-muted" style={delay(0)}>
            <span className="live-dot size-1.5 rounded-full bg-signal" aria-hidden="true" />
            Open to software engineering roles
          </span>

          <h1
            className="rise mt-7 text-[clamp(2.125rem,1.5rem+2.6vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-white"
            style={delay(60)}
          >
            {profile.name}
          </h1>

          <p
            className="rise mt-5 max-w-xl text-[clamp(1.0625rem,1rem+0.5vw,1.375rem)] leading-[1.45] tracking-[-0.015em] text-text"
            style={delay(120)}
          >
            {profile.positioning}
          </p>

          <p
            className="rise mt-5 max-w-xl text-[15px] leading-[1.7] text-text-muted"
            style={delay(180)}
          >
            Computer Science undergraduate at IIIT Lucknow, graduating May 2027. At{" "}
            <span className="text-text">Sprinklr</span> I build AI agents, LLM
            integrations and backend microservices — including an on-call agent that
            processes 500+ daily alerts and cut mean-time-to-triage by 40%.
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={delay(240)}>
            <a href="#projects" className="btn-primary">
              View projects
              <ArrowDown size={14} aria-hidden="true" />
            </a>
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Resume
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          <div
            className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-7"
            style={delay(300)}
          >
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-mono text-[12px] tracking-wide"
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
            <a
              href={links.email}
              className="link-underline font-mono text-[12px] tracking-wide"
            >
              <Mail size={14} aria-hidden="true" />
              Email
            </a>
          </div>
        </div>

        <div className="rise w-full" style={delay(200)}>
          <AgentPipeline />
        </div>
      </div>
    </section>
  );
}
