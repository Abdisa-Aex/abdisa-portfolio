import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSkills from "@/components/AboutSkills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080d1d]">
      <Navbar />
      <Hero />
      <AboutSkills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
