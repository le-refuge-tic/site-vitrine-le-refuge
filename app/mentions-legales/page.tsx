import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales de ${company.name}.`,
};

function Placeholder({ label }: { label: string }) {
  return (
    <span className="rounded bg-cyan-50 px-1.5 py-0.5 text-sm font-medium text-cyan-700">
      [{label} — à compléter]
    </span>
  );
}

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales">
      <p>
        Ce contenu doit être complété avec les informations officielles de{" "}
        {company.name}.
      </p>

      <section>
        <h2 className="font-display text-xl font-semibold text-ink">Éditeur</h2>
        <ul className="mt-3 space-y-1.5">
          <li>Raison sociale : {company.name}</li>
          <li>
            Forme juridique : <Placeholder label="forme juridique" />
          </li>
          <li>
            Numéro d&apos;identification (IFU / RCCM) :{" "}
            <Placeholder label="identifiant" />
          </li>
          <li>Adresse : {company.address}</li>
          <li>Email : {company.email}</li>
          <li>Téléphone : {company.phones.join(" · ")}</li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-ink">
          Directeur de la publication
        </h2>
        <p className="mt-3">
          <Placeholder label="nom du responsable" />
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-ink">
          Hébergement
        </h2>
        <p className="mt-3">
          <Placeholder label="hébergeur, adresse, contact" />
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-ink">
          Propriété intellectuelle
        </h2>
        <p className="mt-3">
          L&apos;ensemble des contenus de ce site est la propriété de{" "}
          {company.name}, sauf mention contraire. Toute reproduction sans
          autorisation est interdite.
        </p>
      </section>
    </LegalPage>
  );
}
