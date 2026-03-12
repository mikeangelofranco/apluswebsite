import { SectionShell } from "@/components/ui/section-shell";
import { marketingContent } from "@/content/marketing-content";

export function TestimonialsSection() {
  return (
    <SectionShell
      id="testimonials"
      eyebrow="Social Proof"
      title="Feedback from launch-focused teams."
      description="Use this block as your testimonial section or repurpose it for customer stories."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {marketingContent.testimonials.map((testimonial) => (
          <blockquote key={testimonial.name} className="rounded-2xl border border-line bg-white p-7">
            <p className="text-base leading-relaxed md:text-lg">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-6">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted">{testimonial.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </SectionShell>
  );
}
