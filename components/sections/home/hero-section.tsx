import Image from "next/image";
import Link from "next/link";
import { heroContent, heroImage } from "@/content/home";
import { primaryCtaClassName } from "@/lib/cta-styles";

export function HeroSection() {
  const {
    eyebrow,
    headlineLines,
    supportingCopy,
    microcopy,
    trustSignal,
    primaryCta,
    secondaryCta,
  } = heroContent;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[620px] overflow-hidden sm:min-h-[700px] lg:min-h-[800px] xl:min-h-[820px]"
    >
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        quality={85}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1400px"
        className="object-cover object-[88%_45%] sm:object-[68%_center] lg:object-[62%_center]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-brand-navy/96 from-0% via-brand-navy/78 via-[24%] via-brand-navy/35 via-[42%] to-transparent to-[68%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-brand-navy via-brand-navy/55 to-transparent"
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
            id="hero-heading"
            className="font-display mt-4 text-[3rem] font-extrabold leading-[0.95] tracking-[-0.025em] text-white sm:mt-5 sm:text-[4rem] sm:leading-[0.94] md:text-[4.5rem] lg:text-[5.25rem] lg:leading-[0.92] xl:text-[6rem] 2xl:text-[6.5rem]"
          >
            {headlineLines.map((line, index) => (
              <span key={line} className="block">
                {index === 1 ? (
                  <span className="text-brand-primary">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
            {supportingCopy}
          </p>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
            {microcopy}
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
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <p className="mt-7 flex flex-col gap-1 font-sans text-sm text-white/70 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
            <span className="font-medium text-white/85">
              {trustSignal.creators}
            </span>
            <span aria-hidden="true" className="hidden text-white/35 sm:inline">
              •
            </span>
            <span>{trustSignal.markets}</span>
          </p>
        </div>
      </div>

      <p className="sr-only">
        Photo by{" "}
        <a href={heroImage.photographerUrl}>{heroImage.photographer}</a> on{" "}
        <a href={heroImage.photoPageUrl}>Unsplash</a>
      </p>
    </section>
  );
}
