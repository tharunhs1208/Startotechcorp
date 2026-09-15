"use client";

import React from "react";
import { Sparkles, Award, Cpu, ShieldCheck, Headphones } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const pillars = [
    {
      title: "Deep Technical Expertise",
      desc: "Our senior architects and developers have over a decade of experience shipping complex enterprise systems.",
      icon: Award,
      badge: "Proven Mastery",
      color: "blue",
    },
    {
      title: "Continuous Innovation",
      desc: "We pioneer sub-280ms voice AI pipelines, private enterprise RAG architectures, and modern cloud microservices.",
      icon: Cpu,
      badge: "Cutting-Edge",
      color: "purple",
    },
    {
      title: "Uncompromising Quality",
      desc: "Zero technical debt, automated testing suites, and SOC-2 Type II air-gapped security protocols.",
      icon: ShieldCheck,
      badge: "Zero-Defect",
      color: "emerald",
    },
    {
      title: "Dedicated 24/7 SLA Support",
      desc: "Direct access to principal engineering leads, contractually guaranteed 99.99% uptime, and rapid response times.",
      icon: Headphones,
      badge: "Carrier-Grade",
      color: "amber",
    },
  ];

  return (
    <section className="py-20 bg-slate-50/60 border-b border-slate-200/80 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Why StartoTech</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-4">
            Why Industry Leaders Choose To Build With Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We don&apos;t just deliver code — we engineer high-velocity software engines that drive measurable commercial ROI.
          </p>
        </motion.div>

        {/* 4 PILLARS WITH IN/OUT SCROLL ANIMATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="card-blueprint p-7 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all text-slate-800">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full inline-block mb-3">
                    {p.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
