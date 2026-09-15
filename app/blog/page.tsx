"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
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
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/[0.08] bg-white text-xs font-semibold text-[#0070f3] mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Articles & Insights</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900">
              Insights & Engineering
            </h1>
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
            <ScrollReveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block rounded-2xl border border-black/[0.08] bg-white overflow-hidden shadow-xs hover:border-black/20 hover:shadow-md transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[420px] bg-zinc-950 overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-[#0070f3] border border-black/10 font-semibold shadow-xs">
                      Featured Essay
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 font-mono text-xs text-[#0070f3] font-semibold mb-3">
                        <span>{featured.category}</span>
                        <span>·</span>
                        <span className="text-zinc-500 font-normal">{featured.readTime}</span>
                      </div>

                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 group-hover:text-[#0070f3] transition-colors leading-tight">
                        {featured.title}
                      </h2>

                      <p className="mt-4 text-xs sm:text-sm text-zinc-600 leading-relaxed font-light line-clamp-3">
                        {featured.excerpt}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-black/[0.08] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-900 group-hover:text-[#0070f3]">
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── ALL ARTICLES ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {others.map((post, idx) => (
              <ScrollReveal key={post.slug} delay={idx * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl border border-black/[0.08] bg-white overflow-hidden shadow-xs hover:border-black/20 hover:shadow-md transition-all flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold text-[#0070f3] border border-black/10 shadow-xs">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="font-mono text-[10px] text-zinc-500 mb-2">
                        {post.publishDate} · {post.readTime}
                      </div>
                      <h3 className="font-display text-lg font-bold text-zinc-900 group-hover:text-[#0070f3] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-xs text-zinc-600 line-clamp-2 font-light leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-zinc-600 group-hover:text-[#0070f3]">
                      <span>Read Article</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
