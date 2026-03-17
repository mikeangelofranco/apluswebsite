import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "border border-[#B8863B] bg-[#B8863B] text-white shadow-[0_18px_35px_rgba(154,107,47,0.18)] hover:border-[#9A6B2F] hover:bg-[#9A6B2F]",
  secondary:
    "border border-[#D9C4AF] bg-[rgba(252,250,247,0.86)] text-[#5A3D28] hover:border-[#B8863B] hover:text-[#9A6B2F]",
  ghost: "text-[#7A5230] hover:text-[#9A6B2F]",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.08em] transition duration-300 ease-out",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
