// file: ui/AppbarClient.tsx
"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Appbar } from "./AppBar";

export function AppbarClient() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <Appbar
      onSignin={signIn}
      onSignout={async () => {
        await signOut();
        router.push("/api/auth/signin");
      }}
      user={session?.user}
    />
  );
}
