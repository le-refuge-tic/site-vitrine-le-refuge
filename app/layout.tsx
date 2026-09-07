import type { Metadata } from "next";
import { Outfit, Inter_Tight } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://lerefugetic.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LE REFUGE TIC — Solutions numériques et services au Bénin",
    template: "%s · LE REFUGE TIC",
  },
  description:
    "LE REFUGE TIC conçoit des sites web et applications mobiles, forme, et accompagne vos projets immobiliers, commerciaux et de communication au Bénin.",
  keywords: [
    "REFUGE TIC",
    "développement web Bénin",
    "application mobile Bénin",
    "design UI/UX",
    "formation informatique",
    "immobilier Bénin",
  ],
  authors: [{ name: "LE REFUGE TIC" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "LE REFUGE TIC",
    title: "LE REFUGE TIC — Solutions numériques et services au Bénin",
    description:
      "Votre partenaire pour le numérique et les services au Bénin : web, mobile, design, formation, immobilier et plus.",
    images: [{ url: "/logo-refuge.png", width: 500, height: 500, alt: "LE REFUGE TIC" }],
  },
  icons: {
    icon: "/logo-refuge.png",
    apple: "/logo-refuge.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="grain relative min-h-full flex flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-navy-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu
        </a>
        {children}
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
