/**
 * Single source of truth for portfolio content.
 * Every value here is taken from public/Jaswanth_kalyan_Resume.pdf.
 * Nothing may be added that is not backed by that document.
 */

export const SITE_URL = "https://kalyanchilamkuri.dev";

export const profile = {
  name: "Jaswanth Kalyan",
  role: "Software Engineer",
  email: "real.kalyan167@gmail.com",
  phone: "+91 6281750241",
  location: "India",
  university: "IIIT Lucknow",
  positioning:
    "I build agentic AI systems and the backend infrastructure they run on.",
  summary:
    "Computer Science undergraduate at IIIT Lucknow (CGPA: 8.80), graduating May 2027, with software engineering experience at Sprinklr building and deploying backend services, microservices, REST APIs, and production systems. Experienced in C++, Java, Python, JavaScript, Spring Boot, Node.js, Docker, CI/CD, authentication, and system reliability. Built production systems processing 500+ daily alerts, reducing mean-time-to-triage by 40% and saving 10+ hrs/week of manual debugging. Strong problem-solving background with 1000+ DSA problems solved.",
} as const;

export const heroTags = ["AI", "BACKEND", "FULL STACK", "PROBLEM SOLVING"] as const;

export const links = {
  github: "https://github.com/kalyanchilamkuri",
  linkedin: "https://www.linkedin.com/in/kalyan-chilamkuri-72a521304/",
  leetcode: "https://leetcode.com/u/Jaswanth__167/",
  codeforces: "https://codeforces.com/profile/bytewolf",
  codechef: "https://www.codechef.com/users/jaswanth__167",
  email: "mailto:real.kalyan167@gmail.com",
  phone: "tel:+916281750241",
  resume: "/Jaswanth_kalyan_Resume.pdf",
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
    role: "Product Engineering Intern",
    team: "Agentic AI & Platform Reliability",
    period: "March 2026 – September 2026",
    location: "Gurugram, Haryana",
    metrics: [
      { value: 40, suffix: "%", label: "Lower time-to-triage" },
      { value: 10, suffix: "+", label: "Hrs/week saved" },
      { value: 500, suffix: "+", label: "Daily alerts processed" },
    ],
    bullets: [
      "Built and deployed an AI-powered on-call agent integrating PagerDuty, Grafana, Kibana, and Graylog to process 500+ daily alerts, reducing mean-time-to-triage by 40% and saving 10+ hrs/week of manual debugging.",
      "Engineered end-to-end backend workflows for alert ingestion, investigation, tool execution, and structured Root Cause Analysis (RCA) generation, improving observability and operational reliability across internal microservices.",
      "Designed and deployed Model Context Protocol (MCP) servers in Python to connect LLM-driven agents with internal APIs, enabling low-latency tool execution and automated operational workflows.",
    ],
    stack: ["Python", "MCP", "FastAPI", "LLMs", "PagerDuty", "Grafana", "Kibana", "Graylog"],
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
      "A community-driven infrastructure mapping platform that enables users to pin and upvote local infrastructure needs, earning Runner-up out of 100+ teams at Hack-O-Fiesta 2025 during a 24-hour hackathon.",
    engineering: [
      "Built a community-driven infrastructure mapping platform that enables users to pin and upvote local infrastructure needs.",
      "Integrated the Google Gemini API to analyze local market competition and generate data-driven profitability insights.",
      "Integrated the Google Maps API for location-based demand mapping across pinned infrastructure needs.",
    ],
    stack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Google Gemini API", "Google Maps API"],
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
      "Designed and built a full-stack travel planning application using React.js, Spring Boot, and MySQL, enabling users to search destinations, hotels, flights, and activities through a unified platform.",
    engineering: [
      "Designed and built a full-stack travel planning application using React.js, Spring Boot, and MySQL for unified search across destinations, hotels, flights, and activities.",
      "Implemented JWT-based authentication and role-based access control (RBAC) to secure user access and application resources.",
    ],
    stack: ["React.js", "Spring Boot", "MySQL", "REST APIs", "JWT Authentication"],
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
    group: "Programming Languages",
    items: ["C++", "Java", "Python", "JavaScript", "C", "SQL"],
  },
  {
    group: "Core CS & Software Engineering",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "Debugging",
    ],
  },
  {
    group: "AI & Agentic Systems",
    items: [
      "LLM Integration",
      "MCP (Model Context Protocol)",
      "Tool Calling",
      "FastAPI",
      "AI Agents",
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
    group: "DevOps & Observability",
    items: [
      "Docker",
      "Git",
      "GitHub",
      "CI/CD",
      "Grafana",
      "Kibana",
      "Graylog",
      "PagerDuty",
    ],
  },
  {
    group: "Frontend Technologies",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
] as const;

/* ── Education ───────────────────────────────────────────── */

export const education = {
  institution: "Indian Institute of Information Technology, Lucknow",
  shortName: "IIIT Lucknow",
  degree: "B.Tech, Computer Science & Engineering",
  period: "Jul 2023 — Present",
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
    body: "Secured runner-up position among 100+ teams at IIIT Lucknow during a 24-hour hackathon by building CrowdInfra.",
  },
  {
    title: `${problemsSolved} DSA problems solved`,
    org: "Competitive Programming",
    body: "Solved over 1000 DSA problems across competitive programming platforms: Codeforces Expert (max 1722), LeetCode Knight (1978), CodeChef 4-Star (1888).",
  },
] as const;

export const leadership = [
  {
    role: "Coordinator",
    org: "Utkrisht Fine Arts Society",
    body: "Managed end-to-end logistics, vendor relations, and on-site operations for cultural exhibitions attended by 500+ participants.",
  },
] as const;

/* ── Navigation ──────────────────────────────────────────── */

export const navSections = [
  { id: "about", label: "About", index: "01" },
  { id: "experience", label: "Experience", index: "02" },
  { id: "projects", label: "Projects", index: "03" },
  { id: "skills", label: "Skills", index: "05" },
  { id: "education", label: "Education", index: "06" },
  { id: "contact", label: "Contact", index: "07" },
] as const;
