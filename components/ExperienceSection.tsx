"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ExperienceItem } from "@/lib/types";
import { CheckCircle } from "lucide-react";

const frontendSkills: ExperienceItem[] = [
  { name: "HTML", level: "Experienced" },
  { name: "CSS", level: "Experienced" },
  { name: "Tailwind CSS", level: "Experienced" },
  { name: "JavaScript", level: "Experienced" },
  { name: "ReactJS", level: "Experienced" },
  { name: "Next.JS", level: "Experienced" },
  { name: "React Native", level: "Experienced" },
  { name: "Expo", level: "Experienced" },
  { name: "TypeScript", level: "Experienced" },
];

const backendSkills: ExperienceItem[] = [
  { name: "MongoDB", level: "Experienced" },
  { name: "Node JS", level: "Experienced" },
  { name: "Express JS", level: "Experienced" },
  { name: "Git", level: "Experienced" },
  { name: "NestJS", level: "Experienced" },
  { name: "PostgreSQL", level: "Experienced" },
  { name: "Solidity", level: "Intermediate" },
  { name: "Hardhat", level: "Intermediate" },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-10 relative body-container">
      <p className="text-lg text-center">Explore My</p>
      <h1 className="text-4xl font-bold text-center mb-8">Experience</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <Card className="flex-1 w-full">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-4">
              Frontend Development
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <div>
                    <h3 className="font-medium">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.level}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1 w-full">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-4">
              Backend & Blockchain
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <div>
                    <h3 className="font-medium">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.level}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
