import Image from "next/image";
import { communityLiveWarsContent } from "@/content/community";
import { CommunityImageAttribution } from "@/components/sections/community/community-image-attribution";

export function CommunityLiveWarsSection() {
  const { eyebrow, heading, copy, pillars, image } = communityLiveWarsContent;

  return (
    <section
      aria-labelledby="community-live-wars-heading"
      className="relative bg-brand-navy"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-14 lg:px-10 lg:py-32 xl:gap-16">
        <figure className="relative flex min-h-0 flex-col lg:col-span-6 lg:h-full">
          <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl ring-1 ring-white/10">
            <div className="relative aspect-3/2 min-h-[280px] sm:min-h-[320px] lg:aspect-auto lg:h-full lg:min-h-0">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={`object-cover ${
                  "objectPosition" in image ? image.objectPosition : ""
                }`}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-brand-navy/50 via-transparent to-transparent"
              />
            </div>
          </div>
          <CommunityImageAttribution image={image} />
        </figure>

        <div className="mt-12 flex flex-col lg:col-span-6 lg:mt-0">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
            {eyebrow}
          </p>
          <h2
            id="community-live-wars-heading"
            className="font-display mt-4 text-[2.25rem] font-extrabold leading-[1.06] tracking-[-0.02em] text-white sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.75rem]"
          >
            {heading}
          </h2>
          <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-text-muted sm:text-lg">
            {copy}
          </p>

          <ul className="mt-10 divide-y divide-white/10 border-t border-white/10">
            {pillars.map((pillar) => (
              <li key={pillar.id} className="py-5 first:pt-5 sm:py-6">
                <h3 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-brand-primary-light sm:text-xl">
                  {pillar.title}
                </h3>
                <p className="mt-2 font-sans text-base leading-relaxed text-text-muted">
                  {pillar.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
