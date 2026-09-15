"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoLayer from "@/components/cinematic/VideoLayer";
import Reveal from "@/components/cinematic/Reveal";
import CTASection from "@/components/cinematic/CTASection";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { BLOG_POSTS } from "@/data/siteData";

const SAMPLE_POSTS = [
  {
    slug: "future-of-ai",
    title: "The Future of AI in Business",
    category: "AI",
    readTime: "6 min read",
    publishDate: "2025-01-15",
    excerpt: "How intelligent systems are reshaping modern business operations and creating entirely new categories of competitive advantage.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    tags: ["AI", "Business"],
    author: { name: "Dr. Vikram Sethi", role: "CTO", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" },
    content: [],
  },
  {
    slug: "web-performance",
    title: "Web Performance in 2025",
    category: "Technology",
    readTime: "5 min read",
    publishDate: "2025-01-10",
    excerpt: "Core Web Vitals, edge computing, and the future of fast websites that convert.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop",
    tags: ["Web", "Performance"],
    author: { name: "Rahul Verma", role: "Principal Architect", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
    content: [],
  },
  {
    slug: "design-systems",
    title: "Building Scalable Design Systems",
    category: "Design",
    readTime: "7 min read",
    publishDate: "2025-01-05",
    excerpt: "How to build design tokens and component libraries that scale across enterprise teams.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format&fit=crop",
    tags: ["Design", "Figma"],
    author: { name: "Aanya Sharma", role: "Head of Design", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop" },
    content: [],
  },
  {
    slug: "nextjs-2025",
    title: "Next.js App Router Deep Dive",
    category: "Development",
    readTime: "8 min read",
    publishDate: "2024-12-28",
    excerpt: "A comprehensive guide to Next.js 15 and the App Router architecture for high-performance apps.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
    tags: ["Next.js", "React"],
    author: { name: "Rahul Verma", role: "Principal Architect", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
    content: [],
  },
  {
    slug: "startup-tech-stack",
    title: "Choosing Your Startup Tech Stack",
    category: "Business",
    readTime: "5 min read",
    publishDate: "2024-12-20",
    excerpt: "The technology decisions that will make or break your startup's engineering velocity.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
    tags: ["Startup", "Technology"],
    author: { name: "Marcus Vance", role: "VP of Product", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
    content: [],
  },
  {
    slug: "cloud-architecture",
    title: "Modern Cloud Architecture Patterns",
    category: "Technology",
    readTime: "9 min read",
    publishDate: "2024-12-15",
    excerpt: "Serverless, edge, and hybrid cloud patterns for building scalable, resilient systems.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    tags: ["Cloud", "AWS"],
    author: { name: "Arthur Sterling", role: "VP of Cloud", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
    content: [],
  },
];

// Merge real data + sample data
const allPosts = BLOG_POSTS && BLOG_POSTS.length > 0 ? BLOG_POSTS : SAMPLE_POSTS;

const categories = ["All", "Technology", "AI", "Design", "Development", "Business", "Cloud"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const gridRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const featured = allPosts[0];
  const filteredPosts =
    activeCategory === "All"
      ? allPosts.filter((p) => p.slug !== featured.slug)
      : allPosts.filter(
          (p) => p.category === activeCategory && p.slug !== featured.slug
        );

  // GSAP scroll animations
  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        grid.querySelectorAll(".article-card"),
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
          },
        }
      );
    }, grid);
    return () => ctx.revert();
  }, [activeCategory]);

  useLayoutEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll(".stat-item"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-[#f2f2ec]">
      <Navbar />

      {/* ── HERO: FEATURED ARTICLE ─────────────────────────── */}
      <section className="relative flex min-h-[85vh] sm:min-h-[90vh] items-end overflow-hidden">
        <VideoLayer src="/videos/startone.mp4" overlay="scrim-bottom" />
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-20 pb-16 sm:pb-20">
          <Reveal delay={0.05}>
            <div className="eyebrow mb-3 sm:mb-4 text-[#b7ff4a] tracking-widest text-[10px] sm:text-xs">
              Featured Article
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h1
              className="display-xl font-black uppercase leading-none text-[#f2f2ec] text-3xl sm:text-5xl md:text-6xl lg:text-7xl break-words"
            >
              {featured.title}
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 sm:mt-5 text-white/60 text-xs sm:text-base max-w-xl leading-relaxed">
              {featured.excerpt}
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={`/blog/${featured.slug}`}
                className="btn-pill btn-accent-c inline-flex items-center gap-2"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="eyebrow text-white/40 text-[10px] sm:text-xs">
                {featured.readTime} · {featured.publishDate}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EDITORIAL STATS BAR ────────────────────────────── */}
      <div
        ref={statsRef}
        className="border-b border-white/10 bg-[#0a0a0a]"
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-20 py-6 sm:py-8 flex flex-wrap gap-6 sm:gap-20">
          {[
            { value: `${allPosts.length}+`, label: "Articles Published" },
            { value: "4", label: "Expert Topics" },
            { value: "10K+", label: "Monthly Readers" },
          ].map((stat) => (
            <div key={stat.label} className="stat-item opacity-0">
              <div className="text-xl sm:text-3xl font-black text-[#b7ff4a]">
                {stat.value}
              </div>
              <div className="eyebrow text-white/40 mt-1 text-[10px] sm:text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CATEGORY FILTER ────────────────────────────────── */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-20 py-12 sm:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <Reveal delay={0.05}>
            <div>
              <div className="eyebrow text-[#b7ff4a] mb-2">Browse By Topic</div>
              <h2
                className="display-lg font-black uppercase text-[#f2f2ec] text-2xl sm:text-4xl lg:text-5xl"
              >
                Latest Insights
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#b7ff4a] text-[#050505]"
                      : "border border-white/20 text-white/60 hover:border-[#b7ff4a] hover:text-[#b7ff4a]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── ARTICLES GRID ─────────────────────────────── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-14"
        >
          {filteredPosts.length === 0 ? (
            <div className="col-span-3 py-24 text-center text-white/40 eyebrow">
              No articles in this category yet.
            </div>
          ) : (
            filteredPosts.map((post) => (
              <article key={post.slug} className="article-card opacity-0 group flex flex-col">
                <Link href={`/blog/${post.slug}`} className="block">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden rounded-2xl mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-[#050505]/30 group-hover:bg-[#050505]/10 transition-colors duration-500" />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#b7ff4a] text-[#050505] text-[10px] font-black uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                    {/* Arrow icon */}
                    <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#050505]/70 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight className="w-4 h-4 text-[#b7ff4a]" />
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="eyebrow mb-3 text-white/40">
                    {post.readTime} ·{" "}
                    {(() => {
                      try {
                        return new Date(post.publishDate).toLocaleDateString(
                          "en-US",
                          { month: "short", year: "numeric" }
                        );
                      } catch {
                        return post.publishDate;
                      }
                    })()}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-black uppercase text-[#f2f2ec] group-hover:text-[#b7ff4a] transition-colors duration-300 mb-3 leading-tight"
                    style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)" }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-white/50 leading-relaxed line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                </Link>

                {/* Author row */}
                {post.author && (
                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#f2f2ec]">
                        {post.author.name}
                      </div>
                      <div className="text-[10px] text-white/40">
                        {post.author.role}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))
          )}
        </div>
      </section>

      {/* ── NEWSLETTER BAND ──────────────────────────────────── */}
      <section className="border-t border-white/10 py-24 bg-[#0a0a0a]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <Reveal delay={0.05}>
            <div>
              <div className="eyebrow text-[#b7ff4a] mb-3">Stay Ahead</div>
              <h2
                className="font-black uppercase text-[#f2f2ec] leading-tight"
                style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
              >
                Engineering &amp; AI insights,
                <br />
                <span className="text-outline">delivered monthly.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
            >
              <input
                type="email"
                placeholder="your@company.com"
                className="flex-1 bg-white/5 border border-white/15 rounded-full px-5 py-3 text-sm text-[#f2f2ec] placeholder-white/30 outline-none focus:border-[#b7ff4a] transition-colors"
              />
              <button
                type="submit"
                className="btn-pill btn-accent-c whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ── CTA SECTION ──────────────────────────────────────── */}
      <CTASection
        title="Ready to build something remarkable?"
        actionLabel="Start a Project"
        href="/contact"
        video="/videos/hero-pinterest.mp4"
      />

      <Footer />
    </main>
  );
}
