import { ButtonLink } from "@/components/ButtonLink";
import { consultationLink } from "@/lib/data";
import { cn } from "@/lib/utils";

type SectionConsultationCTAProps = {
  message: string;
  className?: string;
};

export function SectionConsultationCTA({
  message,
  className,
}: SectionConsultationCTAProps) {
  return (
    <div
      className={cn(
        "mt-10 flex flex-col gap-5 rounded-[1.9rem] border border-[#E7DDD2] bg-[linear-gradient(135deg,#FFFCF8_0%,#F5EBDD_100%)] p-6 shadow-[0_18px_45px_rgba(58,40,24,0.06)] sm:p-7 lg:flex-row lg:items-center lg:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#8D6B3F] sm:text-xs sm:tracking-[0.3em]">
          Book Consultation
        </p>
        <p className="mt-3 text-lg leading-8 text-[#2F281F]">{message}</p>
      </div>
      <ButtonLink href={consultationLink} className="w-full sm:w-auto">
        Book Consultation
      </ButtonLink>
    </div>
  );
}
