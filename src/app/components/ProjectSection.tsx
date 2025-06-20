"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
  name: "ChiCura",
  description: "A Danish e-commerce store specializing in posters, frames, and home decor accessories. Built with Shopify and custom integrations.",
  link: "https://chicura.dk/",
  screenshot: "/chicura.png",
},
   {
  name: "Human Film",
  description: "A film production company based in Denmark. Built with Next.js and Tailwind CSS.",
  link: "https://human-film-l35r0ecce-henrynavntoft.vercel.app/",
  screenshot: "/human.png",
},
{
  name: "Toptronic",
  description: "A Danish electronics company specializing in EMI Shielding, Thermal Products, and Microwave Products. Built with WordPress and custom solutions.",
  link: "https://toptronic.dk/",
  screenshot: "/toptronic.png",
},
{
  name: "Rose Holm",
  description: "An industrial fastener solutions provider based in Denmark. Built with WordPress and Elementor.",
  link: "https://www.roseholm.dk",
  screenshot: "/rose.png",
}
  ];

  return (
    <article className="mx-auto px-6 py-5 lg:py-20 max-w-5xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-foreground mb-4">Projects</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of my recent work and creative solutions.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="py-4 flex flex-col gap-2 items-start justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={project.screenshot}
              alt={`${project.name} screenshot`}
              width={600}
              height={300}
              className="mb-4 object-cover rounded-lg hover:scale-105 transition-all duration-500"
            />
            <div className="pl-10 flex flex-col gap-2">
            <h4 className="text-xl font-bold">{project.name}</h4>
            <p className="mb-4 font-light max-w-[80%]">{project.description}</p>
            <Button variant="outline" asChild> 
              <Link href={project.link} target="_blank">
                View Project
              </Link>
            </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </article>
  );
}