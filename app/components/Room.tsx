// components/Room.tsx
"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react";

export function Room({
  roomId,
  children,
}: {
  roomId: string;
  children: ReactNode;
}) {
  return (
    <LiveblocksProvider publicApiKey={process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY || ""}>
      <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={
          <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
            Connecting to shared room...
          </div>
        }>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}