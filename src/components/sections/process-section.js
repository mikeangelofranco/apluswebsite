import { SectionShell } from "@/components/ui/section-shell";
import { marketingContent } from "@/content/marketing-content";

export function ProcessSection() {
  return (
    <SectionShell
      id="process"
      eyebrow="Workflow"
      title="Use the structure as your production runway."
      description="Your team can split content, design, and component work immediately without stepping on each other."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {marketingContent.process.map((item) => (
          <article key={item.step} className="rounded-2xl border border-line bg-white p-7">
            <p className="text-sm font-semibold text-brand">{item.step}</p>
            <h3 className="mt-3 text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
