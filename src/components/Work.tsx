"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Mitchs.ai",
    description: "AI-powered SaaS platform built for Mitch Sullivan (50k+ followers), renowned recruitment copywriter who has worked with BBC, ASDA, and McLaren. Generates job adverts matching his signature style.",
    tags: ["Python", "OpenAI", "LangChain", "Vue.js"],
    link: "https://mitchs.ai",
  },
  {
    title: "Polyxmedia",
    description: "Founded consultancy providing AI integration and software architecture services. Helping companies build systems that scale without the enterprise price tag.",
    tags: ["AI/ML", "Architecture", "Consulting"],
    link: "https://polyxmedia.com",
  },
  {
    title: "Trap Music Museum",
    description: "Built custom ticketing and waiver systems for T.I.'s Atlanta-based museum, replacing costly third-party solutions and drastically reducing operational costs.",
    tags: ["Node.js", "React", "Payment Integration"],
    link: "https://shop.trapmusicmuseum.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

export function Work() {
  return (
    <section id="work" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-6"
        >
          Things I&apos;ve built
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300"
              >
                <div className="mb-3">
                  <h3 className="font-serif text-xl font-medium mb-1 group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-[var(--background-secondary)] rounded-full text-[var(--foreground-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
