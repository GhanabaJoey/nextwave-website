import { faqContent } from "@/content/home";
import { FaqAccordion } from "@/components/sections/home/faq-accordion";
import { SectionIntro } from "@/components/ui/section-intro";

export function FaqSection() {
  const { eyebrow, heading } = faqContent;

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative bg-brand-navy"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            eyebrow={eyebrow}
            heading={heading}
            headingId="faq-heading"
            variant="dark"
            align="center"
          />

          <div className="mt-10 border-t border-white/10 lg:mt-12">
            <FaqAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
