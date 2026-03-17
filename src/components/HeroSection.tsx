import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { heroMetrics } from "@/lib/data";

export function HeroSection() {
  return (
    <section id="home" className="px-6 pb-10 pt-8 md:px-10 md:pb-16 lg:px-16 xl:px-20">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#E8DDD1] bg-[#F7F1EA] shadow-[0_24px_60px_rgba(74,47,29,0.14)]">
        <div className="absolute inset-0">
          <Image
            src="/images/clinic/hero-clinic-mobile.png"
            alt="Luxury aesthetic clinic interior"
            fill
            priority
            className="hero-image-motion object-cover sm:hidden"
            sizes="100vw"
          />
          <Image
            src="/images/clinic/hero-clinic-desktop.png"
            alt="Luxury aesthetic clinic interior"
            fill
            priority
            className="hero-image-motion hidden object-cover sm:block"
            sizes="(min-width: 1280px) 1200px, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,32,19,0.24),rgba(56,32,19,0.76))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,176,122,0.22),transparent_28%),radial-gradient(circle_at_center,rgba(56,32,19,0.16),transparent_48%)]" />
        </div>
        <div className="relative flex min-h-[78vh] flex-col justify-center px-6 py-16 text-center sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(74,47,29,0.2),rgba(74,47,29,0.34))] px-5 py-8 shadow-[0_24px_60px_rgba(30,16,8,0.24)] backdrop-blur-[3px] sm:px-8 md:px-10 md:py-10">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-[#F7E6C9] drop-shadow-[0_2px_12px_rgba(35,18,8,0.65)]">
              Premium Aesthetic Medicine
            </p>
            <h1
              className="text-4xl leading-[1.05] drop-shadow-[0_8px_28px_rgba(28,14,6,0.82)] sm:text-5xl lg:text-7xl"
              style={{ color: "#CFA77B" }}
            >
              Refined Aesthetic Care, Designed Around You
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-[#FFF3E4] drop-shadow-[0_4px_18px_rgba(28,14,6,0.72)] md:text-lg">
              Advanced treatments, expert hands, and naturally beautiful results.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="#contact">Book Consultation</ButtonLink>
              <ButtonLink href="#treatments" variant="secondary">
                Explore Treatments
              </ButtonLink>
            </div>
          </div>
          <div className="mt-14 grid gap-4 border-t border-white/20 pt-8 text-left md:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/14 bg-white/8 px-5 py-5 backdrop-blur-sm"
              >
                <div className="text-2xl font-semibold text-[#FFF6EA] md:text-3xl">
                  {metric.value}
                </div>
                <div className="mt-2 text-sm leading-6 text-[#F0E2D3]">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
