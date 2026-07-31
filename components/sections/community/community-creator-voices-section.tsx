import { CreatorReviewForm } from "@/components/creator-voices/creator-review-form";
import { TestimonialGrid } from "@/components/creator-voices/testimonial-grid";
import { SectionIntro } from "@/components/ui/section-intro";
import { creatorVoicesCommunityContent } from "@/content/creator-voices";
import { getApprovedTestimonials } from "@/lib/creator-voices/get-reviews";

export async function CommunityCreatorVoicesSection() {
  const {
    sectionId,
    eyebrow,
    heading,
    supporting,
    exampleStoriesNote,
    shareExperience,
  } = creatorVoicesCommunityContent;
  const approvedTestimonials = await getApprovedTestimonials();

  return (
    <section
      id={sectionId}
      aria-labelledby="community-creator-voices-heading"
      className="relative scroll-mt-24 bg-surface-elevated"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <SectionIntro
          eyebrow={eyebrow}
          heading={heading}
          supporting={supporting}
          headingId="community-creator-voices-heading"
          variant="elevated"
        />

        <div className="mt-12 lg:mt-14">
          <TestimonialGrid testimonials={approvedTestimonials} />
          <p className="mt-8 max-w-2xl font-sans text-sm leading-relaxed text-text-muted/70">
            {exampleStoriesNote}
          </p>
        </div>

        <div
          aria-hidden="true"
          className="my-16 h-px bg-linear-to-r from-transparent via-white/10 to-transparent sm:my-20"
        />

        <div aria-labelledby="community-share-experience-heading">
          <SectionIntro
            eyebrow={shareExperience.eyebrow}
            heading={shareExperience.heading}
            headingId="community-share-experience-heading"
            variant="elevated"
          />

          <div className="mt-5 max-w-2xl space-y-3">
            {shareExperience.descriptionParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="font-sans text-base leading-relaxed text-text-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 animate-[fadeSlideIn_0.5s_ease-out] lg:mt-14">
            <CreatorReviewForm />
          </div>
        </div>
      </div>
    </section>
  );
}
