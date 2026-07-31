import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { REVIEW_STATUS, type ReviewRecord } from "@/lib/reviews/constants";
import type { Testimonial } from "@/content/creator-voices";

const REVIEW_SELECT =
  "id, name, tiktok_username, email, region, rating, review, status, featured, created_at, updated_at";

export function mapReviewToTestimonial(review: ReviewRecord): Testimonial {
  return {
    id: review.id,
    quote: review.review,
    name: review.name,
    country: review.region,
  };
}

export async function fetchAllReviews(): Promise<ReviewRecord[]> {
  const supabase = createSupabaseAdminClient();
  const { data, error } = await supabase
    .from("reviews")
    .select(REVIEW_SELECT)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch reviews:", error.code);
    throw new Error("Failed to fetch reviews.");
  }

  return (data ?? []) as ReviewRecord[];
}

export async function fetchApprovedReviews(): Promise<ReviewRecord[]> {
  const supabase = createSupabaseAdminClient();
  const { data, error } = await supabase
    .from("reviews")
    .select(REVIEW_SELECT)
    .eq("status", REVIEW_STATUS.APPROVED)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch approved reviews:", error.code);
    return [];
  }

  return (data ?? []) as ReviewRecord[];
}

export async function fetchFeaturedApprovedReviews(): Promise<ReviewRecord[]> {
  const supabase = createSupabaseAdminClient();
  const { data, error } = await supabase
    .from("reviews")
    .select(REVIEW_SELECT)
    .eq("status", REVIEW_STATUS.APPROVED)
    .eq("featured", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch featured reviews:", error.code);
    return [];
  }

  return (data ?? []) as ReviewRecord[];
}
