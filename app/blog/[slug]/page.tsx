"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { BLOG_POSTS } from "@/data/siteData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-[#0070f3] selection:text-white pb-10 sm:pb-16">
      <Navbar />

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <article className="pt-32 sm:pt-40 pb-12 sm:pb-16 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-8">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] hover:text-[#1d1d1f] transition-colors mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Insights</span>
            </Link>

            <div className="flex items-center gap-3 font-mono text-xs text-[#0070f3] mb-4">
              <span className="bg-[#0070f3]/10 px-2.5 py-1 rounded-full border border-[#0070f3]/20 font-semibold">
                {post.category}
              </span>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span className="text-zinc-500">{post.publishDate}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
              {post.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
              {post.excerpt}
            </p>

            <div className="mt-8 pt-6 border-t border-black/[0.08] flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-black/10"
              />
              <div>
                <div className="text-xs font-bold text-zinc-900">
                  {post.author.name}
                </div>
                <div className="text-[11px] text-zinc-500">{post.author.role}</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>

      {/* ── COVER IMAGE ─────────────────────────────────────────────── */}
      <section className="py-10 sm:py-16">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8">
          <ScrollReveal>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-black/[0.08] bg-[#f5f5f7] shadow-xs">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ARTICLE CONTENT ─────────────────────────────────────────── */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-[760px] mx-auto px-4 sm:px-8 space-y-6 text-sm sm:text-base text-zinc-700 font-light leading-relaxed">
          <ScrollReveal>
            {post.content && post.content.length > 0 ? (
              post.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))
            ) : (
              <div className="space-y-6">
                <p>
                  In today&apos;s fast-paced digital ecosystem, engineering products that survive and scale requires a relentless focus on clean interfaces, modular codebases, and sub-millisecond execution.
                </p>
                <h2 className="font-display text-2xl font-bold text-zinc-900 pt-6">
                  The Architecture of Modern Systems
                </h2>
                <p>
                  From real-time state synchronization to distributed edge databases, building scalable digital platforms is as much about choosing what NOT to build as it is about writing clean code.
                </p>
                <p>
                  At StratoTechCorp, our approach to product engineering revolves around simplicity, performance, and extreme user focus.
                </p>
              </div>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="pt-10 border-t border-black/[0.08] flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg border border-black/[0.08] bg-white text-xs font-mono text-zinc-600 shadow-2xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* ── RELATED ESSAYS ──────────────────────────────────────────── */}
      <section className="py-10 sm:py-16 border-t border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container">
          <ScrollReveal>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 mb-8">
              Related Insights
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((rel, idx) => (
              <ScrollReveal key={rel.slug} delay={idx * 0.1}>
                <Link
                  href={`/blog/${rel.slug}`}
                  className="group p-6 rounded-2xl border border-black/[0.08] bg-white hover:border-black/20 hover:shadow-md transition-all flex flex-col justify-between h-full shadow-xs"
                >
                  <div>
                    <div className="font-mono text-[10px] text-[#0070f3] font-semibold mb-1">
                      {rel.category} · {rel.readTime}
                    </div>
                    <h3 className="font-display text-lg font-bold text-zinc-900 group-hover:text-[#0070f3] transition-colors">
                      {rel.title}
                    </h3>
                    <p className="mt-2 text-xs text-zinc-600 line-clamp-2 font-light">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-semibold text-zinc-600 group-hover:text-[#0070f3]">
                    <span>Read Essay</span>
                    <ArrowRight className="w-4 h-4" />
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
