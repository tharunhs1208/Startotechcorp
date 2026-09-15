"use client";

import React from "react";
import { Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { TESTIMONIALS_DATA } from "@/data/siteData";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50/60 border-b border-slate-200/80 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-4">
            What Executive Leaders Say About Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Real feedback from VP of Engineering, CTOs, and COOs who have transformed their operations with our software.
          </p>
        </motion.div>

        {/* 2-COLUMN TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card-blueprint p-8 sm:p-10 flex flex-col justify-between text-left relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* 5 STARS & METRIC PILL */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full font-mono">
                    {t.metric}
                  </span>
                </div>

                {/* QUOTE */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* AUTHOR INFO */}
              <div className="pt-6 border-t border-slate-100 flex items-center gap-4 mt-6">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="font-bold text-slate-950 text-sm">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.role}, <strong className="text-slate-700">{t.company}</strong></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
