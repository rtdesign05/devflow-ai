export default function Roadmap() {
  const phases = [
    {
      title: "Phase 1 : Fondations & Infrastructure",
      period: "Semaines 1-4 (Fév - Mars 2025)",
      status: "En cours 🚀",
      objectives: [
        "Setup environnement Next.js 15 + TypeScript + Tailwind",
        "Architecture multi-pages (Home, About, Contact, Team, Roadmap)",
        "Système de navigation responsive avec Navbar",
        "Authentification NextAuth.js (OAuth + Email)",
        "Base de données PostgreSQL + Prisma ORM",
        "Dashboard utilisateur avec gestion de projets"
      ]
    },
    {
      title: "Phase 2 : Agent 1 - Parser Figma",
      period: "Semaines 5-6 (Mars 2025)",
      status: "À venir 📅",
      objectives: [
        "Intégration Figma REST API avec authentification",
        "Extraction automatique des frames et composants",
        "Analyse de la hiérarchie des layers",
        "Capture de screenshots haute résolution",
        "Export automatique des assets (images, icons, fonts)",
        "Génération JSON structuré du design"
      ]
    },
    {
      title: "Phase 3 : Agent 2 - Analyzer Design System",
      period: "Semaines 7-8 (Avril 2025)",
      status: "À venir 📋",
      objectives: [
        "Détection automatique des design tokens (couleurs, spacing)",
        "Identification des composants réutilisables",
        "Analyse responsive breakpoints (mobile, tablet, desktop)",
        "Calcul précis des dimensions et alignements",
        "Détection des patterns layout (grid, flexbox)",
        "Construction du design system enrichi"
      ]
    },
    {
      title: "Phase 4 : Agent 3 - Generator Code Next.js",
      period: "Semaines 9-11 (Avril - Mai 2025)",
      status: "À venir ⚡",
      objectives: [
        "Intégration Claude Sonnet 4 via Vercel AI SDK",
        "Prompt engineering avancé pour génération optimale",
        "Génération composants React avec TypeScript",
        "Application automatique des classes Tailwind CSS",
        "Structure fichiers Next.js (pages, components, layouts)",
        "Export ZIP du projet généré"
      ]
    },
    {
      title: "Phase 5 : Agent 4 - Validator Visuel",
      period: "Semaines 12-13 (Mai 2025)",
      status: "À venir ✅",
      objectives: [
        "Setup Playwright pour tests visuels automatisés",
        "Render du code généré en environnement headless",
        "Capture screenshot du rendu final",
        "Comparaison IA via Claude Vision API",
        "Calcul score de fidélité (objectif 90%+)",
        "Génération rapport avec suggestions corrections"
      ]
    },
    {
      title: "Phase 6 : Features Avancées & Polish",
      period: "Semaines 14-15 (Mai 2025)",
      status: "À venir 🎨",
      objectives: [
        "Système de versioning des générations",
        "Historique complet des projets utilisateur",
        "Preview live en iframe sandbox sécurisée",
        "Mode comparaison (Figma vs Code généré)",
        "Export multi-formats (Next.js, React, HTML/CSS)",
        "Optimisation performances et caching"
      ]
    },
    {
      title: "Phase 7 : Préparation RNCP & Déploiement",
      period: "Semaine 16 (Juin 2025)",
      status: "À venir 🎓",
      objectives: [
        "Rédaction complète du dossier technique RNCP",
        "Documentation utilisateur et développeur",
        "Tests E2E complets sur tous les parcours",
        "Préparation présentation et démo live",
        "Déploiement production sur Vercel",
        "Soutenance RNCP - Objectif : Certification validée !"
      ]
    },
    {
      title: "Phase 8 : Post-RNCP - Commercialisation",
      period: "Juil - Sept 2025",
      status: "Futur 💰",
      objectives: [
        "Système de paiement Stripe (Free/Pro/Team)",
        "API publique REST pour développeurs",
        "Marketplace de templates communautaires",
        "Agent 4 V2 avec auto-corrections itératives",
        "Intégration Telegram Bot complète",
        "Objectif : $2,900 MRR avec 100 clients payants"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4 text-center">
          Roadmap Technique DevFlow AI 🗓️
        </h1>
        <p className="text-xl text-slate-300 text-center mb-4">
          De Figma à Next.js en 90%+ de fidélité visuelle
        </p>
        <p className="text-lg text-slate-400 text-center mb-12">
          16 semaines · 192 heures · 4 Agents IA · Next.js 15 · Claude Sonnet 4
        </p>

        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-blue-400">
                      {index + 1}
                    </span>
                    <h2 className="text-2xl font-bold text-white">
                      {phase.title}
                    </h2>
                  </div>
                  <p className="text-slate-400 ml-12">{phase.period}</p>
                </div>
                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                  {phase.status}
                </span>
              </div>
              
              <div className="space-y-2 ml-12">
                {phase.objectives.map((obj, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <p className="text-slate-200">{obj}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            Stack Technique Complète
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl mb-2">⚛️</p>
              <p className="text-slate-300 font-semibold">Next.js 15</p>
              <p className="text-slate-500 text-sm">Framework</p>
            </div>
            <div>
              <p className="text-3xl mb-2">🎨</p>
              <p className="text-slate-300 font-semibold">Tailwind CSS</p>
              <p className="text-slate-500 text-sm">Styling</p>
            </div>
            <div>
              <p className="text-3xl mb-2">🗄️</p>
              <p className="text-slate-300 font-semibold">PostgreSQL</p>
              <p className="text-slate-500 text-sm">Database</p>
            </div>
            <div>
              <p className="text-3xl mb-2">🤖</p>
              <p className="text-slate-300 font-semibold">Claude 4</p>
              <p className="text-slate-500 text-sm">IA Engine</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 italic text-lg">
            192 heures me séparent du succès RNCP. Chaque session compte.
          </p>
          <p className="text-slate-500 mt-2">— Raoult Tankou</p>
          <p className="text-slate-600 mt-4 text-sm">
            Bachelor CDA 2025 · Soutenance Juin 2025 · Objectif 17/20
          </p>
        </div>
      </div>
    </main>
  );
}