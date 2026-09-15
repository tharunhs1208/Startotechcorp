"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/home/CTASection";
import { Sparkles, ArrowRight, ChevronRight, Clock, Calendar, Share2 } from "lucide-react";
import { BLOG_POSTS } from "@/data/siteData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        
        {/* BREADCRUMBS & ARTICLE HEADER */}
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 mb-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 truncate max-w-xs">{post.title}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{post.category} Insights</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* AUTHOR & DATE BAR */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-slate-200"
              />
              <div>
                <div className="font-bold text-slate-950 text-sm">{post.author.name}</div>
                <div className="text-slate-500">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {post.publishDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl h-[320px] sm:h-[480px]">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* ARTICLE CONTENT */}
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
          <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed font-normal">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-base sm:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* TAGS */}
          <div className="pt-10 mt-10 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Tags:</span>
            {post.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* RELATED ARTICLES */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1 block">
              Continue Reading
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-950 uppercase tracking-tight">
              Related Articles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((rel) => (
              <div key={rel.slug} className="card-blueprint p-6 flex flex-col justify-between">
                <div>
                  <img src={rel.image} alt={rel.title} className="w-full h-48 rounded-xl object-cover mb-4" />
                  <span className="text-[10px] font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {rel.category}
                  </span>
                  <h4 className="text-xl font-bold text-slate-950 mt-2 mb-2">{rel.title}</h4>
                  <p className="text-xs text-slate-600 line-clamp-2">{rel.excerpt}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">{rel.readTime}</span>
                  <Link href={`/blog/${rel.slug}`} className="text-xs font-bold text-blue-600 flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
