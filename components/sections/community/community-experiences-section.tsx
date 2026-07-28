import Image from "next/image";
import {
  communityExperiencesContent,
  type CommunityExperienceItem,
} from "@/content/community";
import { SectionIntro } from "@/components/ui/section-intro";
import { CommunityImageAttribution } from "@/components/sections/community/community-image-attribution";

function ExperienceTile({
  experience,
  className = "",
  imageClassName = "",
  sizes,
}: {
  experience: CommunityExperienceItem;
  className?: string;
  imageClassName?: string;
  sizes: string;
}) {
  const isGold = experience.accent === "gold";
  const labelClass = isGold ? "text-brand-accent" : "text-brand-primary-light";
  const titleClass = isGold ? "text-brand-accent" : "text-white";

  return (
    <article className={`relative overflow-hidden rounded-xl ${className}`}>
      <div className={`relative overflow-hidden ${imageClassName}`}>
        <Image
          src={experience.image.src}
          alt={experience.image.alt}
          fill
          sizes={sizes}
          className={`object-cover ${
            "objectPosition" in experience.image
              ? experience.image.objectPosition
              : ""
          }`}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-brand-navy/92 via-brand-navy/15 to-brand-navy/5"
        />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p
            className={`font-sans text-[11px] font-semibold uppercase tracking-[0.22em] ${labelClass}`}
          >
            {experience.label}
          </p>
          <h3
            className={`mt-1.5 font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-[1.75rem] ${titleClass}`}
          >
            {experience.title}
          </h3>
          <p className="mt-2 max-w-lg font-sans text-sm leading-relaxed text-white/80 sm:text-[15px]">
            {experience.description}
          </p>
        </div>
      </div>
      <CommunityImageAttribution image={experience.image} />
    </article>
  );
}

export function CommunityExperiencesSection() {
  const { sectionId, eyebrow, heading, supportingCopy, experiences } =
    communityExperiencesContent;

  const liveWars = experiences.find((e) => e.id === "live-wars")!;
  const training = experiences.find((e) => e.id === "training")!;
  const awards = experiences.find((e) => e.id === "awards")!;
  const creatorCommunity = experiences.find((e) => e.id === "creator-community")!;

  return (
    <section
      id={sectionId}
      aria-labelledby="community-experiences-heading"
      className="relative scroll-mt-24 bg-brand-navy-deep"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <SectionIntro
            eyebrow={eyebrow}
            heading={heading}
            supporting={supportingCopy}
            headingId="community-experiences-heading"
            variant="dark"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-12">
          <ExperienceTile
            experience={liveWars}
            className="md:col-span-12"
            imageClassName="min-h-72 sm:min-h-80 lg:min-h-[26rem]"
            sizes="(max-width: 768px) 100vw, 100vw"
          />
          <ExperienceTile
            experience={training}
            className="md:col-span-6"
            imageClassName="min-h-64 sm:min-h-72 lg:min-h-[18rem]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <ExperienceTile
            experience={awards}
            className="md:col-span-6"
            imageClassName="min-h-64 sm:min-h-72 lg:min-h-[18rem]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <ExperienceTile
            experience={creatorCommunity}
            className="md:col-span-12"
            imageClassName="min-h-64 sm:min-h-72 lg:min-h-[20rem]"
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
