import { SectionShell } from "@/components/ui/section-shell";
import { marketingContent } from "@/content/marketing-content";

export function FeaturesSection() {
  return (
    <SectionShell
      id="features"
      eyebrow="Features"
      title="Everything is structured for rapid marketing-page iteration."
      description="This project starts with clear separation between layout, content, shared UI primitives, and page sections."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {marketingContent.features.map((feature) => (
          <article key={feature.title} className="rounded-2xl border border-line bg-white p-7">
            <h3 className="text-2xl">{feature.title}</h3>
            <p className="mt-3 text-sm text-muted md:text-base">{feature.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
