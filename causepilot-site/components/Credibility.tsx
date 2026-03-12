"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Credibility() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <SectionHeading
            eyebrow="Why CausePilot AI"
            title="Enterprise AI Expertise, Delivered"
            description="Organizations work with CausePilot AI for enterprise AI architecture, scalable cloud infrastructure, secure data systems, and production-ready AI platforms. We bring clarity and discipline to AI initiatives that demand reliability."
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl p-8"
          >
            <p className="text-slate-300">
              Every engagement is led by an AI Product Consultant and Enterprise
              AI Architect focused on practical outcomes, measurable performance,
              and long-term system resilience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
