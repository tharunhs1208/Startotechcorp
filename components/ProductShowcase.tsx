"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProductCard, { ProductData } from "./ProductCard";
import { Sparkles, Layers, Check, X, Shield, Cpu, Zap, ArrowRight, Grid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductShowcaseProps {
  onOpenDemo: (productName?: string) => void;
}

export const PRODUCTS: ProductData[] = [
  {
    id: "product-zobay",
    name: "Zobay",
    category: "Autonomous Voice AI",
    tagline: "Ultra-low latency conversational AI phone agents with human emotion & reasoning.",
    description:
      "Zobay automates inbound customer service, outbound sales calls, appointment bookings, and dynamic CRM syncing. Trained with human conversational cadence and sub-300ms audio delivery.",
    badgeColor: "bg-purple-500/15 text-purple-300 border border-purple-500/30",
    accentGradient: "from-purple-500 via-indigo-500 to-cyan-400",
    glowClass: "glow-zobay",
    icon: "mic",
    features: [
      "Sub-280ms voice turn-taking latency",
      "Multilingual fluency in 40+ languages",
      "Native CRM & Calendar bi-directional sync",
      "Emotion-aware tone and adaptive empathy",
    ],
    metrics: [
      { label: "Call Resolution", value: "92.4%" },
      { label: "Cost Per Minute Saved", value: "85%" },
    ],
    tags: ["Speech-to-Speech", "Voice Cloning", "Telephony Gateway", "CRM Mesh"],
    video: "/videos/zobay.mp4",
  },
  {
    id: "product-startone",
    name: "StartOne",
    category: "Enterprise Cloud OS",
    tagline: "The all-in-one execution layer for modern companies, finances, and multi-tenant operations.",
    description:
      "StartOne replaces fragmented SaaS stacks with a unified enterprise operating system. Orchestrate multi-entity accounting, automated approval pipelines, employee lifecycle, and real-time execution dashboards.",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
    accentGradient: "from-emerald-400 via-teal-500 to-blue-500",
    glowClass: "glow-startone",
    icon: "grid",
    features: [
      "Multi-entity ledger & real-time fiscal audit",
      "Zero-code drag-and-drop workflow orchestration",
      "Enterprise access control & SSO permissions",
      "Unified team chat, tasks, and resource tracking",
    ],
    metrics: [
      { label: "Admin Hours Saved", value: "32 hrs/wk" },
      { label: "SaaS Redundancy Cut", value: "-64%" },
    ],
    tags: ["Operations", "Workspaces", "Financial Ledger", "Pipeline Automation"],
    video: "/videos/startone.mp4",
  },
  {
    id: "product-legalx",
    name: "LegalX",
    category: "AI Legal Intelligence",
    tagline: "Contract auditing, clause risk detection, and regulatory compliance at machine speed.",
    description:
      "LegalX accelerates enterprise legal counsel workflows. Instantly detect high-risk indemnification, non-standard liabilities, jurisdiction conflicts, and generate precision redlines aligned with internal playbooks.",
    badgeColor: "bg-amber-500/15 text-amber-300 border border-amber-500/30",
    accentGradient: "from-amber-400 via-rose-500 to-purple-600",
    glowClass: "glow-legalx",
    icon: "shield",
    features: [
      "Instant risk grading across 50+ clause categories",
      "Automated playbook redlining & negotiation prompts",
      "SOC-2 & GDPR regulatory compliance checks",
      "Semantic search across hundreds of past precedents",
    ],
    metrics: [
      { label: "Review Speedup", value: "10x" },
      { label: "Risk Mitigation", value: "99.8%" },
    ],
    tags: ["Contract Analysis", "Regulatory AI", "Playbook Redlining", "Risk Audits"],
    video: "/videos/legalx.mp4",
  },
];

export default function ProductShowcase({ onOpenDemo }: ProductShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductData | null>(null);

  const categories = [
    { id: "all", label: "All Flagships" },
    { id: "Autonomous Voice AI", label: "Voice AI (Zobay)" },
    { id: "Enterprise Cloud OS", label: "Enterprise OS (StartOne)" },
    { id: "AI Legal Intelligence", label: "Legal AI (LegalX)" },
  ];

  const filteredProducts = activeCategory === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products-showcase" className="py-16 md:py-20 relative z-20 bg-slate-50/50 border-b border-slate-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-[120px]">
        
        {/* Section Heading - Left Aligned */}
        <div className="w-full flex flex-col items-start justify-start text-left max-w-5xl mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Flagship Products &amp; Ecosystem
          </div>
          <h2 className="text-left w-full text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900 mb-4 break-words">
            Autonomous Solutions In Production
          </h2>
          <p className="text-left text-sm sm:text-base text-slate-600 max-w-2xl mb-8">
            Explore the 3 core flagship platforms deployed by StartoTech across enterprise voice automation, cloud enterprise OS, and machine-speed legal intelligence.
          </p>

          {/* Drospecta Category Filter Pill Tab Bar */}
          <div className="flex flex-wrap items-center justify-start p-1.5 rounded-2xl sm:rounded-full bg-white border border-slate-200 shadow-sm gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? "text-white bg-slate-900 font-bold shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Core Flagship Product Cards Grid with In/Out Transitions */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence>
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProductCard
                  product={product}
                  onOpenDemo={onOpenDemo}
                  onExpandDetails={(p) => setActiveModalProduct(p)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Products CTA Button */}
        <div className="flex justify-center items-center">
          <Link href="/portfolio">
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="redstone-btn px-8 py-4 text-base cursor-pointer shadow-lg shadow-slate-900/10"
            >
              <span>View All Products</span>
              <div className="btn-icon-circle w-10 h-10">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          </Link>
        </div>

      </div>

      {/* Product Deep Specs Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${activeModalProduct.badgeColor}`}>
                  {activeModalProduct.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  {activeModalProduct.name} Technical Blueprint
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-6 overflow-y-auto text-left">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 font-mono">
                  Autonomous Architecture Overview
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {activeModalProduct.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 font-mono">
                  Engineered Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalProduct.features?.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-xs text-slate-700 font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 font-mono">
                  Production Telemetry Metrics
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {activeModalProduct.metrics?.map((m, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                      <div className="text-2xl font-black text-slate-900 mb-0.5">{m.value}</div>
                      <div className="text-xs text-slate-500 font-mono">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 font-semibold">SOC-2 Type II Certified</span>
              <button
                onClick={() => {
                  const pName = activeModalProduct.name;
                  setActiveModalProduct(null);
                  onOpenDemo(pName);
                }}
                className="redstone-btn text-xs px-5 py-2.5"
              >
                <span>Request {activeModalProduct.name} Sandbox</span>
                <div className="btn-icon-circle w-7 h-7">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
