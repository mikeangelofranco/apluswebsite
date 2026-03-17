import { SectionShell } from "@/components/SectionShell";
import { whyChooseUs } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <SectionShell
      label="Why Choose Us"
      title="Calm expertise with a deeply personal standard of care"
      align="center"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {whyChooseUs.map((pillar) => (
          <div
            key={pillar.number}
            className="rounded-[1.75rem] border border-[#E8DDD1] bg-white/70 px-7 py-8 text-center shadow-[0_16px_40px_rgba(74,47,29,0.06)]"
          >
            <div className="text-sm font-semibold tracking-[0.3em] text-[#B8863B]">
              {pillar.number}
            </div>
            <h3 className="mt-5 text-2xl text-[#5A3D28]">{pillar.title}</h3>
            <p className="mt-4 text-base leading-7 text-[#6F5846]">{pillar.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
