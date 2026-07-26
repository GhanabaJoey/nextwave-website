import Image from "next/image";
import Link from "next/link";
import { communityHeroContent } from "@/content/community";
import { primaryCtaClassName } from "@/lib/cta-styles";
import { CommunityImageAttribution } from "@/components/sections/community/community-image-attribution";

export function CommunityHeroSection() {
  const {
    eyebrow,
    headlineLines,
    supportingCopy,
    primaryCta,
    secondaryCta,
    image,
  } = communityHeroContent;

  return (
    <section
      aria-labelledby="community-hero-heading"
      className="relative min-h-[620px] overflow-hidden sm:min-h-[700px] lg:min-h-[780px] xl:min-h-[820px]"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        quality={85}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1400px"
        className="object-cover object-[68%_42%] sm:object-[65%_center] lg:object-[62%_center]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-brand-navy/96 from-0% via-brand-navy/74 via-[24%] via-brand-navy/24 via-[42%] to-transparent to-[70%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-brand-navy via-brand-navy/55 to-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-[inherit] max-w-7xl flex-col justify-end px-5 pt-28 pb-14 sm:justify-center sm:px-8 sm:pt-32 sm:pb-16 lg:px-10 lg:pt-36">
        <div className="min-w-0 max-w-xl lg:max-w-2xl">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-primary sm:text-[11px] sm:tracking-[0.3em] sm:text-xs">
            <span
              aria-hidden="true"
              className="h-px w-5 shrink-0 bg-brand-primary/70 sm:w-6"
            />
            {eyebrow}
          </p>

          <h1
            id="community-hero-heading"
            className="font-display mt-4 text-[2.5rem] font-extrabold leading-[0.94] tracking-[-0.025em] text-white sm:mt-5 sm:text-[3.5rem] sm:leading-[0.93] md:text-[4rem] lg:text-[4.75rem] lg:leading-[0.92] xl:text-[5.25rem]"
          >
            <span className="block">{headlineLines[0]}</span>
            <span className="block">
              It&apos;s{" "}
              <span className="text-brand-primary">Community.</span>
            </span>
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
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg border border-white/25 bg-transparent px-6 py-2.5 text-sm font-semibold text-white/90 transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-reduce:transition-none"
            >
              {secondaryCta.label}
              <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
      </div>

      <CommunityImageAttribution image={image} />
    </section>
  );
}
