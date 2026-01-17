import Link from "next/link";
import { NavLink } from "@/lib/types";

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="py-8 px-10 text-center">
      <nav className="mb-4">
        <div className="flex justify-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-lg hover:text-gray-500 hover:underline underline-offset-8"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      <p>Copyright © {currentYear} Victor Ugochukwu. All Rights Reserved</p>
    </footer>
  );
}
