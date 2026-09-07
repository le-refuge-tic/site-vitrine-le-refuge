/**
 * SOURCE UNIQUE DE VÉRITÉ — données réelles de LE REFUGE TIC.
 * Aucune donnée n'est inventée : seules les informations fournies par le client
 * figurent ici. Les éléments non fournis sont marqués [À COMPLÉTER].
 */

export const company = {
  name: "LE REFUGE TIC",
  shortName: "REFUGE TIC",
  tagline: "Votre partenaire pour le numérique et les services au Bénin.",
  subtitle:
    "De la création de sites web et d'applications mobiles à la formation, l'immobilier et la communication — LE REFUGE TIC réunit vos besoins en un seul interlocuteur.",
  email: "contact@lerefugetic.com",
  phones: ["+229 01 96 76 60 49", "+229 01 97 31 39 91"],
  address:
    "En quittant le carrefour Kpota pour le carrefour Aïchédji, prendre à droite ; au troisième rond-point, à 400 m, dans la rue, 2ème bureau à droite.",
  country: "Bénin",
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
];

/**
 * Pôles de services. Chaque service listé provient exactement de la liste
 * fournie par le client. `icon` référence un nom d'icône Phosphor.
 */
export type ServiceGroup = {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: string[];
  featured?: boolean;
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "numerique",
    title: "Numérique & développement",
    description:
      "Conception et développement de vos produits digitaux, du site vitrine à l'application métier.",
    icon: "Code",
    featured: true,
    items: [
      "Développement informatique",
      "Développement de sites web",
      "Applications mobiles",
      "Design UI/UX",
      "Ingénierie informatique",
    ],
  },
  {
    id: "communication",
    title: "Communication",
    description:
      "Prestations de services en communication pour donner de la visibilité à votre activité.",
    icon: "Megaphone",
    items: ["Prestations de services en communication"],
  },
  {
    id: "formation",
    title: "Formations",
    description:
      "Des formations pour monter en compétences sur les outils et métiers du numérique.",
    icon: "GraduationCap",
    items: ["Formations"],
  },
  {
    id: "immobilier",
    title: "Immobilier",
    description:
      "Accompagnement immobilier et gestion, adossés à notre plateforme dédiée.",
    icon: "Buildings",
    items: ["Service immobilier", "Gestion immobilière"],
  },
  {
    id: "commerce",
    title: "Commerce & divers",
    description:
      "Commerce général, restauration et autres services pour répondre à vos besoins du quotidien.",
    icon: "Storefront",
    items: ["Commerce général", "Restauration et divers"],
  },
];

export type Project = {
  title: string;
  role: string;
  description: string;
  url: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "REFUGE — Espace client",
    role: "Plateforme immobilière · Web",
    description:
      "L'interface publique de la plateforme immobilière REFUGE : recherche de biens, mise en relation et suivi des demandes pour les particuliers.",
    url: "https://refuge-user-chi.vercel.app/",
    tags: ["React", "Web", "Immobilier"],
  },
  {
    title: "REFUGE — Dashboard admin",
    role: "Tableau de bord de gestion · Web",
    description:
      "L'outil d'administration de la plateforme : gestion des annonces, des commerciaux, des utilisateurs, des finances et des visites.",
    url: "https://immo-web-admin-ten.vercel.app/",
    tags: ["React", "TypeScript", "Dashboard"],
  },
];

/**
 * Points « à propos » — rédigés uniquement à partir des faits fournis.
 * Aucun chiffre (année, effectif, nombre de projets) n'est inventé.
 */
export const aboutPoints: { title: string; body: string }[] = [
  {
    title: "Un interlocuteur, plusieurs métiers",
    body: "Le numérique, la formation, l'immobilier, la communication et le commerce réunis au sein d'une même structure au Bénin.",
  },
  {
    title: "Du concret, pas des promesses",
    body: "Nos réalisations sont en ligne et accessibles : la plateforme immobilière REFUGE en est l'illustration.",
  },
  {
    title: "Proximité",
    body: "Un accompagnement de bout en bout, de la première idée à la mise en ligne et au suivi.",
  },
];

/**
 * Données légales. Les champs `null` sont à compléter par le client
 * (aucune valeur inventée). Ils s'affichent comme « [À COMPLÉTER] ».
 */
export const legal = {
  // --- Éditeur ---
  companyName: "LE REFUGE TIC",
  legalForm: null as string | null, // ex. « SARL », « Établissement », « SAS »
  rccm: null as string | null, // n° d'immatriculation au RCCM
  ifu: null as string | null, // Identifiant Fiscal Unique
  capital: null as string | null, // capital social
  headOffice: company.address, // siège social
  publicationDirector: null as string | null, // directeur de la publication

  // --- Hébergeur ---
  host: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    website: "https://vercel.com",
  },

  // --- Autorité de protection des données (Bénin) ---
  apdp: {
    name: "Autorité de Protection des Données Personnelles (APDP)",
    website: "https://apdp.bj",
  },

  // Référence du cadre légal applicable
  lawReference: "Loi n° 2017-20 du 20 avril 2018 portant Code du numérique en République du Bénin",
} as const;

/**
 * Bandeau cookies. Désactivé tant qu'aucun cookie non essentiel
 * (mesure d'audience, marketing) n'est déposé : conformément au principe
 * « aucun dépôt avant consentement », il ne sert à rien de l'afficher.
 * Passer à `true` le jour où un outil de suivi (ex. Analytics) est ajouté.
 */
export const COOKIE_BANNER_ENABLED = false;
