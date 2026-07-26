import { communityDevelopmentContent } from "@/content/community";

export function CommunityDevelopmentSection() {
  const { eyebrow, headingLines, copy, topics } = communityDevelopmentContent;

  return (
    <section
      aria-labelledby="community-development-heading"
      className="relative bg-surface-elevated"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
            {eyebrow}
          </p>
          <h2
            id="community-development-heading"
            className="font-display mt-4 text-[2.25rem] font-extrabold leading-[1.06] tracking-[-0.02em] text-white sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.75rem]"
          >
            {headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-text-muted sm:text-lg">
            {copy}
          </p>
        </div>

        <ul className="mt-12 grid max-w-5xl gap-0 divide-y divide-white/10 border-t border-white/10 md:mt-14 md:grid-cols-3 md:divide-x md:divide-y-0">
          {topics.map((topic) => (
            <li key={topic.id} className="py-7 md:px-8 md:py-8 md:first:pl-0">
              <h3 className="font-display text-xl font-bold text-white">
                {topic.title}
              </h3>
              <p className="mt-3 font-sans text-base leading-relaxed text-text-muted">
                {topic.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
