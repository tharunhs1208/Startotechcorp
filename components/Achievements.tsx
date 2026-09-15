"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Sparkles, Award, ShieldCheck, CheckCircle2, Star, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Counter from "./Counter";

export default function Achievements() {
  const achievements = [
    {
      title: "SOC-2 Type II & ISO 27001 Certified",
      issuer: "AICPA Independent Audit Board",
      year: "2025",
      badge: "Zero-Exception Audit",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
      desc: "Full verification of air-gapped data segregation, end-to-end payload encryption, and 99.99% high availability SLA.",
      accent: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    },
    {
      title: "Sub-280ms Voice Turnaround Excellence",
      issuer: "Telephony & Speech AI Summit",
      year: "2025",
      badge: "Industry Benchmark",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop",
      desc: "Recognized as the fastest conversational phone AI platform with human emotion cadence and dynamic interruption recovery.",
      accent: "border-[#9fe870]/30 text-[#9fe870] bg-[#9fe870]/10",
    },
    {
      title: "Enterprise AI Infrastructure Honors",
      issuer: "Global Awwwards & CSS Reel",
      year: "2025",
      badge: "Site of the Day",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      desc: "Honored for breakthrough UX architecture, sub-280ms streaming response rates, and cohesive design systems.",
      accent: "border-[#9fe870]/40 text-[#9fe870] bg-[#9fe870]/15",
    },
    {
      title: "Top Legal Tech Automation Solution",
      issuer: "Corporate Counsel Review",
      year: "2024",
      badge: "Top Legal Innovation",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop",
      desc: "Achieved 10x speedup in Fortune 500 procurement audits and automated playbook redlining across 50+ clause risk categories.",
      accent: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    },
  ];

  return (
    <section className="relative py-24 bg-slate-50/50 border-t border-slate-200/80 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-[120px]">
        {/* Left-Aligned Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4 backdrop-blur-md">
              <Trophy className="w-3.5 h-3.5 text-emerald-600" /> Industry Recognition &amp; Milestones
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-slate-900 mb-4 text-left">
              Achievements &amp; Accolades
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-left">
              StartoTech autonomous platforms are rigorously audited, battle-tested across tier-1 enterprises, and recognized globally.
            </p>
          </div>

          <Link href="/awards">
            <div className="redstone-btn-secondary text-xs sm:text-sm px-6 py-3 cursor-pointer shrink-0">
              <span>View All Certifications</span>
              <div className="btn-icon-circle">
                <ArrowRight className="w-4 h-4 text-slate-900" />
              </div>
            </div>
          </Link>
        </div>

        {/* 4 Core Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-sm overflow-hidden group"
            >
              {/* Image Preview Header */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-white">
                    {item.year}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider backdrop-blur-md ${item.accent}`}>
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs font-mono font-semibold text-slate-500 block mb-1">
                    {item.issuer}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight mb-3 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Verified Enterprise Standard
                  </span>
                  <Award className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Key Metric Milestones Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900">
              <Counter value={120} prefix="$" suffix="M+" decimals={0} />
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider font-bold mt-1">
              Ledger Volume Settled
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-black text-emerald-600">
              <Counter value={92.4} suffix="%" decimals={1} />
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider font-bold mt-1">
              Voice Call Resolution
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900">
              <Counter value={280} prefix="< " suffix="ms" decimals={0} />
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider font-bold mt-1">
              Audio Turnaround Latency
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-black text-teal-600">
              <Counter value={99.99} suffix="%" decimals={2} />
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider font-bold mt-1">
              High-Availability SLA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
