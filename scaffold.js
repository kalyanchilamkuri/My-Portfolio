const fs = require('fs');
const path = require('path');

const dirs = [
  'src/components',
  'src/components/sections',
  'src/components/ui',
  'src/app/api/projects',
  'src/app/api/achievements',
  'src/app/api/tasks',
  'src/app/api/documents',
  'src/app/command-center',
];

dirs.forEach(dir => {
  fs.mkdirSync(path.join(__dirname, dir), { recursive: true });
});

const files = {
  'src/components/sections/Hero.tsx': `export default function Hero() { return <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden"></section>; }`,
  'src/components/sections/Overview.tsx': `export default function Overview() { return <section id="overview" className="py-20 container mx-auto px-4"></section>; }`,
  'src/components/sections/Experience.tsx': `export default function Experience() { return <section id="experience" className="py-20 container mx-auto px-4"></section>; }`,
  'src/components/sections/Achievements.tsx': `export default function Achievements() { return <section id="achievements" className="py-20 container mx-auto px-4"></section>; }`,
  'src/components/sections/Projects.tsx': `export default function Projects() { return <section id="projects" className="py-20 container mx-auto px-4"></section>; }`,
  'src/components/sections/Skills.tsx': `export default function Skills() { return <section id="skills" className="py-20 container mx-auto px-4"></section>; }`,
  'src/components/sections/Contact.tsx': `export default function Contact() { return <section id="contact" className="py-20 container mx-auto px-4"></section>; }`,
  'src/components/QuantumCore.tsx': `export default function QuantumCore() { return <div className="absolute inset-0"></div>; }`,
  'src/components/AdminModal.tsx': `export default function AdminModal() { return null; }`,
  'src/app/page.tsx': `import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import AdminModal from "@/components/AdminModal";

export default function Home() {
  return (
    <main className="relative bg-transparent">
      <Hero />
      <Overview />
      <Experience />
      <Achievements />
      <Projects />
      <Skills />
      <Contact />
      <AdminModal />
    </main>
  );
}`,
  'src/app/command-center/page.tsx': `import { verifyAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function CommandCenter() {
  const isAdmin = await verifyAdmin();
  if (!isAdmin) redirect("/");
  return <div className="min-h-screen pt-20 px-4 container mx-auto text-white"><h1>Command Center</h1></div>;
}`,
};

Object.entries(files).forEach(([file, content]) => {
  fs.writeFileSync(path.join(__dirname, file), content);
});

console.log("Scaffolding complete.");
