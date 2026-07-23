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

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-10 lg:py-28 xl:gap-16">
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

        <figure className="relative mt-12 lg:mt-0">
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <div className="relative aspect-4/5 min-h-[280px] sm:min-h-[360px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-brand-navy/60 via-transparent to-transparent"
              />
            </div>
          </div>
          <AboutImageAttribution image={image} />
        </figure>
      </div>
    </section>
  );
}
