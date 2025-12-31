"use client";

import { motion } from "framer-motion";

export function Intro() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed"
        >
          Hey, I'm Andre. I build backend systems, APIs, and the occasional AI product.
          I've been doing this for a while now, mostly for companies that need things to
          actually work at scale. If you need someone who ships production code and doesn't
          overcomplicate things, we should talk.
        </motion.p>
      </div>
    </section>
  );
}
