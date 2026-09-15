"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoLayer from "@/components/cinematic/VideoLayer";
import Reveal from "@/components/cinematic/Reveal";
import CTASection from "@/components/cinematic/CTASection";
import { Plus } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { FAQ_DATA } from "@/data/siteData";

/* ---------- Inline fallback FAQs (used if FAQ_DATA is empty/unavailable) ---------- */
const FALLBACK_FAQS = [
  {
    question: "What does your company do?",
    answer:
      "We design, build, and ship digital products — web apps, mobile apps, AI systems, and cloud platforms for companies that want to grow fast.",
  },
  {
    question: "How do you start a project?",
    answer:
      "We start with a discovery call to understand your goals, then create a technical brief, timeline, and fixed-scope proposal within 3 business days.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Projects typically range from $5k for landing pages to $100k+ for enterprise platforms. We provide transparent, itemised quotes with no hidden costs.",
  },
  {
    question: "How long does development take?",
    answer:
      "Simple projects take 4–6 weeks. Complex platforms take 3–6 months. We work in 2-week sprints with regular client updates and demo sessions.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with clients globally and are experienced with remote collaboration across time zones, using async-first communication tools.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We offer SLA-backed maintenance packages covering monitoring, updates, bug fixes, and ongoing feature development.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Next.js, React, TypeScript, Node.js, Python, React Native, Flutter, AWS, GCP, and more — always chosen to fit your specific product needs.",
  },
  {
    question: "Can you work with our existing codebase?",
    answer:
      "Absolutely. We regularly audit and improve legacy systems, and can integrate seamlessly within your existing tech stack and workflows.",
  },
];

/* Normalise FAQ_DATA (it has a `question` and `answer` field) */
const FAQS =
  Array.isArray(FAQ_DATA) && FAQ_DATA.length > 0
    ? FAQ_DATA.map((f) => ({ question: f.question, answer: f.answer }))
    : FALLBACK_FAQS;

/* ---------- Single accordion item ---------- */
function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    if (isOpen) {
      gsap.fromTo(el, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.4, ease: "power3.out" });
    } else {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full py-6 sm:py-8 flex items-start justify-between gap-4 sm:gap-6 text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="text-[#b7ff4a] font-mono text-base sm:text-lg shrink-0 mt-1">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="display-lg text-lg sm:text-2xl lg:text-3xl text-white/70 group-hover:text-white transition-colors duration-300">
            {faq.question}
          </span>
        </div>
        <span
          className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "border-[#b7ff4a] bg-[#b7ff4a] text-[#050505] rotate-45"
              : "border-white/20 text-white/50 group-hover:border-white/50"
          }`}
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
      </button>

      {/* Animated body — always rendered, height animated via GSAP */}
      <div ref={bodyRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <div className="pb-8 sm:pb-10 pl-0 sm:pl-[3.25rem]">
          <p className="text-white/60 text-xs sm:text-base leading-relaxed max-w-3xl">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */
export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  /* Stagger-reveal the rows on scroll */
  useLayoutEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll(".faq-row"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  const handleToggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <main className="min-h-screen bg-[#050505] text-[#f2f2ec]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative flex min-h-[50vh] sm:min-h-[60vh] items-center justify-center overflow-hidden">
        <VideoLayer src="/videos/legalx.mp4" overlay="scrim-center" />
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pt-20">
          <Reveal delay={0.1}>
            <div className="eyebrow mb-6 sm:mb-8">FAQ</div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="display-xl text-4xl sm:text-6xl md:text-7xl lg:text-[7vw] leading-none break-words">
              QUESTIONS?
              <br />
              <span className="text-outline">WE HAVE</span>
              <br />
              ANSWERS.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── INTRO LINE ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 pt-16 sm:pt-24 pb-6">
        <Reveal delay={0.1}>
          <p className="text-white/40 text-xs sm:text-base max-w-lg">
            Everything you need to know about working with us — from kicking off a project to shipping and beyond.
          </p>
        </Reveal>
      </section>

      {/* ── ACCORDION LIST ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 py-8 sm:py-12">
        <div ref={listRef} className="border-t border-white/10">
          {FAQS.map((faq, i) => (
            <div key={i} className="faq-row">
              <FaqItem
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title={"STILL HAVE\nQUESTIONS?"}
        actionLabel="Talk to Us"
        href="/contact"
        video="/videos/baseone.mp4"
      />

      <Footer />
    </main>
  );
}
