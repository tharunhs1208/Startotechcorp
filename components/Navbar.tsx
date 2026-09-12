"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowRight, Shield, Mic, LayoutGrid, ChevronDown } from "lucide-react";

import Link from "next/link";

interface NavbarProps {
  onOpenDemo: (product?: string) => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [technologiesDropdownOpen, setTechnologiesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0f]/40 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-3"
          : "bg-[#090a0f]/20 backdrop-blur-xl py-4 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Redstone-style Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer group select-none"
          >
            <span className="font-black text-2xl tracking-tighter text-white uppercase flex items-center">
              FORTUNE<span className="text-[#e70000]">TECH</span>
              <span className="w-2 h-2 rounded-full bg-[#e70000] ml-1 inline-block animate-pulse"></span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            {/* Products Mega Dropdown (Matching Redstone 1:1) */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 hover:text-white transition-colors py-2 cursor-pointer"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    productsDropdownOpen ? "rotate-180 text-[#e70000]" : ""
                  }`}
                />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-[820px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#10121a]/98 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/90 flex gap-8">
                    
                    {/* Left: 3 Flagship Products Full Grid */}
                    <div className="flex-1">
                      <div className="pb-4 border-b border-white/10 mb-4">
                        <div className="text-base font-bold text-white uppercase tracking-tight">
                          Flagship Products
                        </div>
                        <div className="text-xs text-gray-400 mt-1 leading-relaxed">
                          Enterprise autonomous infrastructure across real-time voice, unified cloud business OS, and legal AI.
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        <Link
                          href="/portfolio"
                          className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-purple-500/10 border border-transparent hover:border-purple-500/30 transition-all text-left group block"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors">
                              Zobay Voice AI
                            </span>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
                              Sub-280ms Latency
                            </span>
                          </div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300 leading-relaxed">
                            Autonomous conversational telephony phone agents with CRM sync & emotion cadence.
                          </div>
                        </Link>

                        <Link
                          href="/portfolio"
                          className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/30 transition-all text-left group block"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-white text-sm group-hover:text-emerald-300 transition-colors">
                              StartOne Enterprise OS
                            </span>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                              -64% SaaS Overhead
                            </span>
                          </div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300 leading-relaxed">
                            Unified execution workspace replacing fragmented tools: fiscal ledgers, pipelines & permissions.
                          </div>
                        </Link>

                        <Link
                          href="/portfolio"
                          className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-amber-500/10 border border-transparent hover:border-amber-500/30 transition-all text-left group block"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors">
                              LegalX Contract AI
                            </span>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
                              10x Audit Speed
                            </span>
                          </div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300 leading-relaxed">
                            Machine-speed 50+ clause risk audits, playbook redlines & zero-leakage compliance.
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Right: Redstone New Project Preview Card with Image */}
                    <Link
                      href="/portfolio"
                      className="w-60 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 p-3.5 flex flex-col justify-between group transition-all"
                    >
                      <div className="text-xs font-bold uppercase tracking-wider text-white mb-2 flex items-center justify-between">
                        <span>New Product</span>
                        <span className="w-2 h-2 rounded-full bg-[#e70000] animate-pulse" />
                      </div>

                      <div className="relative h-48 rounded-xl overflow-hidden border border-white/10 mb-2">
                        <img
                          src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop"
                          alt="Zobay Voice AI"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-2.5 left-2.5 right-2.5">
                          <div className="text-xs font-bold text-white">Fortune Ecosystem v4.0</div>
                          <div className="text-[10px] text-purple-400 font-medium">Full Autonomous Mesh</div>
                        </div>
                      </div>

                      <div className="text-[11px] text-gray-400 group-hover:text-white transition-colors flex items-center justify-between font-medium">
                        <span>Launch Sandbox</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#e70000] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>

                  </div>
                </div>
              )}
            </div>

            {/* Portfolio Mega Dropdown (Matching Redstone 1:1) */}
            <div
              className="relative"
              onMouseEnter={() => setPortfolioDropdownOpen(true)}
              onMouseLeave={() => setPortfolioDropdownOpen(false)}
            >
              <Link
                href="/portfolio"
                className="flex items-center gap-1.5 hover:text-white transition-colors py-2 cursor-pointer"
              >
                <span>Portfolio</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    portfolioDropdownOpen ? "rotate-180 text-[#e70000]" : ""
                  }`}
                />
              </Link>

              {portfolioDropdownOpen && (
                <div className="absolute top-full -left-28 w-[760px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#10121a]/98 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/90 flex gap-8">
                    
                    {/* Left: Category List & Description */}
                    <div className="flex-1">
                      <div className="pb-4 border-b border-white/10 mb-4">
                        <div className="text-base font-bold text-white uppercase tracking-tight">
                          Portfolio
                        </div>
                        <div className="text-xs text-gray-400 mt-1 leading-relaxed">
                          We develop online stores, CRM systems, SaaS platforms, and apps — integrating AI into processes and solutions.
                        </div>
                      </div>

                      {/* 2-Column Category Grid */}
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
                        {[
                          "All Projects",
                          "New projects",
                          "Creative",
                          "Real estate",
                          "Marketing / Corporate",
                          "Landing page",
                          "Online store",
                          "Food delivery",
                          "Dentistry",
                          "Manufacturers",
                          "Branding",
                          "Web solution",
                          "Entertainment/Leisure",
                        ].map((cat, i) => (
                          <Link
                            key={i}
                            href="/portfolio"
                            className="text-gray-300 hover:text-white hover:translate-x-1 transition-all py-1 font-medium flex items-center gap-2 group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#e70000] transition-colors" />
                            <span>{cat}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right: Redstone New Project Preview Card with Image */}
                    <Link
                      href="/portfolio"
                      className="w-56 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 p-3.5 flex flex-col justify-between group transition-all"
                    >
                      <div className="text-xs font-bold uppercase tracking-wider text-white mb-2 flex items-center justify-between">
                        <span>New Project</span>
                        <span className="w-2 h-2 rounded-full bg-[#e70000] animate-pulse" />
                      </div>

                      <div className="relative h-44 rounded-xl overflow-hidden border border-white/10 mb-2">
                        <img
                          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
                          alt="New Project Preview"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-2.5 left-2.5 right-2.5">
                          <div className="text-xs font-bold text-white">StartOne Enterprise OS</div>
                          <div className="text-[10px] text-emerald-400 font-medium">Cloud Workspace • v4.2</div>
                        </div>
                      </div>

                      <div className="text-[11px] text-gray-400 group-hover:text-white transition-colors flex items-center justify-between font-medium">
                        <span>View Live Demo</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#e70000] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>

                  </div>
                </div>
              )}
            </div>

            {/* Services Mega Dropdown (Matching Redstone 1:1) */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className="flex items-center gap-1.5 hover:text-white transition-colors py-2 cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-[#e70000]" : ""
                  }`}
                />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full -left-48 w-[840px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#10121a]/98 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/90 flex gap-8">
                    
                    {/* Left: Category Hierarchy & Description */}
                    <div className="flex-1">
                      <div className="pb-4 border-b border-white/10 mb-4">
                        <div className="text-base font-bold text-white uppercase tracking-tight">
                          Services
                        </div>
                        <div className="text-xs text-gray-400 mt-1 leading-relaxed">
                          We develop online stores, CRM systems, SaaS platforms, and apps — integrating AI into processes and solutions.
                        </div>
                      </div>

                      {/* Categorized 2-Column Grid */}
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-xs">
                        {/* Column 1 */}
                        <div className="space-y-3">
                          <div>
                            <Link href="/services" className="font-bold text-white hover:text-[#e70000] transition-colors block mb-1">
                              Website development
                            </Link>
                            <div className="pl-2 space-y-1 border-l border-white/10">
                              <Link href="/services" className="text-gray-400 hover:text-white transition-colors block">
                                • Landing page
                              </Link>
                              <Link href="/services" className="text-gray-400 hover:text-white transition-colors block">
                                • E-commerce Website Development
                              </Link>
                            </div>
                          </div>

                          <div>
                            <Link href="/services" className="font-bold text-white hover:text-[#e70000] transition-colors block mb-1">
                              Web Design
                            </Link>
                            <div className="pl-2 space-y-1 border-l border-white/10">
                              <Link href="/services" className="text-gray-400 hover:text-white transition-colors block">
                                • UI/UX Design
                              </Link>
                              <Link href="/services" className="text-gray-400 hover:text-white transition-colors block">
                                • Redesign
                              </Link>
                              <Link href="/services" className="text-gray-400 hover:text-white transition-colors block">
                                • Logo
                              </Link>
                              <Link href="/services" className="text-gray-400 hover:text-white transition-colors block">
                                • E-commerce Design
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-3">
                          <div>
                            <Link href="/services" className="font-bold text-white hover:text-[#e70000] transition-colors block mb-1">
                              Mobile Application development
                            </Link>
                            <div className="pl-2 space-y-1 border-l border-white/10">
                              <Link href="/services" className="text-gray-400 hover:text-white transition-colors block">
                                • Android Apps
                              </Link>
                              <Link href="/services" className="text-gray-400 hover:text-white transition-colors block">
                                • iOS Apps
                              </Link>
                            </div>
                          </div>

                          <div className="space-y-1.5 pt-1">
                            <Link href="/services" className="font-semibold text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#e70000]" />
                              <span>CRM system</span>
                            </Link>
                            <Link href="/services" className="font-semibold text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#e70000]" />
                              <span>Website support</span>
                            </Link>
                            <Link href="/services" className="font-semibold text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#e70000]" />
                              <span>Search engine optimisation</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Redstone New Project Preview Card with Image */}
                    <Link
                      href="/services"
                      className="w-56 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 p-3.5 flex flex-col justify-between group transition-all"
                    >
                      <div className="text-xs font-bold uppercase tracking-wider text-white mb-2 flex items-center justify-between">
                        <span>New Project</span>
                        <span className="w-2 h-2 rounded-full bg-[#e70000] animate-pulse" />
                      </div>

                      <div className="relative h-44 rounded-xl overflow-hidden border border-white/10 mb-2">
                        <img
                          src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop"
                          alt="Zobay Voice Engine Service"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-2.5 left-2.5 right-2.5">
                          <div className="text-xs font-bold text-white">Zobay Voice Engine</div>
                          <div className="text-[10px] text-purple-400 font-medium">Sub-280ms Latency • Telephony</div>
                        </div>
                      </div>

                      <div className="text-[11px] text-gray-400 group-hover:text-white transition-colors flex items-center justify-between font-medium">
                        <span>Explore Capabilities</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#e70000] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>

                  </div>
                </div>
              )}
            </div>

            {/* Technologies Mega Dropdown (Matching Redstone 1:1) */}
            <div
              className="relative"
              onMouseEnter={() => setTechnologiesDropdownOpen(true)}
              onMouseLeave={() => setTechnologiesDropdownOpen(false)}
            >
              <Link
                href="/technologies"
                className="flex items-center gap-1.5 hover:text-white transition-colors py-2 cursor-pointer"
              >
                <span>Technologies</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    technologiesDropdownOpen ? "rotate-180 text-[#e70000]" : ""
                  }`}
                />
              </Link>

              {technologiesDropdownOpen && (
                <div className="absolute top-full -left-64 w-[880px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#10121a]/98 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/90 flex gap-8">
                    
                    {/* Left: Technology Classification Columns & Description */}
                    <div className="flex-1">
                      <div className="pb-4 border-b border-white/10 mb-4">
                        <div className="text-base font-bold text-white uppercase tracking-tight">
                          Technologies
                        </div>
                        <div className="text-xs text-gray-400 mt-1 leading-relaxed">
                          We develop online stores, CRM systems, SaaS platforms, and apps — integrating AI into processes and solutions.
                        </div>
                      </div>

                      {/* 3-Column Technology Classification Grid */}
                      <div className="grid grid-cols-3 gap-6 text-xs">
                        
                        {/* Column 1: Single Tier */}
                        <div className="space-y-4">
                          <div>
                            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-1.5 flex items-center justify-between text-gray-200">
                              <span>Single</span>
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-gray-400 font-mono">Tier 1</span>
                            </div>
                            <div className="pl-2 space-y-1.5 border-l border-white/10">
                              {["HTML", "CSS", "WordPress", "Shopify"].map((tech, i) => (
                                <Link key={i} href="/technologies" className="text-gray-400 hover:text-white transition-colors block">
                                  • {tech}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2">
                            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-1.5 text-gray-200">
                              Digital Design
                            </div>
                            <div className="pl-2 space-y-1 border-l border-white/10 text-gray-400">
                              <div>• Figma</div>
                              <div>• Photoshop</div>
                              <div>• Illustrator</div>
                              <div>• Framer</div>
                            </div>
                          </div>
                        </div>

                        {/* Column 2: Middle Tier */}
                        <div className="space-y-4">
                          <div>
                            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-1.5 flex items-center justify-between text-gray-200">
                              <span>Middle</span>
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-gray-400 font-mono">Tier 2</span>
                            </div>
                            <div className="pl-2 space-y-1.5 border-l border-white/10">
                              {["Laravel", "mySQL", "vue", "PHP"].map((tech, i) => (
                                <Link key={i} href="/technologies" className="text-gray-400 hover:text-white transition-colors block">
                                  • {tech}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2">
                            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-1.5 text-gray-200">
                              Architecture
                            </div>
                            <div className="pl-2 space-y-1 border-l border-white/10 text-gray-400">
                              <div>• RESTful APIs</div>
                              <div>• Relational Mesh</div>
                              <div>• Micro-Frontend</div>
                            </div>
                          </div>
                        </div>

                        {/* Column 3: Enterprise Tier */}
                        <div className="space-y-4">
                          <div>
                            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-1.5 flex items-center justify-between text-gray-200">
                              <span>Enterprise</span>
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#e70000]/20 text-[#ff4d4d] font-mono">Tier 3</span>
                            </div>
                            <div className="pl-2 space-y-1.5 border-l border-white/10">
                              {["React.js", "Azure", "Python", "Angular", "Node.js"].map((tech, i) => (
                                <Link key={i} href="/technologies" className="text-gray-400 hover:text-white transition-colors block font-medium">
                                  • {tech}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2 space-y-1.5 border-t border-white/10">
                            <Link href="/technologies" className="font-semibold text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#e70000]" />
                              <span>Database & Cloud</span>
                            </Link>
                            <Link href="/technologies" className="font-semibold text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#e70000]" />
                              <span>Mobile Apps</span>
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Right: Redstone New Project Preview Card with Image */}
                    <Link
                      href="/technologies"
                      className="w-56 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 p-3.5 flex flex-col justify-between group transition-all"
                    >
                      <div className="text-xs font-bold uppercase tracking-wider text-white mb-2 flex items-center justify-between">
                        <span>New Project</span>
                        <span className="w-2 h-2 rounded-full bg-[#e70000] animate-pulse" />
                      </div>

                      <div className="relative h-44 rounded-xl overflow-hidden border border-white/10 mb-2">
                        <img
                          src="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop"
                          alt="LegalX Neural RAG Engine"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-2.5 left-2.5 right-2.5">
                          <div className="text-xs font-bold text-white">LegalX Neural RAG</div>
                          <div className="text-[10px] text-amber-400 font-medium">pgvector • Semantic AI Mesh</div>
                        </div>
                      </div>

                      <div className="text-[11px] text-gray-400 group-hover:text-white transition-colors flex items-center justify-between font-medium">
                        <span>Inspect Tech Stack</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#e70000] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>

                  </div>
                </div>
              )}
            </div>

            {/* About Link */}
            <Link
              href="/about"
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </Link>

            {/* Awards Link */}
            <Link
              href="/awards"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Awards
            </Link>

            {/* Contact Us Link */}
            <Link
              href="/contacts"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contacts
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contacts"
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
            >
              Contact Us
            </Link>

            <button
              onClick={() => onOpenDemo()}
              className="redstone-btn"
            >
              <span>Let's talk</span>
              <div className="btn-icon-circle">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1017] border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          <div className="space-y-2">
            <div className="text-xs uppercase font-bold text-gray-500 tracking-wider">
              Navigation
            </div>
            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-white flex items-center justify-between"
            >
              <span>Portfolio</span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-white flex items-center justify-between"
            >
              <span>Services</span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
            </Link>
            <Link
              href="/technologies"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-white flex items-center justify-between"
            >
              <span>Technologies</span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-white flex items-center justify-between"
            >
              <span>About Us</span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
            </Link>
            <Link
              href="/contacts"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-white flex items-center justify-between"
            >
              <span>Contacts</span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
            </Link>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 rounded-xl bg-[#e70000] text-white font-semibold text-center text-sm shadow-lg shadow-[#e70000]/30"
            >
              Request Private Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
