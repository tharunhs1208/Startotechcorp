"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import TextMaskReveal from "@/components/TextMaskReveal";
import { ChevronDown } from "lucide-react";

export interface ProcessStep {
  num: string;
  phase: string;
  title: string;
  desc: string;
}

const DEFAULT_STEPS: ProcessStep[] = [
  {
    num: "01",
    phase: "Discovery & Architecture",
    title: "Understanding requirements & system modeling",
    desc: "We analyze technical constraints, user workflows, and system dependencies to create a deterministic architecture specification and milestone roadmap before writing code.",
  },
  {
    num: "02",
    phase: "Design & Interaction",
    title: "Interface design systems & token architecture",
    desc: "We design high-fidelity Figma components, accessible design tokens, and fluid 120Hz micro-interactions that mirror production front-end states.",
  },
  {
    num: "03",
    phase: "Agile Engineering",
    title: "Test-driven TypeScript & modular pipelines",
    desc: "We build in two-week agile sprint cycles delivering clean, typed TypeScript repositories with automated continuous integration and staging environments.",
  },
  {
    num: "04",
    phase: "Quality & Security",
    title: "End-to-end testing & performance optimization",
    desc: "We conduct automated regression testing, sub-50ms latency tuning, edge caching optimization, and comprehensive security audits.",
  },
  {
    num: "05",
    phase: "Deployment & Support",
    title: "Zero-downtime cutover & continuous telemetry",
    desc: "We orchestrate zero-downtime production rollouts with distributed telemetry, incident runbooks, and ongoing SLA maintenance.",
  },
];

interface HowWeWorkSectionProps {
  steps?: ProcessStep[];
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
}

export default function HowWeWorkSection({
  steps = DEFAULT_STEPS,
  title = "How We Work",
  subtitle = "A disciplined, transparent engineering methodology focused on shipping durable software predictably.",
  eyebrow = "EXECUTION LIFECYCLE",
  className = "",
}: HowWeWorkSectionProps) {
  const [openIdx, setOpenIdx] = useState<number>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className={`max-w-[1240px] mx-auto px-5 sm:px-8 py-6 sm:py-10 ${className}`}>
      {/* ── SECTION HEADER ─────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 mb-6 sm:mb-8">
        <div className="max-w-2xl">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-1 font-semibold">
            {eyebrow}
          </span>
          <TextMaskReveal
            text={title}
            as="h2"
            once={true}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#1d1d1f] tracking-tight leading-[1.12]"
          />
        </div>
        <p className="text-[13.5px] sm:text-[14.5px] text-[#6e6e73] max-w-md leading-relaxed font-normal">
          {subtitle}
        </p>
      </div>

      {/* ── EXPANDABLE ACCORDION STEPS (CLEAN & MINIMAL) ─────────────── */}
      <div className="max-w-4xl mx-auto divide-y divide-black/[0.08] border-y border-black/[0.08]">
        {steps.map((step, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={step.num}>
              <button
                onClick={() => toggleAccordion(idx)}
                aria-expanded={isOpen}
                className="w-full py-3.5 sm:py-4 flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none"
              >
                <div className="flex items-center gap-3.5 sm:gap-5">
                  {/* Minimal Step Number */}
                  <span className="font-mono text-[12px] sm:text-[13px] text-[#86868b] group-hover:text-black transition-colors w-5">
                    {step.num}
                  </span>

                  <div>
                    <span className="text-[10px] sm:text-[10.5px] font-mono text-[#86868b] uppercase tracking-[0.16em] block mb-0.5">
                      {step.phase}
                    </span>
                    <h3 className="font-display text-base sm:text-lg lg:text-xl font-medium text-[#1d1d1f] tracking-tight group-hover:text-black transition-colors">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="shrink-0">
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-black/[0.08] flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#1d1d1f] border-[#1d1d1f] text-white"
                        : "bg-white text-[#1d1d1f] group-hover:border-black/30"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 pt-0.5 pl-8 sm:pl-10 pr-4 sm:pr-8 max-w-3xl">
                      <p className="text-[13.5px] sm:text-[14px] text-[#6e6e73] leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
