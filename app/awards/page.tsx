"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import Testimonials from "@/components/Testimonials";
import { Sparkles, Award, Star, ShieldCheck, CheckCircle2, Trophy, ExternalLink, Shield, Lock, FileCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AwardsPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const awards = [
    {
      title: "Enterprise AI Infrastructure Honors",
      issuer: "Global Awwwards & CSS Reel",
      year: "2025",
      product: "StartoTech Sovereign Suite",
      badge: "Featured Site of the Day",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      desc: "Honored for breakthrough UX architecture, sub-280ms streaming response rates, and cohesive design systems.",
    },
    {
      title: "SOC-2 Type II & ISO 27001 Certification",
      issuer: "AICPA Independent Audit Board",
      year: "2025",
      product: "Private VPC & Sovereign Mesh",
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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#9fe870] selection:text-slate-950">
      <Navbar onOpenDemo={() => setDemoModalOpen(true)} />

      <main className="pt-36 pb-28">
        {/* Page Header - Left Aligned */}
        <div className="w-full px-4 sm:px-8 lg:px-[120px] mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Verification &amp; Accreditations
          </div>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-slate-950 mb-6">
            Certificates &amp; Awards
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Our autonomous platforms are rigorously audited, battle-tested across tier-1 enterprises, and recognized by enterprise security standards and global technology institutions.
          </p>
        </div>

        {/* Awards Cards with Photos & Badges */}
        <div className="w-full px-4 sm:px-8 lg:px-[120px] grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 text-left">
          {awards.map((aw, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-xl transition-all flex flex-col justify-between shadow-sm overflow-hidden group"
            >
              {/* Photo Showcase Header */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <img
                  src={aw.image}
                  alt={aw.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-white">
                    {aw.year}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-slate-950 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
                    {aw.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 pt-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                    {aw.product}
                  </span>
                  <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-2 group-hover:text-emerald-700 transition-colors">
                    {aw.title}
                  </h3>
                  <div className="text-xs text-slate-500 font-mono mb-4">{aw.issuer}</div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{aw.desc}</p>
                </div>

                <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Verified Production Standard
                  </span>
                  <button
                    onClick={() => setDemoModalOpen(true)}
                    className="text-slate-600 hover:text-slate-950 font-medium flex items-center gap-1 cursor-pointer"
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
        <div className="w-full px-4 sm:px-8 lg:px-[120px] mb-28">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm text-left">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-950">Full Enterprise Security Compliance</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed max-w-xl">
                  SOC-2 Type II, ISO 27001, HIPAA, and GDPR audited with 99.99% financial uptime SLA.
                </p>
              </div>
            </div>

            <button
              onClick={() => setDemoModalOpen(true)}
              className="redstone-btn text-xs sm:text-sm px-8 py-4 shrink-0 cursor-pointer shadow-lg shadow-slate-950/20"
            >
              <span>Download Compliance Brief</span>
              <div className="btn-icon-circle">
                <FileCheck className="w-4 h-4 text-[#0e0f0c]" />
              </div>
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <Testimonials />
      </main>

      <Footer onOpenDemo={() => setDemoModalOpen(true)} />
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} defaultProduct="StartoTech Compliance Audit" />
    </div>
  );
}
