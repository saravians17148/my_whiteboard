// app/board/[boardId]/page.tsx
"use client";

import { use } from "react";
import dynamic from "next/dynamic";

// Dynamically import the custom Whiteboard component without SSR
const Whiteboard = dynamic(() => import("../../components/Whiteboard"), {
  ssr: false,
  loading: () => (
    <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
      Loading Canvas...
    </div>
  ),
});

interface BoardPageProps {
  params: Promise<{ boardId: string }>;
}

export default function BoardPage({ params }: BoardPageProps) {
  const { boardId } = use(params);

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Board link copied! Anyone with this link can access this room.");
  };

  return (
    <main style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* Top Floating Control Bar */}
      <div 
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          zIndex: 9999,
          background: "white",
          padding: "8px 16px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          display: "flex",
          gap: "12px",
          alignItems: "center"
        }}
      >
        <span style={{ fontWeight: 600, fontSize: "14px", color: "#333" }}>
          Room ID: {boardId}
        </span>
        <button
          onClick={copyShareLink}
          style={{
            padding: "6px 12px",
            background: "#0066FF",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: 500
          }}
        >
          Copy Share Link
        </button>
      </div>

      {/* Render Isolate Canvas Wrapper */}
      <Whiteboard />
    </main>
  );
}