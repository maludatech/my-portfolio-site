"use client";

import { Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="p-10 h-[70vh] flex flex-col items-center justify-center"
    >
      <motion.p
        className="text-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.p>

      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.35,
          type: "spring",
          stiffness: 100,
        }}
        viewport={{ once: true }}
      >
        <Card className="p-4">
          <CardContent className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              <Mail size={28} className="text-primary" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              viewport={{ once: true }}
            >
              <a href="mailto:nwitevictor7@gmail.com" className="text-lg">
                nwitevictor7@gmail.com
              </a>
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
