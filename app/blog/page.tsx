"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { BLOG_POSTS } from "@/data/siteData";

export default function BlogPage() {
  const featured = BLOG_POSTS[0];
  const others = BLOG_POSTS.slice(1);

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-[#0070f3] selection:text-white">
      <Navbar />

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container text-center">
          <ScrollReveal delay={0.05} y={16}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/[0.08] bg-white text-xs font-semibold text-[#0070f3] mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Articles & Insights</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} y={20}>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900">
              Insights & Engineering
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.25} y={20}>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-xl mx-auto font-light leading-relaxed">
              Ideas, architectural lessons, and technical essays from the StratoTechCorp product engineering team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FEATURED POST ───────────────────────────────────────────── */}
      {featured && (
        <section className="py-16 sm:py-20 border-b border-black/[0.08]">
          <div className="page-container">
            <ScrollReveal y={20}>
              <div className="group rounded-2xl sm:rounded-3xl border border-black/[0.08] bg-white overflow-hidden shadow-xs hover:border-[#0070f3]/40 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 p-2.5 sm:p-3">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-video rounded-xl sm:rounded-2xl bg-zinc-950 overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-[#0070f3] border border-black/10 font-semibold shadow-xs">
                      Featured Essay
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-4 sm:p-6 lg:p-8 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 font-mono text-xs text-[#0070f3] font-semibold mb-2">
                        <span>{featured.category}</span>
                        <span>·</span>
                        <span className="text-zinc-500 font-normal">{featured.readTime}</span>
                      </div>

                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 group-hover:text-[#0070f3] transition-colors leading-tight">
                        {featured.title}
                      </h2>

                      <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed font-light line-clamp-3">
                        {featured.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-black/[0.06] flex justify-end">
                      <Link
                        href={`/blog/${featured.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0070f3] hover:text-[#005bb5] transition-colors group"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── ALL ARTICLES ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {others.map((post, idx) => (
              <ScrollReveal key={post.slug} delay={idx * 0.08} y={20}>
                <div className="group rounded-2xl sm:rounded-3xl border border-black/[0.08] bg-white overflow-hidden shadow-xs hover:border-[#0070f3]/40 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full p-2.5 sm:p-3">
                  <div>
                    <div className="relative aspect-[16/10] rounded-xl sm:rounded-2xl bg-zinc-950 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold text-[#0070f3] border border-black/10 shadow-xs">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 space-y-2.5">
                      <div className="font-mono text-[10px] text-zinc-500">
                        {post.publishDate} · {post.readTime}
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-[#0070f3] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs text-zinc-600 line-clamp-2 font-light leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Minimalist Right-aligned Link */}
                  <div className="p-4 sm:p-5 pt-0 flex justify-end">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0070f3] hover:text-[#005bb5] transition-colors group"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
