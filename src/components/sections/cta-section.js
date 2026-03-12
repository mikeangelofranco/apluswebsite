import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";
import { marketingContent } from "@/content/marketing-content";

export function CtaSection() {
  return (
    <SectionShell id="cta" className="pt-6">
      <div className="rounded-3xl bg-[#0f2621] p-8 text-white md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Next Step</p>
        <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">{marketingContent.cta.title}</h2>
        <p className="mt-4 max-w-2xl text-sm text-white/75 md:text-base">{marketingContent.cta.description}</p>

        <div className="mt-8">
          <ButtonLink
            href={marketingContent.cta.action.href}
            variant="secondary"
            className="bg-white text-[#10372f] hover:bg-[#eaf5f0]"
          >
            {marketingContent.cta.action.label}
          </ButtonLink>
        </div>
      </div>
    </SectionShell>
  );
}
