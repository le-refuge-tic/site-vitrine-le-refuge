import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité de ${company.name}.`,
};

export default function ConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité">
      <p>
        Cette page décrit comment {company.name} traite les données transmises
        via ce site. Le contenu ci-dessous est un modèle à adapter selon vos
        pratiques réelles.
      </p>

      <section>
        <h2 className="font-display text-xl font-semibold text-ink">
          Données collectées
        </h2>
        <p className="mt-3">
          Le formulaire de contact ne stocke aucune donnée sur ce site : il
          ouvre votre application de messagerie et vous transmettez directement
          votre message à {company.email}. Les informations que vous choisissez
          d&apos;envoyer (nom, email, message) ne sont utilisées que pour
          répondre à votre demande.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-ink">
          Cookies
        </h2>
        <p className="mt-3">
          Ce site n&apos;utilise pas de cookies de suivi publicitaire.{" "}
          <span className="rounded bg-cyan-50 px-1.5 py-0.5 text-sm font-medium text-cyan-700">
            [à confirmer selon les outils de mesure d&apos;audience utilisés]
          </span>
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-ink">
          Vos droits
        </h2>
        <p className="mt-3">
          Vous pouvez demander l&apos;accès, la rectification ou la suppression
          des informations vous concernant en écrivant à{" "}
          <a
            href={`mailto:${company.email}`}
            className="font-medium text-cyan-600 hover:underline"
          >
            {company.email}
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
