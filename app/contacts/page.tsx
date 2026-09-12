"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Sparkles, Mail, Phone, MapPin, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-white selection:bg-[#e70000] selection:text-white">
      <Navbar onOpenDemo={() => setDemoModalOpen(true)} />

      <main className="pt-36 pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#e70000] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Direct Channel
          </div>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight mb-6">
            Let's Talk
          </h1>
          <p className="text-lg text-gray-400">
            Have custom compliance requirements or interested in private enterprise deployments? Reach our executive engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#12141d]/90 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#e70000]/15 border border-[#e70000]/30 text-[#e70000] flex items-center justify-center mb-8 font-black text-2xl">
                F
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">FortuneTechCorp Headquarters</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">
                Autonomous systems deployed globally with dedicated engineering clusters across North America, Europe, and Asia-Pacific.
              </p>

              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#e70000]" />
                  <span>enterprise@fortunetechcorp.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Response SLA: Under 2 Hours (Enterprise)</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  <span>Mutual NDA Executed by Default</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8">
              <span className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Security standard</span>
              <div className="text-sm text-white font-bold mt-1">SOC-2 Type II & GDPR Verified</div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-[#12141d]/90 border border-white/10">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-2xl font-bold">✓</div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-sm text-gray-400 max-w-md mx-auto">
                  Our principal engineering lead will review your architecture specifications and reach out within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Full Name</label>
                    <input required type="text" placeholder="Sarah Connor" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#e70000] focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Corporate Email</label>
                    <input required type="email" placeholder="sarah@enterprise.com" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#e70000] focus:outline-none" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Product of Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[#1a1d2b] border border-white/10 text-white text-sm focus:border-[#e70000] focus:outline-none">
                    <option>Full Fortune Suite (Zobay + StartOne + LegalX)</option>
                    <option>Zobay (Autonomous Voice AI Phone Agents)</option>
                    <option>StartOne (Enterprise Cloud OS & Multi-Org)</option>
                    <option>LegalX (AI Contract & Compliance Intelligence)</option>
                    <option>Air-Gapped Private VPC Deployment</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Architecture & Deployment Details</label>
                  <textarea required rows={4} placeholder="Describe your workflow scale, expected monthly call/contract volume, or custom integration requirements..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#e70000] focus:outline-none resize-none" />
                </div>

                <button type="submit" className="redstone-btn w-full justify-center">
                  <span>Submit Architecture Brief</span>
                  <div className="btn-icon-circle">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer onOpenDemo={() => setDemoModalOpen(true)} />
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
}
