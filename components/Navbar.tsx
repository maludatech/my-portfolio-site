"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { HamburgerMenu } from "./HamburgerMenu";
import { NavLink } from "@/lib/types";

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="flex justify-between items-center h-[17vh] px-10 body-container z-20">
      <div className="text-2xl font-bold">Victor Ugochukwu</div>
      <div className="hidden md:flex gap-8">
        <ThemeToggle />
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-lg hover:text-gray-500 hover:underline underline-offset-8 transition-all"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <HamburgerMenu navLinks={navLinks} />
    </nav>
  );
}
