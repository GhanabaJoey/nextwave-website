import { creatorJourneyContent, type CreatorJourneyStep } from "@/content/home";
import { SectionIntro } from "@/components/ui/section-intro";

function JourneyStep({
  step,
  isLast,
}: {
  step: CreatorJourneyStep;
  isLast: boolean;
}) {
  return (
    <li className="relative flex gap-5 lg:block lg:px-2">
      {!isLast ? (
        <span
          aria-hidden="true"
          className="absolute top-11 bottom-0 left-[1.125rem] w-px bg-white/15 lg:hidden"
        />
      ) : null}

      <span className="relative z-10 flex size-9 shrink-0 items-center justify-center font-display text-sm font-extrabold text-brand-primary-light lg:mx-auto lg:mb-5 lg:size-auto lg:bg-transparent lg:text-base">
        {step.number}
      </span>

      <div className="min-w-0 pb-8 lg:pb-0 lg:text-center">
        <h3 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-white sm:text-xl">
          {step.title}
        </h3>
        <p className="mt-2 font-sans text-sm leading-relaxed text-text-muted sm:text-base">
          {step.description}
        </p>
      </div>
    </li>
  );
}

export function CreatorJourneySection() {
  const { eyebrow, heading, supportingCopy, steps } = creatorJourneyContent;

  return (
    <section
      aria-labelledby="creator-journey-heading"
      className="relative overflow-hidden bg-brand-navy-deep"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <SectionIntro
            eyebrow={eyebrow}
            heading={heading}
            supporting={supportingCopy}
            headingId="creator-journey-heading"
            variant="dark"
          />
        </div>

        <ol className="relative mt-12 flex flex-col lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-5 right-[10%] left-[10%] hidden h-px bg-white/15 lg:block"
          />
          {steps.map((step, index) => (
            <JourneyStep
              key={step.id}
              step={step}
              isLast={index === steps.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
