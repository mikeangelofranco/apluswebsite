import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { marketingContent } from "@/content/marketing-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between gap-8">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          {marketingContent.brand.name}
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {marketingContent.navigation.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={marketingContent.hero.primaryCta.href} variant="ghost">
            Explore
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
