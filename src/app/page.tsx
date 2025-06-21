import ProjectsSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Henry Navntoft | Full Stack Developer & Small Business Owner - Copenhagen, Denmark",
  description: "Professional Full Stack Developer based in Copenhagen, Denmark. Specializing in WordPress, Shopify, and custom web development. Graduate of Copenhagen School of Arts and Technology. Available for freelance projects.",
  alternates: {
    canonical: 'https://henrynavntoft.dk',
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
            url: 'https://henrynavntoft.dk',
          }),
        }}
      />
      
      <div>
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        <Contact />
      </div>
    </>
  );
}
