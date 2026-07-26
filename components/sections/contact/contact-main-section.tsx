import Link from "next/link";
import { contactMainContent } from "@/content/contact";
import { ContactForm } from "@/components/sections/contact/contact-form";

export function ContactMainSection() {
  const {
    sectionId,
    eyebrow,
    heading,
    supportingCopy,
    reasons,
    applicationDirection,
  } = contactMainContent;

  return (
    <section
      id={sectionId}
      aria-labelledby="contact-main-heading"
      className="relative scroll-mt-24 bg-brand-navy"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="lg:grid lg:grid-cols-5 lg:gap-14 xl:gap-16">
          <div className="min-w-0 lg:col-span-2">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
              {eyebrow}
            </p>
            <h2
              id="contact-main-heading"
              className="font-display mt-4 text-[2rem] font-extrabold leading-[1.06] tracking-[-0.02em] text-white sm:text-[2.25rem] lg:text-[2.5rem] xl:text-[3rem]"
            >
              {heading}
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-text-muted sm:text-lg">
              {supportingCopy}
            </p>

            <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {reasons.map((reason) => (
                <li key={reason.id} className="py-5 sm:py-6">
                  <h3 className="font-display text-lg font-bold uppercase tracking-[0.04em] text-white sm:text-xl">
                    {reason.title}
                  </h3>
                  <p className="mt-2 font-sans text-base leading-relaxed text-text-muted">
                    {reason.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                {applicationDirection.eyebrow}
              </p>
              <p className="mt-3 font-sans text-base leading-relaxed text-text-muted">
                {applicationDirection.copy}
              </p>
              <Link
                href={applicationDirection.cta.href}
                className="mt-4 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-brand-primary-light underline-offset-2 transition-colors hover:text-brand-primary focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                {applicationDirection.cta.label}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="mt-14 min-w-0 lg:col-span-3 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
