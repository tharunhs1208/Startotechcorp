"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "We've worked with StratoTech for 5 years. Their digital engineering expertise has consistently driven awareness, interest, and leads.",
    author: "Adrian Lambert",
    company: "Blackbird",
  },
  {
    quote: "Absolutely fantastic team to work with! Their technical depth and voice AI execution delivered seamless scale for our operations.",
    author: "Atem Eyong",
    company: "Hard Rock Cafe",
  },
  {
    quote: "The quality was excellent, and communication throughout was clear and professional. I highly recommend StratoTech.",
    author: "Abbie Booth",
    company: "Istobal",
  },
  {
    quote: "Exceptional design and engineering execution. Delivered our multi-platform digital launch with zero downtime and sub-200ms speed.",
    author: "Elena Rostova",
    company: "Vanguard Tech",
  },
  {
    quote: "A true strategic partner who understands high-conversion UX, modern web architecture, and enterprise AI systems.",
    author: "Samantha Reed",
    company: "Aura Capital",
  },
  {
    quote: "We're thrilled with the technical implementations! It's exciting to see our targeted metrics breaking records quarter after quarter.",
    author: "Chris Cheadle",
    company: "Northern Dough Co",
  },
];

export default function ServiceConsultationCard() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const currentTestimonial = TESTIMONIALS[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || "callback-request@client.com",
          source: "Quick Call Back Widget (Services Page)",
          message: `Request Call Back submitted from Services section.\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || "N/A"}`,
        }),
      });
    } catch {
      // ignore
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-10 sm:py-16">
      <div className="w-full bg-white rounded-xl p-6 sm:p-10 lg:p-12 border border-black/[0.08] shadow-sm">
        
        {/* 2 Main Columns: Left (Narrative + Testimonial) | Right (Image + Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          
          {/* ══════════════ LEFT COLUMN ══════════════ */}
          <div className="flex flex-col justify-between h-full space-y-10 sm:space-y-12">
            
            {/* Top Narrative */}
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-black shrink-0 mt-2.5" />
                <h2 className="font-display text-2xl sm:text-3xl lg:text-[32px] font-bold text-black tracking-tight leading-snug">
                  Why your business needs more than a website that looks nice
                </h2>
              </div>

              <p className="text-[14px] sm:text-[15px] text-[#444444] font-normal leading-relaxed">
                Today&apos;s websites aren&apos;t just static brochures that simply exist online. Customers expect intuitive experiences where they can take action in just a few clicks without even thinking about it. A visually impressive website won&apos;t achieve the necessary commercial goals if it lacks structure or isn&apos;t set up to perform well on all devices. StratoTech&apos;s web design and engineering services balance aesthetics with commercial performance so that every build reflects your brand visually but also ensures your site functions as a long-term business asset.
              </p>

              <div className="pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-[4px] bg-black text-[#82FFCD] font-semibold text-xs sm:text-sm hover:bg-zinc-800 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Bottom Testimonial with Mint Accent Bar */}
            <div className="space-y-5 pt-4">
              <div className="border-l-4 border-[#82FFCD] pl-5 sm:pl-6 space-y-3">
                <p className="text-base sm:text-lg lg:text-[18px] text-[#222222] font-normal leading-snug">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-[#444444] font-medium">
                  {currentTestimonial.author}: <strong className="text-black font-bold">{currentTestimonial.company}</strong>
                </p>
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center gap-3 pl-5 sm:pl-6">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-7 h-7 rounded-[4px] bg-[#82FFCD] hover:bg-[#68f5b8] flex items-center justify-center text-black font-bold text-xs active:scale-95 transition-all cursor-pointer"
                >
                  ←
                </button>
                <span className="text-xs font-mono font-medium text-zinc-600 select-none">
                  {activeIdx + 1}/{TESTIMONIALS.length}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-7 h-7 rounded-[4px] bg-[#82FFCD] hover:bg-[#68f5b8] flex items-center justify-center text-black font-bold text-xs active:scale-95 transition-all cursor-pointer"
                >
                  →
                </button>
              </div>
            </div>

          </div>

          {/* ══════════════ RIGHT COLUMN ══════════════ */}
          <div className="flex flex-col justify-between h-full space-y-6 sm:space-y-8">
            
            {/* Top Image: Explicit Height & Contained */}
            <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[280px] rounded-lg overflow-hidden bg-zinc-100 border border-black/[0.08] shadow-xs">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="StratoTech Team Collaboration"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover object-center"
              />
            </div>

            {/* Bottom Form: Clean Request Call Back Form */}
            <div className="w-full">
              {submitted ? (
                <div className="p-6 rounded-lg bg-[#f0f0f2] text-center space-y-2">
                  <span className="w-8 h-8 rounded-full bg-[#82FFCD] text-black font-bold text-sm inline-flex items-center justify-center">
                    ✓
                  </span>
                  <p className="text-sm font-bold text-black">Call Back Requested!</p>
                  <p className="text-xs text-zinc-600">Our engineering lead will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Name*"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-[4px] bg-[#f0f0f2] border border-transparent focus:border-black/30 focus:bg-white text-black placeholder:text-zinc-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone*"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-[4px] bg-[#f0f0f2] border border-transparent focus:border-black/30 focus:bg-white text-black placeholder:text-zinc-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-[4px] bg-[#f0f0f2] border border-transparent focus:border-black/30 focus:bg-white text-black placeholder:text-zinc-500 outline-none transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-7 py-3 rounded-[4px] bg-[#82FFCD] hover:bg-[#68f5b8] text-black font-semibold text-xs sm:text-sm transition-all cursor-pointer active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Request Call Back"}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
