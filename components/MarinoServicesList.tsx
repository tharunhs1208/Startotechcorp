"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServiceData {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  href: string;
}

const SERVICES: ServiceData[] = [
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centric digital interfaces, comprehensive Figma token systems, and intuitive customer journey blueprints.",
    bullets: ["Figma Design Systems", "UX Research", "Micro-Interactions", "Wireframing", "Interactive Prototypes"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    href: "/services/ui-ux-design",
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "High-performance web applications engineered with Next.js, React, and modular TypeScript architectures.",
    bullets: ["Next.js App Router", "React Architecture", "Full-Stack APIs", "Tailwind CSS", "Edge Caching"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    href: "/services/web-development",
  },
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning",
    description: "Intelligent neural voice agents, sub-280ms conversational pipelines, and enterprise LLM automation workflows.",
    bullets: ["Voice AI Agents", "LLM Integration", "Enterprise RAG", "Neural Audio Pipelines", "Autonomous SDRs"],
    image: "/images/products/zobay_custom.jpg",
    href: "/services/ai-machine-learning",
  },
  {
    id: "cloud-solutions",
    title: "Cloud & DevOps",
    description: "Multi-region edge infrastructure, automated CI/CD deployment pipelines, and high-availability architectures.",
    bullets: ["AWS & Edge CDN", "Docker & Kubernetes", "CI/CD Pipelines", "99.99% SLAs", "Zero-Downtime Deploys"],
    image: "/images/products/cloud_solutions.jpg",
    href: "/services/cloud-solutions",
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Native-feel cross-platform iOS and Android mobile applications with fluid 120Hz gestures and offline sync.",
    bullets: ["React Native", "iOS & Android", "Offline Persistence", "Push Notifications", "Biometric Auth"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop",
    href: "/services/mobile-development",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Zero-trust identity systems, end-to-end cryptographic protection, and rigorous enterprise compliance auditing.",
    bullets: ["Zero-Trust Auth", "Penetration Testing", "Data Encryption", "SOC 2 Readiness", "Vulnerability Audits"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    href: "/services/cybersecurity",
  },
];

export default function MarinoServicesList() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>("ui-ux-design");

  const activeService =
    SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section className="w-full py-20 sm:py-28 lg:py-36 bg-[#F3F3F3] text-[#111111] overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        
        {/* Top Identifier Badge Pill */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-semibold text-black shadow-2xs">
            <span>→</span>
            <span>Our Available Services</span>
          </div>
        </div>

        {/* ── TWO-COLUMN INTERACTIVE SERVICES STAGE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Numbered Service List */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {SERVICES.map((srv, idx) => {
              const isActive = activeServiceId === srv.id;

              return (
                <div
                  key={srv.id}
                  onClick={() =>
                    setActiveServiceId(isActive ? null : srv.id)
                  }
                  className={`group cursor-pointer rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 border ${
                    isActive
                      ? "bg-white border-black/[0.1] shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                      : "bg-transparent border-transparent hover:bg-white/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="font-mono text-xs sm:text-sm font-semibold text-[#888888]">
                        0{idx + 1}
                      </span>
                      <h3
                        className={`text-2xl sm:text-3xl lg:text-4xl font-display font-medium tracking-tight transition-colors ${
                          isActive
                            ? "text-black font-semibold"
                            : "text-[#444444] group-hover:text-black"
                        }`}
                      >
                        {srv.title}
                      </h3>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-[#82FFCD] text-black rotate-90"
                          : "bg-black/[0.04] text-black group-hover:bg-[#82FFCD]"
                      }`}
                    >
                      <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Expandable Accordion Description on Active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="pt-4 sm:pt-6 pl-8 sm:pl-10 space-y-4 overflow-hidden"
                      >
                        <p className="text-[14.5px] sm:text-[15.5px] text-[#444444] leading-relaxed max-w-xl">
                          {srv.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {srv.bullets.map((bullet, bIdx) => (
                            <span
                              key={bIdx}
                              className="px-3 py-1 rounded-full bg-[#EAEAEA] text-[11.5px] font-medium text-black"
                            >
                              {bullet}
                            </span>
                          ))}
                        </div>

                        <div className="pt-2">
                          <Link
                            href={srv.href}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:text-[#00c97b] transition-colors"
                          >
                            <span>Explore {srv.title}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Media Display Card */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-black/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full rounded-2xl overflow-hidden"
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Overlay Info Card */}
                  <div className="absolute bottom-5 left-5 right-5 p-5 rounded-xl bg-black/60 backdrop-blur-md text-white border border-white/10 space-y-2">
                    <div className="text-xs font-mono text-[#82FFCD] uppercase tracking-wider">
                      Specialized Practice
                    </div>
                    <div className="text-lg font-display font-bold text-white">
                      {activeService.title}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
