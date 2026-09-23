"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const FAQ_ITEMS = [
  {
    question: "What does StratoTech build?",
    answer: "We design and engineer high-performance web applications, proprietary SaaS platforms, conversational voice AI engines, real-time WebRTC collaboration suites, and enterprise business operating systems. From discovery to production, we deliver full-stack digital solutions.",
  },
  {
    question: "What technologies do you work with?",
    answer: "Our core stack includes Next.js, React, TypeScript, Node.js, Python, FastAPI, Go, PostgreSQL, Redis, Docker, and Kubernetes. For AI workflows, we work with custom LLMs, PyTorch, LangChain, and vector databases across AWS, GCP, and Azure.",
  },
  {
    question: "How does a project start?",
    answer: "Every engagement begins with an Architecture Discovery Sprint. We audit your technical objectives, map user journeys, define data models, and deliver a comprehensive production blueprint with fixed deliverables and transparent milestones.",
  },
  {
    question: "Do you work with existing products?",
    answer: "Yes. We frequently modernize legacy codebases, re-architect monolithic systems into scalable microservices, implement modern design systems, and build high-throughput API integrations without interrupting live operations.",
  },
  {
    question: "Can you build MVPs?",
    answer: "Absolutely. We specialize in taking ambitious product concepts from initial wireframes to production-ready pilot MVPs in 4 to 8 weeks, ensuring rock-solid foundational architecture that scales seamlessly.",
  },
  {
    question: "Can you work with internal engineering teams?",
    answer: "Yes. We operate both as an autonomous end-to-end product studio and as an embedded high-velocity engineering squad collaborating directly with in-house CTOs, product managers, and developers via Git, Figma, and agile sprints.",
  },
  {
    question: "How long does a project take?",
    answer: "Pilot prototypes and focused feature modules typically ship in 3 to 6 weeks. Full-scale enterprise platforms, complete design systems, and multi-tenant architectures generally complete in 2 to 4 months with continuous bi-weekly release milestones.",
  },
];

export default function StratoTechFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full py-20 sm:py-28 lg:py-32 bg-[#F3F3F3] border-t border-black/[0.08]">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-black" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#555555] uppercase font-bold">
              FAQ &amp; CLARITY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-medium tracking-[-0.035em] text-[#111111] leading-none uppercase">
            FREQUENTLY ASKED QUESTIONS.
          </h2>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl divide-y divide-black/[0.1] border-y border-black/[0.1]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5 sm:py-6">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                >
                  <h3 className="text-lg sm:text-xl lg:text-[22px] font-display font-medium text-[#111111] group-hover:text-black transition-colors tracking-tight">
                    {item.question}
                  </h3>
                  <span className={`w-8 h-8 rounded-full border border-black/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-black text-white" : "bg-white text-black"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-[14px] sm:text-[15px] text-[#555555] leading-relaxed font-normal max-w-3xl">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
