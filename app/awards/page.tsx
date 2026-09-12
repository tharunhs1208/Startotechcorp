"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import Testimonials from "@/components/Testimonials";
import { Sparkles, Award, Star, ShieldCheck, CheckCircle2, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function AwardsPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const awards = [
    {
      title: "Enterprise AI Infrastructure Honor",
      issuer: "Global Tech Awards",
      year: "2025",
      product: "Zobay Voice Engine",
      desc: "Recognized for achieving sub-280ms voice turn-taking latency and emotion adaptation across 38 global edge POPs.",
    },
    {
      title: "SOC-2 Type II & ISO 27001 Certification",
      issuer: "AICPA Compliance Board",
      year: "2025",
      product: "Fortune Enterprise Cloud",
      desc: "Zero-exception compliance audit validating full data isolation and air-gapped VPC architecture.",
    },
    {
      title: "Best Legal Tech Automation Platform",
      issuer: "Corporate Counsel Review",
      year: "2024",
      product: "LegalX Contract AI",
      desc: "Honored for automated playbook redlining and 10x acceleration of enterprise procurement contracts.",
    },
    {
      title: "Enterprise Architecture Excellence",
      issuer: "Awwwards & CSS Reel",
      year: "2024",
      product: "StartOne Cloud OS",
      desc: "Top design recognition for high-performance minimalist interface and unified multi-tenant execution.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#090a0f] text-white selection:bg-[#e70000] selection:text-white">
      <Navbar onOpenDemo={() => setDemoModalOpen(true)} />

      <main className="pt-36 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#e70000] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Verification & Honors
          </div>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight mb-6">
            Certificates & Awards
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our autonomous platforms are rigorously audited, battle-tested, and recognized by enterprise security standards and technology institutions globally.
          </p>
        </div>

        {/* Awards Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {awards.map((aw, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#12141d]/90 border border-white/10 hover:border-[#e70000]/40 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {aw.year}
                  </span>
                  <span className="text-xs font-semibold text-[#e70000] uppercase tracking-wider">
                    {aw.product}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{aw.title}</h3>
                <div className="text-xs text-gray-400 font-mono mb-4">{aw.issuer}</div>
                <p className="text-sm text-gray-300 leading-relaxed">{aw.desc}</p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Verified Production Standard
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <Testimonials />
      </main>

      <Footer onOpenDemo={() => setDemoModalOpen(true)} />
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
}
