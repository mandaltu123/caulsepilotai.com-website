"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const offerings = [
  "Enterprise RAG platforms",
  "AI-powered knowledge systems",
  "AI analytics tools",
  "Intelligent internal assistants"
];

export default function WhatWeDo() {
  return (
    <section className="section-padding bg-nebula/40">
      <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="What we do"
            title="Enterprise AI, Built the Right Way"
            description="CausePilot AI designs and builds enterprise AI systems with production reliability, security, and scalability at the core."
          />
          <p className="text-slate-300 text-lg">
            We align business goals with AI architecture, ensuring every model,
            data connector, and workflow is designed for long-term success.
          </p>
        </div>
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-4"
        >
          {offerings.map((item) => (
            <li
              key={item}
              className="glass-panel rounded-xl px-6 py-5 text-slate-200 flex items-center justify-between"
            >
              <span>{item}</span>
              <span className="text-cyanGlow">→</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
