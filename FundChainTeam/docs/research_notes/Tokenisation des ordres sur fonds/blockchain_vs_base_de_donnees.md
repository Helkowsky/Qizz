# Blockchain à permission vs base de données centralisée vs hybride — plateforme multi-parties d'ordres et de registre de parts de fonds

*Notes de recherche préliminaires (état au 1er octobre 2026), en amont de la phase 3 (architecture). Périmètre : Suisse d'abord, Luxembourg / Irlande / UE en comparaison. Méthode : recherches web uniquement. L'ouverture des pages (WebFetch) a été bloquée par le proxy réseau pour tous les domaines testés (asx.com.au, snb.ch, bis.org, fedlex, broadridge.com, ledgerinsights.com, lawbrary.ch, eprint.iacr.org). Les faits ci-dessous viennent donc des extraits et résumés renvoyés par le moteur de recherche, chacun rattaché à l'URL d'origine. Il faut relire chaque source primaire avant de la citer dans un livrable. Tout ce qui n'est pas sourcé porte la mention [HYPOTHÈSE].*

---

## 1. Qu'est-ce qu'un registre partagé supprime réellement par rapport à une base centrale opérée par un tiers de confiance (type Clearstream) ? Lesquels de ces bénéfices une base centrale bien conçue offre-t-elle aussi ?

### Takeaway
Sur les cinq bénéfices habituellement attribués à la DLT, trois sont aussi accessibles à une base centrale bien conçue : registre unique (golden record), fin de la réconciliation inter-parties, inviolabilité vérifiable. Une base centrale avec API et tables « ledger » cryptographiques les délivre déjà. Un quatrième, la programmabilité du cycle de vie d'un ordre et des commissions de distribution, relève de la logique applicative et ne dépend pas du registre. Seuls deux bénéfices propres à la DLT résistent à l'analyse. Le premier : se passer d'un tiers de confiance unique. Le second : la livraison contre paiement (DvP) atomique avec du cash tokenisé situé sur le même registre ou sur un registre interopérable. Or le premier contredit le modèle d'affaires de FundChain, où la plateforme est précisément l'opérateur. Le second dépend d'une jambe cash tokenisée encore très limitée en Suisse.

### Cited Findings
**Cadre théorique.**
- Wüst & Gervais (ETH Zurich, 2017/2018) proposent un arbre de décision. Faut-il stocker un état ? Y a-t-il plusieurs rédacteurs ? Peut-on utiliser un tiers de confiance (TTP) toujours en ligne ? Si la réponse aux deux premières questions est « non », ou à la troisième « oui », une blockchain n'est pas nécessaire. — [Wüst & Gervais, « Do you need a Blockchain? » (PDF Berkeley)](https://www.law.berkeley.edu/wp-content/uploads/2018/08/Do-you-need-a-Blockchain-Karl-Wust-and-Arthur-Gervais.pdf) ; [version IACR ePrint 2017/375](https://eprint.iacr.org/2017/375.pdf)
- Leur conclusion : une blockchain n'a de sens que si plusieurs entités qui se méfient les unes des autres veulent modifier l'état d'un système sans s'accorder sur un TTP en ligne. Le plus souvent, une base de données traditionnelle reste la bonne réponse. — [Wüst & Gervais (PDF)](https://www.law.berkeley.edu/wp-content/uploads/2018/08/Do-you-need-a-Blockchain-Karl-Wust-and-Arthur-Gervais.pdf)
- Des critiques estiment que même cet arbre est trop généreux envers la blockchain (titre : « Probably less than Wüst and Gervais think you do »). — [David Gerard, 2018](https://davidgerard.co.uk/blockchain/2018/02/10/do-you-need-a-blockchain-probably-less-than-wust-and-gervais-think-you-do/)

**Position des régulateurs internationaux.**
- FSB (oct. 2024) : les bénéfices de la tokenisation (efficience du clearing et du règlement, coûts, transparence) restent à prouver pour beaucoup. Ils peuvent ne pas être atteignables *uniquement* par la tokenisation, et leurs arbitrages peuvent les annuler. — [FSB, The Financial Stability Implications of Tokenisation (PDF)](https://www.fsb.org/uploads/P221024-2.pdf) ; [page FSB](https://www.fsb.org/2024/10/the-financial-stability-implications-of-tokenisation/)
- FSB : des solutions émergent pour réduire la réconciliation sans cycle DLT de bout en bout. Elles sont centrées sur les dépositaires et ne touchent pas l'infrastructure de l'investisseur final. — [FSB (PDF)](https://www.fsb.org/uploads/P221024-2.pdf)
- IOSCO (rapport final, 11 nov. 2025) : la tokenisation reste à un stade précoce. Son impact sur la **distribution** et le marché secondaire est limité, et ces activités reposent encore largement sur l'infrastructure et les intermédiaires conventionnels. Les causes citées : accessibilité, liquidité, manque d'interopérabilité, absence d'actif de règlement crédible. — [IOSCO FR/17/25 (PDF)](https://www.iosco.org/library/pubdocs/pdf/IOSCOPD809.pdf) ; [communiqué IOSCO](https://www.iosco.org/news/pdf/IOSCONEWS778.pdf)
- BIS (rapport économique annuel 2023 et 2025) : la valeur d'un « unified ledger » vient de la **programmabilité** et de la **composabilité**. Regrouper des transactions dépendantes (règles « if / then / else ») sur une même plateforme réduit les interventions manuelles et les réconciliations. Le BIS place la valeur dans la coexistence, sur une même plateforme, de la monnaie banque centrale tokenisée, de la monnaie commerciale et des actifs. — [BIS AER 2023, ch. III](https://bis.org/publ/arpdf/ar2023e3.htm) ; [BIS AER 2025, ch. III (PDF)](https://www.bis.org/publ/arpdf/ar2025e3.pdf)

**Ce que fait déjà un hub central.**
- Clearstream Vestima offre un **point d'entrée unique** et un processus standardisé pour toutes les transactions sur fonds : routage d'ordres, DvP centralisé, conservation, reporting intégré. Le service couvre plus de 245 000 fonds sur plus de 55 marchés, environ 45 millions de transactions par an et plus de 5 000 Md EUR d'actifs fonds en conservation (métriques Clearstream). — [Clearstream Vestima](https://www.clearstream.com/clearstream-en/funds-services/fund-centre/execution/vestima) ; [Clearstream Fund Services](https://www.clearstream.com/clearstream-en/funds-services)

**L'inviolabilité sans blockchain.**
- Azure SQL Database et SQL Server proposent des tables « ledger ». Chaque transaction est hachée en SHA-256 et chaînée à la précédente. Les condensats (« database digests ») sont stockés hors de la base, dans un stockage immuable ou Azure Confidential Ledger. Une vérification détecte toute altération, même d'un seul bit. — [Microsoft Learn, Ledger overview](https://learn.microsoft.com/en-us/sql/relational-databases/security/ledger/ledger-overview?view=sql-server-ver17) ; [Annonce Azure SQL Database ledger](https://techcommunity.microsoft.com/blog/azuresqlblog/announcing-azure-sql-database-ledger/2200401)

**L'apport propre au registre partagé.**
- Le DvP atomique, où cash et titres s'échangent simultanément, est l'argument mis en avant par les plateformes en production. Exemple : Broadridge DLR sur Canton (bons du Trésor US tokenisés). — [Broadridge DLR](https://www.broadridge.com/capability/middle-and-back-office-solutions/post-trade-processing/distributed-ledger-repo-solutions)
- Contre-exemple instructif : DTCC Project Ion (Corda) traite plus de 100 000 transactions par jour en production parallèle. Mais les systèmes classiques de DTC restent le **registre faisant foi**. — [DTCC, 22 août 2022](https://www.dtcc.com/news/2022/august/22/project-ion)

### Inferences
- **Réconciliation.** Elle disparaît dès que les trois parties acceptent un registre unique faisant foi, qu'il soit central ou distribué. Ce qui supprime la réconciliation, c'est l'accord sur un golden record, pas la technologie. Un registre DLT qui n'est pas la référence juridique *ajoute* une couche à réconcilier ; c'est la leçon d'Ion.
- **Tamper evidence.** Une base centrale avec tables ledger et condensats publiés ou remis à chaque partie donne une preuve d'inviolabilité vérifiable par les contreparties [HYPOTHÈSE : niveau jugé suffisant par les parties, à valider]. Différence restante : en DLT, une partie peut *empêcher* une écriture qu'elle n'a pas signée. En base centrale, elle peut seulement *détecter* une écriture abusive après coup.
- **Programmabilité (cycle de vie de l'ordre, cut-offs, calcul des rétrocessions et commissions de distribution).** Un moteur de règles central fait tout cela aussi bien, à moindre coût [HYPOTHÈSE]. Le smart contract ne vaut que s'il s'exécute sur un état que chaque partie valide de façon indépendante.
- **DvP atomique.** C'est le seul bénéfice que la base centrale ne peut pas offrir *avec du cash tokenisé*. Avec du cash hors chaîne (SIC / TARGET2), la base centrale fait du DvP « séquencé », comme Vestima aujourd'hui. Voir la section 5 sur la jambe cash.
- **Conséquence pour la promesse FundChain** (« coût total inférieur à Clearstream grâce à moins de réconciliation »). Vestima est déjà un point d'entrée unique avec un golden record central. L'argument « moins de réconciliation » ne différencie donc pas une DLT d'un hub central existant. L'avantage de coût devra venir du modèle opérationnel ou tarifaire, ou de nouvelles fonctions (DvP tokenisé, statut de droit-valeur inscrit), pas du registre en soi [HYPOTHÈSE à challenger en phase 4].

### Gaps
- Pas trouvé de mesure publique indépendante du coût de réconciliation dans la chaîne de distribution de fonds en **Suisse**. Les chiffres disponibles viennent de fournisseurs (section 2).
- Le PDF de Wüst & Gervais n'a pas pu être ouvert. Le libellé exact de l'arbre est repris des résumés de recherche.

---

## 2. Coûts et inconvénients de la DLT : complexité, nœuds, gouvernance, confidentialité, performance, clés, mises à jour, reconnaissance juridique, dépendance fournisseur

### Takeaway
La DLT déplace le coût au lieu de le supprimer. Chaque partie doit opérer ou louer un nœud, gérer ses clés et suivre les mises à jour. Une gouvernance de consortium est nécessaire. La confidentialité entre banques concurrentes impose un modèle de confidentialité spécifique, dont certains ont été abandonnés : la confidentialité Tessera de Besu a été retirée en 2025. La performance n'est plus bloquante aux volumes des fonds, mais les grands projets ont échoué sur la conception (ASX) et sur le modèle économique du consortium (we.trade, Marco Polo, TradeLens, Contour).

### Cited Findings
**Confidentialité selon la plateforme.**
- **Hyperledger Fabric.** Les *channels* isolent des registres entiers entre sous-groupes. Les *private data collections* (PDC) partagent des données avec un sous-ensemble seulement : la donnée privée circule de pair à pair (gossip) entre membres autorisés. Un **hash** de la donnée est ordonné et écrit dans le registre de *tous* les pairs du channel, comme preuve. L'ordering service ne voit que les hashes. — [Fabric docs, Private data](https://hyperledger-fabric.readthedocs.io/en/latest/private-data/private-data.html) ; [LFDT, PDC overview](https://www.lfdecentralizedtrust.org/blog/2018/10/23/private-data-collections-a-high-level-overview)
- **Corda.** Communication point à point, sans diffusion globale : seuls les pairs impliqués voient la transaction. Un notaire *non-validant* ne vérifie que l'unicité des entrées (anti double-dépense) sur une transaction filtrée, sans en voir le contenu. — [R3 docs, Notaries (Corda 4.8)](https://docs.r3.com/en/platform/corda/4.8/enterprise/key-concepts-notaries.html) ; [Kaleido, Corda](https://docs.kaleido.io/kaleido-platform/protocol/corda/)
- Ce gain de confidentialité ouvre une faille de « denial-of-state » : le notaire ne peut pas valider ce qu'il ne voit pas. ING a proposé un notaire à preuves à divulgation nulle (zero-knowledge) pour lever cet arbitrage. — [ING / Corda DoSt (PDF)](https://mondovisione.com/_assets/files/Corda_DoSt_v1.6.pdf) ; [Ledger Insights](https://www.ledgerinsights.com/ing-corda-blockchain-privacy-zero-knowledge-notary/)
- **Canton (Daml).** Confidentialité au niveau de la sous-transaction : chaque partie ne reçoit et ne stocke que la partie qui la concerne. Exemple donné : la banque voit le transfert cash, le registraire voit le transfert de parts. Les opérateurs d'infrastructure ne voient que des métadonnées (statut, parties). — [Canton Network blog](https://www.canton.network/blog/how-canton-network-delivers-institutional-grade-privacy)
- **Besu / Quorum.** La confidentialité via Tessera a été dépréciée dans Besu 24.12.0 puis **supprimée dans Besu 25.6.0**. Elle est remplacée par des solutions applicatives (Pente dans Paladin). — [Besu docs, Private transactions (Deprecated)](https://besu.hyperledger.org/en/stable/private-networks/concepts/privacy/private-transactions) ; [LFDT, Sunsetting Tessera](https://www.lfdecentralizedtrust.org/blog/sunsetting-tessera-and-simplifying-hyperledger-besu) ; [Besu CHANGELOG](https://github.com/hyperledger/besu/blob/main/CHANGELOG.md)
- **Zero-knowledge.** Paladin (LF Decentralized Trust) apporte une confidentialité programmable sur EVM. Zeto fournit des tokens UTXO confidentiels par preuves ZK (Circom), pensés pour CBDC, dépôts tokenisés et titres. Le nœud Paladin détient les clés des utilisateurs et génère leurs preuves. — [LFDT, Announcing Paladin](https://www.lfdecentralizedtrust.org/blog/announcing-paladin-an-lf-decentralized-trust-lab-for-programmable-privacy-on-evm) ; [Zeto (GitHub)](https://github.com/LFDT-Paladin/zeto)

**Performance.**
- Fabric : latence inférieure à la seconde jusqu'à environ 200 tps dans certaines configurations, avec saturation vers 200 tps selon les réglages. Plus de 20 000 tps dans des conditions optimisées (FastFabric). Les résultats dépendent fortement de la configuration. — [arXiv, Understanding the Scalability of Hyperledger Fabric](https://arxiv.org/pdf/2107.09886) ; [FastFabric (Cambridge repository)](https://www.repository.cam.ac.uk/bitstreams/8bbdecba-0d6a-40fb-80be-7ff82e93fd52/download) ; [IEEE, Performance analysis of Fabric](https://ieeexplore.ieee.org/document/8946222/)
- DTCC Ion (Corda) : plus de 100 000 transactions par jour en moyenne, plus de 160 000 les jours de pointe, en production parallèle. — [DTCC](https://www.dtcc.com/news/2022/august/22/project-ion)
- ASX CHESS (Daml / DLT) : selon la revue Accenture, la combinaison DLT + smart contracts a **freiné la performance et la scalabilité**. — [iTnews](https://www.itnews.com.au/news/accenture-report-could-end-asxs-blockchain-vision-587915)

**Gouvernance de consortium et coût économique.**
- we.trade (Fabric, IBM, 16 banques, 15 pays) : insolvable en juin 2022, après avoir licencié la moitié de ses effectifs en 2020. — [Tech Monitor](https://www.techmonitor.ai/technology/emerging-technology/ibm-backed-blockchain-platform-we-trade-shutting-down) ; [Futurum](https://futurumgroup.com/insights/hsbc-ibm-and-socgen-backed-blockchain-company-we-trade-is-now-we-broke/)
- Marco Polo : liquidation en 2023, passif supérieur à l'actif de 2,5 M EUR. — [GTR](https://www.gtreview.com/news/top-stories/marco-polo-brings-in-liquidators-as-funds-run-dry/)
- TradeLens (Maersk / IBM) : fermé faute de viabilité commerciale, la collaboration de toute l'industrie n'ayant pas été obtenue. — [Supply Chain Dive](https://www.supplychaindive.com/news/Maersk-IBM-shut-down-TradeLens/637580/)
- Contour : fermeture annoncée fin 2023, faute d'utilisateurs suffisants pour couvrir les coûts. — [Trade Finance Global](https://www.tradefinanceglobal.com/posts/contour-collapses-what-does-this-mean-for-digital-trade-finance/)
- Gartner, cité par la presse : un consortium blockchain ne réussit que si toutes les parties y gagnent, avec un ROI démontrable. — [Computerworld](https://www.computerworld.com/article/1615596/maersks-tradelens-demise-likely-a-death-knell-for-blockchain-consortiums.html)
- Ordre de grandeur des capitaux : Fnality a levé 136 M USD en série C (sept. 2025) pour développer ses systèmes de paiement DLT. — [Fnality](https://fnality.com/news/fnality-raises-136-million-in-series-c-funding)
- Pire cas : ASX a passé en perte 245–255 M AUD avant impôt sur le remplacement de CHESS. — [ASX, 17 nov. 2022 (PDF)](https://www.asx.com.au/content/dam/asx/about/media-releases/2022/60-17-november-2022-CHESS-Replacement-ASX-reassessing-financial-derecognition_.pdf)

**Pérennité technologique et dépendance fournisseur (vaut aussi pour les « ledger databases »).**
- Amazon QLDB, base « ledger » centralisée vérifiable cryptographiquement, a été arrêtée le 31 juillet 2025. AWS recommande Aurora PostgreSQL. — [InfoQ](https://www.infoq.com/news/2024/07/aws-kill-qldb/) ; [Tutorials Dojo](https://tutorialsdojo.com/amazon-quantum-ledger-database-qldb/)
- Selon un éditeur tiers, Aurora PostgreSQL n'offre pas la vérifiabilité cryptographique de QLDB (source commerciale, à prendre avec précaution). — [Certyo](https://www.certyos.com/en/blog/aws-qldb-migration-lesson)

**Chiffres d'économies.** Ce sont des estimations de fournisseurs, non indépendantes.
- Calastone : une infrastructure de distribution mutualisée éliminerait jusqu'à 70 % des coûts de distribution traditionnels, soit environ 1,9 Md GBP. Prévision globale : 3,4 Md GBP par an. — [Calastone](https://www.calastone.com/insights/preparing-for-digital-fund-distribution-how-blockchain-can-save-billions-for-the-funds-industry/)
- Deloitte, cité par Calastone : 1,3 Md EUR de coûts de friction de distribution au seul Luxembourg. — [Calastone](https://www.calastone.com/insights/delivering-efficiencies-in-distribution-through-blockchain/)

### Inferences
- **Confidentialité dans le cas FundChain.** Avec N banques distributrices concurrentes, aucune ne doit voir les ordres ni les positions des autres. Le fonds / TA voit tout son registre ; la plateforme, en tant qu'opératrice, voit tout. Conséquences par plateforme :
  - Fabric : il faut soit un channel par paire banque–fonds (explosion combinatoire), soit des PDC. Mais avec les PDC, les hashes, le volume et la cadence des transactions restent visibles de tous les membres du channel (fuite de métadonnées) [HYPOTHÈSE : à quantifier].
  - Canton : le modèle le plus naturel pour ce cas, avec Corda juste derrière.
  - Besu : sa confidentialité native a disparu, d'où un risque technologique avéré.
  - Base centrale : contrôle d'accès classique, mature et peu coûteux. **Sur la confidentialité, la base centrale gagne.**
- **Performance.** Les volumes d'ordres sur fonds suisses sont probablement de l'ordre de milliers à dizaines de milliers d'ordres par jour, avec une VNI (valeur nette d'inventaire) journalière et des cut-offs [HYPOTHÈSE : à confirmer avec `expert-operations-fonds`]. C'est très en dessous des capacités démontrées (Ion : 100 000 par jour). La performance n'est donc **pas** un critère discriminant. Le risque réel est la conception : trop de logique « on-ledger », comme chez ASX.
- **Coût de fonctionnement par partie.** En DLT « pure », chaque banque et chaque TA opère un nœud, un HSM, des procédures de mise à jour coordonnées et une astreinte. En base centrale, la banque ne maintient qu'une connexion API / SWIFT [HYPOTHÈSE]. Les nœuds hébergés par l'opérateur (modèle Ion, section 6) réduisent ce coût… mais recentralisent la confiance.
- **Gouvernance.** Les échecs de consortium touchent des réseaux *entre pairs*, sans opérateur dominant ni proposition de valeur claire. Une plateforme qui est elle-même l'opératrice évite le problème de gouvernance, mais redevient un TTP au sens de Wüst & Gervais.

### Gaps
- Pas de coût public et comparable d'exploitation d'un nœud (Canton, Fabric, Corda) par participant. Tout chiffrage reste [HYPOTHÈSE].
- Pas de benchmark public de Canton trouvé dans cette session.
- Les chiffres d'économies (Calastone / Deloitte) sont des estimations de fournisseurs. Pas trouvé d'évaluation ex post indépendante pour Iznes ou FundsDLT.

---

## 3. Études de cas : qu'est-ce qui a fait la différence ?

### Takeaway
Les succès en production (Broadridge DLR, Kinexys, Eurex / HQLAx, FundsDLT absorbé par Clearstream) ont un point commun. Un **opérateur dominant, déjà au centre du réseau**, y utilise la DLT comme technologie interne pour un problème précis et mesurable : repo intrajournalier, mobilité du collatéral, paiements 24h/24 et 7j/7. Les échecs ont eux aussi un point commun. Ce sont des **remplacements « big bang »** d'infrastructures critiques (ASX) ou des **consortiums entre pairs** sans proposition de valeur claire (we.trade, Marco Polo, TradeLens, Contour). Dans les fonds, les initiatives DLT restent de niche (Iznes) ou se sont fondues dans un acteur central : FundsDLT dans Clearstream, SDX dans SIX.

### Cited Findings
**ASX CHESS (échec).**
- Pause et passage en perte de 245–255 M AUD avant impôt (172–179 M après impôt) en nov. 2022. ASX revoit la conception de la solution. — [ASX, 17 nov. 2022 (PDF)](https://www.asx.com.au/content/dam/asx/about/media-releases/2022/60-17-november-2022-CHESS-Replacement-ASX-reassessing-financial-derecognition_.pdf) ; [Finadium](https://finadium.com/asx-puts-chess-replacement-on-hold-will-write-off-250mn/)
- Revue Accenture :
  - logiciel complet à **63 %** au regard des exigences fonctionnelles ;
  - pas de vue unique et partagée de l'état du programme ;
  - exécution en silos ;
  - « défis importants » de conception et de capacité à répondre aux exigences d'ASX. — [Euromoney (revue Accenture, PDF)](https://www.euromoney.com/pdf/asx-chess-replacement-application-delivery-review-2022-pdf/) ; [Inside Story](https://insidestory.org.au/the-asxs-chess-checkmate/)
- Accenture : la combinaison DLT + smart contracts a freiné performance et scalabilité. La conception « ne tire pas pleinement parti des forces » de Daml et offre « peu de valeur » aux participants pour la logique métier on-ledger. « Daml may not be the most appropriate to solve for all business process, logic, and data. » — [iTnews](https://www.itnews.com.au/news/accenture-report-could-end-asxs-blockchain-vision-587915)
- Nov. 2023 : ASX choisit une solution progicielle, TCS BaNCS, avec Accenture comme intégrateur. La blockchain n'est plus la fondation (un plugin Quartz reste en option). — [iTnews](https://www.itnews.com.au/news/asx-banks-on-tcs-bancs-for-core-replacement-602527) ; [ASX, 20 nov. 2023 (PDF)](https://www.asx.com.au/content/dam/asx/about/media-releases/2023/70-20-november-2023-chess-replacement-solution-announced-and-2024-consultation.pdf)
- La Release 1 (clearing) est passée en production avec TCS ; la Release 2 est en cours. — [Securities Finance Times](https://www.securitiesfinancetimes.com/securitieslendingnews/industryarticle.php?article_id=228638)
- Les régulateurs (ASIC / RBA) pointent aussi l'engagement des parties prenantes, la gouvernance et les conflits d'intérêts intragroupe. Un groupe consultatif a été imposé. — [RBA, mr-23-22](https://www.rba.gov.au/media-releases/2023/mr-23-22.html) ; [RBA, mr-22-22](https://www.rba.gov.au/media-releases/2022/mr-22-22.html)
- ASX a accepté une pénalité de 20,5 M AUD pour déclarations trompeuses sur le projet. — [Business News Australia](https://www.businessnewsaustralia.com/articles/asx-agrees-to-pay-20m-penalty-over-misleading-statements-related-to-chess-replacement.html)

**DTCC Project Ion (production parallèle, pas de bascule publique connue).**
- Corda, développé avec BNY Mellon, Citi, Fidelity, Goldman Sachs, JP Morgan, Robinhood. Plus de 100 000 transactions par jour en parallèle depuis août 2022 ; le système classique de DTC reste le registre faisant foi. — [DTCC](https://www.dtcc.com/news/2022/august/22/project-ion)
- Phase 1 : les participants utilisent des **nœuds hébergés par DTCC**. Les nœuds hébergés par les clients sont prévus pour plus tard. — [Securities Finance Times](https://www.securitiesfinancetimes.com/securitieslendingnews/industryarticle.php?article_id=225014)
- La bascule dépend de l'accord des grands dépositaires (titre de l'article). — [Forbes, 2022](https://www.forbes.com/sites/javierpaz/2022/09/01/dtccs-bold-blockchain-bet-hinges-on-sign-off-from-jpmorgan-chase-state-street-and-other-custodians/)

**SIX Digital Exchange (Suisse).**
- Depuis le 1er juin 2025, les obligations digitales émises sur SDX se négocient uniquement sur SIX Swiss Exchange, via le lien opérationnel SIS–SDX. — [SDX](https://www.sdx.com/news/sdx-announces-the-consolidation-of-trading-for-digital-assets-into-six-swiss-exchange/)
- Oct. 2025 : SIX abandonne la marque SDX et réintègre l'activité. Le négoce passe à la bourse principale ; le règlement et la conservation digitaux passent à la division post-trade. — [Bloomberg, 6 oct. 2025](https://www.bloomberg.com/news/articles/2025-10-06/swiss-exchange-group-to-bring-digital-assets-unit-sdx-in-house) ; [SIX, stratégie digital assets](https://www.six-group.com/en/products-services/securities-services/knowledge-hub/digital-assets/digital-asset-strategy-interview.html)
- SDX accueille le pilote wCBDC de la BNS (Helvetia III) depuis fin 2023 : six émissions obligataires digitales pour 750 M CHF réglées en wCBDC. — [BNS, communiqué 30 juin 2025](https://www.snb.ch/en/publications/communication/press-releases/2025/pre_20250630) ; [SIX, nov. 2023](https://www.six-group.com/en/newsroom/media-releases/2023/20231102-six-sdx-snb-helvetia-lll.html)

**Broadridge DLR (succès en volume).**
- Janvier 2026 : 7,3 trillions USD dans le mois, 365 Md USD par jour en moyenne, +508 % sur un an. — [Broadridge, janv. 2026](https://www.broadridge.com/press-release/2026/broadridges-dlr-platform-achieves-508-percent-year-over-year-growth-in-january)
- Juin 2026 : 7,5 trillions USD, 357 Md USD par jour. — [Broadridge, juin 2026](https://www.broadridge.com/press-release/2026/broadridges-dlr-processes-over-7-trillion-in-june)
- Juillet 2026 : 8,0 trillions USD, 365 Md USD par jour, +28 % sur un an. — [Broadridge, juil. 2026](https://www.broadridge.com/press-release/2026/broadridges-distributed-ledger-repo-processes-8-trillion-in-july)
- Construit sur Canton / Daml. Automatise le cycle de vie du repo, dont le repo intrajournalier. — [Broadridge DLR](https://www.broadridge.com/capability/middle-and-back-office-solutions/post-trade-processing/distributed-ledger-repo-solutions)

**Fnality (paiements wholesale DLT).**
- Premières transactions live du système sterling en déc. 2023, avec Lloyds, Santander et UBS. — [Fnality](https://fnality.com/news/fnality-commences-initial-phase-of-sterling-payment-operations-in-a-world-first)
- BNP Paribas a rejoint en juillet 2025. — [Fnality](https://fnality.com/news/bnp-paribas-participates-in-world-first-regulated-dlt-based-wholesale-payment-system)
- Série C de 136 M USD en sept. 2025. — [Fnality](https://fnality.com/news/fnality-raises-136-million-in-series-c-funding)

**JP Morgan Kinexys (ex-Onyx).**
- Rebaptisé en nov. 2024. Plus de 2 Md USD par jour à cette date. — [J.P. Morgan](https://www.jpmorgan.com/insights/payments/blockchain-digital-assets/introducing-kinexys) ; [Finextra](https://www.finextra.com/newsarticle/45018/jp-morgan-rebrands-onyx-to-kinexys-for-blockchain-charge)
- Environ 5 Md USD par jour et plus de 3 trillions USD cumulés fin 2025, selon une source secondaire. — [assettokenization.com](https://www.assettokenization.com/resources/inside-kinexys-j-p-morgans-3-trillion-transaction-platform)

**HQLAx / Eurex Clearing.**
- Le 29 juillet 2025, Eurex Clearing est devenue la première CCP au monde à lancer un service de mobilisation de collatéral par DLT, avec HQLAx et Clearstream. — [Eurex](https://www.eurex.com/ex-en/find/news-center/news/Eurex-Clearing-becomes-first-CCP-globally-to-launch-DLT-enabled-collateral-mobilization-service-4593252)
- HQLAx représente les actifs sur le registre **sans les tokeniser** : leur nature juridique reste inchangée. Le transfert de collatéral passe de plusieurs heures ou jours à quelques minutes. — [Markets Media](https://www.marketsmedia.com/dlt-enables-collateral-mobility/)

**Fonds : Iznes (France).**
- Lancé en 2017 par SETL et quatre sociétés de gestion comme plateforme paneuropéenne de tenue de registre de fonds en blockchain. — [OFI Invest AM](https://www.ofi-invest-am.com/en/support/setl-et-4-societes-de-gestion-lancent-iznes-plateforme-paneuropeenne-de-tenue-de-registre-des-fonds-en-blockchain/59bba164e039d)
- Migré ensuite vers Hyperledger Fabric (hébergé sur AWS). — [PRWeb](https://www.prweb.com/releases/iznes-world-s-first-blockchain-marketplace-for-funds-adopts-a-new-technology-866276678.html)
- Plus de 7 Md EUR d'actifs enregistrés, date du chiffre non précisée. — [PRWeb](https://www.prweb.com/releases/iznes-world-s-first-blockchain-marketplace-for-funds-adopts-a-new-technology-866276678.html) ; [Iznes](https://iznes.io/en/presentation-entreprise/)
- Le cadre DEEP (dispositif d'enregistrement électronique partagé) français permet à l'émetteur de tenir lui-même l'inscription des titres ou de la déléguer à un prestataire technique. — [Banque de France, rapport titres financiers digitaux (PDF)](https://www.banque-france.fr/system/files/2023-10/rapport_39_f.pdf)

**Fonds : FundsDLT (Luxembourg).**
- Créé en 2020 avec Deutsche Börse, la Bourse de Luxembourg, Credit Suisse AM et Natixis IM.
- Racheté à 100 % par Deutsche Börse ; clôture approuvée par la CSSF en janv. 2024.
- Fonctionne « adossé » à Vestima, la plateforme centrale de Clearstream. — [Clearstream, août 2023](https://www.clearstream.com/clearstream-en/newsroom/230803-3638302) ; [Clearstream, janv. 2024](https://www.clearstream.com/clearstream-en/newsroom/240110-3818150)

**Fonds : Calastone (hub central, pas une DLT, avec une couche tokenisée).**
- Avril 2025 : lancement de Calastone Tokenised Distribution. Tout fonds du réseau peut être tokenisé et distribué sur Ethereum, Polygon ou Canton sans changer sa structure ni son administration. Les ordres passés on-chain sont traités par le système Calastone. — [Calastone](https://www.calastone.com/tokenised-distribution/) ; [Mondo Visione](https://mondovisione.com/media-and-resources/news/calastone-launches-tokenised-distribution-solution-to-unlock-the-future-of-fund-202543/) ; [The Block, nov. 2025](https://www.theblock.co/news/business/2025-11-12-global-funds-network-calastone-taps-polygon-tokenized-asset-distribution-378463)

### Inferences
- **Facteurs de succès** :
  1. un opérateur unique, crédible, déjà au centre du flux (Broadridge, JP Morgan, Clearstream, Eurex, DTCC) ;
  2. un cas d'usage étroit avec un gain mesurable en minutes ou en liquidité (repo intrajournalier, collatéral) ;
  3. une coexistence avec l'existant plutôt qu'un remplacement (HQLAx ne tokenise pas ; Calastone ajoute une couche) ;
  4. des nœuds hébergés par l'opérateur au départ (Ion).
- **Facteurs d'échec** :
  1. un big bang sur une infrastructure systémique (ASX) ;
  2. trop de logique on-ledger ;
  3. une gouvernance partagée entre pairs concurrents sans ROI clair (consortiums trade finance) ;
  4. une dépendance à la masse critique.
- **Dans les fonds**, la trajectoire observée est la **recentralisation** : FundsDLT passe sous Clearstream, SDX revient dans SIX, Calastone reste un hub central. Les succès « DLT » ressemblent donc à des architectures **hybrides à opérateur central**. Cela ne valide pas une DLT multi-opérateurs entre pairs [inférence].
- **Pour FundChain**, une plateforme nouvelle qui veut concurrencer Vestima, Allfunds ou Calastone n'a pas l'effet réseau des opérateurs gagnants. Le risque principal est donc l'adoption, pas la technologie [HYPOTHÈSE à challenger].

### Gaps
- **Statut actuel (2025–2026) de DTCC Ion** : aucune bascule publique vers un registre faisant foi n'a été trouvée. Aucune annonce d'abandon non plus.
- **Résultats financiers de SDX** (pertes cumulées) : non trouvés, la recherche n'a pas pu être relancée.
- **Encours et volumes récents datés d'Iznes (2025–2026)** et rentabilité : non trouvés.
- **Volumes de transactions HQLAx / Eurex** depuis le lancement : non publiés dans les résultats.

---

## 4. Angle juridique contraignant l'architecture (bref) : Suisse (DLT Act), Luxembourg, régime pilote UE

### Takeaway
Le droit suisse est **technologiquement neutre**, mais l'art. 973d CO impose au registre de droits-valeurs des propriétés que la DLT satisfait naturellement. Pour une base centrale, elles sont discutables. En particulier, le créancier doit pouvoir vérifier l'intégrité « sans intervention d'un tiers ». La « gestion commune par plusieurs participants indépendants » n'est qu'un *exemple* de mesure d'intégrité, pas une obligation. Une base centrale n'est donc pas exclue par principe. Elle doit toutefois offrir une vérifiabilité indépendante par les détenteurs, et sa qualification est incertaine (à trancher par le juriste). Le Luxembourg (Blockchain Law IV) et la France (DEEP) admettent la DLT pour tenir l'émission ou le registre. Le régime pilote UE reste très peu utilisé.

### Cited Findings
**Suisse.**
- La loi DLT est entrée en vigueur en deux temps : droits-valeurs inscrits au 1er février 2021, reste du paquet au 1er août 2021. — [Library of Congress](https://www.loc.gov/item/global-legal-monitor/2021-03-03/switzerland-new-amending-law-adapts-several-acts-to-developments-in-distributed-ledger-technology/)
- Dispositions technologiquement neutres. Elles n'imposent que des exigences matérielles au registre et au transfert, ni blockchain, ni consensus, ni standard de token. — [Lexology](https://www.lexology.com/library/detail.aspx?g=25d5cf60-9652-4e14-81b3-0e407df64da9) ; [Aurum Law](https://aurum.law/newsroom/Guide-to-Swiss-Ledger-Based-Securities-Tokenised-Stocks-Debt-and-RWAs)
- Art. 973d CO, exigences confirmées par les extraits de recherche :
  - **intégrité** protégée par des mesures techniques et organisationnelles adéquates contre toute modification non autorisée, « telles que la gestion commune par plusieurs participants indépendants les uns des autres » ;
  - le registre doit permettre aux créanciers de consulter les informations qui les concernent et de **vérifier l'intégrité du contenu qui les concerne sans intervention d'un tiers** ;
  - le débiteur s'assure que l'organisation du registre est adaptée à son objet et que le registre fonctionne en tout temps conformément à la convention d'inscription. — [Art. 973d CO (droit-bilingue.ch)](https://www.droit-bilingue.ch/fr-de/2/22/220-973d-1383.html) ; [Art. 973d CO (lawbrary)](https://lawbrary.ch/law/art/CO-v2021.07-fr-art-973d/)
- Art. 973d al. 2, deux autres exigences : ch. 1, le registre confère aux **créanciers, mais non au débiteur**, le pouvoir de disposer de leurs droits au moyen de procédés techniques ; ch. 3, le contenu des droits, le fonctionnement du registre et la convention d'inscription y sont consignés ou liés. — [Art. 973d CO](https://www.droit-bilingue.ch/fr-de/2/22/220-973d-1383.html) — *texte non relu dans cette session (page non ouvrable), à vérifier sur Fedlex.*
- BX Digital a obtenu en mars 2025 la première licence FINMA de système de négociation DLT. — [FINMA, 18 mars 2025](https://www.finma.ch/en/news/2025/03/20250318-mm-dlt-handelssystem/)

**Luxembourg.**
- Blockchain Law IV, adoptée le 19 décembre 2024 : un émetteur peut nommer un **agent de contrôle** (établissement de crédit ou entreprise d'investissement de l'UE). Cet agent tient le compte d'émission et suit la chaîne de détention via DLT, sans conservation centralisée. Les comptes titres peuvent rester chez différents dépositaires, à condition que la réconciliation soit assurée. — [Arendt](https://www.arendt.com/news-insights/news/luxembourgs-blockchain-law-iv-groundbreaking-new-options-for-issuing-dlt-securities/) ; [Goodwin, déc. 2024](https://www.goodwinlaw.com/en/insights/publications/2024/12/insights-finance-ftec-luxembourg-adopts-blockchain-law-iv) ; [National Law Review](https://natlawreview.com/article/luxembourg-modernises-custody-chain-accommodate-blockchain-technology)
- EY y voit un possible tournant pour le métier d'agent de transfert. — [EY Luxembourg](https://www.ey.com/en_lu/insights/wealth-asset-management/luxembourg-market-pulse/the-control-agent-under-luxembourg-blockchain-iv-law-a-turning-point-for-transfer-agency)

**France.**
- Le DEEP permet l'inscription de titres financiers, dont des parts de fonds (cas Iznes), sur registre partagé. — [Banque de France (PDF)](https://www.banque-france.fr/system/files/2023-10/rapport_39_f.pdf)

**UE, régime pilote DLT.**
- Au 31 mai 2025, seulement **trois** infrastructures de marché DLT étaient autorisées (CSD Prague, 21X, 360X), avec une activité live minime. — [Goodwin, juil. 2025](https://www.goodwinlaw.com/en/insights/publications/2025/07/insights-otherindustries-reg-dlt-pilot-regime-esma-report-highlights) ; [ESMA, rapport du 25 juin 2025 (PDF)](https://www.esma.europa.eu/sites/default/files/2025-06/ESMA75-117376770-460_Report_on_the_functioning_and_review_of_the_DLTR_-_Art.14.pdf)
- Freins identifiés : manque d'interopérabilité, accès à la monnaie banque centrale, seuils trop bas. L'ESMA propose de recalibrer ces seuils et de rendre le régime permanent. — [DLA Piper](https://www.dlapiper.com/en-us/insights/publications/2025/07/esma-suggests-amendments-to-the-dlt-pilot-regime-to-make-it-permanent-and-attractive)

### Inferences
- **Une base centrale peut-elle constituer un registre de droits-valeurs (art. 973d) ?**
  - *Non exclue* : la loi est neutre et la gestion multi-parties n'est qu'un exemple.
  - *Fragile* sur deux points. D'abord, la vérification d'intégrité « sans intervention d'un tiers » : l'opérateur unique *est* le tiers, sauf preuves cryptographiques publiées et vérifiables par le détenteur seul. Ensuite, le pouvoir de disposer conféré au créancier et non au débiteur, ce qui suppose des signatures du détenteur et non une simple instruction à l'opérateur [HYPOTHÈSE juridique, à valider par `juriste-reglementaire`].
  - Une DLT où chaque partie (banque, TA, plateforme) tient ou contrôle un nœud et signe ses transferts est le chemin le plus sûr vers la qualification.
- **Cette contrainte ne vaut que si les parts de fonds sont émises comme droits-valeurs inscrits.** Si les parts restent des titres intermédiés ou un registre tenu par la direction de fonds / le TA, la loi n'impose rien de « DLT » au registre de la plateforme [HYPOTHÈSE juridique].
- **Luxembourg.** Le modèle « agent de contrôle + DLT » (Blockchain IV) correspond à une architecture hybride : un acteur régulé central, un registre DLT et une réconciliation avec les dépositaires.

### Gaps
- Le texte exact de l'art. 973d al. 2 ch. 1 et 3 n'a pas pu être relu (Fedlex bloqué).
- Message du Conseil fédéral : pas de passage trouvé sur l'admissibilité d'un registre tenu par un opérateur unique.
- Statut des **parts de fonds suisses (LPCC)** comme droits-valeurs inscrits : non couvert ici (périmètre du juriste).
- Irlande : rien trouvé dans cette session.
- Application du régime pilote aux parts d'OPCVM (seuils) : non vérifiée.

---

## 5. Jambe cash : quelles options sont réellement disponibles aujourd'hui en Suisse et dans l'UE, et dépendent-elles du choix d'architecture ?

### Takeaway
En Suisse, au 1er octobre 2026, la seule option **généralisable** est le règlement **hors chaîne via SIC**, avec livraison des parts contre confirmation de paiement (payment-vs-confirmation, PvC). Cette option fonctionne aussi bien avec une base centrale qu'avec une DLT. Le CHF tokenisé en monnaie banque centrale reste un **pilote** restreint à SDX (Helvetia III, prolongé au moins jusqu'à mi-2027) ou passe par le lien RTGS vers SIC de BX Digital. Les dépôts tokenisés suisses n'ont fait l'objet que d'une preuve de concept. Le cadre des stablecoins CHF est en cours de législation. En zone euro, Pontes a été mis en service le 21 septembre 2026 (sources de presse) pour régler en monnaie banque centrale des transactions DLT. C'est la première option tokenisée réellement ouverte, réservée aux établissements éligibles.

### Cited Findings
**Suisse, wCBDC (Helvetia).**
- Depuis fin 2023, la BNS fournit une wCBDC sur la plateforme SDX. Six émissions obligataires pour 750 M CHF ont été réglées ainsi (au 30 juin 2025). — [BNS, 30 juin 2025](https://www.snb.ch/en/publications/communication/press-releases/2025/pre_20250630)
- Pilote prolongé au moins jusqu'à mi-2027. La prolongation n'engage pas la BNS à introduire une wCBDC de façon permanente. — [BNS, page Helvetia](https://www.snb.ch/en/the-snb/mandates-goals/payment-transactions/projekt_helvetia) ; [Ledger Insights, « extended by 2 years »](https://www.ledgerinsights.com/swiss-wholesale-cbdc-trial-with-sdx-extended-by-2-years/)
- *Note :* les extraits divergent sur la durée de prolongation (deux ans selon Ledger Insights, « une année supplémentaire » selon le résumé de la page BNS). L'horizon « au moins mi-2027 » est cohérent entre les deux.

**Suisse, lien RTGS (BX Digital).**
- La BNS a étendu Helvetia au règlement d'actifs tokenisés en monnaie banque centrale *traditionnelle* : BX Digital obtient une connexion de production à SIC. — [BNS, 30 juin 2025](https://www.snb.ch/en/publications/communication/press-releases/2025/pre_20250630)
- BX Digital règle via un smart contract DvP sur **Ethereum public**, avec lien RTGS vers SIC. — [CapLaw](https://caplaw.ch/2025/bx-digital-the-first-dlt-trading-facility-in-switzerland/)
- Les travaux antérieurs (Helvetia II) ont testé wCBDC et lien vers le RTGS. — [BIS, Helvetia Phase II](https://www.bis.org/publ/othp45.htm)

**Suisse, dépôts tokenisés.**
- Preuve de concept de l'Association suisse des banquiers (sept. 2025) avec PostFinance, Sygnum et UBS : premier paiement interbancaire juridiquement contraignant en dépôts tokenisés sur Ethereum public. Les tokens déclenchaient des paiements conventionnels hors chaîne. Pas d'introduction immédiate prévue. — [ASB, rapport PoC (PDF)](https://www.swissbanking.ch/_Resources/Persistent/7/9/e/a/79ea024daa9834c99fc299db5d5f69c4317525a2/20250916_Ergebnisbericht%20PoC%20Deposit%20Token_EN_FINAL.pdf) ; [Sygnum](https://www.sygnum.com/news/milestone-for-the-swiss-financial-center-deposit-token-proof-of-concept-successfully-completed/) ; [Ledger Insights](https://www.ledgerinsights.com/ubs-swiss-banks-complete-tokenized-deposit-trial-on-public-blockchain/)

**Suisse, stablecoins.**
- Guidance FINMA 06/2024 : un stablecoin peut relever des dépôts bancaires, avec licence bancaire ou garantie bancaire exigée. — [Deloitte CH](https://www.deloitte.com/ch/en/Industries/financial-services/blogs/regulatory-update-new-rules-payment-tokens.html) ; [find.swiss](https://find.swiss/find-library/articles/state-of-stablecoins-in-switzerland)
- Consultation du Conseil fédéral du 22 octobre 2025 au 6 février 2026 : nouvelle licence d'« établissement d'instruments de paiement », seul habilité à émettre des stablecoins, avec couverture en actifs liquides de haute qualité et droit de remboursement au pair. Message au Parlement au plus tôt au second semestre 2026. — [SIF, fiche stablecoins (PDF)](https://www.sif.admin.ch/dam/en/sd-web/dUviLBIEgTjT/Faktenblatt%20Stablecoins%20EN.pdf) ; [MLL News](https://www.mll-news.com/switzerlands-next-step-in-fintech-and-crypto-regulation-new-categories-for-payment-instrument-institutions-and-crypto-institutions/?lang=en)

**Zone euro, Pontes et Appia.**
- Programme à deux voies de la BCE. Pontes (court terme) relie les plateformes DLT aux services TARGET pour régler en monnaie banque centrale. Appia (long terme) prépare l'écosystème cible. — [Banque de France](https://www.banque-france.fr/en/press-release/ecb-commits-distributed-ledger-technology-settlement-plans-dual-track-strategy) ; [FIA](https://www.fia.org/marketvoice/articles/all-roads-lead-dlt-ecb-advances-pontes-and-appia)
- Pontes est en service depuis le **21 septembre 2026**, réservé aux établissements de crédit, infrastructures de marché et banques centrales. Horaires : 8h–16h CET les jours ouvrés. La finalité du cash reste ancrée dans T2. Premiers participants cités : Deutsche Bank, Santander, Clearstream, SG, DZ Bank, KfW, etc. — [The Paypers](https://thepaypers.com/fintech/news/ecb-launches-pontes-to-link-dlt-platforms-with-target-services) ; [CoinDesk, 21 sept. 2026](https://www.coindesk.com/business/2026/09/21/ecb-deploys-pontes-platform-to-settle-wholesale-tokenized-assets-in-central-bank-money) — *sources de presse, communiqué BCE primaire non consulté.*
- Travaux exploratoires 2024 de l'Eurosystème : 64 participants, plus de 50 essais. — [FIA](https://www.fia.org/marketvoice/articles/all-roads-lead-dlt-ecb-advances-pontes-and-appia)

**Autres options.**
- Fnality : système sterling live (voir section 3). Les systèmes USD et EUR ne sont pas confirmés live dans les sources trouvées. — [Fnality](https://fnality.com/news/fnality-commences-initial-phase-of-sterling-payment-operations-in-a-world-first)
- Kinexys : paiements en dépôts tokenisés JP Morgan, dont le règlement FX on-chain USD / EUR. — [CoinDesk, nov. 2024](https://www.coindesk.com/business/2024/11/06/jpmorgan-renames-blockchain-platform-to-kynexis-to-add-on-chain-fx-settlement-for-usd-eur)

### Inferences
- **Dépendance au choix d'architecture.**
  - Le cash hors chaîne (SIC, TARGET2) avec PvC ou DvP séquencé est **neutre** vis-à-vis de l'architecture. Une base centrale fait la même chose qu'une DLT, et c'est ce que fait Vestima.
  - Le DvP atomique exige que la part de fonds existe sous forme de token sur une DLT compatible avec la jambe cash : SDX pour la wCBDC CHF, Ethereum pour le lien BX Digital–SIC, plateformes raccordées à Pontes pour l'EUR. Ce bénéfice est donc **conditionnel** à une DLT *et* à une connexion à l'une de ces infrastructures [inférence].
- **Pour des ordres sur fonds réglés à VNI J+1 / J+2**, le risque de règlement que le DvP atomique supprime est faible au regard de la complexité ajoutée [HYPOTHÈSE à confirmer avec `expert-operations-fonds`].
- **Position.** Phase 1 : cash hors chaîne via SIC (CHF) / T2 (EUR) avec PvC. Préparer un « connecteur » vers le lien SIC de BX Digital ou vers Pontes sans en faire un prérequis.

### Gaps
- Stablecoins EUR sous MiCA (EMT) utilisables pour le règlement wholesale : non couverts ici, faute de recherche disponible.
- Date de fin et conditions d'accès exactes à Helvetia III pour un nouvel acteur (non-SDX) : non trouvées.
- Statut au 1er octobre 2026 du projet de loi suisse sur les stablecoins après la consultation : non trouvé.

---

## 6. Intégration : ISO 20022 / SWIFT vers et depuis une DLT, et minimum à opérer côté banque

### Takeaway
Les banques ne veulent pas opérer de nœud. Les modèles qui marchent offrent un accès par API ou par messages ISO 20022 existants, avec un **nœud hébergé par l'opérateur** (Ion, phase 1) ou un adaptateur (IBM pour le registre partagé Swift). Le minimum réaliste pour une banque est une passerelle de messages ou d'API. Elle n'aura une clé propre (HSM) que si le statut juridique exige qu'elle signe elle-même ses transferts (art. 973d, pouvoir de disposer) [HYPOTHÈSE].

### Cited Findings
- **DTCC Ion.** Phase 1 : transactions initiées par les participants pilotes via des **nœuds clients hébergés par DTCC**. L'accès par nœud hébergé chez le client est prévu pour des phases ultérieures. — [Securities Finance Times](https://www.securitiesfinancetimes.com/securitieslendingnews/industryarticle.php?article_id=225014)
- **Swift.** La conception d'un registre partagé basé sur blockchain pour l'interopérabilité des dépôts tokenisés est achevée ; la première itération est en construction (annonce Sibos 2025). — [Swift](https://www.swift.com/news-events/news/swifts-blockchain-based-shared-ledger-progresses-mvp-implementation)
- Ce registre Swift tourne sur Hyperledger Besu (Consensys) : smart contracts alignés sur ISO 20022, fonctionnement 24h/24 et 7j/7. — [CCN](https://www.ccn.com/education/crypto/swift-shared-ledger-token-agnostic-rival-xrpl-hedera-hashgraph-bitcoin/) *(source secondaire)*
- IBM (24 sept. 2026) : son adaptateur permet aux banques de rejoindre ce registre avec **les messages ISO 20022 que leurs systèmes produisent déjà**. — [Tech Times](https://www.techtimes.com/articles/328043/20260925/ibm-adapter-lets-banks-join-swift-blockchain-using-existing-payment-messages.htm) *(source secondaire)*
- **Calastone.** Les ordres passés on-chain sont traités par le système central Calastone : compatibilité avec les opérations de fonds traditionnelles. — [Calastone](https://www.calastone.com/tokenised-distribution/)
- **Vestima** offre un jeu unique de rapports et de moyens de connexion pour tous les types de fonds. — [Clearstream Vestima](https://www.clearstream.com/clearstream-en/funds-services/fund-centre/execution/vestima)
- **Paladin.** Le nœud détient les clés des utilisateurs et génère leurs preuves ZK : la garde des clés est déléguée au nœud. — [Zeto / Paladin](https://github.com/nandanito/evm-confidential-positions) *(dépôt tiers)* ; [LFDT, Paladin](https://www.lfdecentralizedtrust.org/projects/paladin)

### Inferences
- **Minimum côté banque, par ordre croissant d'effort** [HYPOTHÈSE] :
  1. messages ISO 20022 / SWIFT FIN (setr.*) ou API REST vers la plateforme (identique pour base centrale ou hybride) ;
  2. même chose, avec un nœud DLT hébergé par la plateforme au nom de la banque (modèle Ion) ;
  3. clé de signature propre en HSM, avec un nœud hébergé ;
  4. nœud opéré par la banque.

  Seuls les niveaux 3 et 4 apportent une confiance « non centralisée » réelle. Le niveau 2 n'est qu'une base centrale déguisée.
- **Si le nœud de la banque est hébergé par la plateforme**, l'argument « pas de tiers de confiance » tombe. On retombe sur Wüst & Gervais : base centrale, ou hybride avec preuves vérifiables.
- **Reporting.** La génération de rapports (positions, transactions, commissions) est plus simple depuis une base centrale relationnelle. Une DLT exige de toute façon une base de requêtes « off-ledger » par partie [HYPOTHÈSE].

### Gaps
- **Normes ISO 20022 setr / semt** (ordres sur fonds) utilisées concrètement par Iznes ou FundsDLT : pas de détail public trouvé.
- **Coût d'onboarding d'une banque** sur Canton, Corda ou Fabric : non trouvé.

---

## 7. Designs hybrides : opérateur central + ancrage de hashes, ou DLT à quelques nœuds avec notaire / opérateur central

### Takeaway
Deux familles se distinguent. Le spectre de confiance va de la base centrale à la DLT multi-opérateurs, et les hybrides couvrent l'essentiel du gain de confiance pour une fraction du coût [HYPOTHÈSE].
- **Hybride A, base centrale vérifiable.** L'opérateur tient le golden record dans une base à tables ledger. Il publie ou ancre périodiquement les condensats (stockage immuable, registre confidentiel ou blockchain) et remet à chaque partie des preuves sur ses propres données. Coût proche de la base centrale ; confiance « détecter, pas empêcher ».
- **Hybride B, DLT à opérateur central.** Une DLT à permission (Canton, Corda, Fabric) avec un nombre réduit de nœuds, dont certains hébergés par l'opérateur, et un séquenceur, notaire ou ordering service opéré par la plateforme. C'est le modèle de la plupart des succès (DLR, Ion, HQLAx, FundsDLT / Vestima).

### Cited Findings
- **Hybride A.** Dans Azure SQL ledger, les condensats sont stockés hors de la base, dans un stockage immuable ou Azure Confidential Ledger, et servent à vérifier l'absence d'altération. — [Microsoft Learn](https://learn.microsoft.com/en-us/sql/relational-databases/security/ledger/ledger-overview?view=sql-server-ver17)
- **Risque de l'hybride A propriétaire.** Amazon QLDB (base ledger centralisée) a été arrêtée en juillet 2025, forçant des migrations. — [InfoQ](https://www.infoq.com/news/2024/07/aws-kill-qldb/)
- **Hybride B.**
  - Broadridge DLR : opérateur unique (Broadridge) sur Canton. — [Broadridge](https://www.broadridge.com/capability/middle-and-back-office-solutions/post-trade-processing/distributed-ledger-repo-solutions)
  - DTCC Ion : nœuds hébergés par DTCC en phase 1. — [SFT](https://www.securitiesfinancetimes.com/securitieslendingnews/industryarticle.php?article_id=225014)
  - FundsDLT : adossé à Vestima. — [Clearstream](https://www.clearstream.com/clearstream-en/newsroom/240110-3818150)
  - HQLAx : actifs représentés sans tokenisation, nature juridique inchangée. — [Markets Media](https://www.marketsmedia.com/dlt-enables-collateral-mobility/)
- **Rôle du notaire (Corda).** Un notaire unique, opéré par la plateforme, assure l'anti double-dépense. Non validant, il ne voit pas le contenu. — [R3 docs](https://docs.r3.com/en/platform/corda/4.8/enterprise/key-concepts-notaries.html)
- **Rôle de l'opérateur d'infrastructure (Canton).** Il ne voit que les métadonnées d'ordonnancement. — [Canton Network](https://www.canton.network/blog/how-canton-network-delivers-institutional-grade-privacy)
- **Modèle luxembourgeois.** Un agent de contrôle régulé suit la chaîne de détention via DLT ; les comptes sont chez des dépositaires différents, avec réconciliation assurée. — [Arendt](https://www.arendt.com/news-insights/news/luxembourgs-blockchain-law-iv-groundbreaking-new-options-for-issuing-dlt-securities/)
- **Couche tokenisée au-dessus d'un hub central.** Calastone tokenise sans changer la structure du fonds. — [Calastone](https://www.calastone.com/tokenised-distribution/)

### Inferences
| Design | Coût build | Coût run / partie | Confiance apportée | Où ça a marché |
|---|---|---|---|---|
| Base centrale simple | Faible [HYPOTHÈSE] | Très faible (API) [HYPOTHÈSE] | Confiance totale dans l'opérateur | Vestima, Calastone ([Clearstream](https://www.clearstream.com/clearstream-en/funds-services/fund-centre/execution/vestima)) |
| Hybride A : base centrale + tables ledger + condensats ancrés ou remis aux parties | Faible à moyen [HYPOTHÈSE] | Très faible + vérification des preuves [HYPOTHÈSE] | Altération *détectable* par chaque partie ; pas d'empêchement | Fonction disponible ([Microsoft](https://learn.microsoft.com/en-us/sql/relational-databases/security/ledger/ledger-overview?view=sql-server-ver17)) ; pas de cas fonds trouvé |
| Hybride B : DLT à permission, opérateur central (séquenceur / notaire, nœuds hébergés) | Moyen à élevé [HYPOTHÈSE] | Faible si hébergé, moyen si la partie tient ses clés [HYPOTHÈSE] | Signatures des parties, copies synchronisées ; opérateur toujours critique | DLR, Ion, FundsDLT, HQLAx (sources section 3) |
| DLT multi-opérateurs (chaque partie opère son nœud) | Élevé | Élevé (nœud, HSM, mises à jour, astreinte) [HYPOTHÈSE] | Maximale : aucun acteur unique ne peut écrire seul | Pas de succès « fonds » trouvé ; échecs de consortiums ([TradeLens](https://www.supplychaindive.com/news/Maersk-IBM-shut-down-TradeLens/637580/), [we.trade](https://www.techmonitor.ai/technology/emerging-technology/ibm-backed-blockchain-platform-we-trade-shutting-down)) |

- L'ancrage de hashes sur une blockchain *publique* ajoute une preuve d'horodatage indépendante pour un coût marginal faible. Il ne règle ni la confidentialité ni le pouvoir de disposer du créancier [HYPOTHÈSE].
- L'hybride B est le seul design qui ouvre le DvP atomique avec du cash tokenisé *et* qui se rapproche des exigences de l'art. 973d, si les parties signent avec leurs propres clés [inférence].

### Gaps
- Aucun cas public trouvé de registre de parts de fonds en base centrale avec ancrage de hashes. L'hybride A reste théorique pour les fonds.
- Pas de comparatif de coût publié entre hybride A et hybride B.

---

## 8. Tableau de décision et position recommandée pour FundChain

### Takeaway
**Position : pour le périmètre FundChain (Suisse d'abord, trois types de parties, plateforme opératrice), une DLT ne s'impose pas par défaut.** La recommandation est un **hybride « base centrale d'abord, prêt pour le token »**. Le cœur est un moteur d'ordres et un registre central avec tables ledger, preuves remises à chaque partie, API et ISO 20022, cash hors chaîne via SIC avec PvC. Un module DLT à permission (Canton de préférence pour sa confidentialité par sous-transaction ; Corda en alternative) ne s'active que pour les fonds qui veulent des parts en droits-valeurs inscrits ou un DvP atomique avec du cash tokenisé. La DLT apporte une vraie valeur **seulement si au moins l'une de ces conditions est remplie** :
1. les parts doivent être des **droits-valeurs inscrits** (art. 973d CO) et le juriste juge une base centrale insuffisante ;
2. un **DvP atomique avec cash tokenisé** est réellement accessible et utilisé (lien SIC de BX Digital, Helvetia sur SDX, Pontes pour l'EUR) ;
3. **plusieurs agents de transfert ou plateformes concurrents** refusent de confier leur registre à un opérateur unique ;
4. la distribution doit atteindre des **canaux on-chain** (type Calastone sur Ethereum / Polygon / Canton).

Sans ces conditions, **la base centrale gagne** sur le coût, le délai de mise sur le marché, la confidentialité et l'adoption.

### Cited Findings
Synthèse des sources des sections 1 à 7. Les sources clés par critère sont reprises dans le tableau ci-dessous.
- Règle de décision « TTP acceptable → pas de blockchain ». — [Wüst & Gervais](https://www.law.berkeley.edu/wp-content/uploads/2018/08/Do-you-need-a-Blockchain-Karl-Wust-and-Arthur-Gervais.pdf)
- Bénéfices non prouvés ou non propres à la tokenisation. — [FSB 2024](https://www.fsb.org/uploads/P221024-2.pdf)
- Distribution toujours sur infrastructures conventionnelles. — [IOSCO 2025](https://www.iosco.org/library/pubdocs/pdf/IOSCOPD809.pdf)
- Exigences du registre de droits-valeurs. — [Art. 973d CO](https://www.droit-bilingue.ch/fr-de/2/22/220-973d-1383.html)

### Inferences

#### Tableau de décision (++ très favorable, + favorable, 0 neutre, − défavorable, −− très défavorable)

| Critère | Base centrale | DLT à permission (multi-opérateurs) | Hybride (central vérifiable + module DLT optionnel) |
|---|---|---|---|
| **Réconciliation inter-parties supprimée** | **+** si toutes les parties acceptent le golden record, ce que Vestima fait déjà ([Clearstream](https://www.clearstream.com/clearstream-en/funds-services/fund-centre/execution/vestima)) ; il reste un rapprochement interne de chaque partie [HYPOTHÈSE] | **+ / ++** seulement si la DLT est le registre faisant foi ; sinon, couche en plus ([DTCC Ion](https://www.dtcc.com/news/2022/august/22/project-ion)) | **+** golden record central + preuves vérifiables [HYPOTHÈSE] |
| **Coût de construction** | **++** technologie standard [HYPOTHÈSE] | **−−** risque d'échec et de perte (ASX : 245–255 M AUD, [ASX](https://www.asx.com.au/content/dam/asx/about/media-releases/2022/60-17-november-2022-CHESS-Replacement-ASX-reassessing-financial-derecognition_.pdf)) ; consortiums en faillite ([GTR](https://www.gtreview.com/news/top-stories/marco-polo-brings-in-liquidators-as-funds-run-dry/)) | **+** cœur standard ; module DLT limité [HYPOTHÈSE] |
| **Coût de fonctionnement par partie (banque, TA)** | **++** connexion API / SWIFT seulement [HYPOTHÈSE] | **−** nœud, HSM, mises à jour coordonnées ; atténué par l'hébergement par l'opérateur ([SFT / Ion](https://www.securitiesfinancetimes.com/securitieslendingnews/industryarticle.php?article_id=225014)) | **+** API par défaut ; clé ou nœud seulement pour les fonds en droits-valeurs inscrits [HYPOTHÈSE] |
| **Confidentialité entre banques concurrentes** | **++** contrôle d'accès mature [HYPOTHÈSE] | **− à +** selon la plateforme : Fabric PDC laisse fuiter hashes et métadonnées ([Fabric](https://hyperledger-fabric.readthedocs.io/en/latest/private-data/private-data.html)) ; Canton bon ([Canton](https://www.canton.network/blog/how-canton-network-delivers-institutional-grade-privacy)) ; Besu / Tessera retiré ([Besu](https://besu.hyperledger.org/en/stable/private-networks/concepts/privacy/private-transactions)) | **+** contrôle d'accès central ; Canton pour le module DLT |
| **Reconnaissance juridique comme registre (CH)** | **− / ?** vérification « sans intervention d'un tiers » difficile si l'opérateur est seul ([art. 973d](https://www.droit-bilingue.ch/fr-de/2/22/220-973d-1383.html)) [HYPOTHÈSE juridique] | **++** la gestion multi-parties est l'exemple donné par la loi ([art. 973d](https://www.droit-bilingue.ch/fr-de/2/22/220-973d-1383.html)) ; LU Blockchain IV ([Arendt](https://www.arendt.com/news-insights/news/luxembourgs-blockchain-law-iv-groundbreaking-new-options-for-issuing-dlt-securities/)) ; FR DEEP ([BdF](https://www.banque-france.fr/system/files/2023-10/rapport_39_f.pdf)) | **+** via le module DLT pour les fonds concernés ; ailleurs, inutile si les parts ne sont pas des droits-valeurs inscrits [HYPOTHÈSE juridique] |
| **Friction d'adoption** | **+** modèle connu des banques (hubs de fonds, ISO 20022) ([Vestima](https://www.clearstream.com/clearstream-en/funds-services/fund-centre/execution/vestima)) ; mais concurrence frontale avec les hubs existants | **−−** adoption limitée en distribution ([IOSCO](https://www.iosco.org/library/pubdocs/pdf/IOSCOPD809.pdf)) ; régime pilote UE : 3 infrastructures ([Goodwin](https://www.goodwinlaw.com/en/insights/publications/2025/07/insights-otherindustries-reg-dlt-pilot-regime-esma-report-highlights)) ; échecs de consortiums ([TradeLens](https://www.supplychaindive.com/news/Maersk-IBM-shut-down-TradeLens/637580/)) | **+** même entrée que la base centrale ; DLT optionnelle |
| **Délai de mise sur le marché** | **++** [HYPOTHÈSE] | **−−** ASX : projet arrêté à 63 % ([Euromoney](https://www.euromoney.com/pdf/asx-chess-replacement-application-delivery-review-2022-pdf/)) ; Ion en parallèle depuis 2022 ([DTCC](https://www.dtcc.com/news/2022/august/22/project-ion)) | **+** [HYPOTHÈSE] |
| **Résilience / point unique de défaillance** | **−** point unique technique et organisationnel ; atténué par haute disponibilité et reprise après sinistre [HYPOTHÈSE] | **+** données répliquées ; mais ordering service, notaire ou séquenceur restent critiques ([R3](https://docs.r3.com/en/platform/corda/4.8/enterprise/key-concepts-notaries.html)) ; résilience réelle seulement si les opérateurs sont indépendants [HYPOTHÈSE] | **0 / +** opérateur critique ; chaque partie garde des preuves et une copie de ses données [HYPOTHÈSE] |
| **Programmabilité (cycle de vie d'ordre, commissions de distribution)** | **+** moteur de règles central équivalent [HYPOTHÈSE] | **+** smart contracts ; mais trop de logique on-ledger a pénalisé ASX ([iTnews](https://www.itnews.com.au/news/accenture-report-could-end-asxs-blockchain-vision-587915)) | **+** |
| **DvP atomique avec cash tokenisé** | **−−** impossible (DvP séquencé via SIC / T2 seulement) | **++** si cash disponible sur une DLT compatible (Helvetia / SDX, BX Digital–SIC, Pontes) ([BNS](https://www.snb.ch/en/publications/communication/press-releases/2025/pre_20250630) ; [The Paypers](https://thepaypers.com/fintech/news/ecb-launches-pontes-to-link-dlt-platforms-with-target-services)) | **+** via le module DLT, quand l'accès existe |
| **Pérennité / dépendance fournisseur** | **+** SQL standard ; prudence sur les bases ledger propriétaires (QLDB arrêtée, [InfoQ](https://www.infoq.com/news/2024/07/aws-kill-qldb/)) | **−** fonctionnalités retirées (Besu / Tessera, [LFDT](https://www.lfdecentralizedtrust.org/blog/sunsetting-tessera-and-simplifying-hyperledger-besu)) ; langages et stacks propriétaires (Daml, Corda) [HYPOTHÈSE] | **0** dépendance limitée au module |
| **Score global pour le cas FundChain, phase 1** | **Seule en tête sur 5 critères sur 11** (build, run, confidentialité, délai, pérennité) et à égalité en tête sur 2 (adoption, programmabilité) ; dernière sur le statut juridique et le DvP atomique | En tête sur 3 critères (réconciliation, statut juridique, DvP atomique), les deux derniers conditionnels ; dernière sur build, run, adoption, délai et pérennité | **Meilleur compromis** : jamais dernière, et garde l'option DLT |

#### Position recommandée
1. **Architecture cible de phase 1.** Hybride « base centrale d'abord » :
   - moteur d'ordres et registre central à tables ledger (append-only, chaîne de hashes) ;
   - accusés de réception signés et preuves par partie ;
   - API + ISO 20022 (setr) ;
   - cash hors chaîne SIC / T2 avec PvC ;
   - reporting depuis la base centrale.
2. **Module DLT optionnel** (Canton conseillé [HYPOTHÈSE : à confirmer par l'architecte], nœuds hébergés par la plateforme, clés des parties en HSM), activé seulement pour :
   - (a) des fonds émis en droits-valeurs inscrits ;
   - (b) des flux avec DvP atomique vers BX Digital–SIC, Helvetia ou Pontes ;
   - (c) la distribution vers des canaux on-chain.
3. **Message honnête pour le pitch.** « Moins de réconciliation que Clearstream » n'est pas un avantage propre à la blockchain : Vestima est déjà un point d'entrée unique. La différenciation crédible repose sur trois éléments :
   - la capacité à émettre et tenir des parts en droits-valeurs inscrits conformes à l'art. 973d ;
   - le DvP en monnaie banque centrale tokenisée quand il deviendra accessible ;
   - un coût opérationnel inférieur, qui reste à démontrer [HYPOTHÈSE à challenger en phase 4].
4. **Ce qui ferait basculer vers une DLT multi-opérateurs** : un consortium de plusieurs TA ou directions de fonds suisses *et* de plusieurs banques qui refusent un opérateur unique *et* acceptent d'opérer leurs nœuds. Aucun cas de ce type n'a réussi dans les fonds selon les sources trouvées.

### Gaps
- Les cotations du tableau marquées [HYPOTHÈSE] (coûts de build et de run, délais) demandent un chiffrage en phase 3.
- La recevabilité d'une base centrale comme registre de droits-valeurs (art. 973d) doit être tranchée par `juriste-reglementaire`. C'est le critère pivot.
- Volumétrie réelle des ordres sur fonds suisses et besoin réel de DvP atomique (vs règlement à VNI J+n) : à fournir par `expert-operations-fonds`.
- Sources non ouvertes intégralement (blocage du proxy) : relire les documents primaires (rapport Accenture/ASX, communiqués BNS et BCE, texte Fedlex de l'art. 973d) avant toute citation dans un livrable.
