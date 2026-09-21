"use client";

import React from "react";
import dynamic from "next/dynamic";

const CommandPalette = dynamic(() => import("@/components/CommandPalette"), {
  ssr: false,
});

const AIAssistant = dynamic(() => import("@/components/AIAssistant"), {
  ssr: false,
});

export default function ClientOverlays() {
  return (
    <>
      <CommandPalette />
      <AIAssistant />
    </>
  );
}
