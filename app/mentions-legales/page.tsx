import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { company, legal } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales de ${company.name}.`,
};

/** Affiche une valeur légale, ou un marqueur « à compléter » si absente. */
function Field({ value, label }: { value: string | null; label: string }) {
  if (value) return <>{value}</>;
  return (
    <span className="rounded bg-cyan-50 px-1.5 py-0.5 text-sm font-medium text-cyan-700">
      [{label} — à compléter]
    </span>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-xl font-semibold text-ink">{children}</h2>
  );
}

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales">
      <p>
        Conformément à la {legal.lawReference}, les informations suivantes sont
        portées à la connaissance des utilisateurs du site.
      </p>

      <section>
        <H2>Éditeur du site</H2>
        <ul className="mt-3 space-y-1.5">
          <li>Dénomination sociale : {legal.companyName}</li>
          <li>
            Forme juridique :{" "}
            <Field value={legal.legalForm} label="forme juridique" />
          </li>
          <li>
            Siège social : {legal.headOffice}, {company.country}
          </li>
          <li>
            Capital social : <Field value={legal.capital} label="capital social" />
          </li>
          <li>
            Immatriculation (RCCM) : <Field value={legal.rccm} label="n° RCCM" />
          </li>
          <li>
            Identifiant Fiscal Unique (IFU) :{" "}
            <Field value={legal.ifu} label="IFU" />
          </li>
        </ul>
      </section>

      <section>
        <H2>Contact</H2>
        <ul className="mt-3 space-y-1.5">
          <li>
            Email :{" "}
            <a
              href={`mailto:${company.email}`}
              className="font-medium text-cyan-600 hover:underline"
            >
              {company.email}
            </a>
          </li>
          <li>Téléphone : {company.phones.join(" · ")}</li>
        </ul>
      </section>

      <section>
        <H2>Directeur de la publication</H2>
        <p className="mt-3">
          <Field
            value={legal.publicationDirector}
            label="nom du directeur de la publication"
          />
        </p>
      </section>

      <section>
        <H2>Hébergement</H2>
        <p className="mt-3">
          Le site est hébergé par {legal.host.name}, {legal.host.address}.{" "}
          <a
            href={legal.host.website}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-cyan-600 hover:underline"
          >
            {legal.host.website}
          </a>
        </p>
      </section>

      <section>
        <H2>Protection des données personnelles</H2>
        <p className="mt-3">
          Le traitement des données personnelles collectées via ce site est
          soumis à la {legal.lawReference} et au contrôle de l&apos;
          {legal.apdp.name}. Les modalités de collecte et vos droits sont
          détaillés dans notre{" "}
          <a
            href="/confidentialite"
            className="font-medium text-cyan-600 hover:underline"
          >
            politique de confidentialité
          </a>
          .
        </p>
      </section>

      <section>
        <H2>Propriété intellectuelle</H2>
        <p className="mt-3">
          L&apos;ensemble des contenus de ce site (textes, visuels, logo) est la
          propriété de {legal.companyName}, sauf mention contraire. Toute
          reproduction sans autorisation préalable est interdite.
        </p>
      </section>
    </LegalPage>
  );
}
