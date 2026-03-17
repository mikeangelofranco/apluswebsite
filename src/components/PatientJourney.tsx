import { SectionShell } from "@/components/SectionShell";
import { journeySteps } from "@/lib/data";

export function PatientJourney() {
  return (
    <SectionShell
      label="Your Journey With Us"
      title="A clear, reassuring process from consultation to aftercare"
    >
      <div className="relative grid gap-6 lg:grid-cols-4">
        <div className="absolute left-[12.5%] right-[12.5%] top-9 hidden h-px bg-[#E5D5C2] lg:block" />
        {journeySteps.map((step, index) => (
          <div
            key={step.title}
            className="relative rounded-[1.75rem] border border-[#E8DDD1] bg-white/75 px-6 py-7 shadow-[0_16px_40px_rgba(74,47,29,0.05)]"
          >
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4B07A] bg-[#F7F1EA] text-sm font-semibold text-[#9A6B2F]">
              {index + 1}
            </div>
            <h3 className="text-2xl text-[#5A3D28]">{step.title}</h3>
            <p className="mt-4 text-base leading-7 text-[#6F5846]">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
