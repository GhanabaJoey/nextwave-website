import { createSupabaseServerClient } from "@/lib/supabase/server";

function getAdminEmails(): Set<string> {
  const raw = process.env.ADMIN_EMAILS?.trim();

  if (!raw) {
    return new Set();
  }

  return new Set(
    raw
      .split(",")
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean),
  );
}

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return getAdminEmails().has(email.trim().toLowerCase());
}

export async function getAuthenticatedAdmin() {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user?.email || !isAdminEmail(user.email)) {
      return null;
    }

    return user;
  } catch {
    return null;
  }
}
