"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ArrowRight,
  Sparkles,
  Command,
  Layout,
  Briefcase,
  Archive,
  Info,
  Phone,
  Layers,
  Code2,
  Video,
  X,
} from "lucide-react";

interface PaletteItem {
  id: string;
  title: string;
  category: "Pages" | "Products" | "Actions";
  description?: string;
  href?: string;
  action?: () => void;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const items: PaletteItem[] = useMemo(
    () => [
      // Products
      {
        id: "prod-salesx",
        title: "SalesX",
        category: "Products",
        description: "Sales workflow and lead management platform",
        href: "/products/salesx",
        icon: Layout,
        badge: "Sales · 2026",
      },
      {
        id: "prod-meetingx",
        title: "MeetingX",
        category: "Products",
        description: "Meeting and online collaboration platform",
        href: "/products/meetingx",
        icon: Video,
        badge: "Comm · 2026",
      },
      {
        id: "prod-zobay",
        title: "Zobay Voice",
        category: "Products",
        description: "Sub-280ms voice-led sales communication agent",
        href: "/projects/zobay-voice-ai",
        icon: Sparkles,
        badge: "AI Voice",
      },
      {
        id: "prod-startone",
        title: "StartOne Core",
        category: "Products",
        description: "Consolidated enterprise operations and cloud workspace",
        href: "/projects/startone-enterprise-os",
        icon: Layers,
        badge: "Operations",
      },
      // Pages
      {
        id: "page-home",
        title: "Home",
        category: "Pages",
        description: "Overview of digital products and engineering capabilities",
        href: "/",
        icon: Layout,
      },
      {
        id: "page-products",
        title: "Products Catalogue",
        category: "Pages",
        description: "Explore all products built for business teams",
        href: "/products",
        icon: Layers,
      },
      {
        id: "page-work",
        title: "Work & Case Studies",
        category: "Pages",
        description: "Engineering, design, and development behind the products",
        href: "/projects",
        icon: Briefcase,
      },
      {
        id: "page-archive",
        title: "Archive Repository",
        category: "Pages",
        description: "Chronological records of past systems and ADRs",
        href: "/archive",
        icon: Archive,
      },
      {
        id: "page-about",
        title: "About Studio",
        category: "Pages",
        description: "Philosophy, team directory, and working principles",
        href: "/about",
        icon: Info,
      },
      {
        id: "page-services",
        title: "Services & Capabilities",
        category: "Pages",
        description: "Product engineering, AI systems, and cloud architecture",
        href: "/services",
        icon: Code2,
      },
      {
        id: "page-contact",
        title: "Contact / Scope Configurator",
        category: "Pages",
        description: "Start a project or configure a sprint engagement",
        href: "/contact",
        icon: Phone,
      },
      // Actions
      {
        id: "action-start-project",
        title: "Start a Project Brief",
        category: "Actions",
        description: "Configure project scope and sprint timeline",
        href: "/contact#configurator",
        icon: ArrowRight,
      },
      {
        id: "action-explore-salesx",
        title: "Inquire about SalesX",
        category: "Actions",
        description: "Direct inquiry for SalesX enterprise deployment",
        href: "/contact?subject=Inquiry+regarding+SalesX",
        icon: ArrowRight,
      },
      {
        id: "action-explore-meetingx",
        title: "Inquire about MeetingX",
        category: "Actions",
        description: "Direct inquiry for MeetingX collaboration setup",
        href: "/contact?subject=Inquiry+regarding+MeetingX",
        icon: ArrowRight,
      },
    ],
    []
  );

  const filteredItems = useMemo(() => {
    if (!search.trim()) return items;
    const q = search.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q))
    );
  }, [items, search]);

  // Global Keydown Listener for ⌘K / Ctrl+K and Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(0);
      setSearch("");
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Handle keyboard navigation within list
  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const selected = filteredItems[selectedIndex];
      if (selected) {
        executeItem(selected);
      }
    }
  };

  const executeItem = (item: PaletteItem) => {
    setIsOpen(false);
    if (item.action) {
      item.action();
    } else if (item.href) {
      router.push(item.href);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-150"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-xl rounded-xl bg-white border border-black/[0.1] shadow-2xl overflow-hidden text-[#1d1d1f]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleListKeyDown}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-black/[0.08]">
          <Search className="w-4 h-4 text-[#86868b] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products, work, or navigation..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            className="flex-1 bg-transparent text-[14px] text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none"
          />
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#86868b]">
            <kbd className="px-1.5 py-0.5 rounded bg-[#f5f5f7] border border-black/[0.06]">ESC</kbd>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:text-[#1d1d1f] cursor-pointer"
              aria-label="Close command palette"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <div className="py-10 text-center text-[13px] font-mono text-[#86868b]">
              No results found for &ldquo;{search}&rdquo;
            </div>
          ) : (
            <ul className="space-y-0.5">
              {filteredItems.map((item, idx) => {
                const IconComponent = item.icon;
                const isSelected = idx === selectedIndex;

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => executeItem(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors cursor-pointer ${
                        isSelected ? "bg-[#f5f5f7] text-[#1d1d1f]" : "text-[#6e6e73] hover:text-[#1d1d1f]"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <IconComponent className={`w-4 h-4 shrink-0 ${isSelected ? "text-[#0071e3]" : "text-[#86868b]"}`} />
                        <div className="truncate">
                          <div className="text-[13px] font-medium text-[#1d1d1f] flex items-center gap-2">
                            <span>{item.title}</span>
                            {item.badge && (
                              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-black/[0.04] text-[#6e6e73]">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <div className="text-[11px] text-[#86868b] truncate">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        <span className="text-[10px] font-mono text-[#86868b] uppercase">
                          {item.category}
                        </span>
                        {isSelected && <ArrowRight className="w-3.5 h-3.5 text-[#0071e3]" />}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2 border-t border-black/[0.06] bg-[#fafafa] flex items-center justify-between text-[11px] font-mono text-[#86868b]">
          <div className="flex items-center gap-2">
            <span>Navigate</span>
            <kbd className="px-1 py-0.2 rounded bg-white border border-black/[0.06]">↑</kbd>
            <kbd className="px-1 py-0.2 rounded bg-white border border-black/[0.06]">↓</kbd>
            <span>Select</span>
            <kbd className="px-1 py-0.2 rounded bg-white border border-black/[0.06]">↵</kbd>
          </div>
          <span>StratoTech Quick Nav</span>
        </div>
      </div>
    </div>
  );
}
