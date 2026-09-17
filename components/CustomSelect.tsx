"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export interface OptionItem {
  value: string;
  label: string;
  badge?: string;
}

interface CustomSelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: (string | OptionItem)[];
  placeholder?: string;
  className?: string;
}

export default function CustomSelect({
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalize options to OptionItem objects
  const normalizedOptions: OptionItem[] = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt
  );

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Close dropdown when clicking/tapping outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside, { passive: true });
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Handle keyboard events
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className={`relative w-full ${className}`} ref={containerRef}>
      {label && (
        <label className="block text-xs sm:text-xs font-medium text-zinc-700 mb-1.5 select-none">
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full min-h-[46px] flex items-center justify-between bg-white border transition-all duration-200 rounded-xl px-4 py-3 text-sm text-left cursor-pointer touch-manipulation select-none active:scale-[0.99] ${
          isOpen
            ? "border-[#0070f3] ring-4 ring-[#0070f3]/10 text-zinc-900 shadow-xs"
            : "border-zinc-300 text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50/50"
        }`}
      >
        <span className={selectedOption ? "font-medium text-zinc-900 truncate" : "text-zinc-400 truncate"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 ml-2 shrink-0 text-zinc-400 transition-transform duration-200 ease-out ${
            isOpen ? "rotate-180 text-[#0070f3]" : ""
          }`}
        />
      </button>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl border border-zinc-200/90 rounded-2xl shadow-xl shadow-black/10 p-1.5 max-w-full overflow-hidden"
          >
            <div className="max-h-[48vh] sm:max-h-60 overflow-y-auto space-y-1 overscroll-contain touch-pan-y">
              {normalizedOptions.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      onChange(opt.value);
                      setIsOpen(false);
                    }}
                    className={`w-full min-h-[42px] flex items-center justify-between px-3.5 py-2.5 sm:py-2 rounded-xl text-sm transition-all duration-150 text-left cursor-pointer touch-manipulation active:scale-[0.99] ${
                      isSelected
                        ? "bg-[#0070f3]/10 text-[#0070f3] font-semibold"
                        : "text-zinc-700 hover:bg-zinc-100/80 hover:text-zinc-900 active:bg-zinc-100 font-medium"
                    }`}
                  >
                    <span className="truncate pr-2">{opt.label}</span>
                    {isSelected && (
                      <Check className="w-4 h-4 text-[#0070f3] shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
