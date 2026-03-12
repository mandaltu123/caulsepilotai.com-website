"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-nebula/40">
      <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <SectionHeading
          eyebrow="Contact"
          title="Request a Consultation"
          description="Share your AI initiative and we will respond with a tailored plan for next steps."
        />
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          name="consultation"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="glass-panel rounded-2xl p-8 space-y-5"
        >
          <input type="hidden" name="form-name" value="consultation" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <div className="grid gap-4">
            <input
              name="name"
              placeholder="Name"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyanGlow/60"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyanGlow/60"
              required
            />
            <input
              name="company"
              placeholder="Company"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyanGlow/60"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyanGlow/60"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full px-6 py-3 bg-gradient-to-r from-cyanGlow to-violetGlow text-midnight font-semibold shadow-glow"
          >
            Request Consultation
          </button>
        </motion.form>
      </div>
    </section>
  );
}
