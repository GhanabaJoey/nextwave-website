import type { CreatorApplicationInsert } from "@/lib/applications/constants";
import { escapeHtml, formatMultilineHtml } from "@/lib/email/escape-html";

const LIVE_STATUS_LABELS: Record<string, string> = {
  yes: "Yes",
  no: "No",
  preparing: "I'm preparing to start",
};

const FOLLOWER_RANGE_LABELS: Record<string, string> = {
  "under-1k": "Under 1,000",
  "1k-5k": "1,000–5,000",
  "5k-10k": "5,000–10,000",
  "10k-50k": "10,000–50,000",
  "50k-plus": "50,000+",
};

const LIVE_FREQUENCY_LABELS: Record<string, string> = {
  "not-currently": "Not currently",
  occasionally: "Occasionally",
  "1-2": "1–2 days per week",
  "3-4": "3–4 days per week",
  "5-plus": "5+ days per week",
};

const DEVELOPMENT_GOAL_LABELS: Record<string, string> = {
  "live-confidence": "LIVE confidence",
  "audience-engagement": "Audience engagement",
  consistency: "Consistency",
  "content-strategy": "Content strategy",
  "creator-community": "Creator community",
  "live-battles": "LIVE battles / competitive LIVE",
  other: "Other",
};

function labelFromMap(value: string, map: Record<string, string>): string {
  return map[value] ?? value;
}

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

function renderUrlRow(label: string, url: string): string {
  const safeUrl = escapeHtml(url);
  return `
    <tr>
      <td style="padding:12px 16px 4px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#5a7188;width:220px;vertical-align:top;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:12px 16px 4px;font-size:15px;line-height:1.6;color:#07111f;vertical-align:top;">
        <a href="${safeUrl}" style="color:#00aeef;text-decoration:none;">${safeUrl}</a>
      </td>
    </tr>`;
}

export type ApplicationNotificationData = CreatorApplicationInsert & {
  created_at: string;
};

export function buildApplicationNotificationHtml(
  application: ApplicationNotificationData,
): string {
  const rows = [
    renderRow("Full Name", application.full_name),
    renderRow("Email", application.email),
    renderRow("Country / Market", application.country),
    renderRow("TikTok Username", application.tiktok_username),
  ];

  if (application.tiktok_profile_url) {
    rows.push(
      renderUrlRow("TikTok Profile URL", application.tiktok_profile_url),
    );
  }

  if (application.follower_range) {
    rows.push(
      renderRow(
        "Follower Range",
        labelFromMap(application.follower_range, FOLLOWER_RANGE_LABELS),
      ),
    );
  }

  rows.push(
    renderRow(
      "LIVE Status",
      labelFromMap(application.live_status, LIVE_STATUS_LABELS),
    ),
  );

  if (application.live_frequency) {
    rows.push(
      renderRow(
        "LIVE Frequency",
        labelFromMap(application.live_frequency, LIVE_FREQUENCY_LABELS),
      ),
    );
  }

  if (application.development_goal) {
    rows.push(
      renderRow(
        "Development Goal",
        labelFromMap(application.development_goal, DEVELOPMENT_GOAL_LABELS),
      ),
    );
  }

  rows.push(
    renderRow("Why NextWave / Motivation", application.motivation, true),
  );

  if (application.additional_info) {
    rows.push(
      renderRow("Additional Information", application.additional_info, true),
    );
  }

  rows.push(
    renderRow("Submitted At", formatSubmittedAt(application.created_at)),
  );

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New NextWave Creator Application</title>
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
                  New Creator Application
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
