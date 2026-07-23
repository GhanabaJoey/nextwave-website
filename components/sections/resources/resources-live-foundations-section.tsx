import { resourcesLiveFoundationsContent } from "@/content/resources";

export function ResourcesLiveFoundationsSection() {
  const { sectionId, eyebrow, heading, intro, items } =
    resourcesLiveFoundationsContent;

  return (
    <section
      id={sectionId}
      aria-labelledby="resources-foundations-heading"
      className="relative scroll-mt-24 bg-brand-navy-deep"
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
            id="resources-foundations-heading"
            className="font-display mt-4 text-[2.25rem] font-extrabold leading-[1.06] tracking-[-0.02em] text-white sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.75rem]"
          >
            {heading}
          </h2>
          <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-text-muted sm:text-lg">
            {intro}
          </p>
        </div>

        <ul className="mt-10 border-t border-white/10 lg:col-span-7 lg:mt-0">
          {items.map((item, index) => (
            <li
              key={item.id}
              className="flex gap-4 border-b border-white/10 py-6 last:border-b-0 sm:gap-5 sm:py-7"
            >
              <span
                aria-hidden="true"
                className="mt-1.5 flex size-6 shrink-0 items-center justify-center font-display text-sm font-extrabold text-brand-primary-light"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-white sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 font-sans text-base leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
