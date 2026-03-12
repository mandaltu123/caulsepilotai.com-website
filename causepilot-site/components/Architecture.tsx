"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const pipeline = [
  "HR Systems",
  "Data Connectors",
  "Vector Database",
  "RAG Engine",
  "AI APIs",
  "Dashboards + Browser Extension"
];

const stack = ["AWS", "LangChain", "OpenSearch", "Python", "React"];

export default function Architecture() {
  return (
    <section id="architecture" className="section-padding">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="AI architecture"
          title="Enterprise-Grade AI Pipeline"
          description="A secure, production-ready architecture built to support real-time knowledge retrieval and intelligent experiences."
        />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl p-8"
          >
            <div className="space-y-4">
              {pipeline.map((step, index) => (
                <div key={step} className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-sm text-cyanGlow">
                      {index + 1}
                    </span>
                    <span className="text-slate-200">{step}</span>
                  </div>
                  {index < pipeline.length - 1 ? (
                    <div className="flex justify-center text-slate-500">↓</div>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.div>
          <div className="space-y-6">
            <p className="text-slate-300 text-lg">
              We design every layer of the system, from data ingestion to
              product-grade interfaces, ensuring security, observability, and
              performance from day one.
            </p>
            <div className="flex flex-wrap gap-3">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
