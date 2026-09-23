"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const TESTIMONIALS = [
  {
    quote: "Zobay transformed our contact center operations. We scaled our inbound call capacity 4x while saving over 80% on support staffing costs with sub-280ms acoustic latency.",
    author: "Elena Rostova",
    role: "VP of Customer Operations",
    company: "Apex Global Telephony",
    project: "Zobay Voice AI",
  },
  {
    quote: "StartOne allowed us to retire 6 standalone tools in our first month. Our finance and operations teams are moving 3x faster with zero data drift across all subsidiaries.",
    author: "Marcus Vance",
    role: "Chief Operating Officer",
    company: "Vanguard Logistics Group",
    project: "StartOne Enterprise OS",
  },
  {
    quote: "LegalX has cut our deal closing cycles from 21 days to under 48 hours. The automated redlining is remarkably accurate and trustworthy for enterprise contracts.",
    author: "Sarah Jenkins, Esq.",
    role: "General Counsel",
    company: "Meridian Cloud Solutions",
    project: "LegalX Contract Intel",
  },
  {
    quote: "BaseOne gave our enterprise treasury instant visibility and real-time clearing across our European and Asian subsidiaries with sub-50ms finality.",
    author: "Arthur Sterling",
    role: "Head of Treasury Operations",
    company: "Novus Financial Capital",
    project: "BaseOne Ledger",
  },
];

export default function StratoTechTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = TESTIMONIALS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="w-full py-20 sm:py-28 lg:py-32 bg-[#F3F3F3] border-t border-black/[0.08]">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 sm:pb-8 mb-10 sm:mb-14 border-b border-black/[0.1]">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-black" />
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#555555] uppercase font-bold">
                05 / CLIENT PERSPECTIVES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-medium tracking-[-0.035em] text-[#111111] leading-none uppercase">
              WHAT CLIENTS SAY.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous quote"
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next quote"
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Large Editorial Quote Card */}
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 sm:space-y-8"
            >
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#777777] block">
                {current.project}
              </span>

              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-display font-normal text-[#111111] leading-snug tracking-tight">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="pt-2 border-t border-black/[0.08] flex items-center justify-between">
                <div>
                  <h4 className="font-display font-semibold text-base sm:text-lg text-black">
                    {current.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555]">
                    {current.role}, {current.company}
                  </p>
                </div>
                <span className="font-mono text-xs text-[#777777]">
                  0{currentIndex + 1} / 0{TESTIMONIALS.length}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
