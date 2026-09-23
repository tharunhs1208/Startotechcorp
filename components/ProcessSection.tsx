"use client";

import React from "react";
import { motion } from "motion/react";
import TextMaskReveal from "@/components/TextMaskReveal";
import { ArrowUpRight } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  phase: string;
  tagline: string;
  description: string;
  points: string[];
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    phase: "Discovery",
    tagline: "Architecture Scoping & Problem Mapping",
    description:
      "We dissect operational requirements, map data flows, identify integration points, and define key technical milestones before writing code.",
    points: ["Architecture Blueprint", "Data Schema & ERD", "API Interface Scopes", "Sprint Roadmap"],
  },
  {
    number: "02",
    title: "Design",
    phase: "Prototypes",
    tagline: "Design Tokens & Interactive Wireframes",
    description:
      "We transform business requirements into accessible UI token systems, reusable components, and interactive prototypes tested with real users.",
    points: ["Figma Design Tokens", "Component Library", "Clickable Prototypes", "Usability Testing"],
  },
  {
    number: "03",
    title: "Build",
    phase: "Engineering",
    tagline: "Full-Stack TypeScript & Scaled Systems",
    description:
      "We engineer production-grade software using TypeScript, Next.js, and modular micro-services backed by automated test pipelines.",
    points: ["Next.js & React Apps", "Distributed APIs", "Automated CI/CD", "100% Type-Safe Code"],
  },
  {
    number: "04",
    title: "Improve",
    phase: "Iteration",
    tagline: "Live Telemetry & Latency Optimization",
    description:
      "We deploy to global edge networks, monitor server telemetry in real time, optimize queries, and roll out continuous improvements.",
    points: ["Global Edge CDN", "Real-Time Telemetry", "Sub-80ms Tuning", "24/7 Health Monitoring"],
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full py-20 sm:py-28 bg-[#F3F3F3] border-t border-black/[0.08]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 mb-12 sm:mb-16 border-b border-black/[0.1]">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#555555] uppercase block mb-2 font-semibold">
              03 / OUR PROCESS
            </span>
            <TextMaskReveal
              text="From an idea to a working product."
              as="h2"
              once={true}
              className="text-3xl sm:text-5xl lg:text-[44px] font-display font-extrabold text-[#000000] tracking-tight uppercase leading-none"
            />
          </div>
          <p className="text-[14px] text-[#555555] max-w-md leading-relaxed font-normal">
            A disciplined, transparent engineering methodology focused on shipping production software on schedule with zero guesswork.
          </p>
        </div>

        {/* ── MINIMALIST 4-COLUMN HORIZONTAL GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-black/[0.08] hover:border-black transition-all duration-300 shadow-xs hover:shadow-md"
            >
              {/* Top Accent Line that sweeps across on hover */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-black/0 group-hover:bg-[#82FFCD] rounded-full transition-colors duration-300" />

              <div>
                {/* Step Number & Phase Badge */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-black tracking-tight group-hover:text-black transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#666666] bg-[#F3F3F3] group-hover:bg-[#82FFCD] group-hover:text-black px-2.5 py-1 rounded-md font-semibold transition-colors duration-300">
                    {step.phase}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight mb-2 uppercase">
                  {step.title}
                </h3>

                {/* Tagline */}
                <p className="text-[12px] font-mono text-[#777777] uppercase tracking-wide mb-4 font-medium">
                  {step.tagline}
                </p>

                {/* Description */}
                <p className="text-[13.5px] text-[#444444] leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              {/* Bottom Minimal Deliverable Checklist */}
              <div className="pt-4 border-t border-black/[0.06] space-y-1.5">
                {step.points.map((point, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-center gap-2 text-[12px] text-[#666666] font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-black/40 group-hover:bg-black transition-colors" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
