"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export interface ScrollReelCaseStudy {
  slug: string;
  title: string;
  industry: string;
  tagline: string;
  metric?: string;
  metricLabel?: string;
  image: string;
}

export interface ScrollReelCaseStudiesProps {
  caseStudies: ScrollReelCaseStudy[];
  charStaggerMs?: number;
  className?: string;
}

/* Geometry — enlarged middle column pitch between case study centers:
 * 3 * (cell 180px + gap 12px) = 576px */
const CELL = 180;
const GAP = 12;
const STEP = 3 * (CELL + GAP);

const EXIT_MS = 240;
const SLIDE_MS = 800;
const EASE_INOUT = "cubic-bezier(0.65,0,0.35,1)";

const TITLE_CLASSES =
  "m-0 text-2xl sm:text-3xl lg:text-[34px] font-display font-extrabold leading-[1.15] tracking-tight text-[#111111]";
const DESC_CLASSES =
  "m-0 text-[15px] sm:text-[17px] font-normal leading-relaxed text-[#555555]";

const FEATURED_SHADOW =
  "0 1.008px 0.705px -0.563px rgba(0,0,0,0.18), 0 2.389px 1.672px -1.125px rgba(0,0,0,0.17), 0 4.357px 3.05px -1.688px rgba(0,0,0,0.17), 0 7.244px 5.07px -2.25px rgba(0,0,0,0.16), 0 11.698px 8.188px -2.813px rgba(0,0,0,0.15), 0 19.148px 13.404px -3.375px rgba(0,0,0,0.13), 0 32.972px 23.08px -3.938px rgba(0,0,0,0.09), 0 60px 42px -4.5px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(0,0,0,0.6)";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/* Blurred placeholder cell */
function Cell() {
  return (
    <div
      aria-hidden="true"
      className="shrink-0 rounded-2xl border border-black/10 bg-gradient-to-b from-black/[0.03] to-white blur-[1px] shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_0_2px_0_rgba(255,255,255,1)]"
      style={{ width: CELL, height: CELL }}
    />
  );
}

/* Featured case study thumbnail tile with gradient sheen overlay */
function Featured({ src, alt }: { src: string; alt?: string }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-2xl bg-black/5 shadow-md"
      style={{ width: CELL, height: CELL, boxShadow: FEATURED_SHADOW }}
    >
      <img
        src={src}
        alt={alt ?? ""}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
      />
      {/* diagonal gradient sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3] blur-[6px] mix-blend-overlay opacity-80"
        style={{
          background:
            "linear-gradient(220.99deg, rgba(130,255,205,0) 32%, rgb(130,255,205) 41%, rgb(173,255,225) 47%, rgba(130,255,205,0.57) 54%, rgba(130,255,205,0) 65%)",
        }}
      />
    </div>
  );
}

/* Per-character split text reveal */
function Chars({
  text,
  startIndex,
  staggerMs,
}: {
  text: string;
  startIndex: number;
  staggerMs: number;
}) {
  let idx = startIndex;
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wi) => {
        const wordSpan = (
          <span key={wi} className="inline-block whitespace-nowrap">
            {Array.from(word).map((ch, ci) => {
              const delay = idx * staggerMs;
              idx++;
              return (
                <span
                  key={ci}
                  className="scroll-reel-char inline-block opacity-0 translate-y-3"
                  style={{
                    animation: `scroll-reel-char-rise 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                    animationDelay: `${delay}ms`,
                  }}
                >
                  {ch}
                </span>
              );
            })}
          </span>
        );
        if (wi < words.length - 1) idx++;
        return (
          <React.Fragment key={wi}>
            {wordSpan}
            {wi < words.length - 1 ? " " : null}
          </React.Fragment>
        );
      })}
    </>
  );
}

export function ScrollReelCaseStudies({
  caseStudies,
  charStaggerMs = 5,
  className,
}: ScrollReelCaseStudiesProps) {
  const [index, setIndex] = React.useState(0);
  const [displayIndex, setDisplayIndex] = React.useState(0);
  const [exiting, setExiting] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const animating = React.useRef(false);
  const timeouts = React.useRef<ReturnType<typeof setTimeout>[]>([]);

  const count = caseStudies.length;

  React.useEffect(() => {
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setMounted(true))
    );
    return () => {
      cancelAnimationFrame(raf);
      timeouts.current.forEach(clearTimeout);
    };
  }, []);

  const paginate = React.useCallback(
    (dir: 1 | -1) => {
      if (animating.current) return;
      const next = index + dir;
      if (next < 0 || next >= count) return;
      animating.current = true;

      setIndex(next);
      setExiting(true);

      timeouts.current.push(
        setTimeout(() => {
          setDisplayIndex(next);
          setExiting(false);
        }, EXIT_MS)
      );
      timeouts.current.push(
        setTimeout(() => {
          animating.current = false;
        }, SLIDE_MS)
      );
    },
    [index, count]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      paginate(1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      paginate(-1);
    }
  };

  const middleItems = React.useMemo(() => {
    const items: Array<{ type: "cell" } | { type: "featured"; i: number }> = [];
    for (let i = 0; i < 3; i++) items.push({ type: "cell" });
    caseStudies.forEach((_, i) => {
      items.push({ type: "featured", i });
      if (i < count - 1) {
        items.push({ type: "cell" }, { type: "cell" });
      }
    });
    for (let i = 0; i < 3; i++) items.push({ type: "cell" });
    return items;
  }, [caseStudies, count]);

  const sideCellCount = 4 + 2 * count;
  const centerIdx = (count - 1) / 2;
  const middleY = (centerIdx - index) * STEP;
  const sideY = -middleY;

  const colStyle = (y: number): React.CSSProperties => ({
    transform: `translateY(${y}px)`,
    transition: mounted ? `transform ${SLIDE_MS}ms ${EASE_INOUT}` : "none",
  });

  const current = caseStudies[displayIndex];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Recent Case Studies Reel"
      tabIndex={0}
      onKeyDown={onKeyDown}
      className={cn(
        "relative flex w-full flex-col items-stretch gap-2.5 overflow-hidden rounded-3xl border border-black/[0.08] bg-white shadow-[inset_0_2px_0_rgba(255,255,255,1),0_16px_48px_rgba(0,0,0,0.06)] outline-none focus-visible:ring-2 focus-visible:ring-black md:min-h-[460px] md:flex-row",
        className
      )}
    >
      {/* Counter-Rotating Reel Column Section with Larger Cells */}
      <div
        aria-hidden="true"
        className="relative h-72 w-full shrink-0 self-stretch overflow-hidden md:h-auto md:w-[460px] lg:w-[500px] bg-[#F8F9FB] border-b md:border-b-0 md:border-r border-black/[0.06]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center gap-3">
          {/* Left column */}
          <div
            className="flex shrink-0 flex-col gap-3 will-change-transform motion-reduce:[transition:none!important]"
            style={colStyle(sideY)}
          >
            {Array.from({ length: sideCellCount }).map((_, i) => (
              <Cell key={i} />
            ))}
          </div>

          {/* Middle column (Interactive Larger Case Studies) */}
          <div
            className="flex shrink-0 flex-col gap-3 will-change-transform motion-reduce:[transition:none!important]"
            style={colStyle(middleY)}
          >
            {middleItems.map((item, i) =>
              item.type === "featured" ? (
                <Featured
                  key={i}
                  src={caseStudies[item.i].image}
                  alt={caseStudies[item.i].title}
                />
              ) : (
                <Cell key={i} />
              )
            )}
          </div>

          {/* Right column */}
          <div
            className="flex shrink-0 flex-col gap-3 will-change-transform motion-reduce:[transition:none!important]"
            style={colStyle(sideY)}
          >
            {Array.from({ length: sideCellCount }).map((_, i) => (
              <Cell key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Editorial Content Stage */}
      <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch px-6 py-8 md:py-12 md:px-12">
        <div className="flex flex-col gap-5">
          
          {/* Top Industry & Metric Pill Badges */}
          <div className="flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.05] border border-black/5 text-[11px] font-mono uppercase tracking-wider text-black font-bold">
              <span>{current.industry}</span>
            </div>

            {current.metric && (
              <div className="inline-flex items-center gap-2 text-[13px] font-mono font-bold text-black bg-[#82FFCD]/60 px-3 py-1 rounded-full border border-black/10 shadow-2xs">
                <span>{current.metric}</span>
                {current.metricLabel && (
                  <span className="text-[11px] text-[#333333] font-medium">
                    {current.metricLabel}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Dynamic Typographic Split Stage */}
          <div
            className="relative w-full max-w-[620px] overflow-hidden"
            aria-live="polite"
          >
            {/* Invisible in-flow copy for sizing */}
            <div
              aria-hidden="true"
              className="invisible flex min-h-[160px] flex-col gap-4"
            >
              <h3 className={TITLE_CLASSES}>{current.title}</h3>
              <p className={DESC_CLASSES}>{current.tagline}</p>
            </div>

            <div
              key={displayIndex}
              className={cn(
                "absolute inset-x-0 top-0 flex flex-col gap-4 will-change-[transform,opacity]",
                exiting && "opacity-0 -translate-y-3 transition-all duration-200"
              )}
            >
              <h3 className={TITLE_CLASSES}>
                <Chars
                  text={current.title}
                  startIndex={0}
                  staggerMs={charStaggerMs}
                />
              </h3>
              <p className={DESC_CLASSES}>
                <Chars
                  text={current.tagline}
                  startIndex={current.title.length + 4}
                  staggerMs={charStaggerMs}
                />
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Actions & Reel Controls */}
        <div className="mt-8 pt-6 border-t border-black/[0.08] flex items-center justify-between gap-4">
          <Link
            href={`/projects/${current.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-[#82FFCD] hover:text-black font-semibold text-[14px] transition-all duration-300 shadow-sm group"
          >
            <span>Read full case study</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Counter & Arrows */}
          <div className="flex items-center gap-4">
            <span className="text-[12px] font-mono text-[#666666]">
              <strong className="text-black font-bold text-sm">0{index + 1}</strong> / 0{count}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => paginate(-1)}
                disabled={index === 0}
                aria-label="Previous case study"
                className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-black/15 bg-white text-black transition-all duration-200 hover:enabled:scale-105 active:enabled:scale-95 disabled:cursor-default disabled:opacity-30 shadow-2xs"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7.5 2.5 3.5 6l4 3.5" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => paginate(1)}
                disabled={index === count - 1}
                aria-label="Next case study"
                className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-black/15 bg-white text-black transition-all duration-200 hover:enabled:scale-105 active:enabled:scale-95 disabled:cursor-default disabled:opacity-30 shadow-2xs"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m4.5 2.5 4 3.5-4 3.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ScrollReelCaseStudies;
