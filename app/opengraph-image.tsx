import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "StratoTech — Engineering & Software Studio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(0, 0, 0, 0.04) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0, 0, 0, 0.04) 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          padding: "70px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              backgroundColor: "#111111",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            ST
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
            <span style={{ fontSize: "28px", fontWeight: 700, color: "#111111", letterSpacing: "-0.03em" }}>
              Strato
            </span>
            <span style={{ fontSize: "28px", fontWeight: 700, color: "#111111", letterSpacing: "-0.03em" }}>
              Tech
            </span>
          </div>
        </div>

        {/* Main Display Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <div
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#86868b",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            STRATEGIC TECHNOLOGY &amp; DIGITAL ENGINEERING
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#111111",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
            }}
          >
            Software designed around the way you work.
          </div>
          <div
            style={{
              fontSize: "22px",
              fontWeight: 400,
              color: "#6e6e73",
              lineHeight: 1.4,
            }}
          >
            Full-stack engineering, voice AI agents, and bespoke product design systems.
          </div>
        </div>

        {/* Footer Meta Row */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(0, 0, 0, 0.08)",
            paddingTop: "24px",
            fontSize: "16px",
            color: "#86868b",
          }}
        >
          <span>stratotechcorp.in</span>
          <span style={{ color: "#111111", fontWeight: 600 }}>Bengaluru, India</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
