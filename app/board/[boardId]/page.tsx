// app/board/[boardId]/page.tsx
"use client";

import { use } from "react";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

interface BoardPageProps {
  params: Promise<{ boardId: string }>;
}

export default function BoardPage({ params }: BoardPageProps) {
  // Read board ID from dynamic URL
  const { boardId } = use(params);

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Board link copied! Anyone with this link can access this room.");
  };

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      {/* Top Action Bar */}
      <div 
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          zIndex: 1000,
          background: "white",
          padding: "8px 16px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          display: "flex",
          gap: "12px",
          alignItems: "center"
        }}
      >
        <span style={{ fontWeight: 600, fontSize: "14px" }}>Room ID: {boardId}</span>
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

      {/* Interactive Whiteboard Canvas */}
      <Tldraw />
    </div>
  );
}