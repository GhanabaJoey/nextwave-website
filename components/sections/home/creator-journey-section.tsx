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
    <li className="relative pl-14 lg:pl-0">
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-5 top-12 bottom-0 w-px -translate-x-1/2 bg-brand-primary/35 lg:hidden"
        />
      )}
      <span className="absolute left-0 top-0 flex size-11 items-center justify-center rounded-full border border-brand-primary/50 bg-brand-primary/10 font-display text-sm font-extrabold text-brand-primary shadow-[0_0_20px_rgba(0,174,239,0.25)] lg:relative lg:mx-auto lg:mb-5">
        {step.number}
      </span>
      <div className="rounded-xl border border-white/10 bg-surface-card p-5 lg:bg-transparent lg:p-0 lg:text-center">
        <h3 className="text-lg font-bold text-white">{step.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
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
      className="relative overflow-hidden border-b border-white/10 bg-surface-elevated"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-brand-primary/5 via-transparent to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <SectionIntro
          eyebrow={eyebrow}
          heading={heading}
          supporting={supportingCopy}
          headingId="creator-journey-heading"
          variant="dark"
        />

        <div className="relative mt-12 lg:mt-16">
          <div
            aria-hidden="true"
            className="absolute top-[1.375rem] right-[12.5%] left-[12.5%] hidden h-px bg-brand-primary/30 lg:block"
          />
          <ol className="flex flex-col gap-8 lg:grid lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <JourneyStep
                key={step.id}
                step={step}
                isLast={index === steps.length - 1}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
