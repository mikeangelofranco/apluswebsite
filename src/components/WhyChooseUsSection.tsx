"use client";

import { useEffect, useState } from "react";
import { SectionConsultationCTA } from "@/components/SectionConsultationCTA";
import { SectionShell } from "@/components/SectionShell";
import { trustPoints } from "@/lib/data";
import { cn } from "@/lib/utils";

const AUTO_SWITCH_MS = 3000;
const carouselSlides = [
  trustPoints[trustPoints.length - 1],
  ...trustPoints,
  trustPoints[0],
];

const trustVisuals = [
  {
    eyebrow: "Licensed Team",
    accent: "Clinical Leadership",
    surface:
      "bg-[radial-gradient(circle_at_top_left,rgba(192,160,123,0.28),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(79,57,39,0.42),transparent_42%),linear-gradient(145deg,#5A4331_0%,#71533A_48%,#8A6748_100%)]",
    badges: ["Board-certified", "Experienced clinicians", "Physician-led"],
  },
  {
    eyebrow: "Technology",
    accent: "Precision Systems",
    surface:
      "bg-[radial-gradient(circle_at_top_right,rgba(170,142,107,0.24),transparent_33%),radial-gradient(circle_at_bottom_left,rgba(62,48,38,0.46),transparent_44%),linear-gradient(145deg,#4D4035_0%,#665341_46%,#826C58_100%)]",
    badges: ["Advanced devices", "Calibrated protocols", "Refined outcomes"],
  },
  {
    eyebrow: "Consultations",
    accent: "Tailored Planning",
    surface:
      "bg-[radial-gradient(circle_at_top_left,rgba(203,170,129,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(97,71,52,0.42),transparent_45%),linear-gradient(145deg,#594333_0%,#75563E_50%,#957257_100%)]",
    badges: ["Goals first", "1:1 assessment", "Custom treatment path"],
  },
  {
    eyebrow: "Safety",
    accent: "Natural Results",
    surface:
      "bg-[radial-gradient(circle_at_top_right,rgba(171,143,111,0.2),transparent_31%),radial-gradient(circle_at_bottom_left,rgba(54,41,32,0.5),transparent_43%),linear-gradient(145deg,#45352A_0%,#5F4838_48%,#7A604D_100%)]",
    badges: ["Conservative planning", "Safety-led", "Elegant finish"],
  },
  {
    eyebrow: "Environment",
    accent: "Comfort & Privacy",
    surface:
      "bg-[radial-gradient(circle_at_top_left,rgba(197,165,127,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(88,63,45,0.44),transparent_43%),linear-gradient(145deg,#544031_0%,#6C523E_50%,#8B6D55_100%)]",
    badges: ["Quiet rooms", "Private setting", "Calm experience"],
  },
] as const;

export function WhyChooseUsSection() {
  const [trackIndex, setTrackIndex] = useState(1);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const maxTrackIndex = carouselSlides.length - 1;

  const activeIndex = (trackIndex - 1 + trustPoints.length) % trustPoints.length;

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
      setTrackIndex(trustPoints.length);
    }
  };

  return (
    <SectionShell
      title="Expert-Led Aesthetic Care"
      description="We keep the reasons to choose the clinic simple: experienced people, thoughtful planning, refined execution, and an environment that feels calm from start to finish."
    >
      <div className="rounded-[2.3rem] border border-[#E7DDD2] bg-[linear-gradient(135deg,#F8F1E8_0%,#EFE3D6_100%)] p-3 shadow-[0_22px_58px_rgba(58,40,24,0.08)] sm:p-4">
        <div className="overflow-hidden rounded-[1.9rem] border border-[#E7DDD2] bg-[linear-gradient(180deg,#FCF8F3_0%,#F6EEE5_100%)] shadow-[0_18px_48px_rgba(58,40,24,0.06)]">
          <div className="flex items-center justify-between border-b border-[#EEE4DA] px-4 py-4 sm:px-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#8D6B3F] sm:text-xs sm:tracking-[0.3em]">
              Trust Markers
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Show previous trust point"
                onClick={moveToPrevious}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4D7CA] bg-[#FCF7F1] text-xl text-[#2F281F] transition hover:border-[#B08A56] hover:text-[#8D6B3F]"
              >
                &#8249;
              </button>
              <button
                type="button"
                aria-label="Show next trust point"
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
              {carouselSlides.map((point, index) => {
                const logicalIndex = (index - 1 + trustPoints.length) % trustPoints.length;
                const visual = trustVisuals[logicalIndex];

                return (
                  <article
                    key={`${point.title}-${index}`}
                    className={cn(
                      "min-w-full p-4 sm:p-6 lg:p-8",
                      logicalIndex === activeIndex ? "opacity-100" : "opacity-70",
                      "transition-opacity duration-[1600ms] ease-in-out",
                    )}
                  >
                    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                      <div
                        className={cn(
                          "relative overflow-hidden rounded-[1.95rem] border border-[#8E6D4E]/35 p-6 text-white shadow-[0_18px_45px_rgba(31,21,14,0.16)] sm:p-7",
                          visual.surface,
                        )}
                      >
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(28,20,14,0.06)_0%,rgba(28,20,14,0.2)_100%)]" />
                        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#D8B98E]/20 bg-[#A67C52]/12" />
                        <div className="pointer-events-none absolute bottom-5 right-5 h-24 w-24 rounded-full border border-[#D8B98E]/18 bg-[#3B2B1F]/18" />
                        <div className="pointer-events-none absolute left-6 top-24 h-px w-28 bg-[#F1D7B3]/18" />
                        <div className="pointer-events-none absolute left-6 top-28 h-px w-20 bg-[#F1D7B3]/12" />
                        <div className="relative">
                          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#F2DAB7] sm:text-xs sm:tracking-[0.3em]">
                            {visual.eyebrow}
                          </p>
                          <div className="mt-6 flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E8CBA4]/20 bg-[#3C2D21]/28 text-lg font-semibold">
                              {String(logicalIndex + 1).padStart(2, "0")}
                            </div>
                            <p className="text-lg font-medium leading-7 text-[#FFF7EE]">
                              {visual.accent}
                            </p>
                          </div>
                          <div className="mt-8 flex flex-wrap gap-2">
                            {visual.badges.map((badge) => (
                              <span
                                key={badge}
                                className="rounded-full border border-[#E8CBA4]/16 bg-[#3C2D21]/22 px-3 py-2 text-xs uppercase tracking-[0.18em] text-[#FFF4E7]"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[1.9rem] border border-[#EAE0D6] bg-[linear-gradient(180deg,#FFFCF8_0%,#F8F1E8_100%)] p-6 sm:p-7">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#8D6B3F] sm:text-xs sm:tracking-[0.3em]">
                          Point {String(logicalIndex + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-4 text-3xl leading-tight text-[#2F281F] sm:text-4xl">
                          {point.title}
                        </h3>
                        <p className="mt-5 text-base leading-8 text-[#605448] sm:text-lg">
                          {point.description}
                        </p>

                        <div className="mt-8 rounded-[1.5rem] border border-[#E5D7CA] bg-[rgba(255,250,244,0.82)] p-5">
                          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8C7B6D]">
                            Why It Matters
                          </p>
                          <p className="mt-3 text-sm leading-7 text-[#605448]">
                            This part of the clinic experience is designed to improve trust,
                            clarity, and treatment confidence before anything is recommended.
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
              {trustPoints.map((point, index) => (
                <button
                  key={point.title}
                  type="button"
                  aria-label={`Show ${point.title}`}
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
                {String(trustPoints.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <SectionConsultationCTA message="Experience the clinic standard firsthand with a consultation tailored to your concerns, comfort level, and desired outcome." />
    </SectionShell>
  );
}
