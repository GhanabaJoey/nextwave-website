import {
  ALLOWED_REVIEW_COUNTRIES,
  REVIEW_FIELD_MAX_LENGTHS,
  type CreatorReviewInsert,
  type ReviewCountry,
} from "@/lib/reviews/constants";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TIKTOK_USERNAME_PATTERN = /^@?[a-zA-Z0-9._]{2,24}$/;

export type ReviewRequestBody = {
  fullName?: unknown;
  tiktokUsername?: unknown;
  country?: unknown;
  email?: unknown;
  rating?: unknown;
  review?: unknown;
  genuineConfirmation?: unknown;
  profilePhoto?: unknown;
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

function readRating(value: unknown): number | null {
  if (typeof value === "number" && Number.isInteger(value)) {
    return value >= 1 && value <= 5 ? value : null;
  }
  if (typeof value === "string") {
    const parsed = Number.parseInt(value, 10);
    return Number.isInteger(parsed) && parsed >= 1 && parsed <= 5
      ? parsed
      : null;
  }
  return null;
}

export type ReviewValidationResult =
  | { ok: true; data: CreatorReviewInsert }
  | { ok: false; message: string };

export function validateReviewPayload(
  body: ReviewRequestBody,
): ReviewValidationResult {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, message: "Invalid review data." };
  }

  const fullName = readRequiredString(body.fullName);
  const tiktokUsername = readRequiredString(body.tiktokUsername);
  const country = readRequiredString(body.country);
  const email = readRequiredString(body.email);
  const rating = readRating(body.rating);
  const review = readRequiredString(body.review);
  const genuineConfirmation = body.genuineConfirmation === true;

  if (!fullName) {
    return { ok: false, message: "Please enter your full name." };
  }
  if (fullName.length > REVIEW_FIELD_MAX_LENGTHS.fullName) {
    return { ok: false, message: "Full name is too long." };
  }

  if (!tiktokUsername) {
    return { ok: false, message: "Please enter your TikTok username." };
  }
  if (
    tiktokUsername.length > REVIEW_FIELD_MAX_LENGTHS.tiktokUsername ||
    !TIKTOK_USERNAME_PATTERN.test(tiktokUsername)
  ) {
    return { ok: false, message: "Please enter a valid TikTok username." };
  }

  if (!country) {
    return { ok: false, message: "Please select your country." };
  }
  if (!ALLOWED_REVIEW_COUNTRIES.includes(country as ReviewCountry)) {
    return { ok: false, message: "Please select a valid country." };
  }

  if (!email) {
    return { ok: false, message: "Please enter your email address." };
  }
  if (
    email.length > REVIEW_FIELD_MAX_LENGTHS.email ||
    !EMAIL_PATTERN.test(email)
  ) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (!rating) {
    return { ok: false, message: "Please select a star rating." };
  }

  if (!review) {
    return { ok: false, message: "Please write your review." };
  }
  if (review.length > REVIEW_FIELD_MAX_LENGTHS.review) {
    return { ok: false, message: "Review is too long." };
  }

  if (!genuineConfirmation) {
    return {
      ok: false,
      message: "Please confirm your review is genuine.",
    };
  }

  const normalizedUsername = tiktokUsername.startsWith("@")
    ? tiktokUsername
    : `@${tiktokUsername}`;

  return {
    ok: true,
    data: {
      full_name: fullName,
      tiktok_username: normalizedUsername,
      country: country as ReviewCountry,
      email: email.toLowerCase(),
      rating,
      review,
    },
  };
}

export function isReviewHoneypotTriggered(body: ReviewRequestBody): boolean {
  return readOptionalString(body.website).length > 0;
}
