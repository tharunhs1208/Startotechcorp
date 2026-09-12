"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight, MessageSquareQuote } from "lucide-react";

interface FAQProps {
  onOpenDemo?: () => void;
}

export default function FAQ({ onOpenDemo }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the implementation timeline for the FortuneTechCorp suite?",
      a: "Average enterprise deployment spans 2 to 4 weeks. Zobay Voice AI agents can be provisioned and connected to telephony gateways in under 48 hours, while StartOne multi-tenant enterprise orchestration and LegalX contract models are tailored to company compliance guidelines within 14 business days.",
    },
    {
      q: "How does Zobay achieve sub-280ms voice turn-taking latency?",
      a: "Zobay is deployed on an edge neural speech matrix across 38 global edge POPs. Streaming audio is processed using optimized streaming speech-to-speech architectures that bypass bulky text conversion hops, mimicking real-time human conversational rhythm and dynamic interruption handling.",
    },
    {
      q: "Is LegalX compliant with international legal standards, SOC-2, and GDPR?",
      a: "Yes. LegalX is built with air-gapped VPC options, end-to-end encryption, and full compliance with SOC-2 Type II, ISO 27001, GDPR, and HIPAA. No client contract documents or training data are ever used to train public models without explicit contractual consent.",
    },
    {
      q: "Can StartOne integrate with our existing ERP, Salesforce, or SAP stack?",
      a: "StartOne features 200+ native bi-directional connectors for Salesforce, HubSpot, SAP, NetSuite, QuickBooks, Workday, and Jira. In addition, its real-time webhooks and GraphQL mesh allow rapid zero-code custom pipeline creation.",
    },
    {
      q: "What is the difference between a custom enterprise deployment and the sandbox?",
      a: "The sandbox allows your engineering and legal teams to test live conversational models, simulate contract audits, and explore StartOne operational hubs immediately. Custom enterprise deployments include dedicated compute clusters, custom voice cloning, air-gapped security, and a 99.99% SLA.",
    },
  ];

  return (
    <section id="faq-section" className="py-24 relative z-20 bg-[#090a0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Redstone 'Let's talk' Card */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-[#12141e]/90 border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-[#e70000]/15 border border-[#e70000]/30 text-[#e70000] flex items-center justify-center mb-6 font-black text-2xl">
              F
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
              Let's talk
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Have unique security requirements or multi-entity infrastructure needs? Speak directly with our executive engineering team.
            </p>

            <button
              onClick={onOpenDemo}
              className="redstone-btn w-full justify-between"
            >
              <span>Book an Engineering Call</span>
              <div className="btn-icon-circle">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>

          {/* Right: Redstone Accordion List */}
          <div className="lg:col-span-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e70000] mb-2 block">
              Direct Answers
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#12141e]/70 border border-white/10 hover:border-white/20 transition-all duration-200 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-bold text-base sm:text-lg text-white">
                        {faq.q}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-sm text-gray-300 leading-relaxed pt-0 border-t border-white/5">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
