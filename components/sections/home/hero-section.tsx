import Image from "next/image";
import Link from "next/link";
import { heroContent, heroImage } from "@/content/home";
import {
  primaryCtaClassName,
  secondaryCtaClassName,
} from "@/lib/cta-styles";

function HeroCreatorVisual() {
  return (
    <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[2rem] bg-brand-primary/20 blur-3xl"
      />
      <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 sm:aspect-5/6 lg:aspect-4/5">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 540px"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/20 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-brand-navy/60 via-transparent to-transparent"
        />

        <div className="pointer-events-none absolute inset-x-4 bottom-4 flex flex-wrap gap-2 sm:inset-x-5 sm:bottom-5">
          <span className="rounded-lg border border-white/10 bg-brand-navy/85 px-3 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
            40+ Creators
          </span>
          <span className="rounded-lg border border-white/10 bg-brand-navy/85 px-3 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
            UK • Australia
          </span>
        </div>
      </div>
      <figcaption className="sr-only">
        Photo by{" "}
        <a href={heroImage.photographerUrl}>{heroImage.photographer}</a> on{" "}
        <a href={heroImage.photoPageUrl}>Unsplash</a>
      </figcaption>
    </figure>
  );
}

export function HeroSection() {
  const {
    eyebrow,
    headlineLines,
    supportingCopy,
    primaryCta,
    secondaryCta,
    trustLine,
  } = heroContent;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-white/10 bg-brand-navy"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-brand-primary/15 via-transparent to-electric-blue/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 size-96 rounded-full bg-brand-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 size-80 rounded-full bg-brand-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-14 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-20">
        <div className="max-w-xl">
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-primary">
            {eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="font-display mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
          >
            {headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-6 text-base leading-relaxed text-text-muted sm:text-lg">
            {supportingCopy}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={primaryCta.href} className={primaryCtaClassName}>
              {primaryCta.label}
            </Link>
            <Link href={secondaryCta.href} className={secondaryCtaClassName}>
              {secondaryCta.label}
            </Link>
          </div>

          <p className="mt-8 text-sm font-medium text-text-muted">{trustLine}</p>
        </div>

        <div className="mt-12 lg:mt-0">
          <HeroCreatorVisual />
        </div>
      </div>
    </section>
  );
}
