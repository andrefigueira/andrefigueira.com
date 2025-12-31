"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]/50"
    >
      <div className="px-6 py-4">
        <nav className="max-w-4xl mx-auto flex items-center justify-between">
          <motion.a
            href="/"
            className="flex items-center gap-3 font-serif text-2xl font-bold tracking-tight"
            whileHover={{ opacity: 0.7 }}
          >
            <Image
              src="/profile.jpg"
              alt="Andre Figueira"
              width={36}
              height={36}
              className="rounded-full"
            />
            Andre Figueira
          </motion.a>

          <div className="flex items-center gap-6">
            <motion.a
              href="#work"
              className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
              whileHover={{ y: -1 }}
            >
              Work
            </motion.a>
            <motion.a
              href="#about"
              className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
              whileHover={{ y: -1 }}
            >
              About
            </motion.a>
            <motion.a
              href="#contact"
              className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
              whileHover={{ y: -1 }}
            >
              Contact
            </motion.a>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
