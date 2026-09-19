"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface StartProjectButtonProps {
  href?: string;
  className?: string;
  variant?: "primary" | "outline" | "inline" | "light";
  size?: "sm" | "md" | "lg";
  text?: string;
  iconType?: "right" | "up-right";
  onClick?: () => void;
}

export default function StartProjectButton({
  href = "/contact",
  className = "",
  variant = "primary",
  size = "md",
  text = "Start a project",
  iconType = "right",
  onClick,
}: StartProjectButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-[13px] gap-2",
    md: "px-6 py-3.5 text-[14px] gap-2.5",
    lg: "px-7 sm:px-8 py-4 text-[15px] sm:text-[16px] gap-3",
  };

  const Icon = iconType === "up-right" ? ArrowUpRight : ArrowRight;

  const content = (
    <span
      className={`inline-flex items-center justify-center font-medium rounded-full select-none cursor-pointer transition-all duration-300 group shadow-xs active:scale-95 ${
        sizeClasses[size]
      } ${
        variant === "outline"
          ? "border border-black/[0.15] bg-white text-[#1d1d1f] hover:border-black hover:bg-[#f5f5f7]"
          : variant === "light"
          ? "bg-white text-[#1d1d1f] hover:bg-[#f2f2f5] shadow-md"
          : "bg-[#1d1d1f] text-white hover:bg-black hover:shadow-md"
      } ${className}`}
    >
      <span>{text}</span>
      <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </span>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="inline-block cursor-pointer">
        {content}
      </button>
    );
  }

  return (
    <Link href={href} className="inline-block cursor-pointer">
      {content}
    </Link>
  );
}
