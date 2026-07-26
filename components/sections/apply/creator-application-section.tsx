import { applyFormContent } from "@/content/apply";
import { CreatorApplicationForm } from "@/components/sections/apply/creator-application-form";

export function CreatorApplicationSection() {
  const { sectionId, eyebrow, heading, supportingCopy, requiredNote } =
    applyFormContent;

  return (
    <section
      id={sectionId}
      aria-labelledby="apply-form-heading"
      className="relative scroll-mt-24 bg-surface-elevated"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto min-w-0 max-w-[860px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
          {eyebrow}
        </p>
        <h2
          id="apply-form-heading"
          className="font-display mt-4 text-[2rem] font-extrabold leading-[1.06] tracking-[-0.02em] text-white sm:text-[2.25rem] lg:text-[2.5rem] xl:text-[3rem]"
        >
          {heading}
        </h2>
        <p className="mt-4 font-sans text-base leading-relaxed text-text-muted sm:text-lg">
          {supportingCopy}
        </p>
        <p className="mt-2 font-sans text-sm text-text-muted/80">
          {requiredNote}
        </p>

        <div className="mt-10">
          <CreatorApplicationForm />
        </div>
      </div>
    </section>
  );
}
