"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import TechStack from "@/components/TechStack";
import { Sparkles, Cpu, Shield, Server, Database, Globe, Layers } from "lucide-react";

export default function TechnologiesPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Fortune Suite");

  const handleOpenDemo = (pName?: string) => {
    setSelectedProduct(pName || "Fortune Suite");
    setDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-white selection:bg-[#e70000] selection:text-white">
      <Navbar onOpenDemo={handleOpenDemo} />

      <main className="pt-36 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#e70000] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Core Engineering
          </div>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight mb-6">
            Technology Stack
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore the multi-tier engineering infrastructure powering our sub-280ms voice nodes, real-time enterprise ledgers, and semantic contract RAG pipelines.
          </p>
        </div>

        <TechStack onOpenDemo={handleOpenDemo} />
      </main>

      <Footer onOpenDemo={handleOpenDemo} />
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} defaultProduct={selectedProduct} />
    </div>
  );
}
