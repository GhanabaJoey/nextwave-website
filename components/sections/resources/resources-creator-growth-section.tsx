import { resourcesCreatorGrowthContent } from "@/content/resources";

export function ResourcesCreatorGrowthSection() {
  const { sectionId, eyebrow, heading, supporting, principles } =
    resourcesCreatorGrowthContent;

  return (
    <section
      id={sectionId}
      aria-labelledby="resources-creator-growth-heading"
      className="relative scroll-mt-24 bg-brand-navy"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:grid lg:grid-cols-12 lg:items-start lg:gap-14 lg:px-10 lg:py-28 xl:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
            {eyebrow}
          </p>
          <h2
            id="resources-creator-growth-heading"
            className="font-display mt-4 text-[2.25rem] font-extrabold leading-[1.06] tracking-[-0.02em] text-white sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.75rem]"
          >
            {heading}
          </h2>
          <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-text-muted sm:text-lg">
            {supporting}
          </p>
        </div>

        <ul className="mt-10 border-t border-white/10 lg:col-span-7 lg:mt-0">
          {principles.map((principle) => (
            <li
              key={principle.id}
              className="border-b border-white/10 py-6 last:border-b-0 sm:py-7"
            >
              <h3 className="font-display text-xl font-bold uppercase tracking-[0.04em] text-white">
                {principle.title}
              </h3>
              <p className="mt-2 font-sans text-base leading-relaxed text-text-muted">
                {principle.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
