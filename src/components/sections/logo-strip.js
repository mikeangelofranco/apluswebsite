import { SectionShell } from "@/components/ui/section-shell";
import { marketingContent } from "@/content/marketing-content";

export function LogoStrip() {
  return (
    <SectionShell className="pt-0">
      <div className="rounded-2xl border border-line bg-white px-5 py-6 md:px-8">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Teams already using this setup
        </p>
        <div className="grid gap-4 text-center text-sm font-medium text-muted sm:grid-cols-3 lg:grid-cols-5">
          {marketingContent.logos.map((logo) => (
            <div key={logo} className="rounded-xl bg-[#f8fbf8] px-3 py-3 ring-1 ring-line/70">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
