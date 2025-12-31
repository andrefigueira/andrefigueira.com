"use client";

import { motion } from "framer-motion";

const skills = [
  "Go",
  "Rust",
  "Python",
  "TypeScript",
  "React",
  "Vue.js",
  "Node.js",
  "PostgreSQL",
  "Kubernetes",
  "Docker",
  "AWS",
  "Google Cloud",
  "Kafka",
  "OpenAI",
  "LangChain",
];

export function About() {
  return (
    <section id="about" className="py-12 px-6 bg-[var(--background-secondary)]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-6"
        >
          A bit about me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed text-sm">
              <p>
                I&apos;ve been building production systems for over 20 years. Currently
                Principal Engineer at Eagle Eye Solutions, where I&apos;m building highly
                scalable APIs for major retailers.
              </p>
              <p>
                Previously I architected event-driven systems processing 7B+ events annually.
                In 2006, I founded Polyxmedia to help companies that need senior expertise
                without the enterprise price tag.
              </p>
              <p>
                I use AI where it actually helps, not because it&apos;s trendy. We build
                systems that don&apos;t need rebuilding every 2 years.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="font-serif text-lg font-medium mb-4">
              Technologies I work with
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-[var(--card)] border border-[var(--border)] rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
