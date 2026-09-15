"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/cinematic/CTASection";
import { Sparkles, ArrowRight, HeartPulse, Banknote, Building, GraduationCap, ShoppingBag, Factory, Truck, Terminal } from "lucide-react";
import { INDUSTRIES_DATA } from "@/data/siteData";

export default function IndustriesPage() {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "heart-pulse": return <HeartPulse className="w-6 h-6 text-red-500" />;
      case "banknote": return <Banknote className="w-6 h-6 text-emerald-600" />;
      case "building": return <Building className="w-6 h-6 text-blue-600" />;
      case "graduation-cap": return <GraduationCap className="w-6 h-6 text-purple-600" />;
      case "shopping-bag": return <ShoppingBag className="w-6 h-6 text-amber-600" />;
      case "factory": return <Factory className="w-6 h-6 text-slate-700" />;
      case "truck": return <Truck className="w-6 h-6 text-indigo-600" />;
      default: return <Terminal className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        
        {/* HERO */}
        <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-8 lg:px-[120px] mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Vertical Domain Expertise</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-6">
            Industries We Modernize
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-8">
            Tailored technology solutions designed around the specific compliance rules, operational bottlenecks, and market dynamics of key industries.
          </p>
        </div>

        {/* INDUSTRY CARDS GRID */}
        <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-8 lg:px-[120px] mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {INDUSTRIES_DATA.map((ind) => (
              <div
                key={ind.slug}
                className="card-blueprint p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:scale-110 transition-all">
                    {getIndustryIcon(ind.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 mb-2 group-hover:text-blue-600 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {ind.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
