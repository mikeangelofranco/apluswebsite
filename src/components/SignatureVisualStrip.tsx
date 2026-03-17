import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionShell } from "@/components/SectionShell";

export function SignatureVisualStrip() {
  return (
    <SectionShell className="pt-0">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr_0.9fr]">
        <div className="group relative min-h-[420px] overflow-hidden rounded-[1.75rem] border border-[#E8DDD1]">
          <Image
            src="/images/clinic/signature-treatment-room.png"
            alt="Elegant treatment room"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>
        <div className="group relative min-h-[420px] overflow-hidden rounded-[1.75rem] border border-[#E8DDD1]">
          <Image
            src="/images/clinic/signature-skin-detail.png"
            alt="Close-up skin treatment detail"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>
        <div className="flex flex-col justify-between rounded-[1.75rem] border border-[#E8DDD1] bg-[#F7F1EA] p-8 shadow-[0_18px_45px_rgba(74,47,29,0.08)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B8863B]">
              Signature Focus
            </p>
            <h3 className="mt-5 text-3xl leading-tight text-[#5A3D28]">
              Facials and Body Contouring
            </h3>
            <p className="mt-5 text-base leading-8 text-[#6F5846]">
              Our expert team uses modern aesthetic techniques to refresh, sculpt,
              and refine your look. Enjoy personalized treatments that deliver
              visible results and lasting confidence.
            </p>
          </div>
          <ButtonLink href="#treatments" variant="secondary" className="mt-8 w-fit">
            Learn More
          </ButtonLink>
        </div>
      </div>
    </SectionShell>
  );
}
