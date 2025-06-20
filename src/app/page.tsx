import ProjectsSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      
      <SkillsSection />
      
      <ProjectsSection />

      <Contact />
    </div>
  );
}
