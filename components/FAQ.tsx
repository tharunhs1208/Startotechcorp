"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight, MessageSquareQuote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section id="faq-section" className="py-24 relative z-20 bg-slate-50/50 border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left: Redstone 'Let's talk' Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 p-8 rounded-3xl bg-white border border-slate-200 relative overflow-hidden shadow-xl text-left"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mb-6 font-black text-2xl shadow-sm">
              S
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mb-2">
              Let&apos;s talk
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              Have unique security requirements or multi-entity infrastructure needs? Speak directly with our executive engineering team.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenDemo}
              className="redstone-btn w-full justify-between"
            >
              <span>Book an Engineering Call</span>
              <div className="btn-icon-circle">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </motion.button>
          </motion.div>

          {/* Right: Redstone Accordion List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 text-left"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3 inline-block">
              Direct Answers
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all duration-200 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-bold text-base sm:text-lg text-slate-900">
                        {faq.q}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-slate-700"
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed pt-0 border-t border-slate-100">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
