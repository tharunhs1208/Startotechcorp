"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import ServicesList from "@/components/ServicesList";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Shield, Lock, Cpu, Database, Server } from "lucide-react";

export default function ServicesPage() {
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
        {/* Page Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#e70000] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Capabilities
          </div>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight mb-6">
            Enterprise Services
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            From low-latency voice intelligence to zero-trust multi-entity accounting and autonomous legal auditing, explore our end-to-end engineering capabilities.
          </p>
        </div>

        {/* Numbered Services Component */}
        <ServicesList onOpenDemo={handleOpenDemo} />

        {/* Methodology & Delivery Process (Mirroring Redstone 10-step flow) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e70000] mb-2 block">
              Precision Delivery
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
              Our Deployment Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Architecture Brief", desc: "Detailed analysis of security boundaries, compliance requirements, and API topology." },
              { step: "02", title: "Dedicated Lead", desc: "Assigned principal architect ensuring 24/7 technical alignment and customized integration." },
              { step: "03", title: "Private VPC Build", desc: "Deployment to isolated Kubernetes clusters with SOC-2 Type II audit guarantees." },
              { step: "04", title: "Live SLA Monitoring", desc: "Production launch with continuous sub-280ms latency checks and 99.99% availability." },
            ].map((st, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#12141d]/80 border border-white/10 relative overflow-hidden">
                <span className="text-3xl font-mono font-black text-gray-600 block mb-3">{st.step}</span>
                <h3 className="text-lg font-bold text-white mb-2">{st.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer onOpenDemo={handleOpenDemo} />
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} defaultProduct={selectedProduct} />
    </div>
  );
}
