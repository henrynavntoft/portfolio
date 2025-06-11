"use client";

import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skills = [
    "JavaScript",
    "React", 
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "WordPress",
    "Shopify",
    "Node.js",
    "Git",
    "GitHub",
    "Figma",
    "UI/UX Design",
    "Responsive Design",
    "E-commerce Development",
    "Custom Development"
  ];

  return (
    <article className="mx-auto px-6 py-10 max-w-5xl">
      <h3 className="mb-6">Skills</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="px-4 py-2 text-sm font-medium bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </article>
  );
} 