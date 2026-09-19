"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechBadge from "@/components/TechBadge";
import TextMaskReveal from "@/components/TextMaskReveal";
import { SERVICES_DATA } from "@/data/siteData";

import ScrollCardTransition from "@/components/ScrollCardTransition";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-12 sm:pb-20">
        {/* ── 1. EDITORIAL HEADER ────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-12 sm:pb-16 border-b border-black/[0.08]">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 font-semibold">
              SERVICES &amp; CAPABILITIES
            </span>
            <TextMaskReveal
              text="Engineering Capabilities"
              as="h1"
              once={false}
              className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-[#1d1d1f] mb-4"
            />
            <p className="mt-3 text-base sm:text-lg text-[#6e6e73] font-normal leading-relaxed">
              Full-stack software engineering, bespoke UI/UX design systems, and intelligent voice and data systems designed for durable production use.
            </p>
          </div>
        </section>

        {/* ── 2. EDITORIAL SERVICES CARDS ────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12">
          <div className="space-y-8 sm:space-y-12">
            {SERVICES_DATA.map((service, idx) => {
              const isVisualLeft = idx % 2 === 1;

              return (
                <ScrollCardTransition key={service.slug} index={idx}>
                  <article className="group bg-white border border-black/[0.08] rounded-xl overflow-hidden hover:border-black/30 transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[360px] items-stretch">
                      {/* Left Column: Index, Title, Prose, Deliverables, Stack, Link */}
                      <div
                        className={`lg:col-span-7 p-7 sm:p-9 lg:p-11 flex flex-col justify-between ${
                          isVisualLeft ? "lg:order-2 order-2" : "lg:order-1 order-2"
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2 text-[12px] font-mono text-[#86868b] mb-4 uppercase tracking-wider">
                            <span className="font-semibold text-[#111]">0{idx + 1}</span>
                            <span>·</span>
                            <span>Practice Area</span>
                            <span>·</span>
                            <span>Sprint Delivery</span>
                          </div>

                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-semibold text-[#111111] tracking-[-0.03em] leading-tight mb-3">
                            <Link
                              href={`/services/${service.slug}`}
                              className="hover:text-black transition-colors"
                            >
                              {service.title}
                            </Link>
                          </h2>

                          <p className="text-[15px] sm:text-[16px] text-zinc-600 font-normal leading-relaxed mb-6 max-w-xl">
                            {service.shortDescription || service.fullDescription}
                          </p>

                          {/* Deliverables List (Clean hairlines, no generic icons) */}
                          <div className="pt-4 border-t border-black/[0.06] space-y-2.5 max-w-xl">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-[#1d1d1f] font-semibold block">
                              Core Deliverables
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {service.features.slice(0, 4).map((feat, fIdx) => (
                                <div
                                  key={fIdx}
                                  className="border-l-2 border-black/[0.12] pl-3 py-0.5 text-[13px] text-[#6e6e73] leading-snug"
                                >
                                  <span className="font-medium text-[#1d1d1f] block">{feat.title}</span>
                                  <span className="text-[12px]">{feat.desc}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Technologies & Link */}
                        <div className="mt-8 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/[0.06] max-w-xl">
                          <div className="flex flex-wrap items-center gap-1.5">
                            {service.technologies.slice(0, 4).map((t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 rounded-md bg-zinc-100 border border-black/[0.06] text-[11px] font-mono text-zinc-700"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#111111] hover:text-black group transition-colors shrink-0"
                          >
                            <span>Explore capability</span>
                            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
                          </Link>
                        </div>
                      </div>

                      {/* Right Column: High-Resolution Visual Focus */}
                      <div
                        className={`lg:col-span-5 bg-zinc-100 ${
                          isVisualLeft
                            ? "border-b lg:border-b-0 lg:border-r border-black/[0.06] lg:order-1 order-1"
                            : "border-t lg:border-t-0 lg:border-l border-black/[0.06] lg:order-2 order-1"
                        } relative flex items-stretch overflow-hidden min-h-[260px] sm:min-h-[320px]`}
                      >
                        <Link
                          href={`/services/${service.slug}`}
                          className="block w-full h-full relative group/img overflow-hidden"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={service.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"}
                            alt={service.title}
                            className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.03]"
                          />
                        </Link>
                      </div>
                    </div>
                  </article>
                </ScrollCardTransition>
              );
            })}
          </div>
        </section>

        {/* ── 3. BOTTOM CTA ──────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-12 sm:pt-20">
          <div className="border-t border-black/[0.08] pt-12 sm:pt-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-2 font-semibold">
                GET IN TOUCH
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-medium tracking-tight text-[#1d1d1f]">
                Need dedicated engineering for your next release?
              </h3>
              <p className="mt-2 text-[15px] text-[#6e6e73] font-normal leading-relaxed">
                We partner with engineering and product leads on direct sprint delivery.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1d1d1f] text-white hover:bg-black text-[14px] font-medium transition-colors"
              >
                <span>Start a conversation</span>
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
