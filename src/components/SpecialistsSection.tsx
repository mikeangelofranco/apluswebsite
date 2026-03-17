import { ButtonLink } from "@/components/ButtonLink";
import Image from "next/image";
import { SectionShell } from "@/components/SectionShell";
import { specialists } from "@/lib/data";

export function SpecialistsSection() {
  return (
    <SectionShell
      id="specialists"
      label="Meet Our Specialists"
      title="Prestige, precision, and a refined clinical eye"
    >
      <div className="overflow-hidden rounded-[2rem] border border-[#E8DDD1] bg-[#F7F1EA] shadow-[0_20px_50px_rgba(74,47,29,0.08)]">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[520px] lg:min-h-[680px]">
            <Image
              src={specialists.image}
              alt={specialists.name.join(" and ")}
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-10 md:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B8863B]">
              Lead Specialists
            </p>
            <h3 className="mt-4 text-4xl text-[#5A3D28]">
              {specialists.name.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <p className="mt-3 text-lg text-[#9A6B2F]">{specialists.role}</p>
            <p className="mt-6 text-base leading-8 text-[#6F5846]">{specialists.summary}</p>
            <p className="mt-6 text-sm uppercase tracking-[0.22em] text-[#9A8572]">
              {specialists.experience}
            </p>
            <div className="mt-8 space-y-4 border-t border-[#E5D6C6] pt-8">
              {specialists.credentials.map((credential) => (
                <div key={credential} className="flex gap-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#B8863B]" />
                  <p className="text-base leading-7 text-[#6F5846]">{credential}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex items-center justify-between gap-6">
              <ButtonLink href="#contact" variant="secondary">
                View Full Profile
              </ButtonLink>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-8 rounded-full bg-[#B8863B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#DCC4AA]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#DCC4AA]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
