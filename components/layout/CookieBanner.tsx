"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { COOKIE_BANNER_ENABLED } from "@/lib/content";

const STORAGE_KEY = "refuge-cookie-consent";

type Consent = "accepted" | "refused";

/**
 * Bandeau de consentement aux cookies, conforme au principe béninois/RGPD :
 * informer, accepter OU refuser aussi simplement, accès au paramétrage détaillé
 * (page politique de cookies). Aucun cookie non essentiel n'est déposé tant que
 * le consentement n'est pas donné.
 *
 * Désactivé via `COOKIE_BANNER_ENABLED` tant qu'aucun cookie non essentiel
 * n'existe : dans ce cas il ne s'affiche pas (rien à consentir).
 */
// `useSyncExternalStore` renvoie false côté serveur (getServerSnapshot),
// évitant tout mismatch d'hydratation sans setState dans un effet.
const emptySubscribe = () => () => {};

export function CookieBanner() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true, // client
    () => false, // serveur
  );
  const [dismissed, setDismissed] = useState(false);

  const hasStoredConsent = () => {
    try {
      return localStorage.getItem(STORAGE_KEY) !== null;
    } catch {
      return false;
    }
  };

  const show =
    COOKIE_BANNER_ENABLED && isClient && !dismissed && !hasStoredConsent();

  const decide = (consent: Consent) => {
    try {
      localStorage.setItem(STORAGE_KEY, consent);
    } catch {
      /* stockage indisponible : on masque quand même le bandeau */
    }
    setDismissed(true);
    // Point d'ancrage : activer/désactiver ici les scripts non essentiels
    // (ex. mesure d'audience) selon `consent === "accepted"`.
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-label="Consentement aux cookies"
          className="fixed inset-x-0 bottom-0 z-50"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Container className="pb-4">
            <div className="rounded-2xl border border-line bg-surface p-5 shadow-lift sm:flex sm:items-center sm:gap-6 sm:p-6">
              <p className="text-sm leading-relaxed text-ink-soft">
                Nous utilisons des cookies pour améliorer votre expérience. Vous
                pouvez les accepter, les refuser, ou consulter notre{" "}
                <Link
                  href="/cookies"
                  className="font-medium text-cyan-600 hover:underline"
                >
                  politique de cookies
                </Link>{" "}
                pour le détail.
              </p>
              <div className="mt-4 flex shrink-0 gap-3 sm:mt-0">
                <Button
                  variant="outline"
                  onClick={() => decide("refused")}
                  className="flex-1 sm:flex-none"
                >
                  Refuser
                </Button>
                <Button
                  onClick={() => decide("accepted")}
                  className="flex-1 sm:flex-none"
                >
                  Accepter
                </Button>
              </div>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
