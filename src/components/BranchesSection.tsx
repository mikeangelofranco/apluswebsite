import { ButtonLink } from "@/components/ButtonLink";
import { SectionShell } from "@/components/SectionShell";
import { branches, consultationLink } from "@/lib/data";

export function BranchesSection() {
  return (
    <SectionShell
      id="branches"
      title="Visit Our Clinics"
      description="Choose the branch that is most convenient for you and book a consultation with the team nearest your location."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {branches.map((branch) => (
          <article
            key={branch.name}
            className="rounded-[1.85rem] border border-[#E7DDD2] bg-white p-7 shadow-[0_18px_45px_rgba(58,40,24,0.05)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8D6B3F]">
              Branch
            </p>
            <h3 className="mt-4 text-3xl text-[#2F281F]">{branch.name}</h3>
            <p className="mt-4 text-base leading-8 text-[#605448]">{branch.address}</p>
            <p className="mt-3 text-sm leading-7 text-[#8C7B6D]">{branch.phone}</p>
            <ButtonLink href={consultationLink} className="mt-8 w-full sm:w-auto">
              Book Consultation
            </ButtonLink>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
