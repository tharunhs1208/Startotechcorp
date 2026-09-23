"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

export default function MarinoTrustCtaBanner() {
  return (
    <section className="w-full bg-[#F3F3F3] py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      
      {/* ── GIANT TYPOGRAPHY MARQUEE ── */}
      <div className="w-full overflow-hidden py-8 relative">
        <div className="flex w-max">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 24,
              ease: "linear",
            }}
            className="flex items-center shrink-0"
          >
            <span className="text-[12vw] sm:text-[10vw] font-display font-black tracking-[-0.04em] text-[#111111] uppercase whitespace-nowrap pr-12 leading-none">
              ENTERPRISE AI ARCHITECTURE • AUTONOMOUS AGENTS • VOICE INTELLIGENCE • MISSION CRITICAL ENGINEERING • 
            </span>
            <span className="text-[12vw] sm:text-[10vw] font-display font-black tracking-[-0.04em] text-[#111111] uppercase whitespace-nowrap pr-12 leading-none" aria-hidden="true">
              ENTERPRISE AI ARCHITECTURE • AUTONOMOUS AGENTS • VOICE INTELLIGENCE • MISSION CRITICAL ENGINEERING • 
            </span>
          </motion.div>
        </div>
      </div>

      {/* ── CENTERED BOTTOM CTA: "Send us a brief and we'll talk" ── */}
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <span className="text-xl sm:text-2xl font-display font-medium text-black">
            Send us a brief and we&apos;ll talk
          </span>
          <Link
            href="/contact"
            className="px-7 py-3 rounded-full bg-[#82FFCD] text-black font-semibold text-sm hover:bg-black hover:text-white transition-all shadow-xs"
          >
            Contact Us
          </Link>
        </div>
      </div>

    </section>
  );
}
