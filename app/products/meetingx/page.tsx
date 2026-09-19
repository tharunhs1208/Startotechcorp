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
  Zap,
  FileText,
  Volume2,
  CheckCircle2,
  ArrowUpRight,
  RotateCcw
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechBadge from "@/components/TechBadge";
import { SoftwareAppJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

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
    avatarBg: "bg-blue-600",
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
    avatarBg: "bg-emerald-600",
    isMuted: false,
    isSpeaking: false,
    isVideoOff: false,
  },
  {
    id: "p3",
    name: "Marcus Sterling",
    role: "VP Operations",
    initials: "MS",
    avatarBg: "bg-indigo-600",
    isMuted: true,
    isSpeaking: false,
    isVideoOff: true,
  },
  {
    id: "p4",
    name: "Sarah Chen",
    role: "Architectural Lead",
    initials: "SC",
    avatarBg: "bg-amber-600",
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
  const [callDuration, setCallDuration] = useState(284); // in seconds

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
      desc: "Distributed SFU edge mesh routing connections through the nearest Tier-1 data centers worldwide.",
      icon: Zap,
    },
    {
      title: "Automated Live Transcription",
      desc: "Real-time speech-to-text generating searchable transcripts and action item summaries instantaneously.",
      icon: FileText,
    },
    {
      title: "End-to-End Encryption",
      desc: "Enterprise-grade DTLS-SRTP and double encryption ensuring zero third-party visibility into audio or video streams.",
      icon: ShieldCheck,
    },
    {
      title: "Adaptive 48kHz Opus Audio",
      desc: "Intelligent background noise cancellation and dynamic bitrate throttling tailored for variable network conditions.",
      icon: Volume2,
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
      desc: "High-definition video & multi-track audio stream dynamically through lowest-latency edge nodes.",
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
    <main className="min-h-screen bg-white text-zinc-900 w-full max-w-full overflow-x-hidden selection:bg-zinc-900 selection:text-white">
      <SoftwareAppJsonLd
        name="MeetingX Platform"
        applicationCategory="CommunicationApplication, VideoConferencing"
        description="A next-generation collaboration and real-time meeting platform engineered for crystal-clear video streaming and automated AI transcription summaries."
        url="https://stratotechcorp.in/products/meetingx"
        features={[
          "Adaptive 4K SFU Video Mesh",
          "Live AI Transcriptions",
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

      {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section className="pt-32 sm:pt-44 pb-16 sm:pb-24 border-b border-black/[0.08] bg-[#fbfbfd]">
        <div className="page-container max-w-6xl">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] hover:text-[#1d1d1f] transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Products</span>
          </Link>

          <div className="max-w-3xl">
            {/* Meta tags */}
            <div className="flex items-center gap-3 text-[12px] font-mono text-[#6e6e73] mb-4 uppercase tracking-wider">
              <span className="font-semibold text-[#1d1d1f]">PRODUCT</span>
              <span>·</span>
              <span>COMMUNICATION · PLATFORM</span>
              <span>·</span>
              <span>2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-medium tracking-[-0.035em] text-[#1d1d1f] leading-[1.05] mb-6">
              MeetingX
            </h1>

            <p className="text-lg sm:text-xl text-[#6e6e73] font-normal leading-relaxed max-w-2xl mb-8">
              A next-generation collaboration and real-time meeting platform engineered for crystal-clear video streaming and automated AI transcription summaries.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#interactive-demo"
                className="inline-flex items-center gap-2 bg-zinc-950 text-white hover:bg-zinc-800 text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
              >
                <span>Try Live Interactive Room</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact?subject=Schedule+MeetingX+Demo"
                className="inline-flex items-center gap-2 border border-black/[0.12] bg-white hover:bg-black/[0.02] text-zinc-800 text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
              >
                <span>Request Enterprise Pilot</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PURPOSE STATEMENT ────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-black/[0.08] bg-white">
        <div className="page-container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] font-semibold block mb-2">
                Purpose & Philosophy
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                No Bloat. No Sign-In Walls. Instant Connection.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Legacy enterprise video conferencing platforms are notoriously bloated, burdened by heavy background processes, confusing authorization modals, and fragile connections on weak mobile data.
              </p>
              <p>
                MeetingX strips away every non-essential layer to focus on what matters: pristine 48kHz Opus audio, sub-50ms WebRTC streaming, and intelligent real-time meeting synthesis that frees teams from taking manual notes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE MEETING ROOM SIMULATOR ─────────────────────── */}
      <section id="interactive-demo" className="py-16 sm:py-24 bg-[#f8fafc] border-b border-black/[0.08]">
        <div className="page-container max-w-6xl">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] font-semibold block mb-2">
                Interactive Environment
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                Meeting Room Simulator
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                Interact with microphone, camera, screen-share, and chat controls to test real-time UI behavior.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Encrypted Room #STC-7029</span>
            </div>
          </div>

          {/* Meeting Room Canvas Container */}
          <div className="rounded-2xl border border-black/[0.12] bg-[#0f1117] text-white shadow-xl overflow-hidden flex flex-col min-h-[580px]">
            {/* Room Header bar */}
            <div className="px-4 sm:px-6 py-3 border-b border-white/[0.08] bg-black/40 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                <span className="font-semibold text-zinc-200">Architecture Sprint & Delivery Review</span>
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
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 text-zinc-400">
                      <PhoneOff className="w-8 h-8 text-rose-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">You left the meeting</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mb-6">
                      The automated transcript and action items have been dispatched to your email inbox.
                    </p>
                    <button
                      onClick={() => setCallEnded(false)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0070f3] text-white text-xs font-semibold hover:bg-blue-600 transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Rejoin Meeting</span>
                    </button>
                  </div>
                ) : isScreenSharing ? (
                  /* Screen share state */
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1 bg-zinc-900/80 rounded-xl border border-white/10 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                      <div className="absolute top-3 left-4 flex items-center gap-2 text-xs font-mono text-blue-400">
                        <ScreenShare className="w-3.5 h-3.5" />
                        <span>Alex Rivera is sharing screen (1080p @ 60fps)</span>
                      </div>
                      <div className="w-full max-w-md p-6 bg-black/60 rounded-xl border border-white/10 text-left space-y-3">
                        <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                          Release Pipeline Metrics
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 w-4/5"></div>
                        </div>
                        <div className="flex justify-between text-xs text-zinc-400">
                          <span>Build Stage 4/5</span>
                          <span className="text-emerald-400 font-mono">98.4% passing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Participant Grid (2x2) */
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                    {participants.map((p) => {
                      const isSelf = p.id === "p1";
                      return (
                        <div
                          key={p.id}
                          className={`relative rounded-xl border overflow-hidden transition-all flex flex-col items-center justify-center p-6 ${
                            p.isSpeaking && !p.isMuted
                              ? "border-[#0070f3] ring-2 ring-[#0070f3]/40 bg-zinc-900"
                              : "border-white/10 bg-zinc-900/60"
                          }`}
                        >
                          {/* Audio indicator / status tags */}
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                            <span className="px-2 py-0.5 rounded bg-black/60 text-[11px] font-medium text-zinc-300 backdrop-blur-xs">
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

                          {/* Video canvas / Avatar fallback */}
                          {p.isVideoOff ? (
                            <div className="flex flex-col items-center">
                              <div
                                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg ${p.avatarBg} ${
                                  p.isSpeaking ? "scale-105 transition-transform" : ""
                                }`}
                              >
                                {p.initials}
                              </div>
                              <span className="text-xs text-zinc-400 mt-2">{p.role}</span>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center">
                              <div
                                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg ${p.avatarBg} relative`}
                              >
                                {p.initials}
                                {p.isSpeaking && !p.isMuted && (
                                  <span className="absolute -inset-1 rounded-full border-2 border-[#0070f3] animate-ping opacity-75"></span>
                                )}
                              </div>
                              <span className="text-xs text-zinc-300 mt-2">{p.role}</span>
                              <div className="flex items-center gap-1 mt-2">
                                <span className="w-1.5 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
                                <span className="w-1.5 h-5 bg-emerald-400 rounded-full animate-pulse delay-75"></span>
                                <span className="w-1.5 h-2 bg-emerald-400 rounded-full animate-pulse delay-150"></span>
                              </div>
                            </div>
                          )}

                          {/* Footer bar */}
                          <div className="absolute bottom-3 left-3 text-[10px] font-mono text-zinc-500">
                            {isSelf ? "Local Stream (WebRTC)" : "SFU Edge: Mumbai"}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Side Drawer (Chat or Participants) */}
              {activeSideTab && (
                <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-white/[0.08] bg-black/30 flex flex-col">
                  {/* Drawer Header */}
                  <div className="px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
                      {activeSideTab === "chat" ? (
                        <>
                          <MessageSquare className="w-3.5 h-3.5 text-[#0070f3]" />
                          <span>Meeting Chat</span>
                        </>
                      ) : (
                        <>
                          <Users className="w-3.5 h-3.5 text-[#0070f3]" />
                          <span>Participants ({participants.length})</span>
                        </>
                      )}
                    </div>
                    <button
                      onClick={() => setActiveSideTab(null)}
                      className="text-zinc-500 hover:text-zinc-300 text-xs cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Drawer Content */}
                  <div className="flex-1 p-4 overflow-y-auto max-h-72 lg:max-h-[380px] space-y-3 text-xs">
                    {activeSideTab === "chat" ? (
                      <>
                        {chatMessages.map((msg, i) => (
                          <div key={i} className="bg-white/5 rounded-lg p-2.5 border border-white/5">
                            <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
                              <span className="font-semibold text-zinc-200">{msg.sender}</span>
                              <span className="font-mono text-[10px]">{msg.time}</span>
                            </div>
                            <p className="text-zinc-300 leading-relaxed">{msg.text}</p>
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className="space-y-2">
                        {participants.map((p) => (
                          <div key={p.id} className="flex items-center justify-between p-2 rounded bg-white/5">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white ${p.avatarBg}`}>
                                {p.initials}
                              </div>
                              <div>
                                <div className="text-xs font-medium text-zinc-200">{p.name}</div>
                                <div className="text-[10px] text-zinc-500">{p.role}</div>
                              </div>
                            </div>
                            <span className="text-[10px] font-mono text-zinc-400">
                              {p.isMuted ? "Muted" : "Active"}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Chat input form */}
                  {activeSideTab === "chat" && (
                    <form onSubmit={handleSendMessage} className="p-3 border-t border-white/[0.08] flex gap-2">
                      <input
                        type="text"
                        value={newMsg}
                        onChange={(e) => setNewMsg(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 bg-white/10 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-[#0070f3]"
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 bg-[#0070f3] text-white text-xs font-medium rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
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
                  className={`p-2.5 rounded-full transition-colors cursor-pointer ${
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
                  className={`p-2.5 rounded-full transition-colors cursor-pointer ${
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
                  className={`p-2.5 rounded-full transition-colors cursor-pointer ${
                    isScreenSharing
                      ? "bg-[#0070f3] text-white"
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
                  className={`px-3 py-2 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                    activeSideTab === "participants"
                      ? "bg-white text-zinc-950"
                      : "bg-white/10 text-zinc-200 hover:bg-white/20"
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Participants</span> ({participants.length})
                </button>

                <button
                  onClick={() => setActiveSideTab(activeSideTab === "chat" ? null : "chat")}
                  className={`px-3 py-2 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                    activeSideTab === "chat"
                      ? "bg-white text-zinc-950"
                      : "bg-white/10 text-zinc-200 hover:bg-white/20"
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Chat</span>
                </button>

                <button
                  onClick={() => setCallEnded(true)}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-rose-600 text-white hover:bg-rose-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <PhoneOff className="w-3.5 h-3.5" />
                  <span>Leave</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. KEY CAPABILITIES ─────────────────────────────────────── */}
      <section className="py-20 sm:py-28 border-b border-black/[0.08] bg-white">
        <div className="page-container max-w-6xl">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] font-semibold block mb-2">
              Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
              Engineered for Mission-Critical Collaboration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {capabilities.map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <div key={idx} className="p-6 sm:p-8 rounded-2xl border border-black/[0.08] bg-[#fbfbfd] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0070f3] mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-zinc-950">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-zinc-600 font-light leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. ARCHITECTURE & PROTOCOL STACK ────────────────────────── */}
      <section className="py-20 sm:py-28 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] font-semibold block">
                Infrastructure & Networking
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight leading-tight">
                Zero-relay Selective Forwarding Units (SFU)
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                Rather than forcing every stream through centralized bottlenecks, MeetingX deploys geo-distributed SFU instances with automatic STUN/TURN failover.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Opus 48kHz audio with neural noise suppression",
                  "VP9 & AV1 adaptive resolution downsampling (1080p to 240p)",
                  "Instant reconnection protocol with zero stream packet loss",
                  "Full SOC2 Type II & HIPAA compliant recording infrastructure",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0070f3] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl border border-black/[0.1] bg-white shadow-xs font-mono text-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] text-zinc-500">
                  <span>PROTOCOL SPECIFICATION</span>
                  <span className="text-emerald-600 font-semibold">VERIFIED</span>
                </div>
                <div className="space-y-2 text-zinc-700">
                  <div className="flex justify-between py-1.5 border-b border-black/[0.03]">
                    <span className="text-zinc-500">Signaling Protocol</span>
                    <span className="font-semibold text-zinc-900">Secure WebSocket (WSS)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-black/[0.03]">
                    <span className="text-zinc-500">Media Transport</span>
                    <span className="font-semibold text-zinc-900">WebRTC / SRTP</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-black/[0.03]">
                    <span className="text-zinc-500">Audio Codec</span>
                    <span className="font-semibold text-zinc-900">Opus 48kHz Stereo</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-black/[0.03]">
                    <span className="text-zinc-500">Video Codec</span>
                    <span className="font-semibold text-zinc-900">AV1 / VP9 / H.264 Simucast</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-zinc-500">Edge Gateway</span>
                    <span className="font-semibold text-emerald-600">Global Anycast DNS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Badges Row */}
          <div className="pt-12 mt-12 border-t border-black/[0.08]">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-semibold block mb-4">
              POWERED BY MODERN REAL-TIME PROTOCOLS
            </span>
            <div className="flex flex-wrap gap-3">
              {["WebRTC", "TypeScript", "Next.js", "React", "Node.js", "Go", "Docker", "AWS", "WebSockets", "Redis", "Tailwind CSS"].map((tech, i) => (
                <TechBadge key={i} name={tech} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WORKFLOW SECTION ─────────────────────────────────────── */}
      <section className="py-20 sm:py-28 border-b border-black/[0.08] bg-white">
        <div className="page-container max-w-6xl">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] font-semibold block mb-2">
              Workflow
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
              From Schedule to Automated Minutes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((ws, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-black/[0.08] bg-[#fbfbfd] space-y-3">
                <span className="text-xs font-mono text-zinc-400 font-bold block">{ws.step}</span>
                <h3 className="font-display text-base font-bold text-zinc-950">{ws.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">{ws.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. DEPLOYMENT CTA ───────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#fbfbfd]">
        <div className="page-container max-w-4xl text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] font-semibold block mb-3">
            Deploy MeetingX
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-950 tracking-tight mb-6">
            Host self-hosted video rooms or scale our managed cloud.
          </h2>
          <p className="text-base text-zinc-600 font-light max-w-xl mx-auto leading-relaxed mb-8">
            Available as a dedicated white-label platform or fully managed enterprise cluster with custom SLAs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?subject=MeetingX+Enterprise+Deployment"
              className="inline-flex items-center gap-2 bg-zinc-950 text-white hover:bg-zinc-800 text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-colors"
            >
              <span>Deploy for Organization</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border border-black/[0.12] bg-white hover:bg-black/[0.02] text-zinc-800 text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-colors"
            >
              <span>Explore All Products</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
