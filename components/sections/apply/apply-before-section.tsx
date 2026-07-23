import { applyBeforeContent } from "@/content/apply";

export function ApplyBeforeSection() {
  const { eyebrow, heading, points } = applyBeforeContent;

  return (
    <section
      aria-labelledby="apply-before-heading"
      className="relative bg-brand-navy"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
            {eyebrow}
          </p>
          <h2
            id="apply-before-heading"
            className="font-display mt-4 text-[2rem] font-extrabold leading-[1.06] tracking-[-0.02em] text-white sm:text-[2.25rem] lg:text-[2.5rem]"
          >
            {heading}
          </h2>
        </div>

        <ul className="mt-10 grid grid-cols-1 divide-y divide-white/10 border-y border-white/10 lg:mt-12 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {points.map((point) => (
            <li key={point.id} className="py-6 lg:px-8 lg:py-8 lg:first:pl-0">
              <h3 className="font-display text-lg font-bold uppercase tracking-[0.04em] text-white sm:text-xl">
                {point.title}
              </h3>
              <p className="mt-2 font-sans text-base leading-relaxed text-text-muted">
                {point.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
