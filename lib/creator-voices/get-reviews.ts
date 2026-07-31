import {
  APPROVED_TESTIMONIALS,
  FEATURED_TESTIMONIAL_IDS,
  type Testimonial,
} from "@/content/creator-voices";
import {
  fetchApprovedReviews,
  fetchFeaturedApprovedReviews,
  mapReviewToTestimonial,
} from "@/lib/reviews/queries";

const MIN_DISPLAY_COUNT = 4;

function mergeWithPlaceholders(
  approved: Testimonial[],
  placeholders: readonly Testimonial[],
): Testimonial[] {
  if (approved.length >= MIN_DISPLAY_COUNT) {
    return approved;
  }

  const approvedIds = new Set(approved.map((item) => item.id));
  const fillers = placeholders.filter((item) => !approvedIds.has(item.id));

  return [...approved, ...fillers].slice(
    0,
    Math.max(MIN_DISPLAY_COUNT, approved.length),
  );
}

/**
 * Homepage — approved reviews where featured = true.
 * Falls back to placeholder testimonials until at least 4 approved reviews exist.
 */
export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  const approvedReviews = await fetchFeaturedApprovedReviews();
  const fromDatabase = approvedReviews.map(mapReviewToTestimonial);
  const placeholders = APPROVED_TESTIMONIALS.filter((testimonial) =>
    FEATURED_TESTIMONIAL_IDS.includes(
      testimonial.id as (typeof FEATURED_TESTIMONIAL_IDS)[number],
    ),
  );

  return mergeWithPlaceholders(fromDatabase, placeholders);
}

/**
 * Community page — all approved reviews.
 * Falls back to placeholder testimonials until at least 4 approved reviews exist.
 */
export async function getApprovedTestimonials(): Promise<Testimonial[]> {
  const approvedReviews = await fetchApprovedReviews();
  const fromDatabase = approvedReviews.map(mapReviewToTestimonial);

  return mergeWithPlaceholders(fromDatabase, APPROVED_TESTIMONIALS);
}
