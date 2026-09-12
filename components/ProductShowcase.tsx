"use client";

import React, { useState } from "react";
import ProductCard, { ProductData } from "./ProductCard";
import { Sparkles, Layers, Check, X, Shield, Cpu, Zap, ArrowRight } from "lucide-react";
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
  {
    id: "product-baseone",
    name: "BaseOne",
    category: "Autonomous Fintech Mesh",
    tagline: "High-frequency treasury orchestration, multi-currency liquidity, and automated clearing.",
    description:
      "BaseOne bridges global fiat banking with smart distributed ledgers. Powers automated vendor payouts, liquidity rebalancing, and zero-latency transaction verification for international trade.",
    badgeColor: "bg-blue-500/15 text-blue-300 border border-blue-500/30",
    accentGradient: "from-blue-500 via-cyan-400 to-emerald-400",
    glowClass: "glow-startone",
    icon: "grid",
    features: [
      "Sub-second multi-currency settlement",
      "Automated tax and AML compliance grading",
      "Programmatic corporate card issuance",
      "Real-time institutional liquidity graph",
    ],
    metrics: [
      { label: "Settlement Speed", value: "<1.2s" },
      { label: "Treasury Yield", value: "+14.8%" },
    ],
    tags: ["FinTech", "Treasury", "Liquidity API", "Smart Ledgers"],
    video: "/videos/baseone.mp4",
  },
  {
    id: "product-validsoft",
    name: "ValidSoft",
    category: "Biometric Identity Mesh",
    tagline: "Acoustic voice biometric authentication and deepfake intrusion defense.",
    description:
      "ValidSoft delivers voice authentication and generative synthetic voice spoof prevention for banking, high-security phone lines, and mission-critical government defense access.",
    badgeColor: "bg-rose-500/15 text-rose-300 border border-rose-500/30",
    accentGradient: "from-rose-500 via-pink-500 to-amber-500",
    glowClass: "glow-zobay",
    icon: "shield",
    features: [
      "99.998% biometric voice match precision",
      "Real-time synthetic deepfake spoof detection",
      "Zero audio recording retention for full privacy",
      "Continuous behavioral authentication scoring",
    ],
    metrics: [
      { label: "Spoof Block Rate", value: "99.99%" },
      { label: "Auth Latency", value: "<140ms" },
    ],
    tags: ["Voice Biometrics", "Anti-Deepfake", "Zero-Trust", "FIDO2 Mesh"],
    video: "/videos/validsoft.mp4",
  },
  {
    id: "product-socan",
    name: "SOCAN AI",
    category: "Digital Rights & Media Cloud",
    tagline: "Automated media licensing, acoustic fingerprinting, and global royalty distribution.",
    description:
      "SOCAN AI fingerprints millions of live broadcasts and streams globally, matches complex licensing rights, and distributes micro-royalties instantaneously to artists and copyright holders.",
    badgeColor: "bg-indigo-500/15 text-indigo-300 border border-indigo-500/30",
    accentGradient: "from-indigo-500 via-purple-500 to-pink-500",
    glowClass: "glow-legalx",
    icon: "mic",
    features: [
      "Millisecond acoustic audio fingerprinting",
      "Global territorial copyright compliance",
      "Automated digital rights ledger & payouts",
      "Real-time broadcast tracking across 120+ countries",
    ],
    metrics: [
      { label: "Daily Streams Scanned", value: "450M+" },
      { label: "Royalty Accuracy", value: "99.9%" },
    ],
    tags: ["Media Cloud", "Audio AI", "Rights Ledger", "Global Telemetry"],
    video: "/videos/socan.mp4",
  },
];

export default function ProductShowcase({ onOpenDemo }: ProductShowcaseProps) {
  const [activeModalProduct, setActiveModalProduct] = useState<ProductData | null>(null);

  return (
    <section id="products-showcase" className="py-12 md:py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching Redstone 'We Are Proud' architecture - Fully Centered */}
        <div className="w-full flex flex-col items-center justify-center text-center max-w-5xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#e70000] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Flagship Products & Ecosystem
          </div>
          <h2 className="text-center w-full text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4 break-words">
            Autonomous Solutions In Production
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Explore the flagship platforms deployed by FortuneTechCorp across enterprise voice automation, cloud enterprise OS, and machine-speed legal intelligence.
          </p>
        </div>

        {/* 6 High-Performance Flagship Product Cards Grid with In/Out Transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.92, y: 35 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProductCard
                product={product}
                onOpenDemo={onOpenDemo}
                onExpandDetails={(p) => setActiveModalProduct(p)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Deep Specs Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="bg-[#12141e] border border-white/10 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${activeModalProduct.badgeColor}`}>
                  {activeModalProduct.category}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {activeModalProduct.name} Technical Blueprint
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="py-6 space-y-6 overflow-y-auto pr-2">
              <div>
                <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">
                  Architecture Overview
                </h4>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {activeModalProduct.description}
                </p>
              </div>

              {activeModalProduct.features && activeModalProduct.features.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-3">
                    Enterprise Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalProduct.features.map((feat, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-gray-300 flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeModalProduct.tags && activeModalProduct.tags.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-3">
                    Core Technologies & Integrations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProduct.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalProduct(null)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const name = activeModalProduct.name;
                  setActiveModalProduct(null);
                  onOpenDemo(name);
                }}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2"
              >
                <span>Request {activeModalProduct.name} Sandbox</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
