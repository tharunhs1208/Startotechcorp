"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import BentoGrid from "@/components/BentoGrid";
import { Sparkles, Award, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090a0f] text-white selection:bg-[#e70000] selection:text-white">
      <Navbar onOpenDemo={() => setDemoModalOpen(true)} />

      <main className="pt-36 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#e70000] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Company & Governance
          </div>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight mb-6">
            Architecting The Autonomous Enterprise
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            FortuneTechCorp was founded on a singular conviction: enterprises shouldn't juggle fragmented SaaS silos. We build interconnected, zero-latency autonomous infrastructure across Voice AI, Enterprise OS, and Legal Intelligence.
          </p>
        </div>

        {/* Global Impact Numbers */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#12141d]/90 border border-white/10 text-center">
            <div>
              <div className="text-4xl font-black text-white">150+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">Enterprise Deployments</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#e70000]">99.99%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">Uptime Availability</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-400">&lt; 280ms</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">Edge Voice Turnaround</div>
            </div>
            <div>
              <div className="text-4xl font-black text-emerald-400">SOC-2 Type II</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">Certified Compliant</div>
            </div>
          </div>
        </div>

        <BentoGrid />
      </main>

      <Footer onOpenDemo={() => setDemoModalOpen(true)} />
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
}
