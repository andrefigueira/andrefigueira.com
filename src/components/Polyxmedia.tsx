"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Polyxmedia() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.a
          href="https://polyxmedia.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.01 }}
          className="block relative overflow-hidden rounded-2xl group"
        >
          {/* Animated rainbow border */}
          <div
            className="absolute inset-0 rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity"
            style={{
              background: "linear-gradient(90deg, #9B5FFF, #29D8FF, #FF2994, #9B5FFF)",
              backgroundSize: "200% 100%",
              animation: "rainbow-shift 3s ease-in-out infinite",
              padding: "1px",
            }}
          />

          {/* Inner content */}
          <div className="relative rounded-2xl bg-black m-[1px] p-6 md:p-8 overflow-hidden">
            {/* Subtle grid background */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(155, 95, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(155, 95, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />

            {/* Gradient glow effect */}
            <div
              className="absolute top-0 right-0 w-96 h-96 opacity-30 blur-3xl"
              style={{
                background: "radial-gradient(circle, rgba(155, 95, 255, 0.4) 0%, transparent 70%)",
              }}
            />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-4">
                  <Image
                    src="/polyxmedia-logo.png"
                    alt="Polyxmedia"
                    width={180}
                    height={40}
                    className="h-8 w-auto hidden dark:block"
                  />
                  <Image
                    src="/polyxmedia-logo-dark.png"
                    alt="Polyxmedia"
                    width={180}
                    height={40}
                    className="h-8 w-auto dark:hidden"
                  />
                  <span
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "var(--font-space), sans-serif" }}
                  >
                    Polyxmedia
                  </span>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span
                    className="text-xs font-medium text-gray-300"
                    style={{ fontFamily: "var(--font-space), sans-serif" }}
                  >
                    Available for Projects
                  </span>
                </div>

                {/* Heading */}
                <h2
                  className="text-2xl md:text-3xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  Need senior engineering expertise?
                </h2>

                <p
                  className="text-gray-400 max-w-md leading-relaxed"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  AI integration, architecture consulting, and hands-on development.
                  The same approach I use for billion-event systems, scaled to your needs.
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-4">
                {/* CTA Button */}
                <div
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold group-hover:scale-105 transition-transform"
                  style={{
                    fontFamily: "var(--font-space), sans-serif",
                  }}
                >
                  Visit Polyxmedia
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
                <span
                  className="text-sm text-gray-500"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  polyxmedia.com
                </span>
              </div>
            </div>

            {/* Rainbow line at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px]"
              style={{
                background: "linear-gradient(90deg, #9B5FFF 0%, #29D8FF 25%, #FF2994 50%, #FFB800 75%, #9B5FFF 100%)",
                backgroundSize: "200% 100%",
                animation: "rainbow-shift 3s linear infinite",
              }}
            />
          </div>
        </motion.a>
      </div>
    </section>
  );
}
