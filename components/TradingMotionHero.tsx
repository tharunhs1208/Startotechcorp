"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Shield,
  Activity,
  BarChart3,
  RefreshCw,
  CheckCircle2,
  Sliders,
  DollarSign,
  ChevronRight,
  Sparkles,
  Lock,
  Layers,
  Flame,
  Globe2,
  Cpu,
  Radio,
  Clock,
  ArrowRight,
  Star,
  Eye,
} from "lucide-react";
import StartProjectButton from "@/components/StartProjectButton";

// Timeframe Options
type TimeFrame = "1M" | "15M" | "1H" | "4H" | "1D" | "1W" | "ALL";
type ChartMode = "LINE" | "CANDLE";

// Asset Pair Data
interface AssetPair {
  id: string;
  symbol: string;
  name: string;
  price: string;
  priceNum: number;
  change: string;
  isPositive: boolean;
  volume24h: string;
  high24h: string;
  low24h: string;
  marketCap: string;
  chartPoints: number[];
  candles: { open: number; close: number; high: number; low: number }[];
}

const ASSET_PAIRS: AssetPair[] = [
  {
    id: "btc",
    symbol: "BTC / USDT",
    name: "Bitcoin Core",
    price: "$89,420.50",
    priceNum: 89420.5,
    change: "+8.42%",
    isPositive: true,
    volume24h: "$42.8B",
    high24h: "$90,150.00",
    low24h: "$82,300.00",
    marketCap: "$1.76T",
    chartPoints: [65, 68, 62, 70, 75, 72, 80, 85, 82, 88, 92, 90, 96, 94, 99, 104, 108],
    candles: [
      { open: 65, close: 68, high: 71, low: 63 },
      { open: 68, close: 62, high: 69, low: 60 },
      { open: 62, close: 70, high: 73, low: 61 },
      { open: 70, close: 75, high: 77, low: 68 },
      { open: 75, close: 72, high: 76, low: 70 },
      { open: 72, close: 80, high: 82, low: 71 },
      { open: 80, close: 85, high: 88, low: 78 },
      { open: 85, close: 82, high: 86, low: 80 },
      { open: 82, close: 88, high: 90, low: 81 },
      { open: 88, close: 92, high: 95, low: 86 },
      { open: 92, close: 90, high: 93, low: 88 },
      { open: 90, close: 96, high: 98, low: 89 },
      { open: 96, close: 94, high: 97, low: 92 },
      { open: 94, close: 99, high: 102, low: 93 },
      { open: 99, close: 104, high: 107, low: 97 },
      { open: 104, close: 108, high: 110, low: 102 },
    ],
  },
  {
    id: "eth",
    symbol: "ETH / USDT",
    name: "Ethereum Smart Layer",
    price: "$3,640.20",
    priceNum: 3640.2,
    change: "+5.16%",
    isPositive: true,
    volume24h: "$18.4B",
    high24h: "$3,710.00",
    low24h: "$3,450.00",
    marketCap: "$438B",
    chartPoints: [50, 54, 52, 60, 58, 65, 68, 64, 72, 76, 75, 82, 80, 86, 88, 92, 95],
    candles: [
      { open: 50, close: 54, high: 56, low: 48 },
      { open: 54, close: 52, high: 55, low: 50 },
      { open: 52, close: 60, high: 62, low: 51 },
      { open: 60, close: 58, high: 61, low: 56 },
      { open: 58, close: 65, high: 67, low: 57 },
      { open: 65, close: 68, high: 70, low: 63 },
      { open: 68, close: 64, high: 69, low: 62 },
      { open: 64, close: 72, high: 74, low: 63 },
      { open: 72, close: 76, high: 78, low: 70 },
      { open: 76, close: 75, high: 77, low: 73 },
      { open: 75, close: 82, high: 84, low: 74 },
      { open: 82, close: 80, high: 83, low: 78 },
      { open: 80, close: 86, high: 88, low: 79 },
      { open: 86, close: 88, high: 90, low: 84 },
      { open: 88, close: 92, high: 94, low: 86 },
      { open: 92, close: 95, high: 97, low: 90 },
    ],
  },
  {
    id: "sol",
    symbol: "SOL / USDT",
    name: "Solana High-Throughput",
    price: "$214.80",
    priceNum: 214.8,
    change: "+14.85%",
    isPositive: true,
    volume24h: "$8.9B",
    high24h: "$218.00",
    low24h: "$186.50",
    marketCap: "$101B",
    chartPoints: [30, 38, 42, 40, 52, 60, 58, 68, 74, 72, 82, 86, 89, 94, 96, 102, 108],
    candles: [
      { open: 30, close: 38, high: 40, low: 28 },
      { open: 38, close: 42, high: 45, low: 36 },
      { open: 42, close: 40, high: 44, low: 38 },
      { open: 40, close: 52, high: 55, low: 39 },
      { open: 52, close: 60, high: 62, low: 50 },
      { open: 60, close: 58, high: 61, low: 55 },
      { open: 58, close: 68, high: 70, low: 56 },
      { open: 68, close: 74, high: 76, low: 66 },
      { open: 74, close: 72, high: 75, low: 70 },
      { open: 72, close: 82, high: 85, low: 71 },
      { open: 82, close: 86, high: 88, low: 80 },
      { open: 86, close: 89, high: 91, low: 84 },
      { open: 89, close: 94, high: 96, low: 87 },
      { open: 94, close: 96, high: 98, low: 92 },
      { open: 96, close: 102, high: 104, low: 94 },
      { open: 102, close: 108, high: 110, low: 100 },
    ],
  },
  {
    id: "strato",
    symbol: "STRATO / USD",
    name: "Strato Tech AI Index",
    price: "$1,450.00",
    priceNum: 1450.0,
    change: "+24.30%",
    isPositive: true,
    volume24h: "$4.1B",
    high24h: "$1,490.00",
    low24h: "$1,160.00",
    marketCap: "$34B",
    chartPoints: [40, 45, 52, 58, 64, 70, 78, 85, 88, 92, 96, 98, 102, 108, 115, 122, 130],
    candles: [
      { open: 40, close: 45, high: 48, low: 38 },
      { open: 45, close: 52, high: 55, low: 43 },
      { open: 52, close: 58, high: 60, low: 50 },
      { open: 58, close: 64, high: 66, low: 56 },
      { open: 64, close: 70, high: 73, low: 62 },
      { open: 70, close: 78, high: 80, low: 68 },
      { open: 78, close: 85, high: 88, low: 76 },
      { open: 85, close: 88, high: 90, low: 82 },
      { open: 88, close: 92, high: 95, low: 86 },
      { open: 92, close: 96, high: 98, low: 90 },
      { open: 96, close: 98, high: 100, low: 94 },
      { open: 98, close: 102, high: 105, low: 96 },
      { open: 102, close: 108, high: 110, low: 100 },
      { open: 108, close: 115, high: 118, low: 106 },
      { open: 115, close: 122, high: 125, low: 112 },
      { open: 122, close: 130, high: 133, low: 118 },
    ],
  },
];

// Order Book Bids and Asks
const ORDER_BOOK_BIDS = [
  { price: "89,420.50", amount: "1.428", total: "$127,692", width: "95%" },
  { price: "89,418.00", amount: "3.850", total: "$344,259", width: "82%" },
  { price: "89,415.50", amount: "5.120", total: "$457,807", width: "68%" },
  { price: "89,410.00", amount: "8.450", total: "$755,514", width: "54%" },
];

const ORDER_BOOK_ASKS = [
  { price: "89,425.00", amount: "2.105", total: "$188,239", width: "60%" },
  { price: "89,428.50", amount: "4.320", total: "$386,331", width: "75%" },
  { price: "89,432.00", amount: "6.780", total: "$606,348", width: "88%" },
  { price: "89,438.00", amount: "9.210", total: "$823,723", width: "96%" },
];

export default function TradingMotionHero() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedAsset, setSelectedAsset] = useState<AssetPair>(ASSET_PAIRS[0]);
  const [timeframe, setTimeframe] = useState<TimeFrame>("1D");
  const [chartMode, setChartMode] = useState<ChartMode>("LINE");
  const [tradeTab, setTradeTab] = useState<"BUY" | "SELL" | "AI BOT">("BUY");
  const [tradeAmount, setTradeAmount] = useState<string>("5000");
  const [leverage, setLeverage] = useState<number>(10);
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [executionSuccess, setExecutionSuccess] = useState<boolean>(false);
  const [hoveredPointIndex, setHoveredPointIndex] = useState<number | null>(null);
  const [orderToast, setOrderToast] = useState<{ show: boolean; msg: string }>({ show: false, msg: "" });

  // Handle Trade Execution
  const handleExecuteTrade = () => {
    setIsExecuting(true);
    setExecutionSuccess(false);
    setTimeout(() => {
      setIsExecuting(false);
      setExecutionSuccess(true);
      setOrderToast({
        show: true,
        msg: `Filled ${tradeTab} Order: ${selectedAsset.symbol.split(" ")[0]} ($${tradeAmount}) at 0.018ms!`,
      });
      setTimeout(() => {
        setExecutionSuccess(false);
        setOrderToast({ show: false, msg: "" });
      }, 4000);
    }, 850);
  };

  // Convert chart points to SVG Path
  const points = selectedAsset.chartPoints;
  const minVal = Math.min(...points) - 5;
  const maxVal = Math.max(...points) + 5;
  const width = 640;
  const height = 240;

  const svgCoordinates = points.map((val, idx) => {
    const x = (idx / (points.length - 1)) * width;
    const y = height - ((val - minVal) / (maxVal - minVal)) * (height - 40) - 20;
    return { x, y, val };
  });

  const pathString = svgCoordinates.reduce((acc, pt, idx) => {
    if (idx === 0) return `M ${pt.x},${pt.y}`;
    const prev = svgCoordinates[idx - 1];
    const cx = (prev.x + pt.x) / 2;
    return `${acc} C ${cx},${prev.y} ${cx},${pt.y} ${pt.x},${pt.y}`;
  }, "");

  const areaString = `${pathString} L ${width},${height} L 0,${height} Z`;

  // Calculated conversions
  const inputNum = parseFloat(tradeAmount) || 0;
  const calculatedCrypto = (inputNum / selectedAsset.priceNum).toFixed(4);
  const totalBuyingPower = (inputNum * leverage).toLocaleString();

  return (
    <section className="relative w-full pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-32 bg-[#07090e] text-white overflow-hidden selection:bg-[#00f298] selection:text-black">
      {/* ── 1. AMBIENT GLOW MESH & GRID (Vino Costa / Roobinium Signature) ── */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Cyber Technical Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_15%,#000_70%,transparent_100%)] opacity-80" />

        {/* Luminous Neon Radial Orbs */}
        <div className="absolute top-[-140px] left-1/2 -translate-x-1/2 w-[1100px] h-[580px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,242,152,0.18),rgba(56,189,248,0.10),transparent_70%)] blur-3xl" />
        <div className="absolute top-[340px] right-[-180px] w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(99,102,241,0.15),transparent_70%)] blur-3xl" />
        <div className="absolute top-[420px] left-[-180px] w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(0,242,152,0.12),transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* ── 2. HERO HEADLINE & HIGH-IMPACT INTRO ─────────────────────── */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Tech Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] backdrop-blur-2xl text-[12px] font-mono tracking-wide text-zinc-200 mb-6 shadow-[0_0_25px_rgba(0,242,152,0.16)]"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f298] opacity-85" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f298]" />
            </span>
            <span className="text-[#00f298] font-bold">⚡ ROBUST TRADING PLATFORM</span>
            <span className="text-white/20">/</span>
            <span className="text-zinc-300">Sub-0.02ms Speed</span>
          </motion.div>

          {/* Master Punchy Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-display font-medium tracking-[-0.035em] text-white leading-[1.04]"
          >
            Trade Smarter, Faster &<br />
            <span className="bg-gradient-to-r from-[#00f298] via-[#38bdf8] to-[#a855f7] bg-clip-text text-transparent font-semibold">
              With Maximum Precision.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Deploy algorithmic strategies, access deep multi-chain institutional liquidity, and execute trades with sub-0.02ms latency on the most responsive trading terminal.
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <StartProjectButton
              size="lg"
              text="Trade Now — Launch Terminal"
              className="bg-[#00f298] text-black font-bold hover:bg-[#00d984] shadow-[0_0_30px_rgba(0,242,152,0.35)] transition-all scale-100 hover:scale-[1.02]"
            />
            <Link
              href="#terminal-showcase"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] text-white text-[15px] font-medium transition-all backdrop-blur-md hover:border-white/20"
            >
              <Activity className="w-4 h-4 text-[#38bdf8]" />
              Explore Live Alpha Signals
            </Link>
          </motion.div>

          {/* Trust Ratings Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 flex items-center justify-center gap-6 text-xs text-zinc-400 font-mono"
          >
            <div className="flex items-center gap-1.5 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="text-zinc-200 ml-1 font-bold">4.9 / 5</span>
            </div>
            <span className="text-white/20">|</span>
            <span>$42.8B+ 24H Volume</span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="hidden sm:inline">28+ Liquidity Pools</span>
          </motion.div>
        </div>

        {/* ── 3. LIVE TICKER STREAMER MARQUEE ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-12 py-3 px-4 rounded-2xl bg-[#0c101a]/80 border border-white/[0.08] backdrop-blur-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar scroll-smooth">
            {ASSET_PAIRS.map((asset) => {
              const isSelected = selectedAsset.id === asset.id;
              return (
                <button
                  key={asset.id}
                  onClick={() => setSelectedAsset(asset)}
                  className={`flex items-center gap-3.5 px-4 py-2.5 rounded-xl transition-all flex-shrink-0 text-left cursor-pointer ${
                    isSelected
                      ? "bg-white/[0.08] border border-[#00f298]/50 shadow-[0_0_20px_rgba(0,242,152,0.18)]"
                      : "hover:bg-white/[0.04] border border-transparent"
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center font-mono font-bold text-[12px] text-white">
                    {asset.symbol.split(" ")[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-semibold text-white">{asset.symbol}</span>
                      <span
                        className={`inline-flex items-center text-[11px] font-mono font-bold ${
                          asset.isPositive ? "text-[#00f298]" : "text-rose-400"
                        }`}
                      >
                        {asset.isPositive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                        {asset.change}
                      </span>
                    </div>
                    <span className="text-[12px] font-mono text-zinc-400">{asset.price}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── 4. THE INTERACTIVE MOTION TRADING COMMAND STAGE (Vino Costa Style) ── */}
        <div id="terminal-showcase" className="mt-10 relative">
          {/* FLOATING SATELLITE BADGES */}
          
          {/* Top-Right Floating Alpha Signal Badge */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [-8, 8, -8],
                    x: [0, 4, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden xl:flex absolute -top-10 -right-8 z-30 items-center gap-3.5 px-4 py-3 rounded-2xl bg-[#0f1422]/95 border border-white/[0.14] backdrop-blur-2xl shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
          >
            <div className="w-10 h-10 rounded-xl bg-[#00f298]/15 border border-[#00f298]/40 flex items-center justify-center">
              <Zap className="w-5 h-5 text-[#00f298] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-mono font-bold text-white tracking-wider">NEURAL ALPHA SIGNAL</span>
                <span className="px-1.5 py-0.5 rounded bg-[#00f298]/20 text-[#00f298] text-[9px] font-mono font-bold">
                  99.4% WIN
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                Long {selectedAsset.symbol.split(" ")[0]} detected &middot; Automated Scalp Active
              </p>
            </div>
          </motion.div>

          {/* Top-Left Floating Speed Latency Badge */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [6, -6, 6],
                    x: [0, -3, 0],
                  }
            }
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="hidden xl:flex absolute -top-8 -left-8 z-30 items-center gap-3.5 px-4 py-3 rounded-2xl bg-[#0f1422]/95 border border-white/[0.14] backdrop-blur-2xl shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
          >
            <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/40 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-[#38bdf8]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-mono font-bold text-white tracking-wider">0.018ms ROUTING</span>
                <span className="px-1.5 py-0.5 rounded bg-[#38bdf8]/20 text-[#38bdf8] text-[9px] font-mono font-bold">
                  FPGA ACCELERATED
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                Direct Memory Access &middot; Zero Mempool Leakage
              </p>
            </div>
          </motion.div>

          {/* MAIN GLASS TERMINAL CONTAINER */}
          <div className="relative rounded-3xl bg-[#0c101c]/95 border border-white/[0.14] shadow-[0_40px_100px_rgba(0,0,0,0.85)] backdrop-blur-3xl overflow-hidden p-6 sm:p-8 lg:p-10">
            {/* Top Bar of the Terminal */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              {/* Asset Title & Live Price */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.08] border border-white/10 flex items-center justify-center font-mono font-bold text-lg text-[#00f298] shadow-[0_0_25px_rgba(0,242,152,0.2)]">
                  {selectedAsset.symbol.split(" ")[0]}
                </div>
                <div>
                  <div className="flex items-center gap-2.5">
                    <h2 className="text-xl sm:text-2xl font-bold font-display text-white">{selectedAsset.name}</h2>
                    <span className="px-2 py-0.5 rounded-full bg-white/[0.08] text-[11px] font-mono text-zinc-300">
                      {selectedAsset.symbol}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
                      {selectedAsset.price}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#00f298]/15 text-[#00f298] text-[12px] font-mono font-bold">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      {selectedAsset.change}
                    </span>
                  </div>
                </div>
              </div>

              {/* Chart Controls: Line / Candle Toggle & Timeframe Selector */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/[0.08]">
                  <button
                    onClick={() => setChartMode("LINE")}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
                      chartMode === "LINE" ? "bg-white/20 text-white" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Line
                  </button>
                  <button
                    onClick={() => setChartMode("CANDLE")}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
                      chartMode === "CANDLE" ? "bg-white/20 text-white" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Candles
                  </button>
                </div>

                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/[0.08]">
                  {(["1M", "15M", "1H", "4H", "1D", "1W", "ALL"] as TimeFrame[]).map((tf) => (
                    <button
                      key={tf}
                      onClick={() => setTimeframe(tf)}
                      className={`px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-[12px] font-mono font-semibold transition-all ${
                        timeframe === tf
                          ? "bg-[#00f298] text-black font-bold shadow-[0_0_15px_rgba(0,242,152,0.35)]"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Terminal Main Grid: Left Chart & Order Book | Right Instant Trade Deck */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
              {/* ── LEFT: DYNAMIC LIVE TRADING CHART & ORDER DEPTH ──── */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                {/* Real-time telemetry row */}
                <div className="grid grid-cols-4 gap-2.5 mb-4 font-mono text-[11px]">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-zinc-500 block">24H High</span>
                    <span className="text-white font-semibold mt-0.5 block">{selectedAsset.high24h}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-zinc-500 block">24H Low</span>
                    <span className="text-white font-semibold mt-0.5 block">{selectedAsset.low24h}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-zinc-500 block">24H Volume</span>
                    <span className="text-[#00f298] font-semibold mt-0.5 block">{selectedAsset.volume24h}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-zinc-500 block">Market Cap</span>
                    <span className="text-[#38bdf8] font-semibold mt-0.5 block">{selectedAsset.marketCap}</span>
                  </div>
                </div>

                {/* SVG Animated Chart Canvas */}
                <div className="relative w-full h-[260px] sm:h-[300px] bg-gradient-to-b from-white/[0.03] to-transparent rounded-2xl border border-white/[0.08] p-4 flex flex-col justify-end overflow-hidden group">
                  {/* Grid Lines inside chart */}
                  <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-20">
                    <div className="border-b border-dashed border-white/20 w-full" />
                    <div className="border-b border-dashed border-white/20 w-full" />
                    <div className="border-b border-dashed border-white/20 w-full" />
                    <div className="border-b border-dashed border-white/20 w-full" />
                  </div>

                  {chartMode === "LINE" ? (
                    <svg
                      viewBox={`0 0 ${width} ${height}`}
                      className="w-full h-full overflow-visible"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00f298" stopOpacity="0.4" />
                          <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.12" />
                          <stop offset="100%" stopColor="#07090e" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#00f298" />
                          <stop offset="50%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#00f298" />
                        </linearGradient>
                      </defs>

                      {/* Gradient Area */}
                      <motion.path
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        d={areaString}
                        fill="url(#chartGlow)"
                      />

                      {/* Glowing Stroke Path */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        d={pathString}
                        fill="none"
                        stroke="url(#lineGrad)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />

                      {/* Interactive Point Markers */}
                      {svgCoordinates.map((pt, idx) => (
                        <circle
                          key={idx}
                          cx={pt.x}
                          cy={pt.y}
                          r={hoveredPointIndex === idx || idx === svgCoordinates.length - 1 ? 5.5 : 0}
                          className="fill-[#00f298] stroke-[#07090e] stroke-2 transition-all cursor-pointer shadow-lg"
                          onMouseEnter={() => setHoveredPointIndex(idx)}
                          onMouseLeave={() => setHoveredPointIndex(null)}
                        />
                      ))}
                    </svg>
                  ) : (
                    /* Candlestick Visualization */
                    <div className="w-full h-full flex items-end justify-between gap-1.5 sm:gap-3 py-2 px-1">
                      {selectedAsset.candles.map((candle, idx) => {
                        const isUp = candle.close >= candle.open;
                        const bodyHeight = Math.max(Math.abs(candle.close - candle.open) * 2.8, 6);
                        const wickHeight = (candle.high - candle.low) * 2.8;
                        return (
                          <div key={idx} className="flex-1 flex flex-col items-center justify-end h-full relative group/candle">
                            {/* Wick */}
                            <div
                              style={{ height: `${wickHeight}px` }}
                              className={`w-[1.5px] ${isUp ? "bg-[#00f298]" : "bg-rose-400"} absolute bottom-2`}
                            />
                            {/* Candle Body */}
                            <div
                              style={{ height: `${bodyHeight}px` }}
                              className={`w-full max-w-[14px] rounded-xs ${
                                isUp ? "bg-[#00f298] shadow-[0_0_8px_rgba(0,242,152,0.4)]" : "bg-rose-400 shadow-[0_0_8px_rgba(244,63,94,0.4)]"
                              } relative z-10`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Chart Pulsing Beacon */}
                  <div className="absolute right-6 top-6 flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f298]/10 border border-[#00f298]/30 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f298] opacity-80" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f298]" />
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#00f298]">LIVE MARKET FEED</span>
                  </div>
                </div>

                {/* Order Book Depth Visualizer */}
                <div className="mt-4 pt-3 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] font-mono">
                  {/* Bids */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-zinc-500 font-bold mb-1">
                      <span>BID PRICE</span>
                      <span>SIZE</span>
                      <span>TOTAL</span>
                    </div>
                    {ORDER_BOOK_BIDS.map((bid, i) => (
                      <div key={i} className="relative flex justify-between py-0.5 px-1.5 rounded overflow-hidden">
                        <div
                          style={{ width: bid.width }}
                          className="absolute right-0 top-0 bottom-0 bg-[#00f298]/10 -z-10"
                        />
                        <span className="text-[#00f298] font-bold">{bid.price}</span>
                        <span className="text-zinc-300">{bid.amount}</span>
                        <span className="text-zinc-500">{bid.total}</span>
                      </div>
                    ))}
                  </div>

                  {/* Asks */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-zinc-500 font-bold mb-1">
                      <span>ASK PRICE</span>
                      <span>SIZE</span>
                      <span>TOTAL</span>
                    </div>
                    {ORDER_BOOK_ASKS.map((ask, i) => (
                      <div key={i} className="relative flex justify-between py-0.5 px-1.5 rounded overflow-hidden">
                        <div
                          style={{ width: ask.width }}
                          className="absolute right-0 top-0 bottom-0 bg-rose-500/10 -z-10"
                        />
                        <span className="text-rose-400 font-bold">{ask.price}</span>
                        <span className="text-zinc-300">{ask.amount}</span>
                        <span className="text-zinc-500">{ask.total}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── RIGHT: INSTANT EXECUTION / SWAP CARD (Vino Costa Style) ── */}
              <div className="lg:col-span-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between backdrop-blur-2xl">
                <div>
                  {/* Order Mode Tabs */}
                  <div className="grid grid-cols-3 gap-1 bg-black/50 p-1.5 rounded-xl border border-white/[0.08] mb-5">
                    {(["BUY", "SELL", "AI BOT"] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setTradeTab(tab)}
                        className={`py-2 rounded-lg text-[12px] font-mono font-bold transition-all ${
                          tradeTab === tab
                            ? tab === "BUY"
                              ? "bg-[#00f298] text-black shadow-[0_0_15px_rgba(0,242,152,0.35)]"
                              : tab === "SELL"
                              ? "bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.35)]"
                              : "bg-[#38bdf8] text-black shadow-[0_0_15px_rgba(56,189,248,0.35)]"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Input 1: Pay USD */}
                  <div className="mb-3">
                    <div className="flex justify-between text-[11px] font-mono text-zinc-400 mb-1.5">
                      <span>Order Value (USD)</span>
                      <span>Avail: $148,250.00</span>
                    </div>
                    <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/[0.1] focus-within:border-[#00f298]/70 transition-all">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-zinc-400" />
                        <input
                          type="number"
                          value={tradeAmount}
                          onChange={(e) => setTradeAmount(e.target.value)}
                          className="bg-transparent text-white font-mono font-bold text-lg focus:outline-none w-28 sm:w-36"
                          placeholder="0.00"
                        />
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-white/[0.08] text-zinc-300">
                        USD
                      </span>
                    </div>
                  </div>

                  {/* Quick percentage chips */}
                  <div className="grid grid-cols-4 gap-1.5 mb-4">
                    {["25%", "50%", "75%", "MAX"].map((pct) => (
                      <button
                        key={pct}
                        onClick={() => {
                          if (pct === "25%") setTradeAmount("2500");
                          if (pct === "50%") setTradeAmount("5000");
                          if (pct === "75%") setTradeAmount("7500");
                          if (pct === "MAX") setTradeAmount("10000");
                        }}
                        className="py-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08] text-[10px] font-mono text-zinc-400 hover:text-white transition-all border border-white/[0.06]"
                      >
                        {pct}
                      </button>
                    ))}
                  </div>

                  {/* Leverage Selector Slider */}
                  <div className="mb-4 p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                    <div className="flex justify-between text-[11px] font-mono text-zinc-400 mb-1.5">
                      <span>Leverage Power</span>
                      <span className="text-[#00f298] font-bold">{leverage}x</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={leverage}
                      onChange={(e) => setLeverage(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-[#00f298]"
                    />
                    <div className="flex justify-between text-[9px] font-mono text-zinc-500 mt-1">
                      <span>1x</span>
                      <span>25x</span>
                      <span>50x</span>
                      <span>100x</span>
                    </div>
                  </div>

                  {/* Input 2: Receive Estimate */}
                  <div className="mb-4">
                    <label className="text-[11px] font-mono text-zinc-400 block mb-1.5">Buying Power / Position Size</label>
                    <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/[0.1]">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-lg text-[#00f298]">${totalBuyingPower}</span>
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-[#00f298]/15 text-[#00f298] border border-[#00f298]/30">
                        {calculatedCrypto} {selectedAsset.symbol.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  {/* Telemetry rows */}
                  <div className="space-y-1.5 p-3 rounded-xl bg-black/40 border border-white/[0.06] text-[11px] font-mono">
                    <div className="flex justify-between text-zinc-400">
                      <span>Smart Routing</span>
                      <span className="text-[#00f298]">0.018ms &middot; Best Price</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Liquidity Fee</span>
                      <span className="text-zinc-200">0.00% Maker</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Slippage Protection</span>
                      <span className="text-zinc-200">&lt; 0.001% Guaranteed</span>
                    </div>
                  </div>
                </div>

                {/* Execution CTA Button */}
                <div className="mt-5">
                  <button
                    onClick={handleExecuteTrade}
                    disabled={isExecuting}
                    className={`w-full py-3.5 rounded-xl font-mono font-bold text-[14px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                      executionSuccess
                        ? "bg-emerald-500 text-black shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                        : tradeTab === "BUY"
                        ? "bg-[#00f298] hover:bg-[#00d984] text-black shadow-[0_0_25px_rgba(0,242,152,0.35)]"
                        : tradeTab === "SELL"
                        ? "bg-rose-500 hover:bg-rose-600 text-white shadow-[0_0_25px_rgba(244,63,94,0.35)]"
                        : "bg-[#38bdf8] hover:bg-[#0ea5e9] text-black shadow-[0_0_25px_rgba(56,189,248,0.35)]"
                    }`}
                  >
                    {isExecuting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Matching Order via 28 Pools...</span>
                      </>
                    ) : executionSuccess ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Order Executed in 0.018ms!</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4" />
                        <span>
                          {tradeTab === "BUY"
                            ? `Buy / Long ${selectedAsset.symbol.split(" ")[0]} (${leverage}x)`
                            : tradeTab === "SELL"
                            ? `Sell / Short ${selectedAsset.symbol.split(" ")[0]} (${leverage}x)`
                            : "Launch AI Auto-Bot"}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 5. PROOF & TELEMETRY ROW ─────────────────────────────────── */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">&lt; 0.018ms</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">Average Execution Latency</div>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-[#00f298] tracking-tight">$42.8B+</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">24h Institutional Liquidity</div>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">99.999%</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">Trading Engine SLA Uptime</div>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-[#38bdf8] tracking-tight">SOC-2 Type II</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">Hardware Security Enclaves</div>
          </div>
        </div>
      </div>
    </section>
  );
}
