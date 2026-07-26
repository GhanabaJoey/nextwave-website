export const ALLOWED_COUNTRIES = ["United Kingdom", "Australia"] as const;

export const COUNTRY_VALUE_MAP: Record<string, (typeof ALLOWED_COUNTRIES)[number]> =
  {
    uk: "United Kingdom",
    au: "Australia",
  };

export const ALLOWED_LIVE_STATUS = ["yes", "no", "preparing"] as const;

export const ALLOWED_FOLLOWER_RANGES = [
  "under-1k",
  "1k-5k",
  "5k-10k",
  "10k-50k",
  "50k-plus",
] as const;

export const ALLOWED_LIVE_FREQUENCY = [
  "not-currently",
  "occasionally",
  "1-2",
  "3-4",
  "5-plus",
] as const;

export const ALLOWED_DEVELOPMENT_GOALS = [
  "live-confidence",
  "audience-engagement",
  "consistency",
  "content-strategy",
  "creator-community",
  "live-battles",
  "other",
] as const;

export const FIELD_MAX_LENGTHS = {
  fullName: 200,
  email: 320,
  tiktokUsername: 100,
  tiktokProfileUrl: 2048,
  followerRange: 50,
  liveStatus: 50,
  liveFrequency: 50,
  developmentGoal: 100,
  motivation: 5000,
  additionalInfo: 5000,
} as const;

export type CreatorApplicationInsert = {
  full_name: string;
  email: string;
  country: (typeof ALLOWED_COUNTRIES)[number];
  tiktok_username: string;
  tiktok_profile_url: string | null;
  follower_range: string | null;
  live_status: string;
  live_frequency: string | null;
  development_goal: string | null;
  motivation: string;
  additional_info: string | null;
};
