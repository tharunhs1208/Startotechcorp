"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechBadge from "@/components/TechBadge";
import TextMaskReveal from "@/components/TextMaskReveal";
import StartProjectButton from "@/components/StartProjectButton";
import ProductCard, { ProductData } from "@/components/ProductCard";
import InteractiveProductShowcase from "@/components/InteractiveProductShowcase";
import SelectedWorkShowcase from "@/components/SelectedWorkShowcase";

const FEATURED_PRODUCTS: ProductData[] = [
  {
    number: "01",
    id: "salesx",
    name: "SalesX",
    departmentLabel: "Sales Platform",
    year: "2026",
    description: "Routes incoming inbound leads directly to account executives based on territory and company size, then triggers follow-up cadences.",
    beforeAfterSummary: "Teams cut first-response times from over 4 hours down to under 5 minutes without manual spreadsheet triage.",
    supportingLine: "Every conversation and stage change syncs directly with Salesforce and HubSpot records in real time.",
    linkHref: "/products/salesx",
    mediaSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    ctaLabel: "See how lead routing works",
    layout: "text-left-visual-right",
  },
  {
    number: "02",
    id: "zobay",
    name: "Zobay Voice AI",
    departmentLabel: "Voice AI",
    year: "2026",
    description: "Answers customer phone calls and qualifies inbound inquiries with fluid speech pacing that adapts to caller interruptions.",
    beforeAfterSummary: "Callers experience natural back-and-forth conversation without the awkward 2-second delays of traditional phone trees.",
    supportingLine: "On hang-up, the system writes structured meeting notes and places appointments directly onto rep calendars.",
    linkHref: "/projects/zobay-voice-ai",
    mediaSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    ctaLabel: "Listen to live turn-taking",
    layout: "visual-left-text-right",
  },
  {
    number: "03",
    id: "meetingx",
    name: "MeetingX",
    departmentLabel: "Communication",
    year: "2026",
    description: "Browser-based video collaboration with adaptive selective forwarding, real-time shared canvases, and live transcription.",
    beforeAfterSummary: "Distributed product teams run multi-participant reviews with clear 1080p video, even on constrained bandwidth.",
    supportingLine: "Action items and summaries are organized during the call and pushed directly to project management boards.",
    linkHref: "/products/meetingx",
    mediaSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    ctaLabel: "See how rooms connect",
    layout: "text-left-visual-right",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Understand",
    description: "We analyze the operational problem, user behaviors, integration points, and core metrics that define success.",
  },
  {
    number: "02",
    title: "Design",
    description: "We turn business requirements into clean workflows, accessible UI token systems, and interactive Figma prototypes.",
  },
  {
    number: "03",
    title: "Build",
    description: "We engineer production-grade software using TypeScript, modular APIs, and automated test pipelines.",
  },
  {
    number: "04",
    title: "Improve",
    description: "We monitor telemetry, optimize performance, and iterate on features alongside your internal teams.",
  },
];

const SELECTED_WORK_ITEMS = [
  {
    number: "01",
    discipline: "Product Design",
    year: "2026",
    productName: "SalesX",
    description: "Interfaces and workflows designed around sales activities, lead triage, and multi-channel pipeline management.",
    mediaSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tags: "Workflow · Figma tokens · Prototyping",
    linkHref: "/products/salesx",
  },
  {
    number: "02",
    discipline: "Voice AI & Streaming",
    year: "2026",
    productName: "Zobay Voice AI",
    description: "Conversational voice engine engineered for sub-280ms acoustic turn-taking and real-time appointment scheduling.",
    mediaSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tags: "WebRTC · Neural audio · SIP trunking",
    linkHref: "/projects/zobay-voice-ai",
  },
  {
    number: "03",
    discipline: "Real-Time Collaboration",
    year: "2026",
    productName: "MeetingX",
    description: "Browser-based video collaboration with adaptive selective forwarding, real-time whiteboards, and live transcription.",
    mediaSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    tags: "Selective forwarding · Canvas · Transcripts",
    linkHref: "/products/meetingx",
  },
];

import OrbitalHero from "@/components/OrbitalHero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#111111] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-0 pb-12 sm:pb-20">
        {/* ── 1. ORBITAL AI TOOLS HERO (Exact Reference Design) ──── */}
        <OrbitalHero />

        {/* ── 2. WHAT WE BUILD (Open Editorial Section) ─────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-16 sm:pt-24">
          <div className="border-t border-b border-black/[0.08] py-12 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-8 border-b border-black/[0.06]">
              <div className="lg:col-span-5">
                <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 font-semibold">
                  WHAT WE BUILD
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-medium text-[#1d1d1f] leading-tight">
                  Built for the way modern teams actually work.
                </h2>
              </div>
              <div className="lg:col-span-7 flex items-center">
                <p className="text-base sm:text-xl text-[#6e6e73] font-normal leading-relaxed">
                  From automated sales workflows to real-time communication platforms, we turn business requirements into simple, useful digital products that scale.
                </p>
              </div>
            </div>

            {/* Technology Badges Bar */}
            <div className="pt-6 flex flex-wrap items-center gap-2.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#86868b] mr-2">
                Core Stack:
              </span>
              {["Next.js", "TypeScript", "React", "Node.js", "Python", "PostgreSQL", "Docker", "AWS", "WebRTC", "Figma"].map((tech, i) => (
                <TechBadge key={i} name={tech} />
              ))}
            </div>
          </div>
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

        {/* ── 4. OUR PROCESS (Open Typographic Timeline — No Boxes) ──── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-16 sm:pt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 mb-8 sm:mb-12">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                OUR PROCESS
              </span>
              <TextMaskReveal
                text="From an idea to a working product."
                as="h2"
                once={false}
                className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight"
              />
            </div>
            <p className="text-[14px] text-[#6e6e73] max-w-md leading-relaxed font-normal">
              We combine product thinking, design, and engineering to turn business requirements into useful digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="border-t border-black/[0.08] pt-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[13px] font-mono font-semibold text-[#1d1d1f] block mb-3">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-display font-medium text-[#1d1d1f] mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-[#6e6e73] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. SELECTED WORK (Pinned Horizontal on Desktop, Vertical on Mobile) ── */}
        <div className="w-full pt-12 sm:pt-20">
          <SelectedWorkShowcase items={SELECTED_WORK_ITEMS} />
        </div>

        {/* ── 6. ABOUT STATEMENT ─────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-16 sm:pt-28">
          <div className="max-w-3xl pb-10 sm:pb-20 border-b border-black/[0.08]">
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

        {/* ── 7. FINAL CTA ─── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-16 sm:pt-28 pb-12 sm:pb-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <TextMaskReveal
                text="Have something worth building?"
                as="h3"
                once={false}
                className="text-3xl sm:text-5xl lg:text-[54px] font-display font-medium tracking-tight text-[#1d1d1f] leading-tight mb-3 sm:mb-4"
              />
              <p className="text-[15px] sm:text-[17px] text-[#6e6e73] max-w-xl font-normal leading-relaxed">
                Tell us what you&apos;re working on. We&apos;ll figure out what to build next.
              </p>
            </div>
            <div className="shrink-0">
              <StartProjectButton size="lg" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}