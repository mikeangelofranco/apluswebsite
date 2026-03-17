import { SectionShell } from "@/components/SectionShell";

export function BrandStatement() {
  return (
    <SectionShell
      label="Our Philosophy"
      align="center"
      className="pt-10 md:pt-12"
      contentClassName="mx-auto max-w-4xl text-center"
    >
      <div className="relative py-6">
        <div className="shimmer-divider absolute left-1/2 top-0 h-px w-48 -translate-x-1/2" />
        <p className="text-3xl leading-tight text-[#5A3D28] md:text-5xl">
          Beauty is personal. Our approach combines science, artistry, and discretion
          to create results that feel naturally yours.
        </p>
      </div>
    </SectionShell>
  );
}
