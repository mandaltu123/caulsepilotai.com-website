"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const challenges = [
  "Fragmented enterprise data",
  "Hallucinating AI models",
  "Weak system architecture",
  "Lack of integration with existing systems"
];

export default function Problem() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="The challenge"
              title="Why Most AI Projects Fail"
              description="Many teams experiment with AI but struggle to move beyond prototypes. Enterprise data is complex, models can be unreliable, and the underlying architecture often cannot support secure, scalable deployments."
            />
            <p className="text-slate-300 text-base sm:text-lg">
              CausePilot AI bridges this gap with production-grade AI
              infrastructure, integrating data, security, and user experience into
              a single coherent system.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl p-8"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Common blockers
            </p>
            <ul className="mt-6 space-y-4">
              {challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="flex items-center gap-3 text-slate-200"
                >
                  <span className="h-2 w-2 rounded-full bg-cyanGlow" />
                  {challenge}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
