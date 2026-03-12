import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { marketingContent } from "@/content/marketing-content";

export function HeroSection() {
  return (
    <section className="pb-16 pt-16 md:pb-20 md:pt-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-7">
          <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted ring-1 ring-line">
            {marketingContent.hero.eyebrow}
          </span>
          <h1 className="max-w-3xl text-4xl leading-tight md:text-6xl">{marketingContent.hero.title}</h1>
          <p className="max-w-2xl text-base text-muted md:text-xl">{marketingContent.hero.description}</p>

          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink href={marketingContent.hero.primaryCta.href}>
              {marketingContent.hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={marketingContent.hero.secondaryCta.href} variant="secondary">
              {marketingContent.hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <ul className="grid max-w-2xl gap-2 text-sm text-muted sm:grid-cols-3">
            {marketingContent.hero.highlights.map((item) => (
              <li key={item} className="rounded-full bg-white px-3 py-2 text-center ring-1 ring-line">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-line bg-white p-7 shadow-sm md:p-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted">Starter Includes</p>
          <ul className="space-y-4">
            {[
              "App Router project layout",
              "Tailwind v4 global design tokens",
              "Ready-to-use section components",
              "React Query provider setup",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm md:text-base">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
