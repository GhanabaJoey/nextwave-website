import { escapeHtml } from "@/lib/email/escape-html";

export type ApplicantContinuationEmailData = {
  firstName: string;
  country: string;
  continuationLink: string;
};

export function getFirstName(fullName: string): string {
  const trimmed = fullName.trim();
  const [first] = trimmed.split(/\s+/);
  return first || trimmed;
}

export function buildApplicantContinuationEmailHtml({
  firstName,
  country,
  continuationLink,
}: ApplicantContinuationEmailData): string {
  const safeFirstName = escapeHtml(firstName);
  const safeCountry = escapeHtml(country);
  const safeLink = escapeHtml(continuationLink);
  const tagline = escapeHtml("Stream • Compete • Win • Grow");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your NextWave Application — Next Step</title>
  </head>
  <body style="margin:0;padding:0;background-color:#eef3f8;font-family:Arial,Helvetica,sans-serif;color:#07111f;">
    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#eef3f8;">
      <tr>
        <td align="center" style="padding:24px 16px;">
          <table width="600" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;max-width:600px;background-color:#ffffff;border:1px solid #d8e3ee;">
            <tr>
              <td bgcolor="#07111f" style="padding:24px 28px;background-color:#07111f;border-bottom:4px solid #00aeef;">
                <p style="margin:0 0 8px;font-size:12px;line-height:1.4;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#5ccfff;">
                  NextWave Creator Network
                </p>
                <p style="margin:0;font-size:28px;line-height:1.2;font-weight:700;color:#ffffff;">
                  Your Next Step
                </p>
              </td>
            </tr>
            <tr>
              <td bgcolor="#ffffff" style="padding:28px;background-color:#ffffff;font-size:16px;line-height:1.7;color:#334155;">
                <p style="margin:0 0 16px;color:#07111f;">Hi ${safeFirstName},</p>
                <p style="margin:0 0 16px;">Thank you for your interest in joining NextWave Creator Network.</p>
                <p style="margin:0 0 16px;">You selected <strong style="color:#07111f;">${safeCountry}</strong> as your market.</p>
                <p style="margin:0 0 20px;">To continue your application, use the official application link below.</p>
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0 0 20px;">
                  <tr>
                    <td align="left" bgcolor="#00aeef" style="background-color:#00aeef;">
                      <a href="${safeLink}" style="display:block;padding:14px 28px;font-size:15px;line-height:1.4;font-weight:700;color:#07111f;text-decoration:none;">
                        Continue Your Application &rarr;
                      </a>
                    </td>
                  </tr>
                </table>
                <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#5a7188;">Please make sure you continue using the same TikTok account you provided in your NextWave application.</p>
                <p style="margin:0;font-size:15px;line-height:1.6;color:#07111f;font-weight:700;">NextWave Creator Network</p>
                <p style="margin:8px 0 0;font-size:12px;line-height:1.5;color:#00aeef;font-weight:700;">${tagline}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
