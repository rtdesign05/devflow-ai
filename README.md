# DevFlow AI 🚀

Plateforme SaaS de transformation automatique Figma → Next.js propulsée par IA multi-agents

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-En%20Développement-yellow)](https://github.com/rtdesign05/devflow-ai)

> 🎯 **Objectif :** Atteindre 90%+ de fidélité visuelle entre le design Figma et le code Next.js généré

---

## 📋 Table des Matières

- [À Propos](#à-propos)
- [Démo Live](#démo-live)
- [Fonctionnalités](#fonctionnalités)
- [Architecture](#architecture)
- [Stack Technique](#stack-technique)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Roadmap](#roadmap)
- [Contribuer](#contribuer)
- [Auteur](#auteur)

---

## 🎨 À Propos

**DevFlow AI** est une plateforme SaaS innovante qui automatise la transformation de designs Figma en code Next.js production-ready. Grâce à une architecture de **4 agents IA spécialisés**, DevFlow AI garantit une fidélité visuelle supérieure à 90% avec le design original.

### 🔥 Problème Résolu

Les designers perdent des heures à collaborer avec les développeurs pour reproduire fidèlement leurs maquettes. Les outils existants (Anima, Figma Dev Mode) génèrent du code basique, non-optimisé et peu fidèle au design.

### ✨ Solution DevFlow AI

Une plateforme qui génère du **code Next.js 15 moderne, optimisé et production-ready** avec une fidélité visuelle de 90%+ grâce à l'IA.

---

## 🌐 Démo Live

**🔗 Site en production :** [https://devflow-ai-five.vercel.app/](https://devflow-ai-five.vercel.app/)

### Pages Disponibles

- 🏠 **Accueil** : Présentation du projet
- 📖 **À Propos** : Les 4 agents IA expliqués
- 🗓️ **Roadmap** : Planning détaillé 16 semaines
- 👥 **Équipe** : Présentation de l'équipe
- 📬 **Contact** : Coordonnées et liens
- 🔢 **Compteur** : Démo composant interactif (useState)
- 📝 **Formulaire** : Démo formulaire avec validation

---

## ⚡ Fonctionnalités

### Phase 1 (En Cours)

- ✅ Architecture multi-pages Next.js 15
- ✅ Système de navigation responsive
- ✅ Composants interactifs (Server & Client Components)
- ✅ Design moderne avec Tailwind CSS
- ✅ Déploiement automatique sur Vercel

### Phase 2 (À Venir)

- 🔄 **Agent 1 - Parser** : Extraction données Figma via REST API
- 🔄 **Agent 2 - Analyzer** : Analyse design system et tokens
- 🔄 **Agent 3 - Generator** : Génération code Next.js via Claude Sonnet 4
- 🔄 **Agent 4 - Validator** : Validation visuelle automatisée (Playwright)

### Phase 3 (Post-RNCP)

- 📅 Authentification NextAuth.js
- 📅 Dashboard utilisateur avec gestion projets
- 📅 Base de données PostgreSQL + Prisma
- 📅 Système de paiement Stripe
- 📅 API publique pour développeurs

---

## 🏗️ Architecture

### Pipeline des 4 Agents IA
```text
┌─────────────────────────────────────────────────────────────┐
│  📥 INPUT : URL Figma Design                                │
└──────────────────────┬──────────────────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────────────────┐
│  🔍 AGENT 1 - PARSER                                        │
│  • Figma REST API                                           │
│  • Extraction frames, components, styles                    │
│  • Screenshot haute résolution                              │
│  Output: JSON structuré + Screenshot                        │
└──────────────────────┬──────────────────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────────────────┐
│  🧠 AGENT 2 - ANALYZER                                      │
│  • Détection design tokens                                  │
│  • Identification composants réutilisables                  │
│  • Analyse responsive breakpoints                           │
│  Output: Design System enrichi                              │
└──────────────────────┬──────────────────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────────────────┐
│  ⚡ AGENT 3 - GENERATOR                                     │
│  • Claude Sonnet 4 + Vercel AI SDK                         │
│  • Génération composants React + TypeScript                 │
│  • Application Tailwind CSS                                 │
│  Output: Code Next.js production-ready                      │
└──────────────────────┬──────────────────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────────────────┐
│  ✅ AGENT 4 - VALIDATOR                                     │
│  • Playwright headless browser                              │
│  • Comparaison IA (Claude Vision API)                       │
│  • Score similarité 0-100%                                  │
│  Output: Score fidélité (objectif 90%+)                     │
└──────────────────────┬──────────────────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────────────────┐
│  📤 OUTPUT : Code Next.js + Preview + Download ZIP          │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Stack Technique

### Frontend

- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript 5.x
- **Styling** : Tailwind CSS 3.x
- **UI Components** : shadcn/ui
- **State Management** : Zustand
- **Forms** : React Hook Form + Zod

### Backend

- **API Routes** : Next.js API Routes
- **ORM** : Prisma 5.x
- **Database** : PostgreSQL (Supabase)
- **Auth** : NextAuth.js 5.x
- **Storage** : Supabase Storage

### IA & Automation

- **IA Model** : Claude Sonnet 4 (Anthropic)
- **IA SDK** : Vercel AI SDK 3.x
- **E2E Testing** : Playwright
- **Figma API** : Figma REST API

### DevOps

- **Hosting** : Vercel (Free tier)
- **CI/CD** : GitHub Actions
- **Monitoring** : Sentry (Free tier)
- **Version Control** : Git + GitHub

---

## 🚀 Installation

### Prérequis

- Node.js 20 LTS ou supérieur
- pnpm (recommandé) ou npm
- Git

### Étapes

**1. Cloner le repository**
```bash
git clone https://github.com/rtdesign05/devflow-ai.git
cd devflow-ai
```

**2. Installer les dépendances**
```bash
pnpm install
```

**3. Lancer le serveur de développement**
```bash
pnpm dev
```

**4. Ouvrir dans le navigateur**
```text
http://localhost:3000
```

---

## 💻 Utilisation

### Développement Local
```bash
# Démarrer le serveur de développement
pnpm dev

# Builder pour la production
pnpm build

# Lancer la version production
pnpm start

# Linter le code
pnpm lint
```

### Variables d'Environnement

Créer un fichier `.env.local` à la racine du projet :
```env
# Database (Supabase)
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="votre-secret"

# Anthropic API (Claude)
ANTHROPIC_API_KEY="sk-ant-..."

# Figma API
FIGMA_ACCESS_TOKEN="figd_..."
```

---

## 🗓️ Roadmap

### Phase 1 : Fondations (Semaines 1-4) ✅ En Cours

- [x] Setup Next.js 15 + TypeScript + Tailwind
- [x] Architecture multi-pages
- [x] Navigation responsive
- [ ] Authentification NextAuth.js
- [ ] Base de données PostgreSQL + Prisma

### Phase 2 : Agents IA (Semaines 5-8)

- [ ] Agent 1 - Parser Figma
- [ ] Agent 2 - Analyzer Design System
- [ ] Agent 3 - Generator Code Next.js
- [ ] Agent 4 - Validator Visuel

### Phase 3 : Features Avancées (Semaines 9-12)

- [ ] Dashboard utilisateur
- [ ] Système de versioning
- [ ] Preview live
- [ ] Export multi-formats

### Phase 4 : Finalisation RNCP (Semaines 13-16)

- [ ] Tests E2E complets
- [ ] Documentation technique
- [ ] Préparation soutenance
- [ ] Déploiement production

### Phase 5 : Post-RNCP (Juil-Sept 2025)

- [ ] Système de paiement Stripe
- [ ] API publique REST
- [ ] Marketplace templates
- [ ] Commercialisation SaaS

---

## 📊 Statistiques du Projet

- **Durée totale** : 16 semaines (192 heures)
- **Lignes de code** : ~5,000+ (et en croissance)
- **Commits** : 50+ contributions
- **Pages développées** : 7 pages fonctionnelles
- **Technologies maîtrisées** : 15+ outils et frameworks

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! Voici comment participer :

1. Fork le projet
1. Créer une branche (`git checkout -b feature/AmazingFeature`)
1. Commit les changements (`git commit -m 'Add AmazingFeature'`)
1. Push vers la branche (`git push origin feature/AmazingFeature`)
1. Ouvrir une Pull Request

### Guidelines

- Respecter les conventions de code (ESLint + Prettier)
- Écrire des messages de commit clairs
- Documenter les nouvelles fonctionnalités
- Tester avant de soumettre

---

## 📄 License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🎯 Objectifs du Projet

Ce projet s'inscrit dans le cadre de ma certification **RNCP37873 - Concepteur Développeur d'Applications** avec 3 objectifs principaux :

1. ✅ **Présenter le meilleur dossier RNCP** de la promotion (Juin 2025)
1. ✅ **Obtenir 17/20 de moyenne** au Bachelor CDA
1. ✅ **Lancer DevFlow AI comme SaaS rentable** ($2,900 MRR visé)

---

## 🙏 Remerciements

- **Next.js** et l'équipe Vercel pour le framework exceptionnel
- **Anthropic** pour Claude Sonnet 4
- **Tailwind CSS** pour le système de design
- **Mes professeurs** pour leur accompagnement et conseils
- **La communauté open-source** pour l'inspiration

---

## 📈 Suivi du Projet

- **Début** : 10 Février 2025
- **Soutenance RNCP** : Juin 2025
- **Status actuel** : Phase 1 - Fondations (50% complété)
- **Prochaine milestone** : Agent 1 - Parser Figma (Mars 2025)

---

**Construit avec ❤️ par Raoult Tankou**

*"192 heures me séparent du succès RNCP. Chaque session compte."*

🌐 [Site Live](https://devflow-ai-five.vercel.app/) • 🐛 [Signaler un Bug](https://github.com/rtdesign05/devflow-ai/issues) • 💡 [Proposer une Feature](https://github.com/rtdesign05/devflow-ai/issues)