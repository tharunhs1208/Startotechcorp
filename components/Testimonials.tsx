"use client";

import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Marcus Vance",
      role: "Chief Technology Officer",
      company: "Nexus Financial Holdings",
      productUsed: "Zobay + StartOne",
      quote:
        "FortuneTechCorp replaced five disconnected legacy vendors with Zobay and StartOne. Our voice contact center resolved 88% of calls without human intervention while StartOne automated ledger reconciliations in real-time.",
      metric: "88% autonomous call resolution",
      avatar: "MV",
      avatarBg: "bg-purple-600",
    },
    {
      name: "Elena Rostova",
      role: "General Counsel & Partner",
      company: "Apex Global Law Group",
      productUsed: "LegalX Enterprise",
      quote:
        "LegalX has completely transformed our contract review cycles. Auditing a 40-page cross-border procurement contract used to take junior associates 8 hours. LegalX highlights risky indemnity clauses and generates accurate redlines in under 10 seconds.",
      metric: "12x faster contract execution",
      avatar: "ER",
      avatarBg: "bg-amber-600",
    },
    {
      name: "Devon Chen",
      role: "Head of Global Operations",
      company: "Starlight Logistics Network",
      productUsed: "Full Fortune Suite",
      quote:
        "Connecting Zobay voice intake to StartOne automated pipelines and LegalX compliance is the closest thing to running an autonomous enterprise. We scaled from 12 to 40 entities without doubling administrative overhead.",
      metric: "$2.4M saved in operational overhead",
      avatar: "DC",
      avatarBg: "bg-emerald-600",
    },
  ];

  return (
    <section id="testimonials-section" className="py-20 md:py-32 relative z-20 bg-[#0a0c13] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Quote className="w-3.5 h-3.5" /> Enterprise Verification
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Validated by Industry Leaders
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Discover how leading organizations drive quantifiable business growth with FortuneTechCorp's suite.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#12141d]/90 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-2xl relative group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-gray-300 italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Product */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full ${t.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-md`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}, {t.company}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-2">
                  <span className="text-indigo-400 font-semibold">{t.productUsed}</span>
                  <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {t.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
