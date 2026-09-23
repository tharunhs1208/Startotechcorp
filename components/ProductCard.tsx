"use client";

import React, { useState } from "react";
import Link from "next/link";
import { renderProductMockup } from "@/components/ui-mockups/ProductUIMockups";
import { Layout, Image as ImageIcon } from "lucide-react";

export interface ProductCapability {
  title: string;
  desc: string;
  icon?: string;
}

export interface ProductData {
  number?: string;
  id: string;
  name: string;
  department?: string;
  category?: string;
  departmentLabel?: string;
  year?: string;
  metricBadge?: string;
  description: string;
  highlights?: string[];
  capabilities?: ProductCapability[];
  techStack?: string[];
  architecture?: string;
  mediaType?: "video" | "image";
  mediaSrc?: string;
  linkHref: string;
  linkLabel?: string;
  ctaLabel?: string;
  layout?: "text-left-visual-right" | "visual-left-text-right";
  // Concrete before/after supporting lines
  beforeAfterSummary?: string;
  supportingLine?: string;
}

interface ProductCardProps {
  product: ProductData;
  priority?: boolean;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [viewMode, setViewMode] = useState<"ui" | "photo">("photo");
  const categoryLabel = product.departmentLabel || product.category || "Platform";
  const year = product.year || "2026";
  const number = product.number || "01";
  const ctaText = product.ctaLabel || "View project";
  const isVisualLeft = product.layout === "visual-left-text-right";

  const imageSrc =
    product.mediaSrc ||
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop";

  return (
    <article className="group bg-white border border-black/[0.08] rounded-xl overflow-hidden hover:border-black/30 transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[340px] items-stretch">
        {/* Editorial Text Column */}
        <div
          className={`lg:col-span-7 p-7 sm:p-9 lg:p-11 flex flex-col justify-between ${
            isVisualLeft ? "lg:order-2 order-2" : "lg:order-1 order-2"
          }`}
        >
          <div>
            {/* Small Minimal Metadata */}
            <div className="flex items-center gap-2 text-[12px] font-mono text-[#86868b] mb-4 uppercase tracking-wider">
              <span className="font-semibold text-[#111]">{number}</span>
              <span>·</span>
              <span>{categoryLabel}</span>
              <span>·</span>
              <span>{year}</span>
            </div>

            {/* Confident Project Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-semibold text-[#111111] tracking-[-0.03em] leading-tight mb-3">
              <Link href={product.linkHref} className="hover:text-black transition-colors">
                {product.name}
              </Link>
            </h3>

            {/* Concise Description */}
            <p className="text-[15px] sm:text-[16px] text-zinc-700 leading-relaxed font-normal mb-6">
              {product.description}
            </p>

            {/* Max two supporting lines (Concrete before/after sentences) */}
            {(product.beforeAfterSummary || product.supportingLine) && (
              <div className="pt-4 border-t border-black/[0.06] space-y-2 text-[13px] sm:text-[14px]">
                {product.beforeAfterSummary && (
                  <p className="text-zinc-800 leading-snug">
                    {product.beforeAfterSummary}
                  </p>
                )}
                {product.supportingLine && (
                  <p className="text-zinc-600 leading-snug">
                    {product.supportingLine}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Simple Clean Text Link */}
          <div className="mt-8 pt-2 flex items-center justify-between">
            <Link
              href={product.linkHref}
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#111111] hover:text-black group transition-colors"
            >
              <span>{ctaText}</span>
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Visual Showcase (5 cols on desktop, subtle radius, prominent) */}
        <div
          className={`lg:col-span-5 bg-zinc-950 ${
            isVisualLeft
              ? "border-b lg:border-b-0 lg:border-r border-black/[0.06] lg:order-1 order-1"
              : "border-t lg:border-t-0 lg:border-l border-black/[0.06] lg:order-2 order-1"
          } relative flex flex-col justify-between overflow-hidden min-h-[260px] sm:min-h-[300px] p-3`}
        >
          {/* Top Switcher Tabs */}
          <div className="flex items-center justify-between z-10 mb-2">
            <span className="px-2 py-0.5 rounded bg-white/10 text-white/70 font-mono text-[10px] font-semibold">
              {product.name} System
            </span>
            <div className="flex items-center gap-1 bg-white/10 p-0.5 rounded-lg backdrop-blur-md">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setViewMode("ui");
                }}
                className={`px-2 py-0.5 rounded text-[10px] font-mono flex items-center gap-1 transition-all ${
                  viewMode === "ui"
                    ? "bg-white text-black font-bold shadow-xs"
                    : "text-white/60 hover:text-white"
                }`}
                title="Interactive Vector UI Console"
              >
                <Layout className="w-2.5 h-2.5" />
                <span>Console</span>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setViewMode("photo");
                }}
                className={`px-2 py-0.5 rounded text-[10px] font-mono flex items-center gap-1 transition-all ${
                  viewMode === "photo"
                    ? "bg-white text-black font-bold shadow-xs"
                    : "text-white/60 hover:text-white"
                }`}
                title="Authentic Photography"
              >
                <ImageIcon className="w-2.5 h-2.5" />
                <span>Photo</span>
              </button>
            </div>
          </div>

          {/* Main Visual Display */}
          <div className="flex-1 relative rounded-lg overflow-hidden border border-white/10 bg-black/40">
            {viewMode === "ui" ? (
              <div className="w-full h-full min-h-[200px] p-1">
                {renderProductMockup(product.id, true)}
              </div>
            ) : (
              <Link href={product.linkHref} className="block w-full h-full relative group/img overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageSrc}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.03]"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
