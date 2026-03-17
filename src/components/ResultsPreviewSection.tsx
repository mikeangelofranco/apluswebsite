"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionConsultationCTA } from "@/components/SectionConsultationCTA";
import { SectionShell } from "@/components/SectionShell";
import { resultPreviews } from "@/lib/data";
import { cn } from "@/lib/utils";

const AUTO_SWITCH_MS = 3000;
const SLIDE_TRANSITION_MS = 1600;
const carouselSlides = [
  resultPreviews[resultPreviews.length - 1],
  ...resultPreviews,
  resultPreviews[0],
];

export function ResultsPreviewSection() {
  const [trackIndex, setTrackIndex] = useState(1);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const maxTrackIndex = carouselSlides.length - 1;

  const activeIndex = (trackIndex - 1 + resultPreviews.length) % resultPreviews.length;

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
      setTrackIndex(resultPreviews.length);
    }
  };

  return (
    <SectionShell
      title="Real Results, Thoughtfully Delivered"
      description="A small curated preview of the outcome-focused work patients come to us for, always planned with safety, fit, and subtlety in mind."
    >
      <div className="rounded-[2.3rem] border border-[#E7DDD2] bg-[linear-gradient(135deg,#F8F1E8_0%,#EFE3D6_100%)] p-3 shadow-[0_22px_58px_rgba(58,40,24,0.08)] sm:p-4">
        <div className="overflow-hidden rounded-[1.9rem] border border-[#E7DDD2] bg-[linear-gradient(180deg,#FCF8F3_0%,#F6EEE5_100%)] shadow-[0_18px_48px_rgba(58,40,24,0.06)]">
          <div className="flex items-center justify-between border-b border-[#EEE4DA] px-4 py-4 sm:px-6">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#8D6B3F] sm:text-xs sm:tracking-[0.3em]">
                Before & After
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Show previous result"
                onClick={moveToPrevious}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4D7CA] bg-[#FCF7F1] text-xl text-[#2F281F] transition hover:border-[#B08A56] hover:text-[#8D6B3F]"
              >
                &#8249;
              </button>
              <button
                type="button"
                aria-label="Show next result"
                onClick={moveToNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4D7CA] bg-[#FCF7F1] text-xl text-[#2F281F] transition hover:border-[#B08A56] hover:text-[#8D6B3F]"
              >
                &#8250;
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
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
              {carouselSlides.map((result, index) => {
                const logicalIndex = (index - 1 + resultPreviews.length) % resultPreviews.length;

                return (
                  <article
                    key={`${result.title}-${index}`}
                    className={cn(
                      "min-w-full p-4 sm:p-6 lg:p-8",
                      logicalIndex === activeIndex ? "opacity-100" : "opacity-70",
                      "transition-opacity duration-[1600ms] ease-in-out",
                    )}
                  >
                    <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="overflow-hidden rounded-[1.7rem] border border-[#E8DDD1] bg-[#F2E8DE]">
                          <div
                            className={cn(
                              "relative min-h-[220px] sm:min-h-[280px]",
                              result.imageFit === "contain" && "bg-[#EADFD3]",
                            )}
                          >
                            <Image
                              src={result.beforeImage}
                              alt={`${result.title} before treatment`}
                              fill
                              className={cn(
                                "object-cover",
                                result.imageFit === "contain" && "scale-[0.94] object-contain",
                              )}
                              sizes="(min-width: 1024px) 25vw, 100vw"
                            />
                          </div>
                          <div className="border-t border-[#E8DDD1] px-5 py-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8C7B6D]">
                              Before
                            </p>
                          </div>
                        </div>

                        <div className="overflow-hidden rounded-[1.7rem] border border-[#E8DDD1] bg-[#F2E8DE]">
                          <div
                            className={cn(
                              "relative min-h-[220px] sm:min-h-[280px]",
                              result.imageFit === "contain" && "bg-[#EADFD3]",
                            )}
                          >
                            <Image
                              src={result.afterImage}
                              alt={`${result.title} after treatment`}
                              fill
                              className={cn(
                                "object-cover",
                                result.imageFit === "contain" && "scale-[0.94] object-contain",
                              )}
                              sizes="(min-width: 1024px) 25vw, 100vw"
                            />
                          </div>
                          <div className="border-t border-[#E8DDD1] px-5 py-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D6B3F]">
                              After
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[1.9rem] border border-[#EAE0D6] bg-[linear-gradient(180deg,#FFFCF8_0%,#F8F1E8_100%)] p-6 sm:p-7">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#8D6B3F] sm:text-xs sm:tracking-[0.3em]">
                          Case {String(logicalIndex + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-4 text-3xl leading-tight text-[#2F281F] sm:text-4xl">
                          {result.title}
                        </h3>
                        <p className="mt-5 text-base leading-8 text-[#605448] sm:text-lg">
                          {result.description}
                        </p>

                        <div className="mt-8 rounded-[1.5rem] border border-[#E5D7CA] bg-[rgba(255,250,244,0.82)] p-5">
                          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8C7B6D]">
                            Curated Preview
                          </p>
                          <p className="mt-3 text-sm leading-7 text-[#605448]">
                            A polished rotating look at some of the treatment outcomes patients
                            ask about most often.
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-[#EEE4DA] px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2">
              {resultPreviews.map((result, index) => (
                <button
                  key={result.title}
                  type="button"
                  aria-label={`Show ${result.title}`}
                  onClick={() => moveToIndex(index)}
                  className={cn(
                    "h-2.5 rounded-full transition duration-300",
                    activeIndex === index ? "w-10 bg-[#B08A56]" : "w-2.5 bg-[#DCCFC2]",
                  )}
                />
              ))}
            </div>
            <div className="flex items-center justify-between gap-4 lg:justify-end">
              <p className="text-sm leading-7 text-[#8C7B6D]">
                Slide {String(activeIndex + 1).padStart(2, "0")} of{" "}
                {String(resultPreviews.length).padStart(2, "0")}
              </p>
              <ButtonLink href="#contact" variant="secondary">
                View More Results
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-8 max-w-2xl text-sm leading-7 text-[#8C7B6D]">
        Results vary by patient, anatomy, and treatment plan. Consultation is required
        to determine suitability and expected outcomes.
      </p>
      <SectionConsultationCTA message="Discuss your goals privately with our team and learn which treatments are most suitable for your features, skin, and recovery preferences." />
    </SectionShell>
  );
}
