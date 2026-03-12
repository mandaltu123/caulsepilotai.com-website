"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl glass-panel rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
            Ready to build
          </p>
          <h3 className="mt-4 text-3xl sm:text-4xl font-space text-white">
            Build Your Next AI Platform
          </h3>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl">
            Work with CausePilot AI to design and deploy intelligent AI systems
            built for enterprise scale.
          </p>
        </div>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-cyanGlow to-violetGlow text-midnight font-semibold shadow-glow"
        >
          Book an AI Strategy Call
        </a>
      </motion.div>
    </section>
  );
}
