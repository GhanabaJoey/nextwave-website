import Link from "next/link";
import { finalCtaContent } from "@/content/home";
import {
  primaryCtaClassName,
  secondaryCtaClassName,
} from "@/lib/cta-styles";

export function FinalCtaSection() {
  const { eyebrow, heading, supportingCopy, primaryCta, secondaryCta } =
    finalCtaContent;

  return (
    <section aria-labelledby="final-cta-heading" className="bg-brand-navy-deep">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:py-16">
        <div className="relative overflow-hidden rounded-3xl border border-brand-primary/30 bg-linear-to-br from-brand-navy via-surface-card to-brand-navy-deep px-8 py-12 shadow-[0_0_60px_rgba(0,174,239,0.15)] sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-16 size-64 rounded-full bg-brand-primary/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-12 size-48 rounded-full bg-brand-accent/15 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-primary">
              {eyebrow}
            </p>
            <h2
              id="final-cta-heading"
              className="font-display mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
              {supportingCopy}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link href={primaryCta.href} className={primaryCtaClassName}>
                {primaryCta.label}
              </Link>
              <Link href={secondaryCta.href} className={secondaryCtaClassName}>
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
