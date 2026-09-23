"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const UPCOMING_PRODUCTS = [
  {
    title: "MeetingX v2.0 Spatial Canvas: Infinite collaborative canvas & live neural transcriptions",
    status: "COMING Q4 2026",
    tagline: "Next-generation real-time whiteboard with low-latency multi-cursor sync.",
    pills: ["BETA ACCESS", "WebRTC v2", "AI Canvas"],
    image: "/images/products/meetingx_pinterest.jpg",
    slug: "products/meetingx",
  },
  {
    title: "SalesX Autonomous Voice SDR: High-velocity lead qualification & instant calendar booking",
    status: "COMING Q4 2026",
    tagline: "Sub-250ms neural speech agent that calls leads within 60 seconds of form submission.",
    pills: ["VOICE SDR", "Early Access", "Salesforce"],
    image: "/images/products/salesx_custom.jpg",
    slug: "products/salesx",
  },
  {
    title: "Zobay Multilingual Edge Speech: 42 global languages with zero cloud latency",
    status: "COMING Q1 2027",
    tagline: "Autonomous telephony mesh optimized for high-volume enterprise call centers.",
    pills: ["EDGE AI", "Multilingual", "SIP Telephony"],
    image: "/images/products/zobay_custom.jpg",
    slug: "projects/zobay-voice-ai",
  },
  {
    title: "BaseOne Real-Time Settlement Engine: Sub-second multi-currency ledger clearing",
    status: "COMING Q1 2027",
    tagline: "Double-entry cryptographic ledger infrastructure connecting tier-1 global banking APIs.",
    pills: ["FINTECH 2.0", "Ledger Engine", "ISO 20022"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
    slug: "projects/baseone-treasury-settlement",
  },
  {
    title: "StartOne Enterprise AI Hub: Deterministic workflow automation & compliance auditing",
    status: "COMING Q2 2027",
    tagline: "Automated purchase approvals, security policy enforcement, and audit-ready tracking.",
    pills: ["ENTERPRISE OS", "Autonomous Ops", "SOC 2"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    slug: "projects/startone-enterprise-os",
  },
  {
    title: "LegalX Sentinel v3.0: Autonomous contract negotiation & redline generation",
    status: "COMING Q2 2027",
    tagline: "Instant clause comparison and risk scoring against customized enterprise playbooks.",
    pills: ["LEGALTECH", "Contract NLP", "Autonomous"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
    slug: "products",
  },
];

export default function StratoTechBlogSection() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % (UPCOMING_PRODUCTS.length - 2));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + (UPCOMING_PRODUCTS.length - 2)) % (UPCOMING_PRODUCTS.length - 2));
  };

  const visibleProducts = UPCOMING_PRODUCTS.slice(startIndex, startIndex + 3);

  return (
    <section className="w-full py-20 sm:py-28 lg:py-36 bg-[#0C0C0E] text-white overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 sm:pb-14 border-b border-white/10">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-medium tracking-tight text-white leading-none">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#82FFCD] mr-3 align-middle" />
              What&apos;s happening?
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/products"
              className="text-[13px] font-semibold text-[#82FFCD] hover:text-white inline-flex items-center gap-1.5 transition-colors group"
            >
              <span>View all upcoming releases</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-2 ml-3">
              <button
                onClick={handlePrev}
                aria-label="Previous product release"
                className="w-9 h-9 rounded-full bg-[#82FFCD] text-black hover:bg-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next product release"
                className="w-9 h-9 rounded-full bg-[#82FFCD] text-black hover:bg-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ── HORIZONTAL SLIDER CARDS (UPCOMING PRODUCTS) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-8">
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((art, i) => (
              <motion.div
                key={art.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <Link
                  href={`/${art.slug}`}
                  className="group block relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 aspect-[4/3] sm:aspect-[16/11] p-6 flex flex-col justify-between h-full"
                >
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-500 ease-out -z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 -z-0" />

                  {/* Top: Status & Preview CTA */}
                  <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-[#82FFCD] text-black font-bold text-[10px]">
                      {art.status}
                    </span>
                    <span className="inline-flex items-center gap-1 text-white group-hover:text-[#82FFCD] font-medium transition-colors">
                      <span>Preview</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Bottom: Title & Pills */}
                  <div className="relative z-10 space-y-3">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#82FFCD] transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-zinc-300 line-clamp-2">
                      {art.tagline}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {art.pills.map((pill, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-200"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
