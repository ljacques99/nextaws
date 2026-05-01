<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Spécifications du projet — Landing Page Formation en Actuariat

## 1. Objectif

Créer une landing page professionnelle et moderne pour une formation en actuariat (MISEIA), déployée sur une instance EC2 AWS avec un pipeline CI/CD via GitHub Actions.

---

## 2. Stack technique

| Couche | Technologie |
|---|---|
| Framework | Next.js 16.2.4 — App Router uniquement (pas de `pages/`) |
| UI | React 19 + Tailwind CSS v4 |
| Langage | TypeScript strict |
| Node | 20.x LTS |
| Gestionnaire de paquets | npm |

> **Règle** : lire `node_modules/next/dist/docs/01-app/` avant d'écrire tout code Next.js. Respecter les avertissements de dépréciation.

---

## 3. Structure des fichiers attendue

```
app/
  layout.tsx          # RootLayout, métadonnées globales, polices
  page.tsx            # Page d'accueil (landing page)
  globals.css         # Styles globaux Tailwind v4
components/
  Hero.tsx            # Section hero avec accroche principale
  About.tsx           # Présentation de la formation
  Program.tsx         # Programme / modules pédagogiques
  Benefits.tsx        # Pourquoi choisir cette formation
  Testimonials.tsx    # Témoignages d'anciens étudiants (optionnel)
  FAQ.tsx             # Foire aux questions
  CallToAction.tsx    # CTA final (inscription / contact)
  Footer.tsx          # Pied de page
public/
  images/             # Visuels de la formation
```

---

## 4. Contenu de la landing page

La page doit comporter les sections suivantes, dans cet ordre :

1. **Hero** — titre accrocheur, sous-titre, bouton CTA principal ("Candidater" ou "En savoir plus")
2. **À propos** — présentation courte de la formation (MISEIA / actuariat, débouchés)
3. **Programme** — liste des modules principaux (mathématiques actuarielles, finance, risque, data science appliquée)
4. **Atouts** — 3 à 4 points forts (formateurs experts, réseau professionnel, certification, alternance)
5. **Témoignages** — 2 ou 3 citations d'étudiants ou diplômés
6. **FAQ** — 4 à 6 questions fréquentes
7. **CTA final** — formulaire de contact ou lien vers candidature
8. **Footer** — liens légaux, contacts, réseaux sociaux

Toutes les sections doivent être responsive (mobile-first via Tailwind).

---

## 5. Qualité du code

- Composants Server Components par défaut ; `"use client"` uniquement si interactivité requise.
- Pas de `any` TypeScript ; activer `strict: true` dans `tsconfig.json`.
- Aucun style inline ; utiliser exclusivement les classes Tailwind.
- Optimiser les images avec `next/image`.
- Liens internes avec `next/link`.
- Métadonnées SEO dans `layout.tsx` via l'API `metadata` de Next.js 16.

---

## 6. Dépôt GitHub

- **Organisation / utilisateur** : `ljacques99`
- **Nom du dépôt** : `nextaws`
- **Branche principale** : `main`
- Pousser le code avec `git push origin main`.
- Le dépôt doit contenir un fichier `.gitignore` adapté (Next.js, node_modules, .env).

---

## 7. CI/CD — GitHub Actions

Créer `.github/workflows/deploy.yml` avec le pipeline suivant :

```yaml
# Déclencheur : push sur main
# Jobs :
#   1. build  — npm ci && npm run build (export statique ou build standard)
#   2. deploy — copie des artefacts sur EC2 via SSH (secrets GitHub)
```

**Secrets GitHub à configurer** (dans Settings > Secrets) :

| Nom du secret | Valeur |
|---|---|
| `EC2_HOST` | `35.180.22.199` |
| `EC2_USER` | `ubuntu` |
| `EC2_SSH_KEY` | Contenu de `/home/ubuntu/.ssh/ec2-laurent-free-key` |

---

## 8. Déploiement sur EC2

**Accès SSH** :
```bash
ssh -i /home/ubuntu/.ssh/ec2-laurent-free-key ubuntu@35.180.22.199
```

**Répertoire d'installation** : `/home/ubuntu/nextaws`

### Procédure d'installation initiale sur EC2

```bash
# 1. Installer Node 20 via nvm ou nodesource
# 2. Cloner le dépôt
git clone https://github.com/ljacques99/nextaws.git /home/ubuntu/nextaws
cd /home/ubuntu/nextaws
npm ci
npm run build

# 3. Démarrer l'application en production
npm start   # écoute sur le port 3000 par défaut
```

---

## 9. Service systemd sur EC2

Créer `/etc/systemd/system/nextaws.service` :

```ini
[Unit]
Description=Next.js — Landing Page Actuariat
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/home/ubuntu/nextaws
ExecStart=/usr/bin/npm start
Restart=on-failure
RestartSec=5
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
```

Commandes de gestion :

```bash
sudo systemctl daemon-reload
sudo systemctl enable nextaws
sudo systemctl start nextaws
sudo systemctl status nextaws
```

---

## 10. Contraintes & interdits

- Ne pas utiliser le dossier `pages/` — App Router uniquement.
- Ne pas committer de fichiers `.env` ou de clés SSH.
- Ne pas utiliser `export default function` anonyme — toujours nommer les composants.
- Ne pas installer de dépendances non listées sans validation explicite.
