"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/home/CTASection";
import { Sparkles, ArrowRight, Clock, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/data/siteData";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Technology", "AI", "Design", "Cloud"];

  const filteredPosts = selectedCategory === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  const featured = BLOG_POSTS[0];
  const restPosts = filteredPosts.filter((p) => p.slug !== featured.slug);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        
        {/* HERO */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Engineering &amp; Design Insights</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-6">
            Insights &amp; Resources
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-8">
            Perspectives, architectural patterns, and technology blueprints from our principal engineers and design leads.
          </p>

          {/* FILTER TABS */}
          <div className="flex flex-wrap items-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED ARTICLE BANNER */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
          <div className="card-blueprint overflow-hidden grid grid-cols-1 lg:grid-cols-12 group">
            <div className="lg:col-span-7 h-72 lg:h-[420px] overflow-hidden bg-slate-950">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {featured.category}
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs text-slate-500 font-mono">{featured.readTime}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                  {featured.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featured.author.avatar}
                    alt={featured.author.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-950">{featured.author.name}</div>
                    <div className="text-[10px] text-slate-500">{featured.publishDate}</div>
                  </div>
                </div>

                <Link
                  href={`/blog/${featured.slug}`}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* LATEST ARTICLES 3-COLUMN GRID */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
              Latest Insights
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 uppercase tracking-tight">
              Recent Publications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restPosts.map((post) => (
              <div
                key={post.slug}
                className="card-blueprint overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 w-full overflow-hidden bg-slate-950">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs text-slate-500 font-mono">{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-950 mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                  <span className="text-[11px] text-slate-400 font-medium">{post.publishDate}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Read →</span>
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
