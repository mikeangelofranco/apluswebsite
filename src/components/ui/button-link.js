import Link from "next/link";
import { cn } from "@/lib/utils";

const variantClasses = {
  primary: "bg-brand text-white hover:bg-[#087356]",
  secondary: "bg-surface text-foreground ring-1 ring-line hover:bg-[#f3f8f5]",
  ghost: "bg-transparent text-foreground ring-1 ring-transparent hover:ring-line",
};

export function ButtonLink({ href, children, variant = "primary", className }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
