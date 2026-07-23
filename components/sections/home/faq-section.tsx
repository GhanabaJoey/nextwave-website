import { faqContent } from "@/content/home";
import { FaqAccordion } from "@/components/sections/home/faq-accordion";
import { SectionIntro } from "@/components/ui/section-intro";

export function FaqSection() {
  const { eyebrow, heading } = faqContent;

  return (
    <section
      aria-labelledby="faq-heading"
      className="border-b border-white/10 bg-brand-navy"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            eyebrow={eyebrow}
            heading={heading}
            headingId="faq-heading"
            variant="dark"
            align="center"
          />

          <div className="mt-10 rounded-2xl border border-white/10 bg-surface-card p-2 sm:p-3">
            <FaqAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
