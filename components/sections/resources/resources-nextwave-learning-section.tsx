import { resourcesNextwaveLearningContent } from "@/content/resources";

export function ResourcesNextwaveLearningSection() {
  const { eyebrow, heading, copy, items } = resourcesNextwaveLearningContent;

  return (
    <section
      aria-labelledby="resources-nextwave-learning-heading"
      className="relative bg-brand-navy"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-primary/35 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-brand-primary/50"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
            {eyebrow}
          </p>
          <h2
            id="resources-nextwave-learning-heading"
            className="font-display mt-4 text-[2.25rem] font-extrabold leading-[1.06] tracking-[-0.02em] text-white sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.75rem]"
          >
            {heading}
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-text-muted sm:text-lg">
            {copy}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-0 divide-y divide-white/10 border-y border-white/10 sm:mt-14 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {items.map((item) => (
            <li key={item.id} className="py-6 lg:px-6 lg:py-0 lg:first:pl-0">
              <h3 className="font-display text-lg font-bold text-brand-primary-light sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 font-sans text-base leading-relaxed text-text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
