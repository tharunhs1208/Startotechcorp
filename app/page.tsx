"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechBadge from "@/components/TechBadge";

const FEATURED_PRODUCTS = [
  {
    number: "01",
    id: "salesx",
    name: "SalesX",
    category: "Sales · Platform",
    year: "2026",
    description: "A digital platform built to support sales teams, lead management, customer follow-ups, and sales workflows.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/products",
    linkLabel: "View SalesX",
    layout: "text-left-visual-right",
  },
  {
    number: "02",
    id: "zobay",
    name: "Zobay",
    category: "Sales · Voice",
    year: "2026",
    description: "A voice-focused product designed around sales communication and customer conversations.",
    mediaType: "video",
    mediaSrc: "/videos/zobay.mp4",
    linkHref: "/projects/zobay-voice-ai",
    linkLabel: "View Zobay",
    layout: "visual-left-text-right",
  },
  {
    number: "03",
    id: "meetingx",
    name: "MeetingX",
    category: "Communication · Platform",
    year: "2026",
    description: "A meeting and collaboration product designed for simple online communication.",
    mediaType: "video",
    mediaSrc: "/videos/hero-pinterest.mp4",
    linkHref: "/products",
    linkLabel: "View MeetingX",
    layout: "text-left-visual-right",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Understand",
    description: "We start with the business problem, users, requirements, and what needs to work better.",
  },
  {
    number: "02",
    title: "Design",
    description: "We turn requirements into clear interfaces, workflows, and practical product experiences.",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop the product, connect the required systems, and bring the experience to life.",
  },
  {
    number: "04",
    title: "Improve",
    description: "We test, refine, and improve the product as the business evolves.",
  },
];

const SELECTED_WORK_ITEMS = [
  {
    number: "01",
    discipline: "Product Design",
    productName: "SalesX",
    description: "Interfaces and workflows designed around sales activities, lead management, and business operations.",
    linkHref: "/projects",
  },
  {
    number: "02",
    discipline: "Product Development",
    productName: "Zobay",
    description: "A digital experience designed around voice-led sales communication and customer conversations.",
    linkHref: "/projects/zobay-voice-ai",
  },
  {
    number: "03",
    discipline: "Web & Real-time Development",
    productName: "MeetingX",
    description: "A meeting and collaboration experience focused on simple online communication.",
    linkHref: "/projects",
  },
];

const ARCHIVE_TIMELINE = [
  { year: "2026", label: "SalesX v3.0, Zobay Voice Mesh, MeetingX WebRTC" },
  { year: "2025", label: "StartOne Enterprise Cloud OS, BaseOne High-Frequency Treasury, LegalX Sentinel" },
  { year: "2024", label: "SOCAN Media Stream Engine, Multi-Tenant Database Architecture Standard" },
  { year: "2023", label: "Establishment of StratoTech Product Engineering Labs in Bengaluru" },
];

export default function HomePage() {
  const [hoveredWork, setHoveredWork] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-24 sm:pb-32">
        {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24 border-b border-black/[0.08]">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-4 font-semibold">
              DIGITAL PRODUCTS
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium tracking-[-0.035em] text-[#1d1d1f] leading-[1.05] mb-6">
              We build products that make business work better.
            </h1>

            <p className="text-lg sm:text-xl text-[#6e6e73] font-normal leading-relaxed max-w-2xl mb-10">
              We design and build digital products for sales, communication, operations, and the teams behind them.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1d1d1f] text-white text-[14px] font-medium hover:bg-black transition-colors group cursor-pointer"
              >
                <span>Explore our products</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-black/[0.08] text-[#1d1d1f] text-[14px] font-medium hover:bg-[#f5f5f7] transition-colors"
              >
                <span>Start a project</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 2. WHAT WE BUILD ───────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-black/[0.08]">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-2 font-semibold">
                WHAT WE BUILD
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#1d1d1f] leading-snug">
                Built for the way teams actually work.
              </h2>
            </div>
            <div className="lg:col-span-8 flex items-center">
              <p className="text-lg sm:text-xl text-[#6e6e73] font-normal leading-relaxed">
                From sales workflows to communication platforms, we turn business requirements into simple, useful digital products.
              </p>
            </div>
          </div>

          {/* Technology Badges Bar */}
          <div className="pt-6 pb-12 flex flex-wrap items-center gap-2.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#86868b] mr-2">
              Stack:
            </span>
            {["Next.js", "TypeScript", "React", "Node.js", "Python", "PostgreSQL", "Docker", "AWS", "WebRTC", "Figma"].map((tech, i) => (
              <TechBadge key={i} name={tech} />
            ))}
          </div>
        </section>

        {/* ── 3. FEATURED PRODUCTS ───────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-16 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                OUR PRODUCTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight">
                Products built around real business needs.
              </h2>
            </div>
            <Link
              href="/products"
              className="text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] inline-flex items-center gap-1 transition-colors"
            >
              <span>View all products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-20 sm:space-y-28">
            {FEATURED_PRODUCTS.map((prod) => {
              const isVisualLeft = prod.layout === "visual-left-text-right";

              return (
                <article
                  key={prod.id}
                  className="group border-b border-black/[0.08] pb-20 sm:pb-28"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    {/* Visual Container */}
                    <div
                      className={`lg:col-span-7 overflow-hidden rounded-xl bg-[#e5e5ea] border border-black/[0.06] ${
                        isVisualLeft ? "lg:order-1 order-1" : "lg:order-2 order-1"
                      }`}
                    >
                      <Link href={prod.linkHref} className="block overflow-hidden">
                        {prod.mediaType === "video" ? (
                          <video
                            src={prod.mediaSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                          />
                        ) : (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={prod.mediaSrc}
                            alt={prod.name}
                            className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                          />
                        )}
                      </Link>
                    </div>

                    {/* Content Container */}
                    <div
                      className={`lg:col-span-5 flex flex-col justify-between ${
                        isVisualLeft ? "lg:order-2 order-2" : "lg:order-1 order-2"
                      }`}
                    >
                      <div>
                        {/* Number & Category */}
                        <div className="flex items-center gap-3 text-[12px] font-mono text-[#6e6e73] mb-3 uppercase tracking-wider">
                          <span className="font-semibold text-[#1d1d1f]">{prod.number}</span>
                          <span>—</span>
                          <span className="text-[#1d1d1f]">{prod.category}</span>
                          <span>·</span>
                          <span>{prod.year}</span>
                        </div>

                        {/* Product Title */}
                        <h3 className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight mb-4">
                          <Link href={prod.linkHref} className="hover:underline underline-offset-4">
                            {prod.name}
                          </Link>
                        </h3>

                        {/* Short Description */}
                        <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-relaxed mb-8 max-w-md font-normal">
                          {prod.description}
                        </p>
                      </div>

                      {/* CTA Action */}
                      <div className="pt-2">
                        <Link
                          href={prod.linkHref}
                          className="inline-flex items-center gap-2 text-[14px] font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                        >
                          <span>{prod.linkLabel}</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── 4. HOW WE WORK (Numbered Editorial Process) ─────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                OUR WORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight">
                From an idea to a working product.
              </h2>
            </div>
            <p className="text-[14px] text-[#6e6e73] max-w-md leading-relaxed font-normal">
              We combine product thinking, design, and engineering to turn business requirements into useful digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-20 border-b border-black/[0.08]">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="border-t border-black/[0.08] pt-6">
                <span className="text-[12px] font-mono text-[#6e6e73] block mb-2">{step.number}</span>
                <h3 className="text-lg font-display font-medium text-[#1d1d1f] mb-2">{step.title}</h3>
                <p className="text-[13px] text-[#6e6e73] leading-relaxed font-normal">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. SELECTED WORK ───────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                SELECTED WORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight">
                The work behind the products.
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] inline-flex items-center gap-1 transition-colors"
            >
              <span>View all work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-black/[0.08] pb-16">
            {SELECTED_WORK_ITEMS.map((item) => (
              <div
                key={item.number}
                onMouseEnter={() => setHoveredWork(item.number)}
                onMouseLeave={() => setHoveredWork(null)}
                className="py-8 group flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 text-[11px] font-mono text-[#6e6e73] mb-2 uppercase tracking-wider">
                    <span>{item.number}</span>
                    <span>—</span>
                    <span className="font-semibold text-[#1d1d1f]">{item.discipline}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#1d1d1f] mb-2 group-hover:text-[#0071e3] transition-colors">
                    <Link href={item.linkHref}>{item.productName}</Link>
                  </h3>

                  <p className="text-[14px] text-[#6e6e73] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="shrink-0 flex items-center">
                  <Link
                    href={item.linkHref}
                    className="inline-flex items-center gap-2 text-[14px] font-medium text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors"
                  >
                    <span>View work</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. ARCHIVE SECTION ─────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="border-t border-black/[0.08] pt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 pb-20 border-b border-black/[0.08]">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-2 font-semibold">
                ARCHIVE
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight mb-4">
                A record of what we&apos;ve built.
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-relaxed mb-8 font-normal max-w-md">
                Explore products, projects, and work developed across the company over time.
              </p>
              <Link
                href="/archive"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors group"
              >
                <span>Explore archive</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="lg:col-span-7 space-y-4 font-mono text-[12px]">
              {ARCHIVE_TIMELINE.map((entry, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-[#f5f5f7] border border-black/[0.04] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                >
                  <span className="font-semibold text-[#1d1d1f] shrink-0">{entry.year}</span>
                  <span className="text-[#6e6e73]">{entry.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. ABOUT STATEMENT ─────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="max-w-3xl pb-20 border-b border-black/[0.08]">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-4 font-semibold">
              ABOUT
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-[#1d1d1f] leading-[1.1] mb-6">
              Technology should solve a problem before it tries to impress.
            </h2>
            <p className="text-base sm:text-lg text-[#6e6e73] font-normal leading-relaxed mb-8 max-w-2xl">
              We build practical digital products around real business requirements — combining product thinking, design, and engineering to create experiences that people can actually use.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors group"
            >
              <span>About us</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* ── 8. FINAL CTA ───────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h3 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-[#1d1d1f] mb-3">
                Have something worth building?
              </h3>
              <p className="text-[15px] sm:text-[16px] text-[#6e6e73] max-w-md font-normal leading-relaxed">
                Tell us what you&apos;re working on. We&apos;ll figure out what to build next.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1d1d1f] text-white text-[14px] font-medium hover:bg-black transition-colors group cursor-pointer"
              >
                <span>Start a project</span>
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