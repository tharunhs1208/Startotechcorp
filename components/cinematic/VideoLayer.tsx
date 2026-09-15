"use client";

import React from "react";

interface VideoLayerProps {
  src: string;
  poster?: string;
  overlay?: "scrim" | "scrim-center" | "scrim-bottom" | "none";
  className?: string;
}

export default function VideoLayer({
  src,
  poster,
  overlay = "scrim",
  className = "",
}: VideoLayerProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        className="video-layer"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      {overlay !== "none" && <div className={overlay} />}
    </div>
  );
}