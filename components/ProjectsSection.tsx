"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/lib/types";

const projects: Project[] = [
  {
    title: "BiteBazaar",
    description:
      "A food delivery web app with real-time cart updates and admin dashboard.",
    github: "https://github.com/maludatech/BiteBazaar",
    demo: "https://bitebazaar.vercel.app/", // Corrected typo from "bitebazaer"
    stack: ["Next.js", "Tailwind", "MongoDB", "Stripe"],
    image: "/assets/project-1.png",
  },
  {
    title: "Copto",
    description:
      "Copto is a sleek crypto tracker featuring live price charts, real-time market data, and detailed coin insights—all powered by the CoinGecko API. Its intuitive UI helps users monitor and compare crypto assets quickly and efficiently.",
    github: "https://github.com/maludatech/copto",
    demo: "https://trady-sable.vercel.app/copyswap",
    stack: ["React", "TypeScript", "Chart.js", "CoinGecko API"],
    image: "/assets/project-2.png",
  },
  {
    title: "Steeze Boutique",
    description:
      "E-commerce clothing store with checkout and product filtering.",
    github: "https://github.com/maludatech/steeze-boutique",
    demo: "https://steeze-boutique.vercel.app/",
    stack: ["Next.js", "Tailwind", "Sanity CMS"],
    image: "/assets/project-3.png",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-10 body-container"
    >
      <div className="text-center">
        <p className="text-lg text-muted-foreground">Browse My Recent</p>
        <h1 className="text-4xl font-bold mb-10">Projects</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="group overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <CardContent className="p-0">
              <div className="relative w-full h-64 sm:h-72 overflow-hidden rounded-t-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL="/assets/placeholder.jpg"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs bg-background text-foreground border-foreground/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex gap-3">
              <Button
                asChild
                variant="default"
                size="sm"
                className="gap-1 bg-primary hover:bg-primary/90"
              >
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} /> Demo
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-1 border-foreground/20"
              >
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github size={16} /> Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
