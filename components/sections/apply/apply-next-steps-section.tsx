import { applyNextStepsContent } from "@/content/apply";

export function ApplyNextStepsSection() {
  const { eyebrow, heading, steps } = applyNextStepsContent;

  return (
    <section
      aria-labelledby="apply-next-steps-heading"
      className="relative border-t border-white/10 bg-brand-navy-deep"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
            {eyebrow}
          </p>
          <h2
            id="apply-next-steps-heading"
            className="font-display mt-4 text-[2rem] font-extrabold leading-[1.06] tracking-[-0.02em] text-white sm:text-[2.25rem] lg:text-[2.5rem] xl:text-[3rem]"
          >
            {heading}
          </h2>
        </div>

        <ol className="mt-10 divide-y divide-white/10 border-y border-white/10 lg:mt-12">
          {steps.map((step) => (
            <li
              key={step.id}
              className="flex gap-5 py-6 sm:gap-6 sm:py-7"
            >
              <p
                className="font-display shrink-0 text-2xl font-extrabold leading-none text-brand-primary-light sm:text-3xl"
                aria-hidden="true"
              >
                {step.number}
              </p>
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-[0.04em] text-white sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 font-sans text-base leading-relaxed text-text-muted">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
