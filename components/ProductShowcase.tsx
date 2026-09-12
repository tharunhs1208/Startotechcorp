"use client";

import React, { useState } from "react";
import ProductCard, { ProductData } from "./ProductCard";
import { Sparkles, Layers, Check, X, Shield, Cpu, Zap, ArrowRight } from "lucide-react";

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
  },
];

export default function ProductShowcase({ onOpenDemo }: ProductShowcaseProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductData | null>(null);

  const filteredProducts =
    selectedFilter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.id === selectedFilter);

  return (
    <section id="products-showcase" className="py-20 md:py-32 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Flagship Product Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineered for High-Velocity Growth
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Explore our specialized autonomous platforms. Deploy independently or interconnect them for exponential corporate efficiency.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === "all"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              Full Suite (3 Products)
            </button>
            <button
              onClick={() => setSelectedFilter("product-zobay")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === "product-zobay"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                  : "bg-white/5 text-gray-400 hover:text-purple-300 hover:bg-white/10"
              }`}
            >
              Zobay (Voice AI)
            </button>
            <button
              onClick={() => setSelectedFilter("product-startone")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === "product-startone"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                  : "bg-white/5 text-gray-400 hover:text-emerald-300 hover:bg-white/10"
              }`}
            >
              StartOne (Enterprise OS)
            </button>
            <button
              onClick={() => setSelectedFilter("product-legalx")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === "product-legalx"
                  ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30"
                  : "bg-white/5 text-gray-400 hover:text-amber-300 hover:bg-white/10"
              }`}
            >
              LegalX (Legal Intel)
            </button>
          </div>
        </div>

        {/* Dynamic Card Grid with Animated Card Transitions */}
        <div
          className={`grid gap-8 transition-all duration-300 ${
            filteredProducts.length === 1
              ? "grid-cols-1 max-w-2xl mx-auto"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDemo={onOpenDemo}
              onExpandDetails={(p) => setActiveModalProduct(p)}
            />
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
