import Image from "next/image";
import {
  whyNextwaveContent,
  type WhyNextwaveBenefit,
} from "@/content/home";
import { SectionIntro } from "@/components/ui/section-intro";

function BenefitItem({ benefit }: { benefit: WhyNextwaveBenefit }) {
  const isGold = benefit.accent === "gold";

  return (
    <li className="border-b border-white/10 py-5 last:border-b-0 sm:py-6">
      <h3
        className={`font-display text-xl font-bold leading-snug sm:text-2xl ${
          isGold ? "text-brand-accent" : "text-white"
        }`}
      >
        {benefit.title}
      </h3>
      <p className="mt-2 max-w-md font-sans text-base leading-relaxed text-text-muted">
        {benefit.description}
      </p>
    </li>
  );
}

export function WhyNextwaveSection() {
  const { eyebrow, heading, supportingCopy, image, benefits } =
    whyNextwaveContent;

  return (
    <section
      aria-labelledby="why-nextwave-heading"
      className="relative overflow-hidden bg-brand-navy"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <SectionIntro
            eyebrow={eyebrow}
            heading={heading}
            supporting={supportingCopy}
            headingId="why-nextwave-heading"
            variant="dark"
          />
        </div>

        <div className="mt-12 flex flex-col gap-12 lg:mt-16 lg:grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-14 xl:gap-16">
          <figure className="relative lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
              <div className="relative aspect-4/3 min-h-[240px] sm:min-h-[300px] lg:aspect-[4/5] lg:min-h-[460px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-brand-navy/70 via-transparent to-transparent"
                />
              </div>
            </div>
            <figcaption className="sr-only">
              Photo by{" "}
              <a href={image.photographerUrl}>{image.photographer}</a> on{" "}
              <a href={image.photoPageUrl}>Unsplash</a>
            </figcaption>
          </figure>

          <ul className="min-w-0 border-t border-white/10 lg:border-t-0 lg:pt-2">
            {benefits.map((benefit) => (
              <BenefitItem key={benefit.id} benefit={benefit} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
