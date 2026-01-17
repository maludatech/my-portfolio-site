"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function ProfileSection() {
  return (
    <section
      id="profile"
      className="flex flex-col md:flex-row gap-10 items-center justify-center px-10 py-16"
    >
      <div className="relative h-[400px] w-[400px]">
        <Image
          src="/assets/profile-pic-portrait.jpg"
          alt="Victor Ugochukwu profile picture"
          fill
          className="rounded-2xl object-contain"
        />
      </div>
      <div className="text-center md:text-left">
        <p className="text-lg">Hello, I'm</p>
        <h1 className="text-4xl font-bold">Victor Ugochukwu</h1>
        <p className="text-xl mb-4">Fullstack Developer</p>
        <div className="flex gap-4 justify-center md:justify-start">
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
        </div>
        <div className="flex gap-4 mt-4 justify-center md:justify-start">
          <a href="https://www.linkedin.com/maludatech">
            <FaLinkedin size={32} />
          </a>
          <a href="https://github.com/maludatech?tab=overview">
            <FaGithub size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
