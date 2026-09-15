"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, HeartPulse, Banknote, Building, GraduationCap, ShoppingBag, Factory, Truck, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { INDUSTRIES_DATA } from "@/data/siteData";

export default function IndustriesSection() {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "heart-pulse": return <HeartPulse className="w-5 h-5 text-red-500" />;
      case "banknote": return <Banknote className="w-5 h-5 text-emerald-600" />;
      case "building": return <Building className="w-5 h-5 text-blue-600" />;
      case "graduation-cap": return <GraduationCap className="w-5 h-5 text-purple-600" />;
      case "shopping-bag": return <ShoppingBag className="w-5 h-5 text-amber-600" />;
      case "factory": return <Factory className="w-5 h-5 text-slate-700" />;
      case "truck": return <Truck className="w-5 h-5 text-indigo-600" />;
      default: return <Terminal className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Sectors We Modernize</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-4">
            Tailored Industry Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Technology solutions designed specifically around the regulatory boundaries and operational workflows of key industries.
          </p>
        </motion.div>

        {/* 4x2 GRID MATCHING BLUEPRINT SECTION 10 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_DATA.map((ind, idx) => (
            <motion.div
              key={ind.slug}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/industries/${ind.slug}`}
                className="card-blueprint p-6 flex flex-col justify-between group text-left h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-50 transition-all">
                    {getIndustryIcon(ind.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2 group-hover:text-blue-600 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {ind.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700 uppercase tracking-wider">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
