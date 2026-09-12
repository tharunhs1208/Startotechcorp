"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowRight, Shield, Mic, LayoutGrid, ChevronDown } from "lucide-react";

interface NavbarProps {
  onOpenDemo: (product?: string) => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0f]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-500 p-[2px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#090a0f] rounded-[10px] flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-amber-400 font-black text-xl tracking-wider">
                  F
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1">
                Fortune<span className="text-indigo-400">Tech</span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  CORP
                </span>
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                onClick={() => scrollToSection("products-showcase")}
                className="flex items-center gap-1.5 hover:text-white transition-colors py-2 cursor-pointer"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    productsDropdownOpen ? "rotate-180 text-indigo-400" : ""
                  }`}
                />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-2 z-50">
                  <div className="bg-[#12141d]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 shadow-2xl shadow-black/80 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    <button
                      onClick={() => scrollToSection("product-zobay")}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all text-left group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                        <Mic className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm group-hover:text-purple-300 transition-colors">
                          Zobay
                        </div>
                        <div className="text-xs text-gray-400">
                          Autonomous Voice AI & Inbound Agents
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => scrollToSection("product-startone")}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all text-left group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                        <LayoutGrid className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm group-hover:text-emerald-300 transition-colors">
                          StartOne
                        </div>
                        <div className="text-xs text-gray-400">
                          Unified Cloud Enterprise Operating System
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => scrollToSection("product-legalx")}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all text-left group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                        <Shield className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm group-hover:text-amber-300 transition-colors">
                          LegalX
                        </div>
                        <div className="text-xs text-gray-400">
                          AI Contract Audit & Legal Intelligence
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("ecosystem-section")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Ecosystem
            </button>

            <button
              onClick={() => scrollToSection("bento-features")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Architecture
            </button>

            <button
              onClick={() => scrollToSection("testimonials-section")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Clients
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenDemo("Fortune Suite")}
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
            >
              Contact Us
            </button>

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
              Products
            </div>
            <button
              onClick={() => scrollToSection("product-zobay")}
              className="w-full text-left py-2 text-white flex items-center justify-between"
            >
              <span>Zobay (Voice AI)</span>
              <span className="text-purple-400 text-xs">Explore →</span>
            </button>
            <button
              onClick={() => scrollToSection("product-startone")}
              className="w-full text-left py-2 text-white flex items-center justify-between"
            >
              <span>StartOne (Enterprise OS)</span>
              <span className="text-emerald-400 text-xs">Explore →</span>
            </button>
            <button
              onClick={() => scrollToSection("product-legalx")}
              className="w-full text-left py-2 text-white flex items-center justify-between"
            >
              <span>LegalX (Contract Intelligence)</span>
              <span className="text-amber-400 text-xs">Explore →</span>
            </button>
          </div>

          <div className="pt-2 border-t border-white/5 space-y-2">
            <button
              onClick={() => scrollToSection("ecosystem-section")}
              className="w-full text-left py-2 text-gray-300"
            >
              Ecosystem Integration
            </button>
            <button
              onClick={() => scrollToSection("bento-features")}
              className="w-full text-left py-2 text-gray-300"
            >
              Security & Architecture
            </button>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-center text-sm shadow-lg shadow-indigo-600/30"
            >
              Request Private Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
