"use client";

import { useEffect, useState } from "react";
import { SectionConsultationCTA } from "@/components/SectionConsultationCTA";
import { SectionShell } from "@/components/SectionShell";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

const AUTO_SWITCH_MS = 3000;
const carouselSlides = [
  testimonials[testimonials.length - 1],
  ...testimonials,
  testimonials[0],
];

export function TestimonialsSection() {
  const [trackIndex, setTrackIndex] = useState(1);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const maxTrackIndex = carouselSlides.length - 1;

  const activeIndex = (trackIndex - 1 + testimonials.length) % testimonials.length;

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
      setTrackIndex(testimonials.length);
    }
  };

  return (
    <SectionShell
      title="What Our Patients Say"
      description="A few of the qualities patients mention most often: discretion, professionalism, a calm environment, and results that never feel overdone."
    >
      <div className="rounded-[2.3rem] border border-[#E7DDD2] bg-[linear-gradient(135deg,#F8F1E8_0%,#EFE3D6_100%)] p-3 shadow-[0_22px_58px_rgba(58,40,24,0.08)] sm:p-4">
        <div className="overflow-hidden rounded-[1.9rem] border border-[#E7DDD2] bg-[linear-gradient(180deg,#FCF8F3_0%,#F6EEE5_100%)] shadow-[0_18px_48px_rgba(58,40,24,0.06)]">
          <div className="flex items-center justify-between border-b border-[#EEE4DA] px-4 py-4 sm:px-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#8D6B3F] sm:text-xs sm:tracking-[0.3em]">
              Patient Reviews
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Show previous testimonial"
                onClick={moveToPrevious}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4D7CA] bg-[#FCF7F1] text-xl text-[#2F281F] transition hover:border-[#B08A56] hover:text-[#8D6B3F]"
              >
                &#8249;
              </button>
              <button
                type="button"
                aria-label="Show next testimonial"
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
              {carouselSlides.map((testimonial, index) => {
                const logicalIndex = (index - 1 + testimonials.length) % testimonials.length;

                return (
                  <article
                    key={`${testimonial.name}-${index}`}
                    className={cn(
                      "min-w-full p-4 sm:p-6 lg:p-8",
                      logicalIndex === activeIndex ? "opacity-100" : "opacity-70",
                      "transition-opacity duration-[1600ms] ease-in-out",
                    )}
                  >
                    <div className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
                      <div className="rounded-[1.9rem] border border-[#D8C6B3] bg-[linear-gradient(145deg,#6D523B_0%,#8B694C_48%,#A8835B_100%)] p-6 text-white shadow-[0_18px_45px_rgba(41,28,17,0.16)] sm:p-7">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#F0D5B1] sm:text-xs sm:tracking-[0.3em]">
                          5-Star Review
                        </p>
                        <div className="mt-7 flex gap-1 text-[#F7E7D1]">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                        </div>
                        <p className="mt-8 text-[2rem] leading-none text-[#FFF7EE] sm:text-[2.4rem]">
                          &ldquo;
                        </p>
                        <p className="mt-6 text-base leading-8 text-[#FFF1E4] sm:text-lg">
                          {testimonial.highlight}
                        </p>
                      </div>

                      <div className="rounded-[1.9rem] border border-[#EAE0D6] bg-[linear-gradient(180deg,#FFFCF8_0%,#F8F1E8_100%)] p-6 sm:p-7">
                        <p className="text-lg leading-8 text-[#3F342A] sm:text-[1.35rem]">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>

                        <div className="mt-8 rounded-[1.45rem] border border-[#E5D7CA] bg-[rgba(255,250,244,0.82)] px-5 py-5">
                          <p className="text-base font-semibold text-[#2F281F]">
                            {testimonial.name}
                          </p>
                          <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[#8C7B6D]">
                            {testimonial.treatment}
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
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Show testimonial from ${testimonial.name}`}
                  onClick={() => moveToIndex(index)}
                  className={cn(
                    "h-2.5 rounded-full transition duration-300",
                    activeIndex === index ? "w-10 bg-[#B08A56]" : "w-2.5 bg-[#DCCFC2]",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <SectionConsultationCTA message="Take the next step with a consultation that is calm, discreet, and guided by what will look best for you in real life." />
    </SectionShell>
  );
}
