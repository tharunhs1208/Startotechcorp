"use client";

import React, { useState } from "react";
import { ArrowRight, Code2, Cpu, Database, Cloud, Globe, Smartphone, Server, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TechStackProps {
  onOpenDemo?: () => void;
}

export default function TechStack({ onOpenDemo }: TechStackProps) {
  const [activeTier, setActiveTier] = useState<"single" | "middle" | "enterprise">("enterprise");

  const clients = [
    { name: "SOCAN", industry: "Media & Licensing", flag: "US" },
    { name: "ValidSoft", industry: "Biometric Security", flag: "UK" },
    { name: "BaseOne", industry: "Fintech Platform", flag: "EU" },
    { name: "Unilock", industry: "Manufacturing", flag: "CA" },
    { name: "Creation of Smile", industry: "Healthcare Tech", flag: "EU" },
    { name: "Boston Group", industry: "Enterprise SaaS", flag: "US" },
    { name: "UAM Power", industry: "Clean Energy", flag: "US" },
    { name: "Media Service", industry: "Telecommunications", flag: "EU" },
  ];

  const technologies = {
    single: [
      { name: "HTML", category: "Markup Standard", level: "Semantic HTML5" },
      { name: "CSS", category: "Style & Layout", level: "Responsive & Modern" },
      { name: "WordPress", category: "CMS Platform", level: "Custom Themes & Core" },
      { name: "Shopify", category: "E-Commerce", level: "Liquid & Storefront" },
    ],
    middle: [
      { name: "Laravel", category: "PHP Framework", level: "Robust Architecture" },
      { name: "mySQL", category: "Relational Database", level: "High-Performance Queries" },
      { name: "vue", category: "Reactive Frontend", level: "Vue 3 & Nuxt" },
      { name: "PHP", category: "Backend Engine", level: "Modern PHP 8.x" },
    ],
    enterprise: [
      { name: "React.js", category: "Frontend Ecosystem", level: "Next.js & Fiber" },
      { name: "Azure", category: "Cloud & DevOps", level: "Enterprise Scalability" },
      { name: "Python", category: "AI & Backend", level: "Data & Neural Engines" },
      { name: "Angular", category: "Enterprise Frontend", level: "TypeScript Framework" },
      { name: "Node.js", category: "High-Concurrency Runtime", level: "Microservices & APIs" },
    ],
  };

  return (
    <section id="tech-stack-section" className="py-24 relative z-20 bg-[#08090e] border-t border-white/5 overflow-hidden">
      {/* 1. Redstone 'Join the Best' Continuous Marquee Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
          Join the Best
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Powering transformative enterprise workloads for category-defining organizations globally.
        </p>
      </div>

      {/* Infinite Logo / Client Marquee */}
      <div className="relative w-full overflow-hidden py-4 mb-24 border-y border-white/10 bg-white/[0.01]">
        <div className="animate-marquee gap-8 items-center">
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 shrink-0 hover:border-[#e70000]/50 transition-colors"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#e70000]" />
              <div className="flex flex-col text-left">
                <span className="font-bold text-white text-sm tracking-wider uppercase">
                  {client.name}
                </span>
                <span className="text-[11px] text-gray-400">
                  {client.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Redstone 'Our Technologies' 3-Tier Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#e70000] mb-2 block">
              Architectural Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Our Technologies
            </h2>
          </div>

          {/* Tier Switcher */}
          <div className="flex rounded-full bg-white/5 p-1 border border-white/10">
            <button
              onClick={() => setActiveTier("single")}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTier === "single"
                  ? "bg-[#e70000] text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Single
            </button>
            <button
              onClick={() => setActiveTier("middle")}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTier === "middle"
                  ? "bg-[#e70000] text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Middle
            </button>
            <button
              onClick={() => setActiveTier("enterprise")}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTier === "enterprise"
                  ? "bg-[#e70000] text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Enterprise
            </button>
          </div>
        </div>

        {/* Tech Grid with smooth motion transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTier}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {technologies[activeTier].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-6 rounded-2xl bg-[#12141e]/80 border border-white/10 hover:border-[#e70000]/40 transition-all duration-300 group flex items-start justify-between cursor-pointer"
              >
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    {item.category}
                  </div>
                  <div className="text-lg font-bold text-white group-hover:text-gray-100 transition-colors">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-400 mt-2 font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {item.level}
                  </div>
                </div>

                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-[#e70000] transition-colors">
                  <Code2 className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Redstone Summary bar */}
        <div className="mt-12 p-8 rounded-3xl bg-[#10121a]/90 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-white font-bold text-lg">
              A personalized approach to every enterprise deployment
            </div>
            <div className="text-gray-400 text-sm mt-1">
              Custom model fine-tuning, on-premise air-gapping, and dedicated SLAs.
            </div>
          </div>

          <button
            onClick={onOpenDemo}
            className="redstone-btn"
          >
            <span>Request Tech Brief</span>
            <div className="btn-icon-circle">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}