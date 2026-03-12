"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const features = [
  "HR document intelligence",
  "AI-powered HR analytics",
  "Chrome extension assistant",
  "Enterprise API integration",
  "Policy search using RAG"
];

export default function Products() {
  return (
    <section id="product" className="section-padding bg-nebula/40">
      <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Flagship product"
            title="SentraHR AI"
            description="SentraHR AI is an AI-powered HR Intelligence platform that allows employees to query HR policies, documentation, and analytics using natural language."
          />
          <p className="text-slate-300 text-lg">
            Deliver consistent HR answers, surface analytics, and give teams
            instant access to the policies they need.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-lg font-space text-white">Product capabilities</h3>
          <ul className="mt-6 space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-slate-200">
                <span className="mt-1 h-2 w-2 rounded-full bg-violetGlow" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
