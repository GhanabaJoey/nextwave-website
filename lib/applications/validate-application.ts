import {
  ALLOWED_DEVELOPMENT_GOALS,
  ALLOWED_FOLLOWER_RANGES,
  ALLOWED_LIVE_FREQUENCY,
  ALLOWED_LIVE_STATUS,
  COUNTRY_VALUE_MAP,
  FIELD_MAX_LENGTHS,
  type CreatorApplicationInsert,
} from "@/lib/applications/constants";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ApplicationRequestBody = {
  fullName?: unknown;
  email?: unknown;
  country?: unknown;
  tiktokUsername?: unknown;
  tiktokProfileUrl?: unknown;
  followerRange?: unknown;
  liveStatus?: unknown;
  liveFrequency?: unknown;
  developmentGoal?: unknown;
  whyNextwave?: unknown;
  additionalInfo?: unknown;
  website?: unknown;
};

function readOptionalString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function readRequiredString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function isValidHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function optionalEnumOrNull(
  value: string,
  allowed: readonly string[],
): string | null {
  if (!value) return null;
  return allowed.includes(value) ? value : null;
}

export type ApplicationValidationResult =
  | { ok: true; data: CreatorApplicationInsert }
  | { ok: false; message: string };

export function validateApplicationPayload(
  body: ApplicationRequestBody,
): ApplicationValidationResult {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, message: "Invalid application data." };
  }

  const fullName = readRequiredString(body.fullName);
  const email = readRequiredString(body.email);
  const countryInput = readRequiredString(body.country);
  const tiktokUsername = readRequiredString(body.tiktokUsername);
  const liveStatus = readRequiredString(body.liveStatus);
  const motivation = readRequiredString(body.whyNextwave);

  if (!fullName) {
    return { ok: false, message: "Please enter your full name." };
  }
  if (fullName.length > FIELD_MAX_LENGTHS.fullName) {
    return { ok: false, message: "Full name is too long." };
  }

  if (!email) {
    return { ok: false, message: "Please enter your email address." };
  }
  if (email.length > FIELD_MAX_LENGTHS.email || !EMAIL_PATTERN.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (!countryInput || !(countryInput in COUNTRY_VALUE_MAP)) {
    return { ok: false, message: "Please select a supported country / market." };
  }

  if (!tiktokUsername) {
    return { ok: false, message: "Please enter your TikTok username." };
  }
  if (tiktokUsername.length > FIELD_MAX_LENGTHS.tiktokUsername) {
    return { ok: false, message: "TikTok username is too long." };
  }

  if (!liveStatus || !ALLOWED_LIVE_STATUS.includes(liveStatus as never)) {
    return { ok: false, message: "Please select your current LIVE status." };
  }

  if (!motivation) {
    return {
      ok: false,
      message: "Please tell us why you'd like to join NextWave.",
    };
  }
  if (motivation.length > FIELD_MAX_LENGTHS.motivation) {
    return { ok: false, message: "Your motivation response is too long." };
  }

  const tiktokProfileUrlRaw = readOptionalString(body.tiktokProfileUrl);
  let tiktokProfileUrl: string | null = null;
  if (tiktokProfileUrlRaw) {
    if (
      tiktokProfileUrlRaw.length > FIELD_MAX_LENGTHS.tiktokProfileUrl ||
      !isValidHttpUrl(tiktokProfileUrlRaw)
    ) {
      return {
        ok: false,
        message: "Please enter a valid URL (including https://).",
      };
    }
    tiktokProfileUrl = tiktokProfileUrlRaw;
  }

  const followerRangeRaw = readOptionalString(body.followerRange);
  const followerRange = optionalEnumOrNull(
    followerRangeRaw,
    ALLOWED_FOLLOWER_RANGES,
  );
  if (followerRangeRaw && !followerRange) {
    return { ok: false, message: "Invalid follower range selection." };
  }

  const liveFrequencyRaw = readOptionalString(body.liveFrequency);
  const liveFrequency = optionalEnumOrNull(
    liveFrequencyRaw,
    ALLOWED_LIVE_FREQUENCY,
  );
  if (liveFrequencyRaw && !liveFrequency) {
    return { ok: false, message: "Invalid LIVE frequency selection." };
  }

  const developmentGoalRaw = readOptionalString(body.developmentGoal);
  const developmentGoal = optionalEnumOrNull(
    developmentGoalRaw,
    ALLOWED_DEVELOPMENT_GOALS,
  );
  if (developmentGoalRaw && !developmentGoal) {
    return { ok: false, message: "Invalid development goal selection." };
  }

  const additionalInfoRaw = readOptionalString(body.additionalInfo);
  if (additionalInfoRaw.length > FIELD_MAX_LENGTHS.additionalInfo) {
    return { ok: false, message: "Additional information is too long." };
  }

  return {
    ok: true,
    data: {
      full_name: fullName,
      email: email.toLowerCase(),
      country: COUNTRY_VALUE_MAP[countryInput],
      tiktok_username: tiktokUsername,
      tiktok_profile_url: tiktokProfileUrl,
      follower_range: followerRange,
      live_status: liveStatus,
      live_frequency: liveFrequency,
      development_goal: developmentGoal,
      motivation,
      additional_info: additionalInfoRaw || null,
    },
  };
}

export function isHoneypotTriggered(body: ApplicationRequestBody): boolean {
  return readOptionalString(body.website).length > 0;
}
