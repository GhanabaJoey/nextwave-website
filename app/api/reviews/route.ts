import { NextResponse } from "next/server";
import { sendReviewNotificationEmail } from "@/lib/email/resend";
import { buildReviewDatabaseInsert } from "@/lib/reviews/constants";
import {
  isReviewHoneypotTriggered,
  validateReviewPayload,
  type ReviewRequestBody,
} from "@/lib/reviews/validate-review";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const SUCCESS_MESSAGE =
  "Thank you! Your review has been received and is awaiting approval.";

export async function POST(request: Request) {
  let body: ReviewRequestBody;

  try {
    body = (await request.json()) as ReviewRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid review data." }, { status: 400 });
  }

  if (isReviewHoneypotTriggered(body)) {
    return NextResponse.json({ message: SUCCESS_MESSAGE }, { status: 201 });
  }

  const validation = validateReviewPayload(body);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.message }, { status: 400 });
  }

  const profilePhoto =
    typeof body.profilePhoto === "string" ? body.profilePhoto : undefined;
  const hasProfilePhoto = Boolean(profilePhoto?.trim());

  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("reviews")
      .insert(buildReviewDatabaseInsert(validation.data))
      .select("created_at")
      .single();

    if (error || !data) {
      console.error("Review insert failed:", error?.code);
      return NextResponse.json(
        {
          error: "We couldn't submit your review right now. Please try again.",
        },
        { status: 500 },
      );
    }

    const emailSent = await sendReviewNotificationEmail({
      ...validation.data,
      created_at: data.created_at,
      has_profile_photo: hasProfilePhoto,
    });

    if (!emailSent) {
      console.error("Creator review notification email could not be sent.");
      return NextResponse.json(
        {
          error: "We couldn't submit your review right now. Please try again.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: SUCCESS_MESSAGE }, { status: 201 });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Supabase environment configuration is missing."
    ) {
      console.error("Supabase configuration is missing.");
    } else {
      console.error("Unexpected review submission error.");
    }

    return NextResponse.json(
      {
        error: "We couldn't submit your review right now. Please try again.",
      },
      { status: 500 },
    );
  }
}
