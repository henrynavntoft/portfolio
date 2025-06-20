"use client";

import { motion } from "framer-motion";
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
    <article className="mx-auto px-6 py-5 lg:py-20 max-w-5xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-foreground mb-4">Skills</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I work with to create exceptional digital experiences.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-3 justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.3 + index * 0.05,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </article>
  );
} 