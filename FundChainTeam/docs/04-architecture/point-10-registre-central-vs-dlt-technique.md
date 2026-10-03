# Point 10 (volet technique) : quel registre satisfait l'art. 973d al. 2 CO ?

*Agent `architecte-dlt`. Ce document traite uniquement le volet technique du point 10 (rapport, §7.1).*

*Il s'appuie sur :*
- *le point 9 validé ;*
- *le rapport (§2, §3.4, §7.1) ;*
- *la note `blockchain_vs_base_de_donnees.md` ;*
- *le volet juridique du point 10 ([`../03-reglementaire/point-10-registre-central-vs-dlt-juridique.md`](../03-reglementaire/point-10-registre-central-vs-dlt-juridique.md)), dont il intègre le verdict et les conditions J1 à J7.*

*État au 1er octobre 2026.*

> **Méthode et limites.** 34 recherches web. WebFetch est bloqué par le proxy : l'essai sur new.blockchainfederation.ch a échoué, si bien que la circulaire SBF 2021/01 n'a pas été lue. Tous les faits viennent d'extraits de moteur de recherche. Statuts utilisés :
> - **[Extrait]** : sens fiable, lettre à relire.
> - **[Secondaire]** : presse, cabinet ou éditeur.
> - **[Connaissance]** : de mémoire, non vérifié en session.
> - **[H]** : hypothèse. **Tous les montants chiffrés sont des [H].**
>
> Aucun texte légal n'a été relu en entier.

---

## 1. Verdict

Le volet technique et le volet juridique convergent.

1. **(a) Base centrale classique : éliminée.** Elle ne qualifie pas (volet juridique). Techniquement, elle échoue par construction aux ch. 1 et 4 : l'opérateur tient seul la plume, et le créancier ne voit que l'écran de l'opérateur.
2. **(b) Base centrale vérifiable : écartée.** Le juriste la juge incertaine, avec une pente vers le non.
   - Techniquement, elle détecte une fraude de l'opérateur sans l'empêcher.
   - Pour devenir défendable, il lui faut un cosignataire indépendant qui tient une copie. Elle devient alors une DLT à deux nœuds, écrite sur mesure, sans précédent.
   - Même ainsi, elle reste en deçà de J3 (trois opérateurs indépendants). **Ce n'est pas un chemin moins cher vers le même résultat.**
3. **(d) Blockchain publique + CMTAT / ERC-3643 : rejetée pour le pilote.** Elle qualifie, et c'est la pratique suisse dominante. Mais elle rend publics les positions et les flux de chaque banque. La variante chiffrée (CMTAT Confidential, Zama) est trop récente.
4. **(c) DLT à permission sur Canton : retenue, avec trois opérateurs de nœud.**
   - **La plateforme** opère le synchroniseur et un nœud observateur.
   - **La banque dépositaire** opère le nœud émetteur, qui confirme chaque écriture.
   - **Un nœud « détenteurs »** est opéré par un tiers neutre mandaté par les banques distributrices, ou par l'une d'elles. Il héberge les parties des banques, dont les clés restent chez elles. Chaque banque y lit son historique et garde le droit d'avoir son propre nœud.
5. **Reste à faire confirmer par l'avis de droit (condition C2 du point 9)** :
   - un nœud « détenteurs » mutualisé vaut-il « acteur côté créanciers » (J3) et nœud de lecture (J5) ? (D7)
   - la conception des exceptions (D4) ;
   - la granularité, banque ou investisseur (D5) ;
   - le champ de la communication FINMA 01/2026 (D6).

   Voir §7.5.

| Question de la mission | Réponse courte |
|---|---|
| Une base centrale peut-elle satisfaire l'art. 973d ? | Classique (a) : **non**. Vérifiable (b) : **incertain, penche vers non**. Rendue défendable, elle n'est plus une base centrale |
| Niveau minimal de blockchain ? | Une DLT à permission à **trois opérateurs de nœud indépendants**, dont un du côté des créanciers. La plateforme opère le séquenceur, qui ordonne sans créer ni modifier. Les clés sont chez les créanciers, jamais chez la plateforme ni chez la direction de fonds |
| Technologie ? | **Canton**, avec Fabric en plan B. Pas Besu (confidentialité retirée), pas Corda (pivot de R3 vers Solana) |
| Coût ? | Environ **2 M CHF la première année** pour un pilote à trois banques [H], contre environ 0,9 M CHF pour une option (b) qui ne qualifie pas sûrement. Une option (b) rendue défendable coûterait à peu près autant que (c) [H] |

---

## 2. Les quatre exigences traduites en tests techniques

La loi laisse ouverte la structure du registre ([Pestalozzi](https://pestalozzilaw.com/en/insights/news/legal-insights/ledger-based-securities-introduction-dlt-shares-switzerland/) [Secondaire]). Le message du Conseil fédéral cite comme systèmes pouvant convenir :
- des blockchains publiques : Bitcoin, Ethereum, Cardano, Algorand ;
- des DLT à permission : Corda, Hyperledger Fabric ([Reutlaw](https://www.reutlaw.com/en/insights/how-switzerlands-new-law-on-distributed-ledger-technology-act-may-reshape-securitization) [Secondaire]).

**Aucune base centrale n'y figure.** Selon un ouvrage de doctrine :
- l'exigence du pouvoir de disposer « du créancier, mais non du débiteur » sert à **distinguer les registres gérés de manière centrale** ;
- le créancier doit pouvoir transférer sans « une instance centrale de confiance qui gère seule le registre », ce qui suppose un **minimum de décentralisation** ([Elektronische Wertpapiere, OAPEN](https://library.oapen.org/bitstream/handle/20.500.12657/52167/external_content.pdf?sequence=1&isAllowed=y) [Extrait]).

Le volet juridique attribue cette formule au message et en tire trois propriétés :
- (i) aucune écriture sans la signature du créancier, sauf exceptions encadrées ;
- (ii) aucun acteur ne modifie seul le registre ;
- (iii) le créancier vérifie sans l'opérateur.

| Exigence | Propriété technique à démontrer | Test de rupture : si la réponse est « oui », l'option échoue | Condition juridique |
|---|---|---|---|
| **Ch. 1 : disposition par le créancier** | Toute écriture qui débite un détenteur porte **sa** signature, vérifiable par tous. Ni la direction de fonds (débiteur) ni la plateforme (opérateur) ne détiennent cette clé. Les exceptions sont fermées, déclenchées par un événement objectif, à double signature indépendante | La plateforme ou la direction peut-elle débiter un compte sans la clé du détenteur ? | J1, J2, J4 |
| **Ch. 2 : intégrité** | Journal en ajout seul. **Aucun opérateur ne valide seul un changement d'état.** Le séquenceur ordonne sans pouvoir créer ni modifier | Un acteur seul, plateforme comprise, peut-il valider ou réécrire une écriture ? | J3 |
| **Ch. 3 : contenu consigné** | Contrat de fonds, convention d'inscription, description du registre et règle d'irrévocabilité liés par empreinte (hash) et versionnés | Peut-on douter de la version de la convention qui s'appliquait à une écriture ? | J6 |
| **Ch. 4 : vérification sans tiers** | Le détenteur lit **tout son historique** sur un nœud qui n'est pas celui de la plateforme, ou sur le sien, et le vérifie localement. Ce droit figure dans la convention | La banque dépend-elle de la plateforme pour lire, ou pour détecter une vue falsifiée ? | J5 |

---

## 3. Les quatre options, telles qu'on les construirait

### 3.1 (a) Base centrale classique
- Une base SQL opérée par la plateforme. Les banques envoient des ordres (API ou ISO 20022), et la plateforme passe les écritures.
- C'est le modèle de Vestima ou de Calastone : un registre de référence, **pas un registre de droits-valeurs inscrits**.

### 3.2 (b) Base centrale vérifiable, version « renforcée »
Pour avoir une chance au ch. 4, il ne suffit pas d'une base chaînée par hash. Il faut ces six composants [H de conception] :

| Composant | Rôle | Brique disponible |
|---|---|---|
| Clés des détenteurs (HSM de la banque ou de son prestataire de garde) | Chaque transfert est signé par le détenteur ; la plateforme rejette tout débit non signé | HSM existants, par ex. Taurus-PROTECT, utilisé par des banques suisses ([Taurus](https://www.taurushq.com/protect) [Secondaire]) |
| Journal Merkle en ajout seul | Preuves d'**inclusion** (mon écriture y est) et de **cohérence** (l'historique n'a pas été réécrit) | Trillian / journaux de transparence ([transparency.dev](https://transparency.dev/verifiable-data-structures/)) ; immudb, avec vérification côté client ([immudb](https://immudb.io/blog/proof-of-untampered-records-in-immudb)) |
| Carte vérifiable des soldes (arbre de Merkle creux) | Un débit forgé change le solde du détenteur et se détecte | Structure standard ([transparency.dev](https://transparency.dev/verifiable-data-structures/)) ; implémentation [H] |
| Témoin indépendant | Le dépositaire contresigne chaque tête d'arbre. Cela empêche la « vue scindée », où l'opérateur montre un historique différent à chacun | Contre-mesure documentée : gossip et témoins ([transparency.dev](https://transparency.dev/verifiable-data-structures/)) |
| Ancrage périodique | L'empreinte racine est publiée sur Ethereum (quelques centimes) ou dans un stockage immuable tiers | [Azure Confidential Ledger](https://learn.microsoft.com/en-us/azure/confidential-ledger/overview) ; coûts au §4.4 |
| Reçus signés conservés par la banque | La banque garde ses écritures, ses preuves et les têtes d'arbre | [H] |

**Ce qui ne suffit pas.**
- **Tables ledger SQL Server.** La vérification recalcule les hashes sur l'état de la base et les compare à des empreintes externes ([Microsoft](https://learn.microsoft.com/en-us/sql/relational-databases/security/ledger/ledger-database-verification?view=sql-server-ver17)). Il faut donc accéder à toute la base. C'est un outil d'auditeur, incompatible avec la confidentialité entre banques [H par inférence].
- **QLDB.** Elle n'existe plus : arrêtée le 31 juillet 2025 ([InfoQ](https://www.infoq.com/news/2024/07/aws-kill-qldb/)).

**Verdict technique et juridique.** Même renforcée, (b) reste une option où l'opérateur **gère seul** le registre. Il peut censurer, et une fraude est détectée, pas empêchée. L'accès aux données dépend de lui (volet juridique, §5 : critère 3 non rempli). Pour la rendre défendable, le dépositaire devrait **cosigner chaque changement d'état et tenir une copie**. On obtient alors une DLT à deux nœuds faite maison, toujours en deçà de J3. **Autant prendre une DLT éprouvée.**

### 3.3 (c) DLT à permission multi-nœuds

| Plateforme | Ch. 1 : clé du créancier | Ch. 2 : aucun validateur seul | Confidentialité entre banques | Pérennité | Verdict |
|---|---|---|---|---|---|
| **Canton / Daml** | **Partie externe** : les clés qui autorisent les transactions sont contrôlées par la seule partie, pas par le nœud qui l'héberge ([Digital Asset](https://docs.digitalasset.com/overview/3.3/explanations/canton/external-party.html)) | Les nœuds des parties prenantes valident ; le synchroniseur ordonne seulement et ne voit que des enveloppes chiffrées ([Canton docs](https://docs.canton.network/overview/learn/privacy-model)). Cela répond à la lettre de J3. CantonBFT est disponible pour les synchroniseurs privés ([Canton releases](https://github.com/digital-asset/canton/releases) [Extrait]) | **Par sous-transaction** ([Canton docs](https://docs.canton.network/overview/learn/privacy-model)) | En production chez Broadridge DLR (rapport §2.2). Taurus supporte la garde Canton ([Taurus](https://www.taurushq.com/blog/taurus-becomes-strategic-partner-on-the-canton-network-expanding-institutional-custody-support-for-the-canton-token-standard/)). Dépendance à Digital Asset (distribution entreprise : [DA](https://docs.digitalasset.com/overview/3.3/overview/enterprise.html)) | **Retenu** |
| Hyperledger Fabric | Certificat du client (MSP) [Connaissance] | Fabric 3.0 : ordonnancement tolérant aux fautes byzantines (SmartBFT) ([LFDT](https://www.lfdecentralizedtrust.org/blog/hyperledger-fabric-v3-delivering-smart-byzantine-fault-tolerant-consensus)) | Faible : avec les collections privées, le hash de chaque transaction va à tous les membres du canal ([Fabric](https://hyperledger-fabric.readthedocs.io/en/latest/private-data/private-data.html)). Un canal par banque bloque les transferts entre banques [H] | Open source, sans licence. Précédent suisse : daura (§5) | **Plan B** |
| Corda | Clé du nœud [Connaissance] | Notaire non validant ([R3](https://docs.r3.com/en/platform/corda/4.8/enterprise/key-concepts-notaries.html)) | Bonne : échanges point à point | R3 pivote vers Solana ([Ledger Insights](https://www.ledgerinsights.com/r3-pivots-to-public-blockchain-with-solana-partnership/)). Prix non publics ([R3](https://r3.com/get-corda/corda-faqs/)) | Écarté |
| Besu | Clé EVM | QBFT [Connaissance] | **Confidentialité native supprimée** dans Besu 25.6 ([Besu](https://besu.hyperledger.org/en/stable/private-networks/concepts/privacy/private-transactions)). Tout nœud voit tout, donc le nœud « détenteurs » de J5 verrait toutes les banques | Réutilise CMTAT | Écarté |

### 3.4 (d) Blockchain publique, token permissionné (CMTAT / ERC-3643)
- **Le token.** CMTAT offre émission, destruction, transfert, transfert forcé, pause et gel. Les modules de base, d'exécution (enforcement) et d'instantanés doivent rester en place « pour la conformité au droit suisse » ([CMTAT](https://github.com/CMTA/CMTAT)).
- **Les droits de l'émetteur.** ERC-3643 donne aux agents de l'émetteur le gel (total ou partiel), le transfert forcé et la récupération de portefeuille ([EIP-3643](https://eips.ethereum.org/EIPS/eip-3643)).
- **La variante confidentielle.** CMTAT Confidential chiffre soldes et montants (chiffrement entièrement homomorphe, Zama, ERC-7984) ([CMTA](https://cmta.ch/news-articles/cmta-launches-cmtat-confidential-privacy-preserving-security-token-standard-built-on-the-zama-protocol-and-openzeppelin)). Elle a été auditée par OpenZeppelin ([OpenZeppelin](https://www.openzeppelin.com/news/cmtat-confidential-audit)). **Les adresses et le graphe des transferts restent visibles** [Connaissance, à confirmer].

---

## 4. Analyse comparative

### 4.1 Les quatre exigences

| Exigence | (a) Centrale classique | (b) Centrale vérifiable | (c) Canton, 3 opérateurs | (d) Publique + CMTAT |
|---|---|---|---|---|
| **Ch. 1** | **Échoue** : la plateforme écrit sur instruction | **Partiel** : le détenteur signe, mais l'opérateur peut encore écrire. La fraude est détectée, pas empêchée | **Oui** : la partie externe signe ; aucun nœud ne transfère à sa place ([DA](https://docs.digitalasset.com/build/3.4/tutorials/app-dev/external_signing_overview.html)) | **Oui**. **Mais** le rôle d'exécution de l'émetteur peut tout déplacer ; seule l'organisation le borne ([CMTAT](https://github.com/CMTA/CMTAT)) |
| **Ch. 2** | **Échoue** | **Probablement insuffisant** : la détection n'est pas une protection (volet juridique) | **Oui** : un changement de position exige la confirmation du nœud « détenteurs » **et** du nœud dépositaire ; la plateforme n'a ni clé ni rôle de signataire | **Oui, au mieux** : des milliers de validateurs ; Ethereum est cité par le message |
| **Ch. 3** | Oui | Oui | Oui : contrat « Conditions », observé par tous | Oui : conditions de tokenisation liées au contrat ([CMTA](https://cmta.ch/standards/standard-for-the-tokenization-of-shares-of-swiss-corporations-using-the-distributed-ledger-technology)) |
| **Ch. 4** | **Échoue** | **Incertain** : vérification locale possible, mais l'accès aux données dépend de l'opérateur | **Oui** : lecture sur le nœud « détenteurs » ou sur son propre nœud, avec le droit écrit dans la convention (J5) | **Oui** : n'importe qui peut lire la chaîne |
| **Verdict juridique** | Ne qualifie pas | Incertain, penche vers non | Qualifie probablement | Qualifie |

### 4.2 Clés, rachat forcé, gel, perte de clé

**Règles posées par le volet juridique (J4, §4.2)** :
- une liste fermée d'exceptions dans la convention ;
- un déclenchement objectif ;
- une double signature indépendante, jamais le débiteur seul ;
- un journal et une notification au détenteur.

S'y ajoutent trois précisions :
- **gel** sur décision d'autorité seulement ;
- **perte de clé** traitée par l'art. 973h, avec procédure simplifiée ; **pas de récupération purement contractuelle** ;
- **correction d'erreur** par écriture compensatoire signée des parties, jamais par un retour arrière.

Toutes les options ont besoin d'exceptions. **Ce qui les départage, c'est le degré auquel l'exception est bornée techniquement.**

| | (a) | (b) | (c) Canton | (d) CMTAT / ERC-3643 |
|---|---|---|---|---|
| **Clé du détenteur** | Aucune | Banque : HSM ou prestataire de garde | Banque : clé de partie externe en HSM ou chez un prestataire de son choix (Taurus supporte Canton) | Banque : portefeuille chez son dépositaire crypto |
| **Clé d'émission** | Plateforme | Dépositaire | Dépositaire (signataire des lots) | Dépositaire (rôle minter) |
| **Clé de la plateforme** | Toutes | Signature du journal | Opérateur du synchroniseur et nœud observateur ; **aucune clé de créancier, aucun rôle de signataire** (J2) | Aucun rôle [H] |
| **Rachat forcé** (clause du contrat de fonds) | Écriture administrative | Écriture d'exception : direction + dépositaire, hash de la décision | Choix Daml à autorisation conjointe direction + dépositaire, avec **hash de décision et préavis codés dans le modèle** [H] : borné techniquement | `forcedTransfer` par un multisig. Le contrat ignore motif et préavis : borné **seulement par l'organisation** |
| **Gel** | Statut | Écriture d'exception sur décision d'autorité | Choix « Geler » sur hash de décision d'autorité ; levée par décision | `freeze` ou `freezePartialTokens` ([EIP-3643](https://eips.ethereum.org/EIPS/eip-3643)). CMTA le réserve en principe à une décision d'autorité (volet juridique, §4.2) |
| **Perte de clé** | Sans objet | Rotation par une clé de secours de la banque (récupération organisée par le créancier : admise). Sinon art. 973h | **Clé opérationnelle perdue** : la banque la remplace avec sa clé racine hors ligne ([clés Canton](https://docs.digitalasset.com/overview/3.4/explanations/canton/security.html), délégation [Connaissance]). **Clé racine perdue** : jugement 973h, puis réémission par le dépositaire | `recoveryAddress` ou transfert forcé par l'agent de l'émetteur : **récupération contractuelle, jugée risquée** par le volet juridique. À remplacer par l'art. 973h |
| **Correction d'erreur** | Retour arrière (non conforme) | Écriture compensatoire signée | Choix « Correction » signé par les parties concernées | Transfert compensatoire signé par le détenteur |

**Point de vigilance.** Dans le pilote Chainlink / Swift / UBS, les banques accèdent au fonds tokenisé « sans intégrer de nouvelle solution de gestion des clés » ([Chainlink](https://blog.chain.link/the-swift-and-chainlink-partnership/) [Secondaire] ; [CoinDesk](https://www.coindesk.com/business/2025/09/30/chainlink-ubs-advance-usd100t-fund-industry-tokenization-via-swift-workflow)). Une passerelle tenue par la plateforme, qui signerait pour la banque, **violerait J2**.

### 4.3 Confidentialité entre banques

Les détenteurs inscrits sont des banques (point 9, liste blanche). Aucun client final n'est donc inscrit au registre. Restent les **positions et flux par banque**, qui sont des secrets d'affaires et peuvent révéler un client quand une banque en a peu dans le fonds [H]. La granularité relève du point 12.

| | (a) | (b) | (c) Canton | (d) publique | (d) CMTAT Confidential |
|---|---|---|---|---|---|
| Une banque voit-elle les positions d'une autre ? | Non | Non : feuilles de l'arbre en hashes salés [H] | Non : sous-transactions. L'accès au nœud « détenteurs » est filtré par partie [H] | **Oui** : soldes et transferts publics. Avec deux ou trois banques en liste blanche, les adresses s'identifient trivialement [H] | Montants chiffrés ; **adresses et graphe visibles** [Connaissance] |
| Qui voit tout ? | La plateforme | La plateforme | Le dépositaire (signataire, c'est son rôle), la plateforme (observateur, pour le reporting) et **l'opérateur du nœud « détenteurs »**, qui doit être tenu au secret par contrat [H] | Tout le monde | Selon les droits de déchiffrement |
| Métadonnées qui fuient | Aucune | Taille du journal [H] | Le synchroniseur voit quels nœuds échangent, et quand | Tout | Graphe des transferts |
| **Note** | ++ | ++ | + (un tiers de plus voit les positions ; ++ si chaque banque a son nœud) | −− | − |

### 4.4 Coûts de build et de run par partie

**Tous les montants de ce tableau sont des [H].** Ils sont en kCHF et ne comptent que le registre. La connexion ISO 20022 / API est commune à toutes les options : environ 30 à 100 kCHF par banque une fois [H].

| Option | Plateforme : build / run par an | Dépositaire + direction : build / run par an | Côté créanciers : build / run par an | Pilote à 3 banques, an 1 |
|---|---|---|---|---|
| (a) | 100–200 / 20–50 | 0–20 / 0–10 | 0 / 0 | **≈ 0,2 M CHF** (ne qualifie pas) |
| (b) renforcée | 400–700 / 60–120 | 40–100 / 20–50 | Par banque 20–60 / 10–30 | **≈ 0,9 M CHF** (incertaine). Rendue défendable (cosignature et copie chez le dépositaire) : **proche de (c)** |
| **(c) Canton, 3 opérateurs** | 600–1 200 / 200–400 (licence comprise, prix non public) | 150–300 / 80–200 (son nœud) | **Nœud « détenteurs » mutualisé** : 100–250 / 80–150, réparti entre banques. **Par banque** : 20–60 / 10–30 (clé + accès). Nœud propre facultatif : 150–300 / 80–200 | **≈ 2,0 M CHF** |
| (d) CMTAT publique | 300–600 / 50–150 | 50–100 / 20–50 | Par banque : 20–60 / 10–40 si elle a déjà une garde crypto ; > 300 sinon | **≈ 0,9 M CHF** |

**Repères sourcés.**
- **Canton.** L'infrastructure d'un nœud validateur coûte environ 500 à 1 000 USD par mois ([Solulab](https://www.solulab.com/canton-network-development-cost) [Secondaire, éditeur]). Le coût réel est humain [H].
- **Nœuds gérés.** Kaleido facture à partir de 0,55 USD par heure et par nœud ([Kaleido](https://www.kaleido.io/pricing) [Extrait]).
- **Ethereum.** Frais moyens par transaction d'environ 0,16 à 0,22 USD en mars 2026 ([CoinLaw](https://coinlaw.io/ethereum-gas-fees-statistics/) [Secondaire]).
- **Licences.** Le prix de la licence entreprise Canton n'est pas public.

### 4.5 Complexité d'adoption pour une banque

| | Ce que la banque doit faire | Effort [H] | Obstacle principal |
|---|---|---|---|
| (a) | API ou ISO 20022 | Faible | Le registre ne qualifie pas |
| (b) | API + signature HSM de chaque transfert + vérification des preuves | Faible à moyen | Signer chaque transfert est nouveau pour une banque sans garde numérique |
| (c) | API ou ISO 20022 + clé de partie (HSM ou prestataire) + accès au nœud « détenteurs ». **Pas de nœud à opérer** | Faible à moyen | Automatiser la signature des transferts dans son outil de garde |
| (d) | Portefeuille chez son dépositaire crypto + liste blanche | Faible si déjà équipée ; élevé sinon | Politique de risque face à une chaîne publique ; communication FINMA 01/2026 ([FINMA](https://www.finma.ch/de/~/media/finma/dokumente/dokumentencenter/myfinma/4dokumentation/finma-aufsichtsmitteilungen/20260112-finma-aufsichtsmitteilung-01-2026.pdf?sc_lang=de&hash=04A4D2F011A496ECDEDF21C618B6FDF4)) |

### 4.6 Intégration avec le moteur d'ordres, SIC et ISO 20022

**Le schéma est le même pour les quatre options.** Le moteur d'ordres, les cut-offs, la VNI, les rétrocessions et le reporting restent en base SQL à tables ledger (rapport §2.4 ; le volet juridique le confirme : ils ne créent pas de droit). Le registre ne porte que les parts. Le cash reste hors chaîne via SIC, en paiement contre confirmation (PvC) : **aucun paiement n'est instruit avant que l'écriture du registre soit irrévocable** (J6).

| | Moteur d'ordres | SIC (PvC) | ISO 20022 | Reporting | Note |
|---|---|---|---|---|---|
| (a) | Même base | Trivial | Adaptateurs en bordure | SQL | ++ |
| (b) | Même environnement, reçus émis par le module registre | Trivial | Idem | SQL | ++ |
| (c) | API du ledger. La banque signe les propositions de transfert ; cette signature s'automatise dans le moteur de règles de son outil de garde | Événement Canton → instruction SIC | setr.010 / setr.004 déclenchent des propositions | Export vers une base relationnelle (PQS [Connaissance]) | + |
| (d) | Indexeur, finalité de la chaîne, gestion du gas | PvC, ou **DvP atomique via le lien SIC de BX Digital** ([CapLaw](https://caplaw.ch/2025/bx-digital-the-first-dlt-trading-facility-in-switzerland/)) | Démontré via Swift avec cash hors chaîne ([CoinDesk](https://www.coindesk.com/business/2025/09/30/chainlink-ubs-advance-usd100t-fund-industry-tokenization-via-swift-workflow)) | Indexeur → SQL | + |

### 4.7 Réversibilité

| Passage | Faisabilité | Condition |
|---|---|---|
| (a) → (c) | Mauvaise | Aucune clé de détenteur : il faut réenrôler et refaire la documentation, soit en pratique une réémission [H] |
| (b) → (c) | Bonne, si conçue dès le départ | Règles R1 à R5 ci-dessous. Coût de migration : 0,2 à 0,4 M CHF et 3 à 6 mois [H]. **Sans objet si (c) est retenue d'emblée**, ce que je recommande |
| (c) → (d) ou (d) → (c) | Moyenne | Destruction et réémission d'un registre vers l'autre [H] |

**Règles pour garder un registre migrable** [H] :
- **R1. Des clés compatibles** : HSM des banques avec des algorithmes acceptés par la signature externe Canton (Ed25519 ou ECDSA P-256 [Connaissance, à vérifier]).
- **R2. Un modèle par lots** avec des événements métier identiques : émission, transfert, demande de rachat, radiation, exception, correction.
- **R3. Des identifiants indépendants de la technologie** : LEI de la banque, ISIN du fonds.
- **R4. Des documents du ch. 3 hors registre**, référencés par hash.
- **R5. La migration prévue dans la convention d'inscription** : instantané des soldes et racine finale inscrite dans le contrat d'ouverture du nouveau registre, cosignés par la direction et le dépositaire. La clause « Migration et continuité » du point 9 (§2.3) et J7 le prévoient. **Ces règles valent aussi pour une sortie de Canton vers Fabric.**

---

## 5. Ce que font les acteurs suisses, et sur quelle base

| Acteur / cas | Technologie | Qui tient les clés | Base revendiquée pour l'art. 973d | Source |
|---|---|---|---|---|
| Cité Gestion (Taurus), actions | CMTAT sur **Ethereum public**, plateforme Taurus-CAPITAL ; émetteur certifié CMTA | Détenteurs ; l'émetteur garde les rôles d'exécution | Standard CMTA : la DLT doit donner aux détenteurs le pouvoir de disposer par procédé technique ; conditions de tokenisation | [Taurus](https://www.taurushq.com/blog/cite-gestion-becomes-the-worlds-first-private-bank-to-tokenize-its-share-capital-through-taurus-technology/) ; [CMTA](https://cmta.ch/standards/standard-for-the-tokenization-of-shares-of-swiss-corporations-using-the-distributed-ledger-technology) |
| Sygnum, actions propres (2020), Desygnate | Ethereum | Détenteurs, garde Sygnum | Droits-valeurs inscrits sur DLT publique | [Finance Magnates](https://www.financemagnates.com/cryptocurrency/news/worlds-first-bank-to-offer-tokenized-shares-is-from-switzerland/) [Secondaire] |
| Aktionariat, actions de PME | Contrats intelligents sur Ethereum ; registre des actionnaires synchronisé hors chaîne | Détenteurs | Contrat « Shares » représentant des actions de droit suisse | [Aktionariat](https://aktionariat.com/technology) ; [GitHub](https://github.com/aktionariat/contracts) |
| daura (MME, Swisscom ; SIX et Sygnum actionnaires) | **Hyperledger Fabric**, « Swiss Trust Chain » **opérée par Swisscom et la Poste**. Premier droit-valeur inscrit suisse, le 1er février 2021 | Détenteurs via la plateforme [Connaissance] | **Gestion commune par deux opérateurs indépendants** | [Swisscom](https://www.swisscom.ch/en/about/news/2019/03/06-digital-share-switzerland.html) ; [Lexology](https://www.lexology.com/library/detail.aspx?g=6b553545-e551-402c-b56e-696c4507cae2) ; [Sygnum](https://www.sygnum.com/news/six-and-sygnum-bank-acquire-stakes-in-daura/) |
| SDX (SIX), obligations numériques | **R3 Corda Enterprise** ; chaque membre a un nœud. Activité intégrée à SIX SIS en 2025 (rapport §1.5) | Membres | Infrastructure régulée | [Finextra](https://www.finextra.com/newsarticle/33495/six-selects-r3-corda-for-new-digital-asset-exchange) ; [R3](https://medium.com/inside-r3/swiss-digital-exchange-innovation-the-swiss-way-powered-by-corda-9ffedc5ea148) [Secondaire] |
| BX Digital, système de négociation DLT | **Ethereum public**, DvP avec lien SIC ; participants régulés ; pas de garde | Participants | Première infrastructure de marché suisse sur blockchain publique | [CapLaw](https://caplaw.ch/2025/bx-digital-the-first-dlt-trading-facility-in-switzerland/) |
| UBS uMINT (fonds VCC de Singapour) | CMTAT sur Ethereum | Détenteurs | Non suisse | [CMTAT](https://github.com/CMTA/CMTAT) |
| SIX, Digital Asset Platform | « Agnostique » quant à l'actif et au registre | — | — | [SIX](https://www.six-group.com/en/products-services/securities-services/digital-assets.html) |

**Leçons.**
1. Le marché suisse repose surtout sur **Ethereum avec CMTAT**. L'argumentaire implicite tient en quatre points :
   - la clé du détenteur répond au ch. 1 ;
   - les validateurs indépendants répondent au ch. 2 ;
   - les conditions liées répondent au ch. 3 ;
   - la lecture publique répond au ch. 4.

   Ce sont des **actions et des produits structurés**, pour lesquels la transparence gêne moins qu'entre banques concurrentes sur un même fonds [H].
2. **Les DLT à permission suisses (daura sur Fabric, SDX sur Corda) reposent sur plusieurs opérateurs**, jamais sur un seul. Cela va dans le sens de J3.
3. **Aucun registre de droits-valeurs inscrits en base centrale n'a été trouvé**, même vérifiable.
4. **Aucun précédent suisse de registre art. 973d sur Canton n'a été trouvé** (§8).

---

## 6. Tableau de décision

Échelle : ++ très favorable, + favorable, 0 neutre, − défavorable, −− très défavorable.

| Critère | (a) Centrale classique | (b) Centrale vérifiable | (c) DLT à permission (Canton, 3 opérateurs) | (d) Publique + CMTAT |
|---|---|---|---|---|
| Ch. 1 : disposition par le créancier | −− | 0 (signe, mais l'opérateur peut écrire) | ++ (partie externe, J1-J2) | ++ (mais l'émetteur peut tout déplacer) |
| Ch. 2 : intégrité | −− | − (détecter n'est pas protéger) | ++ (aucun validateur seul, J3) | ++ |
| Ch. 3 : données liées | + | ++ | ++ | + |
| Ch. 4 : vérification sans tiers | −− | 0 / − (accès dépendant de l'opérateur) | ++ (nœud « détenteurs » ou le sien, J5) | ++ |
| **Verdict juridique sur l'art. 973d** | **Ne qualifie pas** | **Incertain, penche vers non** | **Qualifie probablement** | **Qualifie** |
| Confidentialité entre banques | ++ | ++ | + (++ si nœud propre) | −− (chiffrée : −) |
| Coût de build [H] | ++ | + | − | + |
| Coût de run par partie [H] | ++ | + | − pour la plateforme et le dépositaire ; + pour une banque | ++ (si garde déjà en place) |
| Adoption par une banque | ++ | + | + (pas de nœud à opérer) | + (banques équipées) / −− (les autres) |
| Intégration ordres / SIC / ISO 20022 | ++ | ++ | + | + (seule à offrir le DvP SIC) |
| Réversibilité | − | ++ (vers c) | + (vers Fabric, R1-R5) | 0 |
| Précédents art. 973d en Suisse | Aucun | Aucun | Fabric (daura), Corda (SDX) ; Canton : aucun | Nombreux |
| **Verdict** | **Éliminée** | **Écartée** | **Retenue** | **Rejetée** (confidentialité) ; à revoir quand la version chiffrée aura mûri |

---

## 7. Recommandation : le minimum technique du pilote

### 7.1 Le minimum, condition juridique par condition juridique

| # | Élément minimal | Condition juridique |
|---|---|---|
| M1 | **Registre de parts sur un synchroniseur Canton privé**, avec une empreinte Daml minimale : sept contrats (§7.3). Pas de Global Synchronizer, pas de Canton Coin, aucune logique d'ordre on-ledger (leçon d'ASX) | Périmètre fixé par le volet juridique : DLT pour les parts seulement |
| M2 | **Clés de parties externes chez chaque banque distributrice**, en HSM ou chez un prestataire de garde **qu'elle choisit**. La clé d'émission est chez le dépositaire, la clé d'exception chez la direction. **Aucune clé de créancier chez la plateforme ni chez la direction** | J1, J2 |
| M3 | **Trois opérateurs de nœud indépendants** : la **plateforme** (synchroniseur + nœud observateur, sans rôle de signataire), le **dépositaire** (nœud émetteur, signataire des lots) et le **nœud « détenteurs »** (tiers neutre mandaté par les banques, ou une banque). Ce dernier héberge les parties des banques avec droit de confirmation. Tout changement de position exige la confirmation des nœuds « détenteurs » et dépositaire | J3 |
| M4 | **Séquenceur et médiateur opérés par la plateforme** : ils ordonnent des enveloppes chiffrées et ne peuvent rien créer ni modifier. Un 2e nœud BFT n'est requis que pour la continuité (al. 3), pas pour la qualification | J3 |
| M5 | **Lecture et vérification** : chaque banque lit tout son historique sur le nœud « détenteurs » ou sur son propre nœud, avec un **droit écrit dans la convention** d'en opérer un | J5 |
| M6 | **Contrat « Conditions »** : hashes et URI du contrat de fonds, de la convention d'inscription, de la description du registre et de la **règle d'irrévocabilité**. Proposition : une écriture est irrévocable quand le verdict du médiateur est enregistré [H, Connaissance sur Canton]. Versionné, observé par tous | J6 |
| M7 | **Exceptions codées en liste fermée** : rachat forcé (clause du contrat), gel et levée sur décision d'autorité, annulation-remplacement sur jugement (art. 973h, procédure simplifiée dans la convention), correction par écriture compensatoire. Autorisation conjointe direction + dépositaire, hash de la décision, préavis pour le rachat forcé, journal et notification. **Aucune récupération de clé sans juge** | J4 |
| M8 | **Moteur d'ordres, VNI, rétrocessions et reporting hors registre**, en SQL à tables ledger. ISO 20022 et API en bordure. SIC en PvC | — |
| M9 | **Plan de sortie et information** : export horodaté des soldes et de leur empreinte, procédure de reconstitution, migration selon R1 à R5. Description du registre fidèle à l'architecture réelle | J7, al. 3 |

### 7.2 Schéma

```
PILOTE L-QIF : registre de parts sur Canton, 3 operateurs de noeud (J3)

 Banques distributrices A, B, C : cle de partie externe (HSM / garde)
 aucune cle de creancier chez la plateforme ni chez la direction (J2)
       | signent leurs transferts          | lisent leur historique (J5)
       v                                   v
 [Noeud DETENTEURS]  tiers neutre mandate par les banques, ou une banque
 heberge les parties A, B, C ; confirme chaque ecriture qui les touche
 chaque banque garde le droit d'operer son propre noeud
       |
       |       [Noeud DEPOSITAIRE]  opere par la banque depositaire
       |       partie emettrice + cle direction (exceptions, J4)
       |       confirme chaque emission, transfert et radiation
       |                   |
 +-----v-------------------v--------------------------------------+
 | Synchroniseur prive Canton (sequenceur + mediateur), plateforme |
 | ordonne des enveloppes chiffrees ; ne cree ni ne modifie rien   |
 +-----^----------------------------------------------------------+
       |
 [Noeud PLATEFORME]  observateur, aucune cle de creancier ni signature
       |  evenements du registre -> base SQL (reporting)
       v
 Moteur d'ordres central (SQL ledger) <--- setr / API ---> banques
       |  paiement instruit APRES irrevocabilite de l'ecriture (PvC)
       v
 SIC (CHF, monnaie banque centrale, hors chaine)

 Ch. 3 / J6 : contrat "Conditions" = hash + URI du contrat de fonds,
 de la convention d'inscription, de la description du registre et de
 la regle d'irrevocabilite ; versionne, observe par tous les detenteurs.
```

### 7.3 Modèle de données du registre (pseudo-modèle, pas de code)

| Contrat | Champs clés | Signataires | Qui peut agir | Exigence |
|---|---|---|---|---|
| **Conditions** | ISIN, version, hashes du contrat de fonds, de la convention, de la description du registre et de la règle d'irrévocabilité, URI, date d'effet | Direction + dépositaire | Nouvelle version : direction + dépositaire. Tous les détenteurs sont observateurs | Ch. 3 (J6) |
| **Admission** | Fonds, partie, LEI, statut (admis / suspendu) | Direction + dépositaire | Admettre ou retirer | Liste blanche (point 9) |
| **Lot de parts** | Fonds, détenteur, quantité, version des Conditions, statut (libre / bloqué rachat / gelé) | Dépositaire (registraire) | Transférer, scinder, demander le rachat : **détenteur seul** | Ch. 1 (J1) |
| **Émission** | Référence d'ordre (setr.010), quantité, VNI, référence du paiement SIC reçu | Dépositaire | Crée un lot au nom de la banque après réception du cash | Art. 73 LPCC |
| **Demande de rachat** | Lot bloqué, référence d'ordre (setr.004), quantité | Détenteur | Radiation par le dépositaire après la VNI, puis paiement SIC | Ch. 1 + PvC |
| **Mesure d'exception** | Type (liste fermée : rachat forcé, gel, levée, annulation-remplacement 973h), hash de la décision ou du jugement, préavis, lot visé | Direction + dépositaire, jamais la direction seule | Exécutable seulement avec un hash de décision, et après le préavis pour un rachat forcé ; notifiée au détenteur | Ch. 1 (J4) |
| **Correction** | Écriture d'origine, écriture compensatoire, motif | Parties concernées | Signée par les détenteurs touchés et le dépositaire ; jamais de retour arrière | Ch. 2 |

**Souscription.**
1. La banque envoie setr.010 ou un appel API.
2. Le moteur applique le cut-off et attend la VNI.
3. La banque paie via SIC.
4. Le dépositaire constate le crédit et crée le lot ; les nœuds « détenteurs » et dépositaire confirment.
5. Le moteur émet la confirmation.

**Rachat.**
1. La banque envoie setr.004 et **signe elle-même** le blocage de son lot.
2. Après la VNI, le dépositaire radie le lot.
3. Le paiement SIC n'est instruit qu'une fois la radiation irrévocable.
4. Le moteur émet la confirmation.

### 7.4 Ce que le pilote ne contient pas

| Hors périmètre | Raison |
|---|---|
| Blockchain publique, CMTAT | Confidentialité entre banques (§4.3) |
| Cash tokenisé, DvP atomique, Global Synchronizer Canton | PvC via SIC suffit à VNI J+1 ou J+2 (rapport §2.4) |
| Nœud d'une banque hébergé par la plateforme | Contraire à J5 |
| Récupération de clé par l'émetteur sans jugement | Contraire à J4 |
| Logique d'ordres, de commissions ou de reporting on-ledger | Leçon d'ASX ; non requis par le droit |

### 7.5 Ce qui dépend encore du verdict juridique

| # | Question | État après le volet juridique | Reste à confirmer par l'avis de droit (C2) | Effet sur le coût [H] |
|---|---|---|---|---|
| D1 | (b) renforcée suffit-elle ? | **Tranché** : incertain, penche vers non. Défendable seulement avec un cosignataire qui tient une copie, c'est-à-dire une DLT à deux nœuds, toujours en deçà de J3 | Rien : (b) écartée | — |
| D2 | Un nœud hébergé par la plateforme suffit-il au ch. 4 ? | **Tranché** : non (J5) | — | Remplacé par le nœud « détenteurs » mutualisé |
| D3 | Un séquenceur unique opéré par la plateforme est-il admis ? | **Tranché** : oui s'il ordonne sans créer ni modifier (J3), ce qui est le cas de Canton | Rien. Un BFT ne servirait qu'à la continuité (al. 3) | 0 (+50 à +100 kCHF par an si la continuité l'exige) |
| D4 | Conception des exceptions | **Règles posées** (J4, §4.2 du volet juridique) | Valider le modèle du §7.3, en particulier le rachat forcé en double signature direction + dépositaire et la procédure 973h simplifiée | Neutre |
| **D7** | Un nœud « détenteurs » **mutualisé**, opéré par un tiers neutre, vaut-il « acteur côté créanciers » (J3) et nœud de lecture (J5) pour toutes les banques ? | **Ouvert** | Si non : un nœud par banque, ou au moins une banque avec son propre nœud | +60 à +170 kCHF par an et par banque si non |
| D5 | Le détenteur inscrit est-il la banque (omnibus) ou l'investisseur final ? (point 12) | Ouvert | — | Banque : 3 à 10 parties. Investisseur : des milliers de parties et de clés ; (c) s'alourdit |
| D6 | La communication FINMA 01/2026 s'applique-t-elle aux clés de droits-valeurs inscrits ? | Ouvert | Question à la FINMA (point 9, C6) | Surcoût de garde côté banque |

**Qui pourrait opérer le nœud « détenteurs » ?** [H] Un prestataire d'infrastructure ou de garde, indépendant de la plateforme, de la direction et du dépositaire, mandaté par les banques distributrices. Taurus, qui supporte Canton, est un candidat naturel ; un opérateur d'infrastructure suisse sur le modèle de Swisscom pour daura en est un autre. À défaut, la banque pilote la plus engagée opère son nœud. **C'est un point à traiter avec le point 7 (partenaires).**

---

## 8. Incertitudes et points à vérifier

| # | Incertitude | Effet sur la recommandation | Action |
|---|---|---|---|
| 1 | Formule du message sur « l'instance centrale qui gère seule le registre » : extrait, attribution à confirmer | Fonde l'élimination de (a) et (b) | Le juriste relit le message (FF 2020 223) et la circulaire SBF 2021/01 |
| 2 | J3 (trois opérateurs) est une interprétation du juriste, pas une règle écrite | Fixe le coût de (c) | Avis de droit (C2) |
| 3 | Aucun précédent de registre art. 973d sur Canton | (c) sans précédent technologique suisse ; Fabric (daura) en a un | Demander des références à Digital Asset ; garder Fabric en plan B |
| 4 | Opérateur du nœud « détenteurs » : aucun candidat engagé | Bloque M3 | Entretiens (point 7) |
| 5 | Prix de la licence entreprise Canton | Coûts de (c) en [H] | Devis Digital Asset et prestataire de nœuds |
| 6 | Signature externe Canton : algorithmes, latence, intégration HSM / Taurus ; règle d'irrévocabilité | Faisabilité de M2 et M6 | Preuve de concept en phase 5 |
| 7 | Maturité de CMTAT Confidential : graphe visible, dépendance au réseau de déchiffrement | Pourrait rouvrir (d) | Revue dans 12 mois |
| 8 | Tous les montants | Ordre de grandeur seulement | Chiffrage en phase 3 avec des devis |
