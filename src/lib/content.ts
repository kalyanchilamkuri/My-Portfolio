/**
 * Single source of truth for portfolio content.
 * Every value here is taken from public/Kalyan_Chilamkuri_Resume.pdf.
 * Nothing may be added that is not backed by that document.
 */

export const SITE_URL = "https://kalyanchilamkuri.dev";

export const profile = {
  name: "Kalyan Chilamkuri",
  role: "Software Engineer",
  email: "kalyanchilamkuri1670808@gmail.com",
  location: "India",
  university: "IIIT Lucknow",
  positioning:
    "I build agentic AI systems and the backend infrastructure they run on.",
  summary:
    "Computer Science undergraduate at IIIT Lucknow, graduating May 2027. At Sprinklr I build AI agents, LLM integrations and backend microservices — including agentic workflows that process 500+ daily alerts and cut mean-time-to-triage by 40%.",
} as const;

export const links = {
  github: "https://github.com/kalyanchilamkuri",
  linkedin: "https://www.linkedin.com/in/kalyan-chilamkuri-72a521304/",
  leetcode: "https://leetcode.com/u/Jaswanth__167/",
  codeforces: "https://codeforces.com/profile/anonymous2025",
  codechef: "https://www.codechef.com/users/jaswanth__167",
  email: "mailto:kalyanchilamkuri1670808@gmail.com",
  resume: "/Kalyan_Chilamkuri_Resume.pdf",
} as const;

/* ── About ───────────────────────────────────────────────── */

export const strengths = [
  {
    title: "Agentic AI systems",
    body: "LLM integration and tool orchestration over real production surfaces — Model Context Protocol servers connecting agents to internal APIs for low-latency tool execution.",
  },
  {
    title: "Backend & distributed systems",
    body: "Backend services, REST API design and microservices, plus the observability pipelines that turn raw alert streams into structured, actionable output.",
  },
  {
    title: "Algorithms under constraints",
    body: "1000+ problems solved across Codeforces, LeetCode and CodeChef. The habit that shows up as tighter complexity bounds in production code.",
  },
] as const;

export const interests = [
  "Distributed systems",
  "LLM integrations",
  "Agentic workflows",
  "Observability",
] as const;

/* ── Experience ──────────────────────────────────────────── */

export const experience = [
  {
    company: "Sprinklr",
    companyUrl: "https://www.sprinklr.com",
    role: "Software Engineering Intern",
    team: "Agentic AI & Platform Reliability",
    period: "Mar 2026 — Aug 2026",
    location: "Gurugram, Haryana",
    metrics: [
      { value: 40, suffix: "%", label: "Lower time-to-triage" },
      { value: 10, suffix: "+", label: "Hrs/week saved" },
      { value: 500, suffix: "+", label: "Daily alerts processed" },
    ],
    bullets: [
      "Built and deployed an AI-powered on-call agent integrating PagerDuty, Grafana, Kibana and Graylog to process 500+ daily alerts, reducing mean-time-to-triage by 40% and saving 10+ hrs/week of manual debugging.",
      "Engineered end-to-end agentic workflows for alert ingestion, investigation, tool execution and structured Root Cause Analysis generation, improving observability and operational reliability across internal microservices.",
      "Designed and deployed Model Context Protocol (MCP) servers in Python to connect LLM-driven agents with internal APIs, enabling low-latency tool execution and automated operational workflows.",
    ],
    stack: ["Python", "MCP", "LLMs", "PagerDuty", "Grafana", "Kibana", "Graylog"],
  },
] as const;

/* ── Projects ────────────────────────────────────────────── */

export type Project = {
  name: string;
  year: string;
  tagline: string;
  problem: string;
  build: string;
  engineering: readonly string[];
  stack: readonly string[];
  repo?: string;
  demo?: string;
  note?: string;
};

export const projects: readonly Project[] = [
  {
    name: "CrowdInfra",
    year: "2025",
    tagline: "Community-driven infrastructure mapping",
    problem:
      "Deciding where a business or public facility should exist usually means slow, manual market research — and it rarely captures what a neighbourhood actually asks for.",
    build:
      "A platform where people pin and upvote the local infrastructure they need, built end-to-end in a 24-hour hackathon. Runner-up out of 100+ teams at Hack-O-Fiesta 2025.",
    engineering: [
      "Backend services, database workflows and API integrations in Node.js, Express.js and MongoDB, keeping data flow reliable between frontend and backend.",
      "Google Gemini API analyses local market competition to generate data-driven profitability insights.",
      "Google Maps API drives location-based demand mapping across pinned requests.",
    ],
    stack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "Maps API"],
    repo: "https://github.com/TanishqAswar/CrowdInfra",
    demo: "https://infra-crowd.vercel.app/landing",
    note: "Hack-O-Fiesta 2025 — Runner-up",
  },
  {
    name: "TravelPedia",
    year: "2024",
    tagline: "Unified full-stack travel planning",
    problem:
      "Travel planning spans destinations, hotels, flights and activities across disconnected sources, each with its own access model and data shape.",
    build:
      "A full-stack application that brings all four into a single authenticated platform users can search from one place.",
    engineering: [
      "React.js front end over a Spring Boot and MySQL backend serving unified search.",
      "JWT-based authentication with role-based access control securing user access and application resources.",
    ],
    stack: ["React.js", "Spring Boot", "MySQL", "REST APIs", "JWT"],
    repo: "https://github.com/kalyanchilamkuri/TravelPedia2",
  },
];

/* ── Competitive programming ─────────────────────────────── */

export const cpProfiles = [
  {
    platform: "Codeforces",
    title: "Expert",
    rating: "1722",
    ratingLabel: "Max rating",
    url: links.codeforces,
  },
  {
    platform: "LeetCode",
    title: "Knight",
    rating: "1978",
    ratingLabel: "Rating",
    url: links.leetcode,
  },
  {
    platform: "CodeChef",
    title: "4-Star",
    rating: "1888",
    ratingLabel: "Rating",
    url: links.codechef,
  },
] as const;

export const problemsSolved = "1000+";

/* ── Skills ──────────────────────────────────────────────── */

export const skillGroups = [
  {
    group: "Languages",
    items: ["C++", "Python", "JavaScript", "Java", "C", "SQL"],
  },
  {
    group: "AI & Agentic Systems",
    items: [
      "LLM Integration",
      "Agentic AI",
      "LLM Tool Orchestration",
      "MCP",
      "RAG",
      "Prompt Engineering",
      "FastAPI",
      "Tool Calling",
    ],
  },
  {
    group: "Backend & Distributed Systems",
    items: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    group: "DevOps & Observability",
    items: ["Docker", "Git", "GitHub", "CI/CD", "Grafana", "Kibana", "Graylog", "PagerDuty"],
  },
] as const;

/* ── Education ───────────────────────────────────────────── */

export const education = {
  institution: "Indian Institute of Information Technology, Lucknow",
  shortName: "IIIT Lucknow",
  degree: "B.Tech, Computer Science & Engineering",
  period: "Jul 2023 — May 2027",
  location: "Lucknow, Uttar Pradesh",
  cgpa: "8.80",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Computer Networks",
    "Discrete Mathematics",
  ],
} as const;

/* ── Achievements & leadership ───────────────────────────── */

export const achievements = [
  {
    title: "Runner-up, Hack-O-Fiesta 2025",
    org: "IIIT Lucknow",
    body: "Placed among 100+ competing teams by building CrowdInfra within a strict 24-hour hackathon.",
  },
  {
    title: `${problemsSolved} problems solved`,
    org: "Codeforces · LeetCode · CodeChef",
    body: "Expert on Codeforces (max 1722), Knight on LeetCode (1978), 4-Star on CodeChef (1888).",
  },
] as const;

export const leadership = [
  {
    role: "Coordinator",
    org: "Utkrisht Fine Arts Society",
    body: "Managed end-to-end logistics, vendor relations and on-site operations for cultural exhibitions attended by 500+ participants.",
  },
] as const;

/* ── Navigation ──────────────────────────────────────────── */

export const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
