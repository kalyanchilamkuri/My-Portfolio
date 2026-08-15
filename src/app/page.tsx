import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import CompetitiveProgramming from "@/components/sections/CompetitiveProgramming";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import AdminModal from "@/components/AdminModal";
import Navbar from "@/components/Navbar";
import ScrollIndicator from "@/components/ScrollIndicator";
import SectionNav from "@/components/SectionNav";

export default function Home() {
  return (
    <main className="relative z-10 bg-transparent min-h-screen">
      <Navbar />
      <Hero />
      <Overview />
      <CompetitiveProgramming />
      <Experience />
      <Achievements />
      <Projects />
      <Skills />
      <Contact />
      <AdminModal />
      <ScrollIndicator />
      <SectionNav />
    </main>
  );
}