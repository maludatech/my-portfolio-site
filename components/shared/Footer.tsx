"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { NavLink } from "@/lib/types";

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const currentYear = new Date().getFullYear();

/* ================= ANIMATION VARIANTS ================= */

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const navContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export function Footer() {
  return (
    <motion.footer
      className="py-8 px-10 text-center"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <nav className="mb-4">
        <motion.div
          className="flex justify-center gap-4"
          variants={navContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.label}
              variants={navItemVariants}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                href={link.href}
                className="text-lg hover:text-gray-500 hover:underline underline-offset-8"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </nav>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        viewport={{ once: true }}
      >
        Copyright © {currentYear} Victor Ugochukwu. All Rights Reserved
      </motion.p>
    </motion.footer>
  );
}
