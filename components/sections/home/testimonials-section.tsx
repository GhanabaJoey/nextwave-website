import Link from "next/link";
import { TestimonialCarousel } from "@/components/creator-voices/testimonial-carousel";
import { SectionIntro } from "@/components/ui/section-intro";
import { creatorVoicesHomeContent } from "@/content/creator-voices";
import { getFeaturedTestimonials } from "@/lib/creator-voices/get-reviews";
import { secondaryCtaClassName } from "@/lib/cta-styles";

export async function TestimonialsSection() {
  const { eyebrow, heading, supporting, viewAllCta } = creatorVoicesHomeContent;
  const featuredTestimonials = await getFeaturedTestimonials();

  return (
    <section
      aria-labelledby="creator-voices-heading"
      className="relative bg-surface-elevated"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <SectionIntro
          eyebrow={eyebrow}
          heading={heading}
          supporting={supporting}
          headingId="creator-voices-heading"
          variant="elevated"
        />

        <TestimonialCarousel testimonials={featuredTestimonials} />

        <div className="mt-12 flex justify-center lg:mt-14">
          <Link href={viewAllCta.href} className={secondaryCtaClassName}>
            {viewAllCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
