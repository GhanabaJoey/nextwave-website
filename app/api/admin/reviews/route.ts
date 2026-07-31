import { NextResponse } from "next/server";
import { getAuthenticatedAdmin } from "@/lib/auth/admin";
import { fetchAllReviews } from "@/lib/reviews/queries";

export async function GET() {
  const admin = await getAuthenticatedAdmin();

  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const reviews = await fetchAllReviews();
    return NextResponse.json({ reviews });
  } catch {
    return NextResponse.json(
      { error: "Failed to load reviews." },
      { status: 500 },
    );
  }
}
