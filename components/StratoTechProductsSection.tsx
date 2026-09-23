"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const PRODUCTS = [
  {
    id: "salesx",
    name: "SalesX",
    category: "AI Workflow & Lead Pipeline",
    description: "Autonomous pipeline orchestration, multi-channel inbound intelligence, and revenue forecasting built for modern commercial teams.",
    image: "/images/products/salesx_custom.jpg",
    video: "/videos/baseone.mp4",
    href: "/products/salesx",
    highlights: ["Sub-80ms Query Latency", "CRM 2-Way Sync", "Automated Playbooks"],
  },
  {
    id: "meetingx",
    name: "MeetingX",
    category: "Real-Time WebRTC Suite",
    description: "Ultra low-latency video meetings, synchronized whiteboarding, and real-time audio transcript generation with zero vendor lock-in.",
    image: "/images/products/meetingx_pinterest.jpg",
    video: "/videos/startone.mp4",
    href: "/products/meetingx",
    highlights: ["Global SFU Relay", "End-to-End Encrypted", "Automated Action Items"],
  },
  {
    id: "zobay",
    name: "Zobay",
    category: "Voice AI & Telephony",
    description: "Conversational voice intelligence engines powering enterprise customer service and telephony appointment routing.",
    image: "/images/products/zobay_custom.jpg",
    video: "/videos/zobay.mp4",
    href: "/projects/zobay-voice-ai",
    highlights: ["Sub-280ms Acoustic Latency", "40+ Languages", "Voice Biometric Gating"],
  },
];

export default function StratoTechProductsSection() {
  return (
    <section className="w-full py-20 sm:py-28 lg:py-32 bg-[#F3F3F3] border-t border-black/[0.08]">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 sm:pb-8 mb-12 sm:mb-16 border-b border-black/[0.1]">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-black" />
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#555555] uppercase font-bold">
                03 / PRODUCTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-medium tracking-[-0.035em] text-[#111111] leading-none uppercase">
              BUILT FOR REAL WORK.
            </h2>
          </div>

          <Link
            href="/products"
            className="text-[13px] font-semibold text-black hover:text-[#555555] inline-flex items-center gap-1.5 transition-colors group pb-0.5"
          >
            <span>All software products</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ── EDITORIAL ASYMMETRIC PRODUCT PRESENTATION ── */}
        <div className="space-y-12 sm:space-y-16">
          {PRODUCTS.map((prod, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Media Stage */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <Link href={prod.href} className="block group">
                    <div className="relative w-full aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                      {prod.video ? (
                        <video
                          src={prod.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                        />
                      ) : (
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                    </div>
                  </Link>
                </div>

                {/* Narrative & Details */}
                <div className={`lg:col-span-5 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#555555] block">
                      {prod.category}
                    </span>
                    <h3 className="font-display font-medium text-3xl sm:text-4xl text-[#111111] tracking-tight">
                      {prod.name}
                    </h3>
                  </div>

                  <p className="text-[14px] sm:text-[15px] text-[#444444] leading-relaxed font-normal">
                    {prod.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {prod.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white border border-black/[0.08] text-[11px] font-mono text-[#333333]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={prod.href}
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-black hover:text-[#555555] transition-colors group"
                    >
                      <span>View Product</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
