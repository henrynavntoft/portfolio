"use client";

import Link from "next/link";
import Image from "next/image";
import {Button} from "@nextui-org/react";


export default function ProjectsSection() {
  const projects = [
    {
      name: "Human Film",
      description: "A film production company based in Denmark.",
      link: "https://www.humanfilm.dk",
      screenshot: "https://storage.screenshotapi.net/www_humanfilm_dk__5f3e221fdb66.png",
    }
  ];

  return (
    <article className="grid grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="py-4">
          <Image
            width={1000}
            height={1000}
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            className="mb-4 w-full h-48 object-cover"
          />
          <h4 className="text-xl font-bold">{project.name}</h4>
          <p className="mb-4 font-light">{project.description}</p>
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