import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

export function SectionShell({ id, className, eyebrow, title, description, children }) {
  return (
    <section id={id} className={cn("py-20 md:py-24", className)}>
      <Container>
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl space-y-4 md:mb-12">
            {eyebrow && (
              <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted ring-1 ring-line">
                {eyebrow}
              </span>
            )}
            {title && <h2 className="text-3xl leading-tight md:text-5xl">{title}</h2>}
            {description && <p className="text-base text-muted md:text-lg">{description}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
