import { clinicInfo, footerLinks } from "@/lib/data";

function SocialIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (label === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M13.2 20v-7.1h2.4l.4-2.8h-2.8V8.3c0-.8.2-1.4 1.4-1.4h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H7.8v2.8h2.4V20h3z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M19.6 7.8c-1.1 0-2.1-.4-2.9-1.1v6.1c0 3.1-2.5 5.6-5.6 5.6S5.5 15.9 5.5 12.8s2.5-5.6 5.6-5.6c.3 0 .7 0 1 .1v2.8c-.3-.1-.6-.2-1-.2-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 3-1.3 3-2.9V4h2.6c.2 1.4 1.3 2.5 2.8 2.7v1.1z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#E7DDD2] px-6 py-12 md:px-10 lg:px-16 xl:px-20">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DDCDBD] bg-[#F7F1EA] text-sm font-semibold uppercase tracking-[0.18em] text-[#8D6B3F]">
              AP
            </span>
            <div>
              <p className="font-display text-2xl text-[#2F281F]">{clinicInfo.name}</p>
              <p className="text-xs uppercase tracking-[0.28em] text-[#8C7B6D]">
                {clinicInfo.tag}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-base leading-8 text-[#605448]">
            {clinicInfo.summary}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#8C7B6D]">
            Quick Links
          </p>
          <div className="mt-5 space-y-3 text-[#605448]">
            {footerLinks.quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="block transition hover:text-[#8D6B3F]">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#8C7B6D]">
            Contact
          </p>
          <div className="mt-5 space-y-3 text-[#605448]">
            <p>{clinicInfo.address}</p>
            <a href={`tel:${clinicInfo.phone}`} className="block transition hover:text-[#8D6B3F]">
              {clinicInfo.phone}
            </a>
            <a
              href={`mailto:${clinicInfo.email}`}
              className="block transition hover:text-[#8D6B3F]"
            >
              {clinicInfo.email}
            </a>
            <p>{clinicInfo.hours}</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#8C7B6D]">
            Follow
          </p>
          <div className="mt-5 flex gap-3">
            {footerLinks.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4D8CC] bg-[#F8F2EC] text-[#605448] transition hover:border-[#B08A56] hover:text-[#8D6B3F]"
              >
                <SocialIcon label={social.label} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-[#EAE0D6] pt-6 text-sm text-[#8C7B6D] md:flex-row md:items-center md:justify-between">
        <p>© 2026 A Plus Premium Clinic. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="transition hover:text-[#8D6B3F]">
            Privacy Policy
          </a>
          <a href="#" className="transition hover:text-[#8D6B3F]">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
