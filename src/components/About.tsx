"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-header-num">03</span>
          <span className="section-header-title">About</span>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-16">

          {/* Prose */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="md:col-span-3 space-y-5 text-sm leading-relaxed prose-justified"
            style={{ color: "var(--muted)" }}
          >
            <p>
              I&apos;ve been building production software for over 20 years. The work
              has ranged from event-driven systems processing seven billion events a year
              to small bespoke platforms for artists and museums. I build things that are
              meant to last and that don&apos;t require rebuilding every two years.
            </p>
            <p>
              The research started as a private project. I spent years thinking about
              the systems I was building and wondering what they were actually made of
              — not in a software-architecture sense, but in a deeper sense. What is
              information? What is the substrate it runs on? Is there a substrate?
              Informational Substrate Convergence is my first attempt to write that
              down rigorously, drawing on quantum information theory, the holographic
              principle, and the philosophy of mind.
            </p>
            <p>
              I work independently. No university affiliation. The paper stands or
              falls on its own argument.
            </p>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{
                  color: "var(--dim)",
                  fontFamily: "var(--font-mono-display), monospace",
                }}
              >
                Stack
              </p>
              <p
                className="text-xs leading-loose"
                style={{
                  color: "var(--muted)",
                  fontFamily: "var(--font-mono-display), monospace",
                }}
              >
                Go · Rust · Python · TypeScript · React · Node.js · PostgreSQL
                · Kubernetes · Docker · AWS · GCP · Kafka · OpenAI · LangChain
              </p>
            </div>

            <div>
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{
                  color: "var(--dim)",
                  fontFamily: "var(--font-mono-display), monospace",
                }}
              >
                Research Interests
              </p>
              <p
                className="text-xs leading-loose"
                style={{
                  color: "var(--muted)",
                  fontFamily: "var(--font-mono-display), monospace",
                }}
              >
                Informational ontology · Philosophy of physics · Quantum
                information theory · Philosophy of mind · Consciousness ·
                Integrated information theory
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
