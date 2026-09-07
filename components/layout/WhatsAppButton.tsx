"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { whatsappUrl } from "@/lib/content";

/**
 * Bouton flottant WhatsApp, présent sur tout le site.
 * Ouvre une discussion WhatsApp avec un message de demande de devis pré-rempli.
 */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lift transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
    >
      <WhatsappLogo size={26} weight="fill" />
      <span className="hidden text-sm font-medium sm:inline">
        Demander un devis
      </span>
    </a>
  );
}
