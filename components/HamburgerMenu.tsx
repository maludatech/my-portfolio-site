"use client";

import { useState } from "react";
import Link from "next/link";
import { NavLink } from "@/lib/types";
import ThemeToggle from "./ThemeToggle";

interface HamburgerMenuProps {
  navLinks: NavLink[];
}

export function HamburgerMenu({ navLinks }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden relative flex justify-between items-center gap-4">
      <ThemeToggle />
      <div
        className="flex flex-col justify-between h-6 w-8 cursor-pointer"
        onClick={toggleMenu}
      >
        <span
          className={`h-0.5 bg-foreground transition-all ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`h-0.5 bg-foreground transition-all ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-0.5 bg-foreground transition-all ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </div>
      <div
        className={`absolute top-full right-0 bg-background w-48 max-h-0 overflow-hidden transition-all z-20 ${
          isOpen ? "max-h-96" : ""
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="block p-3 text-center text-lg hover:text-gray-500"
            onClick={toggleMenu}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
