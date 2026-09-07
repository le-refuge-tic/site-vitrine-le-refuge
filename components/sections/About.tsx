import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { aboutPoints, company } from "@/lib/content";

export function About() {
  return (
    <section id="a-propos" className="relative z-10 scroll-mt-24 py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow="À propos"
            title={
              <>
                {company.name},<br />
                le numérique et bien plus
              </>
            }
            intro="Une structure basée au Bénin qui réunit plusieurs métiers sous un même toit, pour accompagner particuliers et entreprises de bout en bout."
          />

          <Reveal delay={0.1} className="mt-8">
            <ButtonLink href="#contact" variant="outline">
              Discuter de votre projet
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="grid gap-4">
          {aboutPoints.map((point, i) => (
            <Reveal
              key={point.title}
              as="li"
              delay={i * 0.08}
              className="rounded-2xl border border-line bg-surface p-6 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <span className="font-display mt-0.5 text-2xl font-semibold text-cyan-500/70 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {point.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
