import Image from "next/image";
import { aboutStoryContent } from "@/content/about";
import { SectionIntro } from "@/components/ui/section-intro";
import { AboutImageAttribution } from "@/components/sections/about/about-image-attribution";

export function AboutStorySection() {
  const { eyebrow, heading, paragraphs, image } = aboutStoryContent;

  return (
    <section
      aria-labelledby="about-story-heading"
      className="relative bg-brand-navy"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-14 lg:px-10 lg:py-28 xl:gap-16">
        <div className="max-w-xl">
          <SectionIntro
            eyebrow={eyebrow}
            heading={heading}
            headingId="about-story-heading"
            variant="dark"
          />
          <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-text-muted sm:mt-8 sm:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <figure className="relative mt-12 flex min-h-0 flex-col lg:mt-0 lg:h-full">
          <div className="relative aspect-3/2 min-h-[220px] overflow-hidden rounded-2xl ring-1 ring-white/10 sm:min-h-[280px] lg:aspect-auto lg:h-full lg:min-h-0">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-[50%_42%] lg:object-[50%_40%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-brand-navy/60 via-transparent to-transparent"
            />
          </div>
          <AboutImageAttribution image={image} />
        </figure>
      </div>
    </section>
  );
}
