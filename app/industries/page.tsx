"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextMaskReveal from "@/components/TextMaskReveal";
import { INDUSTRIES_DATA } from "@/data/siteData";

import ScrollCardTransition from "@/components/ScrollCardTransition";

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-12 sm:pb-20">
        {/* ── 1. EDITORIAL HEADER ────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-12 sm:pb-16 border-b border-black/[0.08]">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 font-semibold">
              SECTORS &amp; DOMAIN EXPERTISE
            </span>
            <TextMaskReveal
              text="Industry Solutions"
              as="h1"
              once={false}
              className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-[#1d1d1f] mb-4"
            />
            <p className="mt-3 text-base sm:text-lg text-[#6e6e73] font-normal leading-relaxed">
              Tailored software architecture, deterministic data pipelines, and compliance-ready systems built for mission-critical business sectors.
            </p>
          </div>
        </section>

        {/* ── 2. OPEN EDITORIAL INDUSTRIES LIST ───────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="divide-y divide-black/[0.08]">
            {INDUSTRIES_DATA.map((industry, idx) => (
              <ScrollCardTransition key={industry.slug} index={idx}>
                <div className="py-14 sm:py-20 group">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                    {/* Left Column: Metadata, Title, Description, Capabilities, Link */}
                    <div className="lg:col-span-7 space-y-6">
                      <div>
                        <div className="flex items-center gap-3 text-[11px] font-mono text-[#6e6e73] mb-2 uppercase tracking-wider">
                          <span>0{idx + 1}</span>
                          <span>—</span>
                          <span className="font-semibold text-[#1d1d1f]">Sector</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight leading-tight">
                          <Link
                            href={`/industries/${industry.slug}`}
                            className="hover:text-black transition-colors"
                          >
                            {industry.name}
                          </Link>
                        </h2>
                      </div>

                      <p className="text-[15px] sm:text-[16px] text-[#6e6e73] font-normal leading-relaxed max-w-xl">
                        {industry.description}
                      </p>

                      {/* Solutions & Capabilities List (No Checkmarks, Clean Typographic Bullets) */}
                      <div className="pt-2 space-y-2.5">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#1d1d1f] font-semibold block">
                          Domain Capabilities
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl">
                          {industry.features.slice(0, 4).map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="border-l-2 border-black/[0.12] pl-3 py-0.5 text-[13px] text-[#6e6e73] leading-snug"
                            >
                              <span className="font-medium text-[#1d1d1f]">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Link */}
                      <div className="pt-4 border-t border-black/[0.06] max-w-xl flex items-center justify-between">
                        <span className="text-[12px] font-mono text-[#86868b]">
                          {industry.technologies.slice(0, 3).join(" · ")}
                        </span>
                        <Link
                          href={`/industries/${industry.slug}`}
                          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#1d1d1f] hover:text-black transition-colors group/link"
                        >
                          <span>Explore {industry.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: High-Quality Industry Image */}
                    <div className="lg:col-span-5">
                      <Link
                        href={`/industries/${industry.slug}`}
                        className="block overflow-hidden rounded-xl bg-[#e5e5ea] border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] group/img"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={industry.image || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"}
                          alt={industry.name}
                          className="w-full aspect-[16/10] object-cover transition-transform duration-500 ease-out group-hover/img:scale-[1.02]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollCardTransition>
            ))}
          </div>
        </section>

        {/* ── 3. BOTTOM CTA ──────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-12 sm:pt-20">
          <div className="border-t border-black/[0.08] pt-12 sm:pt-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-2 font-semibold">
                CUSTOM ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-medium tracking-tight text-[#1d1d1f]">
                Your Industry. Our Engineering.
              </h3>
              <p className="mt-2 text-[15px] text-[#6e6e73] font-normal leading-relaxed">
                Let&apos;s build specialized software tailored to your compliance, scale, and performance needs.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1d1d1f] text-white hover:bg-black text-[14px] font-medium transition-colors"
              >
                <span>Schedule an Intro</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
