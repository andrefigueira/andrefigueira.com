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
          I&apos;m André. I spend my time in two modes: building production systems that
          process billions of events at scale, and asking what those systems &mdash; and
          everything else &mdash; are fundamentally made of. My first paper argues the
          answer might be information. The engineering work pays the bills. Both keep me
          honest.
        </motion.p>
      </div>
    </section>
  );
}
