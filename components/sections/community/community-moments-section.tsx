import Image from "next/image";
import { communityMomentsContent } from "@/content/community";
import { SectionIntro } from "@/components/ui/section-intro";

export function CommunityMomentsSection() {
  const { eyebrow, heading, copy, gallery } = communityMomentsContent;

  const tall = gallery.find((item) => item.layout === "tall")!;
  const wide = gallery.find((item) => item.layout === "wide")!;
  const smallItems = gallery.filter((item) => item.layout === "small");

  return (
    <section
      aria-labelledby="community-moments-heading"
      className="relative bg-brand-navy-deep"
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
            supporting={copy}
            headingId="community-moments-heading"
            variant="dark"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 md:grid-cols-12 md:gap-5">
          <figure className="relative min-h-[320px] overflow-hidden rounded-xl md:col-span-5 md:row-span-2 md:min-h-full">
            <Image
              src={tall.src}
              alt={tall.alt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
            />
            <figcaption className="sr-only">
              Photo by{" "}
              <a href={tall.photographerUrl}>{tall.photographer}</a> on{" "}
              <a href={tall.photoPageUrl}>Unsplash</a>
            </figcaption>
          </figure>

          <figure className="relative min-h-[220px] overflow-hidden rounded-xl md:col-span-7">
            <Image
              src={wide.src}
              alt={wide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover object-center"
            />
            <figcaption className="sr-only">
              Photo by{" "}
              <a href={wide.photographerUrl}>{wide.photographer}</a> on{" "}
              <a href={wide.photoPageUrl}>Unsplash</a>
            </figcaption>
          </figure>

          {smallItems.map((item, index) => (
            <figure
              key={item.id}
              className={`relative min-h-[200px] overflow-hidden rounded-xl md:min-h-[220px] ${
                index === 0 ? "md:col-span-3" : "md:col-span-4"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-center"
              />
              <figcaption className="sr-only">
                Photo by{" "}
                <a href={item.photographerUrl}>{item.photographer}</a> on{" "}
                <a href={item.photoPageUrl}>Unsplash</a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
