"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { INDUSTRIES_DATA } from "@/data/siteData";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-[#0070f3] selection:text-white">
      <Navbar />

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container text-center">
          <ScrollReveal delay={0.05} y={16}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/[0.08] bg-white text-xs font-semibold text-[#0070f3] mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Domain Expertise</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} y={20}>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900">
              Industry Solutions
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.25} y={20}>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-xl mx-auto font-light leading-relaxed">
              Tailored software architecture and AI integrations built for high-demand business domains.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── INDUSTRIES GRID ─────────────────────────────────────────── */}
      <section className="py-10 sm:py-16">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_DATA.map((ind, idx) => (
              <ScrollReveal key={ind.slug} delay={idx * 0.08} y={24}>
                <div className="group rounded-2xl sm:rounded-3xl border border-black/[0.08] bg-white overflow-hidden hover:border-[#0070f3]/40 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full p-2.5 sm:p-3">
                  <div>
                    {/* Media Container */}
                    <div className="relative aspect-video rounded-xl sm:rounded-2xl bg-zinc-950 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={ind.image || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"}
                        alt={ind.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                      {/* Top Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                        <div className="bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold text-[#0070f3] border border-black/10 shadow-xs flex items-center gap-1.5">
                          <span>INDUSTRY 0{idx + 1}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-4 sm:p-5 space-y-3.5">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0070f3] font-semibold block mb-1">
                          Specialized Sector
                        </span>
                        <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-900 group-hover:text-[#0070f3] transition-colors leading-tight">
                          {ind.name}
                        </h2>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light line-clamp-3">
                        {ind.description}
                      </p>

                      <div className="pt-3 border-t border-black/[0.06] space-y-1.5">
                        {ind.features.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0070f3] shrink-0" />
                            <span className="line-clamp-1 font-medium">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Minimalist Right-aligned Link */}
                  <div className="p-4 sm:p-5 pt-0 flex justify-end">
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0070f3] hover:text-[#005bb5] transition-colors group"
                    >
                      <span>Explore Industry</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-16 border-t border-black/[0.08] bg-[#f8fafc]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-8 text-center">
          <ScrollReveal y={20}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
              Your Industry. Our Engineering.
            </h2>
            <p className="mt-4 text-sm text-zinc-600 font-light">
              Let&apos;s build specialized software tailored to your compliance, scale, and performance needs.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-pill btn-accent-c text-xs sm:text-sm font-semibold px-8 py-3.5 shadow-xs hover:scale-105 transition-transform duration-200"
              >
                <span>Schedule an Intro</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
