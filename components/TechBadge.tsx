"use client";

import React from "react";
import {
  Code2,
  Cpu,
  Database,
  Shield,
  Smartphone,
  Boxes,
  GitBranch,
  Radio,
  Sparkles,
  Palette,
  Server,
  Cloud,
  Layers,
  Lock,
  Zap,
  Globe,
  Activity,
  Workflow
} from "lucide-react";

export function TechIcon({ name, className = "w-4 h-4" }: { name: string; className?: string }) {
  const n = name.toLowerCase().trim();

  // Next.js
  if (n.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="90" r="90" fill="#000000" />
        <path d="M149.5 159.2L68.6 54H54V126H66.2V70.7L139.7 165.6C143.1 163.7 146.4 161.6 149.5 159.2Z" fill="white" />
        <path d="M115 54H127.2V126H115V54Z" fill="white" />
      </svg>
    );
  }

  // React / React Native / React.js
  if (n.includes("react")) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
        <g stroke="#00d8ff" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // TypeScript
  if (n.includes("typescript") || n === "ts") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="16" fill="#3178C6" />
        <path d="M42 66.5V108H30V66.5H12V56H60V66.5H42Z" fill="white" />
        <path d="M72 101.5C75.2 105.8 81 109 88.5 109C96.5 109 101.5 105 101.5 98.5C101.5 83.5 69.5 89.5 69.5 69C69.5 59.5 77 53 88 53C95.5 53 101.5 55.5 106 59.5L100.5 68C97 65 92.5 63 88 63C82 63 78.5 65.5 78.5 69.5C78.5 83.5 110.5 78 110.5 98.5C110.5 109.5 101.5 118 88.5 118C79.5 118 70.5 113.5 66 107.5L72 101.5Z" fill="white" />
      </svg>
    );
  }

  // JavaScript
  if (n.includes("javascript") || n === "js") {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="16" fill="#F7DF1E" />
        <path d="M38.5 98C38.5 106 43.5 110 50.5 110C57.5 110 61.5 106.5 61.5 100V60H49.5V96.5C49.5 98.5 48.5 99.5 46.5 99.5C44.5 99.5 43.5 98.5 43.5 96.5V85H38.5V98ZM72.5 98C75.5 104.5 81.5 109 89 109C97 109 102 105 102 98.5C102 83.5 70 89.5 70 69C70 59.5 77.5 53 88.5 53C96 53 102 55.5 106.5 59.5L101 68C97.5 65 93 63 88.5 63C82.5 63 79 65.5 79 69.5C79 83.5 111 78 111 98.5C111 109.5 102 118 89 118C80 118 71 113.5 66.5 107.5L72.5 98Z" fill="#000000" />
      </svg>
    );
  }

  // Node.js
  if (n.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M128 0L240 64V192L128 256L16 192V64L128 0Z" fill="#339933" />
        <path d="M128 50L198 90V166L128 206L58 166V90L128 50Z" fill="white" />
      </svg>
    );
  }

  // Python
  if (n.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M63.5 12C41.8 12 43.2 21.4 43.2 21.4L43.3 31.1H64.2V34.2H35.3C23.9 34.2 14 42.6 14 63.8C14 85 24 84.7 24 84.7H31.7V73.4C31.7 60.5 42.6 60.5 42.6 60.5H63.6C74.6 60.5 74.5 49.9 74.5 49.9V21.4C74.5 21.4 75.3 12 63.5 12ZM54 22.8C56.6 22.8 58.7 24.9 58.7 27.5C58.7 30.1 56.6 32.2 54 32.2C51.4 32.2 49.3 30.1 49.3 27.5C49.3 24.9 51.4 22.8 54 22.8Z" fill="#3776AB" />
        <path d="M64.5 116C86.2 116 84.8 106.6 84.8 106.6L84.7 96.9H63.8V93.8H92.7C104.1 93.8 114 85.4 114 64.2C114 43 104 43.3 104 43.3H96.3V54.6C96.3 67.5 85.4 67.5 85.4 67.5H64.4C53.4 67.5 53.5 78.1 53.5 78.1V106.6C53.5 106.6 52.7 116 64.5 116ZM74 105.2C71.4 105.2 69.3 103.1 69.3 100.5C69.3 97.9 71.4 100.5 74 100.5C76.6 100.5 78.7 97.9 78.7 100.5C78.7 103.1 76.6 105.2 74 105.2Z" fill="#FFD43B" />
      </svg>
    );
  }

  // Tailwind CSS
  if (n.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#06B6D4" />
      </svg>
    );
  }

  // PostgreSQL
  if (n.includes("postgres") || n.includes("psql") || n === "sql") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z" fill="#4169E1" />
      </svg>
    );
  }

  // Prisma
  if (n.includes("prisma")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 19.5L12 2.5L21.5 19.5H2.5Z" stroke="#2D3748" strokeWidth="2" fill="#5A67D8" />
      </svg>
    );
  }

  // Supabase
  if (n.includes("supabase")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.8 2.2c-.4-.5-1.2-.2-1.2.5v9.1H3.8c-.8 0-1.2.9-.7 1.5l8.4 10c.4.5 1.2.2 1.2-.5v-9.1h7.8c.8 0 1.2-.9.7-1.5l-8.4-10z" fill="#3ECF8E" />
      </svg>
    );
  }

  // Docker
  if (n.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185z" fill="#2496ED" />
        <path d="M23.977 12.016c-.285-.205-.75-.3-1.396-.28-.103-.538-.38-.97-.831-1.295-.678-.49-1.63-.585-2.831-.282-.36.09-.705.234-1.025.424-.46-1.78-1.898-3.09-3.64-3.09h-.442v3.66h.442c.87 0 1.574.705 1.574 1.575v.234c-1.33.064-2.83.18-4.407.393H.222C.084 13.9.004 14.44.004 15c0 5.523 4.477 10 10 10 7.848 0 13.996-5.46 13.996-10 0-1.033-.284-2.03-.023-2.984z" fill="#2496ED" />
      </svg>
    );
  }

  // Figma
  if (n.includes("figma")) {
    return (
      <svg className={className} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    );
  }

  // AWS / Cloud / S3 / Lambda
  if (n.includes("aws") || n.includes("amazon") || n.includes("s3") || n.includes("lambda")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.7 13.8C18.1 13.3 17.2 13 16.1 13C14.7 13 13.7 13.5 13.1 14.4V13.2H11.5V20H13.1V16.3C13.1 15.3 13.8 14.6 14.8 14.6C15.8 14.6 16.4 15.3 16.4 16.3V20H18V15.7C18 14.9 18.2 14.2 18.7 13.8Z" fill="#FF9900" />
        <path d="M2.5 15.5C4.5 17.5 8.5 19.5 14 19.5C18.5 19.5 21.5 17.8 22.5 16.5C22.7 16.3 22.5 16 22.2 16.2C20.8 17.2 17.5 18.5 14 18.5C9.2 18.5 5.5 16.8 3.5 14.8C3.2 14.5 2.8 14.9 2.5 15.5Z" fill="#FF9900" />
      </svg>
    );
  }

  // PyTorch
  if (n.includes("pytorch")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 2.5C12.3 2.5 12.1 2.6 12 2.7L7.5 7.2C6.9 7.8 6.5 8.6 6.5 9.5C6.5 10.4 6.9 11.2 7.5 11.8L10 14.3V10.5C10 9.7 10.7 9 11.5 9C12.3 9 13 9.7 13 10.5V17.3L12 18.3C10.9 19.4 9.1 19.4 8 18.3L6.9 17.2C6.5 16.8 6 16.8 5.6 17.2C5.2 17.6 5.2 18.1 5.6 18.5L6.7 19.6C8.5 21.4 11.5 21.4 13.3 19.6L16.5 16.4C17.1 15.8 17.5 15 17.5 14.1C17.5 13.2 17.1 12.4 16.5 11.8L12.5 7.8V2.5Z" fill="#EE4C2C" />
      </svg>
    );
  }

  // OpenAI / LLM / GPT / Whisper / AI
  if (n.includes("openai") || n.includes("gpt") || n.includes("whisper") || n.includes("llm") || n.includes("ai")) {
    return <Sparkles className={`${className} text-[#10A37F]`} />;
  }

  // GraphQL
  if (n.includes("graphql")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L21.5 7.5V18.5L12 24L2.5 18.5V7.5L12 2Z" stroke="#E10098" strokeWidth="1.5" />
        <circle cx="12" cy="2" r="2" fill="#E10098" />
        <circle cx="21.5" cy="7.5" r="2" fill="#E10098" />
        <circle cx="21.5" cy="18.5" r="2" fill="#E10098" />
        <circle cx="12" cy="24" r="2" fill="#E10098" />
        <circle cx="2.5" cy="18.5" r="2" fill="#E10098" />
        <circle cx="2.5" cy="7.5" r="2" fill="#E10098" />
      </svg>
    );
  }

  // Redis
  if (n.includes("redis")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#DC382D" />
        <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="#A82820" />
        <path d="M2 12L12 17L22 12V7L12 12L2 7V12Z" fill="#DC382D" />
      </svg>
    );
  }

  // Kubernetes
  if (n.includes("kubernetes") || n.includes("k8s")) {
    return <Boxes className={`${className} text-[#326CE5]`} />;
  }

  // Rust
  if (n.includes("rust")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#CE412B" strokeWidth="2" />
        <path d="M10 8H14C15.1 8 16 8.9 16 10C16 11.1 15.1 12 14 12H10V8ZM10 12H13.5L16 16H13.5L11.5 12.5H10V16H8V8H10V12Z" fill="#CE412B" />
      </svg>
    );
  }

  // Go / Golang
  if (n.includes("golang") || n === "go") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12Z" fill="#00ADD8" />
        <path d="M13 8H6V16H13C15.2 16 17 14.2 17 12C17 9.8 15.2 8 13 8Z" fill="white" />
      </svg>
    );
  }

  // WebRTC / LiveKit / Audio / Video / Streaming
  if (n.includes("webrtc") || n.includes("livekit") || n.includes("sfu") || n.includes("stream") || n.includes("voice") || n.includes("audio") || n.includes("video")) {
    return <Radio className={`${className} text-[#0070F3]`} />;
  }

  // WebSockets / gRPC / Networking
  if (n.includes("websocket") || n.includes("grpc") || n.includes("socket") || n.includes("mesh")) {
    return <Zap className={`${className} text-[#F59E0B]`} />;
  }

  // Mobile / iOS / Android / Swift / Kotlin / Flutter
  if (n.includes("ios") || n.includes("swift") || n.includes("android") || n.includes("kotlin") || n.includes("flutter") || n.includes("mobile")) {
    return <Smartphone className={`${className} text-[#1D1D1F]`} />;
  }

  // Security / Auth / Vault / Pen Test / SSO / OAuth / RBAC
  if (n.includes("auth") || n.includes("security") || n.includes("vault") || n.includes("sso") || n.includes("rbac") || n.includes("jwt")) {
    return <Shield className={`${className} text-[#10B981]`} />;
  }

  // Design / Research / Wireframing / Figma / Tokens
  if (n.includes("design") || n.includes("prototype") || n.includes("wireframe") || n.includes("tokens")) {
    return <Palette className={`${className} text-[#8B5CF6]`} />;
  }

  // CI/CD / Git / GitHub / DevOps / Terraform
  if (n.includes("git") || n.includes("ci/cd") || n.includes("devops") || n.includes("pipeline") || n.includes("terraform")) {
    return <GitBranch className={`${className} text-[#F97316]`} />;
  }

  // Vector / Pinecone / LangChain / Data / Architecture
  if (n.includes("vector") || n.includes("pinecone") || n.includes("langchain") || n.includes("data") || n.includes("matrix")) {
    return <Cpu className={`${className} text-[#6366F1]`} />;
  }

  // Cloud / Vercel / Cloudflare
  if (n.includes("vercel") || n.includes("cloudflare") || n.includes("edge")) {
    return <Cloud className={`${className} text-[#000000]`} />;
  }

  // Fallback
  return <Code2 className={`${className} text-[#4B5563]`} />;
}

export default function TechBadge({
  name,
  className = "",
  variant = "pill",
}: {
  name: string;
  className?: string;
  variant?: "pill" | "subtle" | "dark" | "outline";
}) {
  if (variant === "subtle") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#f5f5f7] border border-black/[0.06] text-xs font-mono text-zinc-800 hover:border-black/20 transition-all ${className}`}
      >
        <TechIcon name={name} className="w-3.5 h-3.5 shrink-0" />
        <span>{name}</span>
      </span>
    );
  }

  if (variant === "dark") {
    return (
      <span
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200 shadow-xs hover:border-zinc-700 transition-all ${className}`}
      >
        <TechIcon name={name} className="w-3.5 h-3.5 shrink-0" />
        <span>{name}</span>
      </span>
    );
  }

  // Default pill style
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/[0.08] bg-white text-xs font-medium text-zinc-800 shadow-xs hover:border-black/[0.2] hover:shadow-sm transition-all ${className}`}
    >
      <TechIcon name={name} className="w-3.5 h-3.5 shrink-0" />
      <span>{name}</span>
    </span>
  );
}
