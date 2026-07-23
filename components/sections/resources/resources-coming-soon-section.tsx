import { resourcesComingSoonContent } from "@/content/resources";

export function ResourcesComingSoonSection() {
  const { sectionId, eyebrow, heading, copy, labels } =
    resourcesComingSoonContent;

  return (
    <section
      id={sectionId}
      aria-labelledby="resources-coming-soon-heading"
      className="relative scroll-mt-24 bg-surface-elevated"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
            {eyebrow}
          </p>
          <h2
            id="resources-coming-soon-heading"
            className="font-display mt-3 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-3xl"
          >
            {heading}
          </h2>
          <p className="mt-3 font-sans text-base leading-relaxed text-text-muted">
            {copy}
          </p>

          <ul
            className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-8"
            aria-label="Upcoming resource types"
          >
            {labels.map((label) => (
              <li
                key={label.id}
                className="font-sans text-sm text-white/85 sm:text-base"
              >
                <span>{label.label}</span>
                <span className="ml-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                  Coming soon
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
