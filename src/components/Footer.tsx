import { ArrowUp } from "lucide-react";
import { profile, links } from "@/lib/content";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";

const FOOTER_LINKS = [
  { label: "GitHub", href: links.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: links.linkedin, Icon: LinkedInIcon },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="shell flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex flex-col gap-1.5">
          <span className="text-[14px] font-medium tracking-tight text-text">
            {profile.name}
          </span>
          <span className="font-mono text-[11.5px] text-text-faint">
            © {new Date().getFullYear()} · Built with Next.js
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {FOOTER_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-[12px]"
            >
              <Icon size={13} />
              {label}
            </a>
          ))}
          <a href={links.email} className="link-underline font-mono text-[12px]">
            {profile.email}
          </a>
          <a
            href="#top"
            className="flex items-center gap-1.5 font-mono text-[12px] text-text-faint transition-colors hover:text-text"
          >
            <ArrowUp size={13} aria-hidden="true" />
            Top
          </a>
        </div>
      </div>

      {/* Final detail: a hairline that fades out from the accent */}
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-[var(--accent-line)] to-transparent opacity-50"
      />
    </footer>
  );
}
