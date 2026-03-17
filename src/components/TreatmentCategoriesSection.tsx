"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionConsultationCTA } from "@/components/SectionConsultationCTA";
import { SectionShell } from "@/components/SectionShell";
import { treatmentCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

const AUTO_SWITCH_MS = 3000;
const carouselSlides = [
  treatmentCategories[treatmentCategories.length - 1],
  ...treatmentCategories,
  treatmentCategories[0],
];

export function TreatmentCategoriesSection() {
  const [trackIndex, setTrackIndex] = useState(1);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const maxTrackIndex = carouselSlides.length - 1;

  const activeIndex = (trackIndex - 1 + treatmentCategories.length) % treatmentCategories.length;

  const moveToPrevious = () => {
    setIsTransitionEnabled(true);
    setTrackIndex((current) => Math.max(current - 1, 0));
  };

  const moveToNext = () => {
    setIsTransitionEnabled(true);
    setTrackIndex((current) => Math.min(current + 1, maxTrackIndex));
  };

  const moveToIndex = (nextIndex: number) => {
    if (nextIndex === activeIndex) {
      return;
    }

    setIsTransitionEnabled(true);
    setTrackIndex(nextIndex + 1);
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setIsTransitionEnabled(true);
      setTrackIndex((current) => Math.min(current + 1, maxTrackIndex));
    }, AUTO_SWITCH_MS);

    return () => window.clearInterval(intervalId);
  }, [isPaused, maxTrackIndex]);

  useEffect(() => {
    if (isTransitionEnabled) {
      return;
    }

    const animationFrameId = window.requestAnimationFrame(() => {
      setIsTransitionEnabled(true);
    });

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [isTransitionEnabled]);

  const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") {
      return;
    }

    if (trackIndex === maxTrackIndex) {
      setIsTransitionEnabled(false);
      setTrackIndex(1);
    } else if (trackIndex === 0) {
      setIsTransitionEnabled(false);
      setTrackIndex(treatmentCategories.length);
    }
  };

  return (
    <SectionShell
      id="treatments"
      title="Curated treatment categories"
      description="Explore the clinic's core areas of care through concise treatment groups built to be easy to scan and simple to understand."
    >
      <div className="rounded-[2.3rem] border border-[#E7DDD2] bg-[linear-gradient(135deg,#F8F1E8_0%,#EFE3D6_100%)] p-3 shadow-[0_22px_58px_rgba(58,40,24,0.08)] sm:p-4">
        <div className="overflow-hidden rounded-[1.9rem] border border-[#E7DDD2] bg-[linear-gradient(180deg,#FCF8F3_0%,#F6EEE5_100%)] shadow-[0_18px_48px_rgba(58,40,24,0.06)]">
          <div className="flex items-center justify-between border-b border-[#EEE4DA] px-4 py-4 sm:px-6">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#8D6B3F] sm:text-xs sm:tracking-[0.3em]">
                Treatment Categories
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Show previous category"
                onClick={moveToPrevious}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4D7CA] bg-[#FCF7F1] text-xl text-[#2F281F] transition hover:border-[#B08A56] hover:text-[#8D6B3F]"
              >
                &#8249;
              </button>
              <button
                type="button"
                aria-label="Show next category"
                onClick={moveToNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4D7CA] bg-[#FCF7F1] text-xl text-[#2F281F] transition hover:border-[#B08A56] hover:text-[#8D6B3F]"
              >
                &#8250;
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-[#FCF8F3] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-[#FCF8F3] to-transparent" />

            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              onTouchCancel={() => setIsPaused(false)}
              onTransitionEnd={handleTransitionEnd}
              className={cn(
                "flex",
                isTransitionEnabled
                  ? "transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  : "transition-none",
              )}
              style={{ transform: `translateX(-${trackIndex * 100}%)` }}
            >
              {carouselSlides.map((category, index) => {
                const logicalIndex =
                  (index - 1 + treatmentCategories.length) % treatmentCategories.length;

                return (
                  <article
                    key={`${category.title}-${index}`}
                    className={cn(
                      "min-w-full p-4 sm:p-6 lg:p-8",
                      logicalIndex === activeIndex ? "opacity-100" : "opacity-70",
                      "transition-opacity duration-[1600ms] ease-in-out",
                    )}
                  >
                    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                      <div className="rounded-[1.9rem] border border-[#EAE0D6] bg-[linear-gradient(180deg,#FFFCF8_0%,#F8F1E8_100%)] p-6 sm:p-7">
                        <h3 className="text-3xl leading-tight text-[#2F281F] sm:text-4xl">
                          {category.title}
                        </h3>
                        <p className="mt-5 text-base leading-8 text-[#605448] sm:text-lg">
                          {category.description}
                        </p>

                        <div className="mt-8 rounded-[1.5rem] border border-[#E5D7CA] bg-[rgba(255,250,244,0.82)] p-5">
                          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8C7B6D]">
                            Treatment Focus
                          </p>
                          <p className="mt-3 text-sm leading-7 text-[#605448]">
                            Curated procedures and physician-guided options grouped for easier
                            treatment discovery.
                          </p>
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {category.treatments.map((treatment) => (
                          <div
                            key={treatment}
                            className="rounded-[1.45rem] border border-[#E7DDD2] bg-[linear-gradient(180deg,#FFFDF9_0%,#F7F0E8_100%)] px-5 py-5 shadow-[0_12px_30px_rgba(58,40,24,0.05)]"
                          >
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8D6B3F]">
                              Service
                            </p>
                            <p className="mt-3 text-lg leading-7 text-[#2F281F]">{treatment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-[#EEE4DA] px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2">
              {treatmentCategories.map((category, index) => (
                <button
                  key={category.title}
                  type="button"
                  aria-label={`Show ${category.title}`}
                  onClick={() => moveToIndex(index)}
                  className={cn(
                    "h-2.5 rounded-full transition duration-300",
                    activeIndex === index ? "w-10 bg-[#B08A56]" : "w-2.5 bg-[#DCCFC2]",
                  )}
                />
              ))}
            </div>
            <div className="flex items-center justify-end gap-4">
              <ButtonLink href="#contact" variant="secondary">
                View All Treatments
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <SectionConsultationCTA message="Not sure which category fits your goals? Book a consultation and we will help you narrow the right treatment path with clarity." />
    </SectionShell>
  );
}
