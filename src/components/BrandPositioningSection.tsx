import Image from "next/image";
import { SectionConsultationCTA } from "@/components/SectionConsultationCTA";
import { SectionShell } from "@/components/SectionShell";
import { brandPillars } from "@/lib/data";

export function BrandPositioningSection() {
  return (
    <SectionShell
      id="about"
      title="Feel confident in expert hands"
      description="We provide personalized aesthetic and cosmetic treatments focused on natural-looking results, clinical safety, and a premium patient experience."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {brandPillars.map((pillar) => (
          <article
            key={pillar.title}
            className="rounded-[1.75rem] border border-[#E7DDD2] bg-[linear-gradient(180deg,#FFFDFA_0%,#F8F2EC_100%)] p-7 shadow-[0_18px_45px_rgba(58,40,24,0.06)]"
          >
            <h3 className="text-2xl text-[#2F281F]">{pillar.title}</h3>
            <p className="mt-4 text-base leading-8 text-[#605448]">{pillar.description}</p>
            {pillar.image ? (
              <div className="mt-6 overflow-hidden rounded-[1.4rem] border border-[#E7DDD2] bg-[#F1E6DA]">
                <div className="relative min-h-[220px]">
                  <Image
                    src={pillar.image}
                    alt={`${pillar.title} treatments`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 28vw, 100vw"
                  />
                </div>
              </div>
            ) : null}
          </article>
        ))}
      </div>
      <SectionConsultationCTA message="Start with a private consultation and let our team guide you toward the right skin, face, body, or surgical treatment plan." />
    </SectionShell>
  );
}
