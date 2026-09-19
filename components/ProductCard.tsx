"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, Cpu, Layers, Sparkles, Zap } from "lucide-react";
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
    <article className="group bg-white rounded-[28px] sm:rounded-[36px] border border-black/[0.08] p-6 sm:p-9 lg:p-11 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_64px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden relative">
      {/* ── CARD TOP BAR (Meta + Live Metric Badge) ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 sm:pb-8 border-b border-black/[0.06] mb-7 sm:mb-9">
        {/* Left: Number & Department/Category */}
        <div className="flex items-center gap-2.5 sm:gap-3 text-[12px] font-mono uppercase tracking-wider text-[#6e6e73]">
          <span className="font-bold text-[#1d1d1f]">{product.number}</span>
          <span>—</span>
          <span className="text-[#1d1d1f] font-medium">{categoryLabel}</span>
          <span>·</span>
          <span>{product.year}</span>
        </div>

        {/* Right: Live Metric Callout Pill */}
        {product.metricBadge && (
          <div className="inline-flex items-center gap-2 bg-[#f5f5f7] border border-black/[0.08] px-3.5 py-1.5 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <span className="text-[12px] font-mono font-medium text-[#1d1d1f] tracking-tight">
              {product.metricBadge}
            </span>
          </div>
        )}
      </div>

      {/* ── MAIN CONTENT & VISUAL SPLIT ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Visual Showcase (Video / Image with Live Badge) */}
        <div
          className={`lg:col-span-6 overflow-hidden rounded-[20px] sm:rounded-[24px] bg-[#e5e5ea] border border-black/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.12)] group-hover:border-black/20 relative ${
            isVisualLeft ? "lg:order-1 order-1" : "lg:order-2 order-1"
          }`}
        >
          <Link href={product.linkHref} className="block overflow-hidden relative group/media">
            {product.mediaType === "video" ? (
              <video
                src={product.mediaSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/media:scale-[1.04]"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={product.mediaSrc}
                alt={product.name}
                className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/media:scale-[1.04]"
              />
            )}

            {/* Subtle Live Badge Overlay */}
            <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 bg-black/65 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-white text-[10px] font-mono tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live System</span>
            </div>

            {/* Hover Indicator Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <span className="bg-white/90 backdrop-blur-md text-[#1d1d1f] text-[12px] font-medium px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover/media:translate-y-0 transition-transform duration-300">
                View Project Details ↗
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
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-display font-medium text-[#1d1d1f] tracking-tight mb-4">
              <Link
                href={product.linkHref}
                className="hover:text-black transition-colors inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-black group-hover:after:w-full after:transition-all after:duration-300"
              >
                {product.name}
              </Link>
            </h3>

            {/* In-Card Interactive Tab Switcher */}
            <div className="flex items-center gap-1 bg-[#f5f5f7] p-1 rounded-xl border border-black/[0.05] mb-6 max-w-fit">
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
                    className={`relative flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-[#1d1d1f] font-semibold"
                        : "text-[#6e6e73] hover:text-[#1d1d1f]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId={`tab-pill-${product.id}`}
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        className="absolute inset-0 bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-black/[0.06] -z-10"
                      />
                    )}
                    <Icon className="w-3.5 h-3.5 shrink-0 opacity-70" />
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Tab Body with Smooth Animated Fade */}
            <div className="min-h-[160px] sm:min-h-[175px]">
              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4"
                  >
                    <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-relaxed font-normal">
                      {product.description}
                    </p>

                    {/* Key Highlight Bullets */}
                    <div className="space-y-2 pt-1">
                      {product.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                          <span className="text-[13px] text-[#1d1d1f] font-normal leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "capabilities" && (
                  <motion.div
                    key="capabilities"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
                  >
                    {product.capabilities.map((cap, idx) => (
                      <div
                        key={idx}
                        className="bg-[#f5f5f7]/80 hover:bg-[#f5f5f7] border border-black/[0.05] rounded-xl p-3 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <Zap className="w-3.5 h-3.5 text-black shrink-0" />
                          <h4 className="text-[12px] font-semibold text-[#1d1d1f] truncate">
                            {cap.title}
                          </h4>
                        </div>
                        <p className="text-[11px] text-[#6e6e73] leading-tight line-clamp-2">
                          {cap.desc}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "architecture" && (
                  <motion.div
                    key="architecture"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-3.5"
                  >
                    <p className="text-[13px] text-[#6e6e73] leading-relaxed font-normal bg-[#f5f5f7]/80 p-3 rounded-xl border border-black/[0.05]">
                      {product.architecture}
                    </p>

                    {/* Tech Stack Badges Bar */}
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868b] block mb-2">
                        Engineered With:
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {product.techStack.map((tech, i) => (
                          <TechBadge key={i} name={tech} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── CARD FOOTER CTA ── */}
          <div className="pt-6 mt-4 border-t border-black/[0.06] flex items-center justify-between">
            <Link
              href={product.linkHref}
              className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-semibold text-[#1d1d1f] hover:text-black group/btn transition-colors"
            >
              <span>{label}</span>
              <span className="w-6 h-6 rounded-full bg-black/[0.06] group-hover/btn:bg-black group-hover/btn:text-white flex items-center justify-center transition-all duration-300">
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </span>
            </Link>

            <span className="text-[11px] font-mono text-[#86868b]">
              Ready to deploy
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
