import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  variant?: "light" | "dark";
}

export default function Breadcrumbs({
  items,
  className = "",
  variant = "light",
}: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  const isDark = variant === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-1.5 text-[12px] font-mono ${className}`}
    >
      {allItems.map((item, idx) => {
        const isLast = idx === allItems.length - 1;

        return (
          <React.Fragment key={idx}>
            {idx > 0 && (
              <ChevronRight
                className={`w-3.5 h-3.5 shrink-0 ${
                  isDark ? "text-white/40" : "text-[#86868b]"
                }`}
              />
            )}

            {isLast || !item.href ? (
              <span
                className={`font-semibold truncate max-w-[200px] sm:max-w-[360px] ${
                  isDark ? "text-white" : "text-[#111111]"
                }`}
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={`transition-colors shrink-0 flex items-center gap-1 ${
                  isDark
                    ? "text-white/60 hover:text-white"
                    : "text-[#6e6e73] hover:text-[#111111]"
                }`}
              >
                {idx === 0 && (
                  <Home
                    className={`w-3 h-3 ${
                      isDark ? "text-white/60" : "text-[#86868b]"
                    }`}
                  />
                )}
                <span>{item.label}</span>
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
