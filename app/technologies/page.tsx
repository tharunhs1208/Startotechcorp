"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import TechStack from "@/components/TechStack";
import GlobalLatencyMap from "@/components/GlobalLatencyMap";
import { Sparkles, Cpu, Shield, Server, Database, Globe, Layers, ArrowRight } from "lucide-react";

export default function TechnologiesPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("StartoTech Edge Infrastructure");

  const handleOpenDemo = (pName?: string) => {
    setSelectedProduct(pName || "StartoTech Edge Infrastructure");
    setDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#9fe870] selection:text-slate-950">
      <Navbar onOpenDemo={handleOpenDemo} />

      <main className="pt-36 pb-28">
        {/* Left-Aligned Header */}
        <div className="w-full px-4 sm:px-8 lg:px-[120px] mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Technologies &amp; Architecture
          </div>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-slate-950 mb-6">
            Autonomous Technologies
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 max-w-3xl font-medium leading-relaxed mb-4">
            StartoTech doesn’t just build software — we engineer sovereign, zero-friction enterprise infrastructure.
          </p>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Our multi-tier tech stack combines ultra-low latency audio codecs, distributed multi-tenant ledgers, and air-gapped machine intelligence.
          </p>
        </div>

        {/* Global Edge Latency & Network Map */}
        <div className="w-full px-4 sm:px-8 lg:px-[120px] mb-20">
          <GlobalLatencyMap />
        </div>

        {/* TechStack Component containing Single, Middle, Enterprise tiers */}
        <TechStack onOpenDemo={handleOpenDemo} />

        {/* Executive Action Card */}
        <div className="w-full px-4 sm:px-8 lg:px-[120px] mt-24">
          <div className="p-10 sm:p-16 rounded-3xl bg-slate-950 text-white border border-slate-800 text-left relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(159,232,112,0.15),transparent_70%)] pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-mono font-bold tracking-widest text-[#9fe870] uppercase mb-2 block">
                Engineering Partnership
              </span>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-6">
                Let’s Deploy Sovereign Architecture Together
              </h2>

              <p className="text-slate-300 text-sm sm:text-base mb-8 leading-relaxed">
                Ready to elevate your enterprise operations with sub-280ms voice agents, real-time ledgers, and SOC-2 compliance?
              </p>

              <button
                onClick={() => handleOpenDemo("Technologies Consultation")}
                className="redstone-btn text-sm sm:text-base px-8 py-4 cursor-pointer shadow-xl shadow-[#9fe870]/25"
              >
                <span>Request Architecture Consultation</span>
                <div className="btn-icon-circle">
                  <ArrowRight className="w-4 h-4 text-[#0e0f0c]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer onOpenDemo={handleOpenDemo} />
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} defaultProduct={selectedProduct} />
    </div>
  );
}
