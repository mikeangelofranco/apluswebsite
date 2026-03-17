import { ButtonLink } from "@/components/ButtonLink";
import { consultationLink, heroHighlights } from "@/lib/data";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[50vh] overflow-hidden px-4 pb-10 pt-6 md:min-h-[54vh] md:px-10 md:pb-12 lg:min-h-[56vh] lg:px-16 xl:px-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          aria-hidden="true"
          className="hero-pan-layer hero-pan-mobile absolute -inset-x-[6%] -inset-y-[4%] sm:hidden"
        />
        <div
          aria-hidden="true"
          className="hero-pan-layer hero-pan-desktop absolute -inset-x-[6%] -inset-y-[4%] hidden sm:block"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,17,14,0.84)_0%,rgba(36,28,22,0.72)_34%,rgba(76,57,42,0.4)_58%,rgba(63,47,37,0.76)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,179,130,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,248,239,0.08),transparent_28%),linear-gradient(90deg,rgba(16,12,10,0.42)_0%,rgba(16,12,10,0.18)_36%,transparent_70%)]" />

      <div className="relative flex min-h-[50vh] items-center px-5 py-8 sm:px-8 sm:py-10 lg:min-h-[56vh] lg:px-12 lg:py-14">
        <div className="w-full">
          <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-white/10 bg-[rgba(18,14,12,0.34)] px-5 py-6 text-center shadow-[0_18px_48px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:px-7 sm:py-7 lg:mx-0 lg:max-w-3xl lg:bg-[rgba(18,14,12,0.26)] lg:text-left">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#E7C998] drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)] sm:text-xs sm:tracking-[0.32em]">
              Luxury Medical Aesthetics
            </p>
            <h1
              className="mt-5 max-w-3xl text-[2.15rem] leading-[0.98] drop-shadow-[0_10px_30px_rgba(0,0,0,0.78)] sm:text-5xl lg:text-6xl"
              style={{ color: "#FFFDF9" }}
            >
              Refined Aesthetic Care Designed Around You
            </h1>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[#F7EEE4] drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)] md:text-base">
              Advanced face, skin, body, and cosmetic treatments in a calm, physician-led
              setting.
            </p>

            <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <ButtonLink href={consultationLink} className="sm:min-w-[210px]">
                Book Consultation
              </ButtonLink>
              <ButtonLink href="#treatments" variant="secondary" className="sm:min-w-[210px]">
                Explore Treatments
              </ButtonLink>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {heroHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm text-[#F8EEE4] backdrop-blur-md"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
