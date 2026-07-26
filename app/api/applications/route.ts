import { NextResponse } from "next/server";
import {
  isHoneypotTriggered,
  validateApplicationPayload,
  type ApplicationRequestBody,
} from "@/lib/applications/validate-application";
import { sendApplicationNotificationEmail, sendApplicantContinuationEmail } from "@/lib/email/resend";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const SUCCESS_MESSAGE =
  "Application received. Thank you for applying to NextWave Creator Network.";

export async function POST(request: Request) {
  let body: ApplicationRequestBody;

  try {
    body = (await request.json()) as ApplicationRequestBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid application data." },
      { status: 400 },
    );
  }

  if (isHoneypotTriggered(body)) {
    return NextResponse.json({ message: SUCCESS_MESSAGE }, { status: 201 });
  }

  const validation = validateApplicationPayload(body);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.message }, { status: 400 });
  }

  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("creator_applications")
      .insert(validation.data)
      .select("created_at")
      .single();

    if (error || !data) {
      console.error("Application insert failed:", error?.code);
      return NextResponse.json(
        {
          error:
            "We couldn't submit your application right now. Please try again.",
        },
        { status: 500 },
      );
    }

    const applicationRecord = {
      ...validation.data,
      created_at: data.created_at,
    };

    const internalEmailSent =
      await sendApplicationNotificationEmail(applicationRecord);

    if (!internalEmailSent) {
      console.error(
        "Application stored but internal notification email could not be sent.",
      );
    }

    const applicantEmailSent =
      await sendApplicantContinuationEmail(validation.data);

    if (!applicantEmailSent) {
      console.error(
        "Application stored but applicant continuation email could not be sent.",
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
      console.error("Unexpected application submission error.");
    }

    return NextResponse.json(
      {
        error:
          "We couldn't submit your application right now. Please try again.",
      },
      { status: 500 },
    );
  }
}
