"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ArrowRight,
  Sparkles,
  Layout,
  Briefcase,
  Info,
  Phone,
  Layers,
  Code2,
  Video,
  X,
  FileText,
  Building2,
  Compass,
} from "lucide-react";
import {
  SERVICES_DATA,
  PROJECTS_DATA,
  INDUSTRIES_DATA,
  BLOG_POSTS,
  JOBS_DATA,
} from "@/data/siteData";

interface PaletteItem {
  id: string;
  title: string;
  category: "Services" | "Products" | "Work" | "Industries" | "Blog" | "Careers" | "Pages" | "Actions";
  description?: string;
  href?: string;
  action?: () => void;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export default function CommandPalette() {
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const items: PaletteItem[] = useMemo(() => {
    // Dynamic Services
    const serviceItems: PaletteItem[] = SERVICES_DATA.map((s) => ({
      id: `svc-${s.slug}`,
      title: s.title,
      category: "Services",
      description: s.shortDescription,
      href: `/services/${s.slug}`,
      icon: Code2,
      badge: "Service",
    }));

    // Dynamic Projects
    const projectItems: PaletteItem[] = PROJECTS_DATA.map((p) => ({
      id: `proj-${p.slug}`,
      title: p.title,
      category: "Work",
      description: p.tagline || p.overview,
      href: `/projects/${p.slug}`,
      icon: Briefcase,
      badge: p.category,
    }));

    // Dynamic Industries
    const industryItems: PaletteItem[] = INDUSTRIES_DATA.map((ind) => ({
      id: `ind-${ind.slug}`,
      title: ind.name,
      category: "Industries",
      description: ind.tagline,
      href: `/industries/${ind.slug}`,
      icon: Building2,
      badge: "Sector",
    }));

    // Dynamic Blog
    const blogItems: PaletteItem[] = BLOG_POSTS.map((b) => ({
      id: `blog-${b.slug}`,
      title: b.title,
      category: "Blog",
      description: b.excerpt,
      href: `/blog/${b.slug}`,
      icon: FileText,
      badge: b.category,
    }));

    // Dynamic Jobs
    const jobItems: PaletteItem[] = JOBS_DATA.map((j) => ({
      id: `job-${j.slug}`,
      title: j.title,
      category: "Careers",
      description: `${j.department} · ${j.location} · ${j.type}`,
      href: `/careers/${j.slug}`,
      icon: Compass,
      badge: "Open Role",
    }));

    // Static Products & Core Pages
    const staticItems: PaletteItem[] = [
      {
        id: "prod-salesx",
        title: "SalesX Platform",
        category: "Products",
        description: "Autonomous lead triage, scoring & CRM synchronization",
        href: "/products/salesx",
        icon: Layout,
        badge: "Sales",
      },
      {
        id: "prod-meetingx",
        title: "MeetingX Collaboration",
        category: "Products",
        description: "Browser WebRTC video, live transcription & canvas reviews",
        href: "/products/meetingx",
        icon: Video,
        badge: "Video",
      },
      {
        id: "page-services",
        title: "All Engineering Services",
        category: "Pages",
        description: "Bespoke full-stack development, UI/UX, and cloud infrastructure",
        href: "/services",
        icon: Code2,
      },
      {
        id: "page-projects",
        title: "Case Studies & Work",
        category: "Pages",
        description: "Client software builds, architecture specs, and benchmarks",
        href: "/projects",
        icon: Briefcase,
      },
      {
        id: "page-products",
        title: "Products Catalog",
        category: "Pages",
        description: "Explore all products built for business teams",
        href: "/products",
        icon: Layers,
      },
      {
        id: "page-industries",
        title: "Industry Solutions",
        category: "Pages",
        description: "Fintech, Healthcare, LegalTech, and Commerce architectures",
        href: "/industries",
        icon: Building2,
      },
      {
        id: "page-about",
        title: "About StratoTech",
        category: "Pages",
        description: "Our engineering philosophy, team directory, and Bangalore studio",
        href: "/about",
        icon: Info,
      },
      {
        id: "page-contact",
        title: "Contact & Start a Project",
        category: "Pages",
        description: "Sprint scoping, technical RFPs, and direct team outreach",
        href: "/contact",
        icon: Phone,
      },
      {
        id: "action-ai",
        title: "Open StratoTech AI Assistant",
        category: "Actions",
        description: "Instant answers about services, products, and tech stack",
        action: () => window.dispatchEvent(new CustomEvent("open-ai-assistant")),
        icon: Sparkles,
        badge: "⌘J",
      },
    ];

    return [
      ...staticItems,
      ...serviceItems,
      ...projectItems,
      ...industryItems,
      ...blogItems,
      ...jobItems,
    ];
  }, []);

  // Filter items based on search query
  const filtered = useMemo(() => {
    if (!search.trim()) {
      return items.slice(0, 10);
    }
    const q = search.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [items, search]);

  // Handle keyboard shortcut (⌘K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => {
          if (!prev) {
            setSearch("");
            setSelectedIndex(0);
          }
          return !prev;
        });
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Arrow key navigation inside palette
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const selected = filtered[selectedIndex];
      if (selected) {
        handleSelect(selected);
      }
    }
  };

  const handleSelect = (item: PaletteItem) => {
    setIsOpen(false);
    if (item.action) {
      item.action();
    } else if (item.href) {
      router.push(item.href);
    }
  };

  if (!mounted || !isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/40 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-2xl bg-white border border-black/[0.1] rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.18)] overflow-hidden flex flex-col max-h-[75vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-black/[0.08] gap-3">
          <Search className="w-5 h-5 text-[#86868b] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search services, products, case studies, essays..."
            className="flex-1 text-[15px] text-[#1d1d1f] placeholder:text-[#86868b] bg-transparent border-none outline-none font-sans"
          />
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close search palette"
            className="p-1 rounded-lg text-[#86868b] hover:text-[#1d1d1f] hover:bg-black/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 divide-y divide-black/[0.04]">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-[#86868b] text-[14px]">
              No results found for &ldquo;{search}&rdquo;
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = selectedIndex === idx;

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition-all duration-150 cursor-pointer ${
                    isSelected ? "bg-black/[0.05] text-[#1d1d1f]" : "text-[#6e6e73] hover:bg-black/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? "bg-[#1d1d1f] text-white" : "bg-black/[0.04] text-[#1d1d1f]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] font-medium text-[#1d1d1f] truncate">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/[0.06] text-[#6e6e73]">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-[12px] text-[#86868b] truncate">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 text-[#86868b] shrink-0 transition-transform ${
                      isSelected ? "translate-x-0.5 text-[#1d1d1f]" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Hints */}
        <div className="px-4 py-2.5 bg-[#fafafa] border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono text-[#86868b]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-black/[0.06] text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-black/[0.06] text-[10px]">↓</kbd> to navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-black/[0.06] text-[10px]">↵</kbd> to select
            </span>
          </div>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-black/[0.06] text-[10px]">esc</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
}
