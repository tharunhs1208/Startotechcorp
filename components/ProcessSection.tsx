"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import TextMaskReveal from "@/components/TextMaskReveal";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Understand",
    timeline: "Discovery",
    description:
      "We analyze the operational problem, user behaviors, integration points, and core metrics that define success.",
  },
  {
    number: "02",
    title: "Design",
    timeline: "Prototypes",
    description:
      "We turn business requirements into clean workflows, accessible UI token systems, and interactive Figma prototypes.",
  },
  {
    number: "03",
    title: "Build",
    timeline: "Engineering",
    description:
      "We engineer production-grade software using TypeScript, modular APIs, and automated test pipelines.",
  },
  {
    number: "04",
    title: "Improve",
    timeline: "Iteration",
    description:
      "We monitor telemetry, optimize performance, and iterate on features alongside your internal teams.",
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position inside the process section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 50%"],
  });

  // Smooth out the scroll animation for a liquid fluid feel
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-16 sm:pt-28">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 mb-10 sm:mb-14 border-b border-black/[0.08]">
        <div className="max-w-2xl">
          <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
            OUR PROCESS
          </span>
          <TextMaskReveal
            text="From an idea to a working product."
            as="h2"
            once={false}
            className="text-3xl sm:text-4xl lg:text-[42px] font-display font-medium text-[#1d1d1f] tracking-tight leading-[1.12]"
          />
        </div>
        <p className="text-[14px] text-[#6e6e73] max-w-md leading-relaxed font-normal">
          A disciplined, transparent engineering process focused on shipping reliable software on schedule.
        </p>
      </div>

      {/* ── SCROLL-LINKED VERTICAL FLOW LINE ── */}
      <div ref={containerRef} className="relative max-w-3xl mx-auto py-4">
        {/* Base Track (Subtle Gray Spine) */}
        <div className="absolute top-8 bottom-10 left-5 sm:left-6 w-[2px] bg-black/[0.08] rounded-full z-0 overflow-hidden">
          {/* Scroll-Driven Active Gradient Line */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="w-full h-full bg-gradient-to-b from-[#1e40af] via-[#701a75] to-[#be185d] rounded-full"
          />
        </div>

        <div className="space-y-6 sm:space-y-8 relative z-10">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="flex items-start gap-5 sm:gap-7 group"
            >
              {/* Step Node Badge */}
              <div className="shrink-0 relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white border-2 border-black/[0.12] group-hover:border-[#1e40af] transition-colors flex items-center justify-center font-mono text-[13px] sm:text-[14px] font-bold text-[#111] shadow-xs">
                  {step.number}
                </div>
              </div>

              {/* Step Content Card */}
              <div className="flex-1 bg-white border border-black/[0.08] group-hover:border-black/25 rounded-2xl p-5 sm:p-7 transition-all">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="text-xl sm:text-2xl font-display font-medium text-[#111] tracking-tight">
                    {step.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#6e6e73] uppercase tracking-wider bg-[#f5f5f7] px-2.5 py-1 rounded-md border border-black/[0.04]">
                    {step.timeline}
                  </span>
                </div>

                <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
