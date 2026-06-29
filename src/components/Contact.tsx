"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-header-num">04</span>
          <span className="section-header-title">Contact</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Email", value: "andre.figueira@me.com", href: "mailto:andre.figueira@me.com" },
            { label: "GitHub", value: "andrefigueira", href: "https://github.com/andrefigueira" },
            { label: "LinkedIn", value: "in/andrefigueira", href: "https://linkedin.com/in/andrefigueira" },
            { label: "Twitter", value: "@voidmode", href: "https://twitter.com/voidmode" },
          ].map((link) => (
            <div key={link.label}>
              <p
                className="text-xs uppercase tracking-widest mb-2"
                style={{
                  color: "var(--dim)",
                  fontFamily: "var(--font-mono-display), monospace",
                }}
              >
                {link.label}
              </p>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-sm transition-colors duration-150"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {link.value}
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
