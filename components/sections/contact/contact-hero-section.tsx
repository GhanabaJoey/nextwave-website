import Image from "next/image";
import { contactHeroContent } from "@/content/contact";
import { ContactImageAttribution } from "@/components/sections/contact/contact-image-attribution";

export function ContactHeroSection() {
  const { eyebrow, headlineLines, supportingCopy, image } = contactHeroContent;

  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative min-h-[420px] overflow-hidden sm:min-h-[460px] lg:min-h-[540px]"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        quality={85}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1400px"
        className="object-cover object-[72%_center] sm:object-[68%_center] lg:object-[65%_center]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-brand-navy/95 from-0% via-brand-navy/70 via-[26%] via-brand-navy/22 via-[44%] to-transparent to-[72%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-brand-navy via-brand-navy/50 to-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-[inherit] max-w-7xl flex-col justify-center px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="min-w-0 max-w-2xl">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-primary sm:text-xs sm:tracking-[0.28em]">
            <span
              aria-hidden="true"
              className="h-px w-5 shrink-0 bg-brand-primary/70 sm:w-6"
            />
            {eyebrow}
          </p>

          <h1
            id="contact-hero-heading"
            className="font-display mt-5 text-[2.35rem] font-extrabold leading-[0.98] tracking-[-0.025em] text-white sm:text-[3.25rem] md:text-[3.75rem] lg:text-[4.25rem] xl:text-[5rem]"
          >
            <span className="block">{headlineLines[0]}</span>
            <span className="block text-brand-primary">{headlineLines[1]}</span>
          </h1>

          <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
            {supportingCopy}
          </p>
        </div>
      </div>

      <ContactImageAttribution image={image} />
    </section>
  );
}
