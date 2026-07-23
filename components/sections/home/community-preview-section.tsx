import Image from "next/image";
import Link from "next/link";
import {
  communityPreviewContent,
  type CommunityExperience,
} from "@/content/home";
import { SectionIntro } from "@/components/ui/section-intro";

function ExperienceTile({
  experience,
  className = "",
  imageClassName = "",
  sizes,
}: {
  experience: CommunityExperience;
  className?: string;
  imageClassName?: string;
  sizes: string;
}) {
  const isGold = experience.accent === "gold";
  const categoryClass = isGold
    ? "text-brand-accent"
    : "text-brand-primary-light";

  return (
    <article className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <div className={`relative overflow-hidden ${imageClassName}`}>
        <Image
          src={experience.image.src}
          alt={experience.image.alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-brand-navy/90 via-brand-navy/20 to-brand-navy/5"
        />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p
            className={`font-sans text-[11px] font-semibold uppercase tracking-[0.22em] ${categoryClass}`}
          >
            {experience.action}
          </p>
          <h3
            className={`mt-1.5 font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-[1.75rem] ${
              isGold ? "text-brand-accent" : "text-white"
            }`}
          >
            {experience.category}
          </h3>
          <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-white/80 sm:text-[15px]">
            {experience.description}
          </p>
        </div>
      </div>
      <p className="sr-only">
        Photo by{" "}
        <a href={experience.image.photographerUrl}>
          {experience.image.photographer}
        </a>{" "}
        on <a href={experience.image.photoPageUrl}>Unsplash</a>
      </p>
    </article>
  );
}

export function CommunityPreviewSection() {
  const { eyebrow, heading, supportingCopy, experiences, cta } =
    communityPreviewContent;

  const [liveWars, training, community, awards] = experiences;

  return (
    <section
      aria-labelledby="community-preview-heading"
      className="relative overflow-hidden bg-brand-navy"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <SectionIntro
            eyebrow={eyebrow}
            heading={heading}
            supporting={supportingCopy}
            headingId="community-preview-heading"
            variant="dark"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-12 md:gap-5 lg:mt-16">
          <ExperienceTile
            experience={liveWars}
            className="md:col-span-7"
            imageClassName="min-h-72 sm:min-h-80 lg:min-h-[22rem]"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
          <ExperienceTile
            experience={training}
            className="md:col-span-5"
            imageClassName="min-h-64 sm:min-h-72 lg:min-h-[22rem]"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <ExperienceTile
            experience={community}
            className="md:col-span-5"
            imageClassName="min-h-64 sm:min-h-72 lg:min-h-[18rem]"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <ExperienceTile
            experience={awards}
            className="md:col-span-7"
            imageClassName="min-h-64 sm:min-h-72 lg:min-h-[18rem]"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </div>

        <div className="mt-12 lg:mt-14">
          <Link
            href={cta.href}
            className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-brand-primary-light transition-colors hover:text-brand-primary focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary motion-reduce:transition-none"
          >
            {cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
