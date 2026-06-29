"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-screen px-6 md:px-10"
    >
      {/* ── Top row: name + nav ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center justify-between pt-8 pb-0 max-w-5xl mx-auto w-full"
      >
        <span
          className="font-serif text-base font-medium tracking-tight"
          style={{ color: "var(--text)" }}
        >
          André Figueira
        </span>
        <nav className="flex items-center gap-6 sm:gap-8">
          {[
            { label: "Research", href: "#research" },
            { label: "Work", href: "#work" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest transition-colors duration-150 hidden sm:block"
              style={{
                color: "var(--muted)",
                fontFamily: "var(--font-mono-display), monospace",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* ── Centre: the question ── */}
      <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full py-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-medium select-none"
          style={{
            fontSize: "clamp(4.25rem, 12.5vw, 11.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.025em",
            color: "var(--text)",
          }}
        >
          What is<br />
          reality<br />
          <span style={{ color: "var(--accent)" }}>made of?</span>
        </motion.h1>
      </div>

      {/* ── Bottom: identity + scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-5xl mx-auto w-full pb-10"
        style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--muted)", maxWidth: "52ch" }}
          >
            Independent researcher. First paper on informational ontology forthcoming on arXiv.
            Principal Engineer with 20+ years building systems at scale. Founder,{" "}
            <a
              href="https://polyxmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-150"
              style={{ color: "var(--text)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
            >
              Polyxmedia
            </a>
            .
          </p>
          <a
            href="#research"
            className="group flex items-center gap-2 text-xs uppercase tracking-widest flex-shrink-0 transition-colors duration-150"
            style={{
              color: "var(--dim)",
              fontFamily: "var(--font-mono-display), monospace",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--muted)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--dim)")
            }
          >
            Scroll to read
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="transition-transform duration-300 group-hover:translate-y-1"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
