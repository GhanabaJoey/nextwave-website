import { NextResponse } from "next/server";
import { getAuthenticatedAdmin } from "@/lib/auth/admin";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import {
  getStatusUpdateForAction,
  isValidAdminReviewAction,
  validateAdminReviewEdit,
} from "@/lib/reviews/admin";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(request: Request, context: RouteContext) {
  const admin = await getAuthenticatedAdmin();

  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await context.params;

  if (!id) {
    return NextResponse.json({ error: "Review ID is required." }, { status: 400 });
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidAdminReviewAction(body)) {
    return NextResponse.json({ error: "Invalid action." }, { status: 400 });
  }

  const supabase = createSupabaseAdminClient();

  if (body.action === "approve" || body.action === "reject") {
    const { data, error } = await supabase
      .from("reviews")
      .update({
        status: getStatusUpdateForAction(body.action),
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select(
        "id, name, tiktok_username, email, region, rating, review, status, featured, created_at, updated_at",
      )
      .single();

    if (error || !data) {
      console.error("Review status update failed:", error?.code);
      return NextResponse.json(
        { error: "Failed to update review status." },
        { status: 500 },
      );
    }

    return NextResponse.json({ review: data });
  }

  if (body.action === "toggle_featured") {
    const { data: current, error: fetchError } = await supabase
      .from("reviews")
      .select("featured")
      .eq("id", id)
      .single();

    if (fetchError || !current) {
      console.error("Review fetch failed:", fetchError?.code);
      return NextResponse.json({ error: "Review not found." }, { status: 404 });
    }

    const { data, error } = await supabase
      .from("reviews")
      .update({
        featured: !current.featured,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select(
        "id, name, tiktok_username, email, region, rating, review, status, featured, created_at, updated_at",
      )
      .single();

    if (error || !data) {
      console.error("Review featured toggle failed:", error?.code);
      return NextResponse.json(
        { error: "Failed to update featured state." },
        { status: 500 },
      );
    }

    return NextResponse.json({ review: data });
  }

  const validation = validateAdminReviewEdit(body.data);

  if (!validation.ok) {
    return NextResponse.json({ error: validation.message }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("reviews")
    .update({
      ...validation.data,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select(
      "id, name, tiktok_username, email, region, rating, review, status, featured, created_at, updated_at",
    )
    .single();

  if (error || !data) {
    console.error("Review edit failed:", error?.code);
    return NextResponse.json(
      { error: "Failed to update review." },
      { status: 500 },
    );
  }

  return NextResponse.json({ review: data });
}
