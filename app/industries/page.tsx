"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
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
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/[0.08] bg-white text-xs font-semibold text-[#0070f3] mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Domain Expertise</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900">
              Industry Solutions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-xl mx-auto font-light leading-relaxed">
              Tailored software architecture and AI integrations built for high-demand business domains.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── INDUSTRIES GRID ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_DATA.map((ind, idx) => (
              <ScrollReveal key={ind.slug} delay={idx * 0.08}>
                <div className="group rounded-2xl border border-black/[0.08] bg-white overflow-hidden hover:border-black/20 hover:shadow-md transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="relative aspect-video bg-zinc-950 overflow-hidden">
                      <video
                        src={ind.video || "/videos/startone.mp4"}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6 sm:p-8">
                      <h2 className="font-display text-2xl font-bold text-zinc-900 group-hover:text-[#0070f3] transition-colors">
                        {ind.name}
                      </h2>
                      <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed font-light line-clamp-3">
                        {ind.description}
                      </p>

                      <div className="mt-6 pt-4 border-t border-black/[0.06] space-y-2">
                        {ind.features.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0070f3]" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0">
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="btn-pill btn-ghost w-full justify-between text-xs font-semibold !py-3 border-black/15 hover:border-black text-zinc-900"
                    >
                      <span>View Solutions</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08] bg-[#f8fafc]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
              Your Industry. Our Engineering.
            </h2>
            <p className="mt-4 text-sm text-zinc-600 font-light">
              Let&apos;s build specialized software tailored to your compliance, scale, and performance needs.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-pill btn-accent-c text-xs sm:text-sm font-semibold px-8 py-3.5"
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
