import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      name: "Project One",
      description: "Description of project one.",
      link: "/projects/project-one",
    },
    {
      name: "Project Two",
      description: "Description of project two.",
      link: "/projects/project-two",
    },
    {
      name: "Project Three",
      description: "Description of project three.",
      link: "/projects/project-three",
    },
    {
      name: "Project Four",
      description: "Description of project four.",
      link: "/projects/project-four",
    },
  ];

  return (
    <article className="grid grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="border border-black my-4 p-4 rounded-lg">
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
