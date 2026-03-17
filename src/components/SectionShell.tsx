"use client";

import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/SectionLabel";

type SectionShellProps = {
  id?: string;
  label?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
};

export function SectionShell({
  id,
  label,
  title,
  description,
  align = "left",
  className,
  contentClassName,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-28 px-6 py-14 md:px-10 md:py-20 lg:px-16 xl:px-20",
        className,
      )}
    >
      {(label || title || description) && (
        <div
          className={cn(
            "mb-12 flex flex-col gap-4",
            align === "center"
              ? "mx-auto max-w-3xl items-center text-center"
              : "mx-auto max-w-3xl items-center text-center md:mx-0 md:items-start md:text-left",
          )}
        >
          {label ? <SectionLabel>{label}</SectionLabel> : null}
          {title ? (
            <h2 className="text-4xl leading-tight text-[#2F281F] md:text-5xl">{title}</h2>
          ) : null}
          {description ? (
            <p className="text-base leading-8 text-[#605448] md:text-lg">{description}</p>
          ) : null}
        </div>
      )}
      <div className={contentClassName}>{children}</div>
    </section>
  );
}
