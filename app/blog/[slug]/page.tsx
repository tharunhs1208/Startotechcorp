"use client";

import React, { useLayoutEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/cinematic/Reveal";
import CTASection from "@/components/cinematic/CTASection";
import { gsap } from "@/lib/gsap";
import { ArrowLeft, ArrowUpRight, Clock, CalendarDays } from "lucide-react";
import { BLOG_POSTS } from "@/data/siteData";

// ── Fallback sample data (used if BLOG_POSTS is empty) ──────────────────────
const SAMPLE_POSTS = [
  {
    slug: "future-of-ai",
    title: "The Future of AI in Business",
    category: "AI",
    readTime: "6 min read",
    publishDate: "2025-01-15",
    excerpt:
      "How intelligent systems are reshaping modern business operations and creating entirely new categories of competitive advantage.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&auto=format&fit=crop",
    tags: ["AI", "Business", "Automation"],
    author: {
      name: "Dr. Vikram Sethi",
      role: "Chief Technology Officer",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    content: [
      "The narrative around artificial intelligence has shifted dramatically over the past eighteen months. Where businesses previously experimented with generic chatbots, modern enterprises are now deploying mission-critical autonomous agents capable of independent multi-step execution.",
      "At FortuneTech Corp, we observe three definitive pillars defining the new enterprise AI architecture: cognitive latency elimination, deterministic safety guardrails, and air-gapped data sovereignty.",
      "Sub-300ms Conversational Latency: Human conversations occur with an average turn-taking delay of 250 to 300 milliseconds. When AI systems exceed this threshold, the interaction feels robotic and frustrating. By bypassing text intermediaries and streaming audio directly through spectrogram models, systems achieve natural conversational cadence.",
      "Private Enterprise RAG: Generic LLMs lack private business context and are prone to hallucinations. Enterprise Retrieval-Augmented Generation connects proprietary knowledge bases with semantic vector embeddings, ensuring every response is grounded in verifiable company data with zero data leakage.",
      "The companies adopting these autonomous layers today are cutting operational overhead by up to 64% while delivering instant, 24/7 service to their global customers.",
    ],
  },
  {
    slug: "web-performance",
    title: "Web Performance in 2025",
    category: "Technology",
    readTime: "5 min read",
    publishDate: "2025-01-10",
    excerpt: "Core Web Vitals, edge computing, and the future of fast websites that convert.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1400&auto=format&fit=crop",
    tags: ["Web", "Performance", "Next.js"],
    author: {
      name: "Rahul Verma",
      role: "Principal Systems Architect",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    content: [
      "In the modern web economy, every 100 milliseconds of latency translates to a measurable drop in conversion rate. Traditional single-page applications often ship heavy JavaScript bundles that delay first contentful paint on mobile devices.",
      "With Next.js App Router and Turbopack, React Server Components render directly on edge servers, sending zero client-side JavaScript for static content.",
      "By combining streaming HTML with selective client hydration, our applications render critical above-the-fold content in under 400 milliseconds, achieving 99+ Lighthouse scores consistently.",
    ],
  },
  {
    slug: "design-systems",
    title: "Building Scalable Design Systems",
    category: "Design",
    readTime: "7 min read",
    publishDate: "2025-01-05",
    excerpt:
      "How to build design tokens and component libraries that scale across enterprise teams.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1400&auto=format&fit=crop",
    tags: ["Design", "Figma", "Tailwind CSS"],
    author: {
      name: "Aanya Sharma",
      role: "Head of Product Design",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    },
    content: [
      "One of the greatest sources of friction in digital product development is the handoff between design and engineering. Disconnected color codes, arbitrary spacing values, and inconsistent component variations slow down releases.",
      "Establishing a unified design token system resolves this permanently. In Figma, we define design variables for colors, typography scales, spacing, border radiuses, and elevation shadows.",
      "These tokens map 1:1 into Tailwind CSS utility classes and TypeScript theme interfaces, creating a shared vocabulary between designers and frontend engineers.",
    ],
  },
];

const allPosts =
  BLOG_POSTS && BLOG_POSTS.length > 0 ? BLOG_POSTS : SAMPLE_POSTS;

// ── Helpers ─────────────────────────────────────────────────────────────────
function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

// ── Component ────────────────────────────────────────────────────────────────
export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // Find the post; fall back to the first post if slug not matched
  const post =
    allPosts.find((p) => p.slug === slug) ?? allPosts[0];

  const related = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);

  // Hero parallax
  useLayoutEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const img = el.querySelector(".hero-img") as HTMLElement | null;
    if (!img) return;
    const ctx = gsap.context(() => {
      gsap.to(img, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);
    return () => ctx.revert();
  }, [post.slug]);

  // Content paragraphs stagger
  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll(".prose-p"),
        { opacity: 0, y: 30 },
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
  }, [post.slug]);

  const content: string[] =
    post.content && post.content.length > 0
      ? post.content
      : [post.excerpt, post.excerpt, post.excerpt];

  return (
    <main className="min-h-screen bg-[#050505] text-[#f2f2ec]">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] flex items-end overflow-hidden"
      >
        {/* Parallax image */}
        <div className="hero-img absolute inset-0 scale-110">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-20 pb-20">
          {/* Breadcrumb */}
          <Reveal delay={0.0}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/40 hover:text-[#b7ff4a] transition-colors text-xs font-bold uppercase tracking-wider mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </Reveal>

          {/* Category */}
          <Reveal delay={0.1}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#b7ff4a] text-[#050505] text-[10px] font-black uppercase tracking-widest mb-5">
              {post.category}
            </span>
          </Reveal>

          {/* Title */}
          <Reveal delay={0.2}>
            <h1
              className="font-black uppercase text-[#f2f2ec] leading-none max-w-4xl"
              style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
            >
              {post.title}
            </h1>
          </Reveal>

          {/* Meta row */}
          <Reveal delay={0.32}>
            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-white/50">
              {post.author && (
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-9 h-9 rounded-full object-cover ring-1 ring-white/20"
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
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#b7ff4a]" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="w-3.5 h-3.5 text-[#b7ff4a]" />
                {formatDate(post.publishDate)}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ARTICLE CONTENT ──────────────────────────────────── */}
      <section ref={contentRef} className="py-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          {/* Lead / excerpt */}
          <p className="prose-p opacity-0 text-lg sm:text-xl text-white/80 leading-relaxed font-medium mb-10 pb-10 border-b border-white/10">
            {post.excerpt}
          </p>

          {/* Body paragraphs */}
          <div className="space-y-7">
            {content.map((paragraph, i) => (
              <p
                key={i}
                className="prose-p opacity-0 text-base sm:text-lg text-white/60 leading-[1.85] tracking-[0.01em]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-14 pt-10 border-t border-white/10 flex flex-wrap items-center gap-2">
              <span className="eyebrow text-white/30 mr-2">Tagged:</span>
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full border border-white/15 text-white/50 text-[11px] font-mono hover:border-[#b7ff4a] hover:text-[#b7ff4a] transition-colors cursor-default"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Author card */}
          {post.author && (
            <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-white/[0.03] flex items-start gap-6">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-[#b7ff4a]/30 flex-shrink-0"
              />
              <div>
                <div className="eyebrow text-[#b7ff4a] mb-1">Written by</div>
                <div className="font-black text-lg text-[#f2f2ec] uppercase">
                  {post.author.name}
                </div>
                <div className="text-sm text-white/50 mt-0.5">{post.author.role}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── RELATED ARTICLES ─────────────────────────────────── */}
      {related.length > 0 && (
        <section className="border-t border-white/10 py-24 bg-[#0a0a0a]">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-20">
            <Reveal delay={0.05}>
              <div className="mb-14">
                <div className="eyebrow text-[#b7ff4a] mb-3">Continue Reading</div>
                <h2
                  className="font-black uppercase text-[#f2f2ec] leading-tight"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
                >
                  Related Articles
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {related.map((rel, i) => (
                <Reveal key={rel.slug} delay={i * 0.1}>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="group block"
                  >
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden rounded-2xl mb-5">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-[#050505]/30 group-hover:bg-[#050505]/10 transition-colors duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-[#b7ff4a] text-[#050505] text-[10px] font-black uppercase tracking-wider">
                          {rel.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-[#050505]/70 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#b7ff4a]" />
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="eyebrow mb-2 text-white/40">
                      {rel.readTime} ·{" "}
                      {(() => {
                        try {
                          return new Date(rel.publishDate).toLocaleDateString(
                            "en-US",
                            { month: "short", year: "numeric" }
                          );
                        } catch {
                          return rel.publishDate;
                        }
                      })()}
                    </div>

                    {/* Title */}
                    <h3
                      className="font-black uppercase text-[#f2f2ec] group-hover:text-[#b7ff4a] transition-colors duration-300 mb-2 leading-tight"
                      style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.35rem)" }}
                    >
                      {rel.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-white/45 leading-relaxed line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CTASection
        title="Let's build something remarkable together."
        actionLabel="Start a Project"
        href="/contact"
        video="/videos/hero-pinterest.mp4"
      />

      <Footer />
    </main>
  );
}
