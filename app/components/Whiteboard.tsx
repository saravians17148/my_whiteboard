// components/Whiteboard.tsx
"use client";

import { useEffect, useState } from "react";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

export default function Whiteboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ display: "flex", height: "100vh", width: "100vw", alignItems: "center", justifyContent: "center" }}>
        Loading Whiteboard...
      </div>
    );
  }

  return (
    <div style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh" }}>
      <Tldraw />
    </div>
  );
}