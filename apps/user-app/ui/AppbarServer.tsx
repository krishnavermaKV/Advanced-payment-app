// file: ui/AppbarServer.tsx
"use client"; // mark it as a client component

import { SessionProvider } from "next-auth/react";
import { AppbarClient } from "./AppbarClient";

export default function AppbarServer() {
  return (
    <SessionProvider>
      <AppbarClient />
    </SessionProvider>
  );
}
