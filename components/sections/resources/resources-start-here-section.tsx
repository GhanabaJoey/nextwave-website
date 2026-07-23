import { resourcesStartHereContent } from "@/content/resources";
import { SectionIntro } from "@/components/ui/section-intro";

export function ResourcesStartHereSection() {
  const { sectionId, eyebrow, heading, intro, fundamentals } =
    resourcesStartHereContent;

  return (
    <section
      id={sectionId}
      aria-labelledby="resources-start-here-heading"
      className="relative scroll-mt-24 bg-brand-navy"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <SectionIntro
          eyebrow={eyebrow}
          heading={heading}
          supporting={intro}
          headingId="resources-start-here-heading"
          variant="dark"
        />

        <ol className="mt-12 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:mt-14 lg:gap-x-12 lg:gap-y-0">
          {fundamentals.map((item, index) => (
            <li
              key={item.id}
              className={`border-t border-white/10 py-7 sm:py-8 ${
                index % 2 === 1 ? "sm:border-l sm:border-white/10 sm:pl-10 lg:pl-12" : ""
              } ${index >= 2 ? "sm:border-t sm:border-white/10" : ""}`}
            >
              <div className="flex gap-5 sm:gap-6">
                <p
                  className="font-display shrink-0 text-3xl font-extrabold leading-none text-brand-primary-light sm:text-4xl"
                  aria-hidden="true"
                >
                  {item.number}
                </p>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-[0.05em] text-white sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-sans text-base leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
