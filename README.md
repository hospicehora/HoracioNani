# Horacio NANI — Portfolio professionnel (Next.js / React)

Portfolio one-page construit en **React** (via Next.js 14, App Router), avec un design distinctif
(palette indigo / ivoire / terracotta, typographie Fraunces + Work Sans + IBM Plex Mono) et un
**SEO moderne** intégré nativement :

- Balises `<meta>` complètes (title, description, Open Graph, Twitter Card)
- Données structurées **JSON-LD** (schema.org `Person`) pour un meilleur référencement
- `sitemap.xml` et `robots.txt` générés automatiquement par Next.js
- Rendu **statique** (pré-généré au build) → contenu visible immédiatement par les moteurs de recherche
- Accessibilité : focus visible au clavier, `prefers-reduced-motion` respecté, structure HTML sémantique

Toutes les données (expériences, publications, certifications, compétences...) proviennent
**exclusivement** du CV réel et sont centralisées dans `data/profile.js` — aucune donnée n'est inventée.

---

## Structure du projet

```
horacio-nani-portfolio/
├── app/
│   ├── layout.js          ← Layout racine : SEO, JSON-LD, polices
│   ├── page.js             ← Page d'accueil : assemble tous les composants
│   ├── page.module.css
│   ├── globals.css         ← Design tokens (couleurs, typographie)
│   ├── sitemap.js          ← Génère /sitemap.xml automatiquement
│   └── robots.js           ← Génère /robots.txt automatiquement
├── components/
│   ├── Nav.js               ← Navigation latérale (sticky, responsive)
│   ├── Hero.js              ← Section Accueil + bandeau de statistiques
│   ├── Domains.js           ← Domaines de recherche & affiliations
│   ├── Education.js         ← Parcours académique (frise chronologique)
│   ├── Experience.js        ← Expérience professionnelle (+ liste dépliable)
│   ├── Publications.js      ← Revues, communications, travaux en cours
│   ├── Certifications.js    ← Les 10 certifications
│   ├── Skills.js             ← Outils, compétences clés, langues
│   ├── Contact.js            ← Coordonnées
│   └── *.module.css         ← Styles associés à chaque composant
├── data/
│   └── profile.js           ← SOURCE UNIQUE DE DONNÉES (toutes les infos du CV)
├── package.json
├── next.config.js
├── jsconfig.json             ← Alias d'import "@/..."
└── .gitignore
```

**Pour mettre à jour le contenu du site, il suffit de modifier `data/profile.js`** — aucun autre
fichier n'a besoin d'être touché pour changer une expérience, une publication ou une certification.

---

## Déployer sur Vercel

### Option A — Via GitHub (recommandé)

1. Crée un repository sur https://github.com (ex : `horacio-nani-portfolio`)
2. Pousse ce projet dans le repo :
   ```bash
   cd horacio-nani-portfolio
   git init
   git add .
   git commit -m "Portfolio initial"
   git branch -M main
   git remote add origin https://github.com/TON-COMPTE/horacio-nani-portfolio.git
   git push -u origin main
   ```
3. Va sur https://vercel.com → **Add New… → Project**
4. Choisis **Import Git Repository** et sélectionne ton repo
5. Vercel détecte automatiquement Next.js (aucune configuration nécessaire) → clique **Deploy**
6. Ton site est en ligne en moins d'une minute, avec republication automatique à chaque `git push`

### Option B — Via la ligne de commande (sans GitHub)

```bash
npm install -g vercel
cd horacio-nani-portfolio
vercel login
vercel --prod
```

### Option C — Glisser-déposer (déploiement ponctuel)

Sur https://vercel.com → **Add New… → Project** → en bas de la page, dépose le dossier complet
dans la zone "Deploy without Git". *(Moins pratique ici car Vercel doit exécuter `npm install` et
`next build` — Git reste l'option la plus fiable pour Next.js.)*

---

## Lancer le projet en local (optionnel, pour prévisualiser avant de déployer)

```bash
npm install
npm run dev
```

Puis ouvre http://localhost:3000

Pour tester la version de production exacte qui sera déployée :
```bash
npm run build
npm run start
```

---

## Personnaliser après déploiement

- **Nom de domaine** : Settings → Domains dans le tableau de bord Vercel (`.vercel.app` gratuit, ou domaine personnel)
- **URL canonique pour le SEO** : remplace `https://horacio-nani.vercel.app` par ton URL définitive dans
  `app/layout.js`, `app/sitemap.js` et `app/robots.js` une fois le domaine final connu
- **Photo de profil** : ajoute une image dans `public/` et intègre-la dans `components/Hero.js`
  avec le composant `next/image` pour une optimisation automatique
- **Couleurs / police** : tout est centralisé dans les variables CSS en haut de `app/globals.css`

---

## Pourquoi ce choix technique sert ton personal branding

- **Crédibilité technique** : un portfolio en React/Next.js démontre une aisance avec les outils
  numériques modernes — pertinent pour un profil orienté données et innovation
- **Référencement** : contrairement à un site Google Sites ou une SPA React classique, le rendu
  statique de Next.js garantit que Google et les recruteurs voient immédiatement tout le contenu
- **Évolutivité** : la séparation données / présentation (`data/profile.js` vs composants) permet
  de mettre à jour ton profil en quelques minutes, sans toucher au design
