"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Discovery",
    description: "Understanding business data and AI opportunities."
  },
  {
    title: "Architecture",
    description: "Designing secure and scalable AI systems."
  },
  {
    title: "Prototype",
    description: "Building a working AI prototype."
  },
  {
    title: "Production",
    description: "Deploying a secure enterprise-grade system."
  }
];

export default function Process() {
  return (
    <section className="section-padding bg-nebula/40">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="Consulting process"
          title="From Idea to Production"
          description="A structured engagement that aligns stakeholders, accelerates delivery, and ensures long-term system resilience."
        />
        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-6 flex flex-col gap-3"
            >
              <span className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Step {index + 1}
              </span>
              <h3 className="text-lg font-space text-white">{step.title}</h3>
              <p className="text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
