// app/board/[boardId]/page.tsx
"use client";

import { use } from "react";
import dynamic from "next/dynamic";

const Whiteboard = dynamic(() => import("@/components/Whiteboard"), {
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

  return (
    <main style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Whiteboard roomId={boardId} />
    </main>
  );
}