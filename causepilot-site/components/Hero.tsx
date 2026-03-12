"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      <div className="absolute inset-0 mesh-background opacity-90" />
      <div className="absolute inset-0 bg-hero-mesh mix-blend-screen opacity-60" />
      <motion.div
        className="absolute -top-10 right-10 h-56 w-56 rounded-full hero-orb opacity-60"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-10 h-72 w-72 rounded-full hero-orb opacity-40"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="glass-panel rounded-3xl p-10 md:p-14 border border-white/10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.35em] text-slate-400"
          >
            AI Product Consulting • Enterprise Architecture
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-space font-semibold text-white leading-tight"
          >
            AI Infrastructure for <span className="gradient-text">Enterprise Knowledge</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl"
          >
            CausePilot AI helps organizations design and deploy production-ready AI
            systems that transform internal data into intelligent products.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 text-base text-slate-400"
          >
            From architecture to deployment, we help teams build AI systems that scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyanGlow to-violetGlow text-midnight font-semibold shadow-glow"
            >
              Start a Conversation
            </a>
            <a
              href="#solutions"
              className="px-6 py-3 rounded-full border border-white/15 text-slate-200 hover:border-white/40 transition"
            >
              View Solutions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
