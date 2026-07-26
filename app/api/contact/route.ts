import { NextResponse } from "next/server";
import {
  isContactHoneypotTriggered,
  validateContactPayload,
  type ContactRequestBody,
} from "@/lib/contact/validate-contact";
import { sendContactNotificationEmail } from "@/lib/email/resend";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const SUCCESS_MESSAGE =
  "Message received. Thank you for contacting NextWave Creator Network.";

export async function POST(request: Request) {
  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid enquiry data." }, { status: 400 });
  }

  if (isContactHoneypotTriggered(body)) {
    return NextResponse.json({ message: SUCCESS_MESSAGE }, { status: 201 });
  }

  const validation = validateContactPayload(body);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.message }, { status: 400 });
  }

  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("contact_enquiries")
      .insert(validation.data)
      .select("created_at")
      .single();

    if (error || !data) {
      console.error("Contact enquiry insert failed:", error?.code);
      return NextResponse.json(
        {
          error: "We couldn't send your message right now. Please try again.",
        },
        { status: 500 },
      );
    }

    const emailSent = await sendContactNotificationEmail({
      ...validation.data,
      created_at: data.created_at,
    });

    if (!emailSent) {
      console.error(
        "Contact enquiry stored but notification email could not be sent.",
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
      console.error("Unexpected contact submission error.");
    }

    return NextResponse.json(
      {
        error: "We couldn't send your message right now. Please try again.",
      },
      { status: 500 },
    );
  }
}
