import Image from "next/image";
import { VERIFIED_BADGE, type Testimonial } from "@/content/creator-voices";

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }, (_, index) => (
        <svg
          key={index}
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-4 w-4 fill-brand-accent sm:h-[18px] sm:w-[18px]"
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCard({
  testimonial,
  verifiedBadge = VERIFIED_BADGE,
}: {
  testimonial: Testimonial;
  verifiedBadge?: string;
}) {
  const initials = getInitials(testimonial.name);

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-surface-card p-6 ring-1 ring-white/5 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-white/15 hover:bg-surface-card-hover hover:shadow-[0_20px_40px_-24px_rgba(0,174,239,0.35)] motion-reduce:transition-none sm:p-7">
      <StarRating />

      <blockquote className="mt-5 flex-1">
        <p className="font-sans text-base leading-relaxed text-white/90 sm:text-[17px]">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      <footer className="mt-6 flex items-center gap-4 border-t border-white/8 pt-5">
        {testimonial.profileImage ? (
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-primary/20">
            <Image
              src={testimonial.profileImage}
              alt=""
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
        ) : (
          <div
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 font-display text-sm font-bold text-brand-primary-light ring-2 ring-brand-primary/20"
          >
            {initials}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-lg font-bold text-white">
            {testimonial.name}
          </p>
          <p className="mt-0.5 font-sans text-sm text-text-muted">
            {testimonial.country}
          </p>
        </div>
      </footer>

      <p className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-primary/10 px-3 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-primary-light ring-1 ring-brand-primary/20">
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5 shrink-0 fill-current"
        >
          <path d="M6.5 10.5 3.5 7.5l1-1 2 2 5-5 1 1-6 6z" />
        </svg>
        {verifiedBadge}
      </p>
    </article>
  );
}
