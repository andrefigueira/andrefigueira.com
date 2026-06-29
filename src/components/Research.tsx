"use client";

import { motion } from "framer-motion";

const keywords = [
  "Informational Ontology",
  "Holographic Principle",
  "Integrated Information Theory",
  "Bell Inequalities",
  "Hard Problem of Consciousness",
  "Digital Physics",
  "AdS/CFT Correspondence",
  "Quantum Non-Locality",
];

export function Research() {
  return (
    <section id="research" className="py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-header-num">01</span>
          <span className="section-header-title">Research</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {/* Pre-print badge */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span
              className="inline-flex items-center gap-2 text-xs px-3 py-1.5"
              style={{
                border: "1px solid oklch(0.40 0.20 260 / 0.35)",
                color: "var(--accent)",
                backgroundColor: "oklch(0.40 0.20 260 / 0.05)",
                fontFamily: "var(--font-mono-display), monospace",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: "var(--accent)",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              Pre-print · arXiv forthcoming 2026
            </span>
            <span
              className="text-xs"
              style={{
                color: "var(--dim)",
                fontFamily: "var(--font-mono-display), monospace",
              }}
            >
              cs.IT &nbsp;/&nbsp; quant-ph &nbsp;/&nbsp; q-bio.NC
            </span>
          </div>

          {/* Title block */}
          <div className="mb-8">
            <p
              className="text-xs mb-4 uppercase tracking-widest"
              style={{
                color: "var(--dim)",
                fontFamily: "var(--font-mono-display), monospace",
              }}
            >
              Figueira, A. P. &nbsp;(2026).
            </p>
            <h2
              className="font-serif font-medium leading-tight mb-2"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "var(--text)",
                letterSpacing: "-0.01em",
              }}
            >
              Informational Substrate Convergence
            </h2>
            <p
              className="font-serif"
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                color: "var(--muted)",
                lineHeight: 1.4,
              }}
            >
              An Exploratory Philosophical Framework for Reality and Consciousness
            </p>
          </div>

          {/* Divider */}
          <div
            className="mb-8"
            style={{ height: "1px", backgroundColor: "var(--border)" }}
          />

          {/* Body — two column on desktop */}
          <div className="grid md:grid-cols-5 gap-8 md:gap-14">

            {/* Abstract + pull quote */}
            <div className="md:col-span-3">
              <p
                className="text-xs uppercase tracking-widest mb-4"
                style={{
                  color: "var(--dim)",
                  fontFamily: "var(--font-mono-display), monospace",
                }}
              >
                Abstract
              </p>
              <p
                className="leading-relaxed mb-7 prose-justified"
                style={{ color: "var(--muted)", fontSize: "0.9375rem" }}
              >
                ISC examines the possibility that reality might be fundamentally
                informational, drawing on quantum information theory, the holographic
                principle, and integrated information theory to argue that informational
                ontology deserves serious consideration as an alternative to materialism.
                The framework proposes that consciousness emerges as specific patterns
                within an informational substrate, reframing the hard problem of
                consciousness as a question about which informational configurations
                give rise to experience.
              </p>

              {/* Pull quote */}
              <blockquote
                className="pl-5 font-serif italic leading-relaxed"
                style={{
                  borderLeft: "2px solid var(--accent)",
                  color: "var(--muted)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.65,
                }}
              >
                &ldquo;The hard problem of consciousness becomes less mysterious when
                both physical reality and consciousness are different manifestations
                of the same underlying informational substrate.&rdquo;
              </blockquote>
            </div>

            {/* Keywords */}
            <div className="md:col-span-2">
              <p
                className="text-xs uppercase tracking-widest mb-5"
                style={{
                  color: "var(--dim)",
                  fontFamily: "var(--font-mono-display), monospace",
                }}
              >
                Keywords
              </p>
              <div className="space-y-2.5">
                {keywords.map((kw) => (
                  <div
                    key={kw}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    <span
                      className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "var(--border-2)" }}
                    />
                    {kw}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer row */}
          <div
            className="flex flex-wrap items-center justify-between gap-4 mt-10 pt-6"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <div className="flex flex-wrap gap-6">
              <span
                className="text-sm transition-colors duration-150"
                style={{
                  color: "var(--dim)",
                  fontFamily: "var(--font-mono-display), monospace",
                  cursor: "default",
                }}
              >
                arXiv — publishing soon
              </span>
              <a
                href="https://github.com/andrefigueira/information-substrate-convergence"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors duration-150"
                style={{
                  color: "var(--muted)",
                  fontFamily: "var(--font-mono-display), monospace",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                Read draft on GitHub →
              </a>
            </div>
            <span
              className="text-xs"
              style={{
                color: "var(--dim)",
                fontFamily: "var(--font-mono-display), monospace",
              }}
            >
              Independent Researcher · 2026
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
