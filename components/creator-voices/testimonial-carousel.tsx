"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { VERIFIED_BADGE, type Testimonial } from "@/content/creator-voices";
import { TestimonialCard } from "@/components/creator-voices/testimonial-card";

const SLIDE_DURATION_MS = 700;
const AUTO_SLIDE_INTERVAL_MS = 6000;
const SWIPE_THRESHOLD_PX = 50;

function chunkTestimonials(
  items: readonly Testimonial[],
  size: number,
): Testimonial[][] {
  const slides: Testimonial[][] = [];
  for (let index = 0; index < items.length; index += size) {
    slides.push(items.slice(index, index + size));
  }
  return slides;
}

function CarouselArrow({
  direction,
  onClick,
  disabled,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-brand-navy/60 text-white transition-[background-color,border-color,transform] duration-200 hover:border-brand-primary/40 hover:bg-brand-navy hover:text-brand-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-none stroke-current stroke-2"
      >
        {direction === "prev" ? (
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

export function TestimonialCarousel({
  testimonials,
  verifiedBadge = VERIFIED_BADGE,
}: {
  testimonials: readonly Testimonial[];
  verifiedBadge?: string;
}) {
  const carouselId = useId();
  const [cardsPerSlide, setCardsPerSlide] = useState(1);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const isDragging = useRef(false);
  const transitionTimeoutRef = useRef<number | null>(null);

  const slides = chunkTestimonials(testimonials, cardsPerSlide);
  const slideCount = slides.length;
  const usesInfiniteLoop = slideCount > 1;

  const extendedSlides = usesInfiniteLoop
    ? [slides[slideCount - 1], ...slides, slides[0]]
    : slides;

  const clearTransitionTimeout = useCallback(() => {
    if (transitionTimeoutRef.current !== null) {
      window.clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
  }, []);

  const goToSlide = useCallback(
    (nextIndex: number, animate = true) => {
      clearTransitionTimeout();
      setIsTransitionEnabled(animate);
      setActiveIndex(nextIndex);
    },
    [clearTransitionTimeout],
  );

  const goNext = useCallback(() => {
    if (slideCount <= 1) return;
    setIsTransitionEnabled(true);
    setActiveIndex((current) => current + 1);
  }, [slideCount]);

  const goPrev = useCallback(() => {
    if (slideCount <= 1) return;
    setIsTransitionEnabled(true);
    setActiveIndex((current) => current - 1);
  }, [slideCount]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateCardsPerSlide = () => {
      const nextCardsPerSlide = mediaQuery.matches ? 2 : 1;
      setCardsPerSlide(nextCardsPerSlide);
      setActiveIndex(nextCardsPerSlide === 2 && testimonials.length > 2 ? 1 : 0);
      setIsTransitionEnabled(false);
    };

    updateCardsPerSlide();
    mediaQuery.addEventListener("change", updateCardsPerSlide);
    return () => mediaQuery.removeEventListener("change", updateCardsPerSlide);
  }, [testimonials.length]);

  useEffect(() => {
    if (slideCount <= 1 || isPaused) return;

    const intervalId = window.setInterval(goNext, AUTO_SLIDE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [goNext, isPaused, slideCount, cardsPerSlide]);

  const handleTransitionEnd = () => {
    if (!usesInfiniteLoop) return;

    if (activeIndex === extendedSlides.length - 1) {
      goToSlide(1, false);
    } else if (activeIndex === 0) {
      goToSlide(slideCount, false);
    }
  };

  const visibleDotIndex = !usesInfiniteLoop
    ? 0
    : activeIndex === 0
      ? slideCount - 1
      : activeIndex === extendedSlides.length - 1
        ? 0
        : activeIndex - 1;

  const translatePercent = -(activeIndex * 100);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? 0;
    touchDeltaX.current = 0;
    isDragging.current = true;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const currentX = event.touches[0]?.clientX ?? 0;
    touchDeltaX.current = currentX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (touchDeltaX.current <= -SWIPE_THRESHOLD_PX) {
      setIsTransitionEnabled(true);
      setActiveIndex((current) => current + 1);
    } else if (touchDeltaX.current >= SWIPE_THRESHOLD_PX) {
      setIsTransitionEnabled(true);
      setActiveIndex((current) => current - 1);
    }

    touchDeltaX.current = 0;
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div
      className="mt-12 lg:mt-14"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="relative">
        <div
          id={`${carouselId}-viewport`}
          className="overflow-hidden"
          aria-live="polite"
          aria-atomic="true"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex"
            style={{
              transform: `translate3d(${translatePercent}%, 0, 0)`,
              transition: isTransitionEnabled
                ? `transform ${SLIDE_DURATION_MS}ms ease-in-out`
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSlides.map((slide, slideIndex) => (
              <div
                key={`slide-${slideIndex}`}
                className="w-full shrink-0 px-0.5"
                aria-hidden={
                  usesInfiniteLoop ? slideIndex !== activeIndex : false
                }
              >
                <div
                  className={`grid gap-5 ${
                    cardsPerSlide === 2 ? "md:grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {slide.map((testimonial) => (
                    <TestimonialCard
                      key={`${slideIndex}-${testimonial.id}`}
                      testimonial={testimonial}
                      verifiedBadge={verifiedBadge}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {usesInfiniteLoop ? (
          <div className="mt-8 flex items-center justify-between gap-4">
            <CarouselArrow
              direction="prev"
              label="Previous testimonials"
              onClick={goPrev}
            />

            <div
              className="flex flex-1 items-center justify-center gap-2"
              role="tablist"
              aria-label="Testimonial slides"
            >
              {slides.map((_, dotIndex) => {
                const isActive = dotIndex === visibleDotIndex;
                return (
                  <button
                    key={dotIndex}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Go to slide ${dotIndex + 1} of ${slideCount}`}
                    onClick={() => goToSlide(dotIndex + 1)}
                    className={`h-2.5 rounded-full transition-[width,background-color] duration-300 ease-out motion-reduce:transition-none ${
                      isActive
                        ? "w-8 bg-brand-primary"
                        : "w-2.5 bg-white/25 hover:bg-white/40"
                    }`}
                  />
                );
              })}
            </div>

            <CarouselArrow
              direction="next"
              label="Next testimonials"
              onClick={goNext}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
