import Link from "next/link";
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { company, navLinks, serviceGroups, whatsappUrl } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-auto border-t border-line bg-surface">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            {company.tagline}
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95"
          >
            <WhatsappLogo size={18} weight="fill" />
            Demander un devis
          </a>
        </div>

        <nav aria-label="Navigation">
          <h3 className="text-sm font-semibold text-ink">Navigation</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-soft transition-colors hover:text-cyan-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold text-ink">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {serviceGroups.map((group) => (
              <li key={group.id}>
                <a
                  href="#services"
                  className="text-sm text-ink-soft transition-colors hover:text-cyan-600"
                >
                  {group.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            <li className="flex items-start gap-2.5">
              <EnvelopeSimple size={18} className="mt-0.5 shrink-0 text-cyan-500" />
              <a
                href={`mailto:${company.email}`}
                className="transition-colors hover:text-cyan-600"
              >
                {company.email}
              </a>
            </li>
            {company.phones.map((phone) => (
              <li key={phone} className="flex items-start gap-2.5">
                <Phone size={18} className="mt-0.5 shrink-0 text-cyan-500" />
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-cyan-600"
                >
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-2.5">
              <WhatsappLogo size={18} className="mt-0.5 shrink-0 text-cyan-500" />
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cyan-600"
              >
                {company.whatsapp.display}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-cyan-500" />
              <span className="leading-relaxed">{company.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-ink-muted">
            © {year} {company.name}. Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-ink-muted">
            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-cyan-600"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="transition-colors hover:text-cyan-600"
            >
              Confidentialité
            </Link>
            <Link
              href="/cookies"
              className="transition-colors hover:text-cyan-600"
            >
              Cookies
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
