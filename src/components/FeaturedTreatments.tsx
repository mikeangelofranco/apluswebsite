import Image from "next/image";
import { SectionShell } from "@/components/SectionShell";
import { featuredTreatments } from "@/lib/data";

export function FeaturedTreatments() {
  return (
    <SectionShell
      id="treatments"
      label="Featured Treatments"
      title="Personalized treatments for elegant, natural renewal"
      description="Explore a curated selection of our most requested treatments, chosen for their ability to refine rather than overpower."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {featuredTreatments.map((treatment) => (
          <article
            key={treatment.title}
            className="group overflow-hidden rounded-[1.75rem] border border-[#E8DDD1] bg-white/70 shadow-[0_18px_45px_rgba(74,47,29,0.08)]"
          >
            <div className="relative h-80 overflow-hidden">
              <Image
                src={treatment.image}
                alt={treatment.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>
            <div className="space-y-4 px-7 py-7">
              <h3 className="text-2xl text-[#5A3D28]">{treatment.title}</h3>
              <p className="text-base leading-7 text-[#6F5846]">{treatment.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
