// components/Whiteboard.tsx
"use client";

import { useEffect, useState } from "react";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

export default function Whiteboard() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Ensures rendering happens strictly on the browser DOM after hydration
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-gray-50 text-gray-500">
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