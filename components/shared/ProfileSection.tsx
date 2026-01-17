"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

/* ================= ANIMATION VARIANTS ================= */

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export function ProfileSection() {
  return (
    <motion.section
      id="profile"
      className="flex flex-col md:flex-row gap-10 items-center justify-center px-10 py-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
    >
      {/* Profile Image */}
      <motion.div variants={imageVariants} className="relative h-100 w-100">
        <Image
          src="/assets/profile-pic-portrait.jpg"
          alt="Victor Ugochukwu profile picture"
          fill
          priority
          className="rounded-2xl object-contain"
        />
      </motion.div>

      {/* Text Content */}
      <div className="text-center md:text-left">
        <motion.p variants={textVariants} className="text-lg">
          Hello, I'm
        </motion.p>

        <motion.h1 variants={textVariants} className="text-4xl font-bold">
          Victor Ugochukwu
        </motion.h1>

        <motion.p variants={textVariants} className="text-xl mb-4">
          Fullstack Developer
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={textVariants}
          className="flex gap-4 justify-center md:justify-start"
        >
          <Button
            variant="outline"
            onClick={() => window.open("/assets/my-resume.pdf")}
            className="hover:cursor-pointer"
          >
            Download CV
          </Button>

          <Button asChild className="hover:cursor-pointer">
            <a href="#contact">Contact Info</a>
          </Button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-4 mt-4 justify-center md:justify-start"
          variants={sectionVariants}
        >
          <motion.a
            href="https://www.linkedin.com/maludatech"
            variants={iconVariants}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <FaLinkedin size={32} />
          </motion.a>

          <motion.a
            href="https://github.com/maludatech?tab=overview"
            variants={iconVariants}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <FaGithub size={32} />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
