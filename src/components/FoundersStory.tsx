import Image from "next/image";
import { SectionShell } from "@/components/SectionShell";
import { founders } from "@/lib/data";

export function FoundersStory() {
  return (
    <SectionShell
      id="about"
      label="Founders Story"
      title={founders.title}
      description="A clinic created for patients who value discretion, thoughtful treatment planning, and a softer definition of luxury."
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="relative h-[420px] overflow-hidden rounded-[1.75rem] border border-[#E8DDD1]">
            <Image
              src={founders.imageOne}
              alt="Clinic founder portrait"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 24vw, 100vw"
            />
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-[1.75rem] border border-[#E8DDD1] sm:translate-y-10">
            <Image
              src={founders.imageTwo}
              alt="Clinic co-founder portrait"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 24vw, 100vw"
            />
          </div>
        </div>
        <div className="rounded-[2rem] border border-[#E8DDD1] bg-[#F7F1EA] p-8 shadow-[0_18px_45px_rgba(74,47,29,0.08)] md:p-10">
          <p className="text-base leading-8 text-[#6F5846]">{founders.story}</p>
          <p className="mt-6 text-base leading-8 text-[#6F5846]">{founders.philosophy}</p>
          <div className="mt-10 border-t border-[#E3D3C2] pt-6">
            <p className="font-display text-2xl italic text-[#9A6B2F]">
              {founders.names.map((name) => (
                <span key={name} className="block">
                  {name}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
