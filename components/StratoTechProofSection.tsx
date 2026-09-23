"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const PROOF_PILLARS = [
  {
    number: "01",
    title: "Digital Products",
    description: "Multi-tenant platforms, high-performance web applications, and intuitive interfaces built to scale from launch to high volume.",
  },
  {
    number: "02",
    title: "Business Systems",
    description: "Distributed ledgers, enterprise ERP integrations, and operational pipelines that eliminate fragmentation and administrative friction.",
  },
  {
    number: "03",
    title: "AI Experiences",
    description: "Real-time speech-to-speech conversational agents, private RAG pipelines, and automated intelligence embedded into daily workflows.",
  },
  {
    number: "04",
    title: "Real-world Applications",
    description: "Mission-critical architectures engineered with zero-trust security, resilient failover systems, and measurable business outcomes.",
  },
];

export default function StratoTechProofSection() {
  return (
    <section className="w-full py-20 sm:py-28 lg:py-32 bg-[#111111] text-white">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#82FFCD]" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#82FFCD] uppercase font-bold">
              PROOF &amp; PHILOSOPHY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-medium tracking-[-0.035em] text-white leading-[1.08] uppercase">
            ENGINEERED WITH DISCIPLINE, MEASURED BY IMPACT.
          </h2>
        </div>

        {/* 4 Large Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 pt-6 border-t border-white/10">
          {PROOF_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <span className="font-mono text-xs text-[#82FFCD] block font-bold">
                {pillar.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-white tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-[14px] text-zinc-400 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
