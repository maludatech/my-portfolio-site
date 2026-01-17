"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i === 0 ? -60 : 60,
    scale: 0.92,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
};

const photoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-5 sm:px-8 lg:px-12 body-container">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeInUp}
      >
        <p className="text-lg text-muted-foreground">Get To Know More</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">About Me</h1>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center lg:items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Profile Photo */}
        <motion.div
          className="relative w-full max-w-[380px] lg:w-[380px] aspect-[4/5] lg:aspect-square flex-shrink-0"
          variants={photoVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
        >
          <Image
            src="/assets/profile-picture-side.jpg"
            alt="Profile Picture"
            fill
            className="rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
            sizes="(max-width: 1024px) 100vw, 380px"
          />
        </motion.div>

        {/* Right side content */}
        <div className="flex-1 space-y-8 lg:space-y-10">
          {/* Cards row */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={staggerContainer}
          >
            <motion.div custom={0} variants={cardVariants}>
              <Card className="h-full border bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <FaBriefcase size={36} className="text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-1">Experience</h3>
                  <p className="text-muted-foreground">
                    3+ years
                    <br />
                    Fullstack Development
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div custom={1} variants={cardVariants}>
              <Card className="h-full border bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <FaGraduationCap size={36} className="text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-1">Education</h3>
                  <p className="text-muted-foreground">
                    B.Sc. Bachelors Degree
                    <br />
                    Computer Science Undergraduate
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Bio paragraph */}
          <motion.p
            className="text-base sm:text-lg leading-relaxed text-muted-foreground text-center lg:text-left"
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
          >
            I'm a Full-Stack Developer with a focus on building scalable, modern
            web and blockchain applications. On the frontend, I use React.js and
            Next.js with Tailwind CSS to craft responsive, user-friendly
            interfaces. For the backend, I specialize in TypeScript with NestJS
            and Node.js, building clean, maintainable APIs and microservices. I
            work with PostgreSQL for reliable relational data storage, and I’m
            also proficient with MongoDB when projects call for flexible
            document-based data. In the Web3 space, I build and test smart
            contracts using Solidity and Hardhat, primarily targeting the
            Ethereum ecosystem. I combine these tools to create fullstack dApps
            that connect frontend interfaces with secure on-chain logic. Whether
            it's a traditional SaaS platform or a decentralized application, I
            bring both the technical depth and creative mindset to turn ideas
            into production-ready solutions.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
