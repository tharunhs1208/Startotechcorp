"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface CircularTestimonialItem {
  name: string;
  role: string;
  text: string;
  image: string;
  metric?: string;
  metricLabel?: string;
  href?: string;
}

interface CircularTestimonialsProps {
  items: CircularTestimonialItem[];
  autoplay?: boolean;
  className?: string;
}

export function CircularTestimonials({
  items,
  autoplay = false,
  className = "",
}: CircularTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const current = items[currentIndex];

  // Calculate card stacking order & rotation for a fluid 3D fan-out stack effect with enlarged geometry
  const getCardStyle = (index: number) => {
    const total = items.length;
    const diff = (index - currentIndex + total) % total;

    if (diff === 0) {
      return {
        zIndex: 30,
        scale: 1,
        rotate: 0,
        x: 0,
        y: 0,
        opacity: 1,
      };
    } else if (diff === 1) {
      return {
        zIndex: 20,
        scale: 0.93,
        rotate: 7,
        x: 44,
        y: -12,
        opacity: 0.88,
      };
    } else if (diff === 2) {
      return {
        zIndex: 10,
        scale: 0.85,
        rotate: 14,
        x: 80,
        y: -22,
        opacity: 0.65,
      };
    } else if (diff === total - 1) {
      return {
        zIndex: 20,
        scale: 0.93,
        rotate: -7,
        x: -44,
        y: -12,
        opacity: 0.88,
      };
    } else {
      return {
        zIndex: 0,
        scale: 0.75,
        rotate: 0,
        x: 0,
        y: 0,
        opacity: 0,
      };
    }
  };

  return (
    <div
      className={`w-full max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-[36px] lg:rounded-[40px] border border-black/[0.08] p-5 sm:p-10 lg:p-14 shadow-[0_16px_56px_rgba(0,0,0,0.06)] overflow-hidden ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
        
        {/* ── LEFT: ENLARGED 3D ROTATING STACKED PHOTO CARDS ── */}
        <div className="lg:col-span-6 flex items-center justify-center relative min-h-[300px] sm:min-h-[420px] lg:min-h-[500px] select-none py-2">
          <div className="relative w-[230px] sm:w-[320px] lg:w-[390px] aspect-[4/5] flex items-center justify-center">
            {items.map((item, idx) => {
              const style = getCardStyle(idx);

              return (
                <motion.div
                  key={idx}
                  animate={{
                    scale: style.scale,
                    rotate: style.rotate,
                    x: style.x,
                    y: style.y,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 24,
                  }}
                  className="absolute inset-0 rounded-2xl sm:rounded-[32px] overflow-hidden bg-black shadow-xl sm:shadow-2xl border border-black/[0.1] cursor-pointer"
                  onClick={() => setCurrentIndex(idx)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-40" />

                  {/* Active Card Glow Sheen */}
                  {style.zIndex === 30 && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#82FFCD]/25 via-transparent to-white/10 pointer-events-none" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT: CASE STUDY CONTENT & CONTROLS ── */}
        <div className="lg:col-span-6 flex flex-col justify-between self-stretch space-y-6 lg:pl-2">
          <div className="space-y-4">
            {/* Top Metric Tag */}
            {current.metric && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#82FFCD]/50 text-black font-mono text-[13px] font-bold border border-black/10 shadow-2xs">
                <span>{current.metric}</span>
                {current.metricLabel && (
                  <span className="text-[11px] text-[#333333] font-medium">
                    {current.metricLabel}
                  </span>
                )}
              </div>
            )}

            {/* Title & Industry with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-1.5"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#111111] tracking-tight leading-tight">
                  {current.name}
                </h3>
                <p className="text-[14px] sm:text-[15px] font-medium text-[#777777]">
                  {current.role}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Overview / Story Text */}
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="text-base sm:text-lg lg:text-[19px] text-[#333333] font-normal leading-relaxed pt-2"
              >
                &ldquo;{current.text}&rdquo;
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Bottom Controls & Action */}
          <div className="pt-6 border-t border-black/[0.08] flex items-center justify-between gap-4">
            {current.href ? (
              <Link
                href={current.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-[#82FFCD] hover:text-black font-semibold text-[14px] transition-all duration-300 shadow-xs group"
              >
                <span>Explore case study</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ) : (
              <span className="text-[12px] font-mono text-[#777777]">
                0{currentIndex + 1} / 0{items.length}
              </span>
            )}

            {/* Arrow Pagination Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-12 h-12 rounded-full bg-[#111111] text-white hover:bg-black/80 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-md"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="w-12 h-12 rounded-full bg-[#111111] text-white hover:bg-black/80 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-md"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CircularTestimonials;
