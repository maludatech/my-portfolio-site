"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Project } from "@/lib/types";

const projects: Project[] = [
  {
    title: "Rise Review",
    description:
      "A SaaS review automation platform that helps businesses send review requests, track responses, and manage campaigns from a centralized dashboard.",
    github: "https://github.com/maludatech/review-flow/tree/main/rise-review",
    demo: "https://rise-review.vercel.app",
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Email Automation"],
    image: "/assets/project-2.png",
  },
  {
    title: "MedIntel",
    description:
      "A symptom-based health prediction web app featuring a user dashboard for managing symptom trends and viewing recent prediction history.",
    github: "https://github.com/maludatech/medintel-web-app",
    demo: "https://medintel-web-app.vercel.app/",
    stack: ["Next.js", "TypeScript", "Tailwind", "API Integration"],
    image: "/assets/project-3.png",
  },
  {
    title: "BiteBazaar",
    description:
      "A food delivery web app with real-time cart updates and an admin dashboard for managing orders and products.",
    github: "https://github.com/maludatech/BiteBazaar",
    demo: "https://bitebazaer.vercel.app/",
    stack: ["Next.js", "Tailwind", "MongoDB", "Stripe"],
    image: "/assets/project-1.png",
  },
];

// Entrance animation (stagger + appear)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.18,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.94,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 14,
      duration: 0.75,
    },
  },
};

// Hover lift + shadow only
const cardHover: Variants = {
  rest: {
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
  },
  hover: {
    y: -8,
    boxShadow:
      "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-10 body-container"
    >
      <div className="text-center mb-12">
        <p className="text-lg">Browse My Recent</p>
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={item}>
            {/* Inner motion.div just for hover */}
            <motion.div initial="rest" whileHover="hover" variants={cardHover}>
              <Card className="overflow-hidden border-none h-full flex flex-col bg-card/70 backdrop-blur-sm group">
                <CardContent className="p-0 grow">
                  <div className="relative w-full aspect-4/3 sm:aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                      placeholder="blur"
                      blurDataURL="/assets/placeholder.jpg"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs px-2.5 py-0.5 bg-secondary/80 hover:bg-secondary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-2 flex gap-3 border-t mt-auto">
                  <Button asChild size="sm" className="flex-1 gap-1.5">
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-1.5"
                  >
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github size={16} />
                      Source
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
