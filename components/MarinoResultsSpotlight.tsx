"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function MarinoResultsSpotlight() {
  return (
    <section className="w-full py-20 sm:py-28 lg:py-36 bg-[#F3F3F3] text-[#111111] overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        
        {/* Section Heading (Exact Frame 00:37) */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-[#111111]">
            StratoTech: The results driven agency
          </h2>
        </div>

        {/* ── WHITE CONTAINER CARD (EXACT FRAME 00:37 - 00:40) ── */}
        <div className="rounded-3xl bg-white border border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Stat, Story, Button & Quote */}
            <div className="lg:col-span-6 space-y-6">
              {/* Brand Logo */}
              <div className="flex items-center gap-2 font-display text-lg font-black tracking-wider text-black uppercase">
                <span className="w-3 h-3 rounded-full bg-black inline-block" />
                <span>BLACKBIRD</span>
              </div>

              {/* 400% Revenue Growth */}
              <div className="space-y-1">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-display font-medium text-black tracking-tight leading-none">
                  400%
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#111111] tracking-tight">
                  Revenue growth
                </h3>
              </div>

              <p className="text-[14px] sm:text-[15px] text-[#444444] leading-relaxed font-normal">
                Blackbird, an enterprise SaaS developer, achieved <strong>400% revenue growth</strong> and multi-million ARR through brand, web, and inbound engineering, generating <strong>1,000+ MQLs</strong>, $1.8M pipeline, and 650% growth in qualified platform traffic.
              </p>

              <div>
                <Link
                  href="/projects/zobay-voice-ai"
                  className="inline-flex items-center px-7 py-3 rounded-full bg-black text-white hover:bg-[#82FFCD] hover:text-black font-semibold text-[13.5px] transition-all duration-300 shadow-xs"
                >
                  <span>View Work</span>
                </Link>
              </div>

              {/* Testimonial Quote */}
              <div className="pt-6 border-t border-black/[0.08] space-y-2">
                <p className="text-[14px] sm:text-[15px] text-[#222222] font-normal leading-relaxed">
                  &ldquo;We&apos;ve worked with StratoTech for 5 years. Their digital marketing and technical expertise has consistently driven awareness, interest, and leads.&rdquo;
                </p>
                <div className="text-xs font-semibold text-black">
                  Adrian Lambert: <span className="font-normal text-[#666666]">Blackbird</span>
                </div>
              </div>
            </div>

            {/* Right Column: Phone Mockup (Exact Frame 00:38) */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-[280px] sm:w-[320px] aspect-[9/18.5] rounded-[48px] bg-black p-3.5 shadow-2xl border-4 border-zinc-800">
                {/* Screen Container */}
                <div className="w-full h-full rounded-[38px] overflow-hidden bg-zinc-900 text-white p-5 flex flex-col justify-between relative">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                    <span>10:33</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white" />
                      <span>5G</span>
                    </div>
                  </div>

                  {/* App UI Content */}
                  <div className="space-y-4 my-auto">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#82FFCD]" />
                      <span className="font-display font-bold text-sm tracking-wider uppercase">Blackbird [PL]</span>
                    </div>

                    <h4 className="font-display font-bold text-2xl text-white leading-tight">
                      Fit for the cloud.<br />
                      Driving massive efficiencies.
                    </h4>

                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Quoted on the London Stock Exchange Alternative Investment Market, Blackbird plc is a leader in cloud native video technology.
                    </p>

                    <div className="p-3 rounded-xl bg-white/10 border border-white/10 space-y-1">
                      <span className="text-[10px] font-mono text-[#82FFCD] uppercase">Pipeline Metric</span>
                      <div className="text-lg font-bold text-white">+650% Inbound Lift</div>
                    </div>
                  </div>

                  {/* Bottom App Action */}
                  <div className="w-full py-2.5 rounded-full bg-[#FFE600] text-black font-bold text-xs text-center">
                    LEARN MORE
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
