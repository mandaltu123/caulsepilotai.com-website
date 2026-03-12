"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const solutions = [
  {
    title: "Enterprise RAG Platforms",
    description:
      "Build knowledge assistants that connect AI models with enterprise data."
  },
  {
    title: "AI Data Platforms",
    description:
      "Turn enterprise data into intelligent insights using AI."
  },
  {
    title: "AI Product Architecture",
    description:
      "Design scalable AI systems on cloud infrastructure."
  },
  {
    title: "AI System Integration",
    description:
      "Integrate AI into existing tools like HR systems, CRMs, and internal dashboards."
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="section-padding">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="Solutions"
          title="Enterprise AI, Production Ready"
          description="Modular AI capabilities designed to accelerate delivery without compromising security or reliability."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-8 hover:border-cyanGlow/40 transition"
            >
              <h3 className="text-xl font-space text-white">{solution.title}</h3>
              <p className="mt-4 text-slate-300">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
