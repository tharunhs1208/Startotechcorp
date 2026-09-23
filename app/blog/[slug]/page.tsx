"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS } from "@/data/siteData";

import ScrollCardTransition from "@/components/ScrollCardTransition";

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
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-12 sm:pb-20">
        {/* Brand Logo at the starting */}
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 mb-4 sm:mb-6">
          <Link
            href="/"
            className="inline-block font-display text-2xl sm:text-3xl font-black tracking-[-0.04em] text-[#111111] hover:opacity-85 transition-opacity"
          >
            STRATOTECH
          </Link>
        </div>

        {/* ── 1. HEADER ────────────────────────────────────────────────── */}
        <article className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-10 border-b border-black/[0.08]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Breadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] hover:text-[#1d1d1f] transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>All Articles</span>
            </Link>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[11px] font-mono text-[#6e6e73] mb-4 uppercase tracking-wider">
              <span className="font-semibold text-[#111]">{post.category}</span>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span>{post.publishDate}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#1d1d1f] leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#6e6e73] font-normal leading-relaxed">
              {post.excerpt}
            </p>

            <div className="mt-8 pt-6 border-t border-black/[0.08] flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover border border-black/10"
              />
              <div>
                <div className="text-[13px] font-medium text-[#1d1d1f]">
                  {post.author.name}
                </div>
                <div className="text-[11px] text-[#86868b] font-mono">{post.author.role}</div>
              </div>
            </div>
          </div>
        </article>

        {/* ── 2. COVER IMAGE ───────────────────────────────────────────── */}
        <section className="max-w-[1024px] mx-auto px-5 sm:px-8 py-10 sm:py-14">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-black/[0.08] bg-[#e5e5ea] shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* ── 3. ARTICLE CONTENT ───────────────────────────────────────── */}
        <section className="max-w-[760px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24">
          <div className="space-y-6 text-[16px] sm:text-[17px] text-[#27272a] font-normal leading-relaxed">
            {post.content && post.content.length > 0 ? (
              post.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <div className="space-y-6">
                <p>
                  In today&apos;s digital ecosystem, engineering products that survive and scale requires a relentless focus on clean interfaces, modular codebases, and sub-millisecond execution.
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1d1d1f] pt-4">
                  The Architecture of Modern Systems
                </h2>
                <p>
                  From real-time state synchronization to distributed edge databases, building scalable digital platforms is as much about choosing what NOT to build as it is about writing clean code.
                </p>
                <p>
                  At StratoTechCorp, our approach to product engineering revolves around simplicity, performance, and extreme operational clarity.
                </p>
              </div>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="pt-10 border-t border-black/[0.08] flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md border border-black/[0.08] bg-white text-[11px] font-mono text-[#6e6e73]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── 4. RELATED ESSAYS ────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-12 sm:pt-16 border-t border-black/[0.08]">
          <div className="flex items-center justify-between pb-8 mb-8 border-b border-black/[0.08]">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1d1d1f]">
              Related Essays
            </h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              <span>View all insights</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {related.map((rel, rIdx) => (
              <ScrollCardTransition key={rel.slug} index={rIdx}>
                <article className="group bg-white border border-black/[0.08] rounded-xl overflow-hidden hover:border-black/30 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="aspect-[16/10] bg-zinc-100 overflow-hidden border-b border-black/[0.06]">
                      <Link href={`/blog/${rel.slug}`} className="block w-full h-full overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={rel.image}
                          alt={rel.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                        />
                      </Link>
                    </div>
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-2 text-[12px] font-mono text-[#86868b] mb-3 uppercase tracking-wider">
                        <span className="font-semibold text-[#111]">0{rIdx + 1}</span>
                        <span>·</span>
                        <span>{rel.category}</span>
                        <span>·</span>
                        <span>{rel.readTime}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-sans font-semibold text-[#111111] tracking-[-0.02em] group-hover:text-black transition-colors mb-2.5">
                        <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                      </h3>
                      <p className="text-[14px] text-zinc-600 line-clamp-2 leading-relaxed font-normal">
                        {rel.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 sm:px-8 pb-6 pt-3 border-t border-black/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={rel.author.avatar}
                        alt={rel.author.name}
                        className="w-5 h-5 rounded-full object-cover border border-black/10"
                      />
                      <span className="text-[11px] font-mono text-[#6e6e73]">{rel.author.name}</span>
                    </div>
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111111] hover:text-black group/cta transition-colors"
                    >
                      <span>Read essay</span>
                      <span className="transition-transform duration-300 ease-out group-hover/cta:translate-x-1">→</span>
                    </Link>
                  </div>
                </article>
              </ScrollCardTransition>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
