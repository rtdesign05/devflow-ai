# Guide de Contribution – DevFlow AI

Ce document explique **comment contribuer au projet** de manière organisée, sécurisée et professionnelle.  
Il s'adresse à toute l'équipe (moi inclus) pour éviter les erreurs passées (push directs sur main, historique cassé, conflits massifs).

**Date de mise à jour :** 28 février 2026  
**Règle d'or :** On ne touche **jamais** directement la branche `main`.

## Règles principales

1. **Toujours travailler sur une branche dédiée**
2. **Commit clair et atomique** (petits changements + messages explicites)
3. **Créer une Pull Request (PR) pour chaque fonctionnalité / correction**
4. **Ne jamais faire de `git push --force` sur `main`**
5. **La branche `main` est protégée** : seul un merge via Pull Request est possible

## Fréquence et rythme de travail recommandés

| Action                                  | Fréquence recommandée                                              | Objectif                         |
|--------------------------------------  |--------------------------------------------------------------------|----------------------------------|
| Créer une nouvelle branche              | 1 à 3 fois par semaine                                             | Isoler chaque tâche              |
| Pousser sur sa branche (`git push`)     | 1 à 4 fois par jour                                                | Sauvegarde quotidienne + visibilité équipe |
| Créer une Pull Request                  | À chaque fois qu'une tâche est terminée (idéalement 2–4 par semaine) | Review + intégration             |
| Merger une PR dans `main`               | 2 à 5 fois par semaine                                             | Avancer le projet stable         |
| Mettre à jour son local (`git pull`)    | Tous les matins ou avant de commencer                              | Rester synchronisé               |

→ **Objectif global :** 3 à 8 push par semaine par personne (sur des branches), 2–4 PR mergées par semaine.

## Étapes détaillées pour contribuer

### 1. Mettre à jour son clone local (tous les jours ou avant de commencer)

```bash
git checkout main
git pull origin main
2. Créer une nouvelle branche pour la tâche
Nomme-la de façon claire et descriptive :
Bash# Exemples de noms :
git checkout -b feature/add-agent1-parser
git checkout -b feature/update-roadmap-phase2
git checkout -b bugfix/fix-navbar-responsive
git checkout -b refactor/components-shadcn
3. Travailler sur la branche

Modifier le code
Tester localement :

Bashpnpm install    # si nouvelles dépendances
pnpm dev

Commiter souvent et proprement :

Bashgit add .
git commit -m "feat(parser): add figma api client initialization"
# ou
git commit -m "fix: correct tailwind classes on hero section"
4. Pousser régulièrement sur ta branche (sauvegarde + partage)
Bashgit push origin feature/add-agent1-parser
# La première fois : la branche est créée sur GitHub
Tu peux pousser plusieurs fois par jour sans problème.
5. Quand la tâche est terminée → Créer une Pull Request

Va sur GitHub → https://github.com/rtdesign05/devflow-ai
Clique sur Pull requests → New pull request
Configure :
base: main  ←  compare: feature/ta-branche

Remplis :
Titre clair : feat: implémentation Agent 1 - Parser Figma API
Description :
Ce qui a été fait
Pourquoi
Comment tester
Screenshots si interface
Issues liées (#12, #15…)


Crée la PR

6. Review et merge de la Pull Request

Review : au moins une personne regarde le code (onglet Files changed)
Commentaires inline possibles
Demande de modifications si besoin → le créateur corrige sur sa branche

Merge :
Une fois approuvé → clique Merge pull request → Confirm merge
Option : coche Delete branch après merge (recommandé)


7. Mettre à jour son local après merge (pour tout le monde)
Après qu’une PR a été mergée :
Bashgit checkout main
git pull origin main

# Supprimer la branche locale (facultatif mais propre)
git branch -d feature/add-agent1-parser
Et on repart sur une nouvelle branche (retour à l’étape 2).
Résumé du flux Git classique
textTon local                                 GitHub
─────────────                             ───────
git pull main  ←────────────────────────  main
   │
git checkout -b feature/xxx
   │
(travail + commits)
   │
git push origin feature/xxx  ──────────→  feature/xxx (nouvelle branche)
   │
Créer Pull Request sur GitHub
   │
Review + corrections
   │
Merge PR  ─────────────────────────────→  main (mise à jour)
   │
git checkout main
git pull origin main  ←──────────────────  main (synchronisé)
Bonus : Commandes utiles rapides
Bash# Voir toutes mes branches locales
git branch

# Voir l'état actuel
git status

# Voir les derniers commits
git log --oneline -n 5

# Annuler le dernier commit (mais garder les modifications)
git reset --soft HEAD~1

# Voir les différences non commitées
git diff
En suivant ce guide, on garde un historique propre, on évite les conflits, et on avance efficacement vers la soutenance RNCP et le lancement SaaS.
Bonne contribution à tous ! 🚀
Raoult Tankou – Février 2026
