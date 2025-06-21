import ProjectsSection from "../components/ProjectSection"
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Projects | Henry Navntoft - WordPress, Shopify & Custom Development Portfolio",
  description: "View Henry Navntoft's portfolio of web development projects including WordPress websites, Shopify e-commerce stores, and custom web applications. Danish developer based in Copenhagen.",
  keywords: [
    "Henry Navntoft Projects",
    "WordPress Portfolio",
    "Shopify Portfolio", 
    "Web Development Portfolio",
    "ChiCura E-commerce",
    "Human Film Website",
    "Toptronic Website",
    "Rose Holm Website",
    "Danish Web Developer Portfolio",
    "Copenhagen Web Development"
  ],
  alternates: {
    canonical: 'https://henrynavntoft.dk/projects',
  },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Structured Data for Portfolio Projects */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Henry Navntoft - Web Development Projects',
            description: 'Portfolio of web development projects by Henry Navntoft',
            url: 'https://henrynavntoft.dk/projects',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'WebSite',
                  name: 'ChiCura',
                  url: 'https://chicura.dk/',
                  description: 'Danish e-commerce store specializing in posters, frames, and home decor accessories. Built with Shopify and custom integrations.',
                  author: {
                    '@type': 'Person',
                    name: 'Henry Navntoft',
                  },
                },
                {
                  '@type': 'WebSite',
                  name: 'Human Film',
                  url: 'https://human-film-l35r0ecce-henrynavntoft.vercel.app/',
                  description: 'Film production company website based in Denmark. Built with Next.js and Tailwind CSS.',
                  author: {
                    '@type': 'Person',
                    name: 'Henry Navntoft',
                  },
                },
                {
                  '@type': 'WebSite',
                  name: 'Toptronic',
                  url: 'https://toptronic.dk/',
                  description: 'Danish electronics company specializing in EMI Shielding, Thermal Products, and Microwave Products. Built with WordPress and custom solutions.',
                  author: {
                    '@type': 'Person',
                    name: 'Henry Navntoft',
                  },
                },
                {
                  '@type': 'WebSite',
                  name: 'Rose Holm',
                  url: 'https://www.roseholm.dk',
                  description: 'Industrial fastener solutions provider based in Denmark. Built with WordPress and Elementor.',
                  author: {
                    '@type': 'Person',
                    name: 'Henry Navntoft',
                  },
                },
              ],
            },
          }),
        }}
      />
      
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            My Web Development Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of websites and web applications I&apos;ve built for clients across Denmark. 
            From e-commerce stores to corporate websites, each project demonstrates my expertise 
            in modern web development technologies.
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-8">
            Detailed project showcase coming soon. In the meantime, you can view my work 
            on the <Link href="/" className="text-primary hover:underline">homepage</Link> or 
            contact me directly to discuss your project needs.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            <div className="p-6 bg-muted/30 rounded-lg">
              <h3 className="font-semibold mb-2">WordPress Development</h3>
              <p className="text-sm text-muted-foreground">
                Custom WordPress themes, plugins, and complete website solutions
              </p>
            </div>
            <div className="p-6 bg-muted/30 rounded-lg">
              <h3 className="font-semibold mb-2">Shopify E-commerce</h3>
              <p className="text-sm text-muted-foreground">
                Complete e-commerce solutions with custom integrations and designs
              </p>
            </div>
            <div className="p-6 bg-muted/30 rounded-lg">
              <h3 className="font-semibold mb-2">Custom Development</h3>
              <p className="text-sm text-muted-foreground">
                React, Next.js, and other modern web technologies for unique solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
