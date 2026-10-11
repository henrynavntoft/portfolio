import ProjectsSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Henry Navntoft | Full Stack Developer in Copenhagen",
  description: "Henry Navntoft is a full stack developer in Copenhagen. He builds WordPress, Shopify, and custom websites for small businesses across Denmark.",
  alternates: {
    canonical: "https://www.henrynavntoft.dk/",
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data for Portfolio/Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Henry Navntoft Web Development',
            description: 'Full Stack Web Development Services - WordPress, Shopify, Custom Development',
            provider: {
              '@type': 'Person',
              name: 'Henry Navntoft',
              jobTitle: 'Full Stack Developer',
            },
            areaServed: {
              '@type': 'Country',
              name: 'Denmark',
            },
            serviceType: [
              'WordPress Development',
              'Shopify Development', 
              'Custom Web Development',
              'Website Redesign',
              'E-commerce Development',
              'Website Maintenance',
            ],
            url: 'https://www.henrynavntoft.dk/',
          }),
        }}
      />
      
      <div>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <Contact />
      </div>
    </>
  );
}
