"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrbitalHero from "@/components/OrbitalHero";
import TextMaskReveal from "@/components/TextMaskReveal";
import StartProjectButton from "@/components/StartProjectButton";
import InteractiveProductShowcase from "@/components/InteractiveProductShowcase";
import ServicesScrollRail from "@/components/ServicesScrollRail";
import ProcessSection from "@/components/ProcessSection";
import { SERVICES_DATA } from "@/data/siteData";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#111111] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-0 pb-0">
        {/* ── 1. ORBITAL AI TOOLS HERO (Exact Reference Design) ──── */}
        <OrbitalHero />

        {/* ── 2. SERVICES & CAPABILITIES (Horizontal Scroll Rail) ── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-16 sm:pt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 sm:pb-8 mb-4 border-b border-black/[0.08]">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-2 font-semibold">
                SERVICES &amp; CAPABILITIES
              </span>
              <TextMaskReveal
                text="Engineering capabilities built for scale."
                as="h2"
                once={false}
                className="text-3xl sm:text-4xl lg:text-[42px] font-display font-medium text-[#1d1d1f] tracking-tight leading-[1.12]"
              />
            </div>
            <Link
              href="/services"
              className="text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] inline-flex items-center gap-1.5 transition-colors group/link pb-1"
            >
              <span>View all services</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>

          {/* Scrolling Rail with Touch/Drag/Arrows */}
          <ServicesScrollRail services={SERVICES_DATA.slice(0, 6)} />
        </section>

        {/* ── 3. FEATURED PRODUCTS (Scroll-Driven Synchronized Sequence) ── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-16 sm:pt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 sm:pb-8 mb-8 sm:mb-12 border-b border-black/[0.08]">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-2 font-semibold">
                OUR PRODUCTS
              </span>
              <TextMaskReveal
                text="Products built around real business needs."
                as="h2"
                once={false}
                className="text-3xl sm:text-4xl lg:text-[42px] font-display font-medium text-[#1d1d1f] tracking-tight leading-[1.12]"
              />
            </div>
            <Link
              href="/products"
              className="text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] inline-flex items-center gap-1.5 transition-colors group/link pb-1"
            >
              <span>View all products</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>

          <InteractiveProductShowcase />
        </section>

        {/* ── 3. OUR PROCESS (Interactive Multi-Style Switcher) ──── */}
        <ProcessSection />

        {/* ── 4. ABOUT STATEMENT ─────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-16 sm:pt-24">
          <div className="max-w-3xl pb-6 sm:pb-8">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 sm:mb-4 font-semibold">
              ABOUT
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-[#1d1d1f] leading-[1.1] mb-4 sm:mb-6">
              Technology should solve a problem before it tries to impress.
            </h2>
            <p className="text-base sm:text-lg text-[#6e6e73] font-normal leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              We build practical digital products around real business requirements — combining product thinking, design, and engineering to create experiences that people can actually use.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#1d1d1f] hover:text-black transition-colors group"
            >
              <span>About us</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* ── 5. FINAL CTA (Solid Single Color Background - No Card) ─── */}
        <section className="w-full bg-[#111111] text-white py-16 sm:py-24 mt-6 sm:mt-10">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#86868b] uppercase block mb-3 font-semibold">
                START A PROJECT
              </span>
              <TextMaskReveal
                text="Have something worth building?"
                as="h3"
                once={false}
                className="text-3xl sm:text-5xl lg:text-[50px] font-display font-medium tracking-tight text-white leading-tight mb-3 sm:mb-4"
              />
              <p className="text-[15px] sm:text-[17px] text-[#a1a1a6] max-w-xl font-normal leading-relaxed">
                Tell us what you&apos;re working on. We&apos;ll figure out what to build next.
              </p>
            </div>
            <div className="shrink-0">
              <StartProjectButton size="lg" variant="light" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}