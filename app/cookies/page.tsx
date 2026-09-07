import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description: `Politique de cookies de ${company.name}.`,
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-xl font-semibold text-ink">{children}</h2>
  );
}

export default function CookiesPage() {
  return (
    <LegalPage title="Politique de cookies">
      <p>
        Un cookie est un petit fichier déposé sur votre appareil lors de la
        visite d&apos;un site. Cette page détaille l&apos;usage des cookies sur
        le site de {company.name}.
      </p>

      <section>
        <H2>Cookies utilisés</H2>
        <p className="mt-3">
          En l&apos;état actuel, ce site{" "}
          <strong className="font-semibold text-ink">
            ne dépose aucun cookie non essentiel
          </strong>{" "}
          : ni mesure d&apos;audience, ni cookie publicitaire ou marketing. Le
          formulaire de contact fonctionne sans cookie et sans stockage de
          données sur le site.
        </p>
      </section>

      <section>
        <H2>Consentement</H2>
        <p className="mt-3">
          Si des cookies non essentiels venaient à être ajoutés (par exemple un
          outil de statistiques), un bandeau de consentement s&apos;afficherait
          dès votre première visite. Il vous permettrait :
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>d&apos;être informé des cookies concernés ;</li>
          <li>de les accepter ou de les refuser aussi simplement ;</li>
          <li>d&apos;accéder à un paramétrage détaillé par catégorie.</li>
        </ul>
        <p className="mt-3">
          Aucun cookie non essentiel n&apos;est déposé avant votre consentement.
        </p>
      </section>

      <section>
        <H2>Catégories et durées</H2>
        <p className="mt-3">
          Lorsque des cookies seront utilisés, ils seront classés par catégorie
          (essentiels, statistiques, marketing) avec, pour chacun, sa finalité
          et sa durée de conservation. Cette page sera mise à jour en
          conséquence.
        </p>
      </section>

      <section>
        <H2>Désactiver les cookies</H2>
        <p className="mt-3">
          Vous pouvez à tout moment configurer votre navigateur pour bloquer ou
          supprimer les cookies. La procédure varie selon le navigateur
          (Chrome, Firefox, Safari, Edge) et se trouve dans ses paramètres de
          confidentialité.
        </p>
      </section>
    </LegalPage>
  );
}
