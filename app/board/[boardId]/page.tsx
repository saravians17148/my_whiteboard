// app/board/[boardId]/page.tsx
"use client";

import { use, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "tldraw/tldraw.css";

// Dynamically import Tldraw without SSR
const Tldraw = dynamic(
  async () => (await import("tldraw")).Tldraw,
  { 
    ssr: false,
    loading: () => (
      <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
        Loading Whiteboard...
      </div>
    )
  }
);

interface BoardPageProps {
  params: Promise<{ boardId: string }>;
}

export default function BoardPage({ params }: BoardPageProps) {
  const { boardId } = use(params);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Board link copied! Anyone with this link can access this room.");
  };

  if (!isMounted) return null;

  return (
    <div 
      style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100vw", 
        height: "100vh", 
        overflow: "hidden" 
      }}
    >
      {/* Top Bar Navigation */}
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

      {/* Tldraw Engine Canvas */}
      <Tldraw />
    </div>
  );
}