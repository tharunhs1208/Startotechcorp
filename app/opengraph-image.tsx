import { ImageResponse } from "next/og";

export const alt = "StratoTechCorp — Digital Products & Technology Solutions";
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
          background: "#0a0b0e",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          color: "#ffffff",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0a0b0e",
                fontWeight: 900,
                fontSize: "24px",
              }}
            >
              S
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#ffffff",
                }}
              >
                StratoTechCorp
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontFamily: "monospace",
                  color: "#71717a",
                  letterSpacing: "0.1em",
                }}
              >
                PRODUCT STUDIO &amp; LABS
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              background: "rgba(255, 255, 255, 0.05)",
              fontSize: "13px",
              fontFamily: "monospace",
              color: "#a1a1aa",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "999px",
                background: "#0070f3",
              }}
            />
            <span>2026 RELEASES ACTIVE</span>
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <h1
            style={{
              fontSize: "58px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              margin: 0,
              color: "#ffffff",
            }}
          >
            Digital products engineered with restraint.
          </h1>
          <p
            style={{
              fontSize: "24px",
              fontWeight: 300,
              lineHeight: 1.4,
              color: "#a1a1aa",
              margin: 0,
              maxWidth: "900px",
            }}
          >
            Designing and building enterprise platforms, voice AI agents, and high-performance communication systems.
          </p>
        </div>

        {/* Bottom Product Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "32px",
          }}
        >
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            {["SalesX", "Zobay", "MeetingX", "StartOne", "BaseOne", "LegalX"].map((name) => (
              <span
                key={name}
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#d4d4d8",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  background: "rgba(255, 255, 255, 0.06)",
                }}
              >
                {name}
              </span>
            ))}
          </div>

          <span
            style={{
              fontSize: "14px",
              fontFamily: "monospace",
              color: "#71717a",
            }}
          >
            stratotechcorp.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
