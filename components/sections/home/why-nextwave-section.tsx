import Image from "next/image";
import {
  whyNextwaveContent,
  type WhyNextwaveBenefit,
} from "@/content/home";
import { SectionIntro } from "@/components/ui/section-intro";

type BenefitIconName = WhyNextwaveBenefit["icon"];

function BenefitIcon({ name }: { name: BenefitIconName }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "development":
      return (
        <svg {...props}>
          <path d="M12 20V10" />
          <path d="M18 20V4" />
          <path d="M6 20v-4" />
        </svg>
      );
    case "training":
      return (
        <svg {...props}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M8 7h8" />
          <path d="M8 11h6" />
        </svg>
      );
    case "community":
      return (
        <svg {...props}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "events":
      return (
        <svg {...props}>
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      );
    case "recognition":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      );
    case "growth":
      return (
        <svg {...props}>
          <path d="m3 17 6-6 4 4 8-8" />
          <path d="M14 7h7v7" />
        </svg>
      );
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}

function BenefitItem({ benefit }: { benefit: WhyNextwaveBenefit }) {
  const isGold = benefit.accent === "gold";
  const iconWrapClass = isGold
    ? "border-brand-accent/30 bg-brand-accent/10 text-brand-accent"
    : "border-brand-primary/30 bg-brand-primary/10 text-brand-primary";

  return (
    <li className="rounded-xl border border-white/10 bg-surface-card p-5 transition-colors hover:border-brand-primary/25 hover:bg-surface-card-hover">
      <div
        className={`inline-flex size-11 items-center justify-center rounded-lg border ${iconWrapClass}`}
      >
        <BenefitIcon name={benefit.icon} />
      </div>
      <h3 className="mt-4 text-base font-bold text-white">{benefit.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">
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
      className="border-b border-white/10 bg-brand-navy"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <SectionIntro
          eyebrow={eyebrow}
          heading={heading}
          supporting={supportingCopy}
          headingId="why-nextwave-heading"
          variant="dark"
        />

        <figure className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/30 lg:mt-12">
          <div className="relative aspect-21/9 min-h-48 sm:min-h-56">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-r from-brand-navy/80 via-brand-navy/35 to-brand-navy/20"
            />
          </div>
          <figcaption className="sr-only">
            Photo by{" "}
            <a href={image.photographerUrl}>{image.photographer}</a> on{" "}
            <a href={image.photoPageUrl}>Unsplash</a>
          </figcaption>
        </figure>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {benefits.map((benefit) => (
            <BenefitItem key={benefit.id} benefit={benefit} />
          ))}
        </ul>
      </div>
    </section>
  );
}
