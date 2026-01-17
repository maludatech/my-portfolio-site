"use client";

import { motion, Variants } from "framer-motion";
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

/* ================= ANIMATION VARIANTS ================= */

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="py-16 px-10 relative body-container"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
    >
      <p className="text-lg text-center">Explore My</p>
      <h1 className="text-4xl font-bold text-center mb-8">Experience</h1>

      {/* Cards Row */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        {/* Frontend Card */}
        <motion.div variants={cardVariants} className="flex-1">
          <Card className="w-full h-full">
            <CardContent className="p-4 flex flex-col h-full">
              <h2 className="text-2xl font-semibold mb-4">
                Frontend Development
              </h2>

              <motion.div
                className="grid grid-cols-2 gap-4 flex-1" // ← flex-1 added here
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {frontendSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="text-green-500" size={20} />
                    <div>
                      <h3 className="font-medium">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {skill.level}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Backend Card */}
        <motion.div variants={cardVariants} className="flex-1">
          <Card className="w-full h-full">
            <CardContent className="p-4 flex flex-col h-full">
              <h2 className="text-2xl font-semibold mb-4">
                Backend & Blockchain
              </h2>

              <motion.div
                className="grid grid-cols-2 gap-4 flex-1" // ← flex-1 added here
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {backendSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="text-green-500" size={20} />
                    <div>
                      <h3 className="font-medium">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {skill.level}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
