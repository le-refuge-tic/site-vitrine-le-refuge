import {
  EnvelopeSimple,
  Phone,
  MapPin,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ContactForm } from "./ContactForm";
import { company, whatsappUrl } from "@/lib/content";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 scroll-mt-24 overflow-hidden bg-surface py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 50% at 85% 100%, rgba(18,165,229,0.10), transparent 60%)",
        }}
      />
      <Container className="grid gap-14 lg:grid-cols-[0.95fr_1fr]">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Parlons de votre projet"
            intro="Une question, un besoin, un projet à cadrer ? Écrivez-nous ou appelez-nous directement."
          />

          <Reveal delay={0.1} className="mt-8">
            <ul className="space-y-5">
              <li className="flex items-start gap-3.5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  <EnvelopeSimple size={20} weight="duotone" />
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">Email</p>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-sm text-ink-soft transition-colors hover:text-cyan-600"
                  >
                    {company.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  <Phone size={20} weight="duotone" />
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">Téléphone</p>
                  {company.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block text-sm text-ink-soft transition-colors hover:text-cyan-600"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  <WhatsappLogo size={20} weight="duotone" />
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">WhatsApp</p>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-soft transition-colors hover:text-cyan-600"
                  >
                    {company.whatsapp.display}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  <MapPin size={20} weight="duotone" />
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">Adresse</p>
                  <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
                    {company.address}
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-line bg-canvas/60 p-5">
              <p className="text-sm font-medium text-ink">
                Besoin d&apos;un devis rapide ?
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                Échangeons directement sur WhatsApp.
              </p>
              <ButtonLink
                href={whatsappUrl()}
                external
                variant="whatsapp"
                className="mt-4"
              >
                <WhatsappLogo size={18} weight="fill" />
                Demander un devis
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="rounded-2xl border border-line bg-canvas/60 p-6 shadow-soft sm:p-8"
        >
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
