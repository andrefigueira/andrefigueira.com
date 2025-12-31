"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

export function Hero() {
  return (
    <section className="px-6 pt-28 pb-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-[1] tracking-tight mb-5"
        >
          Building <span className="gradient-text">systems</span> that scale.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-[var(--foreground-muted)] max-w-lg leading-relaxed mb-8"
        >
          Principal Engineer with 20+ years of experience. Currently building
          highly scalable APIs for major retailers. Founder of Polyxmedia.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
          <motion.a
            href="#work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View my work
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] rounded-full text-sm font-medium hover:border-[var(--foreground)] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
