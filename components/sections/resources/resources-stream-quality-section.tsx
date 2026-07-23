import Image from "next/image";
import { resourcesStreamQualityContent } from "@/content/resources";
import { ResourceImageAttribution } from "@/components/sections/resources/resource-image-attribution";

export function ResourcesStreamQualitySection() {
  const { sectionId, eyebrow, heading, topics, image } =
    resourcesStreamQualityContent;

  return (
    <section
      id={sectionId}
      aria-labelledby="resources-stream-quality-heading"
      className="relative scroll-mt-24 bg-surface-elevated"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-16">
          <figure className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-xl">
              <div className="relative aspect-4/5 min-h-[320px] sm:min-h-[380px] lg:aspect-[4/5] lg:min-h-[520px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <ResourceImageAttribution image={image} />
          </figure>

          <div className="order-1 mb-12 lg:order-2 lg:mb-0">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
              {eyebrow}
            </p>
            <h2
              id="resources-stream-quality-heading"
              className="font-display mt-4 text-[2.25rem] font-extrabold leading-[1.06] tracking-[-0.02em] text-white sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.75rem]"
            >
              {heading}
            </h2>

            <ul className="mt-10 divide-y divide-white/10 border-t border-white/10 lg:mt-12">
              {topics.map((topic) => (
                <li key={topic.id} className="py-5 first:pt-5 sm:py-6">
                  <h3 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-white sm:text-xl">
                    {topic.title}
                  </h3>
                  <p className="mt-2 max-w-md font-sans text-base leading-relaxed text-text-muted">
                    {topic.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
