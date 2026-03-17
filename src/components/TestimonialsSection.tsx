import { SectionShell } from "@/components/SectionShell";
import { testimonial } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <SectionShell
      label="Patient Testimonials"
      align="center"
      contentClassName="mx-auto max-w-4xl"
    >
      <div className="rounded-[2rem] border border-[#E8DDD1] bg-[#F7F1EA] px-8 py-12 text-center shadow-[0_20px_50px_rgba(74,47,29,0.08)] md:px-14 md:py-16">
        <p className="text-3xl leading-tight text-[#5A3D28] md:text-5xl">
          “{testimonial.quote}”
        </p>
        <p className="mt-8 text-sm uppercase tracking-[0.34em] text-[#9A8572]">
          {testimonial.author}
        </p>
        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="h-2.5 w-8 rounded-full bg-[#B8863B]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#DCC4AA]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#DCC4AA]" />
        </div>
      </div>
    </SectionShell>
  );
}
