"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function StratoTechFinalCta() {
  return (
    <section className="w-full bg-[#111111] text-white py-24 sm:py-32 lg:py-36 overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        <div className="max-w-4xl space-y-8 sm:space-y-10">
          
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#82FFCD]" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#82FFCD] uppercase font-bold">
              LET&apos;S TALK
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-[72px] font-display font-medium tracking-[-0.035em] text-white leading-[1.05] uppercase">
            HAVE SOMETHING<br />
            WORTH BUILDING?
          </h2>

          <p className="text-base sm:text-xl lg:text-2xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
            Tell us what you&apos;re working on. We&apos;ll help turn the idea into a clear path to production.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-7 sm:px-9 py-4 rounded-full bg-[#82FFCD] text-black hover:bg-white text-[14px] sm:text-[15px] font-semibold transition-all duration-300 shadow-lg group cursor-pointer"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="mailto:tharun.hs@stratotechcorp.in"
              className="inline-flex items-center px-6 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 text-[14px] font-medium transition-all"
            >
              tharun.hs@stratotechcorp.in
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
