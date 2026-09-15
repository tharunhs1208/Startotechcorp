"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-slate-50/60 border-b border-slate-200/80 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* LEFT: IMAGE & BADGE OVERLAY */}
          <motion.div
            initial={{ opacity: 0, x: -35, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl group bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                alt="StartoTech Engineering Team"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Engineering Excellence</div>
                  <div className="text-base font-black text-slate-900">40+ Elite Developers &amp; Architects</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black">
                  S
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: STORY NARRATIVE & METRICS */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Technology With Purpose</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight leading-tight">
              We Engineer Scalable Software For Modern Business Leaders
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Founded on the principle that digital tools should eliminate organizational friction, StartoTech unifies high-performance web applications, native mobile apps, air-gapped AI intelligence, and scalable cloud systems under one cohesive standard.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "100% in-house senior engineers and UI/UX architects.",
                "Agile two-week delivery cycles with continuous sprint transparency.",
                "Zero-trust security and SOC-2 Type II compliant architectures.",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="btn-primary text-sm px-6 py-3.5 inline-flex items-center gap-2"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
