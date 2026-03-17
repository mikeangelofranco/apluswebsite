import Image from "next/image";
import { SectionShell } from "@/components/SectionShell";
import { experienceSpaces } from "@/lib/data";

export function ExperienceSection() {
  return (
    <SectionShell
      label="The Clinic Experience"
      title="A calm, private environment designed for confidence"
      description="Every room is shaped around comfort, discretion, and a slower, more personal approach to care."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {experienceSpaces.map((space) => (
          <article key={space.title} className="group">
            <div className="relative h-80 overflow-hidden rounded-[1.75rem] border border-[#E8DDD1] shadow-[0_16px_40px_rgba(74,47,29,0.08)]">
              <Image
                src={space.image}
                alt={space.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>
            <p className="mt-5 text-lg font-semibold tracking-[0.08em] text-[#5A3D28]">
              {space.title}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
