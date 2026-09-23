"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechBadge from "@/components/TechBadge";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SoftwareAppJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

import ScrollCardTransition from "@/components/ScrollCardTransition";

export default function SalesXProductPage() {
  const capabilities = [
    {
      title: "Automated Lead Triage",
      desc: "Instant inbound routing, intent categorization, and automated deal allocation across sales representatives in under 500ms.",
    },
    {
      title: "Scheduled Follow-up Cadence",
      desc: "Structured email and telephony follow-up sequences with zero dropped client interactions or lost context.",
    },
    {
      title: "Two-Way CRM Synchronization",
      desc: "Real-time bi-directional data pipelines syncing contacts, activities, and contract stages with existing enterprise databases.",
    },
    {
      title: "Pipeline Analytics & Velocity",
      desc: "Clean pipeline visibility with real-time conversion rates, deal velocity tracking, and revenue forecasting.",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Lead Capture",
      desc: "Captures inbound inquiries across web portals, forms, and email channels.",
    },
    {
      step: "02",
      title: "Qualification",
      desc: "Verifies budget, authority, need, and project timeline with structured criteria.",
    },
    {
      step: "03",
      title: "Communication",
      desc: "Coordinates walkthroughs, sends tailored proposals, and manages follow-ups.",
    },
    {
      step: "04",
      title: "Conversion",
      desc: "Executes digital agreements and initiates immediate customer onboarding.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <SoftwareAppJsonLd
        name="SalesX Platform"
        applicationCategory="BusinessApplication, CRM"
        description="A high-velocity digital sales platform engineered to automate pipeline triaging, lead qualification, and multi-channel customer follow-ups."
        url="https://stratotechcorp.in/products/salesx"
        features={[
          "Automated Lead Triage in <500ms",
          "Scheduled Follow-up Cadence",
          "Two-Way CRM Synchronization",
          "Pipeline Velocity Analytics",
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "https://stratotechcorp.in" },
          { name: "Products", item: "https://stratotechcorp.in/products" },
          { name: "SalesX", item: "https://stratotechcorp.in/products/salesx" },
        ]}
      />
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-12 sm:pb-20">
        {/* Brand Logo at the starting */}
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 mb-4 sm:mb-6">
          <Link
            href="/"
            className="inline-block font-display text-2xl sm:text-3xl font-black tracking-[-0.04em] text-[#111111] hover:opacity-85 transition-opacity"
          >
            STRATOTECH
          </Link>
        </div>

        {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-12 sm:pb-16 border-b border-black/[0.08]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Breadcrumbs
              items={[
                { label: "Products", href: "/products" },
                { label: "SalesX" },
              ]}
            />

            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] hover:text-[#1d1d1f] transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>All Products</span>
            </Link>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[11px] font-mono text-[#6e6e73] mb-4 uppercase tracking-wider">
              <span className="font-semibold text-[#1d1d1f]">PRODUCT</span>
              <span>·</span>
              <span>SALES · PLATFORM</span>
              <span>·</span>
              <span>2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-[#1d1d1f] leading-tight mb-6">
              SalesX
            </h1>

            <p className="text-lg sm:text-xl text-[#6e6e73] font-normal leading-relaxed max-w-2xl mb-10">
              A digital sales platform engineered to automate pipeline triaging, lead qualification, and multi-channel customer follow-ups.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact?subject=Inquiry+regarding+SalesX"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1d1d1f] text-white text-[14px] font-medium hover:bg-black transition-colors group cursor-pointer"
              >
                <span>Inquire about SalesX</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#capabilities"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-black/[0.08] text-[#1d1d1f] text-[14px] font-medium hover:bg-[#f5f5f7] transition-colors"
              >
                <span>Explore capabilities</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 2. PURPOSE & VALUE ─────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-black/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-2 font-semibold">
                PURPOSE &amp; VALUE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1d1d1f] leading-snug">
                Built for sales velocity and execution.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-[15px] sm:text-[16px] text-[#6e6e73] font-normal leading-relaxed">
              <p>
                SalesX eliminates spreadsheet fragmentation by giving sales teams a structured, real-time command center for lead capture, deal qualification, follow-up scheduling, and contract signing.
              </p>
              <p>
                Engineered with instant search, minimal interface clutter, and automated task reminders, SalesX keeps sales representatives focused on closing deals rather than updating manual logs.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. KEY CAPABILITIES (Product Feature Cards) ─────────────── */}
        <section id="capabilities" className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-black/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                PLATFORM MODULES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#1d1d1f] tracking-tight">
                Key Capabilities
              </h2>
            </div>
            <p className="text-[14px] text-[#6e6e73] max-w-sm">
              Core functionalities built to support modern high-velocity sales teams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => (
              <ScrollCardTransition key={idx} index={idx}>
                <article className="group bg-white border border-black/[0.08] rounded-xl p-6 sm:p-7 hover:border-black/30 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[12px] font-mono text-[#86868b] block mb-3 uppercase tracking-wider font-medium">
                      0{idx + 1} · Module
                    </span>
                    <h3 className="text-lg font-sans font-semibold text-[#111111] mb-2.5 tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="text-[14px] text-zinc-600 leading-relaxed font-normal">
                      {cap.desc}
                    </p>
                  </div>
                </article>
              </ScrollCardTransition>
            ))}
          </div>
        </section>

        {/* ── 4. SALES WORKFLOW ──────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-black/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                THE PROCESS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#1d1d1f] tracking-tight">
                Sales Execution Flow
              </h2>
            </div>
            <p className="text-[14px] text-[#6e6e73] max-w-sm">
              How SalesX guides opportunities from initial inquiry to closed agreement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step) => (
              <div key={step.step} className="border-t border-black/[0.08] pt-6 flex flex-col justify-between">
                <div>
                  <span className="text-[12px] font-mono text-[#86868b] block mb-2">{step.step}</span>
                  <h3 className="text-lg font-display font-medium text-[#1d1d1f] mb-2">{step.title}</h3>
                  <p className="text-[14px] text-[#6e6e73] leading-relaxed font-normal">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. TECHNOLOGY STACK ────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-14 sm:py-20 border-b border-black/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                INFRASTRUCTURE &amp; TECH
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1d1d1f]">
                Core Technologies
              </h2>
            </div>

            <div className="flex flex-wrap gap-2.5 max-w-xl">
              {["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Redis", "Docker", "AWS", "WebSockets"].map((t, idx) => (
                <TechBadge key={idx} name={t} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. FINAL CTA ───────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-12 sm:pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-4xl font-display font-medium tracking-tight text-[#1d1d1f] mb-2">
                Ready to deploy SalesX in your business?
              </h3>
              <p className="text-[15px] text-[#6e6e73] max-w-md font-normal leading-relaxed">
                We configure and customize SalesX around your specific sales pipeline, CRM schemas, and team structure.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact?subject=SalesX+Custom+Deployment"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1d1d1f] text-white text-[14px] font-medium hover:bg-black transition-colors group cursor-pointer"
              >
                <span>Discuss SalesX</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
