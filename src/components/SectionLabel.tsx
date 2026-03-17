import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#B8863B]",
        className,
      )}
    >
      <span className="h-px w-12 bg-[#D4B07A]" />
      <span>{children}</span>
    </div>
  );
}
