import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

const variants = {
  primary:
    "border border-[#B08A56] bg-[#B08A56] text-[#FFFDF9] shadow-[0_18px_40px_rgba(128,94,51,0.18)] hover:border-[#8D6B3F] hover:bg-[#8D6B3F] hover:shadow-[0_24px_48px_rgba(128,94,51,0.22)]",
  secondary:
    "border border-[#DED1C4] bg-[rgba(255,252,248,0.82)] text-[#2F281F] hover:border-[#B08A56] hover:bg-[#FBF6F0]",
  ghost: "text-[#605448] hover:text-[#8D6B3F]",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  target,
  rel,
}: ButtonLinkProps) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      target={target ?? (isExternal ? "_blank" : undefined)}
      rel={rel ?? (isExternal ? "noreferrer" : undefined)}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A56]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FCFAF7]",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
