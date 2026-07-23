import { testimonialsContent } from "@/content/home";
import { SectionIntro } from "@/components/ui/section-intro";

export function TestimonialsSection() {
  const { eyebrow, heading, copy, label } = testimonialsContent;

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative bg-surface-elevated"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="max-w-2xl">
          <SectionIntro
            eyebrow={eyebrow}
            heading={heading}
            headingId="testimonials-heading"
            variant="elevated"
          />
          <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-text-muted sm:mt-5 sm:text-lg">
            {copy}
          </p>
          <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary/80">
            {label}
          </p>
        </div>
      </div>
    </section>
  );
}
