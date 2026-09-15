"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import ProductCard, { ProductData } from "@/components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Filter, Shield, Mic, LayoutGrid, Check, Cpu, Globe, Lock, Play } from "lucide-react";

export const ALL_PORTFOLIO_PRODUCTS: ProductData[] = [
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
    category: "Autonomous Legal Intel",
    tagline: "Machine-speed contract intelligence, automated redlines, and continuous regulatory compliance.",
    description:
      "LegalX accelerates deal closures by instantly scanning MSAs, NDAs, and enterprise contracts for risk vectors. Automatically suggests clause redlines that align with your risk tolerances.",
    badgeColor: "bg-amber-500/15 text-amber-300 border border-amber-500/30",
    accentGradient: "from-amber-400 via-orange-500 to-red-500",
    glowClass: "glow-legalx",
    icon: "shield",
    features: [
      "Instant multi-party contract redlining",
      "10-second contract risk scoring",
      "Global regulatory & compliance matrix",
      "Immutable audit trails for M&A due diligence",
    ],
    metrics: [
      { label: "Review Speedup", value: "10x Faster" },
      { label: "Contract Risk Catch", value: "99.8%" },
    ],
    tags: ["Contract Analysis", "Automated Redlining", "Risk Scoring", "Audit Trail"],
    video: "/videos/legalx.mp4",
  },
  {
    id: "product-baseone",
    name: "BaseOne",
    category: "Treasury & Clearing",
    tagline: "High-frequency treasury orchestration, multi-currency liquidity, and automated clearing.",
    description:
      "BaseOne provides institutional-grade payment clearing designed for high-volume enterprises, dynamic treasury management, and multi-currency instant conversion.",
    badgeColor: "bg-blue-500/15 text-blue-300 border border-blue-500/30",
    accentGradient: "from-blue-500 via-cyan-500 to-teal-400",
    glowClass: "glow-baseone",
    icon: "grid",
    features: [
      "Sub-50ms transaction finality",
      "Multi-currency liquidity pooling",
      "ISO 20022 messaging compliance",
      "Immutable zero-knowledge audit trail",
    ],
    metrics: [
      { label: "Settlement Speed", value: "< 50ms" },
      { label: "Liquidity Efficiency", value: "+40%" },
    ],
    tags: ["Treasury", "Settlement", "Liquidity", "ISO 20022"],
    video: "/videos/baseone.mp4",
  },
  {
    id: "product-validsoft",
    name: "ValidSoft",
    category: "Cybersecurity & Biometrics",
    tagline: "Acoustic voice biometric authentication and deepfake intrusion defense.",
    description:
      "ValidSoft performs micro-frequency vocal tract analysis detecting synthetic audio, voice cloning, and biometric spoofing in under 150 milliseconds of speech.",
    badgeColor: "bg-red-500/15 text-red-300 border border-red-500/30",
    accentGradient: "from-red-500 via-rose-500 to-pink-500",
    glowClass: "glow-validsoft",
    icon: "shield",
    features: [
      "99.8% synthetic voice rejection rate",
      "Hardware-accelerated spectrogram analysis",
      "Continuous threat intelligence telemetry",
      "Zero passphrase authentication",
    ],
    metrics: [
      { label: "Rejection Accuracy", value: "99.8%" },
      { label: "Detection Latency", value: "< 150ms" },
    ],
    tags: ["Acoustic Biometrics", "Deepfake Shield", "Cybersecurity", "Zero Trust"],
    video: "/videos/validsoft.mp4",
  },
  {
    id: "product-socan",
    name: "SOCAN AI",
    category: "Media Mesh & Royalty",
    tagline: "Automated media licensing, acoustic fingerprinting, and global royalty distribution.",
    description:
      "SOCAN AI recognizes media streams in real time across digital platforms with automated smart-contract royalty routing to rightsholders.",
    badgeColor: "bg-indigo-500/15 text-indigo-300 border border-indigo-500/30",
    accentGradient: "from-indigo-500 via-purple-500 to-pink-500",
    glowClass: "glow-socan",
    icon: "mic",
    features: [
      "1.2B track acoustic fingerprint index",
      "Automated micro-royalty routing",
      "Real-time stream monitoring across 140+ platforms",
      "Multi-stakeholder payout splits",
    ],
    metrics: [
      { label: "Recognition Speed", value: "0.2s" },
      { label: "Payout Accuracy", value: "100%" },
    ],
    tags: ["Audio Fingerprinting", "Royalty Ledger", "Media Stream", "Smart Contracts"],
    video: "/videos/socan.mp4",
  },
];

export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("StartoTech Suite");

  const handleOpenDemo = (pName?: string) => {
    setSelectedProduct(pName || "StartoTech Suite");
    setDemoModalOpen(true);
  };

  const categories = [
    { id: "all", label: "All Flagship Systems" },
    { id: "Autonomous Voice AI", label: "Voice AI & Telephony" },
    { id: "Enterprise Cloud OS", label: "Cloud OS & Ledgers" },
    { id: "Autonomous Legal Intel", label: "Legal & Regulatory" },
    { id: "Cybersecurity & Biometrics", label: "Cybersecurity" },
    { id: "Treasury & Clearing", label: "Financial Settlement" },
  ];

  const filtered =
    selectedFilter === "all"
      ? ALL_PORTFOLIO_PRODUCTS
      : ALL_PORTFOLIO_PRODUCTS.filter((p) => p.category === selectedFilter);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#9fe870] selection:text-slate-950">
      <Navbar onOpenDemo={handleOpenDemo} />

      <main className="pt-36 pb-28 w-full px-4 sm:px-8 lg:px-[120px]">
        {/* Page Header - Left Aligned */}
        <div className="w-full flex flex-col items-start justify-start text-left max-w-5xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Complete Product Portfolio
          </div>
          <h1 className="text-left w-full text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-slate-950 mb-6 break-words">
            Autonomous Solutions In Production
          </h1>
          <p className="text-left text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Discover the 6 core sovereign platforms engineered by StartoTech across enterprise voice automation, distributed operating systems, machine-speed legal intelligence, and biometric defense.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-start gap-2.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedFilter === cat.id
                    ? "bg-slate-950 text-white font-black shadow-lg shadow-slate-950/20"
                    : "bg-slate-100 text-slate-600 hover:text-slate-950 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((prod) => (
              <motion.div
                layout
                key={prod.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                <ProductCard
                  product={prod}
                  onOpenDemo={handleOpenDemo}
                  onExpandDetails={() => handleOpenDemo(prod.name)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Executive Action Banner */}
        <div className="mt-24 p-10 sm:p-14 rounded-3xl bg-slate-950 text-white border border-slate-800 text-left flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <span className="text-xs font-mono font-bold tracking-widest text-[#9fe870] uppercase mb-2 block">
              Enterprise Deployment SLA
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-3">
              Need A Custom Sovereign Stack?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Our engineering team deploys dedicated on-premise air-gapped clusters and custom integrations for high-volume enterprise institutions.
            </p>
          </div>

          <button
            onClick={() => handleOpenDemo("Custom Sovereign Stack")}
            className="redstone-btn text-xs sm:text-sm px-8 py-4 cursor-pointer shrink-0 shadow-xl shadow-[#9fe870]/30 relative z-10"
          >
            <span>Request Custom Architecture</span>
            <div className="btn-icon-circle">
              <ArrowRight className="w-4 h-4 text-[#0e0f0c]" />
            </div>
          </button>
        </div>
      </main>

      <Footer onOpenDemo={handleOpenDemo} />
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} defaultProduct={selectedProduct} />
    </div>
  );
}
