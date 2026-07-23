import { aboutMissionContent } from "@/content/about";

export function AboutMissionSection() {
  const { eyebrow, heading, mission, supporting } = aboutMissionContent;

  return (
    <section
      aria-labelledby="about-mission-heading"
      className="relative overflow-hidden bg-brand-navy-deep"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-4xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
            {eyebrow}
          </p>

          <div
            aria-hidden="true"
            className="mt-6 h-px w-16 bg-brand-primary/60 sm:mt-8"
          />

          <h2
            id="about-mission-heading"
            className="font-display mt-8 text-[2.25rem] font-extrabold leading-[1.06] tracking-[-0.02em] text-white sm:mt-10 sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.75rem]"
          >
            {heading}
          </h2>

          <p className="mt-8 max-w-3xl font-sans text-lg leading-relaxed text-white/90 sm:mt-10 sm:text-xl">
            {mission}
          </p>

          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-text-muted sm:mt-8 sm:text-lg">
            {supporting}
          </p>
        </div>
      </div>
    </section>
  );
}
