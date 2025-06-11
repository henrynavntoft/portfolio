import ProjectsSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      
      <SkillsSection />
      
      <article className="mx-auto p-6 max-w-5xl">
        <h3 className="mb-b">Projects</h3>
        <ProjectsSection />
      </article>
    </div>
  );
}
