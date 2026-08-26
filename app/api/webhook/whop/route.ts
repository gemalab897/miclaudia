import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

// Verify Whop webhook signature using HMAC-SHA256
async function verifySignature(body: string, signature: string, secret: string): Promise<boolean> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"]
  );
  const sigBytes = hexToBytes(signature.replace("sha256=", ""));
  return crypto.subtle.verify("HMAC", key, sigBytes.buffer as ArrayBuffer, encoder.encode(body));
}

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  return bytes;
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("whop-signature") ?? "";
  const secret = process.env.WHOP_WEBHOOK_SECRET ?? "";

  // Verify signature if secret is configured
  if (secret) {
    const valid = await verifySignature(body, signature, secret);
    if (!valid) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }
  }

  let event: { action: string; data: Record<string, unknown> };
  try {
    event = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Only handle new membership / payment events
  if (event.action !== "membership.went_valid") {
    return NextResponse.json({ received: true });
  }

  const membership = event.data as {
    user?: { email?: string; name?: string };
    email?: string;
  };

  const email = membership.user?.email ?? (membership.email as string | undefined);
  if (!email) {
    return NextResponse.json({ error: "No email in payload" }, { status: 400 });
  }

  const supabase = createAdminClient();

  // Create user (idempotent — if they already exist this won't error)
  const { data: existingUsers } = await supabase
    .from("auth.users")
    .select("id")
    .eq("email", email)
    .limit(1);

  if (existingUsers && existingUsers.length > 0) {
    // User already has an account — nothing to do
    return NextResponse.json({ received: true, status: "existing_user" });
  }

  const { error } = await supabase.auth.admin.inviteUserByEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_APP_URL ?? "https://cbtatlasen.vercel.app"}/api/auth/callback`,
    data: {
      name: membership.user?.name ?? "",
      source: "whop",
    },
  });

  if (error) {
    console.error("[whop webhook] invite error", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ received: true, status: "invited" });
}
