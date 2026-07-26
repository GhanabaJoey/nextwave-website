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
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-brand-navy-deep"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-primary/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(0,174,239,0.14),transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_50%_50%,rgba(0,174,239,0.05),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary">
            {eyebrow}
          </p>
          <h2
            id="final-cta-heading"
            className="font-display mt-4 text-balance text-[2.25rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-white sm:mt-5 sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.75rem]"
          >
            {heading}
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-sans text-base leading-relaxed text-text-muted sm:text-lg">
            {supportingCopy}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={primaryCta.href}
              className={`${primaryCtaClassName} gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary`}
            >
              {primaryCta.label}
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href={secondaryCta.href}
              className={`${secondaryCtaClassName} gap-1.5 border-white/25 bg-transparent text-white hover:border-white/40 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary`}
            >
              {secondaryCta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
