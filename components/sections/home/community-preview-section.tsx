import Image from "next/image";
import Link from "next/link";
import {
  communityPreviewContent,
  type CommunityExperience,
} from "@/content/home";
import { SectionIntro } from "@/components/ui/section-intro";
import { primaryCtaClassName } from "@/lib/cta-styles";

function ExperienceCard({ experience }: { experience: CommunityExperience }) {
  const isGold = experience.accent === "gold";
  const isLiveWars = experience.id === "live-wars";
  const borderClass = isGold
    ? "border-brand-accent/30 hover:border-brand-accent/50 hover:shadow-[0_0_24px_rgba(255,215,0,0.12)]"
    : isLiveWars
      ? "border-brand-primary/35 hover:border-brand-primary/55 hover:shadow-[0_0_28px_rgba(0,174,239,0.18)]"
      : "border-white/10 hover:border-brand-primary/30 hover:shadow-[0_0_20px_rgba(0,174,239,0.12)]";

  return (
    <article
      className={`overflow-hidden rounded-2xl border bg-surface-card transition-shadow ${borderClass} ${isLiveWars ? "md:col-span-2 md:grid md:grid-cols-2" : ""}`}
    >
      <div
        className={`relative min-h-52 overflow-hidden ${isLiveWars ? "md:min-h-full" : "aspect-16/10"}`}
      >
        <Image
          src={experience.image.src}
          alt={experience.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 560px"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/30 to-transparent"
        />
        {isLiveWars ? (
          <span className="absolute top-4 left-4 rounded-full border border-brand-primary/40 bg-brand-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-primary-light">
            LIVE Wars
          </span>
        ) : null}
        {isGold ? (
          <span className="absolute top-4 left-4 rounded-full border border-brand-accent/40 bg-brand-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-accent">
            Awards Night
          </span>
        ) : null}
      </div>
      <div className="flex flex-col justify-center p-6 lg:p-8">
        <h3
          className={`font-display text-2xl font-bold tracking-tight ${isGold ? "text-brand-accent" : "text-white"}`}
        >
          {experience.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">
          {experience.description}
        </p>
        <p className="sr-only">
          Photo by{" "}
          <a href={experience.image.photographerUrl}>
            {experience.image.photographer}
          </a>{" "}
          on <a href={experience.image.photoPageUrl}>Unsplash</a>
        </p>
      </div>
    </article>
  );
}

export function CommunityPreviewSection() {
  const { eyebrow, heading, supportingCopy, experiences, cta } =
    communityPreviewContent;

  return (
    <section
      aria-labelledby="community-preview-heading"
      className="relative overflow-hidden border-b border-white/10 bg-brand-navy"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 size-96 rounded-full bg-brand-primary/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 size-72 rounded-full bg-brand-accent/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <SectionIntro
          eyebrow={eyebrow}
          heading={heading}
          supporting={supportingCopy}
          headingId="community-preview-heading"
          variant="dark"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:mt-14">
          <Link href={cta.href} className={primaryCtaClassName}>
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
