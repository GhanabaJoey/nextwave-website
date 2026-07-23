import Image from "next/image";
import Link from "next/link";
import { resourcesHeroContent } from "@/content/resources";
import { primaryCtaClassName } from "@/lib/cta-styles";
import { ResourceImageAttribution } from "@/components/sections/resources/resource-image-attribution";

export function ResourcesHeroSection() {
  const {
    eyebrow,
    headlineLines,
    supportingCopy,
    primaryCta,
    secondaryCta,
    image,
  } = resourcesHeroContent;

  return (
    <section
      aria-labelledby="resources-hero-heading"
      className="relative min-h-[580px] overflow-hidden sm:min-h-[660px] lg:min-h-[760px] xl:min-h-[800px]"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        quality={85}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1400px"
        className="object-cover object-[58%_center] sm:object-[55%_center] lg:object-[52%_center]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-brand-navy/94 from-0% via-brand-navy/68 via-[22%] via-brand-navy/22 via-[38%] to-transparent to-[74%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-brand-navy via-brand-navy/50 to-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-[inherit] max-w-7xl flex-col justify-end px-5 pt-28 pb-14 sm:justify-center sm:px-8 sm:pt-32 sm:pb-16 lg:px-10 lg:pt-36">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-primary sm:text-xs">
            <span
              aria-hidden="true"
              className="h-px w-5 shrink-0 bg-brand-primary/70 sm:w-6"
            />
            {eyebrow}
          </p>

          <h1
            id="resources-hero-heading"
            className="font-display mt-4 text-[2.5rem] font-extrabold leading-[0.95] tracking-[-0.025em] text-white sm:mt-5 sm:text-[3.25rem] sm:leading-[0.94] md:text-[3.75rem] lg:text-[4.25rem] lg:leading-[0.92] xl:text-[4.75rem]"
          >
            <span className="block">{headlineLines[0]}</span>
            <span className="block text-brand-primary">{headlineLines[1]}</span>
          </h1>

          <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
            {supportingCopy}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={primaryCta.href}
              className={`${primaryCtaClassName} gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary`}
            >
              {primaryCta.label}
              <span aria-hidden="true">↓</span>
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg border border-white/25 bg-transparent px-6 py-2.5 text-sm font-semibold text-white/90 transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-reduce:transition-none"
            >
              {secondaryCta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <ResourceImageAttribution image={image} />
    </section>
  );
}
