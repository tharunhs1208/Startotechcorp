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
    <section id="tech-stack-section" className="py-24 relative z-20 bg-white border-t border-slate-200/80 overflow-hidden">
      {/* 1. Redstone 'Join the Best' Continuous Marquee Banner */}
      <div className="w-full px-4 sm:px-8 lg:px-[120px] mb-12 text-left">
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight mb-4">
          Join the Best
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
          Powering transformative enterprise workloads for category-defining organizations globally.
        </p>
      </div>

      {/* Infinite Logo / Client Marquee */}
      <div className="relative w-full overflow-hidden py-4 mb-24 border-y border-slate-200 bg-slate-50/50">
        <div className="animate-marquee gap-8 items-center">
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 px-6 py-3 rounded-2xl bg-white border border-slate-200 shrink-0 shadow-sm hover:border-emerald-500/50 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-600" />
              <span className="font-bold text-slate-900 text-sm uppercase tracking-wider">{client.name}</span>
              <span className="text-xs text-slate-500 font-mono">• {client.industry}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Redstone 'Our Technologies' 3-Tier Grid */}
      <div className="w-full px-4 sm:px-8 lg:px-[120px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3 inline-block">
              Architectural Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
              Our Technologies
            </h2>
          </div>

          {/* Tier Switcher */}
          <div className="flex rounded-full bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setActiveTier("single")}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTier === "single"
                  ? "bg-slate-900 text-white font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              Single
            </button>
            <button
              onClick={() => setActiveTier("middle")}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTier === "middle"
                  ? "bg-slate-900 text-white font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              Middle
            </button>
            <button
              onClick={() => setActiveTier("enterprise")}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTier === "enterprise"
                  ? "bg-slate-900 text-white font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left"
          >
            {technologies[activeTier].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300 group flex items-start justify-between cursor-pointer shadow-sm"
              >
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    {item.category}
                  </div>
                  <div className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-2 font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    {item.level}
                  </div>
                </div>

                <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:text-white group-hover:bg-slate-900 transition-colors">
                  <Code2 className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Redstone Summary bar */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900 border border-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <div className="text-white font-bold text-lg">
              A personalized approach to every enterprise deployment
            </div>
            <div className="text-slate-300 text-sm mt-1">
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