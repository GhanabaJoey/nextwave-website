import {
  ENQUIRY_TYPE_LABELS,
  type ContactNotificationData,
} from "@/lib/contact/constants";
import { escapeHtml, formatMultilineHtml } from "@/lib/email/escape-html";

function formatSubmittedAt(isoDate: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(new Date(isoDate));
}

function renderRow(label: string, value: string, multiline = false): string {
  const content = multiline ? formatMultilineHtml(value) : escapeHtml(value);

  return `
    <tr>
      <td style="padding:12px 16px 4px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#5a7188;width:220px;vertical-align:top;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:12px 16px 4px;font-size:15px;line-height:1.6;color:#07111f;vertical-align:top;">
        ${content}
      </td>
    </tr>`;
}

export function buildContactNotificationHtml(
  enquiry: ContactNotificationData,
): string {
  const enquiryLabel = ENQUIRY_TYPE_LABELS[enquiry.enquiry_type];

  const rows = [
    renderRow("Name", enquiry.name),
    renderRow("Email", enquiry.email),
    renderRow("Enquiry Type", enquiryLabel),
    renderRow("Message", enquiry.message, true),
    renderRow("Submitted At", formatSubmittedAt(enquiry.created_at)),
  ];

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New NextWave Contact Enquiry</title>
  </head>
  <body style="margin:0;padding:0;background:#eef3f8;font-family:Arial,Helvetica,sans-serif;color:#07111f;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#eef3f8;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #d8e3ee;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background:#07111f;padding:28px 32px;border-bottom:4px solid #00aeef;">
                <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#5ccfff;">
                  NextWave Creator Network
                </p>
                <h1 style="margin:0;font-size:28px;line-height:1.2;font-weight:700;color:#ffffff;">
                  New Contact Enquiry
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 16px 24px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  ${rows.join("")}
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function getContactNotificationSubject(
  enquiry: ContactNotificationData,
): string {
  const enquiryLabel = ENQUIRY_TYPE_LABELS[enquiry.enquiry_type];
  return `New NextWave Contact Enquiry — ${enquiryLabel}`;
}
