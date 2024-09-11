"use client";

import Link from "next/link";
import {Button, Image} from "@nextui-org/react";

export default function ProjectsSection() {
  const projects = [
   {
  name: "Human Film",
  description: "A film production company based in Denmark. Built with Next.js and Tailwind CSS.",
  link: "https://www.humanfilm.dk",
  screenshot: "/human.png",
},
{
  name: "Rose Holm",
  description: "An industrial fastener solutions provider based in Denmark. Built with WordPress and Elementor.",
  link: "https://www.roseholm.dk",
  screenshot: "/rose.png",
}
  ];

  return (
    <article className="grid sm:grid-cols-2 grid-cols-1 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="py-4">
         
          <Image
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            className="mb-4 object-cover"
          />
      
          <h4 className="text-xl font-bold">{project.name}</h4>
          <p className="mb-4 font-light max-w-[80%]">{project.description}</p>
          <Button> 
          <Link href={project.link} target="_blank">
            View Project
          </Link>
          </Button>
        </div>
      ))}
    </article>
  );
}