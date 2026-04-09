# CLAUDE.md — Site Bilan de compétences & Évolution professionnelle
## Marie-Laure Ebrard

## Identité du projet

Ce dépôt contient le site vitrine de Marie-Laure Ebrard, consultante en évolution professionnelle (bilan de compétences via VAST RH, certification Qualiopi). Le site sera enrichi à terme d'un volet orientation scolaire.

**Domaine :** mlebrard-evolution.fr
**Hébergement :** OVH Pro mutualisé, accès SSH, déploiement via Git (webhook GitHub → OVH)
**Dépôt GitHub :** https://github.com/mlebrard/site-evolution.git

## Architecture du site

```
site-evolution/
├── index.html              ← Page d'accueil
├── bilan.html              ← Page bilan de compétences (détail, CPF, déroulé)
├── apropos.html             ← Parcours de Marie-Laure, double compétence
├── contact.html            ← Contact + intégration Cal.com (lien direct decouverte-bilan)
├── mentions-legales.html   ← Mentions légales (OBLIGATOIRE)
├── blog/
│   ├── index.html          ← Liste des articles
│   ├── articles.json       ← Index des articles
│   └── [slug].html         ← Articles individuels
├── assets/
│   ├── css/style.css       ← Styles globaux
│   ├── js/main.js          ← Menu mobile, scroll, interactions
│   ├── images/
│   │   ├── ml-portrait.jpg ← Photo portrait Marie-Laure (même que site naturo)
│   │   ├── cabinet/        ← Photos du bureau
│   │   └── icons/          ← Icônes SVG illustratives
│   └── fonts/              ← Si fonts auto-hébergées
├── docs/                   ← Documents de contexte (NON VERSIONNÉ — dans .gitignore)
├── CLAUDE.md               ← Ce fichier
├── .gitignore
└── deploy.sh               ← Script de déploiement (si pas webhook)
```

### Pages prévues pour le futur (pas maintenant)
- `orientation.html` — Orientation scolaire et accompagnement des jeunes (Parcoursup, réorientation)
- L'architecture du menu et de la navigation DOIT prévoir l'ajout futur de cette page sans refonte

## Charte graphique — Identité « Évolution professionnelle »

Le site naturo (mlebrard-naturopathe.fr) utilise une palette douce et naturelle (verts sauge, beige chaud). Le site évolution partage une **harmonie** avec le site naturo (on reconnaît que c'est la même personne) mais se distingue par un ton plus **professionnel, dynamique et structuré** — c'est un site de conseil RH, pas un site de bien-être.

### Palette de couleurs

**Couleurs principales :**
- Bleu profond principal : #2B4C7E (confiance, professionnalisme, sérieux)
- Bleu clair accent : #5B8DB8 (dynamisme, ouverture)
- Blanc cassé fond : #FAFBFD (clarté, espace)
- Gris chaud texte : #3A3A3A (lisibilité sans la dureté du noir pur)

**Couleurs d'accent (à utiliser avec parcimonie) :**
- Vert sauge hérité du site naturo : #7A9E7E (lien visuel entre les deux sites — utilisé pour les liens croisés ou la section "approche globale")
- Orange chaud CTA : #D4845A (boutons d'appel à l'action — chaleureux mais professionnel)

**Couleurs fonctionnelles :**
- Fond sections alternées : #F0F4F8 (gris bleuté très léger)
- Bordures et séparateurs : #E2E8F0
- Texte secondaire : #6B7B8D

### Typographies (Google Fonts)
- Titres : **DM Serif Display** (professionnel, autoritaire mais humain, distinct du Playfair Display du site naturo)
- Corps : **Inter** (moderne, très lisible, professionnel — utilisé par les sites corporate et RH)
- Accent/étiquettes : **DM Sans** (compagnon naturel de DM Serif Display)

### Ton visuel
- **Professionnel et épuré** : pas de fioritures, pas de fleurs, pas de photos de nature
- **Structuré** : sections bien délimitées, hiérarchie visuelle forte
- **Dynamique** : quelques animations subtiles au scroll (apparition des sections), icônes SVG illustratives
- **Humain** : photo de Marie-Laure, témoignages, le bureau comme lieu d'accueil chaleureux
- **Pas corporate froid** : on garde la chaleur de Marie-Laure, le bleu n'est pas un bleu « banque » mais un bleu profond et rassurant

### Harmonie avec le site naturo
- Le footer des deux sites contient un lien croisé discret vers l'autre site
- La photo portrait de Marie-Laure est la même (cohérence de la personne)
- Le vert sauge #7A9E7E apparaît ponctuellement (section "approche globale" ou encart naturopathie)
- La structure de navigation est similaire (même logique, même emplacement du menu)

## Charte éditoriale — Ton du site

### Différences avec le site naturo

| Aspect | Site naturo | Site évolution |
|--------|------------|---------------|
| Ton | Chaleureux, doux, maternel | Professionnel, dynamique, rassurant |
| Posture | « Je vous accompagne en douceur » | « Je vous aide à construire votre projet » |
| Vocabulaire | Bien-être, équilibre, naturel | Compétences, projet, évolution, avenir |
| Style | Descriptif, contemplatif | Direct, structuré, orienté action |
| CTA | « N'hésitez pas à me contacter » | « Réservez votre appel découverte gratuit » |

### Ce qui reste identique
- Bienveillance (jamais de pression, jamais vendeur)
- Professionnalisme (certifications, expérience, cadre Qualiopi)
- Honnêteté (pas de promesses de résultat, pas de « votre vie va changer »)
- Accessibilité (langage clair, pas de jargon RH non expliqué)

### Formulations type
- « Un bilan de compétences, c'est un temps pour vous — pour faire le point, identifier vos forces, et construire un projet qui vous ressemble. »
- « Forte de 17 ans d'expérience en ressources humaines, je vous accompagne avec méthode et bienveillance. »
- « Finançable à 100% par votre CPF, votre bilan se déroule dans mon cabinet à Cestas, dans un cadre confidentiel et chaleureux. »
- « Chaque parcours est unique. Le vôtre aussi. »

### Formulations INTERDITES
- « Changez de vie ! », « Osez le changement ! » (trop coach de vie)
- « Résultats garantis », « Reconversion réussie à 100% »
- « Investissez en vous » (trop marketing)
- « Je vais vous transformer » (le client est acteur, pas Marie-Laure)
- Tout jargon RH non expliqué (GPEC, IRP, OPCO sans définition)

## Contenu des pages

### 1. Accueil (index.html)

**Hero :**
- Titre : « Votre avenir professionnel, construit avec vous. »
- Sous-titre : « Marie-Laure Ebrard — Consultante en évolution professionnelle | Cestas (33) »
- CTA principal : « Réservez un appel découverte gratuit » → cal.eu/mlebrard/decouverte-bilan
- Photo de Marie-Laure ou du bureau

**Section « Le bilan de compétences » (aperçu) :**
- 3-4 blocs visuels avec icônes :
  - « Faire le point » — Analysez vos compétences, motivations et aspirations
  - « Construire votre projet » — Définissez un plan d'action concret et réaliste
  - « Financement CPF » — Votre bilan peut être pris en charge à 100%
  - « Cadre confidentiel » — Un accompagnement personnalisé, dans un espace dédié
- Lien vers la page bilan.html

**Section « Mon approche » :**
- Le différenciant de Marie-Laure : 17 ans de RH opérationnelle + naturopathe
- « J'accompagne la personne dans sa globalité — projet professionnel, mais aussi gestion du stress, confiance en soi, équilibre de vie. »
- Lien discret vers le site naturo (« En savoir plus sur mon approche naturopathique → mlebrard-naturopathe.fr »)

**Section « Témoignages » :**
- 2-3 témoignages anonymisés (à rédiger avec Marie-Laure quand elle aura des retours)
- En attendant : section masquée ou placeholder « Les témoignages arrivent bientôt »

**Section « VAST RH & Qualiopi » :**
- Logo VAST RH (si autorisation)
- Mention certification Qualiopi
- « Je suis consultante partenaire du cabinet VAST RH, certifié Qualiopi pour le bilan de compétences. »

**Footer :**
- Coordonnées complètes
- Lien croisé : « Découvrez aussi mon activité de naturopathe → mlebrard-naturopathe.fr »
- Mentions légales

### 2. Bilan de compétences (bilan.html)

**Section « Qu'est-ce qu'un bilan de compétences ? » :**
- Définition claire et accessible (pas de copier-coller légal)
- Pour qui : salariés, indépendants, demandeurs d'emploi, fonctionnaires
- Pourquoi : reconversion, évolution, perte de sens, retour à l'emploi, questionnement de mi-carrière

**Section « Comment ça se passe ? » :**
- Les 3 phases (préliminaire, investigation, conclusion) expliquées simplement
- Durée : jusqu'à 24h d'accompagnement, réparties sur plusieurs semaines
- Format : entretiens en présentiel dans le cabinet de Cestas (contrainte Qualiopi/VAST RH)
- Outils : tests, exercices, échanges, analyse du parcours (méthode VAST RH)
- Livrable : document de synthèse confidentiel

**Section « Financement » :**
- CPF : finançable à 100% via le Compte Personnel de Formation
- Plan de développement des compétences (employeur)
- Fonds propres
- Lien vers moncompteformation.gouv.fr

**Section « Pourquoi moi ? » :**
- 17 ans de RH opérationnelle (MEDIAPOST/La Poste) — connaissance du monde de l'entreprise de l'intérieur
- Certification bilan de compétences (APC Formation, Ludispirit)
- Partenariat VAST RH (réseau national, Qualiopi)
- Double compétence naturopathie : accompagnement global de la personne (gestion du stress, sommeil, confiance en soi)
- « Je ne suis pas une théoricienne de la reconversion — j'ai moi-même vécu un changement de carrière profond. »

**CTA :** « Prenez rendez-vous pour un appel découverte gratuit de 15 minutes » → cal.eu/mlebrard/decouverte-bilan

### 3. À propos (apropos.html)

**Le parcours de Marie-Laure :**
- Récit authentique de son parcours : de la RH à la naturopathie, puis au bilan de compétences
- Ce qui la motive : accompagner les personnes dans les moments de transition
- Sa double compétence comme atout unique
- Ses certifications et formations

**La synergie naturo + RH :**
- « Les femmes qui viennent me voir pour un bilan de compétences traversent souvent aussi une période de transition personnelle — périménopause, questionnement de mi-vie, besoin de redonner du sens. Mon parcours de naturopathe me permet de comprendre ces dimensions et d'en tenir compte dans l'accompagnement. »
- Lien vers le site naturo

### 4. Contact (contact.html)

- Intégration Cal.com : lien direct vers `cal.eu/mlebrard/decouverte-bilan` (pas la page profil globale)
- Coordonnées : adresse du cabinet, téléphone, email mlebrard@sbe33.fr
- Google Maps (itinéraire)
- Mention : « Le bilan de compétences se déroule en présentiel dans mon cabinet à Cestas. »
- Horaires

### 5. Mentions légales (mentions-legales.html)

- Identité : Marie-Laure Ebrard, EI, SIRET [à compléter]
- Hébergeur : OVH
- Partenariat : VAST RH (certification Qualiopi)
- Responsable de publication : Marie-Laure Ebrard
- RGPD : pas de collecte de données personnelles (sauf formulaire de contact)

### 6. Blog (blog/)

- Même mécanique que le site naturo (articles HTML + articles.json)
- Thèmes : reconversion, bilan de compétences, marché de l'emploi, conseils carrière
- Fréquence : 1-2 articles/mois (produits via Projet Claude.ai "Communication")

## Illustrations et visuels

Marie-Laure n'a pas de photos professionnelles spécifiques pour le bilan de compétences (hormis la photo du bureau). Le site utilisera :

**Photo portrait :** la même que sur le site naturo (cohérence de la personne). Si possible, une variante plus « corporate » (vêtements plus formels) pourrait être prise à terme.

**Photo du bureau :** fournie par Fabien, à placer dans assets/images/cabinet/

**Icônes SVG :** utiliser des icônes SVG simples et élégantes pour illustrer les sections (faire le point, construire, financer, etc.). Sources gratuites :
- Lucide Icons (https://lucide.dev) — style épuré et professionnel
- Heroicons (https://heroicons.com) — style similaire
- Phosphor Icons (https://phosphoricons.com) — style doux et lisible

**Images d'illustration :** pour les pages et le blog, chercher des photos libres de droits sur :
- Unsplash (https://unsplash.com) — chercher "career", "professional woman", "coaching", "office meeting"
- Pexels (https://pexels.com) — mêmes recherches
- IMPORTANT : choisir des photos naturelles, pas trop « stock photo corporate ». Des femmes réelles dans des contextes professionnels réels, pas des mannequins en costume.
- Optimiser les images (compression, taille max 1200px de large, format WebP si possible)

## Liens croisés entre les deux sites

**Sur le site naturo (mlebrard-naturopathe.fr) :**
- Footer : « Marie-Laure est aussi consultante en bilan de compétences → mlebrard-evolution.fr »
- Page à propos (si elle existe) : mention du bilan de compétences

**Sur le site évolution (mlebrard-evolution.fr) :**
- Footer : « Découvrez aussi mon activité de naturopathe → mlebrard-naturopathe.fr »
- Section "Mon approche" sur l'accueil : lien vers le site naturo pour l'aspect "approche globale"
- Page à propos : récit du parcours naturo avec lien

**Ton des liens croisés :** naturel et discret, pas promotionnel. Ce n'est pas de la pub mais une information : « Marie-Laure a plusieurs compétences, voici comment elles se complètent. »

## Cal.com — Intégration

Utiliser uniquement le lien direct vers l'événement bilan :
- `cal.eu/mlebrard/decouverte-bilan` (appel découverte 15 min, gratuit, visio)

NE PAS afficher la page profil globale (cal.eu/mlebrard) qui montrerait aussi les consultations naturo — ce n'est pas pertinent sur ce site.

## Préparation pour l'orientation scolaire (futur)

Le site est conçu pour accueillir une page `orientation.html` sans refonte. Concrètement :
- Le menu de navigation prévoit un emplacement pour un lien supplémentaire
- La page d'accueil peut accueillir une section "Orientation scolaire" supplémentaire
- Le blog peut traiter de sujets liés à l'orientation (Parcoursup, filières, etc.)
- NE PAS mentionner l'orientation sur le site tant que Marie-Laure ne l'a pas validée et ne s'y est pas formée

## Déploiement

Même pipeline que le site naturo :
1. Claude Code modifie les fichiers localement
2. `git add . && git commit -m "description" && git push origin main`
3. Webhook GitHub → OVH déploie automatiquement dans le dossier site-evolution/

## Documents de contexte (dossier docs/ — non versionné)

Avant de construire ou modifier le site, lire ces fichiers dans l'ordre :

1. `docs/brief_site_evolution.md` — Cadrage du site (ce fichier CLAUDE.md contient l'essentiel, le brief apporte les détails complémentaires)
2. `docs/analyse_specialisation_naturo.md` — Contexte : pourquoi la périménopause, la synergie avec le bilan
3. `docs/prompt_projet_communication.md` — Ton éditorial global de Marie-Laure (à adapter pour le contexte RH/bilan)
4. `docs/plan_ecosysteme_mle_FINAL.md` — Plan global du projet (contexte stratégique)

## Workflow Marie-Laure

Comme pour le site naturo, Marie-Laure utilise Claude Code en langage naturel :
- « Ajoute un article de blog sur les 5 signes qu'il est temps de faire un bilan de compétences »
- « Modifie la section Financement pour ajouter que l'OPCO peut aussi financer »
- « Déploie les modifications »
