import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import ProblemSolving from "@/components/sections/ProblemSolving";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import AdminModal from "@/components/AdminModal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <ProblemSolving />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <AdminModal />
    </>
  );
}
