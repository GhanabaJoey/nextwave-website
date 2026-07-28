import Image from "next/image";
import {
  aboutSupportContent,
  type AboutSupportArea,
} from "@/content/about";
import { SectionIntro } from "@/components/ui/section-intro";
import { AboutImageAttribution } from "@/components/sections/about/about-image-attribution";

function SupportAreaItem({ area }: { area: AboutSupportArea }) {
  return (
    <li className="border-t border-white/10 py-5 first:border-t-0 first:pt-0 sm:py-6">
      <h3 className="font-display text-lg font-bold text-white sm:text-xl">
        {area.title}
      </h3>
      <p className="mt-2 max-w-md font-sans text-base leading-relaxed text-text-muted">
        {area.description}
      </p>
    </li>
  );
}

export function AboutSupportSection() {
  const { eyebrow, heading, areas, lifestyleImage } = aboutSupportContent;

  return (
    <section
      aria-labelledby="about-support-heading"
      className="relative bg-brand-navy"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-14 xl:gap-16">
          <div className="lg:col-span-5">
            <SectionIntro
              eyebrow={eyebrow}
              heading={heading}
              headingId="about-support-heading"
              variant="dark"
            />
            <ul className="mt-8 border-t border-white/10 lg:mt-10">
              {areas.map((area) => (
                <SupportAreaItem key={area.id} area={area} />
              ))}
            </ul>
          </div>

          <figure className="relative mt-12 flex min-h-0 flex-col lg:col-span-7 lg:mt-0 lg:h-full">
            <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl ring-1 ring-white/10">
              <div className="relative aspect-3/2 min-h-[240px] sm:min-h-[280px] lg:aspect-auto lg:h-full lg:min-h-0">
                <Image
                  src={lifestyleImage.src}
                  alt={lifestyleImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[58%_48%] lg:object-[60%_46%]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-brand-navy/55 via-transparent to-transparent"
                />
              </div>
            </div>
            <AboutImageAttribution image={lifestyleImage} />
          </figure>
        </div>
      </div>
    </section>
  );
}
