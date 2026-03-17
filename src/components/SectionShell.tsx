"use client";

import { useEffect, useRef, useState } from "react";
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "px-6 py-16 transition duration-700 ease-out md:px-10 md:py-24 lg:px-16 xl:px-20 motion-reduce:transform-none motion-reduce:opacity-100",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className,
      )}
    >
      {(label || title || description) && (
        <div
          className={cn(
            "mb-12 flex flex-col gap-4",
            align === "center" ? "mx-auto max-w-3xl items-center text-center" : "max-w-3xl",
          )}
        >
          {label ? <SectionLabel>{label}</SectionLabel> : null}
          {title ? (
            <h2 className="text-4xl leading-tight text-[#5A3D28] md:text-5xl">{title}</h2>
          ) : null}
          {description ? (
            <p className="text-base leading-8 text-[#6F5846] md:text-lg">{description}</p>
          ) : null}
        </div>
      )}
      <div className={contentClassName}>{children}</div>
    </section>
  );
}
