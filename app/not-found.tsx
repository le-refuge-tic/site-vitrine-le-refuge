import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main
      id="contenu"
      className="relative z-10 flex flex-1 items-center justify-center py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 40% at 50% 30%, rgba(18,165,229,0.12), transparent 60%)",
        }}
      />
      <Container className="text-center">
        <div className="mx-auto flex justify-center">
          <Logo showWordmark={false} className="[&_img]:h-14 [&_img]:w-14" />
        </div>
        <p className="font-display mt-8 text-6xl font-semibold text-gradient">
          404
        </p>
        <h1 className="font-display mt-4 text-2xl font-semibold text-ink sm:text-3xl">
          Cette page est introuvable
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          Le lien que vous avez suivi n&apos;existe pas ou a été déplacé.
          Revenez à l&apos;accueil pour continuer.
        </p>
        <div className="mt-8">
          <ButtonLink href="/" size="lg">
            Retour à l&apos;accueil
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
