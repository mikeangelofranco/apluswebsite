import Image from "next/image";
import { SectionConsultationCTA } from "@/components/SectionConsultationCTA";
import { SectionShell } from "@/components/SectionShell";
import { specialistsTeam } from "@/lib/data";

export function SpecialistsSection() {
  return (
    <SectionShell
      id="specialists"
      title="Meet the physicians behind the clinic's signature standard"
      description="Our medical team approaches aesthetics with restraint, precision, and a strong respect for natural-looking outcomes."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {specialistsTeam.map((doctor) => (
          <article
            key={doctor.name}
            className="overflow-hidden rounded-[2rem] border border-[#E7DDD2] bg-white shadow-[0_20px_50px_rgba(55,36,22,0.05)]"
          >
            <div className="relative overflow-hidden border-b border-[#EAE0D6] bg-[#F3E8DC] p-3">
              <div className="relative min-h-[380px] overflow-hidden rounded-[1.65rem] bg-[#E8DBCC] sm:min-h-[500px]">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-contain object-top p-2 sm:p-4"
                  sizes="(min-width: 1024px) 34vw, 100vw"
                />
              </div>
            </div>

            <div className="p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8D6B3F]">
                Aesthetic Physician
              </p>
              <h3 className="mt-4 text-[2.2rem] leading-tight text-[#2F281F] sm:text-4xl">
                {doctor.name}
              </h3>
              <p className="mt-3 text-sm uppercase tracking-[0.24em] text-[#8C7B6D]">
                {doctor.title}
              </p>
              <p className="mt-6 text-lg leading-8 text-[#3F342A]">{doctor.intro}</p>
              <p className="mt-4 text-base leading-8 text-[#605448]">{doctor.detail}</p>

              <div className="mt-8 grid gap-3">
                {doctor.credentials.map((credential) => (
                  <div
                    key={credential}
                    className="flex items-start gap-3 rounded-[1.25rem] border border-[#EFE4D9] bg-[#FCF8F3] px-4 py-4"
                  >
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#B08A56]" />
                    <p className="text-sm leading-7 text-[#605448]">{credential}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-[1.9rem] border border-[#E7DDD2] bg-[linear-gradient(135deg,#FFFDF9_0%,#F4ECE3_100%)] p-7 shadow-[0_18px_42px_rgba(55,36,22,0.05)] sm:p-8">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#8D6B3F] sm:text-xs sm:tracking-[0.3em]">
          Shared Approach
        </p>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-[#3F342A]">
          Both physicians lead care with the same clinic philosophy: thoughtful consultation,
          honest treatment planning, and elegant results that look naturally at home on you.
        </p>
      </div>
      <SectionConsultationCTA message="Book directly with our physicians for a careful assessment and a treatment plan designed around natural-looking results." />
    </SectionShell>
  );
}
