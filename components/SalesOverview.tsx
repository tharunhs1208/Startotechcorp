"use client";

import { MoreHorizontal } from "lucide-react";

export default function SalesOverview() {
  const total = 12
  const filledCount = Math.round(0.708 * total)
  const cx = 100, cy = 105, r = 82

  const segments = Array.from({ length: total }, (_, i) => {
    const t1 = Math.PI + (i / total) * Math.PI
    const t2 = Math.PI + ((i + 0.82) / total) * Math.PI
    const x1 = cx + r * Math.cos(t1)
    const y1 = cy + r * Math.sin(t1)
    const x2 = cx + r * Math.cos(t2)
    const y2 = cy + r * Math.sin(t2)
    const filled = i < filledCount
    return { d: `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`, filled, late: i >= filledCount - 2 }
  })

  return (
    <div style={{
    width: "100%",
    maxWidth: "250px",
    height: "275px",
      background: "#fff",
      borderRadius: "16px",
      border: "1px solid #F1F5F9",
      boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
      padding: "18px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      gap: "14px",
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "15px", fontWeight: 600, color: "#0f172a" }}>Sales Overview</span>
        <span style={{ fontSize: "18px", color: "#94a3b8", letterSpacing: "2px" }}>···</span>
      </div>

      {/* Gauge */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
        <svg width="200" height="120" viewBox="0 0 200 120">
          {segments.map((seg, i) => (
            <path
  key={i}
  d={seg.d}
  fill="none"
  stroke={seg.filled ? (seg.late ? "#2563eb" : "#2563eb") : "#e2e8f0"}
  strokeWidth="13"
  strokeLinecap="round"
  style={{
    strokeDasharray: 100,
  strokeDashoffset: 100,
  animation: seg.filled
    ? `gaugeFill 5s cubic-bezier(0.22, 1, 0.36, 1) forwards ${i * 0.15}s`
    : "none",
  }}
/>
          ))}
        </svg>
        <div style={{ position: "absolute", bottom: 8, textAlign: "center" }}>
          <div style={{ fontSize: "22px", fontWeight: 600, color: "#0f172a" }}>70.8%</div>
          <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>Sales Growth</div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        {[
          { label: "Number of Sales", value: "2,343", badge: "4.6%" },
          { label: "Total Revenue", value: "$30.9k", badge: "4.5%" },
        ].map((item) => (
          <div key={item.label} style={{ background: "#f8fafc", borderRadius: "6px", padding: "10px 12px" }}>
            <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "6px" }}>{item.label}</div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "16px", fontWeight: 600, color: "#0f172a" }}>{item.value}</span>
              <span style={{ fontSize: "10px", fontWeight: 600, background: "#dbeafe", color: "#1d4ed8", borderRadius: "4px", padding: "2px 5px" }}>
                {item.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}