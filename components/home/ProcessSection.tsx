"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    { step: "01", title: "Discover", desc: "Understanding your vision, business goals, user personas, and technical boundaries." },
    { step: "02", title: "Plan", desc: "Crafting architectural blueprints, database schemas, API specs, and sprint roadmaps." },
    { step: "03", title: "Design", desc: "Interactive Figma design systems, wireframes, prototypes, and user experience testing." },
    { step: "04", title: "Develop", desc: "Agile 2-week sprints with clean, modular TypeScript code and automated unit tests." },
    { step: "05", title: "Test", desc: "Rigorous QA, load testing, security audits, and cross-device performance optimization." },
    { step: "06", title: "Launch", desc: "Zero-downtime production cutover, telemetry monitoring, and ongoing SLA support." },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-4">
            Our 6-Stage Precision Delivery Framework
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A structured, transparent engineering lifecycle designed to eliminate surprises and guarantee on-time launches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {steps.map((st, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all text-left flex flex-col justify-between group"
            >
              <div>
                <span className="text-3xl font-mono font-black text-slate-300 group-hover:text-blue-600 transition-colors block mb-3">
                  {st.step}
                </span>
                <h3 className="text-lg font-bold text-slate-950 mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
