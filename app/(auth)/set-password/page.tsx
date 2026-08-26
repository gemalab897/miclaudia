"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    // Handle token from URL hash (Supabase invite flow)
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.slice(1));
      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");

      if (accessToken && refreshToken) {
        supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken })
          .then(({ error }) => {
            if (error) {
              setError("Invalid or expired invite link.");
            } else {
              setReady(true);
            }
          });
        return;
      }
    }

    // Check if already has a valid session (from callback redirect)
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setReady(true);
      } else {
        setError("Invalid or expired invite link. Please request a new one.");
      }
    });
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(165deg, #16144a 0%, #0d0c2b 50%, #08071e 100%)" }}
    >
      <div className="w-full max-w-sm px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4" style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.4)" }}>
            <span className="text-2xl">🧠</span>
          </div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            CBT Atlas
          </h1>
          <p className="text-purple-300 text-sm mt-1">Create your password</p>
        </div>

        {!ready && !error && (
          <p className="text-center text-purple-300 text-sm">Verifying invite link...</p>
        )}

        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        {ready && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-purple-200 mb-1">New password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="w-full px-4 py-3 rounded-xl text-white placeholder-purple-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                placeholder="Minimum 8 characters"
              />
            </div>
            <div>
              <label className="block text-sm text-purple-200 mb-1">Confirm password</label>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl text-white placeholder-purple-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-opacity disabled:opacity-60"
              style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
            >
              {loading ? "Saving..." : "Set password & enter"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
