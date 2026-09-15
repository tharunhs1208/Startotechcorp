"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/home/CTASection";
import ProcessSection from "@/components/home/ProcessSection";
import { Sparkles, ArrowRight, Code, Smartphone, Layout, Cpu, Cloud, Briefcase, CheckCircle2 } from "lucide-react";
import { SERVICES_DATA } from "@/data/siteData";

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "code": return <Code className="w-6 h-6 text-blue-600" />;
      case "smartphone": return <Smartphone className="w-6 h-6 text-emerald-600" />;
      case "layout": return <Layout className="w-6 h-6 text-purple-600" />;
      case "cpu": return <Cpu className="w-6 h-6 text-amber-600" />;
      case "cloud": return <Cloud className="w-6 h-6 text-cyan-600" />;
      default: return <Briefcase className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* HERO SECTION MATCHING TEMPLATE #6 */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Our Services &amp; Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-6">
            Technology Solutions Designed Around Your Goals
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-8">
            From modern responsive web applications and cross-platform mobile apps to autonomous AI workflows and multi-cloud architectures, we build scalable software tailored to your specific enterprise goals.
          </p>

          <Link href="/contact" className="btn-primary text-sm sm:text-base px-7 py-4 inline-flex items-center gap-2">
            <span>Talk to an Expert</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* WHAT WE DO: 6 DETAILED SERVICE CARDS */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight">
              Comprehensive Technology Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.slug}
                className="card-blueprint p-8 flex flex-col justify-between group text-left"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:scale-110 transition-all">
                    {getIcon(service.icon)}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-blue-600 font-mono font-bold mb-4">{service.tagline}</p>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 font-medium">{f.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROCESS SECTION */}
        <ProcessSection />

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
