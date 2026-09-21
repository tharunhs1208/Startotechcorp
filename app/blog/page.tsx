"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import TextMaskReveal from "@/components/TextMaskReveal";
import { BLOG_POSTS } from "@/data/siteData";

import ScrollCardTransition from "@/components/ScrollCardTransition";

export default function BlogPage() {
  const featured = BLOG_POSTS[0];
  const others = BLOG_POSTS.slice(1);

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-12 sm:pb-20">
        {/* ── 1. EDITORIAL HEADER ────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-12 sm:pb-16 border-b border-black/[0.08]">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: "Blog" }]} />
          </div>

          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 font-semibold">
              ESSAYS &amp; NOTES
            </span>
            <TextMaskReveal
              text="Insights & Engineering"
              as="h1"
              once={false}
              className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-[#1d1d1f] mb-4"
            />
            <p className="mt-3 text-base sm:text-lg text-[#6e6e73] font-normal leading-relaxed">
              Architectural lessons, interface design standards, and engineering notes from our product teams in Bengaluru.
            </p>
          </div>
        </section>

        {/* ── 2. FEATURED ESSAY (Large Feature Card) ────────────────── */}
        {featured && (
          <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-10 sm:py-14 border-b border-black/[0.08]">
            <ScrollCardTransition>
              <article className="group bg-white border border-black/[0.08] rounded-xl overflow-hidden hover:border-black/30 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[360px] items-stretch">
                  <div className="lg:col-span-7 p-7 sm:p-9 lg:p-11 flex flex-col justify-between order-2 lg:order-1">
                    <div>
                      <div className="flex items-center gap-2 text-[12px] font-mono text-[#86868b] mb-4 uppercase tracking-wider">
                        <span className="font-semibold text-[#111]">Featured Essay</span>
                        <span>·</span>
                        <span>{featured.category}</span>
                        <span>·</span>
                        <span>{featured.readTime}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-semibold text-[#111111] tracking-[-0.03em] leading-tight mb-3">
                        <Link href={`/blog/${featured.slug}`} className="hover:text-black transition-colors">
                          {featured.title}
                        </Link>
                      </h2>

                      <p className="text-[15px] sm:text-[16px] text-zinc-600 leading-relaxed font-normal mb-6">
                        {featured.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-black/[0.06]">
                      <div className="flex items-center gap-2.5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={featured.author.avatar}
                          alt={featured.author.name}
                          className="w-6 h-6 rounded-full object-cover border border-black/10"
                        />
                        <span className="text-[12px] font-medium text-[#1d1d1f]">{featured.author.name}</span>
                      </div>

                      <Link
                        href={`/blog/${featured.slug}`}
                        className="inline-flex items-center gap-2 text-[14px] font-medium text-[#111111] hover:text-black group/cta transition-colors"
                      >
                        <span>Read essay</span>
                        <span className="transition-transform duration-300 ease-out group-hover/cta:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-zinc-100 border-b lg:border-b-0 lg:border-l border-black/[0.06] relative flex items-stretch overflow-hidden min-h-[260px] sm:min-h-[320px] order-1 lg:order-2">
                    <Link
                      href={`/blog/${featured.slug}`}
                      className="block w-full h-full relative group/img overflow-hidden"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.03]"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollCardTransition>
          </section>
        )}

        {/* ── 3. PUBLICATION ARCHIVE (Supporting Editorial Cards) ────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-10 sm:pt-14">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-black/[0.08]">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase font-semibold">
              ALL ARTICLES &amp; RESEARCH
            </span>
            <span className="text-[12px] font-mono text-[#86868b]">
              {others.length} Articles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {others.map((post, pIdx) => (
              <ScrollCardTransition key={post.slug} index={pIdx}>
                <article className="group bg-white border border-black/[0.08] rounded-xl overflow-hidden hover:border-black/30 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Visual Focus on Top */}
                    <div className="aspect-[16/10] bg-zinc-100 overflow-hidden border-b border-black/[0.06]">
                      <Link href={`/blog/${post.slug}`} className="block w-full h-full overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                        />
                      </Link>
                    </div>

                    {/* Editorial Body */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center gap-2 text-[12px] font-mono text-[#86868b] mb-3 uppercase tracking-wider">
                        <span className="font-semibold text-[#111]">{post.category}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-sans font-semibold text-[#111111] tracking-[-0.02em] leading-snug mb-2.5">
                        <Link href={`/blog/${post.slug}`} className="hover:text-black transition-colors">
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-[14px] text-zinc-600 leading-relaxed font-normal line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Divider + Author & Link */}
                  <div className="px-6 sm:p-7 pb-6 pt-3 border-t border-black/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-5 h-5 rounded-full object-cover border border-black/10"
                      />
                      <span className="text-[11px] font-mono text-[#6e6e73]">{post.author.name}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111111] hover:text-black group/cta transition-colors"
                    >
                      <span>Read</span>
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
