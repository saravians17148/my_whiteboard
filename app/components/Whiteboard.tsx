// components/Whiteboard.tsx
"use client";

import { useSyncDemo } from "@tldraw/sync";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

interface WhiteboardProps {
  roomId: string;
}

export default function Whiteboard({ roomId }: WhiteboardProps) {
  // Automatically creates a shared real-time multiplayer room
  const store = useSyncDemo({ roomId });

  return (
    <div style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh" }}>
      <Tldraw store={store} />
    </div>
  );
}