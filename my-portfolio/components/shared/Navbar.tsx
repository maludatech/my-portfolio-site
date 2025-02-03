"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Links = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white h-[17vh]">
      <div className="p-4 flex justify-around items-center body-container">
        <div className="text-[2rem] hover:cursor-default">Victor Ugochukwu</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-[1.5rem]">
          {Links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#808080] hover:underline hover:underline-offset-[1rem] hover:decoration-[#b5b5b5]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="relative md:hidden">
          {menuOpen ? (
            <X
              onClick={() => setMenuOpen(!menuOpen)}
              strokeWidth={1.4}
              className=" hover:cursor-pointer w-10 h-10 "
            />
          ) : (
            <Menu
              onClick={() => setMenuOpen(!menuOpen)}
              strokeWidth={1.4}
              className=" hover:cursor-pointer w-10 h-10 "
            />
          )}
          {menuOpen && (
            <div className="absolute top-full right-0 bg-white w-fit flex flex-col gap-4 overflow-hidden transition-all duration-300 ease-in-out p-3 justify-center">
              {Links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="hover:text-[#808080] hover:underline hover:underline-offset-[1rem] hover:decoration-[#b5b5b5] text-[1.5rem]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
