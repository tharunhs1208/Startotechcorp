"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowUpRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const FAQS = [
  {
    q: "What does StratoTechCorp do?",
    a: "We design and build bespoke digital products, intelligent AI voice/software systems, and scalable cloud architectures for fast-growing companies and enterprises.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "Our core stack includes React, Next.js, TypeScript, Node.js, Python, PyTorch/OpenAI LLM models, PostgreSQL, Redis, Docker, and AWS/Vercel edge infrastructure.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes. We partner with funded startups to build production-grade MVPs, execute complete redesigns, or scale core platform engineering.",
  },
  {
    q: "How long does a typical project take?",
    a: "Typical MVP builds take between 6 to 12 weeks. Enterprise platform implementations and full redesigns range from 3 to 6 months depending on technical scope.",
  },
  {
    q: "Can you build an MVP from scratch?",
    a: "Absolutely. We specialize in fast-paced agile sprint cycles that deliver functional, secure, and investor-ready MVPs with robust test coverage.",
  },
  {
    q: "How do we get started?",
    a: "Simply submit a brief inquiry on our Contact page. We will schedule a 30-minute discovery call to evaluate technical requirements and propose an execution plan.",
  },
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 w-full max-w-full overflow-x-hidden selection:bg-[#0070f3] selection:text-white pb-10 sm:pb-16">
      <Navbar />

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-28 sm:pt-40 pb-12 sm:pb-16 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container text-center max-w-4xl mx-auto">
          <ScrollReveal delay={0.05} y={16}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/[0.08] bg-white text-xs font-semibold text-[#0070f3] mb-5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Common Questions</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-zinc-600 max-w-xl mx-auto font-light leading-relaxed">
              Everything you need to know about working with StratoTechCorp.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MINIMALIST LINEAR ACCORDION LIST ────────────────────────── */}
      <section className="py-12 sm:py-20">
        <div className="max-w-[860px] mx-auto px-4 sm:px-8">
          <div className="border-t border-black/[0.08] divide-y divide-black/[0.08]">
            {FAQS.map((faq, i) => {
              const isOpen = openIdx === i;
              return (
                <ScrollReveal key={i} delay={i * 0.04} y={12}>
                  <div className="py-6 sm:py-7 transition-colors group">
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-start justify-between gap-6 text-left cursor-pointer select-none touch-manipulation"
                    >
                      <div className="flex items-start gap-3 sm:gap-4 pr-2">
                        <span className="shrink-0 font-mono text-xs sm:text-sm font-semibold text-[#0070f3] pt-0.5 sm:pt-1">
                          0{i + 1}
                        </span>
                        <h3 className={`font-display text-lg sm:text-2xl font-bold tracking-tight transition-colors duration-200 ${
                          isOpen ? "text-[#0070f3]" : "text-zinc-900 group-hover:text-[#0070f3]"
                        }`}>
                          {faq.q}
                        </h3>
                      </div>

                      <span className={`shrink-0 grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 text-[#0070f3] bg-[#0070f3]/10"
                          : "text-zinc-400 group-hover:text-zinc-700 group-hover:bg-zinc-100"
                      }`}>
                        <ChevronDown className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3.5 sm:pt-4 pl-7 sm:pl-9 pr-4 sm:pr-8 text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                            <p>{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-16 border-t border-black/[0.08] bg-[#f8fafc]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-8 text-center">
          <ScrollReveal y={24}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
              Still have questions?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-600 font-light">
              We are always happy to discuss technical architectures and scope.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] hover:bg-black text-white px-8 py-3.5 text-xs sm:text-sm font-medium transition-all shadow-xs active:scale-95 touch-manipulation"
              >
                <span>Contact us</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
