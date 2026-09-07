import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Footer } from "@/components/layout/Footer";

/** Gabarit commun aux pages légales : en-tête minimal, retour à l'accueil, contenu. */
export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-line bg-surface">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="Retour à l'accueil">
            <Logo />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-cyan-600"
          >
            <ArrowLeft size={16} weight="bold" />
            Retour à l&apos;accueil
          </Link>
        </Container>
      </header>

      <main id="contenu" className="relative z-10 flex-1 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            {title}
          </h1>
          <div className="prose-refuge mt-8 space-y-6 text-[0.95rem] leading-relaxed text-ink-soft">
            {children}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
