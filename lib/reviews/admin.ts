import {
  ALLOWED_REVIEW_COUNTRIES,
  REVIEW_FIELD_MAX_LENGTHS,
  REVIEW_STATUS,
  type ReviewCountry,
  type ReviewRecord,
  type ReviewStatus,
} from "@/lib/reviews/constants";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TIKTOK_USERNAME_PATTERN = /^@?[a-zA-Z0-9._]{2,24}$/;

export type AdminReviewEditInput = {
  name?: unknown;
  tiktok_username?: unknown;
  email?: unknown;
  region?: unknown;
  rating?: unknown;
  review?: unknown;
};

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

export type AdminReviewEditResult =
  | {
      ok: true;
      data: {
        name: string;
        tiktok_username: string;
        email: string;
        region: ReviewCountry;
        rating: number;
        review: string;
      };
    }
  | { ok: false; message: string };

export function validateAdminReviewEdit(
  body: AdminReviewEditInput,
): AdminReviewEditResult {
  const name = readRequiredString(body.name);
  const tiktokUsername = readRequiredString(body.tiktok_username);
  const email = readRequiredString(body.email);
  const region = readRequiredString(body.region);
  const rating = readRating(body.rating);
  const review = readRequiredString(body.review);

  if (!name) return { ok: false, message: "Name is required." };
  if (name.length > REVIEW_FIELD_MAX_LENGTHS.fullName) {
    return { ok: false, message: "Name is too long." };
  }

  if (!tiktokUsername) {
    return { ok: false, message: "TikTok username is required." };
  }
  if (
    tiktokUsername.length > REVIEW_FIELD_MAX_LENGTHS.tiktokUsername ||
    !TIKTOK_USERNAME_PATTERN.test(tiktokUsername)
  ) {
    return { ok: false, message: "Please enter a valid TikTok username." };
  }

  if (!email) return { ok: false, message: "Email is required." };
  if (
    email.length > REVIEW_FIELD_MAX_LENGTHS.email ||
    !EMAIL_PATTERN.test(email)
  ) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (!region) return { ok: false, message: "Region is required." };
  if (!ALLOWED_REVIEW_COUNTRIES.includes(region as ReviewCountry)) {
    return { ok: false, message: "Please select a valid region." };
  }

  if (!rating) return { ok: false, message: "Rating must be between 1 and 5." };

  if (!review) return { ok: false, message: "Review text is required." };
  if (review.length > REVIEW_FIELD_MAX_LENGTHS.review) {
    return { ok: false, message: "Review is too long." };
  }

  const normalizedUsername = tiktokUsername.startsWith("@")
    ? tiktokUsername
    : `@${tiktokUsername}`;

  return {
    ok: true,
    data: {
      name,
      tiktok_username: normalizedUsername,
      email: email.toLowerCase(),
      region: region as ReviewCountry,
      rating,
      review,
    },
  };
}

export type AdminReviewActionBody =
  | { action: "approve" }
  | { action: "reject" }
  | { action: "toggle_featured" }
  | { action: "edit"; data: AdminReviewEditInput };

export function isValidAdminReviewAction(
  body: unknown,
): body is AdminReviewActionBody {
  if (!body || typeof body !== "object" || Array.isArray(body)) return false;

  const action = (body as { action?: unknown }).action;

  if (action === "approve" || action === "reject" || action === "toggle_featured") {
    return true;
  }

  if (action === "edit") {
    return "data" in body && typeof (body as { data?: unknown }).data === "object";
  }

  return false;
}

export function getStatusUpdateForAction(
  action: "approve" | "reject",
): ReviewStatus {
  return action === "approve" ? REVIEW_STATUS.APPROVED : REVIEW_STATUS.REJECTED;
}

export type { ReviewRecord };
