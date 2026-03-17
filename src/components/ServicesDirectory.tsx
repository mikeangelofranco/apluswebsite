"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionShell } from "@/components/SectionShell";
import { servicesDirectory } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ServicesDirectory() {
  const [activeCategory, setActiveCategory] = useState<string>(servicesDirectory[0].label);
  const activeServices =
    servicesDirectory.find((category) => category.label === activeCategory) ?? servicesDirectory[0];
  const [openService, setOpenService] = useState<string>(
    servicesDirectory[0].services[0]?.title ?? "",
  );

  return (
    <SectionShell
      label="Full Services Directory"
      title="Explore treatments by category"
      description="A simple, expandable directory designed for future service detail pages and booking pathways."
    >
      <div className="flex flex-wrap gap-3">
        {servicesDirectory.map((category) => (
          <button
            key={category.label}
            type="button"
            onClick={() => {
              setActiveCategory(category.label);
              setOpenService(category.services[0]?.title ?? "");
            }}
            className={cn(
              "rounded-full border px-5 py-3 text-sm font-semibold tracking-[0.08em] transition",
              category.label === activeCategory
                ? "border-[#B8863B] bg-[#B8863B] text-white"
                : "border-[#E8DDD1] bg-white/80 text-[#6F5846] hover:border-[#D4B07A] hover:text-[#9A6B2F]",
            )}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="mt-8 space-y-4">
        {activeServices.services.map((service) => {
          const isOpen = openService === service.title;

          return (
            <div
              key={service.title}
              className="overflow-hidden rounded-[1.5rem] border border-[#E8DDD1] bg-white/75"
            >
              <button
                type="button"
                onClick={() => setOpenService(isOpen ? "" : service.title)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span>
                  <span className="block text-xl font-semibold text-[#5A3D28]">
                    {service.title}
                  </span>
                  <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-[#9A8572]">
                    Tailored consultation available
                  </span>
                </span>
                <span className="text-2xl text-[#B8863B]">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen ? (
                <div className="border-t border-[#E8DDD1] px-6 py-5">
                  <p className="text-base leading-7 text-[#6F5846]">{service.description}</p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <ButtonLink href="#contact" variant="ghost" className="justify-start px-0 py-0">
                      View Service
                    </ButtonLink>
                    <ButtonLink href="#contact" variant="secondary" className="w-full sm:w-auto">
                      Book Now
                    </ButtonLink>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
