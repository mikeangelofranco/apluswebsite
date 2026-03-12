import { SectionShell } from "@/components/ui/section-shell";
import { marketingContent } from "@/content/marketing-content";

export function StatsSection() {
  return (
    <SectionShell className="py-8">
      <div className="grid gap-4 sm:grid-cols-3">
        {marketingContent.stats.map((stat) => (
          <article key={stat.label} className="rounded-2xl border border-line bg-white p-6 text-center">
            <p className="text-4xl leading-none md:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
