"use client";

import React from "react";
import { motion, Variants } from "motion/react";

interface TextMaskRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  delay?: number;
  duration?: number;
  stagger?: number;
  mode?: "words" | "lines" | "letters";
  once?: boolean;
}

export default function TextMaskReveal({
  text,
  className = "",
  as: Component = "h2",
  delay = 0,
  duration = 0.75,
  stagger = 0.035,
  mode = "words",
  once = true,
}: TextMaskRevealProps) {
  if (mode === "lines") {
    // Split by explicit newlines or provided line breaks
    const lines = text.split("\n");

    const containerVariants: Variants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: stagger * 2.5,
          delayChildren: delay,
        },
      },
    };

    const lineVariants: Variants = {
      hidden: {
        y: "120%",
        opacity: 0,
        rotate: 1.5,
      },
      visible: {
        y: "0%",
        opacity: 1,
        rotate: 0,
        transition: {
          duration,
          ease: [0.16, 1, 0.3, 1], // Apple/Linear smooth cubic bezier
        },
      },
    };

    return (
      <Component className={className}>
        <motion.span
          className="inline-block w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once, margin: "-60px" }}
        >
          {lines.map((line, idx) => (
            <span key={idx} className="block overflow-hidden py-0.5">
              <motion.span
                variants={lineVariants}
                className="inline-block will-change-[transform,opacity]"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </Component>
    );
  }

  // Word-by-word mask reveal (signature PixFort / editorial mask reveal)
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      y: "115%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        className="inline-flex flex-wrap items-baseline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-60px" }}
      >
        {words.map((word, idx) => (
          <span
            key={idx}
            className="inline-block overflow-hidden mr-[0.26em] last:mr-0 py-0.5 leading-tight"
          >
            <motion.span
              variants={wordVariants}
              className="inline-block will-change-[transform,opacity]"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
