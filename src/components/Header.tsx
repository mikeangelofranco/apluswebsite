import { ButtonLink } from "@/components/ButtonLink";
import { clinicInfo, navLinks } from "@/lib/data";

export function Header() {
  return (
    <header className="sticky top-4 z-40 px-6 pt-6 md:px-10 lg:px-16 xl:px-20">
      <div className="rounded-full border border-[#E8DDD1] bg-[rgba(252,250,247,0.86)] px-5 py-4 shadow-[0_18px_35px_rgba(74,47,29,0.08)] backdrop-blur">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <a href="#home" className="flex flex-col">
            <span className="font-display text-xl tracking-[0.08em] text-[#5A3D28]">
              {clinicInfo.name}
            </span>
            <span className="text-xs uppercase tracking-[0.28em] text-[#9A8572]">
              {clinicInfo.tag}
            </span>
          </a>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#6F5846]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[#9A6B2F]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ButtonLink href="#contact" className="w-full sm:w-auto">
            Book Consultation
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
