"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.header
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 right-0 z-50"
          style={{
            backgroundColor: "oklch(0.97 0.012 80 / 0.92)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="px-6 md:px-10 py-3">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
              <a
                href="/"
                className="font-serif text-base font-medium tracking-tight transition-colors duration-150"
                style={{ color: "var(--text)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
              >
                André Figueira
              </a>
              <nav className="flex items-center gap-7">
                {[
                  { label: "Research", href: "#research" },
                  { label: "Work", href: "#work" },
                  { label: "About", href: "#about" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-xs uppercase tracking-widest transition-colors duration-150"
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
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
