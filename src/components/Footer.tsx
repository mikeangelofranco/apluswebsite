import { ButtonLink } from "@/components/ButtonLink";
import { clinicInfo, footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[#E8DDD1] px-6 py-12 md:px-10 lg:px-16 xl:px-20">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
        <div>
          <p className="font-display text-2xl text-[#5A3D28]">{clinicInfo.name}</p>
          <p className="mt-3 max-w-sm text-base leading-7 text-[#6F5846]">
            A calm, medically guided clinic for patients seeking natural-looking refinement and thoughtful care.
          </p>
          <div className="mt-6 text-sm leading-7 text-[#6F5846]">
            <p>{clinicInfo.address}</p>
            <p>{clinicInfo.hours}</p>
            <p>{clinicInfo.phone}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9A8572]">
            Quick Links
          </p>
          <div className="mt-4 space-y-3 text-[#6F5846]">
            {footerLinks.quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="block transition hover:text-[#9A6B2F]">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9A8572]">
            Connect
          </p>
          <div className="mt-4 space-y-3 text-[#6F5846]">
            <a href={`tel:${clinicInfo.phone}`} className="block transition hover:text-[#9A6B2F]">
              {clinicInfo.phone}
            </a>
            <a href={`mailto:${clinicInfo.email}`} className="block transition hover:text-[#9A6B2F]">
              {clinicInfo.email}
            </a>
            {footerLinks.socials.map((social) => (
              <a key={social.label} href={social.href} className="block transition hover:text-[#9A6B2F]">
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9A8572]">
            Consultation
          </p>
          <p className="mt-4 text-base leading-7 text-[#6F5846]">
            Reserve time with our specialists to discuss your goals and preferred timeline.
          </p>
          <ButtonLink href="#contact" className="mt-6 w-full sm:w-auto">
            Book Consultation
          </ButtonLink>
          <div className="mt-6 flex gap-5 text-sm text-[#9A8572]">
            <a href="#" className="transition hover:text-[#9A6B2F]">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-[#9A6B2F]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
