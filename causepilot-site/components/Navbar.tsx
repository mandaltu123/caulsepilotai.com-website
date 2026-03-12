"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Product", href: "#product" },
  { label: "Architecture", href: "#architecture" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-midnight/70 border-b border-white/5"
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 text-white font-space">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyanGlow to-violetGlow shadow-glow" />
          CausePilot AI
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="text-sm px-4 py-2 rounded-full border border-cyanGlow/40 text-cyanGlow hover:bg-cyanGlow/10 transition"
        >
          Start a Conversation
        </a>
      </div>
    </motion.nav>
  );
}
