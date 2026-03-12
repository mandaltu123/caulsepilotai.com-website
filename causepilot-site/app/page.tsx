import Architecture from "../components/Architecture";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Credibility from "../components/Credibility";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Problem from "../components/Problem";
import Process from "../components/Process";
import Products from "../components/Products";
import Solutions from "../components/Solutions";
import WhatWeDo from "../components/WhatWeDo";

export default function Home() {
  return (
    <main className="bg-midnight text-white">
      <Navbar />
      <Hero />
      <Problem />
      <WhatWeDo />
      <Solutions />
      <Products />
      <Architecture />
      <Process />
      <Credibility />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
