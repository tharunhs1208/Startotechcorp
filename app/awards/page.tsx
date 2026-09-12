"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import Testimonials from "@/components/Testimonials";
import { Sparkles, Award, Star, ShieldCheck, CheckCircle2, Trophy, ExternalLink, Shield, Lock, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function AwardsPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const awards = [
    {
      title: "Enterprise AI Infrastructure Honors",
      issuer: "Global Awwwards & CSS Reel",
      year: "2025",
      product: "Fortune Suite",
      badge: "Featured Site of the Day",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      desc: "Honored for breakthrough UX architecture, sub-280ms streaming response rates, and cohesive design systems.",
    },
    {
      title: "SOC-2 Type II & ISO 27001 Certification",
      issuer: "AICPA Independent Audit Board",
      year: "2025",
      product: "Private VPC & Security Mesh",
      badge: "Zero-Exception Audit",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
      desc: "Full verification of air-gapped data segregation, end-to-end payload encryption, and 99.99% high availability SLA.",
    },
    {
      title: "Autonomous Voice Turnaround Excellence",
      issuer: "Telephony & Speech AI Summit",
      year: "2024",
      product: "Zobay Speech Engine",
      badge: "Industry Standard Award",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop",
      desc: "Recognized as the fastest conversational phone AI platform with human emotion cadence and dynamic interruption recovery.",
    },
    {
      title: "Best Legal Tech Automation Solution",
      issuer: "Corporate Counsel Review",
      year: "2024",
      product: "LegalX Contract Sentinel",
      badge: "Top Legal Innovation",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop",
      desc: "Achieved 10x speedup in Fortune 500 procurement audits and automated playbook redlining across 50+ clause risk categories.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#090a0f] text-white selection:bg-[#e70000] selection:text-white">
      <Navbar onOpenDemo={() => setDemoModalOpen(true)} />

      <main className="pt-36 pb-28">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#e70000] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Verification & Honors
          </div>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight mb-6">
            Certificates & Awards
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our autonomous platforms are rigorously audited, battle-tested, and recognized by enterprise security standards and global technology institutions.
          </p>
        </div>

        {/* Awards Cards with Photos & Badges */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {awards.map((aw, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-[#12141d]/90 border border-white/10 hover:border-[#e70000]/40 transition-all flex flex-col justify-between shadow-2xl overflow-hidden group"
            >
              {/* Photo Showcase Header */}
              <div className="relative h-56 w-full overflow-hidden bg-black">
                <img
                  src={aw.image}
                  alt={aw.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-75 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141d] via-[#12141d]/40 to-transparent" />
                
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-white">
                    {aw.year}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-[#e70000]/20 border border-[#e70000]/40 text-[#ff4d4d] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    {aw.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 pt-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#e70000] uppercase tracking-wider block mb-1">
                    {aw.product}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                    {aw.title}
                  </h3>
                  <div className="text-xs text-gray-400 font-mono mb-4">{aw.issuer}</div>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">{aw.desc}</p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Verified Production Standard
                  </span>
                  <button
                    onClick={() => setDemoModalOpen(true)}
                    className="text-gray-400 hover:text-white font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect Specs</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Security & Compliance Bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#10121a]/95 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#e70000]/15 border border-[#e70000]/30 text-[#e70000] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Full Enterprise Security Compliance</h4>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  SOC-2 Type II, ISO 27001, HIPAA, and GDPR audited with 99.99% financial uptime SLA.
                </p>
              </div>
            </div>

            <button
              onClick={() => setDemoModalOpen(true)}
              className="redstone-btn shrink-0"
            >
              <span>Download Compliance Brief</span>
              <div className="btn-icon-circle">
                <FileCheck className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <Testimonials />
      </main>

      <Footer onOpenDemo={() => setDemoModalOpen(true)} />
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
}

