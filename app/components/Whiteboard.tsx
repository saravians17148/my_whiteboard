// components/Whiteboard.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

export default function Whiteboard() {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Flag mounting only after DOM layout phase completes
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div 
        style={{ 
          display: "flex", 
          height: "100vh", 
          width: "100vw", 
          alignItems: "center", 
          justifyContent: "center", 
          background: "#f8f9fa",
          color: "#666",
          fontFamily: "sans-serif"
        }}
      >
        Initializing Canvas Engine...
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      style={{ 
        position: "fixed", 
        inset: 0, 
        width: "100vw", 
        height: "100vh",
        overflow: "hidden" 
      }}
    >
      <Tldraw key="tldraw-persistent-instance" />
    </div>
  );
}