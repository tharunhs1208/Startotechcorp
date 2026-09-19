"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextMaskReveal from "@/components/TextMaskReveal";

const FAQS = [
  {
    q: "What does StratoTechCorp do?",
    a: "We design and build bespoke digital products, intelligent AI voice/software systems, and scalable cloud architectures for fast-growing companies and enterprises.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "Our core stack includes React, Next.js, TypeScript, Node.js, Python, PyTorch/OpenAI LLM models, PostgreSQL, Redis, Docker, and AWS edge infrastructure.",
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
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-12 sm:pb-20">
        {/* ── 1. HEADER ────────────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-12 sm:pb-16 border-b border-black/[0.08]">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 font-semibold">
              QUESTIONS &amp; ANSWERS
            </span>
            <TextMaskReveal
              text="Frequently Asked Questions"
              as="h1"
              once={false}
              className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-[#1d1d1f] mb-4"
            />
            <p className="mt-3 text-base sm:text-lg text-[#6e6e73] font-normal leading-relaxed">
              Common questions regarding engineering scopes, sprint delivery, SLAs, and technical kickoff.
            </p>
          </div>
        </section>

        {/* ── 2. ACCORDION LIST ────────────────────────────────────────── */}
        <section className="max-w-[1024px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
          <div className="border-t border-black/[0.08] divide-y divide-black/[0.08]">
            {FAQS.map((faq, i) => {
              const isOpen = openIdx === i;
              return (
                <div key={i} className="py-6 sm:py-8 transition-colors group">
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-6 text-left cursor-pointer select-none"
                  >
                    <div className="flex items-start gap-4 pr-2">
                      <span className="shrink-0 font-mono text-[13px] text-[#86868b] pt-1">
                        0{i + 1}
                      </span>
                      <h2
                        className={`font-display text-lg sm:text-2xl font-medium tracking-tight transition-colors duration-200 ${
                          isOpen ? "text-[#1d1d1f]" : "text-[#1d1d1f] group-hover:text-black"
                        }`}
                      >
                        {faq.q}
                      </h2>
                    </div>

                    <span
                      className={`shrink-0 grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 text-[#1d1d1f] bg-black/[0.06]"
                          : "text-[#86868b] group-hover:text-[#1d1d1f] group-hover:bg-black/[0.04]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 transition-transform" />
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
                        <div className="pt-4 pl-9 sm:pl-10 pr-4 sm:pr-8 text-[15px] sm:text-[16px] text-[#6e6e73] font-normal leading-relaxed">
                          <p>{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 3. CTA ──────────────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-12 sm:pt-16">
          <div className="border-t border-black/[0.08] pt-12 sm:pt-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-4xl font-display font-medium tracking-tight text-[#1d1d1f]">
                Still have questions?
              </h3>
              <p className="mt-2 text-[15px] text-[#6e6e73] font-normal leading-relaxed">
                We are always happy to discuss technical architectures, SLAs, and kickoff timelines.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1d1d1f] text-white hover:bg-black text-[14px] font-medium transition-colors"
              >
                <span>Contact us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
