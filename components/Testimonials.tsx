"use client";

import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Marcus Vance",
      role: "Chief Technology Officer",
      company: "Nexus Financial Holdings",
      productUsed: "Zobay + StartOne",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
      quote:
        "Connecting Zobay voice intake to StartOne automated pipelines and LegalX compliance is the closest thing to running an autonomous enterprise. We scaled from 12 to 40 entities without doubling administrative overhead.",
      metric: "$2.4M saved in operational overhead",
      avatar: "DC",
      avatarBg: "bg-emerald-600",
    },
  ];

  return (
    <section id="testimonials-section" className="py-20 md:py-32 relative z-20 bg-white border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-[120px]">
        {/* Header - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-left max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Quote className="w-3.5 h-3.5 text-emerald-600" /> Enterprise Verification
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 text-left">
            Validated by Industry Leaders
          </h2>
          <p className="text-base sm:text-lg text-slate-600 text-left">
            Discover how leading organizations drive quantifiable business growth with StartoTech's suite.
          </p>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 hover:border-slate-300 hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl relative group cursor-pointer text-left"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author & Product */}
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-slate-200 shadow-sm"
                    />
                  ) : (
                    <div className={`w-11 h-11 rounded-full ${t.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-sm`}>
                      {t.avatar}
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}, {t.company}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-2">
                  <span className="text-slate-600 font-semibold">{t.productUsed}</span>
                  <span className="text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                    {t.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
