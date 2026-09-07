# Site vitrine — LE REFUGE TIC

Site vitrine officiel de **LE REFUGE TIC**, entreprise TIC basée au Bénin :
développement web & mobile, design UI/UX, communication, ingénierie informatique,
formations, immobilier, commerce et services.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Phosphor Icons](https://phosphoricons.com/)

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
```

Autres scripts :

```bash
npm run build    # build de production
npm run start    # serveur de production
npm run lint     # ESLint
```

## Structure

```
app/                     # routes (App Router)
  page.tsx               # page d'accueil (assemble les sections)
  mentions-legales/      # page légale
  confidentialite/       # politique de confidentialité
  not-found.tsx          # page 404
components/
  layout/                # Header, Footer, gabarit des pages légales
  sections/              # Hero, Services, Portfolio, About, Contact
  ui/                    # Container, Button, SectionTitle, Logo
  motion/                # Reveal (wrapper d'animation au scroll)
lib/
  content.ts             # SOURCE UNIQUE des données (services, contact, projets)
  cn.ts                  # utilitaire de concaténation de classes
public/                  # logo et assets statiques
```

## Contenu

Toutes les données réelles (services, coordonnées, réalisations) sont centralisées
dans [`lib/content.ts`](lib/content.ts). C'est le seul fichier à éditer pour mettre
à jour le contenu du site.

### À compléter

Certaines informations juridiques restent à renseigner (marquées `[À COMPLÉTER]`) :

- **Mentions légales** : forme juridique, IFU/RCCM, directeur de la publication, hébergeur
- **Confidentialité** : outils de mesure d'audience éventuels

## Déploiement

Prévu sur [Vercel](https://vercel.com/) (comme les autres projets REFUGE).
