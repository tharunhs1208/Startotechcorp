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
            <Sparkles className="w-3.5 h-3.5" /> Technologies & Architecture
          </div>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight mb-6">
            Technologies
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed mb-4">
            REDSTONE doesn’t just create digital products — we transform businesses.
          </p>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Our goal is not just to complete a project, but to create an effective solution that fully meets the needs of the client and their customers.
          </p>
        </div>

        {/* TechStack Component containing Single, Middle, Enterprise tiers */}
        <TechStack onOpenDemo={handleOpenDemo} />

        {/* Redstone Signature 'Let's Move the World Together' Typography Block */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-[#12141e] to-[#0a0b10] border border-white/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(231,0,0,0.15),transparent_70%)] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tight text-white leading-tight mb-6">
                Let’s <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e70000] via-red-400 to-orange-400">
                  Move the World
                </span> <br />
                Together
              </h2>

              <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8">
                Ready to elevate your business with cutting-edge technology and customized digital solutions?
              </p>

              <button
                onClick={() => handleOpenDemo("Technologies")}
                className="redstone-btn text-base px-8 py-4 mx-auto"
              >
                <span>Interested in cooperation?</span>
                <div className="btn-icon-circle">
                  <span className="w-2 h-2 rounded-full bg-white" />
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
