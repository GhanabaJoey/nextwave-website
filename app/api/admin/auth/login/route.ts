import { NextResponse } from "next/server";
import { isAdminEmail } from "@/lib/auth/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  let body: { email?: unknown; password?: unknown };

  try {
    body = (await request.json()) as { email?: unknown; password?: unknown };
  } catch {
    return NextResponse.json({ error: "Invalid login data." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required." },
      { status: 400 },
    );
  }

  if (!isAdminEmail(email)) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Admin authentication is not configured." },
      { status: 503 },
    );
  }
}
