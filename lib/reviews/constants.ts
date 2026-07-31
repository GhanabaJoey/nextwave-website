export const ALLOWED_REVIEW_COUNTRIES = [
  "United Kingdom",
  "Australia",
] as const;

export type ReviewCountry = (typeof ALLOWED_REVIEW_COUNTRIES)[number];

export const REVIEW_FIELD_MAX_LENGTHS = {
  fullName: 200,
  tiktokUsername: 100,
  email: 320,
  review: 2000,
} as const;

export type CreatorReviewInsert = {
  full_name: string;
  tiktok_username: string;
  country: ReviewCountry;
  email: string;
  rating: number;
  review: string;
};

export const REVIEW_DEFAULT_STATUS = "Pending" as const;

export const REVIEW_STATUS = {
  PENDING: "Pending",
  APPROVED: "Approved",
  REJECTED: "Rejected",
} as const;

export type ReviewStatus = (typeof REVIEW_STATUS)[keyof typeof REVIEW_STATUS];

export type ReviewRecord = {
  id: string;
  name: string;
  tiktok_username: string;
  email: string;
  region: ReviewCountry;
  rating: number;
  review: string;
  status: ReviewStatus | string;
  featured: boolean;
  created_at: string;
  updated_at: string;
};

export type ReviewDatabaseInsert = {
  name: string;
  tiktok_username: string;
  email: string;
  region: ReviewCountry;
  rating: number;
  review: string;
  status: typeof REVIEW_DEFAULT_STATUS;
  featured: false;
};

export function buildReviewDatabaseInsert(
  data: CreatorReviewInsert,
): ReviewDatabaseInsert {
  return {
    name: data.full_name,
    tiktok_username: data.tiktok_username,
    email: data.email,
    region: data.country,
    rating: data.rating,
    review: data.review,
    status: REVIEW_DEFAULT_STATUS,
    featured: false,
  };
}

export type ReviewNotificationData = CreatorReviewInsert & {
  created_at: string;
  has_profile_photo: boolean;
};
