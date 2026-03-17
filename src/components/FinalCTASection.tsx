import { ButtonLink } from "@/components/ButtonLink";
import { clinicInfo, consultationLink } from "@/lib/data";

export function FinalCTASection() {
  return (
    <section id="contact" className="scroll-mt-28 px-6 pb-14 pt-4 md:px-10 md:pb-20 lg:px-16 xl:px-20">
      <div className="overflow-hidden rounded-[2.4rem] border border-[#E4D7CA] bg-[linear-gradient(135deg,#2F281F_0%,#4A3C2E_52%,#7A6248_100%)] px-6 py-10 text-white shadow-[0_28px_80px_rgba(47,40,31,0.18)] sm:px-8 lg:px-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E4C69B]">
              Book a Consultation
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-white md:text-5xl">
              Ready to begin your aesthetic journey?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#F3E7DA] md:text-lg">
              Book a consultation with our team and discover the treatment plan that
              best fits your goals.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <ButtonLink
              href={consultationLink}
              variant="secondary"
              className="w-full !border-[#FFF3E4] !bg-[#FFF8EF] !text-[0.82rem] !font-bold !tracking-[0.12em] !text-[#241A12] shadow-[0_18px_40px_rgba(24,16,10,0.18)] hover:!border-white hover:!bg-white hover:!text-[#1C140D] sm:w-auto"
            >
              Book Consultation
            </ButtonLink>
            <p className="text-sm leading-7 text-[#E6D7C8]">
              Prefer to call? {clinicInfo.phone}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
