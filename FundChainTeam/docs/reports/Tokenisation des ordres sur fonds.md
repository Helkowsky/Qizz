# Supprimer un registre, pas ajouter un token

*Rapport de recherche FundChainTeam. Sujet : une plateforme point d'entrée unique pour les ordres sur fonds (souscriptions, rachats, transferts), adossée à un registre partagé entre la banque distributrice, le fonds (ou son agent de transfert ou sa banque dépositaire) et la plateforme. Priorité aux fonds suisses, comparaison avec le Luxembourg et l'Irlande (fonds et ETF). État au 1er octobre 2026.*

## Résumé exécutif

**La valeur ajoutée existe, mais elle est plus étroite que la promesse de départ.** Le « point d'entrée unique » existe déjà : Clearstream Vestima en est un pour plus de 245 000 fonds, avec règlement et conservation intégrés ([Clearstream](https://www.clearstream.com/clearstream-en/funds-services/fund-centre/execution/vestima/vestima-service-model-1302278)). Les acteurs en place ont aussi absorbé la blockchain : FundsDLT appartient à Deutsche Börse ([Clearstream](https://www.clearstream.com/clearstream-en/newsroom/240110-3818150)), Calastone à SS&C ([Calastone](https://www.calastone.com/news/ssc-technologies-completes-acquisition-of-calastone/)), et Allfunds, avec sa filiale blockchain, doit passer chez Deutsche Börse (closing attendu au S1 2027) ([Deutsche Börse](https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Deutsche-B-rse-Group-s-Recommended-Acquisition-of-Allfunds-Shareholder-Approvals-of-Allfunds-Obtained-5008700)).

La seule valeur qui différencie un nouvel entrant est de **supprimer des registres**. Aujourd'hui, 3 à 7 livres de positions se réconcilient le long de la chaîne. L'idée est de les remplacer par **un seul registre juridique partagé à trois** [HYPOTHÈSE de modélisation, voir §3].

L'agent de transfert (TA) n'est jamais le fonds. Au Luxembourg et en Irlande, c'est un prestataire nommé par le fonds. En Suisse, il n'existe pas : la banque dépositaire émet et rachète les parts, qui se règlent comme des titres intermédiés chez SIX SIS ([FINMA](https://www.finma.ch/en/authorisation/asset-management/custodian-banks-of-collective-investment-schemes/)).

Les économies publiées sont surtout des revendications de fournisseurs. Les chiffres démontrés décrivent une chaîne déjà automatisée à 93 % en bout de chaîne (2020), mais chère hors traitement automatisé (STP).

**Position.** Ne pas attaquer les fonds ni les ETF luxembourgeois et irlandais. **Premier couple recommandé : Suisse × nouveau fonds réservé aux investisseurs qualifiés (L-QIF, stratégie alternative ou marchés privés), dont les parts sont émises en droits-valeurs inscrits.** Le pilote réunit une direction de fonds, sa banque dépositaire et deux à trois banques distributrices. Le règlement espèces reste en CHF via SIC. L'architecture est hybride : base centrale pour les ordres et le reporting, blockchain (DLT) à permission pour le seul registre juridique.

**La promesse d'un « coût total inférieur à Clearstream / Euroclear » n'est pas démontrée.** Le go dépend de trois conditions : des engagements écrits de partenaires, une validation juridique et FINMA du registre, et le chiffrage du coût interne de réconciliation des banques.

| Indicateur | Valeur | Statut | Source |
|---|---|---|---|
| Fonds autorisés en Suisse (suisses + étrangers) | 1 740 Md CHF fin 2025 ; 1 984 fonds suisses contre 8 611 étrangers approuvés | Démontré (statistique, régulateur) | [finews / AMAS](https://www.finews.com/news/english-news/67313-amas-fondsmarket-q1-2026) ; [FINMA](https://report.finma.ch/2025/en/market-developments/market-developments-in-the-asset-management-industry) |
| Parts de fonds conservées par les deux ICSD | Clearstream ≈ 4 000 Md€ (moyenne S1 2025) ; Euroclear 3 900 Md€ (fin 2025) | Publié par les acteurs | [Deutsche Börse](https://www.deutsche-boerse.com/resource/blob/4500802/618b5afd2cc52e650ca5bfbe0cbc92f6/data/gdb-quartalsbericht-q2-2025_en.pdf) ; [Euroclear](https://www.euroclear.com/newsandinsights/en/press/2026/mr-06-euroclear-delivers-strong-2025-results.html) |
| Concentration du marché | Allfunds racheté par Deutsche Börse (5,3 Md€, closing attendu au S1 2027) ; Calastone racheté par SS&C (oct. 2025) | Démontré (communiqués) | [Bloomberg](https://www.bloomberg.com/news/articles/2026-01-21/deutsche-boerse-reaches-5-3-billion-buyout-deal-of-allfunds) ; [Calastone](https://www.calastone.com/news/ssc-technologies-completes-acquisition-of-calastone/) |
| Prix d'un ordre chez SIX SIS (Global Funds) | 55 CHF non STP ; 350 CHF pour un hedge fund ; minimum de 5 000 CHF/mois | Grille publiée, à revérifier dans le PDF | [SIX SIS](https://www.six-group.com/dam/download/securities-services/custody-and-settlement/info-center/clients/pricing/scu-fees-260101-international-en.pdf) |
| Prix d'un ordre sur un réseau de messagerie | 1,50 à 2,70 £ (Calastone) | Source secondaire non datée | [Business Model Zoo](https://www.businessmodelzoo.com/exemplars/calastone/) |
| Automatisation des ordres reçus par les TA LU/IE | 93,2 % (T4 2020) ; 67 % des firmes utilisaient encore un fax (2022) | Démontré mais ancien | [EFAMA-Swift](https://www.efama.org/index.php/newsroom/news/funds-processing-automation-rises-new-heights-new-joint-report-efama-and-swift-shows) ; [Funds Europe](https://www.funds-europe.com/september-2022/technology-dealing-with-fax-offenders) |
| Intermédiaires par ordre (min / typique / max) | CH 1 / 2–3 / 6 ; LU-IE 0 / 2–3 / 5–6 | [HYPOTHÈSE] : modèle bâti sur des faits sourcés (§3) | — |
| Livres de positions à réconcilier | 3 à 7 aujourd'hui, 1 dans la cible | [HYPOTHÈSE] | — |
| Économies revendiquées grâce à la tokenisation | −23 % des coûts d'exploitation, soit 135 Md$/an (Calastone) ; jusqu'à −50 % (Digital TA de Clearstream) | Revendiqué par des fournisseurs ; incohérence interne chez Calastone | [Calastone](https://www.calastone.com/insights/white-paper-decoding-the-economics-of-tokenisation-transforming-cost-dynamics-in-asset-management/) ; [Clearstream](https://www.clearstream.com/clearstream-en/newsroom/260622-5343058) |
| Registre partagé de parts le plus abouti | Iznes : 32 Md€, ≈ 70 gérants, ≈ 7 200 opérations/mois (mai 2026) | Publié (presse) | [Boursorama](https://www.boursorama.com/bourse/actualites/iznes-franchit-le-seuil-des-32-milliards-d-euros-d-actifs-tokenises-446b40948a317fd3cec78893ddd2abd3) |
| Fonds de droit suisse émis en droits-valeurs inscrits | Aucun identifié publiquement | Constat de recherche | §1.5 |
| Économie maximale en Suisse sur le poste ordres + registre | 90 à 220 M CHF/an à 100 % d'adoption | [HYPOTHÈSE] : calcul (§4.1) | — |

> **Limites de méthode.** Toutes les sources ont été consultées **via les extraits renvoyés par les moteurs de recherche**. Le proxy réseau de la session bloquait l'ouverture directe des pages et des PDF (clearstream.com, euroclear.com, six-group.com, efama.org, cssf.lu, centralbank.ie, fedlex.admin.ch, etc.). **Le texte intégral n'a donc pas pu être lu.** Certains extraits fusionnaient plusieurs documents, ce qui rend incertaine l'attribution exacte de quelques phrases. Le budget de recherche s'est épuisé avant que certains points soient couverts : montants de la grille Clearstream, fiche tarifaire FundSettle, statistiques STP suisses. Quelques textes légaux (art. 973d CO, art. 27 et 73 LPCC, LBA, lois Blockchain I à III) sont cités de connaissance, sans relecture en session. Les chiffres de fournisseurs sont biaisés par construction. **Les chiffres clés doivent être revérifiés sur les sources primaires avant tout usage externe** (pitch, comité) ; la liste figure au §7.2. Aucune donnée interne d'un employeur n'a été utilisée. Dans les tableaux et les schémas, **[H] abrège [HYPOTHÈSE]**.

---

## 1. Acheter un fonds aujourd'hui : un ordre, plusieurs registres, deux blocs dominants

### 1.1 Le même ordre suit deux logiques, l'une suisse, l'autre luxembourgeoise et irlandaise

**Au Luxembourg et en Irlande**, l'ordre passe par un hub. Le client donne son ordre à sa banque, qui l'agrège et l'envoie à un hub (Vestima, FundsPlace, Allfunds ou Calastone) en ISO 20022 (setr.010 pour une souscription, setr.004 pour un rachat, setr.013 pour un échange). Le hub contrôle l'éligibilité et le cut-off, puis transmet l'ordre à l'agent de transfert. Celui-ci exécute l'ordre à la prochaine valeur nette d'inventaire (VNI) et le confirme. Le hub génère ensuite les instructions de règlement, règle les espèces et les parts sur **son propre compte au registre du TA**, puis crédite la banque, qui crédite son client ([Clearstream, Vestima Service Model](https://www.clearstream.com/clearstream-en/funds-services/fund-centre/execution/vestima/vestima-service-model-1302278) ; [guide ISO 20022 Vestima](https://www.luxcsd.com/resource/blob/1317192/dbdc0480b0d71f37ab27a62a5f416c89/vestima-swift-iso-20022-user-guide-data.pdf) ; [Clearstream, Transfer services](https://www.clearstream.com/clearstream-en/funds-services/fund-centre/execution/vestima/distributors-and-fund-platforms/settlement-and-custody/transfer-services)).

Trois registres s'empilent donc : celui du TA, celui du hub et celui de la banque. Le hub est inscrit comme mandataire (nominee) : **le fonds ne voit pas l'investisseur final**. Clearstream le reconnaît lui-même : la chaîne de distribution compte « de nombreux intermédiaires, chacun avec ses propres silos technologiques », qui ajoutent coûts et inefficacités ([Clearstream, sept. 2025](https://www.clearstream.com/clearstream-en/250925-4962862)).

Un transfert de parts entre dépositaires passe lui aussi par une ré-immatriculation dans le registre du TA, et Clearstream en fait un service dédié ([Clearstream, Transfer services](https://www.clearstream.com/clearstream-en/funds-services/fund-centre/execution/vestima/distributors-and-fund-platforms/settlement-and-custody/transfer-services)).

**En Suisse**, pour un fonds contractuel, la **banque dépositaire** reçoit les souscriptions et les rachats chaque jour bancaire jusqu'à l'heure fixée au prospectus. La direction de fonds calcule la VNI au plus tôt le jour suivant (forward pricing). Les parts sont livrées par inscription en compte, le clearing passant par **SIX SIS** ([FINMA](https://www.finma.ch/en/authorisation/asset-management/custodian-banks-of-collective-investment-schemes/) ; [prospectus ZKB Gold ETF](https://www.swissfunddata.ch/sfdpub/docs/fpd-70501-20241218-de.pdf)). Par exemple, un ordre reçu par la banque dépositaire avant 13h00 est réglé sur la VNI du jour ouvré suivant ([prospectus UBS (CH) Vitainvest](https://www.swissfunddata.ch/sfdpub/docs/fpd-8166_05_01-20241113-en.pdf)). SIX SIS tient le registre principal des titres intermédiés non certificatés ; la propriété se transfère par débit et crédit des comptes des participants ([SIX SIS, conditions générales](https://www.six-group.com/dam/download/securities-services/custody-and-settlement/info-center/clients/gtc/mg-general-agb-220201.pdf)).

Le marché suisse sépare donc deux circuits : l'ordre, adressé à la banque dépositaire, et la livraison des parts, faite comme pour des titres chez SIX SIS. Cette séparation crée un point de réconciliation propre au marché suisse [HYPOTHÈSE fondée sur les prospectus cités]. SECOM, le système de SIX SIS, règle déjà en temps réel ([SIX SIS](https://www.six-group.com/en/products-services/securities-services/settlement-and-custody/info-center/about-six-sis-ag.html)) : **le temps réel n'est pas un argument en Suisse**. La friction se situe en amont (ordre, cut-off, confirmation, VNI) et dans la réconciliation entre la banque, la banque dépositaire et SIX SIS [HYPOTHÈSE].

**Pour un ETF, l'investisseur n'adresse pas d'ordre au fonds** : il achète en bourse. Seuls les participants autorisés (AP) créent ou rachètent des unités de création auprès du fonds, en nature ou en espèces ([Optiver](https://www.optiver.com/explainers/etf-creation-redemption-and-authorised-participants/)). Les ETF irlandais suivent le modèle ICSD : un certificat global est détenu par un dépositaire commun, et le dépositaire central (CSD) émetteur est Euroclear Bank ou Clearstream Banking. Tous les ETF irlandais avaient adopté ce modèle avant la migration post-Brexit de 2021 ([Euroclear, migration des titres irlandais](https://www.euroclear.com/newsandinsights/en/press/2021/2021-mr-07-irish-securities-migration.html) ; [Clearstream, 83 ETF Invesco](https://www.clearstream.com/clearstream-en/products-and-services/settlement/a19059-1546586)). Le registre de l'ETF ne compte qu'un porteur, le dépositaire commun. Un point d'entrée pour les ordres sur fonds n'y a donc pas d'objet.

### 1.2 Clearstream vend déjà le point d'entrée unique et la DLT, et achète Allfunds

Clearstream est l'acteur à battre. Vestima se présente comme la plus grande plateforme de traitement de fonds au monde : **plus de 245 000 fonds sur plus de 55 marchés**. Elle couvre le routage, l'exécution, le règlement en livraison contre paiement (DvP) et la conservation, en traitement automatisé « jusqu'au règlement final » ([Clearstream, Vestima](https://www.clearstream.com/clearstream-en/funds-services/fund-centre/execution/vestima) ; [Finadium](https://finadium.com/six-to-use-clearstreams-vestima-platform-for-fund-processing/)). Le segment Fund Services de Deutsche Börse affichait **≈ 4 000 Md€ d'encours de fonds en conservation** en moyenne au S1 2025, **environ 70 millions de transactions en 2025** (+23 %) et **537 M€ de revenu net** ([Deutsche Börse, T2 2025](https://www.deutsche-boerse.com/resource/blob/4500802/618b5afd2cc52e650ca5bfbe0cbc92f6/data/gdb-quartalsbericht-q2-2025_en.pdf) ; [Deutsche Börse, T4 2025](https://www.deutsche-boerse.com/resource/blob/4887536/a68752b1b7c85f9cf530531c0c221dc4/data/company-release-q4-2025-en.pdf)). La période exacte des 537 M€ n'est pas confirmée par l'extrait.

Côté fonds, l'agent qui reçoit les ordres de Vestima (TA, banque dépositaire ou agent centralisateur) peut le faire par SWIFT ou par simple navigateur web ([Clearstream, guide OHA](https://www.clearstream.com/caas/v1/media/3992894/data/0f4aa8a58ed38cfe3d53e20996a69f75/user-guide-oha-new.pdf)).

Clearstream a ajouté des couches autour de ce cœur :

- **Fund Centre**, ex-Fondcenter d'UBS, racheté à 51 % en 2020 ([Securities Finance Times](https://www.securitiesfinancetimes.com/securitieslendingnews/industryarticle.php?article_id=224767)). Il gère les contrats de distribution, les **commissions de distribution (trailer fees)**, la connaissance des distributeurs (KYD) et la lutte anti-blanchiment, ainsi que le reporting de transparence, pour **plus de 450 partenaires de distribution** ([Clearstream Fund Centre](https://www.clearstream.com/caas/v1/media/2273918/data/15677360644831bedd21e07c5a061bba/asset-man-info.pdf)).
- **FundsDLT**, détenu à 100 % depuis janvier 2024 ([Clearstream](https://www.clearstream.com/clearstream-en/newsroom/240110-3818150)), qui sert de base à **Vestima Digital** pour les fonds de marchés privés (juin 2025) ([Clearstream](https://www.clearstream.com/clearstream-en/newsroom/250618-4517656)).
- Un **Digital Transfer Agent** vendu en SaaS, qui revendique « **jusqu'à 50 % de réduction des coûts opérationnels** » ([Clearstream, 22/06/2026](https://www.clearstream.com/clearstream-en/newsroom/260622-5343058)).

Deutsche Börse rachète par ailleurs **Allfunds pour ≈ 5,3 Md€**, avec un closing attendu au **S1 2027** ([Bloomberg](https://www.bloomberg.com/news/articles/2026-01-21/deutsche-boerse-reaches-5-3-billion-buyout-deal-of-allfunds) ; [Deutsche Börse](https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Deutsche-B-rse-Group-s-Recommended-Acquisition-of-Allfunds-Shareholder-Approvals-of-Allfunds-Obtained-5008700)).

**Les fonds suisses sont le point faible de Clearstream.** Clearstream a ouvert un lien direct avec SIX SIS en février 2026, mais **les fonds éligibles au routage Vestima restent sur l'ancien lien indirect via UBS AG**. Seuls les fonds fermés et les ETF sans routage d'ordres migrent ([Clearstream, lien direct SIX SIS](https://www.clearstream.com/clearstream-en/res-library/settlement/a25064-4701372)). Un ordre transfrontalier sur un fonds suisse traverse donc deux mandataires empilés, Clearstream puis UBS, avant même la banque du client.

Les revenus de Deutsche Börse donnent un ordre de grandeur du prix implicite. 537 M€ rapportés à 70 millions de transactions font **≈ 7,7 € par transaction**. Rapportés à 4 000 Md€, ils font **≈ 1,3 point de base (pb) par an** [calcul, en supposant que les 537 M€ portent sur l'exercice 2025]. Clearstream citait en 2017 une garde moyenne de **0,70 pb** pour une grande banque ([Clearstream, structure tarifaire](https://www.clearstream.com/clearstream-en/funds-services/a17029-1308716)).

Conclusion : face à Clearstream, la technologie ne différencie pas. Un entrant ne peut se distinguer que par la **neutralité**, l'**ancrage suisse** et le **coût d'entrée** [HYPOTHÈSE].

### 1.3 Euroclear, SIX SIS, Allfunds et Calastone complètent un oligopole qui se resserre

| Acteur | Rôle dans la chaîne | Taille publiée | Prix public | Limite exploitable |
|---|---|---|---|---|
| Clearstream (Vestima, CBL, Fund Centre) | Routage, règlement, garde en mandataire au registre du TA, support à la distribution | ≈ 4 000 Md€ en garde ; ≈ 70 M transactions en 2025 ([DB](https://www.deutsche-boerse.com/resource/blob/4887536/a68752b1b7c85f9cf530531c0c221dc4/data/company-release-q4-2025-en.pdf)) | Barème par complexité FMG A/B/C, montants non extraits ([grille nov. 2025](https://www.clearstream.com/caas/v1/media/4639670/data/8bea63a6d07ef2b4f23d04beac78a945/2511-fee-schedule-en.pdf)) | Fonds suisses routés via UBS ; intégration verticale qui accroît la dépendance |
| Euroclear FundsPlace (ex-FundSettle + MFEX) | Même modèle que Clearstream ; intégration de MFEX achevée en janvier 2026 ([AST](https://www.assetservicingtimes.com/assetservicesnews/fundservicesarticle.php?article_id=17537)) | 3 900 Md€ en garde (fin 2025) ([Euroclear](https://www.euroclear.com/newsandinsights/en/press/2026/mr-06-euroclear-delivers-strong-2025-results.html)) ; > 250 000 fonds, > 3 000 distributeurs ([Euroclear](https://www.euroclear.com/services/en/funds/distribution.html)) | Fiche FundSettle non trouvée | Tarif fonds opaque ; migration récente |
| SIX SIS (Global Fund Services) | CSD suisse ; règlement en temps réel (SECOM) ; routage adossé à Vestima depuis 2018 ([Global Custodian](https://www.globalcustodian.com/six-chooses-clearstream-consolidate-fund-processing/)) | Non publiée pour les fonds | 55 CHF par ordre non STP, 350 CHF par ordre de hedge fund, 75 CHF par correction, minimum de 5 000 CHF/mois ([SIX SIS](https://www.six-group.com/dam/download/securities-services/custody-and-settlement/info-center/clients/pricing/scu-fees-260101-international-en.pdf)) | Pas de moteur de routage propre ; prix élevés hors STP |
| Allfunds | Plateforme B2B de distribution, mandataire des distributeurs | 1 760 Md€ administrés (fin 2025) ([Investing.com](https://www.investing.com/news/company-news/allfunds-fy-2025-slides-deutsche-borse-deal-headlines-strong-results-93CH-4537439)) | Marge de 3,9 pb (2024), payée surtout par les sociétés de gestion ([Le Flottant](https://leflottante.substack.com/p/allfunds-financial-infrastructure)) | Coût implicite, prélevé sur les rétrocessions ; avenir lié à Deutsche Börse |
| Calastone | Réseau de messagerie et post-négociation, sans garde | 4 500 clients, 58 pays, > 250 Md£/mois ([Calastone](https://www.calastone.com/about-us/)) | 1,50 à 2,70 £ par ordre, sans frais fixes ([source secondaire](https://www.businessmodelzoo.com/exemplars/calastone/)) | Neutralité réduite depuis le rachat par SS&C, lui-même TA ; présence suisse non démontrée |

**Euroclear est l'autre moitié d'un duopole de la garde transfrontalière de parts de fonds.** Il a reproduit le duo Vestima + Fund Centre en fusionnant FundSettle et MFEX ([Euroclear, rachat de MFEX](https://www.euroclear.com/newsandinsights/en/press/2021/2021-mr-20-euroclear-acquires-mfex.html)).

**SIX n'a pas de moteur de routage indépendant.** Après s'être appuyé sur FundSettle à partir de 2014 ([Finextra](https://www.finextra.com/pressarticle/56827/euroclear-and-six-securities-services-join-forces-for-global-fund-services)), il a choisi Vestima en 2018 ([Global Custodian](https://www.globalcustodian.com/six-chooses-clearstream-consolidate-fund-processing/)). En Suisse, un entrant concurrence donc l'infrastructure allemande que SIX revend, pas SIX lui-même [HYPOTHÈSE ; continuité du partenariat en 2026 non vérifiée]. La grille SIX SIS **exclut économiquement les petits acteurs**. Un gérant indépendant qui passe 2 000 ordres non STP par an paie ≈ 110 000 CHF d'ordres plus 60 000 CHF de minimum annuel [calcul illustratif sur la grille].

**Allfunds** se rémunère surtout auprès des sociétés de gestion ([Le Flottant](https://leflottante.substack.com/p/allfunds-financial-infrastructure)). Le service paraît donc gratuit à la banque. Un entrant qui facture explicitement la banque part avec un handicap de perception [HYPOTHÈSE].

**Calastone a le modèle le plus proche de FundChain** : un réseau neutre, payé à l'ordre, qui ne garde pas les parts. Son rachat par SS&C, pour ≈ 766 M£ en octobre 2025 ([Calastone](https://www.calastone.com/news/ssc-technologies-completes-acquisition-of-calastone/)), le rattache toutefois à un agent de transfert majeur.

Les plateformes pesaient déjà **≈ 30 % des encours d'OPCVM en Europe vers 2020** ([Funds Europe / Clearstream](https://www.funds-europe.com/clearstream-jan-2020/growth-of-assets-on-fund-platforms)). Après 2027, le marché se structure autour de **deux blocs intégrés** : Deutsche Börse (Vestima, FundsDLT, Fund Centre, Allfunds) et SS&C (Calastone et ses activités de TA), avec Euroclear FundsPlace comme contrepoids. Les coûts de sortie sont élevés, car les positions sont inscrites au nom du hub chez chaque TA [HYPOTHÈSE]. Un entrant doit donc viser les **nouveaux flux** plutôt que la migration du stock.

### 1.4 Les concurrents DLT ont été absorbés ou restent cantonnés aux fonds monétaires

| Acteur | Modèle | Registre juridique sur la blockchain ? | Traction publiée | Suisse | Propriétaire |
|---|---|---|---|---|---|
| FundsDLT / Digital TA ([Clearstream](https://www.clearstream.com/clearstream-en/newsroom/260622-5343058)) | Messagerie d'ordres sur Quorum adossée à Vestima ; logiciel de TA en SaaS | Non démontré ; en Suisse, seulement la transmission d'instructions | « Jusqu'à −50 % » de coûts ; un chiffre de « 11 Md€ on-chain » n'est pas confirmé | Pilotes ZKB (2021) et ZKB–UBS (2025) | Deutsche Börse |
| Allfunds Blockchain ([BNPP AM](https://www.bnpparibas-am.com/en/press/mediaroom-en-bnp-paribas-asset-management-launches-first-natively-tokenised-money-market-fund-shares-on-allfunds-blockchain/)) | Blockchain privée, parts émises nativement | Oui, pour quelques fonds (monétaire BNPP AM, Azvalor) | Non publiée ; API pour les marchés privés en juin 2026 ([BusinessWire](https://www.businesswire.com/news/home/20260609715713/en/Alchelyst-and-Allfunds-Blockchain-Launch-Blockchain-API-to-Automate-Private-Markets-Distribution)) | Non trouvée | Allfunds, puis Deutsche Börse |
| Iznes ([Agefi](https://www.agefiactifs.com/investissements-financiers/article/iznes-obtient-lagrement-amf-en-tant-quentreprise-86826)) | Registre partagé de parts d'OPC ; entreprise d'investissement agréée | **Oui** | 32 Md€, ≈ 70 gérants, ≈ 7 200 opérations/mois en mai 2026 ([Boursorama](https://www.boursorama.com/bourse/actualites/iznes-franchit-le-seuil-des-32-milliards-d-euros-d-actifs-tokenises-446b40948a317fd3cec78893ddd2abd3)) | Non | Gérants français |
| Calastone Tokenised Distribution ([Calastone](https://www.calastone.com/news/calastone-launches-tokenised-distribution-solution-to-unlock-the-future-of-fund-distribution/)) | Jumeau token au-dessus du registre du TA (Ethereum, Polygon, Canton) | Non : couche de distribution | Fonds de liquidité de L&G en production (avril 2026) ([L&G](https://group.legalandgeneral.com/newsroom/press-releases/2026/4/lg-liquidity-funds-now-live-on-sscs-calastone-tokenised-distribution-network/)) | Non trouvée | SS&C |
| Fonds monétaires tokenisés (BUIDL, BENJI, uMINT, Aviva, Schroders) | Parts de fonds monétaires sur blockchain | Mixte : registre du TA sur la blockchain ou jumeau numérique | BUIDL ≈ 2,2 Md$ fin septembre 2026 ([RWA.xyz](https://app.rwa.xyz/assets/BUIDL)) ; bons du Trésor US tokenisés ≈ 13–16 Md$ en 2026 ([Yellow](https://yellow.com/research/rwa-tokenization-concentration-treasury-dominance-2026)) | uMINT d'UBS AM, domicilié à Singapour ([UBS](https://www.ubs.com/global/en/media/display-page-ndp/en-20241101-first-tokenized-investment-fund.html)) | Gérants |
| Sygnum Desygnate (FILQ de Fidelity) ([Sygnum](https://www.sygnum.com/news/sygnum-powers-fidelity-internationals-first-tokenized-product-launch-with-moodys-aaa-mf-assessment/)) | Registre du fonds sur la blockchain, règlement par smart contract, souscription en stablecoin | Oui, selon Sygnum | Lancé en mai 2026 ; encours non publié | Banque suisse, mais fonds non suisse | Sygnum |

Deux modèles de registre coexistent.

Le **registre de référence tenu sur la blockchain** est utilisé par Iznes, Allfunds Blockchain pour BNPP AM et Sygnum. Iznes en est la seule réussite à l'échelle : ses actionnaires-clients ont apporté leurs fonds, il détient un agrément d'entreprise d'investissement et il cible un segment étroit (institutionnels et assureurs français). Le volume, ≈ 7 200 opérations par mois pour 32 Md€, signale des flux institutionnels à gros tickets, pas de la banque privée [HYPOTHÈSE]. L'épisode SETL rappelle le risque fournisseur : le prestataire technologique d'Iznes est passé sous administration en 2019 ([The TRADE](https://www.thetradenews.com/blockchain-specialist-setl-calls-administrators-amid-corporate-restructuring/)).

Le **jumeau numérique** domine en Irlande et au Royaume-Uni : Aviva sur XRPL ([Bitcoin.com](https://news.bitcoin.com/featured/ripple-brings-avivas-first-tokenized-fund-to-the-xrp-ledger/)), Calastone avec L&G. Le token y double un registre qui reste chez le TA. **Il ajoute une couche à réconcilier au lieu d'en retirer une.**

Les fonds tokenisés en production sont presque tous **des fonds monétaires en USD destinés à des investisseurs crypto-natifs** ou utilisés comme collatéral. C'est un autre marché que la réduction des coûts de réconciliation entre une banque et un TA.

Les infrastructures DLT indépendantes n'ont pas survécu seules :

- FundsDLT a été absorbé par Deutsche Börse ([Clearstream](https://www.clearstream.com/clearstream-en/newsroom/240110-3818150)) ;
- SETL est passé par l'administration ;
- SDX a été dissous dans SIX en octobre 2025 ([Bloomberg](https://www.bloomberg.com/news/articles/2025-10-06/swiss-exchange-group-to-bring-digital-assets-unit-sdx-in-house)) ;
- Calastone a été vendu à SS&C.

### 1.5 La Suisse a le droit et les briques, mais aucun fonds suisse tokenisé

Le cadre légal existe depuis 2021. La loi TRD (loi suisse sur la technologie des registres distribués, ou « DLT Act ») a créé le **droit-valeur inscrit** (art. 973d CO), transférable uniquement via le registre et technologiquement neutre ([Apollo-8](https://www.apollo-8.ch/post/swiss-dlt-act-and-tokenized-securities)).

Les infrastructures autorisées progressent :

- **BX Digital** a obtenu en 2025 la première licence FINMA de système de négociation TRD. Il règle en DvP par smart contract sur Ethereum, avec une **connexion au SIC** ([FINMA](https://www.finma.ch/en/news/2025/03/20250318-mm-dlt-handelssystem/) ; [CapLaw](https://caplaw.ch/2025/bx-digital-the-first-dlt-trading-facility-in-switzerland/)).
- La BNS fournit une monnaie de banque centrale de gros (wCBDC) dans le pilote **Helvetia III**, prolongé **au moins jusqu'à mi-2027**. Six émissions obligataires pour 750 M CHF avaient été réglées ainsi en juin 2025 ([BNS](https://www.snb.ch/en/publications/communication/press-releases/2025/pre_20250630)).
- Les banques suisses ont achevé une preuve de concept de **dépôts tokenisés** en septembre 2025 ([SwissBanking](https://www.swissbanking.ch/en/media-politics/press-releases/milestone-for-the-swiss-financial-center-deposit-token-proof-of-concept-successfully-completed)).
- Un stablecoin en CHF (CHFD) est testé en sandbox depuis juin 2026 ; SIX et TWINT ont rejoint le test en septembre ([The Paypers](https://thepaypers.com/crypto-web3-and-cbdc/news/swiss-stablecoin-pilot-adds-six-and-twint-enters-testing-phase)).
- SIX a tokenisé des obligations pour Pictet en juillet 2025 ([SIX](https://www.six-group.com/en/newsroom/media-releases/2025/20250710-six-pictet-pilot-project.html)) et a réintégré ses activités d'actifs numériques dans SIX SIS ([Bloomberg](https://www.bloomberg.com/news/articles/2025-10-06/swiss-exchange-group-to-bring-digital-assets-unit-sdx-in-house)).

Les seuls flux d'ordres sur fonds passés par une DLT entre banques suisses sont les pilotes FundsDLT. ZKB a passé un premier ordre en 2021, avec un traitement ramené « de plusieurs heures à quelques minutes » ([FintechNewsCH](https://fintechnews.ch/blockchain_bitcoin/zurcher-kantonalbank-completes-first-blockchain-based-fund-transaction/42909/)). Un pilote ZKB–UBS a suivi en mars 2025, sur Quorum ([ZKB](https://www.zkb.ch/de/ueber-uns/medien/medienmitteilungen/2025/instruktionen-fondsanteile-blockchain.html) ; [Ledger Insights](https://www.ledgerinsights.com/zurcher-kantonalbank-ubs-in-fundsdlt-pilot/)). Il s'agissait de **messagerie d'instructions, pas d'un registre de parts**. Quatre ans séparent les deux pilotes, sans qu'un réseau se soit formé.

**Aucun fonds de droit suisse émis en droits-valeurs inscrits sur un registre partagé n'a été identifié publiquement.** Ce vide est l'opportunité, mais aussi un signal : les parts suisses sont déjà dématérialisées chez SIX SIS, et la « douleur » de registre y est moins visible qu'au Luxembourg [HYPOTHÈSE].

---

## 2. Blockchain à permission ou base centrale : la blockchain ne vaut que si elle porte le registre juridique

### 2.1 Une base centrale bien conçue offre trois des cinq bénéfices attribués à la blockchain

La littérature est sévère pour la blockchain. Wüst et Gervais (ETH Zurich) concluent qu'une blockchain n'a de sens que si **plusieurs parties qui se méfient les unes des autres** doivent modifier un état commun **sans pouvoir s'accorder sur un tiers de confiance** ([Wüst & Gervais](https://eprint.iacr.org/2017/375.pdf)). Le Conseil de stabilité financière (FSB) juge que les bénéfices de la tokenisation « restent à prouver » et ne sont pas toujours atteignables par elle seule ([FSB, 2024](https://www.fsb.org/uploads/P221024-2.pdf)). L'OICV (IOSCO) constate que la **distribution** repose encore largement sur l'infrastructure conventionnelle ([IOSCO, nov. 2025](https://www.iosco.org/library/pubdocs/pdf/IOSCOPD809.pdf)). La BRI place la valeur dans la programmabilité et la coexistence, sur une même plateforme, de la monnaie et des actifs ([BRI, rapport 2025](https://www.bis.org/publ/arpdf/ar2025e3.pdf)).

Sur les cinq bénéfices souvent attribués à la blockchain, trois sont accessibles à une base centrale :

1. **Le registre unique (« golden record »).** Il existe dès que toutes les parties acceptent une même référence.
2. **La fin de la réconciliation entre parties.** Elle découle du registre unique, pas de la technologie.
3. **L'inviolabilité vérifiable.** Les tables « ledger » d'Azure SQL chaînent chaque transaction par hachage et stockent les empreintes hors de la base ([Microsoft](https://learn.microsoft.com/en-us/sql/relational-databases/security/ledger/ledger-overview?view=sql-server-ver17)).

Un quatrième, la programmabilité du cycle de l'ordre et des commissions, relève de la logique applicative.

Restent deux bénéfices propres à la blockchain :

- **Se passer d'un tiers de confiance unique.** Cela contredit le modèle de FundChain, où la plateforme est l'opérateur.
- **Le DvP atomique avec du cash tokenisé.** Il dépend d'une jambe cash qui reste en pilote en Suisse (§2.4).

La leçon de DTCC Project Ion le confirme : plus de 100 000 transactions par jour sur Corda, mais **le système classique reste le registre qui fait foi** ([DTCC](https://www.dtcc.com/news/2022/august/22/project-ion)). **Une blockchain qui n'est pas la référence juridique ajoute un livre à réconcilier.**

### 2.2 La blockchain déplace le coût vers les nœuds, les clés, la confidentialité et la gouvernance

**La confidentialité entre banques concurrentes est le premier écueil technique.**

- **Hyperledger Fabric** : avec les collections de données privées, le hachage de chaque transaction reste écrit chez tous les membres du canal ([Fabric](https://hyperledger-fabric.readthedocs.io/en/latest/private-data/private-data.html)). Volume et cadence restent donc visibles [HYPOTHÈSE sur l'ampleur de cette fuite de métadonnées].
- **Corda** : le notaire peut être non validant, c'est-à-dire qu'il ne voit pas le contenu ([R3](https://docs.r3.com/en/platform/corda/4.8/enterprise/key-concepts-notaries.html)).
- **Canton** : chaque partie ne reçoit que la sous-transaction qui la concerne ([Canton](https://www.canton.network/blog/how-canton-network-delivers-institutional-grade-privacy)).
- **Besu** : la confidentialité native via Tessera a été **retirée en 2025** ([Besu](https://besu.hyperledger.org/en/stable/private-networks/concepts/privacy/private-transactions)).

**La performance ne discrimine pas** : les volumes d'ordres sur fonds restent bien en deçà des capacités démontrées, comme les 100 000 transactions par jour d'Ion [HYPOTHÈSE sur les volumes suisses].

**Les échecs viennent de la conception et de la gouvernance.** ASX a passé en perte **245 à 255 M AUD** sur le remplacement de CHESS ([ASX](https://www.asx.com.au/content/dam/asx/about/media-releases/2022/60-17-november-2022-CHESS-Replacement-ASX-reassessing-financial-derecognition_.pdf)). Selon la revue d'Accenture, la combinaison DLT + smart contracts y freinait performance et scalabilité ([iTnews](https://www.itnews.com.au/news/accenture-report-could-end-asxs-blockchain-vision-587915)). Les consortiums entre pairs ont fermé : we.trade ([Tech Monitor](https://www.techmonitor.ai/technology/emerging-technology/ibm-backed-blockchain-platform-we-trade-shutting-down)), Marco Polo ([GTR](https://www.gtreview.com/news/top-stories/marco-polo-brings-in-liquidators-as-funds-run-dry/)), TradeLens ([Supply Chain Dive](https://www.supplychaindive.com/news/Maersk-IBM-shut-down-TradeLens/637580/)).

**Les succès ont un opérateur dominant, déjà au centre du réseau,** qui utilise la blockchain pour un problème étroit :

- Broadridge DLR, sur Canton, a traité **8 000 Md$ de repo en juillet 2026** ([Broadridge](https://www.broadridge.com/press-release/2026/broadridges-distributed-ledger-repo-processes-8-trillion-in-july)) ;
- HQLAx ramène la mobilisation de collatéral « de plusieurs heures à quelques minutes » sans tokeniser les actifs ([Markets Media](https://www.marketsmedia.com/dlt-enables-collateral-mobility/)) ;
- Ion a commencé avec des **nœuds hébergés par DTCC** ([Securities Finance Times](https://www.securitiesfinancetimes.com/securitieslendingnews/industryarticle.php?article_id=225014)).

Dans les fonds, la trajectoire observée est la recentralisation (FundsDLT, SDX). **Pour un entrant, le risque principal est l'adoption, pas la technologie** [HYPOTHÈSE].

### 2.3 Tableau de décision

Échelle : ++ très favorable, + favorable, 0 neutre, − défavorable, −− très défavorable.

| Critère | Base centrale | Blockchain multi-opérateurs | Hybride recommandé |
|---|---|---|---|
| Suppression de la réconciliation entre parties | + si toutes les parties acceptent le registre central comme référence, ce que fait déjà Vestima ([Clearstream](https://www.clearstream.com/clearstream-en/funds-services/fund-centre/execution/vestima)) | + / ++ seulement si la blockchain fait foi ; sinon c'est une couche de plus ([DTCC Ion](https://www.dtcc.com/news/2022/august/22/project-ion)) | + registre unique qui fait foi, preuves remises à chaque partie |
| Coût de construction | ++ technologie standard [H] | −− ASX : 245–255 M AUD passés en perte ([ASX](https://www.asx.com.au/content/dam/asx/about/media-releases/2022/60-17-november-2022-CHESS-Replacement-ASX-reassessing-financial-derecognition_.pdf)) | + cœur standard, blockchain limitée au registre [H] |
| Coût de fonctionnement par partie | ++ connexion API ou SWIFT [H] | − nœud, HSM, mises à jour coordonnées ; atténué si les nœuds sont hébergés ([SFT](https://www.securitiesfinancetimes.com/securitieslendingnews/industryarticle.php?article_id=225014)) | + API par défaut ; clé propre seulement pour signer ses transferts [H] |
| Confidentialité entre banques concurrentes | ++ contrôle d'accès mature [H] | − à + : métadonnées visibles avec Fabric ([Fabric](https://hyperledger-fabric.readthedocs.io/en/latest/private-data/private-data.html)), bon niveau avec Canton ([Canton](https://www.canton.network/blog/how-canton-network-delivers-institutional-grade-privacy)), confidentialité de Besu retirée ([Besu](https://besu.hyperledger.org/en/stable/private-networks/concepts/privacy/private-transactions)) | + contrôle d'accès central ; Canton pour le registre [H] |
| Qualification comme registre de droits-valeurs (art. 973d CO) | − / ? : la vérification « sans intervention d'un tiers » est difficile si l'opérateur est seul ([art. 973d](https://www.droit-bilingue.ch/fr-de/2/22/220-973d-1383.html)) [H juridique] | ++ la loi cite en exemple la gestion par plusieurs participants indépendants | + via le registre sur blockchain |
| Adoption et délai de mise sur le marché | ++ modèle connu (hubs, ISO 20022) [H] | −− distribution toujours sur infrastructure conventionnelle ([IOSCO](https://www.iosco.org/library/pubdocs/pdf/IOSCOPD809.pdf)) ; consortiums fermés | + même porte d'entrée que la base centrale |
| Résilience | − point unique de défaillance, atténué par la haute disponibilité [H] | + données répliquées, mais séquenceur ou notaire critique ([R3](https://docs.r3.com/en/platform/corda/4.8/enterprise/key-concepts-notaries.html)) | 0 / + opérateur critique ; chaque partie garde ses preuves [H] |
| DvP atomique avec cash tokenisé | −− impossible : DvP séquencé via SIC ou T2 seulement | ++ si le cash existe sur une blockchain compatible ([BNS](https://www.snb.ch/en/publications/communication/press-releases/2025/pre_20250630)) | + dès que l'accès existe |
| Pérennité et dépendance fournisseur | + SQL standard ; prudence avec les bases « ledger » propriétaires (QLDB arrêtée en 2025, [InfoQ](https://www.infoq.com/news/2024/07/aws-kill-qldb/)) | − fonctions retirées, piles technologiques propriétaires [H] | 0 dépendance limitée au registre |
| **Verdict pour la phase 1** | Gagne sur le coût, le délai et la confidentialité ; faible sur le statut juridique | Seule à cocher le statut juridique et le DvP atomique ; perd sur le coût, le délai et l'adoption | **Retenu** : jamais dernier, et garde la blockchain là où elle crée de la valeur |

### 2.4 Position : hybride, avec une blockchain réservée au registre de parts

**FundChain doit être une base centrale avec un registre de parts sur blockchain, et non une blockchain de bout en bout.**

Tout ce qui ne crée pas de droit reste en base centrale : moteur d'ordres, cut-offs, calcul des rétrocessions, reporting, connectivité API et ISO 20022. Cette base utilise des tables ledger chaînées par hachage, et chaque partie reçoit des accusés signés et des preuves sur ses propres données. Le reporting reste plus simple depuis une base relationnelle [HYPOTHÈSE].

Le registre de parts passe sur une **blockchain à permission à opérateur central** : la plateforme opère le séquenceur ou le notaire et héberge les nœuds, et les parties signent leurs transferts avec leurs propres clés. Canton est à privilégier pour sa confidentialité par sous-transaction ; Corda est l'alternative [HYPOTHÈSE à confirmer par l'architecte].

La blockchain ne s'active que si au moins une de ces quatre conditions est remplie :

1. les parts sont des droits-valeurs inscrits et la base centrale est jugée insuffisante au regard de l'art. 973d CO ;
2. un DvP atomique avec du cash tokenisé est réellement accessible ;
3. plusieurs agents de transfert ou banques dépositaires refusent de confier leur registre à un opérateur unique ;
4. la distribution doit toucher des canaux on-chain.

**Le premier couple recommandé (§6.2) remplit la condition 1.** Le registre est donc sur blockchain dès le pilote.

Pour la jambe cash, seule une option est généralisable aujourd'hui en Suisse : le **règlement hors chaîne via SIC, conditionné par l'état du registre** (paiement contre confirmation, PvC). Le pilote Project Guardian a montré qu'on peut automatiser la jambe paiement via Swift sans monnaie on-chain ([FinTech Futures](https://www.fintechfutures.com/tokenisation/mas-project-guardian-pilots-settlement-of-tokenised-fund-subscriptions-and-redemptions-using-swift)). Le lien SIC de BX Digital, Helvetia, les dépôts tokenisés ou CHFD, et Pontes pour l'euro (en service depuis le 21 septembre 2026 selon la presse : [CoinDesk](https://www.coindesk.com/business/2026/09/21/ecb-deploys-pontes-platform-to-settle-wholesale-tokenized-assets-in-central-bank-money)) restent des connecteurs optionnels. Aucun n'est un prérequis.

Pour un ordre réglé à VNI J+1 ou J+2, le risque de règlement que supprime le DvP atomique est faible au regard de la complexité ajoutée [HYPOTHÈSE].

---

## 3. Trois à sept livres par ordre : l'agent de transfert n'est jamais le fonds

### 3.1 Non : l'agent de transfert n'est le fonds ni en Suisse, ni au Luxembourg, ni en Irlande

| Juridiction | Qui reçoit et exécute l'ordre | Qui tient le registre qui fait foi | L'agent de transfert est-il le fonds ? |
|---|---|---|---|
| **Suisse** (fonds contractuel) | La **banque dépositaire**, qui émet et rachète les parts (art. 73 LPCC) ; la direction de fonds calcule la VNI ([FINMA](https://www.finma.ch/en/authorisation/asset-management/custodian-banks-of-collective-investment-schemes/) ; [Lexology](https://www.lexology.com/library/detail.aspx?g=518c7d70-bf66-447b-a081-71f879b4791a)) | Pas de registre nominatif tenu par un TA ; la propriété se lit dans la chaîne de comptes SIX SIS → banque → client ([SIX SIS](https://www.six-group.com/dam/download/securities-services/custody-and-settlement/info-center/clients/gtc/mg-general-agb-220201.pdf)) [H pour l'absence de registre] | **Non, et il n'y a pas de TA.** Le rôle revient à la banque dépositaire, entité distincte. Le fonds contractuel n'a pas de personnalité juridique : c'est la direction qui est autorisée ([LPCC, Swiss Fund Data](https://www.swissfunddata.ch/sfdpub/docs/a13-200351-20231207-de.pdf)) |
| **Luxembourg** (SICAV, FCP) | Le **Registrar and Transfer Agent** (RTA), qui applique le cut-off ([prospectus Fidelity Funds](https://www.fidelityinternational.com/legal/documents/FF/FI-en/pr.ff.en.FI.pdf)) | Le registre des porteurs, tenu par le RTA au titre de la « fonction de registraire » de la circulaire CSSF 22/811 ([CMS](https://cms.law/en/lux/legal-updates/Luxembourg-regulator-publishes-circular-providing-the-UCI-administration-industry-with-a-modernised-and-comprehensive-framework)) | **Non.** C'est un prestataire nommé par le fonds ou sa société de gestion, avec autorisation préalable de la CSSF, presque toujours externalisé : State Street/IFDS, CACEIS, BNP Paribas ([Delano](https://delano.lu/article/state-street-tops-luxembourg-r)) |
| **Irlande** (ICAV, plc) | L'**administrateur**, qui fait en général office de TA ([Irish Funds](https://www.irishfunds.ie/set-up-distribution/fund-services/)) | Le registre des actionnaires, tenu par le TA ([Cadwalader](https://www.cadwalader.com/fund-finance-friday/index.php?nid=23&eid=153&tag=2019-03-01-The+Irish+Collective+Asset-Management+Vehicle+)) ; pour un ETF, un seul porteur, le dépositaire commun « CD Nominees » ([Clearstream](https://www.clearstream.com/clearstream-en/products-and-services/settlement/a19059-1546586)) | **Non.** C'est un administrateur agréé et supervisé par la Banque centrale d'Irlande, nommé par le fonds |

La directive UCITS range l'administration (tenue du registre, émission et rachat des parts) parmi les fonctions **déléguables** de la société de gestion ([Directive 2009/65/CE, annexe II](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32009L0065)).

Même quand l'agent de transfert est « internalisé », il s'agit d'une filiale du groupe de gestion, donc d'une entité distincte du fonds [HYPOTHÈSE : aucune statistique publique sur la part internalisée].

**Conséquence directe pour FundChain.** Le « fonds ou son TA » de la vision correspond en Suisse à **la banque dépositaire, et accessoirement à la direction de fonds**. Au Luxembourg, c'est le RTA ; en Irlande, l'administrateur.

### 3.2 Deux à trois intermédiaires dans le cas typique, jusqu'à six dans le pire cas

Convention de comptage : un **intermédiaire de chaîne** est une entité distincte, ni l'investisseur ni le fonds, qui transmet l'ordre ou tient un livre de positions. Les prestataires du fonds (TA, banque dépositaire, société de gestion ou direction de fonds) sont comptés à part. Les comptages suivants sont un **modèle** bâti sur les faits sourcés ci-dessus et au §1 [HYPOTHÈSE de modélisation].

| Scénario | Intermédiaires de chaîne | Entités au total | Livres de positions | Contrôles de réconciliation par ordre [H] |
|---|---|---|---|---|
| CH-1 : chaîne intégrée (banque, direction et banque dépositaire du même groupe) | 1 (2 avec SIX SIS) | 2–4 | 2–3 | 3–7 |
| CH-2 : banque tierce + SIX SIS (typique) | 2 (3 avec un hub) | 4–5 | 3–4 | 7–10 |
| CH-3 : investisseur étranger ou gérant indépendant via Clearstream et UBS (pire cas) | 6 | 8 | 5–6 | 16–20 |
| LU/IE-1 : souscription en nom propre auprès du TA | 0 | 3 | 1 | ≈ 0–1 |
| LU/IE-2 : banque privée suisse + hub (typique) | 2 (3 avec un global custodian) | 5–6 | 3–4 | 7–10 |
| LU/IE-3 : mandataires en cascade (pire cas) | 5–6 | 8–9 | 5–7 | 16–20 |
| ETF irlandais acheté en bourse suisse | 6–7 | n.d. | n.d. | hors champ |
| **Cible FundChain** | 1 (+ la plateforme opératrice) | 4 | **1** | **≈ 1** |

Le modèle de réconciliation compte trois contrôles par frontière entre deux livres : ordre contre confirmation, espèces, positions. S'y ajoute un rapprochement mensuel des rétrocessions [HYPOTHÈSE à valider avec des praticiens].

Le compte omnibus ajoute des coûts cachés :

- **Transparence.** Le TA n'inscrit que l'intermédiaire, et les sociétés de gestion ne connaissent généralement pas les clients qui passent par ces comptes ([ICI, 2022](https://www.ici.org/system/files/2022-12/22-ppr-navigating-intermediary-relationships.pdf)). Les régulateurs scrutent ces comptes pour la protection des investisseurs, la fiscalité et les sanctions ([Global Custodian](https://www.globalcustodian.com/the-omnibus-dilemma/)).
- **Rétrocessions.** Leur calcul exige de « ventiler » les comptes omnibus. Des outils dédiés existent pour cela ([FE fundinfo](https://www.fefundinfo.com/products/institutions/fee-distribution-channel-management)), avec plusieurs méthodes de calcul concurrentes ([ISITC](https://isitc.org/wp-content/uploads/Mutual-Fund-Trailer-Fee-Payment-Market-Practice.pdf)).
- **Reconstitution payante de l'information.** Clearstream vend un service de « transparence des détentions » ([Clearstream](https://www.clearstream.com/clearstream-en/funds-services/fund-centre/execution/vestima/distributors-and-fund-platforms/transparency-of-holdings)). UBS a externalisé l'encaissement de ses trailer fees chez Clearstream pour réduire ses coûts internes ([Clearstream, nov. 2024](https://www.clearstream.com/clearstream-en/newsroom/241127-4206066)).

### 3.3 Schémas de la chaîne actuelle

`[H]` marque une couche supposée, non sourcée. Les autres éléments renvoient aux sources du §1 et du §3.1.

```
CHAINE ACTUELLE CH-2 : fonds suisse achete via une banque tierce (typique)

Investisseur
   |  ordre
   v
Banque B (depot titres du client)                         [intermediaire 1]
   |  ordre : SWIFT, plateforme ou e-mail / fax [H]
   |  (option : hub SIX Global Fund Services / Vestima, Allfunds)  [+1]
   v
Banque depositaire du fonds : emission / rachat (art. 73 LPCC)    [prestataire]
   |  VNI J+1 calculee par la direction de fonds                  [prestataire]
   v
SIX SIS (SECOM) : livraison des parts sur le compte de B   [intermediaire 2]
Especes : Banque B --CHF (SIC) [H]--> banque depositaire

Intermediaires : 2 (3 avec hub) | Entites : 4-5 | Livres de positions : 3-4
```

```
CHAINE ACTUELLE CH-3 : fonds suisse, client etranger ou gerant independant (pire cas)

Investisseur -> Gerant independant [H] -> Banque de depot -> Global custodian [H]
  -> Clearstream Banking (routage Vestima) -> UBS AG (lien indirect) -> SIX SIS
  -> Banque depositaire du fonds -> Direction de fonds

Intermediaires : 6 | Entites : 8 | Livres de positions : 5-6
```

```
CHAINE ACTUELLE LU/IE-2 : fonds LU ou IE vendu par une banque suisse

Investisseur
   v
Banque privee CH (depot client)                              [intermediaire 1]
   v  setr.010 / MT502
Hub : Vestima, FundsPlace, Allfunds ou Calastone             [intermediaire 2]
   |  inscrit en nominee au registre : le fonds ne voit pas l'investisseur
   v
Agent de transfert / registraire (LU : RTA ; IE : administrateur)  [prestataire]
   v
Fonds (societe de gestion + depositaire)                           [prestataires]

Livres empiles : registre du TA -> livre du hub -> livre de la banque (+ custodian)
Intermediaires : 2 (3 avec global custodian) | Entites : 5-6 | Livres : 3-4
```

```
CHAINE ACTUELLE ETF : ETF irlandais achete a la bourse suisse (marche secondaire)

Investisseur -> Banque -> Courtier membre [H] -> SIX Swiss Exchange
  -> CCP (SIX x-clear | LCH | Cboe Clear Europe) -> SIX SIS (reglement)
  -> ICSD emetteur (Euroclear Bank / Clearstream) [lien H] -> Depositaire commun
  -> Registraire du fonds : un seul porteur inscrit ("CD Nominees")

Intermediaires : 6-7 | Registre : un seul porteur | Point d'entree : sans objet
```

Le schéma ETF repose sur les trois contreparties centrales (CCP) reconnues par SIX ([SIX](https://www.six-group.com/dam/download/the-swiss-stock-exchange/trading/trading-provisions/clearing-and-settlement/rec-settlement-orgs.pdf)) et sur le modèle ICSD décrit au §1.1. Les ETF de l'EEE ont un taux d'échec de règlement de **17,32 %** des instructions en moyenne mensuelle (juin 2023 à mai 2024) ([ESMA](https://www.esma.europa.eu/sites/default/files/2025-06/ESMA74_1_1.PDF)). Le problème des ETF est la fragmentation du marché secondaire, pas l'entrée des ordres.

### 3.4 Schéma de la chaîne cible simplifiée

```
CHAINE CIBLE CH : pilote FundChain, parts en droits-valeurs inscrits (art. 973d CO)

Investisseur
   |  ordre
   v
Banque distributrice (depot client, KYC, conseil)        [intermediaire unique]
   |  API ou ISO 20022 (setr.010 / setr.004 / setr.013)
   v
+----------- REGISTRE PARTAGE FUNDCHAIN (registre juridique unique) -----------+
| Banque distributrice : voit ses seules positions, signe ses transferts      |
| Banque depositaire + direction : emettent / rachetent, publient la VNI      |
| Plateforme : opere le registre, sequence, calcule retrocessions et reporting |
+------------------------------------------------------------------------------+
   |  instruction de paiement conditionnee par l'etat du registre (PvC)
   v
SIC (CHF, monnaie banque centrale, hors chaine) ; option future : CHF tokenise

Livres de positions : 1 (contre 3 a 7) | Controles par ordre : environ 1 [H]
Entites qui touchent l'ordre : 4 (banque, plateforme, depositaire, direction)
```

```
CHAINE CIBLE LU (extension) : registre tenu sur DLT par le RTA (FAQ CSSF 22/811)

Investisseur -> Banque distributrice --(API / ISO 20022)--> REGISTRE PARTAGE
                noeuds : banque | RTA (fonction de registraire) | plateforme
Especes : EUR via correspondants / T2 ; option Pontes (BCE) si eligible
Le hub nominee disparait SEULEMENT si le RTA tient son registre de reference
sur la plateforme ; sinon FundChain n'est qu'un routeur de plus vers Vestima.
```

**Le gain se mesure en livres supprimés, pas en entités.** La cible compte encore quatre entités. En revanche, elle ne compte qu'un livre, contre trois à sept aujourd'hui [HYPOTHÈSE].

Pour un fonds luxembourgeois ou irlandais dont le TA ne rejoint pas le registre, FundChain se contente de router les ordres et n'enlève aucun livre. **C'est la raison principale pour ne pas commencer par ces fonds.**

---

## 4. Ce que le registre partagé simplifie : peu de démontré, beaucoup de revendiqué

Légende : **démontré** = statistique, régulateur, rapport financier ou grille tarifaire publiée ; **revendiqué** = affirmation d'un fournisseur sur ses propres bénéfices ; **[HYPOTHÈSE]** = modèle ou calcul de ce rapport.

| Domaine | Démontré | Revendiqué par des fournisseurs | [HYPOTHÈSE] |
|---|---|---|---|
| Coûts | Grille SIX SIS : 55 à 350 CHF par ordre, minimum de 5 000 CHF/mois ([SIX SIS](https://www.six-group.com/dam/download/securities-services/custody-and-settlement/info-center/clients/pricing/scu-fees-260101-international-en.pdf)) ; exploitation ≈ 17 % du TER en 2011 ([EFAMA](https://www.efama.org/sites/default/files/files/EFAMA_Fund%20Fees%20in%20Europe%202011.pdf)) | −23 % des coûts d'exploitation, soit 135 Md$/an ([Calastone](https://www.calastone.com/insights/white-paper-decoding-the-economics-of-tokenisation-transforming-cost-dynamics-in-asset-management/)) ; jusqu'à −50 % ([Clearstream](https://www.clearstream.com/clearstream-en/newsroom/260622-5343058)) ; 5,28 £ par ordre ([Forrester pour Calastone](https://www2.calastone.com/totaleconomicimpactreport)) | Pot suisse de 350 à 870 M CHF/an ; économie maximale de 90 à 220 M CHF/an |
| Réconciliations | 93,2 % des ordres automatisés chez les TA LU/IE en 2020 ([EFAMA](https://www.efama.org/index.php/newsroom/news/funds-processing-automation-rises-new-heights-new-joint-report-efama-and-swift-shows)) ; réconciliation exigée par la loi Blockchain IV ([Goodwin](https://www.goodwinlaw.com/en/insights/publications/2024/07/alerts-finance-dcb-luxembourg-proposes-updates-to-blockchain-laws)) | « Réconciliation réduite » ([Clearstream](https://www.clearstream.com/clearstream-en/funds-services/asset-managers-and-transfer-agents/digital/fundsdlt-digital-transfer-agent)) ; « Sub-Register » partagé ([Global Custodian](https://www.globalcustodian.com/calastone-successfully-shifts-funds-network-dlt-platform/)) | 7 à 10 contrôles par ordre (typique), 16 à 20 (pire cas), ≈ 1 dans la cible |
| Délais | VNI J+1 et règlement ≤ J+3 en Suisse ([PostFinance](https://www.swissfunddata.ch/sfdpub/docs/fpd-8271_04-20210617-de.pdf)) ; T+1 le 11/10/2027 ([SIX](https://www.six-group.com/en/newsroom/media-releases/2025/20250912-settlement-cycle-six-swissstpc.html)) ; échecs ETF de 17,32 % ([ESMA](https://www.esma.europa.eu/sites/default/files/2025-06/ESMA74_1_1.PDF)) | « Quelques minutes au lieu de plusieurs heures » ([ZKB / FundsDLT](https://fintechnews.ch/blockchain_bitcoin/zurcher-kantonalbank-completes-first-blockchain-based-fund-transaction/42909/)) ; exécution à réception de la VNI ([BNPP AM](https://www.bnpparibas-am.com/en/press/mediaroom-en-bnp-paribas-asset-management-launches-first-natively-tokenised-money-market-fund-shares-on-allfunds-blockchain/)) | Transferts entre banques le jour même si les deux sont sur le registre |
| Reporting | Moins de doublons d'enregistrements, selon la Banque centrale d'Irlande, sans chiffre ([CBI DP12](https://www.centralbank.ie/docs/default-source/publications/discussion-papers/discussion-paper-12/dp12-dlt-tokenisation-in-financial-services.pdf?sfvrsn=a515721a_14)) | Reporting en temps réel dans le projet AMAS / MAMA ([AMAS](https://www.am-switzerland.ch/en/amas-meet-eat-geneva-fund-tokenisation-setting-up-an-asset-management-on-chain-fund)) | Rétrocessions calculées une seule fois sur le registre ; aucun effet sur EMT/EPT/EET ni sur la fiscalité |

### 4.1 Coûts : le pot suisse est petit et se concentre hors STP

Les seules données démontrées décrivent une chaîne **déjà largement automatisée en bout de chaîne**. Au T4 2020, 93,2 % des ordres reçus par les TA luxembourgeois et irlandais étaient automatisés, dont 91,2 % au Luxembourg et 95,9 % en Irlande. Il restait **6,8 % d'ordres manuels** (8,8 % au Luxembourg), et seuls 33,6 % des ordres irlandais suivaient la norme ISO ([EFAMA-Swift](https://www.efama.org/index.php/newsroom/news/funds-processing-automation-rises-new-heights-new-joint-report-efama-and-swift-shows)). Aucune donnée plus récente ni suisse n'a été trouvée. La suppression des ordres manuels ne porte donc que sur ≈ 7 % du volume transfrontalier.

**Le coût est structurel** : équipes de réconciliation à chaque niveau, gestion des échecs, rétrocessions, KYC en cascade. Il se concentre aussi sur les ordres non standards, que SIX SIS facture **55 CHF** (fonds non STP) à **350 CHF** (hedge fund), plus **75 CHF par correction manuelle** ([SIX SIS](https://www.six-group.com/dam/download/securities-services/custody-and-settlement/info-center/clients/pricing/scu-fees-260101-international-en.pdf)). Le routage pur coûte **1,50 à 2,70 £** chez Calastone ([source secondaire](https://www.businessmodelzoo.com/exemplars/calastone/)). Sur les ordres STP de fonds classiques, **les prix de gros sont déjà bas** : les frais d'ordre ne suffisent pas à faire gagner un entrant [HYPOTHÈSE].

Les repères de coût global sont anciens ou intéressés :

- les services d'exploitation (conservation, administration, TA) pesaient **≈ 17 % du TER** des fonds européens en 2011 ([EFAMA](https://www.efama.org/sites/default/files/files/EFAMA_Fund%20Fees%20in%20Europe%202011.pdf)) ;
- l'administration coûte **2 à 8 pb** pour les fonds traditionnels ([Umbrex](https://umbrex.com/resources/industry-primers/financial-services-industry-primers/custody-fund-administration-transfer-agency-industry-primer/), source secondaire faible) ;
- Calastone estime les coûts d'exploitation d'un fonds à **0,74 % des encours** ([Calastone](https://www.calastone.com/insights/white-paper-decoding-the-economics-of-tokenisation-transforming-cost-dynamics-in-asset-management/)).

Les chiffres de Calastone ne doivent pas être additionnés à ceux de l'EFAMA : ils incluent les coûts internes du gérant.

**Le chiffre le plus cité, 135 Md$ par an (−23 % des coûts d'exploitation, soit 0,13 % des encours), est une revendication de fournisseur.** Il repose sur les déclarations de 26 gérants, extrapolées au monde entier ([Funds Europe](https://funds-europe.com/tokenisation-could-save-asset-managers-135bn-calastone/)). Trois limites :

1. **Il est incohérent** : 0,13 / 0,74 = 17,6 %, et non 23 %.
2. **Il suppose une adoption totale** : 135 Md$ / 0,13 % ≈ 104 000 Md$ d'actifs, soit l'ordre de grandeur de tous les actifs gérés dans le monde [calcul].
3. **Il porte surtout sur la comptabilité de fonds** (−29,8 %), que FundChain ne touche pas. Seul le poste TA (−25,2 %) est pertinent ([CTMfile](https://ctmfile.com/story/how-tokenisation-is-rewriting-the-fund-model)).

L'étude Forrester commandée par Calastone (5,28 £ d'impact par ordre automatisé) et le « −50 % » du Digital TA de Clearstream relèvent aussi du discours commercial.

**Ordre de grandeur pour la Suisse** [HYPOTHÈSE de calcul] :

- Supposons que les ordres, la tenue de registre et le TA coûtent 2 à 5 pb des encours. Sur 1 740 Md CHF, le pot vaut ≈ **350 à 870 M CHF par an**.
- Avec la réduction de 25 % revendiquée pour le poste TA, l'économie maximale tombe à **≈ 90 à 220 M CHF par an, à 100 % d'adoption**.
- Avec 5 % de part de marché, il reste **4 à 11 M CHF par an**, à partager entre les revenus de la plateforme et les économies des clients.
- Ce pot est surestimé : les 1 740 Md CHF **incluent les fonds étrangers** autorisés en Suisse ([Swiss Fund Data](https://www.swissfunddata.ch/sfdpub/en/market/show/2404)). La FINMA dénombre 1 984 fonds suisses contre 8 611 fonds étrangers ([FINMA](https://report.finma.ch/2025/en/market-developments/market-developments-in-the-asset-management-industry)).

**Illustration du coût total pour une banque privée** [HYPOTHÈSE] : 5 Md CHF de fonds en garde à 1 pb, soit ≈ 500 k CHF ; plus 50 000 ordres à ≈ 8 €, soit ≈ 400 k CHF ; total **≈ 0,9 M CHF par an de frais d'infrastructure**. Les coûts internes de réconciliation et de rétrocessions s'y ajoutent, et aucune source publique ne les chiffre.

### 4.2 Réconciliations : un gain réel seulement si le registre partagé fait foi

Chaque frontière entre deux livres génère trois contrôles : ordre contre confirmation (prix, parts, frais), espèces (montant, date de valeur) et positions. Cela donne **7 à 10 contrôles par ordre** dans une chaîne typique et **16 à 20 dans le pire cas**, contre **≈ 1** avec un registre unique [HYPOTHÈSE de modélisation, §3.2].

Les points de rupture typiques sont les suivants [HYPOTHÈSE] :

- un ordre dans les temps à la banque mais reçu après le cut-off du TA ;
- des écarts de parts dus aux arrondis ou au swing pricing ;
- des espèces arrivées en retard ;
- des positions omnibus désalignées après une opération sur titres ;
- des rétrocessions calculées sur des bases différentes.

Le paradoxe « 93 % de STP, mais 67 % des firmes ont encore un fax » ([Funds Europe](https://www.funds-europe.com/september-2022/technology-dealing-with-fax-offenders)) s'explique par la mesure. Le taux STP ne couvre que les ordres reçus par les TA. Les maillons amont et les opérations non standards (transferts, corrections, KYC) restent manuels [HYPOTHÈSE].

**Ce gain n'existe que si le registre partagé est la référence juridique.** Trois cadres actuels maintiennent au contraire une réconciliation :

- le **jumeau numérique** irlandais double le registre traditionnel ([Irish Funds](https://www.irishfunds.ie/news-knowledge/news/irish-funds-publishes-new-paper-mind-the-gap-operational-considerations-for-the-tokenisation-of-irish-domiciled-funds/)) ;
- la loi luxembourgeoise **Blockchain IV** autorise des teneurs de comptes multiples « à condition que la réconciliation soit assurée » ([Goodwin](https://www.goodwinlaw.com/en/insights/publications/2024/07/alerts-finance-dcb-luxembourg-proposes-updates-to-blockchain-laws)) ;
- **DTCC Ion** tourne en parallèle du système qui fait foi ([DTCC](https://www.dtcc.com/news/2022/august/22/project-ion)).

Le pitch doit donc dire : **« un registre de moins, pas un token de plus »**.

### 4.3 Délais : la VNI fixe le rythme, le registre accélère la confirmation et les transferts

| Étape | Fonds CH (contractuel) | Fonds LU (SICAV UCITS) | Fonds IE (ICAV / plc) | ETF (marché secondaire) |
|---|---|---|---|---|
| Cut-off | J, heure de la banque dépositaire (ex. 13h00) | J, heure du RTA (ex. 15h30 CET) | J, heure de l'administrateur [H] | Continu (heures de bourse) |
| VNI | J+1 (forward pricing) | J (exemple) | J ou J+1 [H] | iNAV intrajournalière |
| Règlement | ≤ J+3 | ≤ J+3 (rachats ≤ J+5) | J+2 / J+3 [H] ; primaire ETF : cash à T+2 | T+2, puis T+1 le 11/10/2027 |
| Transfert entre dépositaires | Non documenté | Semaines (référence britannique : 6 à 8 semaines) | Idem [H] | Livraison franco [H] |

Sources du tableau : [UBS (CH) Vitainvest](https://www.swissfunddata.ch/sfdpub/docs/fpd-8166_05_01-20241113-en.pdf) ; [PostFinance Fonds 4](https://www.swissfunddata.ch/sfdpub/docs/fpd-8271_04-20210617-de.pdf) ; [Fidelity Funds](https://www.fidelityinternational.com/legal/documents/FF/FI-en/pr.ff.en.FI.pdf) ; [SSGA SPDR ETFs Europe I](https://www.ssga.com/library-content/products/fund-docs/etfs/emea/2-GENERIC-EN-FP-IRISH-SPDR-I.pdf) ; [SIX, T+1](https://www.six-group.com/en/newsroom/media-releases/2025/20250912-settlement-cycle-six-swissstpc.html) ; [Quilter](https://www.quilter.com/help-and-support/platform-support/platform-articles/re-registration-of-assets/).

Le registre partagé ne change pas l'heure de la VNI. Il raccourcit en revanche ce qui l'entoure :

- **La confirmation.** ZKB annonçait des statuts d'ordre « en quelques minutes » ([FintechNewsCH](https://fintechnews.ch/blockchain_bitcoin/zurcher-kantonalbank-completes-first-blockchain-based-fund-transaction/42909/)), et BNPP AM une exécution à réception de la VNI au lieu d'un traitement par lots ([BNPP AM](https://www.bnpparibas-am.com/en/press/mediaroom-en-bnp-paribas-asset-management-launches-first-natively-tokenised-money-market-fund-shares-on-allfunds-blockchain/)).
- **Les transferts entre établissements.** Au Royaume-Uni, une ré-immatriculation prend 6 à 8 semaines, parfois plus de 45 jours ouvrés ([Quilter](https://www.quilter.com/help-and-support/platform-support/platform-articles/re-registration-of-assets/) ; [Fidelity Adviser Solutions](https://adviserservices.fidelity.co.uk/media/fnw/guides/fas-rereg-transfers-compared-05.pdf)). Si les deux banques sont sur le même registre, un transfert devient une écriture du jour [HYPOTHÈSE].

Le passage des titres à **T+1 le 11 octobre 2027** en Suisse, dans l'UE et au Royaume-Uni ([SIX](https://www.six-group.com/en/newsroom/media-releases/2025/20250912-settlement-cycle-six-swissstpc.html)) laissera le cycle des fonds (J+2 ou J+3) décalé. Une banque qui finance un achat de fonds par la vente d'une action supportera un écart de trésorerie d'un à deux jours. C'est un argument pour un règlement synchronisé [HYPOTHÈSE].

Le gain de délai sur le règlement lui-même reste faible tant que le cash est hors chaîne.

### 4.4 Reporting : oui pour les rétrocessions et les positions, non pour le reporting réglementaire

La Banque centrale d'Irlande reconnaît qu'un registre partagé rend les données plus cohérentes en réduisant les doublons, et qu'il peut automatiser souscriptions, rachats, transferts et opérations sur titres ([CBI DP12](https://www.centralbank.ie/docs/default-source/publications/discussion-papers/discussion-paper-12/dp12-dlt-tokenisation-in-financial-services.pdf?sfvrsn=a515721a_14) ; [Mondaq](https://www.mondaq.com/ireland/fintech/1765496/tokenised-funds-key-takeaways-from-the-central-banks-dlt-discussion-paper)). **Aucune source ne chiffre ce gain.**

Ce qu'un registre partagé simplifie réellement [HYPOTHÈSE] :

1. **Le calcul des rétrocessions.** Il repose aujourd'hui sur des positions omnibus à ventiler. Il deviendrait un calcul unique sur les positions par distributeur.
2. **Le rapprochement des positions** entre la banque, la banque dépositaire et le registre.
3. **La piste d'audit** (horodatage, cut-off, prix).

Ce qu'il ne simplifie pas [HYPOTHÈSE] :

- les données produit des gabarits **EMT, EPT et EET** ([FinDaTEx](https://findatex.eu/)), produites par le gérant ;
- le **reporting fiscal** ;
- l'information sur les **coûts et frais** due au client final (MiFID II, [règl. délégué 2017/565](https://eur-lex.europa.eu/eli/reg_del/2017/565/oj)) ;
- en Suisse, l'information sur les rétrocessions perçues de tiers ([LSFin art. 26](https://www.fedlex.admin.ch/eli/cc/2019/758/fr)).

La transparence a aussi une limite suisse. Inscrire les positions des clients finaux sur un registre partagé se heurte au **secret bancaire** et à la protection des données. Le registre portera donc plutôt les positions **par banque distributrice**. Cela suffit pour les rétrocessions, mais pas pour une transparence totale jusqu'à l'investisseur [HYPOTHÈSE à valider par le juriste].

**Formulation honnête : « moins de réconciliation et un calcul partagé des commissions », pas « reporting réglementaire simplifié ».**

### 4.5 Chiffres contradictoires entre sources

| Chiffre | Source A | Source B | Lecture retenue |
|---|---|---|---|
| Activité fonds de Clearstream | 5 000 Md€ en garde, 45 M transactions/an ([site Clearstream](https://www.clearstream.com/clearstream-en/funds-services)) | ≈ 4 000 Md€ (moyenne S1 2025), ≈ 70 M transactions en 2025 ([Deutsche Börse](https://www.deutsche-boerse.com/resource/blob/4887536/a68752b1b7c85f9cf530531c0c221dc4/data/company-release-q4-2025-en.pdf)) | Rapports Deutsche Börse ; site non daté |
| Fonds couverts par Vestima | 230 000 (juin 2025) ([Clearstream](https://www.clearstream.com/clearstream-en/newsroom/250618-4517656)) | 245 000 ([Clearstream](https://www.clearstream.com/clearstream-en/funds-services/fund-centre/execution/vestima)) | 245 000, chiffre plus récent |
| Allfunds 2025 | 1 760 Md€ administrés, revenu net 639,9 M€, EBITDA 417,3 M€, +17 % ([Investing.com](https://www.investing.com/news/company-news/allfunds-fy-2025-slides-deutsche-borse-deal-headlines-strong-results-93CH-4537439)) | Revenu net 622 M€ ([WealthBriefing](https://www.wealthbriefing.com/html/article.php/allfunds-posts-positive-financial-results-in-2025)) ; EBITDA 422 M€, +13 % ([Investment International](https://investment-international.com/News/allfunds-reports-record-ebitda-of-e422m-as-aua-grows-13/)) | 1 760 Md€ ; revenu et EBITDA à vérifier dans le rapport annuel |
| Prix du rachat d'Allfunds | ≈ 5,3 Md€ ([Bloomberg](https://www.bloomberg.com/news/articles/2026-01-21/deutsche-boerse-reaches-5-3-billion-buyout-deal-of-allfunds)) | 2,6 Md€ ([TradeInformer](https://tradeinformer.com/institutional-trading/deutsche-boerse-allfunds-acquisition-vote)) | 5,3 Md€ ; 2,6 Md€ est peut-être la seule part en numéraire |
| Économies de Calastone | −23 % des coûts d'exploitation | 0,13 % / 0,74 % = 17,6 % ([Calastone](https://www.calastone.com/insights/white-paper-decoding-the-economics-of-tokenisation-transforming-cost-dynamics-in-asset-management/)) | Incohérence interne : à clarifier avant citation |
| Économies DLT de Calastone (2019) | 1,9 Md£ sur quelques marchés ([Calastone](https://www.calastone.com/news/calastone-forecasts-over-1-9bn-savings-for-the-mutual-funds-market-in-move-to-blockchain/)) | 3,4 Md£ par an ([Global Custodian](https://www.globalcustodian.com/calastone-successfully-shifts-funds-network-dlt-platform/)) | Périmètres différents ; ne pas citer |
| Deloitte, 1,3 Md€ | Coût de mise en marché des fonds pour l'industrie, réductible de 70 % ([Funds Europe, 2016](https://www.funds-europe.com/luxembourg-report-2016/17775-distribution-the-central-question)) | Friction de distribution au seul Luxembourg ([Calastone](https://www.calastone.com/insights/delivering-efficiencies-in-distribution-through-blockchain/)) | Périmètre incertain et chiffre de 2016 : ne pas citer |
| Encours de BUIDL | ≈ 2,24 Md$ fin septembre 2026 ([RWA.xyz](https://app.rwa.xyz/assets/BUIDL)) | ≈ 2,7 Md$ (DeFiLlama) ; 2,87 Md$ à mi-juillet ([Eco](https://eco.com/support/en/articles/15483226-what-is-buidl-blackrock-s-tokenized-treasury-fund)) | Fourchette de 2,2 à 2,9 Md$ |
| Encours de BENJI | 1,98 à 2,5 Md$ (avril 2026, [Eco](https://eco.com/support/en/articles/15254016-benji-deep-dive-2026-franklin-templeton-s-tokenized-money-market)) | ≈ 687 M$ pour le fonds porté sur Bybit ([crypto.news](https://crypto.news/franklin-templeton-brings-687m-tokenized-fund-to-bybit/)) | Non résolu |
| « 50 Md£ tokenisés » chez L&G | Selon des sources secondaires ([SpazioCrypto](https://en.spaziocrypto.com/rwa/legal-general-50-billion-tokenized-funds-calastone/)) | Probablement la taille des fonds, pas les encours tokenisés ([L&G](https://group.legalandgeneral.com/newsroom/press-releases/2026/4/lg-liquidity-funds-now-live-on-sscs-calastone-tokenised-distribution-network/)) | Ne pas citer comme encours tokenisés |
| Part des ETF irlandais en Europe | ≈ 62 % (vers 2020) ([Euroclear](https://www.euroclear.com/content/dam/euroclear/news%20&%20insights/Format/Whitepapers-Reports/Europe%E2%80%99s%20ETF%20industry.pdf)) ; 74,2 % fin 2024 ([J.P. Morgan](https://www.jpmorgan.com/insights/etf/securities-services/ireland-eyes-continued-active-etf-dominance)) | 78 % en 2025 ([Irish Funds](https://www.irishfunds.ie/news-knowledge/news/ireland-extends-its-dominance-in-the-european-etf-market-driven-by-active-etfs-commanding-a-96-market-share/)) | Écarts de date et de devise ; retenir 74 à 78 % |
| Prolongation du pilote Helvetia | « Deux ans » ([Ledger Insights](https://www.ledgerinsights.com/swiss-wholesale-cbdc-trial-with-sdx-extended-by-2-years/)) | « Une année supplémentaire » ([BNS](https://www.snb.ch/en/the-snb/mandates-goals/payment-transactions/projekt_helvetia)) | Retenir « au moins jusqu'à mi-2027 » |
| Connexions de SIX aux TA | 300 TA en direct + réseau Euroclear de 500 TA ([SIX](https://www.six-group.com/en/products-services/securities-services/settlement-and-custody/global-fund-services.html)) | SIX adossé à Vestima depuis 2018 ([Global Custodian](https://www.globalcustodian.com/six-chooses-clearstream-consolidate-fund-processing/)) | Page SIX probablement obsolète |
| Iznes | > 7 Md€, non daté ([PRWeb](https://www.prweb.com/releases/iznes-world-s-first-blockchain-marketplace-for-funds-adopts-a-new-technology-866276678.html)) | 32 Md€ en mai 2026 ([Boursorama](https://www.boursorama.com/bourse/actualites/iznes-franchit-le-seuil-des-32-milliards-d-euros-d-actifs-tokenises-446b40948a317fd3cec78893ddd2abd3)) | 32 Md€ ; la pile technique actuelle (SETL ou Fabric) n'est pas vérifiée |

---

## 5. Cadre légal minimal : la Suisse permet, le Luxembourg confirme, l'Irlande consulte

| Juridiction | Base légale d'un registre sur blockchain | Statut probable de la plateforme | Bloquants | Délai estimé [H] |
|---|---|---|---|---|
| **Suisse** | Droits-valeurs inscrits (art. 973d CO, en vigueur depuis 2021) ; la LPCC ne fait pas obstacle | Prestataire d'externalisation de la direction et de la banque dépositaire, sans licence propre ; organisme d'autorégulation (OAR, au titre de la LBA) si la plateforme transfère des valeurs pour des tiers ; licence de système de négociation TRD si marché multilatéral | Titres intermédiés chez SIX SIS ; cash hors chaîne ; secret bancaire ; majorité de fonds étrangers | 3–6 mois (sans licence) à 12–24 mois (système de négociation TRD) |
| **Luxembourg** | La CSSF confirme qu'un agent administratif d'OPC peut tenir le registre sur DLT (FAQ de la circulaire 22/811) ; agent de contrôle pour les parts natives (Blockchain IV, 2024) | Outil d'un agent administratif agréé, sans licence ; sinon agrément d'agent administratif ou d'entreprise d'investissement | Réconciliation exigée par la loi ; Clearstream et FundsDLT sur place | 3–6 mois (via un agent existant) à 12–18 mois |
| **Irlande** | Jumeau numérique toléré ; registre natif seulement esquissé (DP12, mars 2026) | Outil d'un TA ou administrateur agréé ; dialogue avec la Banque centrale obligatoire | Pas de lignes directrices sur les dépositaires ; doctrine en consultation | 6–18 mois, issue incertaine |
| **UE** (pour LU et IE) | Régime pilote DLT : parts d'OPC < 500 M€ (réforme proposée) ; MiCA hors champ ; art. 3 CSDR pour les titres négociés | Infrastructure DLT agréée (système multilatéral, système de règlement ou combinaison des deux) seulement en cas de négociation ou de règlement de titres négociés | Plafonds actuels ; règlement espèces | 12–24 mois |

**Suisse.** La loi TRD est entrée en vigueur le 1er février 2021 (droits-valeurs inscrits) et le 1er août 2021 (reste du paquet). Elle est **technologiquement neutre** ([Library of Congress](https://www.loc.gov/item/global-legal-monitor/2021-03-03/switzerland-new-amending-law-adapts-several-acts-to-developments-in-distributed-ledger-technology/) ; [Lexology](https://www.lexology.com/library/detail.aspx?g=25d5cf60-9652-4e14-81b3-0e407df64da9)).

L'art. 973d CO exige trois choses :

- un registre protégé contre toute modification non autorisée, la loi citant en exemple « la gestion commune par plusieurs participants indépendants » ;
- la possibilité pour les créanciers de **vérifier l'intégrité sans intervention d'un tiers** ;
- un **pouvoir de disposer accordé aux créanciers, et non au débiteur** ([art. 973d CO](https://www.droit-bilingue.ch/fr-de/2/22/220-973d-1383.html), texte à relire sur Fedlex).

Le cabinet MME juge la LPCC « sans pertinence pour le processus de tokenisation » : c'est le droit des papiers-valeurs qui qualifie la part ([MME](https://www.mme.ch/en/magazine/articles/tokenization-of-investment-fund-units)). PwC estime que le cadre suisse permet de tokeniser directement des parts de fonds ([PwC Suisse](https://www.pwc.ch/en/insights/fs/tokenised-funds.html)).

Deux contraintes structurent le montage :

- **La banque dépositaire émet et rachète les parts** ([FINMA](https://www.finma.ch/en/authorisation/asset-management/custodian-banks-of-collective-investment-schemes/)). La plateforme est donc son prestataire, pas un TA.
- **Modifier le contrat d'un fonds existant exige l'approbation de la FINMA** (art. 27 LPCC, non relu) [à vérifier]. Le **L-QIF**, fonds réservé aux investisseurs qualifiés et dispensé d'approbation FINMA, facilite le lancement de produits innovants ([CDBF](https://cdbf.ch/en/category/collective-investment-schemes/)). C'est la voie la plus rapide [HYPOTHÈSE].

Une maison de titres doit disposer de 1,5 à 5 M CHF de capital minimal ([Goldblum](https://goldblum.ch/knowledgebase/license-for-the-financial-services)). Une licence de système de négociation TRD a été accordée pour la première fois à BX Digital en 2025 ([FINMA](https://www.finma.ch/en/news/2025/03/20250318-mm-dlt-handelssystem/)). Côté cash, le Conseil fédéral a mis en consultation, jusqu'en février 2026, une licence d'émetteur de stablecoins ([SIF](https://www.sif.admin.ch/dam/en/sd-web/dUviLBIEgTjT/Faktenblatt%20Stablecoins%20EN.pdf)).

**Le vrai bloquant suisse n'est pas légal mais structurel** : les parts circulent comme titres intermédiés chez SIX SIS. Un registre natif hors de SIX SIS oblige les banques dépositaires et distributrices à changer leur processus de conservation [HYPOTHÈSE].

**Luxembourg.** C'est le cadre le plus mûr.

- La FAQ de la CSSF sur la circulaire 22/811 indique que « tout agent administratif d'OPC exerçant la fonction de registraire peut utiliser la DLT pour tenir le registre » ([Hooghiemstra](https://www.linkedin.com/pulse/dlt-versus-tokenized-fund-unitsshares-under-law-hooghiemstra) ; [Luxembourg for Finance](https://www.luxembourgforfinance.com/portfolio/fund-tokenisation-a-competitive-edge/), source promotionnelle ; FAQ originale non consultée).
- La loi **Blockchain IV** (19 décembre 2024) crée l'**agent de contrôle**, réservé aux établissements de crédit, entreprises d'investissement et organismes de règlement. Il tient le registre qui fait foi des parts émises nativement sur DLT ([Goodwin](https://www.goodwinlaw.com/en/insights/publications/2024/12/insights-finance-ftec-luxembourg-adopts-blockchain-law-iv) ; [EY](https://www.ey.com/en_lu/insights/wealth-asset-management/luxembourg-market-pulse/the-control-agent-under-luxembourg-blockchain-iv-law-a-turning-point-for-transfer-agency)).
- Franklin Templeton a obtenu l'accord de la CSSF pour le premier UCITS entièrement tokenisé ([Luxembourg for Finance](https://www.luxembourgforfinance.com/en/news/franklin-templeton-to-launch-first-fully-tokenized-ucits-fund-in-luxembourg/)).
- Les dates des lois Blockchain I à III ont été données de mémoire et doivent être vérifiées sur Legilux.

**Irlande.** C'est le cadre le moins avancé. La Banque centrale n'a publié qu'un document de discussion, le **DP12, le 5 mars 2026**. Les cas soumis suivent surtout un modèle de jumeau numérique. Le DP12 décrit toutefois une cible : un registre à permission, exploité par des entités régulées, qui devient **l'enregistrement primaire** de la propriété ([CBI DP12](https://www.centralbank.ie/docs/default-source/publications/discussion-papers/discussion-paper-12/dp12-dlt-tokenisation-in-financial-services.pdf?sfvrsn=a515721a_14) ; [A&L Goodbody](https://www.algoodbody.com/insights-publications/central-bank-of-ireland-publishes-discussion-paper-on-dlt-tokenisation-in-financial-services)). Les lignes directrices sur les règles de dépositaire UCITS et AIFMD manquent encore, et l'éligibilité UCITS des instruments tokenisés n'est pas explicitement confirmée ([Mondaq](https://www.mondaq.com/ireland/fintech/1765496/tokenised-funds-key-takeaways-from-the-central-banks-dlt-discussion-paper)). Les cas réels sont des parts tokenisées de fonds monétaires : Schroders SOAR via Kinexys ([SRP](https://www.structuredretailproducts.com/insights/84378/schroders-secures-irish-central-bank-approval-to-debut-tokenised-share-class)) et Aviva sur XRPL.

**Union européenne.**

- **Régime pilote DLT** : les parts d'OPC n'y sont admises que sous **500 M€** d'encours ([BNP Paribas](https://securities.cib.bnpparibas/dlt-pilot-regime-eu-regulation/)). Trois infrastructures étaient autorisées en mai 2025 ([Goodwin](https://www.goodwinlaw.com/en/insights/publications/2025/07/insights-otherindustries-reg-dlt-pilot-regime-esma-report-highlights)). En décembre 2025, la Commission a proposé de supprimer les plafonds par produit et de porter le plafond global à 100 Md€ ([Taylor Wessing](https://www.taylorwessing.com/en/insights-and-events/insights/2026/06/dlt-pilot-regime-reform)).
- **MiCA** exclut les instruments financiers, dont les parts de fonds ([EUR-Lex](https://eur-lex.europa.eu/eli/reg/2023/1114/oj)). Il ne concerne que l'éventuel actif de règlement.
- **L'art. 3 du CSDR** impose l'inscription dans un dépositaire central (CSD) des titres négociés sur une plateforme ([ESMA, Q&A](https://www.esma.europa.eu/sites/default/files/library/esma70-460-189_qas_dlt_pilot_regulation.pdf)). Il touche les ETF, mais pas un fonds non coté souscrit auprès de son TA. C'est l'espace légal d'un registre sur DLT tenu pour le TA [interprétation à valider].

---

## 6. Valeur ajoutée réelle : un registre suisse natif, pas un hub de plus

### 6.1 Où la promesse tient et où elle est faible

| Promesse | Verdict | Pourquoi |
|---|---|---|
| « Point d'entrée unique » | **Faible en soi** | Vestima l'offre déjà pour 245 000 fonds ([Clearstream](https://www.clearstream.com/clearstream-en/funds-services/fund-centre/execution/vestima)) ; différenciant seulement pour les fonds suisses, mal servis (lien via UBS, SIX adossé à Vestima) |
| « Coût total inférieur à Clearstream / Euroclear » | **Non démontrée** ; plausible hors STP | Garde ≈ 1 pb et ordres STP déjà bon marché ; en revanche 55 à 350 CHF par ordre non STP et 5 000 CHF/mois de minimum chez SIX ([SIX SIS](https://www.six-group.com/dam/download/securities-services/custody-and-settlement/info-center/clients/pricing/scu-fees-260101-international-en.pdf)) ; une baisse de prix de 10 à 20 % des acteurs en place suffirait à effacer l'avantage pour la plupart des banques [H] |
| « Moins de réconciliation » | **Forte seulement avec un registre natif** | Un golden record central fait aussi bien ; un jumeau numérique ajoute un livre (§4.2) |
| « Reporting simplifié » | **Partielle** | Oui pour les rétrocessions, les positions et l'audit ; non pour EMT/EPT/EET, la fiscalité et les coûts et frais (§4.4) |
| « Règlement plus rapide » | **Faible en Suisse aujourd'hui** | SECOM règle déjà en temps réel ; le DvP atomique attend une jambe CHF tokenisée, encore en pilote |
| Transparence vers l'investisseur final | **Forte mais bridée** | Supprime la ventilation omnibus au niveau de la banque distributrice ; le secret bancaire limite la transparence jusqu'au client [H] |
| Neutralité face à la consolidation | **Forte** | Après 2027, Deutsche Börse détient Vestima, FundsDLT, Fund Centre et Allfunds ; SS&C détient Calastone (§1.3) |
| Transferts entre banques | **Forte, à mesurer** | 6 à 8 semaines au Royaume-Uni ([Quilter](https://www.quilter.com/help-and-support/platform-support/platform-articles/re-registration-of-assets/)) ; aucune donnée suisse |
| ETF (IE, LU, CH) | **Nulle** | Registre à porteur unique ; marché secondaire en bourse, CCP et CSD ; art. 3 CSDR |
| Fonds monétaires tokenisés pour crypto-natifs | **Hors sujet** | Autre marché (collatéral, stablecoins) ; BUIDL ≈ 2,2 Md$ ([RWA.xyz](https://app.rwa.xyz/assets/BUIDL)) |

**Thèse nette.** FundChain n'a de valeur propre que s'il devient **le registre juridique** des parts. Ce rôle n'est aujourd'hui tenu sur un registre partagé pour **aucun fonds suisse**. Un hub de messagerie de plus, même sur blockchain, reproduirait FundsDLT en Suisse : des pilotes répétés, sans réseau.

### 6.2 Premier couple recommandé : Suisse × fonds pour investisseurs qualifiés en droits-valeurs inscrits

| Couple juridiction / produit | Gain potentiel | Concurrence | Faisabilité légale | Verdict |
|---|---|---|---|---|
| **CH × nouveau L-QIF (alternatif ou marchés privés), parts en droits-valeurs inscrits** | Élevé par ordre : c'est le segment le plus cher (350 CHF par ordre de hedge fund chez SIX) et le plus manuel (FMG C chez Clearstream, [Clearstream](https://www.clearstream.com/clearstream-en/funds-services/a17029-1308716)) | Faible : aucun fonds suisse en droits-valeurs inscrits trouvé ; FundsDLT ne fait que de la messagerie | Bonne en principe (art. 973d CO ; L-QIF sans approbation FINMA) ; à valider | **Premier couple** |
| CH × fonds contractuel classique via banque tierce (CH-2) | Moyen : chaîne déjà courte, SECOM en temps réel | Moyenne : SIX SIS, Vestima via UBS | Modification du contrat de fonds à faire approuver par la FINMA [à vérifier] | Étape 2, une fois le réseau amorcé |
| CH × fonds en chaîne intégrée (un seul groupe) | Faible : un seul intermédiaire | n/a | n/a | Exclure |
| LU × fonds non coté via un agent administratif partenaire | Élevé en théorie (3 à 4 livres) | Très forte : Digital TA de Clearstream, Allfunds Blockchain | Meilleure des trois : registre DLT confirmé par la CSSF | **Repli** si le pivot suisse échoue ; sinon étape 3 |
| IE × fonds non coté | Élevé en théorie | Forte | Incertaine : jumeau numérique, doctrine en consultation | Attendre les suites du DP12 |
| ETF IE / LU / CH | Nul pour un point d'entrée d'ordres | Duopole ICSD, bourses | Art. 3 CSDR | Exclure |

**Pourquoi ce couple.** C'est le seul où les quatre leviers s'additionnent :

- un **espace vide** : aucun registre de parts suisses sur DLT ;
- un **coût actuel élevé et démontré** : les tarifs non STP et alternatifs ;
- des **flux nouveaux** : un fonds lancé directement sur le registre n'a pas de stock à migrer, ce qui contourne le coût de sortie des hubs ;
- une **voie réglementaire rapide** : L-QIF, droit-valeur inscrit.

Le couple suit aussi la leçon d'Iznes : commencer par les institutionnels et les investisseurs qualifiés, avec des clients qui sont aussi actionnaires.

Le pilote réunit :

- une direction de fonds et sa banque dépositaire, qui émet sur le registre ;
- deux à trois banques distributrices (une banque cantonale, une banque privée, un gérant indépendant via sa banque) ;
- un règlement en CHF via SIC hors chaîne (PvC) ;
- une passerelle vers SIX SIS pour les banques qui veulent garder une représentation en titres intermédiés [HYPOTHÈSE de conception].

**Divergence signalée.** La note de recherche juridique recommandait de commencer par le **Luxembourg**, seul cadre où le registre sur DLT est confirmé par le régulateur. Ce rapport retient la Suisse pour trois raisons :

- le Luxembourg est le terrain de Clearstream (FundsDLT, Digital TA) et d'Allfunds Blockchain, deux acteurs bientôt réunis chez Deutsche Börse ;
- le Digital TA de Clearstream y vend déjà exactement « l'outil DLT d'un agent administratif » ;
- la priorité commerciale du projet est la Suisse.

Le Luxembourg reste le **plan de repli explicite**. Il s'active si l'analyse juridique conclut que des parts de fonds suisses en droits-valeurs inscrits ne sont pas praticables, ou si la coexistence avec SIX SIS bloque.

**Modèle de prix** [HYPOTHÈSE] :

- un prix par ordre **sans minimum**, nettement sous les 55 CHF non STP de SIX ;
- une redevance de registre payée par la direction de fonds ;
- un modèle d'économie partagée sur les rétrocessions.

Le modèle d'Allfunds, payé par les sociétés de gestion, montre qu'une facturation explicite à la banque est un handicap.

### 6.3 Conditions de go et risques à surveiller

**Conditions de go proposées pour la phase 4** [HYPOTHÈSE] :

1. un engagement écrit d'au moins une direction de fonds suisse, de sa banque dépositaire et d'au moins une banque distributrice ;
2. un avis juridique, puis un échange avec la FINMA, validant le schéma de registre (art. 973d CO) et le statut de la plateforme ;
3. un chiffrage du coût interne de réconciliation et de rétrocessions chez au moins deux banques, qui montre une économie nette après riposte tarifaire des acteurs en place ;
4. un prix par ordre inférieur à 55 CHF.

| Risque | Signal sourcé | Parade [H] |
|---|---|---|
| SIX tokenise lui-même les parts suisses sur SIX SIS, avec Helvetia | SDX réintégré dans SIX SIS ([Bloomberg](https://www.bloomberg.com/news/articles/2025-10-06/swiss-exchange-group-to-bring-digital-assets-unit-sdx-in-house)) ; pilote SIX–Pictet ([SIX](https://www.six-group.com/en/newsroom/media-releases/2025/20250710-six-pictet-pilot-project.html)) | Se poser en partenaire de SIX (règlement et passerelle SIX SIS), pas en concurrent |
| Clearstream vend son Digital TA aux directions de fonds suisses | Extension du Digital TA en juin 2026 ; références ZKB et UBS ([Clearstream](https://www.clearstream.com/clearstream-en/newsroom/260622-5343058)) | Neutralité, registre de droit suisse natif, prix |
| Riposte tarifaire des acteurs en place | « Euroclear slashes FundSettle prices » ([Finextra](https://www.finextra.com/pressarticle/21288/euroclear-slashes-fundsettle-prices), date non confirmée) | Viser les segments où l'écart est structurel (non STP, petits acteurs) |
| Effet réseau absent (« l'œuf et la poule ») | Pilotes FundsDLT de 2021 à 2025 sans réseau ([Ledger Insights](https://www.ledgerinsights.com/zurcher-kantonalbank-ubs-in-fundsdlt-pilot/)) ; consortiums fermés | Démarrer avec un couple déjà engagé ; actionnariat des participants, sur le modèle d'Iznes |
| Le registre n'est pas qualifié de droit-valeur inscrit | Aucun fonds suisse en droits-valeurs inscrits trouvé (§1.5) | Registre sur blockchain avec signatures des parties ; validation FINMA avant de construire |
| Le secret bancaire limite la transparence | Pas de source ; [HYPOTHÈSE] | Registre tenu au niveau de la banque distributrice ; pseudonymisation |
| Fournisseur ou pile technologique défaillante | Administration de SETL ([The TRADE](https://www.thetradenews.com/blockchain-specialist-setl-calls-administrators-amid-corporate-restructuring/)) ; Tessera retiré de Besu ; QLDB arrêtée | Maîtriser la propriété intellectuelle ; éviter les fonctions propriétaires |

Les infrastructures DLT indépendantes ont toutes fini absorbées ou fermées (§1.4). FundChain doit donc choisir dès le départ entre deux modèles : une **utilité de place détenue par ses participants**, ou un actif **conçu pour être racheté** par SIX ou un ICSD [HYPOTHÈSE].

---

## 7. Points à traiter un par un avant de construire

### 7.1 Liste priorisée

Les points suivent l'ordre des phases du projet. Dans chaque phase, ils sont classés par priorité. Chaque point se clôt par une validation explicite avant le suivant. « Critique » signifie que le point conditionne le go ou no-go.

**Phase 1 — Opérations** (`expert-operations-fonds`)

1. **[Critique] Volumétrie et répartition des ordres traités par les banques suisses.** À mesurer : la part des fonds suisses et étrangers ; la part des chaînes intégrées, des banques tierces et des hubs ; la part des ordres non STP et alternatifs ; le nombre d'ordres par jour. Aucune statistique publique n'existe. *À valider* : la taille du marché adressable du premier couple.
2. **[Critique] Coût interne de réconciliation et de rétrocessions** (équivalents temps plein, ruptures, litiges) dans deux à trois banques et une banque dépositaire, avec un test du modèle « trois contrôles par frontière ». C'est le socle de la promesse de coût. *À valider* : économie unitaire par ordre et par position.
3. **[Haute] Flux suisse réel.** À cartographier : le canal d'envoi à la banque dépositaire (SWIFT, plateforme, e-mail, fax), les cut-offs, le rôle exact de SIX SIS, l'existence ou non d'un registre pour les SICAV suisses, et les délais de transfert entre banques. *À valider* : schéma CH-2 corrigé.
4. **[Moyenne] Besoin réel de DvP atomique** et effet du passage à T+1 (11 octobre 2027) sur le cycle des fonds. *À valider* : le cash hors chaîne suffit-il pour le pilote ?

**Phase 1 — Marché** (`analyste-infrastructures`)

5. **[Critique] Stratégie de SIX en 2026.** Global Fund Services est-il toujours adossé à Vestima ? SIX a-t-il un projet de tokenisation de parts sur SIX SIS ? *À valider* : SIX est-il partenaire, concurrent ou les deux ?
6. **[Haute] Grilles tarifaires réelles.** À extraire : Clearstream (FMG A/B/C), FundSettle / FundsPlace et le barème STP de SIX SIS. À calculer : le coût total d'une banque type, et le prix cible de FundChain. *À valider* : écart de prix démontrable.
7. **[Haute] Appétit des partenaires.** Entretiens avec trois directions de fonds, trois banques dépositaires et trois banques distributrices (cantonale, privée, gérant indépendant). *À valider* : un couple pilote nommé, idéalement actionnaire.
8. **[Moyenne] Effets de la consolidation** (Deutsche Börse–Allfunds au S1 2027, SS&C–Calastone) sur les prix et la dépendance des banques suisses. *À valider* : poids de l'argument de neutralité.

**Phase 2 — Réglementaire** (`juriste-reglementaire`)

9. **[Critique, pivot] Parts de fonds suisses (FCP, L-QIF) en droits-valeurs inscrits.** À établir : la faisabilité, le contenu du contrat de fonds, l'approbation FINMA éventuelle, la coexistence avec les titres intermédiés chez SIX SIS (LTI), et le rôle de la banque dépositaire comme émettrice. *À valider* : go juridique, ou bascule vers le plan de repli luxembourgeois.
10. **[Critique, pivot d'architecture] Une base centrale peut-elle satisfaire l'art. 973d CO ?** Points à trancher : l'intégrité vérifiable sans tiers et le pouvoir de disposer du créancier. Sinon, quel niveau minimal de blockchain faut-il ? *À valider* : périmètre de la blockchain.
11. **[Haute] Statut de la plateforme.** Options : prestataire d'externalisation sans licence, affiliation à un OAR, maison de titres ou système de négociation TRD ; avec les délais réels de chacune. *À valider* : statut retenu et calendrier.
12. **[Haute] Secret bancaire et protection des données.** À fixer : la granularité du registre (banque distributrice ou investisseur final) et le traitement des rétrocessions (LSFin art. 26). *À valider* : modèle de données du registre.
13. **[Moyenne] Luxembourg et Irlande.** À confirmer : le texte de la FAQ CSSF 22/811 et le rôle de l'agent de contrôle. À suivre : les suites du DP12 de la Banque centrale d'Irlande. *À valider* : solidité du plan de repli.

**Phase 3 — Architecture** (`architecte-dlt`)

14. **[Haute] Conception de l'hybride.** Moteur d'ordres, reporting et rétrocessions en base centrale ; registre de parts sur blockchain à permission (Canton contre Corda), avec nœuds hébergés et clés des parties ; confidentialité entre banques. *À valider* : architecture cible et périmètre du prototype.
15. **[Haute] Jambe cash.** SIC hors chaîne avec PvC dès le départ ; connecteurs optionnels vers BX Digital–SIC, Helvetia, les dépôts tokenisés ou CHFD, et Pontes pour l'euro. *À valider* : schéma de règlement du pilote.
16. **[Moyenne] Interopérabilité.** Messages ISO 20022 setr, passerelle Vestima / FundsPlace pour les fonds luxembourgeois et irlandais, lien avec SIX SIS. *À valider* : liste des interfaces du prototype.

**Phase 4 — Challenge** (`challenger`)

17. **[Critique] Go ou no-go chiffré.** À établir : l'économie nette pour une banque type face à Clearstream et SIX, après une riposte tarifaire de −10 à −20 %, et un test du pot suisse de 90 à 220 M CHF. *À valider* : go ou no-go, et confirmation du premier couple.
18. **[Haute] Conditions du go et gouvernance.** À arrêter : les engagements écrits, le retour de la FINMA, le prix inférieur à 55 CHF, et le choix entre utilité de place détenue par ses participants et sortie par rachat. *À valider* : conditions du prototype (phase 5).

### 7.2 Chiffres à revérifier sur les sources primaires

| # | Chiffre | Valeur dans ce rapport | Problème | Source primaire à ouvrir |
|---|---|---|---|---|
| 1 | Tarifs SIX SIS Global Funds | 55 / 350 / 75 / 0,55 CHF ; minimum de 5 000 CHF/mois | L'extrait agrège peut-être plusieurs versions | [Grille internationale, janv. 2026](https://www.six-group.com/dam/download/securities-services/custody-and-settlement/info-center/clients/pricing/scu-fees-260101-international-en.pdf) ; [grille domestique](https://www.six-group.com/dam/download/securities-services/custody-and-settlement/info-center/clients/pricing/scu-fees-260101-en.pdf) |
| 2 | Encours et volumes de Clearstream | ≈ 4 000 Md€ ; ≈ 70 M transactions ; 537 M€ de revenu net | Contradiction avec le site ; période du revenu non confirmée | [Rapport annuel 2025 de Deutsche Börse](https://www.deutsche-boerse.com/dbg-en/investor-relations/financial-reports/annual-report-2025) |
| 3 | Grille Clearstream FMG A/B/C | Non extraite | Toute estimation reste [H] | [Grille de juin 2026](https://www.clearstream.com/caas/v1/media/4975940/data/1f304976ff6ad2380dba35923d49b874/2606-fee-schedule-en.pdf) |
| 4 | Allfunds 2025 | 1 760 Md€ ; revenu net 622 ou 639,9 M€ | Contradictions | [Rapport annuel Allfunds 2025](https://allfunds.com/en/annual-report-2025/) |
| 5 | Prix du rachat d'Allfunds | 5,3 Md€ | 2,6 Md€ selon une autre source | [Annonce ad hoc de Deutsche Börse](https://www.deutsche-boerse.com/dbg-en/investor-relations/announcements-and-services/ad-hoc-announcements/Deutsche-B-rse-AG-Deutsche-B-rse-AG-and-Allfunds-Group-plc-reached-an-agreement-on-recommended-acquisition-by-Deutsche-B-rse-AG-of-Allfunds-Group-plc-4915600) |
| 6 | Automatisation EFAMA-Swift | 93,2 % (T4 2020) | Ancien ; la série est peut-être arrêtée | [EFAMA, Fund processing standardisation](https://www.efama.org/policy/fund-processing-standardisation) |
| 7 | Économies revendiquées par Calastone | 135 Md$ ; −23 % ; 0,13 % ; 0,74 % | Incohérence interne ; méthode | [Livre blanc Calastone](https://www.calastone.com/insights/white-paper-decoding-the-economics-of-tokenisation-transforming-cost-dynamics-in-asset-management/) |
| 8 | Tarif de Calastone | 1,50 à 2,70 £ par ordre | Source secondaire non datée, antérieure à SS&C | [Brochure Calastone (2017)](https://calastone.com/wp-content/uploads/2017/06/Calastone-Transaction-Services-Brochure.pdf) puis grille actuelle |
| 9 | Digital TA de Clearstream | « Jusqu'à −50 % » ; « 11 Md€ on-chain » | Revendication ; 11 Md€ non confirmé | [Clearstream, 22/06/2026](https://www.clearstream.com/clearstream-en/newsroom/260622-5343058) |
| 10 | Iznes | 32 Md€ ; ≈ 70 gérants ; ≈ 7 200 opérations/mois | Source de presse | Communiqué Iznes de mai 2026 ([iznes.io](https://iznes.io/en/presentation-entreprise/)) |
| 11 | Marché suisse des fonds | 1 740 Md CHF ; 1 984 fonds suisses contre 8 611 étrangers | Périmètre suisses + étrangers ; encours des seuls fonds suisses inconnu | [Statistiques AMAS / Swiss Fund Data](https://www.swissfunddata.ch/sfdpub/en/market/show/2404) ; [rapport FINMA 2025](https://report.finma.ch/2025/en/market-developments/market-developments-in-the-asset-management-industry) |
| 12 | Lien Clearstream–SIX SIS | Fonds routés par Vestima restés sur le lien UBS | À confirmer en 2026 | [Clearstream a25064](https://www.clearstream.com/clearstream-en/res-library/settlement/a25064-4701372) |
| 13 | Partenariat SIX–Vestima | En place depuis 2018 | Continuité en 2026 non vérifiée | [Global Custodian](https://www.globalcustodian.com/six-chooses-clearstream-consolidate-fund-processing/) ; [SIX](https://www.six-group.com/en/products-services/securities-services/settlement-and-custody/global-fund-services.html) |
| 14 | Textes suisses | Art. 973d CO, art. 27 et 73 LPCC, LBA art. 2, L-QIF | Textes non relus en session | [Fedlex, LPCC](https://www.fedlex.admin.ch/eli/cc/2006/822/fr) ; [Fedlex, CO art. 973d](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_973_d) |
| 15 | FAQ CSSF 22/811 sur la DLT | Registre sur DLT autorisé | Citée via des sources secondaires | [CSSF 22/811](https://www.cssf.lu/wp-content/uploads/cssf22_811eng.pdf) et FAQ sur cssf.lu |
| 16 | DP12 de la Banque centrale d'Irlande | Jumeau numérique ; registre primaire en cible | Texte intégral non lu | [CBI DP12](https://www.centralbank.ie/docs/default-source/publications/discussion-papers/discussion-paper-12/dp12-dlt-tokenisation-in-financial-services.pdf?sfvrsn=a515721a_14) |
| 17 | Échecs de règlement des ETF | 17,32 % (EEE) | À citer avec sa période exacte | [ESMA, juin 2025](https://www.esma.europa.eu/sites/default/files/2025-06/ESMA74_1_1.PDF) |
| 18 | Helvetia III | Au moins jusqu'à mi-2027 | Durée de prolongation divergente | [BNS, 30/06/2025](https://www.snb.ch/en/publications/communication/press-releases/2025/pre_20250630) |
| 19 | Pontes | En service depuis le 21/09/2026 | Sources de presse uniquement | Communiqué de la BCE |
| 20 | Délais de transfert | 6 à 8 semaines (Royaume-Uni) | Aucune donnée suisse | Entretiens avec des banques suisses (point 3) |
