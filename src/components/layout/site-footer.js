import { Container } from "@/components/layout/container";
import { marketingContent } from "@/content/marketing-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white/70 py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.25fr_2fr]">
          <div className="space-y-3">
            <p className="text-2xl">{marketingContent.brand.name}</p>
            <p className="max-w-sm text-sm text-muted">{marketingContent.brand.slogan}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {marketingContent.footer.columns.map((column) => (
              <div key={column.title}>
                <p className="mb-3 text-sm font-semibold text-foreground">{column.title}</p>
                <ul className="space-y-2 text-sm text-muted">
                  {column.links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-xs text-muted">{marketingContent.footer.legal}</p>
      </Container>
    </footer>
  );
}
