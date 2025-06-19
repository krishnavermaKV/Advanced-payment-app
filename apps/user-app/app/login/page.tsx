"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      phone,
      password,
    });

    if (result?.ok) {
      router.push("/dashboard"); // or wherever you want to redirect after login
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: "auto", paddingTop: 50 }}>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="98971*****"
          required
        />
      </div>

      <div style={{ marginTop: 12 }}>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" style={{ marginTop: 20 }}>
        Log In
      </button>
    </form>
  );
}
