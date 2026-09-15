"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight, Sparkles } from "lucide-react";
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
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-[#0070f3] selection:text-white">
      <Navbar />

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/[0.08] bg-white text-xs font-semibold text-[#0070f3] mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Common Questions</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-xl mx-auto font-light leading-relaxed">
              Everything you need to know about working with StratoTechCorp.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ACCORDION LIST ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[860px] mx-auto px-4 sm:px-8">
          <div className="divide-y divide-black/[0.08]">
            {FAQS.map((faq, i) => {
              const isOpen = openIdx === i;
              return (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="py-6">
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-6 text-left group cursor-pointer"
                    >
                      <span className="font-display text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-[#0070f3] transition-colors">
                        {faq.q}
                      </span>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-black/15 text-zinc-700 group-hover:border-[#0070f3] group-hover:text-[#0070f3] transition-colors">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-4 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed pr-8">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08] bg-[#f8fafc]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
              Still have questions?
            </h2>
            <p className="mt-4 text-sm text-zinc-600 font-light">
              We are always happy to discuss technical architectures and scope.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-pill btn-accent-c text-xs sm:text-sm font-semibold px-8 py-3.5"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
