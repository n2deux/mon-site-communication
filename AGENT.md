# AGENT.md — contexte projet pour un assistant de développement

Ce fichier décrit l'intégralité du projet à un agent IA qui le reprend sans historique.
Lis-le entièrement avant toute modification.

---

## 1. Nature du projet

Site vitrine d'un **freelance en communication digitale basé à Rennes**, orienté
conversion. Objectif unique : obtenir des prises de contact et des rendez-vous.

Le propriétaire du site est étudiant en 2e année de BTS Communication, travaille sur des
projets avec de vrais annonceurs et développe une activité freelance en parallèle.

**Positionnement à préserver dans toute rédaction :** il n'est pas « community manager ».
Il prend en charge la communication digitale d'une entreprise — stratégie, création de
contenu, réseaux sociaux, acquisition — vendue en **accompagnement mensuel récurrent**,
jamais en missions ponctuelles. Le vocabulaire « mission », « prestation ponctuelle »,
« petit boulot » est proscrit.

**Cible :** TPE et PME — restaurants, commerces, hôtels, salles de sport, agences
immobilières, salons et instituts, artisans, e-commerce, entreprises de services.
Le lecteur type est un dirigeant de PME. Le site doit lui inspirer confiance.

---

## 2. Règle absolue : ne rien inventer

**Aucun client, chiffre, témoignage, certification, logo, partenariat, résultat ou année
d'expérience ne doit être inventé, sous aucun prétexte.**

Cette règle prime sur toute considération esthétique ou commerciale. Si une information
manque, laisse un placeholder `[ENTRE CROCHETS]` visible.

Trois mécanismes l'appliquent déjà dans le code — ne les contourne pas :

- `isPlaceholder()` dans `content/site.ts` : un lien dont l'URL est encore un placeholder
  est rendu en texte inerte, jamais en `<a href>`.
- `content/proof.ts` : `certifications`, `testimonials` et `clientLogos` sont des tableaux
  **vides**. Quand ils sont vides, l'interface affiche un cadre pointillé explicite.
  Ne les remplis jamais d'exemples, même « à titre d'illustration ».
- `content/projects.ts` : le champ `results` est vide sur tous les projets. La page détail
  indique alors explicitement qu'aucun chiffre n'est publié.

Ne promets jamais de résultat garanti ou chiffré (« x10 vos ventes », « résultats
garantis »). La promesse est qualitative : régularité, image professionnelle, visibilité,
cohérence, gain de temps.

---

## 3. Stack

| | |
| --- | --- |
| Framework | Next.js 16.3.2, App Router |
| Runtime | React 19.2.8, TypeScript strict |
| Styles | Tailwind CSS 4.3.3, configuration CSS-first via `@theme` |
| Polices | `next/font/google` — Inter (UI) + Instrument Serif (emphase italique) |
| Dépendances de production | `next`, `react`, `react-dom`. **Il n'y en a pas d'autres.** |

La configuration PostCSS est en **`postcss.config.json`** et non en `.mjs` : le projet ne
contient ainsi aucun fichier JavaScript, ce qui permet de l'envoyer par email sans être
bloqué par les antivirus des messageries (Gmail bloque les archives contenant du `.js` ou
du `.mjs`). Ne la reconvertis pas en `.mjs` sans raison.

**Décision d'architecture à respecter : aucune librairie d'animation.** Les apparitions au
scroll passent par un unique `IntersectionObserver` (`components/ui/reveal-provider.tsx`)
et des transitions CSS. N'introduis pas Framer Motion, GSAP, AOS ou équivalent : elles
apporteraient ~40 ko gzip pour un rendu identique. De même, n'ajoute pas de librairie de
composants (shadcn, MUI…) : le design est sur mesure et cohérent.

---

## 4. Arborescence

```
app/
  layout.tsx                       <head>, polices, métadonnées globales, JSON-LD ProfessionalService
  page.tsx                         page d'accueil = ordre des sections (à ne pas réordonner sans raison, voir §7)
  globals.css                      design tokens (@theme) + utilitaires (@utility) + animations
  icon.tsx                         favicon générée par next/og à partir du nom de marque
  opengraph-image.tsx              image de partage 1200×630, générée
  sitemap.ts / robots.ts           SEO technique, se mettent à jour depuis content/projects.ts
  not-found.tsx                    404 avec CTA
  api/contact/route.ts             réception du formulaire (voir §8)
  realisations/[slug]/page.tsx     page détail, generateStaticParams depuis content/projects.ts
  mentions-legales/page.tsx
  politique-de-confidentialite/page.tsx

components/
  site-header.tsx                  client — nav, état scroll, menu mobile
  site-footer.tsx
  contact-form.tsx                 client — formulaire, états idle/pending/success/error
  project-card.tsx                 carte projet + visuel de repli typographique
  legal-page.tsx                   gabarit des pages légales
  sections/                        une section = un fichier
    hero · problem · services · process · recurrence · work
    offers · about · proof · cta-band · faq · contact
  ui/
    reveal-provider.tsx            client — l'unique IntersectionObserver du site
    button.tsx                     Button (Link) et SubmitButton
    section.tsx                    Section (tone: bone | paper | ink) et Eyebrow

content/                           TOUT LE CONTENU ÉDITABLE — c'est ici qu'on travaille
  site.ts        identité, coordonnées, mentions légales, isPlaceholder(), siteUrl
  nav.ts         menus header et footer
  services.ts    5 domaines d'intervention
  process.ts     5 étapes de la méthode
  offers.ts      3 accompagnements (Essentiel / Développement / Acquisition)
  projects.ts    réalisations + catégories + helpers
  proof.ts       parcours, outils, certifications, témoignages, logos
  faq.ts         10 questions/réponses

lib/utils.ts                       cn(), clean(), monogram()
public/realisations/               visuels des projets
public/clients/                    logos clients (uniquement avec autorisation écrite)
```

**Règle de séparation :** le contenu vit dans `content/`, jamais en dur dans un composant.
Si on te demande de changer un texte, cherche d'abord dans `content/`.

---

## 5. Système de design

Défini dans `app/globals.css`, bloc `@theme`. N'utilise jamais de valeur hexadécimale en
dur dans un composant : passe par les tokens.

**Palette — trois couleurs, pas davantage.** Encre `--color-ink #0b0c0d`,
os `--color-bone #f7f6f2`, accent terre cuite `--color-accent #c04a26`.
Plus les nuances `ink-900/800/700`, `bone-200`, `mute`, `mute-light`, `line`, `line-dark`,
`accent-600`, `accent-soft`. Pas de dégradé multicolore, pas de seconde couleur d'accent.

**Utilitaires typographiques** (`@utility` dans `globals.css`) :

| Classe | Usage |
| --- | --- |
| `u-container` | conteneur 1240 px avec marges responsives |
| `u-display` | titre de hero, `clamp(2.4rem, 7.2vw, 5.25rem)` |
| `u-h2` | titre de section |
| `u-h3` | titre de carte |
| `u-lead` | paragraphe d'introduction |
| `u-em` | emphase en serif italique — **2 à 3 mots par titre maximum** |

`u-em` est la signature visuelle du site. Utilisée sur une phrase entière, elle perd tout
son effet. Un titre = une emphase.

**Animations.** Ajoute `data-reveal` sur un élément pour le faire apparaître au scroll, et
`style={{ "--reveal-delay": "80ms" } as React.CSSProperties}` pour l'échelonner dans une
grille. Le `RevealProvider` monté dans `app/layout.tsx` s'occupe du reste.
`prefers-reduced-motion` est respecté globalement — ne le contourne pas.

**Rythme des fonds.** L'alternance os → encre → blanc → encre structure la lecture. Les
sections sombres (`tone="ink"`) sont les moments où le prospect doit ralentir : le constat,
la récurrence, la crédibilité, le contact. Conserve cette alternance si tu ajoutes une
section.

---

## 6. Conventions de code

- Composants serveur par défaut. `"use client"` uniquement là où c'est nécessaire :
  `site-header`, `contact-form`, `work` (filtres), `reveal-provider`.
- Alias d'import `@/` vers la racine.
- Nommage des fichiers en `kebab-case`, exports nommés (pas de `export default` pour les
  composants, sauf les pages Next).
- Commentaires en français, uniquement quand ils expliquent un **pourquoi** non évident.
  Ne commente pas ce que le code dit déjà.
- Apostrophes typographiques dans le JSX : `&apos;` (ESLint `react/no-unescaped-entities`).
- Tout texte visible est en français, avec les espaces insécables là où la typographie
  française les impose (`&nbsp;?`, `&nbsp;!`, `&nbsp;:`).

---

## 7. Ordre des sections — ne pas réordonner à la légère

`app/page.tsx` suit un parcours psychologique délibéré :

```
Hero        je découvre
Problem     je me reconnais
Services    je comprends ce qu'il fait
Process     je comprends comment il travaille
Recurrence  je comprends que c'est un accompagnement, pas une prestation
Work        je vois des preuves
Offers      je comprends l'offre
About       je sais à qui j'ai affaire
Proof       je suis rassuré
CtaBand     on me rappelle l'étape suivante
Faq         mes objections tombent
Contact     je passe à l'action
```

Le site compte neuf CTA aux libellés volontairement différents (« Parler de mon projet »,
« Voir mes réalisations », « Découvrir les accompagnements », « Échanger sur mes
objectifs », « Cadrer mon accompagnement »…). Si tu en ajoutes un, varie le libellé :
répéter le même bouton fatigue le lecteur et fait baisser le taux de clic.

---

## 8. Formulaire de contact

`components/contact-form.tsx` poste du JSON sur `POST /api/contact`.

Champs : `firstName`, `lastName`, `company`, `email`, `phone`, `website`, `socials`,
`need`, `budget`, `message`, `consent`, plus `website_url` (piège à robots, doit rester
vide et invisible).

`app/api/contact/route.ts` applique, dans cet ordre :

1. si le honeypot `website_url` est rempli → `200` silencieux, aucun envoi ;
2. validation des champs obligatoires → `422` ;
3. validation du format email → `422` ;
4. consentement RGPD obligatoire → `422` ;
5. **Resend** si `RESEND_API_KEY` et `CONTACT_TO_EMAIL` sont définies (appel REST via
   `fetch`, sans SDK — n'installe pas le paquet `resend`) ;
6. sinon **Formspree** si `FORMSPREE_ENDPOINT` est définie ;
7. sinon → `503` avec un message honnête invitant à écrire par email.

**Ne remplace jamais le cas 7 par un faux succès.** Un formulaire qui affiche « message
envoyé » sans rien envoyer fait perdre de vrais prospects.

Le `reply_to` est l'adresse du prospect : répondre à la notification répond au prospect.

### Variables d'environnement

| Variable | Quand | Rôle |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | production | URL canonique, Open Graph, sitemap |
| `RESEND_API_KEY` | option A | clé API Resend |
| `CONTACT_TO_EMAIL` | option A | destinataire des demandes |
| `CONTACT_FROM_EMAIL` | option A | expéditeur, domaine vérifié dans Resend |
| `FORMSPREE_ENDPOINT` | option B | endpoint Formspree |

Ne mets **jamais** de clé réelle dans le code ni dans un fichier versionné.
`.env.local` est ignoré par git ; `.env.example` documente les variables sans valeur.

---

## 9. Tâches de personnalisation à réaliser

À faire dans cet ordre. Demande la vraie information au propriétaire — n'invente aucune
valeur, même provisoire et « réaliste ».

1. **`content/site.ts`** — `brand`, `brandShort` (2 à 12 caractères, sert au monogramme du
   logo et à la favicon), `fullName`, `email`, `socials.instagram` et `socials.linkedin`
   (libellé **et** URL), puis `legal.*` dès l'immatriculation.
2. **`content/offers.ts`** — remplacer les trois `[À DÉFINIR]` par les montants mensuels.
   Conserver la formulation « À partir de … / mois » : le site doit provoquer un contact,
   pas servir de catalogue de prix.
3. **`content/projects.ts`** — remplacer les six projets fictifs par les vrais. Structure
   d'un projet : `slug` (URL), `title`, `client`, `sector`, `year`, `category` (doit exister
   dans `categories`), `tags`, `cover` (`/realisations/fichier.jpg` ou `null` pour le
   visuel typographique de repli), `excerpt`, `context`, `problem`, `objective`,
   `strategy[]`, `delivery[]`, `results[]` (**vide sauf chiffres mesurés et validés par le
   client**), `link`, `published`.
4. **`content/proof.ts`** — établissement de formation, nombre de stages et entreprises.
   `certifications`, `testimonials` et `clientLogos` ne se remplissent qu'avec des éléments
   réels ; les témoignages exigent un accord écrit, les logos aussi.
5. **`components/sections/about.tsx`** — remplacer le bloc « Emplacement portrait » par un
   `next/image` pointant vers la photo déposée dans `public/`. Prévoir un `alt` descriptif.
6. **`app/mentions-legales/page.tsx`** et **`politique-de-confidentialite/page.tsx`** —
   renseigner la date de mise à jour et vérifier le nom de l'hébergeur retenu.
7. **`.env.local`** — brancher le formulaire (§8).

### Vérification après modification

```bash
npm run typecheck   # TypeScript
npm run build       # doit passer sans erreur avant toute publication
```

Puis contrôler visuellement en 390 px de large (iPhone) : le mobile est prioritaire.
Sous 640 px, le header n'affiche que le monogramme — c'est voulu, pour qu'il tienne sur
une ligne quelle que soit la longueur du nom de marque.

---

## 10. Déploiement

Cible recommandée : **Cloudflare Pages** ou **Netlify**, dont les offres gratuites
autorisent l'usage commercial.

À signaler au propriétaire s'il évoque Vercel : l'offre Hobby est gratuite mais ses
conditions la réservent à un usage **non commercial**. Un site professionnel générant des
demandes de devis en sort ; il faut alors l'offre payante.

Étapes : dépôt GitHub privé → import sur la plateforme (Next.js détecté seul) → variables
d'environnement du §8 en Production et Preview → branchement du domaine (HTTPS automatique).

Après mise en ligne : déclarer le site dans Google Search Console et soumettre
`/sitemap.xml` ; créer la fiche Google Business Profile et la faire pointer vers le site —
c'est le levier le plus rentable sur les requêtes locales du type « freelance
communication Rennes ».

### Variante : export statique

Le site est presque entièrement statique ; seule `/api/contact` est dynamique. Si le
propriétaire choisit Formspree, le formulaire peut poster directement depuis le navigateur.
On peut alors passer en `output: "export"` et héberger du HTML pur, sans contrainte de
plateforme. Ne fais cette bascule que sur demande explicite : elle supprime la validation
serveur et le honeypot côté API.

---

## 11. Pièges à éviter

- Remplir un tableau vide de `content/proof.ts` avec des exemples « pour la démo ».
- Ajouter une librairie d'animation ou de composants.
- Écrire une couleur en dur au lieu d'un token.
- Étendre `u-em` à une phrase entière.
- Ajouter des emojis, des icônes décoratives volumineuses ou des illustrations.
- Employer les tournures génériques d'IA : « Dans un monde digital en constante
  évolution… », « À l'ère du numérique… », « Je suis passionné par… ». Le ton visé est
  court, direct, humain, professionnel.
- Mettre en avant le fait que le propriétaire est étudiant ou débutant. Le parcours est
  présenté avec transparence dans « À propos », mais ce n'est jamais l'argument.
- Réordonner les sections de `app/page.tsx` sans comprendre le parcours du §7.
