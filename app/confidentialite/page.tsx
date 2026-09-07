import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { company, legal } from "@/lib/content";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité de ${company.name}.`,
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-xl font-semibold text-ink">{children}</h2>
  );
}

export default function ConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité">
      <p>
        {company.name} accorde de l&apos;importance à la protection de vos
        données personnelles. Cette politique décrit quelles données sont
        traitées via ce site, dans quel but, et quels sont vos droits,
        conformément à la {legal.lawReference} et aux règles de l&apos;
        {legal.apdp.name}.
      </p>

      <section>
        <H2>Données collectées</H2>
        <p className="mt-3">
          Le formulaire de contact recueille les informations que vous
          fournissez volontairement : nom, adresse email et contenu de votre
          message. Aucune donnée n&apos;est collectée à votre insu.
        </p>
      </section>

      <section>
        <H2>Finalités</H2>
        <p className="mt-3">
          Ces données sont utilisées uniquement pour traiter votre demande, vous
          répondre, et le cas échéant vous adresser un devis. Elles ne sont ni
          revendues, ni utilisées à des fins publicitaires.
        </p>
      </section>

      <section>
        <H2>Base légale</H2>
        <p className="mt-3">
          Le traitement repose sur votre consentement, exprimé par l&apos;envoi
          volontaire du formulaire de contact.
        </p>
      </section>

      <section>
        <H2>Fonctionnement du formulaire</H2>
        <p className="mt-3">
          Le formulaire de contact n&apos;enregistre aucune donnée sur ce site :
          il ouvre votre application de messagerie et le message est transmis
          directement à {company.email}. Aucune base de données n&apos;est
          alimentée par le site.
        </p>
      </section>

      <section>
        <H2>Durée de conservation</H2>
        <p className="mt-3">
          Les échanges reçus par email sont conservés le temps nécessaire au
          traitement de votre demande, puis archivés ou supprimés selon nos
          obligations. Vous pouvez à tout moment demander la suppression de vos
          messages.
        </p>
      </section>

      <section>
        <H2>Destinataires</H2>
        <p className="mt-3">
          Seules les personnes habilitées de {company.name} ont accès aux
          messages que vous nous adressez. Aucune donnée n&apos;est transmise à
          des tiers.
        </p>
      </section>

      <section>
        <H2>Vos droits</H2>
        <p className="mt-3">
          Vous disposez d&apos;un droit d&apos;accès, de rectification, de
          suppression et d&apos;opposition sur vos données. Pour exercer ces
          droits, écrivez à{" "}
          <a
            href={`mailto:${company.email}`}
            className="font-medium text-cyan-600 hover:underline"
          >
            {company.email}
          </a>
          . En cas de difficulté, vous pouvez saisir l&apos;{legal.apdp.name}.
        </p>
      </section>

      <section>
        <H2>Sécurité</H2>
        <p className="mt-3">
          Le site est diffusé via une connexion chiffrée (HTTPS). Nous mettons
          en œuvre des mesures raisonnables pour protéger les informations que
          vous nous transmettez contre tout accès non autorisé.
        </p>
      </section>

      <section>
        <H2>Cookies</H2>
        <p className="mt-3">
          Ce site ne dépose aucun cookie non essentiel (mesure d&apos;audience,
          marketing) sans votre consentement préalable. Le détail figure dans
          notre{" "}
          <a
            href="/cookies"
            className="font-medium text-cyan-600 hover:underline"
          >
            politique de cookies
          </a>
          .
        </p>
      </section>

      <section>
        <H2>Modifications de cette politique</H2>
        <p className="mt-3">
          Nous nous réservons le droit de modifier cette politique à tout
          moment. En cas de changement, la date de mise à jour indiquée en haut
          de la page est actualisée.
        </p>
      </section>
    </LegalPage>
  );
}
