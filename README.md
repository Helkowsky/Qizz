# QCMTrainer — entraînement QCM local, multi-cours

Outil web statique (aucun serveur, aucun appel API à l'exécution). Ouvre `index.html`
dans un navigateur et entraîne-toi. Les statistiques sont stockées en `localStorage`.

## Utilisation
Double-clic sur **`index.html`**. Choisis un **cours** (menu déroulant), coche les **modules**,
puis **Démarrer**. Réponds (souris ou clavier `1-4`/`A-D`, `Entrée`), valide, lis la correction
(bonne réponse en vert, ton choix en rouge, **une explication par option avec l'article**),
puis Suivant. Score en fin de série.

## Structure
```
qcm-trainer/
  index.html · app.js · style.css       ← l'appli (générique, aucune logique propre à un cours)
  banks/
    _registry.js                        ← liste des cours (une ligne par cours)
    droit/
      manifest.json                     ← métadonnées du cours (modules, mémentos)
      m1-formes.json … m6-suretes.json  ← banques canoniques (une par module)
      _bundle.js                        ← toutes les banques du cours en un fichier (chargé par l'app)
  build/build_bundle.py                 ← (ré)génère _bundle.js + valide le format
  coverage/                             ← analyse Phase 3 (points testables, lacunes)
```

## Format d'une question (JSON)
```json
{ "id":"M1-001", "champ":"1.4 Sàrl — délimitation avec la SA", "memento":"M1 §5",
  "question":"…", "options":["…","…","…","…"], "correct":1,
  "explications":["…A (art. …)","…B (art. …)","…C","…D"],
  "piege":"D1", "difficulte":3, "source":"generated" }
```
Règles strictes : **4 (exceptionnellement 5) options**, **une explication par option** (avec article
de loi ou référence mémento). `correct` = indice 0-3 **ou liste d'indices** (question à réponses
multiples, gérée par l'app). `piege` = code D1..D10 ou courte étiquette nommant le piège,
`difficulte` 1-5, `source` `generated`/`exam-sample`.

## Ajouter un NOUVEAU cours (procédure)
1. **Déposer les samples** de QCM d'examen du cours (fichiers texte / PDF).
2. **Calibrage** (session avec le générateur) : catalogue des patterns de distracteurs + niveau.
3. **Couverture** : inventaire des points testables par champ + volumes (voir `coverage/`).
4. **Génération** : produire `banks/<cours>/m*.json` (une banque par module) au format ci-dessus.
5. **Assembler** : `python build/build_bundle.py <cours>` → crée `banks/<cours>/_bundle.js` (avec
   validation stricte du format).
6. **Enregistrer** le cours : ajouter une ligne dans `banks/_registry.js` :
   `{ id:"<cours>", titre:"…", bundle:"banks/<cours>/_bundle.js" }`.
   Rien d'autre à toucher (l'appli est 100 % pilotée par les données).

## Régénérer le bundle d'un cours
`python build/build_bundle.py droit` — relit toutes les banques `banks/droit/m*.json`, valide
(4 options / 4 explications / correct 0-3 / IDs uniques) et réécrit `_bundle.js`.

## État
- Cours **droit** : 6 modules, **1 417 questions** (dont les QCM d'examen en `exam-sample`).
- Fonctionnel : sélection cours/modules, quiz, correction détaillée, score.
- À venir (composant « tool », §5 du cahier des charges) : tableau de bord de statistiques
  (champs faibles), **examen blanc** (40 Q pondérées), **mode révision des erreurs** (répétition
  espacée), export/import des stats en JSON.
