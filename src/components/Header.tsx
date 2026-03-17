"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { clinicInfo, consultationLink, navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 lg:px-8">
      <div
        className={cn(
          "rounded-[1.75rem] transition duration-300",
          isScrolled || isMenuOpen
            ? "border border-[#E7DDD2] bg-[rgba(252,249,245,0.84)] shadow-[0_20px_60px_rgba(55,36,22,0.08)] backdrop-blur-xl"
            : "border border-transparent bg-transparent",
        )}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-5 lg:px-6">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DDCDBD] bg-[#F7F1EA] text-sm font-semibold uppercase tracking-[0.18em] text-[#8D6B3F] sm:h-11 sm:w-11">
              AP
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="truncate font-display text-base text-[#2F281F] sm:text-xl">
                {clinicInfo.name}
              </span>
              <span className="hidden text-[0.68rem] uppercase tracking-[0.2em] text-[#8C7B6D] sm:block">
                {clinicInfo.tag}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#605448] lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition duration-300 hover:text-[#8D6B3F]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href={consultationLink}>Book Consultation</ButtonLink>
          </div>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E2D6CA] bg-[rgba(255,252,248,0.8)] text-[#2F281F] transition hover:border-[#B08A56] sm:h-11 sm:w-11 lg:hidden"
          >
            <span className="relative h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 block h-px w-5 bg-current transition duration-300",
                  isMenuOpen ? "translate-y-[7px] rotate-45" : "",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[7px] block h-px w-5 bg-current transition duration-300",
                  isMenuOpen ? "opacity-0" : "",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[14px] block h-px w-5 bg-current transition duration-300",
                  isMenuOpen ? "-translate-y-[7px] -rotate-45" : "",
                )}
              />
            </span>
          </button>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-[#EEE4DA] px-4 pb-5 pt-2 lg:hidden sm:px-5">
            <nav className="flex flex-col gap-3 text-sm text-[#605448]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl border border-transparent px-3 py-3 transition hover:border-[#E7DDD2] hover:bg-[#F8F3EE] hover:text-[#8D6B3F]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <ButtonLink
              href={consultationLink}
              className="mt-4 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Consultation
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </header>
  );
}
