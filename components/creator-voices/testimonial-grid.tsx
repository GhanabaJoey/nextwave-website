import { VERIFIED_BADGE, type Testimonial } from "@/content/creator-voices";
import { TestimonialCard } from "@/components/creator-voices/testimonial-card";

export function TestimonialGrid({
  testimonials,
  verifiedBadge = VERIFIED_BADGE,
}: {
  testimonials: readonly Testimonial[];
  verifiedBadge?: string;
}) {
  if (testimonials.length === 0) {
    return (
      <p className="font-sans text-base leading-relaxed text-text-muted sm:text-lg">
        Creator stories will appear here once reviews are approved.
      </p>
    );
  }

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:gap-6">
      {testimonials.map((testimonial) => (
        <li key={testimonial.id}>
          <TestimonialCard
            testimonial={testimonial}
            verifiedBadge={verifiedBadge}
          />
        </li>
      ))}
    </ul>
  );
}
