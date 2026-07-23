import { contactReassuranceContent } from "@/content/contact";

export function ContactReassuranceSection() {
  const { eyebrow, heading, supportingCopy } = contactReassuranceContent;

  return (
    <section
      aria-labelledby="contact-reassurance-heading"
      className="relative border-t border-white/10 bg-brand-navy-deep"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
            {eyebrow}
          </p>
          <h2
            id="contact-reassurance-heading"
            className="font-display mt-4 text-2xl font-extrabold leading-[1.08] tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
          <p className="mx-auto mt-4 font-sans text-base leading-relaxed text-text-muted sm:text-lg">
            {supportingCopy}
          </p>
        </div>
      </div>
    </section>
  );
}
