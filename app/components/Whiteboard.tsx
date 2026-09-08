// components/Whiteboard.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

interface WhiteboardProps {
  boardId: string;
}

export default function Whiteboard({ boardId }: WhiteboardProps) {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      {/* persistenceKey saves data to localStorage bound to this specific room ID */}
      <Tldraw persistenceKey={`tldraw_board_${boardId}`} />
    </div>
  );
}