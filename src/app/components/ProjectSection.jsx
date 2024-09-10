import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      name: "Human Film",
      description: "A film production company based in Denmark.",
      link: "/projects/project-one",
      screenshot: "https://storage.screenshotapi.net/www_humanfilm_dk__5f3e221fdb66.png",
    }
  ];

  return (
    <article className="grid grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="border border-black my-4 p-4 rounded-lg">
          <Image
            width={1000}
            height={1000}
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            className="mb-4 w-full h-48 object-cover rounded-lg"
          />
          <h4 className="text-xl font-bold mb-2">{project.name}</h4>
          <p className="mb-4">{project.description}</p>
          <Link href={project.link}>
            View Project
          </Link>
        </div>
      ))}
    </article>
  );
}