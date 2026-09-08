// components/Whiteboard.tsx
"use client";

import { useEffect, useState } from "react";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

interface WhiteboardProps {
  boardId: string;
}

export default function Whiteboard({ boardId }: WhiteboardProps) {
  const [isMounted, setIsMounted] = useState(false);

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
          color: "#666"
        }}
      >
        Loading Whiteboard Canvas...
      </div>
    );
  }

  return (
    <div 
      style={{ 
        position: "fixed", 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw", 
        height: "100vh",
        zIndex: 1
      }}
    >
      <Tldraw persistenceKey={`tldraw_board_${boardId}`} />
    </div>
  );
}