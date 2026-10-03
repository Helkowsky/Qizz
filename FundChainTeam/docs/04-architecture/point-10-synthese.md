# Point 10 — Synthèse : base centrale ou blockchain pour le registre des parts ?

Synthèse de l'orchestrateur à partir de deux notes :
- volet juridique : `docs/03-reglementaire/point-10-registre-central-vs-dlt-juridique.md`
- volet technique : `docs/04-architecture/point-10-registre-central-vs-dlt-technique.md`

Sources lues via les extraits des moteurs de recherche uniquement (proxy bloquant Fedlex et la plupart des sites). Textes à relire avant usage externe : voir les deux notes.

## Verdict

**Pour des parts émises en droits-valeurs inscrits (art. 973d CO), une base centrale tenue par la plateforme ne suffit pas.** Le droit n'exige pas une blockchain au sens strict, mais trois propriétés :
1. aucune écriture sans la signature du créancier, sauf exceptions listées ;
2. aucun acteur, débiteur ou opérateur, ne peut modifier le registre seul ;
3. le créancier vérifie lui-même, sans dépendre de l'opérateur.

**Minimum retenu : DLT à permission sur Canton, trois opérateurs de nœud indépendants.** Moteur d'ordres, VNI, rétrocessions et reporting restent en base SQL (hybride du rapport, §2.4).

| Option | Juridique (art. 973d) | Technique | Décision |
|---|---|---|---|
| (a) Base centrale classique | Ne qualifie pas | Échoue aux ch. 1 et 4 | Éliminée |
| (b) Base centrale vérifiable (clés, journal signé, ancrage) | Incertain, plutôt non | Détecte la fraude sans l'empêcher ; défendable seulement avec un cosignataire, soit une DLT à 2 nœuds | Écartée |
| (c) DLT à permission multi-nœuds | Qualifie probablement | Canton : chaque partie ne voit que sa part | **Retenue** |
| (d) Blockchain publique + token (CMTAT) | Qualifie | Positions des banques visibles : secret bancaire | Rejetée |

## Architecture minimale du pilote [HYPOTHÈSE à valider]

| Rôle | Qui | Ce qu'il peut faire |
|---|---|---|
| Synchroniseur (séquenceur) | Plateforme | Ordonne des messages chiffrés ; ne crée ni ne modifie aucune écriture |
| Nœud émetteur | Banque dépositaire | Confirme émissions, transferts, rachats |
| Nœud « détenteurs » | Tiers neutre mandaté par les banques | Héberge les comptes ; clés chez chaque banque (HSM) ; lecture de tout l'historique |
| Exceptions | Direction + dépositaire | Rachat forcé, gel, annulation par jugement (973h) : liste fermée, double signature |
| Cash | SIC, hors chaîne | Paiement instruit une fois l'écriture irrévocable |

Coût estimé [HYPOTHÈSE] : environ 2 M CHF la première année pour un pilote à trois banques. Pour une banque sans nœud : 20 à 60 kCHF puis 10 à 30 kCHF par an.

## Conséquences pour le projet

- **Le choix du point 9 (parts en droits-valeurs inscrits) impose la blockchain.** Ce n'est plus une option technique, c'est une condition de validité du registre.
- **La promesse de coût se complique** : trois opérateurs de nœud et une gouvernance à trois coûtent plus qu'une base centrale. Le challenger devra le chiffrer (point 17).
- **Argument de pitch renforcé** : un registre juridiquement opposable, partagé, que ni la plateforme ni la direction de fonds ne peuvent modifier seules.

## Questions ouvertes

| # | Question | Pour |
|---|---|---|
| 1 | Un nœud « détenteurs » mutualisé chez un tiers neutre suffit-il, ou faut-il un nœud par banque (+60 à +170 kCHF/an par banque) ? | Avis de droit |
| 2 | Qui opère ce nœud (tiers neutre, banque, infrastructure suisse) ? | Point 7 (partenaires) |
| 3 | Combien de nœuds au minimum, et quelle indépendance entre direction de fonds et banque dépositaire ? | Avis de droit |
| 4 | Détenteur inscrit = banque ou investisseur final ? | Point 12 |
| 5 | Aucun précédent de registre de droits-valeurs inscrits sur Canton ; prix de licence non public | Point 14 |
