"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionShell } from "@/components/SectionShell";
import { resultCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ResultsSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeResult = resultCategories[activeIndex];

  return (
    <SectionShell
      id="results"
      label="Real Results"
      title="Tasteful transformations designed to look effortless"
      description="Preview a softer, more elevated presentation of treatment outcomes focused on clarity, balance, and skin quality."
    >
      <div className="mb-8 flex flex-wrap gap-3">
        {resultCategories.map((category, index) => (
          <button
            key={category.label}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "rounded-full border px-5 py-3 text-sm font-semibold tracking-[0.08em] transition",
              index === activeIndex
                ? "border-[#B8863B] bg-[#B8863B] text-white"
                : "border-[#E8DDD1] bg-white/80 text-[#6F5846] hover:border-[#D4B07A] hover:text-[#9A6B2F]",
            )}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="grid gap-6 xl:grid-cols-[1fr_1fr_0.9fr]">
        <div className="overflow-hidden rounded-[1.75rem] border border-[#E8DDD1] bg-white/70">
          <div className="relative h-96">
            <Image
              src={activeResult.beforeImage}
              alt={`${activeResult.label} before`}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 28vw, 100vw"
            />
          </div>
          <div className="border-t border-[#E8DDD1] px-6 py-5 text-sm uppercase tracking-[0.28em] text-[#9A8572]">
            Before
          </div>
        </div>
        <div className="overflow-hidden rounded-[1.75rem] border border-[#E8DDD1] bg-white/70">
          <div className="relative h-96">
            <Image
              src={activeResult.afterImage}
              alt={`${activeResult.label} after`}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 28vw, 100vw"
            />
          </div>
          <div className="border-t border-[#E8DDD1] px-6 py-5 text-sm uppercase tracking-[0.28em] text-[#9A8572]">
            After
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-[1.75rem] border border-[#E8DDD1] bg-[#F7F1EA] p-8 shadow-[0_18px_40px_rgba(74,47,29,0.08)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B8863B]">
              Outcome Summary
            </p>
            <h3 className="mt-5 text-3xl text-[#5A3D28]">{activeResult.treatment}</h3>
            <p className="mt-5 text-base leading-8 text-[#6F5846]">{activeResult.summary}</p>
          </div>
          <div className="mt-10 rounded-[1.5rem] border border-[#E3D3C2] bg-white/80 px-5 py-5">
            <p className="text-sm uppercase tracking-[0.24em] text-[#9A8572]">Observed Benefits</p>
            <p className="mt-3 text-base leading-7 text-[#6F5846]">{activeResult.note}</p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
