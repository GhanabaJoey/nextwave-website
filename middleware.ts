import { NextResponse, type NextRequest } from "next/server";
import { isAdminEmail } from "@/lib/auth/admin";
import { updateSupabaseSession } from "@/lib/supabase/middleware";
import { createServerClient } from "@supabase/ssr";

const ADMIN_LOGIN_PATH = "/admin/login";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAdminRoute = pathname.startsWith("/admin");
  const isAdminApiRoute = pathname.startsWith("/api/admin");
  const isLoginRoute =
    pathname === ADMIN_LOGIN_PATH || pathname === "/api/admin/auth/login";

  if (!isAdminRoute && !isAdminApiRoute) {
    return updateSupabaseSession(request);
  }

  if (isLoginRoute) {
    return updateSupabaseSession(request);
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    if (isAdminApiRoute) {
      return NextResponse.json(
        { error: "Admin authentication is not configured." },
        { status: 503 },
      );
    }

    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = ADMIN_LOGIN_PATH;
    loginUrl.searchParams.set("error", "config");
    return NextResponse.redirect(loginUrl);
  }

  let response = NextResponse.next({ request });

  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email || !isAdminEmail(user.email)) {
    if (isAdminApiRoute) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = ADMIN_LOGIN_PATH;
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*",
  ],
};
