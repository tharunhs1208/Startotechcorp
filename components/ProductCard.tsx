"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, CheckCircle2, Cpu, Layers, Sparkles } from "lucide-react";
import TechBadge from "./TechBadge";

export interface ProductCapability {
  title: string;
  desc: string;
  icon?: string;
}

export interface ProductData {
  number: string;
  id: string;
  name: string;
  department?: string;
  category?: string;
  departmentLabel?: string;
  year: string;
  metricBadge: string;
  description: string;
  highlights: string[];
  capabilities: ProductCapability[];
  techStack: string[];
  architecture: string;
  mediaType: "video" | "image";
  mediaSrc: string;
  linkHref: string;
  linkLabel?: string;
  ctaLabel?: string;
  layout?: "text-left-visual-right" | "visual-left-text-right";
}

interface ProductCardProps {
  product: ProductData;
  priority?: boolean;
}

type TabType = "overview" | "capabilities" | "architecture";

export default function ProductCard({ product }: ProductCardProps) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const isVisualLeft = product.layout === "visual-left-text-right";
  const label = product.linkLabel || product.ctaLabel || `Explore ${product.name}`;
  const categoryLabel = product.departmentLabel || product.category || "Platform";

  return (
    <article className="group bg-white rounded-2xl sm:rounded-[22px] border border-black/[0.08] p-6 sm:p-9 lg:p-10 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_54px_-12px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden relative">
      {/* ── CARD TOP BAR (Meta) ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-black/[0.06] mb-6 sm:mb-8">
        {/* Left: Number & Department/Category */}
        <div className="flex items-center gap-2.5 text-[11px] sm:text-[12px] font-mono uppercase tracking-[0.16em] text-zinc-500">
          <span className="font-bold text-zinc-900">{product.number}</span>
          <span>/</span>
          <span className="text-zinc-800 font-semibold">{categoryLabel}</span>
          <span>·</span>
          <span>{product.year}</span>
        </div>
      </div>

      {/* ── MAIN CONTENT & VISUAL SPLIT ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Visual Showcase Frame */}
        <div
          className={`lg:col-span-6 overflow-hidden rounded-xl sm:rounded-2xl bg-zinc-100 border border-black/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.1)] group-hover:border-black/20 relative ${
            isVisualLeft ? "lg:order-1 order-1" : "lg:order-2 order-1"
          }`}
        >
          <Link href={product.linkHref} className="block overflow-hidden relative group/media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.mediaSrc}
              alt={product.name}
              className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/media:scale-105"
            />

            {/* Hover Indicator Overlay */}
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <span className="bg-white/95 backdrop-blur-md text-zinc-900 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover/media:translate-y-0 transition-transform duration-300 inline-flex items-center gap-1.5">
                <span>View Product Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        </div>

        {/* Content & In-Card Interactive Tabs */}
        <div
          className={`lg:col-span-6 flex flex-col justify-between ${
            isVisualLeft ? "lg:order-2 order-2" : "lg:order-1 order-2"
          }`}
        >
          <div>
            {/* Product Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-display font-bold text-zinc-900 tracking-tight mb-3">
              <Link
                href={product.linkHref}
                className="hover:text-black transition-colors inline-block relative link-underline"
              >
                {product.name}
              </Link>
            </h3>

            {/* In-Card Interactive Tab Switcher */}
            <div className="flex items-center gap-1 bg-zinc-100/80 p-1 rounded-lg border border-black/[0.05] mb-5 max-w-fit">
              {(
                [
                  { id: "overview", label: "Overview", icon: Layers },
                  { id: "capabilities", label: "Capabilities", icon: Sparkles },
                  { id: "architecture", label: "Architecture", icon: Cpu },
                ] as const
              ).map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-md text-[11px] sm:text-[12px] font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-zinc-900 font-semibold bg-white shadow-xs"
                        : "text-zinc-600 hover:text-zinc-900"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* In-Card Tab Body */}
            <div className="min-h-[160px] sm:min-h-[175px]">
              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <p className="text-[14px] sm:text-[15px] text-zinc-600 leading-relaxed font-light">
                      {product.description}
                    </p>

                    <ul className="space-y-2 pt-1">
                      {product.highlights.map((hl, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-[13px] text-zinc-700 leading-snug"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {activeTab === "capabilities" && (
                  <motion.div
                    key="capabilities"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  >
                    {product.capabilities.map((cap, idx) => (
                      <div
                        key={idx}
                        className="bg-zinc-50/90 rounded-xl p-3 border border-black/[0.05]"
                      >
                        <span className="text-[12px] font-semibold text-zinc-900 block mb-1">
                          {cap.title}
                        </span>
                        <span className="text-[11px] text-zinc-600 leading-relaxed block font-light">
                          {cap.desc}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "architecture" && (
                  <motion.div
                    key="architecture"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <p className="text-[13px] text-zinc-700 leading-relaxed font-mono bg-zinc-50 p-3.5 rounded-xl border border-black/[0.05]">
                      {product.architecture}
                    </p>

                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2 font-semibold">
                        Core Technologies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.techStack.map((tech) => (
                          <TechBadge key={tech} name={tech} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── CARD BOTTOM ACTION BAR ── */}
          <div className="pt-6 mt-4 border-t border-black/[0.06] flex items-center justify-between">
            <Link
              href={product.linkHref}
              className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-zinc-900 hover:text-emerald-700 transition-colors"
            >
              <span className="link-underline">{label}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 text-emerald-600" />
            </Link>

            <span className="text-[11px] font-mono text-zinc-400">
              ID // {product.id.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
