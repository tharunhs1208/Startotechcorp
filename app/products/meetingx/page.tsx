"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Mic,
  MicOff,
  Video,
  VideoOff,
  ScreenShare,
  Users,
  MessageSquare,
  PhoneOff,
  ShieldCheck,
  RotateCcw
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechBadge from "@/components/TechBadge";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SoftwareAppJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

import ScrollCardTransition from "@/components/ScrollCardTransition";

interface Participant {
  id: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  isMuted: boolean;
  isSpeaking: boolean;
  isVideoOff: boolean;
  isHost?: boolean;
}

const INITIAL_PARTICIPANTS: Participant[] = [
  {
    id: "p1",
    name: "Alex Rivera (You)",
    role: "Engineering Lead",
    initials: "AR",
    avatarBg: "bg-[#27272a]",
    isMuted: false,
    isSpeaking: true,
    isVideoOff: false,
    isHost: true,
  },
  {
    id: "p2",
    name: "Elena Rostova",
    role: "Product Strategy",
    initials: "ER",
    avatarBg: "bg-[#3f3f46]",
    isMuted: false,
    isSpeaking: false,
    isVideoOff: false,
  },
  {
    id: "p3",
    name: "Marcus Sterling",
    role: "VP Operations",
    initials: "MS",
    avatarBg: "bg-[#52525b]",
    isMuted: true,
    isSpeaking: false,
    isVideoOff: true,
  },
  {
    id: "p4",
    name: "Sarah Chen",
    role: "Architectural Lead",
    initials: "SC",
    avatarBg: "bg-[#71717a]",
    isMuted: false,
    isSpeaking: false,
    isVideoOff: false,
  },
];

export default function MeetingXProductPage() {
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [activeSideTab, setActiveSideTab] = useState<"participants" | "chat" | null>("chat");
  const [callEnded, setCallEnded] = useState(false);
  const [participants, setParticipants] = useState<Participant[]>(INITIAL_PARTICIPANTS);
  const [chatMessages, setChatMessages] = useState<{ sender: string; time: string; text: string }[]>([
    { sender: "Elena Rostova", time: "10:42 AM", text: "Latest sprint release candidate is deployed to staging." },
    { sender: "Sarah Chen", time: "10:44 AM", text: "Latency tests show 42ms median WebRTC round-trip time." },
  ]);
  const [newMsg, setNewMsg] = useState("");
  const [callDuration, setCallDuration] = useState(284);

  useEffect(() => {
    if (callEnded) return;
    const interval = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [callEnded]);

  const formatDuration = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMsg.trim()) return;
    setChatMessages((prev) => [
      ...prev,
      { sender: "You", time: "Just now", text: newMsg.trim() },
    ]);
    setNewMsg("");
  };

  const toggleMic = () => {
    setIsMicMuted((prev) => !prev);
    setParticipants((prev) =>
      prev.map((p) => (p.id === "p1" ? { ...p, isMuted: !isMicMuted, isSpeaking: isMicMuted } : p))
    );
  };

  const toggleVideo = () => {
    setIsVideoOff((prev) => !prev);
    setParticipants((prev) =>
      prev.map((p) => (p.id === "p1" ? { ...p, isVideoOff: !isVideoOff } : p))
    );
  };

  const capabilities = [
    {
      title: "Sub-50ms Global Latency",
      desc: "Distributed SFU edge mesh routing connections through nearest Tier-1 data centers worldwide.",
    },
    {
      title: "Automated Live Transcription",
      desc: "Real-time speech-to-text generating searchable transcripts and action item summaries instantaneously.",
    },
    {
      title: "End-to-End Encryption",
      desc: "Enterprise-grade DTLS-SRTP double encryption ensuring zero third-party visibility into audio or video streams.",
    },
    {
      title: "Adaptive 48kHz Opus Audio",
      desc: "Intelligent background noise cancellation and dynamic bitrate throttling tailored for variable networks.",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Instant Room Provisioning",
      desc: "Generate dedicated encrypted meeting URLs with 1-click enterprise SSO authentication or guest tokens.",
    },
    {
      step: "02",
      title: "Adaptive Media Mesh",
      desc: "High-definition video and multi-track audio stream dynamically through lowest-latency edge nodes.",
    },
    {
      step: "03",
      title: "In-Meeting Collaboration",
      desc: "Ultra-low-latency 60fps screen sharing, interactive digital whiteboard, and synchronized meeting chat.",
    },
    {
      step: "04",
      title: "Automated Meeting Minutes",
      desc: "Instant post-meeting digest sent to Slack and email with AI timestamps, key takeaways, and action items.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <SoftwareAppJsonLd
        name="MeetingX Platform"
        applicationCategory="CommunicationApplication, VideoConferencing"
        description="A real-time meeting and collaboration platform engineered for crystal-clear video streaming and automated transcription summaries."
        url="https://stratotechcorp.in/products/meetingx"
        features={[
          "Adaptive 4K SFU Video Mesh",
          "Live Transcriptions",
          "Sub-50ms Global Latency",
          "Interactive Canvas Whiteboarding",
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "https://stratotechcorp.in" },
          { name: "Products", item: "https://stratotechcorp.in/products" },
          { name: "MeetingX", item: "https://stratotechcorp.in/products/meetingx" },
        ]}
      />
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-12 sm:pb-20">
        {/* Brand Logo at the starting */}
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 mb-4 sm:mb-6">
          <Link
            href="/"
            className="inline-block font-display text-2xl sm:text-3xl font-black tracking-[-0.04em] text-[#111111] hover:opacity-85 transition-opacity"
          >
            STRATOTECH
          </Link>
        </div>

        {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-12 sm:pb-16 border-b border-black/[0.08]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Breadcrumbs
              items={[
                { label: "Products", href: "/products" },
                { label: "MeetingX" },
              ]}
            />

            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] hover:text-[#1d1d1f] transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>All Products</span>
            </Link>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[11px] font-mono text-[#6e6e73] mb-4 uppercase tracking-wider">
              <span className="font-semibold text-[#1d1d1f]">PRODUCT</span>
              <span>·</span>
              <span>COMMUNICATION · PLATFORM</span>
              <span>·</span>
              <span>2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-[#1d1d1f] leading-tight mb-6">
              MeetingX
            </h1>

            <p className="text-lg sm:text-xl text-[#6e6e73] font-normal leading-relaxed max-w-2xl mb-8">
              A real-time collaboration and meeting platform engineered for crystal-clear video streaming and automated meeting transcription.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#interactive-demo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1d1d1f] text-white text-[14px] font-medium hover:bg-black transition-colors group cursor-pointer"
              >
                <span>Try Live Interactive Room</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link
                href="/contact?subject=Schedule+MeetingX+Demo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-black/[0.08] text-[#1d1d1f] text-[14px] font-medium hover:bg-[#f5f5f7] transition-colors"
              >
                <span>Request Enterprise Pilot</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 2. PURPOSE STATEMENT ────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-black/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] font-semibold block mb-2">
                PURPOSE &amp; PHILOSOPHY
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1d1d1f] tracking-tight leading-snug">
                No Bloat. No Sign-In Walls. Instant Connection.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-[15px] sm:text-[16px] text-[#6e6e73] font-normal leading-relaxed">
              <p>
                Legacy enterprise video conferencing platforms are notoriously bloated, burdened by heavy background processes, confusing authorization modals, and fragile connections on variable mobile data.
              </p>
              <p>
                MeetingX strips away non-essential layers to focus on what matters: pristine 48kHz Opus audio, sub-50ms WebRTC streaming, and real-time meeting synthesis that frees teams from manual note taking.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. INTERACTIVE MEETING ROOM SIMULATOR ─────────────────────── */}
        <section id="interactive-demo" className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-black/[0.08]">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] font-semibold block mb-2">
                INTERACTIVE ENVIRONMENT
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1d1d1f] tracking-tight">
                Meeting Room Simulator
              </h2>
              <p className="text-[14px] text-[#6e6e73] mt-1">
                Interact with microphone, camera, screen-share, and chat controls to test real-time UI behavior.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[12px] font-mono text-[#6e6e73]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Encrypted Room #STC-7029</span>
            </div>
          </div>

          {/* Meeting Room Canvas Container */}
          <div className="rounded-xl border border-black/[0.12] bg-[#111113] text-white overflow-hidden flex flex-col min-h-[560px]">
            {/* Room Header bar */}
            <div className="px-4 sm:px-6 py-3 border-b border-white/[0.08] bg-black/40 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="font-medium text-zinc-200">Architecture Sprint &amp; Delivery Review</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-zinc-400">
                  {formatDuration(callDuration)}
                </span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> E2E Encrypted · 38ms RTT
                </span>
              </div>
            </div>

            {/* Room Body Grid */}
            <div className="flex-1 flex flex-col lg:flex-row">
              {/* Main Visual Stage */}
              <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                {callEnded ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 text-zinc-400">
                      <PhoneOff className="w-6 h-6 text-rose-400" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">You left the meeting</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mb-6">
                      The automated transcript and action items have been dispatched to your email inbox.
                    </p>
                    <button
                      onClick={() => setCallEnded(false)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Rejoin Meeting</span>
                    </button>
                  </div>
                ) : isScreenSharing ? (
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1 bg-zinc-900/80 rounded-xl border border-white/10 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                      <div className="absolute top-3 left-4 flex items-center gap-2 text-xs font-mono text-zinc-300">
                        <ScreenShare className="w-3.5 h-3.5" />
                        <span>Alex Rivera is sharing screen (1080p @ 60fps)</span>
                      </div>
                      <div className="w-full max-w-md p-6 bg-black/60 rounded-xl border border-white/10 text-left space-y-3">
                        <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                          Release Pipeline Metrics
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 w-4/5" />
                        </div>
                        <div className="flex justify-between text-xs text-zinc-400">
                          <span>Build Stage 4/5</span>
                          <span className="text-emerald-400 font-mono">98.4% passing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                    {participants.map((p) => {
                      const isSelf = p.id === "p1";
                      return (
                        <div
                          key={p.id}
                          className={`relative rounded-xl border overflow-hidden transition-all flex flex-col items-center justify-center p-6 ${
                            p.isSpeaking && !p.isMuted
                              ? "border-white/40 ring-1 ring-white/20 bg-zinc-900"
                              : "border-white/10 bg-zinc-900/60"
                          }`}
                        >
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                            <span className="px-2 py-0.5 rounded bg-black/60 text-[11px] font-medium text-zinc-300">
                              {p.name} {p.isHost && "(Host)"}
                            </span>
                            <div className="flex items-center gap-1.5">
                              {p.isMuted ? (
                                <span className="p-1 rounded bg-rose-500/20 text-rose-400">
                                  <MicOff className="w-3 h-3" />
                                </span>
                              ) : (
                                <span className="p-1 rounded bg-emerald-500/20 text-emerald-400">
                                  <Mic className="w-3 h-3" />
                                </span>
                              )}
                            </div>
                          </div>

                          {p.isVideoOff ? (
                            <div className="flex flex-col items-center">
                              <div
                                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-xl font-medium text-white shadow-lg ${p.avatarBg}`}
                              >
                                {p.initials}
                              </div>
                              <span className="text-xs text-zinc-400 mt-2">{p.role}</span>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center">
                              <div
                                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-xl font-medium text-white shadow-lg ${p.avatarBg} relative`}
                              >
                                {p.initials}
                              </div>
                              <span className="text-xs text-zinc-300 mt-2">{p.role}</span>
                              <div className="flex items-center gap-1 mt-2">
                                <span className="w-1.5 h-3 bg-emerald-400 rounded-full animate-pulse" />
                                <span className="w-1.5 h-5 bg-emerald-400 rounded-full animate-pulse delay-75" />
                                <span className="w-1.5 h-2 bg-emerald-400 rounded-full animate-pulse delay-150" />
                              </div>
                            </div>
                          )}

                          <div className="absolute bottom-3 left-3 text-[10px] font-mono text-zinc-500">
                            {isSelf ? "Local Stream (WebRTC)" : "SFU Edge: Mumbai"}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Side Drawer */}
              {activeSideTab && (
                <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-white/[0.08] bg-black/30 flex flex-col">
                  <div className="px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-medium text-zinc-200">
                      {activeSideTab === "chat" ? (
                        <>
                          <MessageSquare className="w-3.5 h-3.5 text-zinc-300" />
                          <span>Meeting Chat</span>
                        </>
                      ) : (
                        <>
                          <Users className="w-3.5 h-3.5 text-zinc-300" />
                          <span>Participants ({participants.length})</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 p-4 overflow-y-auto space-y-3 min-h-[200px]">
                    {activeSideTab === "chat" ? (
                      chatMessages.map((msg, i) => (
                        <div key={i} className="text-xs space-y-1">
                          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                            <span className="font-semibold text-zinc-300">{msg.sender}</span>
                            <span>{msg.time}</span>
                          </div>
                          <p className="text-zinc-200 bg-white/5 p-2 rounded-lg leading-relaxed">
                            {msg.text}
                          </p>
                        </div>
                      ))
                    ) : (
                      participants.map((p) => (
                        <div key={p.id} className="flex items-center justify-between text-xs py-1">
                          <div className="flex items-center gap-2">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${p.avatarBg}`}>
                              {p.initials}
                            </div>
                            <span className="text-zinc-200">{p.name}</span>
                          </div>
                          <span className="text-[10px] font-mono text-zinc-500">{p.role}</span>
                        </div>
                      ))
                    )}
                  </div>

                  {activeSideTab === "chat" && (
                    <form onSubmit={handleSendMessage} className="p-3 border-t border-white/[0.08] flex gap-2">
                      <input
                        type="text"
                        value={newMsg}
                        onChange={(e) => setNewMsg(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 bg-white/10 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-white/40"
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 bg-white text-black text-xs font-medium rounded-lg hover:bg-zinc-200 transition-colors cursor-pointer"
                      >
                        Send
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>

            {/* Room Bottom Controls Bar */}
            <div className="px-4 sm:px-6 py-3.5 border-t border-white/[0.08] bg-black/60 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMic}
                  className={`p-2.5 rounded-xl transition-colors cursor-pointer ${
                    isMicMuted
                      ? "bg-rose-500 text-white hover:bg-rose-600"
                      : "bg-white/10 text-zinc-200 hover:bg-white/20"
                  }`}
                  title={isMicMuted ? "Unmute Microphone" : "Mute Microphone"}
                >
                  {isMicMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>

                <button
                  onClick={toggleVideo}
                  className={`p-2.5 rounded-xl transition-colors cursor-pointer ${
                    isVideoOff
                      ? "bg-rose-500 text-white hover:bg-rose-600"
                      : "bg-white/10 text-zinc-200 hover:bg-white/20"
                  }`}
                  title={isVideoOff ? "Turn On Camera" : "Turn Off Camera"}
                >
                  {isVideoOff ? <VideoOff className="w-4 h-4" /> : <Video className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setIsScreenSharing((prev) => !prev)}
                  className={`p-2.5 rounded-xl transition-colors cursor-pointer ${
                    isScreenSharing
                      ? "bg-white text-black"
                      : "bg-white/10 text-zinc-200 hover:bg-white/20"
                  }`}
                  title={isScreenSharing ? "Stop Sharing" : "Share Screen"}
                >
                  <ScreenShare className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveSideTab(activeSideTab === "participants" ? null : "participants")}
                  className={`px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                    activeSideTab === "participants"
                      ? "bg-white text-black"
                      : "bg-white/10 text-zinc-200 hover:bg-white/20"
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Participants</span> ({participants.length})
                </button>

                <button
                  onClick={() => setActiveSideTab(activeSideTab === "chat" ? null : "chat")}
                  className={`px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                    activeSideTab === "chat"
                      ? "bg-white text-black"
                      : "bg-white/10 text-zinc-200 hover:bg-white/20"
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Chat</span>
                </button>

                <button
                  onClick={() => setCallEnded(true)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-600 text-white hover:bg-rose-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <PhoneOff className="w-3.5 h-3.5" />
                  <span>Leave</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. KEY CAPABILITIES (Product Feature Cards) ─────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-black/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] font-semibold block mb-1">
                PLATFORM MODULES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#1d1d1f] tracking-tight">
                Engineered for Real-Time Reliability
              </h2>
            </div>
            <p className="text-[14px] text-[#6e6e73] max-w-sm">
              Core functionalities built for high-throughput multi-participant calls.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => (
              <ScrollCardTransition key={idx} index={idx}>
                <article className="group bg-white border border-black/[0.08] rounded-xl p-6 sm:p-7 hover:border-black/30 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[12px] font-mono text-[#86868b] block mb-3 uppercase tracking-wider font-medium">
                      0{idx + 1} · Module
                    </span>
                    <h3 className="text-lg font-sans font-semibold text-[#111111] mb-2.5 tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="text-[14px] text-zinc-600 leading-relaxed font-normal">
                      {cap.desc}
                    </p>
                  </div>
                </article>
              </ScrollCardTransition>
            ))}
          </div>
        </section>

        {/* ── 5. WORKFLOW SECTION ─────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-black/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                EXECUTION FLOW
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#1d1d1f] tracking-tight">
                From Schedule to Automated Minutes
              </h2>
            </div>
            <p className="text-[14px] text-[#6e6e73] max-w-sm">
              How MeetingX automates call transcripts, summaries, and action item extraction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((ws) => (
              <div key={ws.step} className="border-t border-black/[0.08] pt-6 flex flex-col justify-between">
                <div>
                  <span className="text-[12px] font-mono text-[#86868b] block mb-2">{ws.step}</span>
                  <h3 className="text-lg font-display font-medium text-[#1d1d1f] mb-2">{ws.title}</h3>
                  <p className="text-[14px] text-[#6e6e73] leading-relaxed font-normal">{ws.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. TECHNOLOGY STACK ────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-14 sm:py-20 border-b border-black/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                INFRASTRUCTURE &amp; TECH
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1d1d1f]">
                Core Technologies
              </h2>
            </div>

            <div className="flex flex-wrap gap-2.5 max-w-xl">
              {["WebRTC", "TypeScript", "Next.js", "React", "Node.js", "Go", "Docker", "AWS", "WebSockets", "Redis", "Tailwind CSS"].map((t, idx) => (
                <TechBadge key={idx} name={t} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. DEPLOYMENT CTA ───────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-12 sm:pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl sm:text-4xl font-medium text-[#1d1d1f] tracking-tight mb-2">
                Deploy MeetingX for Your Organization
              </h2>
              <p className="text-[15px] text-[#6e6e73] font-normal max-w-xl leading-relaxed">
                Available as a dedicated white-label platform or fully managed enterprise cluster with custom SLAs.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-4">
              <Link
                href="/contact?subject=MeetingX+Enterprise+Deployment"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1d1d1f] text-white text-[14px] font-medium hover:bg-black transition-colors group cursor-pointer"
              >
                <span>Deploy for Organization</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
