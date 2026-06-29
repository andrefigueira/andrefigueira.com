"use client";

import { motion } from "framer-motion";

const projects = [
  {
    year: "2024",
    title: "Mitchs.ai",
    url: "https://mitchs.ai",
    description:
      "AI writing platform for Mitch Sullivan — recruitment copywriter with 50k+ followers, clients include BBC, ASDA, McLaren. Generates job adverts that match his signature voice at scale.",
    stack: "Python · OpenAI · LangChain · Vue.js",
  },
  {
    year: "2006–",
    title: "Polyxmedia",
    url: "https://polyxmedia.com",
    description:
      "Consultancy delivering AI integration and software architecture. Senior engineering expertise without the enterprise overhead — the same approach used for billion-event systems, applied to what you actually need.",
    stack: "AI/ML · Architecture · Consulting",
  },
  {
    year: "2023",
    title: "Trap Music Museum",
    url: "https://shop.trapmusicmuseum.com",
    description:
      "Custom ticketing and waiver platform for T.I.'s Atlanta museum. Replaced expensive third-party solutions, eliminated unnecessary costs, gave the team ownership of their own stack.",
    stack: "Node.js · React · Payments",
  },
];

export function Work() {
  return (
    <section id="work" className="py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-header-num">02</span>
          <span className="section-header-title">Engineering</span>
        </motion.div>

        {/* Intro line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm mb-10"
          style={{ color: "var(--muted)", maxWidth: "55ch" }}
        >
          Currently Principal Engineer at Eagle Eye Solutions, building
          highly scalable APIs for major retailers. Previously architected
          event-driven systems processing 7B+ events annually.
        </motion.p>

        {/* Project list */}
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-7"
              >
                <div className="grid md:grid-cols-[5rem_1fr_1.5rem] gap-x-6 gap-y-2 items-start">
                  {/* Year */}
                  <span
                    className="text-xs pt-0.5"
                    style={{
                      color: "var(--dim)",
                      fontFamily: "var(--font-mono-display), monospace",
                    }}
                  >
                    {p.year}
                  </span>

                  {/* Content */}
                  <div>
                    <h3
                      className="font-serif text-xl font-medium mb-2 transition-colors duration-150"
                      style={{ color: "var(--text)" }}
                    >
                      <span className="group-hover:underline decoration-1 underline-offset-3">
                        {p.title}
                      </span>
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-3 prose-justified"
                      style={{ color: "var(--muted)", maxWidth: "56ch" }}
                    >
                      {p.description}
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        color: "var(--dim)",
                        fontFamily: "var(--font-mono-display), monospace",
                      }}
                    >
                      {p.stack}
                    </p>
                  </div>

                  {/* Arrow */}
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: "var(--dim)" }}
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
