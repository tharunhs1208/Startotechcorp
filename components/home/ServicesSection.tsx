"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code, Smartphone, Layout, Cpu, Cloud, Briefcase, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES_DATA } from "@/data/siteData";

export default function ServicesSection() {
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
    <section id="services" className="py-20 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* SECTION HEADING WITH SCROLL ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-4">
            Engineering Solutions Designed Around Your Goals
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From modern responsive web applications to autonomous AI intelligence, explore our comprehensive digital services.
          </p>
        </motion.div>

        {/* 6 CARD GRID WITH IN/OUT SCROLL ANIMATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="card-blueprint p-8 flex flex-col justify-between group text-left"
            >
              <div>
                {/* ICON BADGE */}
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                  {getIcon(service.icon)}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* TECH STACK TAGS */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-mono font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION LINK */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-bold text-blue-600 group-hover:text-blue-700 flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="btn-secondary text-sm px-6 py-3.5 inline-flex items-center gap-2"
          >
            <span>View Complete Services Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
