import { testimonialsContent } from "@/content/home";
import { SectionIntro } from "@/components/ui/section-intro";

export function TestimonialsSection() {
  const { eyebrow, heading, placeholderTitle, placeholderText } =
    testimonialsContent;

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="border-b border-white/10 bg-surface-elevated"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <SectionIntro
          eyebrow={eyebrow}
          heading={heading}
          headingId="testimonials-heading"
          variant="dark"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-2xl border border-brand-primary/25 bg-linear-to-br from-brand-primary/10 via-surface-card to-surface-card p-8 lg:col-span-2 lg:p-10">
            <svg
              aria-hidden="true"
              className="size-10 text-brand-primary/40"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.29l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.29l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Z" />
            </svg>
            <p className="mt-6 font-display text-2xl font-bold text-white sm:text-3xl">
              {placeholderTitle}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted">
              {placeholderText}
            </p>
          </div>

          <div className="flex flex-col gap-4" aria-hidden="true">
            {[1, 2].map((slot) => (
              <div
                key={slot}
                className="flex flex-1 flex-col justify-center rounded-xl border border-dashed border-white/15 bg-surface-card/60 px-6 py-8"
              >
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-white/10" />
                  <div className="space-y-2">
                    <div className="h-2 w-20 rounded-full bg-white/10" />
                    <div className="h-2 w-28 rounded-full bg-white/10" />
                  </div>
                </div>
                <div className="mt-5 space-y-2">
                  <div className="h-2 w-full rounded-full bg-white/10" />
                  <div className="h-2 w-[85%] rounded-full bg-white/10" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-text-muted/70">
                  Future creator story
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
