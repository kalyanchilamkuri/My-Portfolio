"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";

type DbProject = {
  _id: string;
  title: string;
  description: string;
  techStack?: string[];
  githubLink?: string;
  liveDemoLink?: string;
};

/**
 * Renders projects added through the admin vault (`/api/projects`).
 * Stays invisible when the database is empty or unreachable.
 */
export default function ExtraProjects() {
  const [extra, setExtra] = useState<DbProject[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/projects", { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data)) setExtra(data);
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  if (extra.length === 0) return null;

  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {extra.map((project) => (
        <article key={project._id} className="panel-hover p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[18px] font-medium tracking-tight text-white">
              {project.title}
            </h3>
            <div className="flex shrink-0 items-center gap-2">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip-interactive"
                  aria-label={`${project.title} source code`}
                >
                  <GitHubIcon size={13} />
                  Code
                </a>
              )}
              {project.liveDemoLink && (
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip-interactive"
                  aria-label={`${project.title} live demo`}
                >
                  Live
                  <ArrowUpRight size={12} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          <p className="mt-3 text-[14.5px] leading-[1.7] text-text-muted">
            {project.description}
          </p>

          {project.techStack && project.techStack.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-[11px] text-text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}
