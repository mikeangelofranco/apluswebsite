import { ButtonLink } from "@/components/ButtonLink";
import { SectionShell } from "@/components/SectionShell";

export function CTASection() {
  return (
    <SectionShell id="contact" className="pt-8 md:pt-12">
      <div className="overflow-hidden rounded-[2rem] border border-[#DCC4AA] bg-[linear-gradient(135deg,#F7F1EA_0%,#EFE0CF_60%,#F8F2EB_100%)] px-8 py-12 text-center shadow-[0_24px_60px_rgba(74,47,29,0.12)] md:px-12 md:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#B8863B]">
          Begin Your Personalized Aesthetic Journey
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl leading-tight text-[#5A3D28] md:text-5xl">
          Begin Your Personalized Aesthetic Journey
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6F5846] md:text-lg">
          Book a consultation and let our specialists create a treatment plan tailored to your goals.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="#contact">Book Consultation</ButtonLink>
          <ButtonLink href="mailto:hello@atelieraesthetica.com" variant="secondary">
            Contact Our Team
          </ButtonLink>
        </div>
      </div>
    </SectionShell>
  );
}
