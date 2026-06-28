# MISEIA — Landing Page Actuariat

Landing page du Master en Ingénierie et Sciences de l'Actuariat (MISEIA), déployée sur AWS EC2 et accessible sur [iatest.evolversfr.com](https://iatest.evolversfr.com).

## Stack technique

| Couche | Technologie |
|---|---|
| Framework | Next.js 16.2.4 — App Router |
| UI | React 19 + Tailwind CSS v4 |
| Langage | TypeScript strict |
| Runtime | Node.js 20 LTS |
| Reverse proxy | Nginx (HTTPS via Let's Encrypt) |
| Déploiement | AWS EC2 + GitHub Actions |

## Structure du projet

```
app/
  layout.tsx        # RootLayout, métadonnées SEO, polices Google (Playfair Display, DM Sans)
  page.tsx          # Page d'accueil (assemblage des sections)
  globals.css       # Styles globaux Tailwind v4
components/
  Navbar.tsx        # Barre de navigation
  Hero.tsx          # Section hero avec stats clés
  About.tsx         # Présentation de la formation
  Program.tsx       # Modules pédagogiques
  Benefits.tsx      # Points forts de la formation
  Testimonials.tsx  # Témoignages d'anciens étudiants
  FAQ.tsx           # Foire aux questions (accordéon natif HTML)
  CallToAction.tsx  # CTA final — candidature / contact
  Footer.tsx        # Pied de page
public/             # Fichiers statiques
```

## Développement local

```bash
npm install
npm run dev     # démarre avec webpack (--webpack)
```

L'application est disponible sur [http://localhost:3000](http://localhost:3000).

> **Note** : le mode dev utilise webpack plutôt que Turbopack. Turbopack détecte incorrectement la racine du workspace à cause d'un `package-lock.json` vide présent dans un répertoire parent, ce qui provoque une boucle d'erreurs et sature le CPU. Le flag `--webpack` est passé directement dans le script `dev` de `package.json`.

### Autres commandes

```bash
npm run build   # Build de production (webpack, pas affecté par le problème ci-dessus)
npm start       # Démarrage en mode production (port 3000)
npm run lint    # Vérification ESLint
```

## Déploiement

### CI/CD — GitHub Actions

Chaque push sur la branche `main` déclenche le pipeline `.github/workflows/deploy.yml` :

1. **build** (runner GitHub Actions) — `npm ci` puis `npm run build`, upload des artefacts (`.next/`, `public/`, `package.json`, `package-lock.json`)
2. **deploy** (runner GitHub Actions → EC2) — download des artefacts, `rsync` vers `/home/ubuntu/nextaws/`, `npm ci --omit=dev`, redémarrage du service systemd

Le build est réalisé sur le runner CI (pas sur l'EC2) pour éviter de solliciter la machine de production et garantir des builds reproductibles.

Secrets GitHub requis (Settings > Secrets) :

| Secret | Description |
|---|---|
| `EC2_HOST` | IP publique de l'instance EC2 |
| `EC2_USER` | Utilisateur SSH (`ubuntu`) |
| `EC2_SSH_KEY` | Clé privée SSH |

### Déploiement manuel sur EC2

```bash
# Première installation
ssh -i ~/.ssh/ec2-laurent-free-key ubuntu@35.180.22.199
git clone https://github.com/ljacques99/nextaws.git /home/ubuntu/nextaws
cd /home/ubuntu/nextaws
npm ci
npm run build
npm start

# Mise à jour manuelle (sans passer par CI)
npm run build                   # en local
rsync -az --delete --exclude=node_modules \
  .next/ public/ package.json package-lock.json \
  ubuntu@35.180.22.199:/home/ubuntu/nextaws/
ssh ubuntu@35.180.22.199 \
  "cd /home/ubuntu/nextaws && npm ci --omit=dev && sudo systemctl restart nextaws"
```

### Service systemd

L'application tourne en tant que service systemd sur EC2 :

```bash
sudo systemctl status nextaws   # état du service
sudo systemctl restart nextaws  # redémarrage
sudo journalctl -u nextaws -f   # logs en temps réel
```

La configuration du service se trouve dans `/etc/systemd/system/nextaws.service`.  
Nginx assure le reverse proxy HTTPS (port 443 → port 3000).

## Architecture de production

```
Internet → Nginx (443/HTTPS) → Next.js (port 3000)
                ↑
          Certbot / Let's Encrypt
```

## Conventions de code

- Server Components par défaut ; `"use client"` uniquement si interactivité requise.
- Pas de `pages/` — App Router uniquement.
- Pas de `any` TypeScript.
- Aucun style inline — classes Tailwind exclusivement.
- Images optimisées via `next/image`, liens internes via `next/link`.
