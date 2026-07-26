import { Resend } from "resend";
import {
  getApplicationContinuationLink,
  isValidContinuationLink,
} from "@/lib/email/application-continuation-links";
import {
  buildApplicantContinuationEmailHtml,
  getFirstName,
} from "@/lib/email/applicant-continuation-email";
import type { ContactNotificationData } from "@/lib/contact/constants";
import {
  buildApplicationNotificationHtml,
  type ApplicationNotificationData,
} from "@/lib/email/application-notification-email";
import {
  buildContactNotificationHtml,
  getContactNotificationSubject,
} from "@/lib/email/contact-notification-email";
import type { CreatorApplicationInsert } from "@/lib/applications/constants";

const FROM_ADDRESS = "NextWave Creator Network <applications@nextwavecreatornetwork.com>";

function getResendApiKey(): string | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  return apiKey || null;
}

export async function sendApplicationNotificationEmail(
  application: ApplicationNotificationData,
): Promise<boolean> {
  const apiKey = getResendApiKey();
  const recipient = process.env.APPLICATION_NOTIFICATION_EMAIL?.trim();

  if (!apiKey || !recipient) {
    console.error("Application notification email configuration is missing.");
    return false;
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: recipient,
    replyTo: application.email,
    subject: `New NextWave Creator Application — ${application.full_name}`,
    html: buildApplicationNotificationHtml(application),
  });

  if (error) {
    console.error("Application notification email failed.");
    return false;
  }

  return true;
}

export async function sendApplicantContinuationEmail(
  application: CreatorApplicationInsert,
): Promise<boolean> {
  const apiKey = getResendApiKey();

  if (!apiKey) {
    console.error("Applicant continuation email configuration is missing.");
    return false;
  }

  const continuationLink = getApplicationContinuationLink(application.country);

  if (!continuationLink || !isValidContinuationLink(continuationLink)) {
    console.error("Applicant continuation link configuration is missing.");
    return false;
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: application.email,
    subject: "Your NextWave Application — Next Step",
    html: buildApplicantContinuationEmailHtml({
      firstName: getFirstName(application.full_name),
      country: application.country,
      continuationLink,
    }),
  });

  if (error) {
    console.error("Applicant continuation email failed.");
    return false;
  }

  return true;
}

export async function sendContactNotificationEmail(
  enquiry: ContactNotificationData,
): Promise<boolean> {
  const apiKey = getResendApiKey();
  const recipient = process.env.APPLICATION_NOTIFICATION_EMAIL?.trim();

  if (!apiKey || !recipient) {
    console.error("Contact notification email configuration is missing.");
    return false;
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: recipient,
    replyTo: enquiry.email,
    subject: getContactNotificationSubject(enquiry),
    html: buildContactNotificationHtml(enquiry),
  });

  if (error) {
    console.error("Contact notification email failed.");
    return false;
  }

  return true;
}
