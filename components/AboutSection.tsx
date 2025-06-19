import Image from "next/image";
import { FaBriefcase, FaGraduationCap, FaArrowDown } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section
      id="about"
      className="p-10 relative body-container flex flex-col items-center justify-center"
    >
      <p className="text-lg text-center">Get To Know More</p>
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative h-[400px] w-full md:w-[400px]">
          <Image
            src="/assets/profile-picture-side.jpg"
            alt="Profile Picture"
            fill
            className="rounded-2xl object-contain grayscale hover:grayscale-0 transition-all"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <Card className="w-full">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <FaBriefcase size={32} className="text-primary mb-2" />
                <h3 className="text-lg font-semibold">Experience</h3>
                <p>
                  3+ years
                  <br />
                  Fullstack Development
                </p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <FaGraduationCap size={32} className="text-primary mb-2" />
                <h3 className="text-lg font-semibold">Education</h3>
                <p>
                  B.Sc. Bachelors Degree
                  <br />
                  Computer Science Undergraduate
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center">
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
          </p>
        </div>
      </div>
      <a href="#experience" className="absolute right-[-2rem] bottom-10">
        <FaArrowDown size={32} />
      </a>
    </section>
  );
}
