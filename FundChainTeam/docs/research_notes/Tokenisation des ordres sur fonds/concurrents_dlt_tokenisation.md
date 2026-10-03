# Concurrents DLT et initiatives de tokenisation : distribution de fonds et registres de parts (état au 1er octobre 2026)

> **Note de méthode.** Ces notes ont été rédigées le 1er octobre 2026 à partir de recherches web. Le proxy de sortie a bloqué l'accès direct (WebFetch) à toutes les sources primaires testées (clearstream.com, allfunds.com, iznes.io, calastone.com, snb.ch, finma.ch, esma.europa.eu, sec.gov, zkb.ch, ledgerinsights.com, funds-europe.com, boursorama.com, legalandgeneral.com). Les faits ci-dessous viennent donc des **résumés renvoyés par le moteur de recherche** pour chaque URL citée. Ils n'ont pas été vérifiés sur le texte intégral. Les chiffres clés sont à recontrôler avant toute publication (pitch). Le budget de recherche de la session s'est épuisé avant la fin. Les points non couverts sont listés dans les rubriques « Gaps ». Tout ce qui n'est pas sourcé est marqué **[HYPOTHÈSE]**.

---

## 1. FundsDLT (Luxembourg, aujourd'hui Clearstream / Deutsche Börse)

### Takeaway
FundsDLT n'existe plus comme acteur indépendant. Depuis janvier 2024, la société appartient entièrement à Deutsche Börse. Elle est intégrée à Clearstream Fund Services comme couche blockchain branchée sur Vestima, et vendue sous la forme d'un « digital transfer agency » en SaaS. C'est **le seul concurrent DLT ayant déjà traité des ordres sur fonds entre banques suisses** : ZKB en 2021, puis ZKB et UBS en 2025. Mais il s'agissait d'une messagerie d'ordres sur blockchain privée (Quorum), pas d'un registre de référence en droit suisse.

### Cited Findings
- **Origine.** FundsDLT est né au sein de Fundsquare, filiale de la Bourse de Luxembourg (LuxSE), puis a été scindé en entité indépendante. Une collaboration Fundsquare / InTech (groupe POST) / KPMG Luxembourg a réalisé la première transaction de fonds sur blockchain au Luxembourg. — [Finextra](https://www.finextra.com/newsarticle/30800/luxembourg-funds-industry-completes-first-live-blockchain-transaction) ; [LHoFT / Medium](https://medium.com/@The_LHoFT/fund-transaction-on-blockchain-technology-completed-in-luxembourg-7b88f9640d11)
- La LuxSE a ensuite vendu Fundsquare. — [Paperjam](https://en.paperjam.lu/article/luxembourg-stock-exchange-sell) (date non vérifiée)
- **Série A** : Clearstream, Credit Suisse Asset Management, LuxSE (investisseur fondateur) et Natixis Investment Managers. — [Ledger Insights](https://www.ledgerinsights.com/fundsdlt-blockchain-clearstream-credit-suisse-natixis-series-a/)
- **Mars 2020.** Deutsche Börse (via Clearstream) s'associe à LuxSE, Credit Suisse AM et Natixis IM pour investir dans FundsDLT, présenté comme « la première plateforme à exécuter des souscriptions de fonds sur infrastructure blockchain ». — [Clearstream, 10.01.2024](https://www.clearstream.com/clearstream-en/newsroom/240110-3818150)
- **Rachat.** Deutsche Börse annonce le rachat des parts restantes en août 2023. — [Clearstream, 03.08.2023](https://www.clearstream.com/clearstream-en/newsroom/230803-3638302) ; [Markets Media](https://www.marketsmedia.com/deutsche-borse-acquires-rest-of-fundsdlt/)
- Le closing est annoncé le 10 janvier 2024, après approbation de la CSSF. — [Clearstream, 10.01.2024](https://www.clearstream.com/clearstream-en/newsroom/240110-3818150) ; [Ledger Insights](https://www.ledgerinsights.com/deutsche-borse-fundsdlt-completes-acquisition/)
- Les anciens actionnaires Credit Suisse AM et Natixis IM, ainsi qu'UBS Asset Management, « restent engagés comme clients ». — [Clearstream, 03.08.2023](https://www.clearstream.com/clearstream-en/newsroom/230803-3638302) (attribution exacte de la citation à vérifier : elle provient d'un résumé de recherche)
- **Logique d'intégration (2024).** L'objectif est de faire passer à l'échelle les transactions de fonds de bout en bout sur blockchain, adossées à Vestima. FundsDLT reste une entité opérant de façon indépendante au Luxembourg, au sein de Clearstream Fund Services. — [Clearstream, 10.01.2024](https://www.clearstream.com/clearstream-en/newsroom/240110-3818150)
- **Positionnement 2025-2026.** FundsDLT est « entièrement intégré à Clearstream Fund Services » comme « digital enabler ». L'offre « digital transfer agency » est un SaaS déployé chez le client. Elle automatise l'émission de parts, le suivi de la propriété, l'intégration KYC/AML et les opérations sur titres. Clearstream annonce **jusqu'à 50 % de réduction des coûts opérationnels** chez des clients de plusieurs juridictions. Elle annonce aussi des déploiements sur de nouveaux marchés et une intégration complète dans son infrastructure. — [Clearstream, 22.06.2026](https://www.clearstream.com/clearstream-en/newsroom/260622-5343058) ; [Asset Servicing Times, juin 2026](https://www.assetservicingtimes.com/assetservicesnews/digitalassetsarticle.php?article_id=18074) ; [Global Custodian](https://www.globalcustodian.com/clearstream-expands-digital-transfer-agency-offering/) ; [Clearstream, 30.05.2025](https://www.clearstream.com/clearstream-en/newsroom/250530-4543336)
- **Chiffre contradictoire.** Un résumé de recherche attribue à Clearstream « plus de 11 Md€ d'actifs on-chain déjà traités ». Une seconde requête sur les mêmes pages n'a pas retrouvé ce chiffre. **Non confirmé.** — [Clearstream, 22.06.2026](https://www.clearstream.com/clearstream-en/newsroom/260622-5343058) (à vérifier)
- **Premier cas suisse (janvier 2021).** Zürcher Kantonalbank (ZKB) et Clearstream traitent les premières transactions de fonds sur blockchain de bout en bout via FundsDLT :
  - l'investisseur final passe l'ordre dans une application mobile, directement sur la blockchain privée ;
  - l'ordre est transmis à Vestima via la blockchain ;
  - le délai de traitement passe de plusieurs heures à quelques minutes ;
  - ZKB réutilise sa connexion Vestima existante, par API FundsDLT, et accède aux **48 marchés de fonds connectés** sans nouvel onboarding.
  — [Deutsche Börse, communiqué](https://deutsche-boerse.com/xetra-en/newsroom/press-releases/list-press-releases/Z-rcher-Kantonalbank-Clearstream-and-FundsDLT-process-blockchain-based-fund-transactions--2408350) ; [FintechNewsCH](https://fintechnews.ch/blockchain_bitcoin/zurcher-kantonalbank-completes-first-blockchain-based-fund-transaction/42909/) ; [InServ Global, 01.2021](https://www.inservglobal.news/2021/01/zkb-and-clearstream-process-first-fund-order-via-fundsdlt/)
- **Pilote ZKB-UBS (11-12 mars 2025).** ZKB transmet des ordres de souscription de parts de fonds UBS à UBS via FundsDLT. UBS renvoie l'avancement et la confirmation via la blockchain. Présenté comme une première dans la banque suisse, avec l'argument de la disponibilité des statuts d'ordre en temps réel. FundsDLT tourne sur **Quorum**, une blockchain d'entreprise privée à accès restreint. — [ZKB, communiqué 11.03.2025](https://www.zkb.ch/de/ueber-uns/medien/medienmitteilungen/2025/instruktionen-fondsanteile-blockchain.html) ; [Ledger Insights](https://www.ledgerinsights.com/zurcher-kantonalbank-ubs-in-fundsdlt-pilot/) ; [FintechNewsCH](https://fintechnews.ch/blockchain_bitcoin/zkb-ubs-blockchain-fund-transactions/75090/) ; [Crypto Valley Journal](https://cryptovalleyjournal.com/focus/blockchain/ubs-and-zkb-test-fund-transactions-via-blockchain/)
- UBS AM et FundsDLT ont aussi conclu un pilote / proof of concept de distribution sur blockchain. — [Markets Media](https://www.marketsmedia.com/ubs-am-and-fundsdlt-conclude-blockchain-distribution-pilot/) ; [The TRADE](https://www.thetradenews.com/fundsdlt-and-ubs-complete-investment-funds-blockchain-proof-of-concept-pilot/) (date non vérifiée)
- Clearstream publie un livre blanc « The Next Era of Fund Distribution » et commercialise un « Digital Dealing Service ». — [Clearstream, livre blanc](https://www.clearstream.com/clearstream-en/newsroom/white-paper-the-next-era-of-fund-distribution--5350134) ; [Clearstream, Digital Dealing Service](https://www.clearstream.com/clearstream-en/funds-services/distributors-and-global-custodians/digital/digital-fund-access-and-custody)

### Inferences
- FundsDLT est devenu un **outil d'incumbent** : une extension blockchain de Vestima et un logiciel de TA. Ce n'est plus un réseau neutre. En Suisse, une banque qui l'adopte renforce sa dépendance à Clearstream.
- Les cas suisses publiés (2021, 2025) portent sur la **transmission d'instructions** (souscription, statut, confirmation). Rien n'indique publiquement que le registre des parts ou le règlement espèces aient été tenus on-chain. Le registre de référence reste celui du TA ou de la banque dépositaire. Ce n'est pas un droit-valeur inscrit (Registerwertrecht) au sens du CO.
- Le pilote ZKB-UBS (2025) arrive **quatre ans après** la première transaction ZKB (2021). Signe que le passage de deux banques à un réseau suisse n'a pas eu lieu. Raisons probables, toutes **[HYPOTHÈSE]** : pas d'effet réseau, priorité donnée à Vestima, absence de jambe cash.
- FundsDLT est le concurrent le plus direct de FundChain en Suisse : il a les références (ZKB, UBS) et la distribution Clearstream. **[HYPOTHÈSE]** Clearstream pourrait proposer son « digital TA » aux directions de fonds suisses.

### Gaps
- Nombre de clients, de fonds et de distributeurs connectés à FundsDLT en 2026 : non trouvé.
- Volume d'ordres et passage en production du flux ZKB-UBS : non vérifiés.
- Le chiffre de 11 Md€ n'est pas confirmé.
- Tarification : aucune grille publique trouvée.
- Rôle de KNEIP (cité dans la question) : non trouvé.

---

## 2. Allfunds Blockchain (Espagne / groupe Allfunds, bientôt Deutsche Börse)

### Takeaway
Allfunds Blockchain **n'est pas l'ex-FundsDLT**. C'est la filiale logicielle blockchain du groupe Allfunds. Ses cas en production les plus concrets datent de 2025-2026 : parts de fonds monétaires nativement tokenisées pour BNPP AM, fonds espagnol Azvalor, API marchés privés avec Alchelyst et Apex. Point majeur : Deutsche Börse rachète Allfunds (5,3 Md€, closing attendu au 1er semestre 2027). **Les deux principales piles DLT européennes de distribution de fonds (FundsDLT et Allfunds Blockchain) seront donc sous le même toit que Vestima.**

### Cited Findings
- Allfunds Blockchain est décrite comme une société logicielle dédiée, qui développe une infrastructure de marché blockchain pour l'industrie des fonds avec des solutions « prêtes à l'emploi », dont « FAST ». — [Allfunds, rapport annuel 2025](https://allfunds.com/en/annual-report-2025/) ; [Allfunds Blockchain](https://allfunds.com/en/distributors/blockchain)
- **Groupe Allfunds 2025** : revenus nets 622 M€, actifs administrés record de 1 760 Md€. Les revenus d'abonnement pèsent environ 10 % du total. — [WealthBriefing](https://www.wealthbriefing.com/html/article.php/allfunds-posts-positive-financial-results-in-2025) ; [Allfunds, lettre du CEO 2025](https://allfunds.com/docs/annual-report-2025/Letter_from_the_CEO.pdf)
- **BNP Paribas AM (mai 2025).** Lancement de parts de fonds monétaire **nativement tokenisées** : une part tokenisée d'un fonds monétaire luxembourgeois existant, avec une contrepartie française. Présenté comme la « première transaction transfrontalière d'actif numérique Luxembourg-France ».
  - Rôles : Allfunds Blockchain fournit la technologie ; BNP Paribas Securities Services agit comme agent de transfert et fournisseur de fund dealing.
  - Objectif : exécution instantanée on-chain à réception de la VNI, au lieu d'un traitement par lots.
  — [BNPP AM, communiqué](https://www.bnpparibas-am.com/en/press/mediaroom-en-bnp-paribas-asset-management-launches-first-natively-tokenised-money-market-fund-shares-on-allfunds-blockchain/) ; [Crowdfund Insider, 05.2025](https://www.crowdfundinsider.com/2025/05/239957-bnp-paribas-asset-management-introduces-natively-tokenized-money-market-fund-shares-on-allfunds-blockchain/) ; [Finadium](https://finadium.com/bnp-paribas-am-launches-tokenized-mmf-after-cbdc-trials/)
- **Azvalor (Espagne).** Lancement d'« Azvalor Blockchain FI ». Les parts sont enregistrées et conservées sur une blockchain privée, via l'infrastructure Allfunds Blockchain. Achat et vente s'exécutent et se règlent en temps réel, avec BNP Paribas Securities Services. — [BNP Paribas Securities Services](https://securities.cib.bnpparibas/azvalor-launches-the-first-tokenised-fund-with-real%E2%80%91time-settlement-in-collaboration-with-allfunds-blockchain-and-bnp-paribas-securities-services-business/) (date non vérifiée)
- **Apex Group.** Collaboration stratégique pour digitaliser le modèle opérationnel des fonds alternatifs. — [Apex Group](https://www.apexgroup.com/insights/allfunds-blockchain-and-apex-group-digitize-the-operating-model-for-alternative-funds/) ; [Ledger Insights](https://www.ledgerinsights.com/apex-partners-allfunds-blockchain-for-alternative-funds/)
- **Hamilton Lane.** Collaboration annoncée « il y a un an » (donc vers mi-2025) pour la distribution en Europe, avec Apex comme TA. — [BusinessWire, 09.06.2026](https://www.businesswire.com/news/home/20260609715713/en/Alchelyst-and-Allfunds-Blockchain-Launch-Blockchain-API-to-Automate-Private-Markets-Distribution)
- **Alchelyst (9 juin 2026).** API vers la blockchain permissionnée Allfunds, qui remplace le traitement manuel des ordres par le TA par du STP pour les souscriptions, rachats et switches de fonds de marchés privés. — [BusinessWire](https://www.businesswire.com/news/home/20260609715713/en/Alchelyst-and-Allfunds-Blockchain-Launch-Blockchain-API-to-Automate-Private-Markets-Distribution) ; [Ledger Insights](https://www.ledgerinsights.com/allfunds-alchelyst-launch-blockchain-api-for-private-markets-distribution/) ; [Asset Servicing Times](https://www.assetservicingtimes.com/assetservicesnews/digitalassetsarticle.php?article_id=18026)
- BNP Paribas Securities Services présente ses travaux de tokenisation comme « passés en production » (Sibos). — [FF News](https://ffnews.com/thought-leadership/bnp-paribas-moves-asset-tokenization-to-production-lessons-from-the-real-world)
- **Rachat par Deutsche Börse.**
  - Accord de rachat recommandé annoncé en janvier 2026, pour environ 5,3 Md€. Offre : 6 € en cash + 0,0122 action Deutsche Börse + dividende extraordinaire de 0,20 € par action.
  - Soutien des actionnaires de référence, soit environ 48,9 % du capital (GIC, Hellman & Friedman, BNP Paribas).
  - Approbation des actionnaires d'Allfunds en mars 2026.
  - **Closing attendu au 1er semestre 2027**, sous réserve des autorisations réglementaires.
  — [Bloomberg, 21.01.2026](https://www.bloomberg.com/news/articles/2026-01-21/deutsche-boerse-reaches-5-3-billion-buyout-deal-of-allfunds) ; [Deutsche Börse, annonce ad hoc](https://www.deutsche-boerse.com/dbg-en/investor-relations/announcements-and-services/ad-hoc-announcements/Deutsche-B-rse-AG-Deutsche-B-rse-AG-and-Allfunds-Group-plc-reached-an-agreement-on-recommended-acquisition-by-Deutsche-B-rse-AG-of-Allfunds-Group-plc-4915600) ; [Deutsche Börse, approbations](https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Deutsche-B-rse-Group-s-Recommended-Acquisition-of-Allfunds-Shareholder-Approvals-of-Allfunds-Obtained-5008700) ; [Markets Media](https://www.marketsmedia.com/deutsche-borse-receives-shareholder-approvals-of-allfunds-acquisition/) ; [RankiaPro](https://rankiapro.com/en/news/deutsche-borse-agrees-acquire-allfunds-5-3-billion/)

### Inferences
- Les cas publics d'Allfunds Blockchain sont des **fonds isolés** : une part de fonds monétaire BNPP AM, un fonds espagnol, des fonds alternatifs. Ce n'est pas encore un réseau de distribution massif. La valeur réelle vient de son adossement à la plateforme Allfunds (1 760 Md€ d'actifs administrés).
- Allfunds Blockchain applique un vrai modèle de **registre natif on-chain** (« nativement tokenisées », « parts enregistrées et conservées sur blockchain privée »). Mais il fonctionne en blockchain privée opérée par la plateforme, et non en registre multi-parties neutre. **[HYPOTHÈSE]**
- Après le closing (S1 2027), Deutsche Börse détiendra Vestima, FundsDLT et Allfunds / Allfunds Blockchain. Rationalisation probable des deux piles DLT **[HYPOTHÈSE]**. Pour FundChain, cela veut dire :
  - **risque** : un incumbent unique, intégré verticalement de l'ordre au règlement ;
  - **opportunité** : un argument de neutralité et de souveraineté suisse auprès des banques qui veulent éviter cette dépendance.

### Gaps
- Nombre de clients Allfunds Blockchain, volumes et revenus propres : non publiés dans les extraits consultés.
- Présence d'Allfunds Blockchain en Suisse (Allfunds a une présence suisse **[HYPOTHÈSE]**) : non vérifiée.
- Tarification : non trouvée.

---

## 3. Iznes (France) : registre partagé de parts d'OPC sur blockchain

### Takeaway
Iznes est **le cas européen le plus abouti de registre de parts de fonds tenu sur blockchain en production** : environ 32 Md€ d'actifs inscrits et environ 70 sociétés de gestion (mai 2026). C'est une entreprise d'investissement agréée (ACPR / AMF) avec passeport européen. Son modèle (souscription et rachat « directement dans le registre ») est le plus proche de la promesse FundChain. Mais sa clientèle est surtout institutionnelle française (assureurs, gestionnaires d'actifs). Il ne couvre pas les fonds suisses.

### Cited Findings
- **Lancement (15 septembre 2017).** Lancé par SETL et quatre sociétés de gestion comme « plateforme paneuropéenne de tenue de registre des fonds en blockchain ». — [OFI Invest AM, communiqué 15.09.2017](https://www.ofi-invest-am.com/en/support/setl-et-4-societes-de-gestion-lancent-iznes-plateforme-paneuropeenne-de-tenue-de-registre-des-fonds-en-blockchain/59bba164e039d) ; [Finextra](https://www.finextra.com/newsarticle/31514/setl-goes-live-with-blockchain-funds-platform)
- **Crise SETL (2019).** SETL, le fournisseur technologique, a nommé des administrateurs début mars, faute de pouvoir financer ses investissements dans ID2S et Iznes. Conséquences :
  - SETL cède sa participation à OFI AM et cinq autres gérants français (mai 2019) ;
  - Iznes rachète des droits de propriété intellectuelle, recrute l'équipe produit de SETL pour internaliser l'IT, et conserve une licence sur la technologie SETL.
  — [The TRADE](https://www.thetradenews.com/blockchain-specialist-setl-calls-administrators-amid-corporate-restructuring/) ; [IPE](https://www.ipe.com/technology-roundup-blockchain-based-fund-trading-system-launches/10031307.article) ; [Global Custodian](https://www.globalcustodian.com/blockchain-firm-setl-completes-corporate-restructuring-focus-technology-solutions/) ; [Ledger Insights](https://www.ledgerinsights.com/setl-financial-services-blockchain/)
- **Actionnaires cités** : OFI AM, Arkéa IS, Groupama AM, La Banque Postale AM, La Financière de l'Échiquier, Lyxor AM. — [Option Finance](https://www.optionfinance.fr/rubrique-asset-management/la-plateforme-blockchain-iznes-devient-une-entite-reglementee.html) ; [Agefi Actifs](https://www.agefiactifs.com/investissements-financiers/article/iznes-obtient-lagrement-amf-en-tant-quentreprise-86826)
- Iznes a fait une levée de fonds auprès de deux LPs. — [CFNews](https://www.cfnews.net/L-actualite/Capital-developpement/Operations/Augmentation-de-capital/Iznes-s-enregistre-avec-deux-LPs-352435) (détails et date non vérifiés)
- **Statut réglementaire.** Entreprise d'investissement agréée par l'ACPR et supervisée par l'AMF. Services passeportés au Luxembourg, en Irlande, en Allemagne, en Autriche et en Belgique. — [Agefi Actifs](https://www.agefiactifs.com/investissements-financiers/article/iznes-obtient-lagrement-amf-en-tant-quentreprise-86826) ; [Mind Fintech](https://www.mind.eu.com/fintech/article/iznes-decroche-lagrement-dentreprise-dinvestissement/) ; [Iznes, la société](https://iznes.io/en/presentation-entreprise/)
- **Fonctionnement.** Les investisseurs institutionnels souscrivent et rachètent les parts « directement dans le registre du fonds » via la blockchain. La plateforme revendique la garantie de propriété, la traçabilité des transactions et positions, et le partage des données de référence. Elle se dit compatible avec tous les canaux de distribution. — [Agefi Actifs](https://www.agefiactifs.com/investissements-financiers/article/iznes-obtient-lagrement-amf-en-tant-quentreprise-86826) ; [Iznes](https://iznes.io/en/presentation-entreprise/)
- **Traction au 11 mai 2026** :
  - **32 Md€ d'actifs inscrits sur la blockchain** ;
  - collaboration avec **près de 70 sociétés de gestion** (dont Edmond de Rothschild, Sienna IM, AXA IM) ;
  - environ **7 200 opérations par mois**.
  — [Boursorama, 11.05.2026](https://www.boursorama.com/bourse/actualites/iznes-franchit-le-seuil-des-32-milliards-d-euros-d-actifs-tokenises-446b40948a317fd3cec78893ddd2abd3)
- **Encours monétaires.** 8 Md€ de fonds monétaires sous registre (date non précisée dans l'extrait). — [Option Finance, « Iznes consolide ses positions »](https://optionfinance.fr/entreprises-finance/innovation/blockchain-iznes-consolide-ses-positions.html) (date à vérifier)
- **Historique.** Iznes avait franchi le seuil de 1 Md€. — [Paperjam](https://paperjam.lu/article/blockchain-iznes-depasse-milla) ; [Markets Media](https://www.marketsmedia.com/blockchain-fund-platform-has-e1bn-of-assets/) (date non vérifiée)
- **Clients cités** :
  - Generali et Carmignac, pour automatiser leurs opérations en unités de compte ;
  - Edmond de Rothschild AM, pour digitaliser sa distribution (communiqué daté du 14.12.2020 d'après le nom du fichier) ;
  - positionnement comme place de marché pour les assureurs vie.
  — [Generali](https://presse.generali.fr/actualites/gestion-dactifs-generali-et-carmignac-passent-par-iznes-pour-automatiser-et-securiser-leurs-operations-via-la-blockchain-8db2-a5035.html) ; [Generali, bilan du partenariat](https://presse.generali.fr/actualites/partenariat-iznes-et-generali-succes-rencontre-dans-lusage-de-la-blockchain-au-service-de-la-gestion-dactifs-en-unites-de-compte-834e-a5035.html) ; [Iznes, communiqué EdR AM](https://iznes.io/wp-content/uploads/2025/02/201412-CP-EdR-AM-IZNES-final-2.pdf) ; [L'Argus de l'assurance](https://www.argusdelassurance.com/tech/l-assurtech-de-la-semaine-iznes-une-place-de-marche-pour-les-assureurs-vie.186799)
- **Monnaie de banque centrale.** Iznes a participé avec Citi et SETL à une expérimentation MNBC de la Banque de France. — [Ledger Insights](https://www.ledgerinsights.com/citi-setl-iznes-french-central-bank-digital-currency-cbdc/)

### Inferences
- Iznes prouve qu'un **registre de parts partagé on-chain peut atteindre une masse critique** : 32 Md€ en neuf ans. La recette :
  - des actionnaires-clients (gérants) qui apportent leurs fonds dès le départ ;
  - un agrément d'entreprise d'investissement ;
  - un segment ciblé (institutionnels et assureurs français, fonds monétaires).
- Le **ratio d'environ 7 200 opérations par mois** pour 32 Md€ indique des flux institutionnels de gros tickets, pas du retail bancaire. Le segment « banque privée / retail suisse » n'est pas servi. **[HYPOTHÈSE]**
- L'épisode SETL montre le **risque fournisseur technologique**. Une plateforme registre doit maîtriser sa pile ou disposer de droits d'IP solides.
- La base légale française permettant d'inscrire des titres non cotés en blockchain (DEEP, ordonnance de 2017) n'a pas été re-sourcée dans cette session. **[HYPOTHÈSE]**

### Gaps
- Blockchain sous-jacente actuelle (toujours SETL ? migration ?) : non vérifiée.
- Nombre de fonds et de distributeurs connectés : non trouvé.
- Expansion hors France (Luxembourg, Espagne) : non confirmée par les résultats.
- Tarification : non trouvée.
- Présence suisse : aucune trouvée.

---

## 4. Calastone : de la « DMI » blockchain (2019) à la « Tokenised Distribution » (2025-2026), aujourd'hui propriété de SS&C

### Takeaway
Calastone est le plus grand réseau d'ordres sur fonds : environ 4 500 clients, 58 pays et territoires, plus de 250 Md£ traités par mois (octobre 2025). Il a basculé son réseau sur une « Distributed Market Infrastructure » (DMI) blockchain en mai 2019. Il propose depuis avril 2025 une couche de tokenisation (« Tokenised Distribution ») sur Ethereum, Polygon et Canton, sans changer le registre du TA. Depuis le 14 octobre 2025, il appartient à **SS&C**, l'un des plus grands agents de transfert. Le modèle est une **couche token de distribution au-dessus du registre existant**, pas un registre partagé de référence.

### Cited Findings
- **Bascule DMI (20 mai 2019).** Calastone bascule tout son réseau de compensation d'ordres sur fonds vers sa DMI blockchain : plus de 1 800 clients dans 41 marchés. Économies annoncées de plus de 3,4 Md£ par an pour l'industrie. Nouveau service « Sub-Register » : vue partagée et temps réel des registres entre partenaires de la chaîne de distribution. — [Cointelegraph](https://cointelegraph.com/news/uk-based-global-funds-network-calastone-switches-entire-system-to-blockchain) ; [Global Custodian](https://www.globalcustodian.com/calastone-successfully-shifts-funds-network-dlt-platform/) ; [PR Newswire](https://www.prnewswire.com/news-releases/calastone-goes-live-with-worlds-largest-financial-services-community-on-blockchain-300852474.html) ; [Finextra](https://www.finextra.com/pressarticle/78449/calastone-completes-blockchain-migration-project)
- Carlyle avait racheté Calastone, décrit comme « l'un des plus grands utilisateurs financiers de blockchain d'entreprise ». — [Ledger Insights](https://www.ledgerinsights.com/carlyle-acquires-calastone-one-of-largest-financial-users-of-blockchain/)
- **Rachat par SS&C (closing le 14 octobre 2025)**, pour environ 766 M£ (environ 1,03 Md$). À cette date, Calastone servait 4 500 clients dans 58 pays et territoires et traitait plus de 250 Md£ par mois. Ses 250 employés rejoignent SS&C Global Investor & Distribution Solutions. — [Finextra](https://www.finextra.com/newsarticle/46755/ssc-completes-1bn-acquisition-of-calastone) ; [SS&C, 8-K](https://www.sec.gov/Archives/edgar/data/1402436/000119312525238996/ssnc-ex99_1.htm) ; [Asset Servicing Times](https://www.assetservicingtimes.com/assetservicesnews/technologyarticle.php?article_id=17276) ; [Blockhead](https://www.blockhead.co/2025/10/15/ss-c-acquires-blockchain-based-funds-network-calastone-for-1b/)
- **Calastone Tokenised Distribution (3 avril 2025).**
  - Toute part de fonds du réseau peut être tokenisée et distribuée sur chaînes publiques, hybrides ou privées, sans changer la structure, l'administration ni les prestataires du fonds.
  - Le réseau revendiqué compte plus de 4 500 sociétés dans 56 marchés.
  - Chaînes ciblées : Ethereum, Polygon, Canton. Cible : investisseurs « blockchain-native » (trésoriers d'entreprise, émetteurs de stablecoins).
  - Étude Calastone citée : jusqu'à 135 Md$ d'économies annuelles grâce à la tokenisation.
  — [Calastone, communiqué](https://www.calastone.com/news/calastone-launches-tokenised-distribution-solution-to-unlock-the-future-of-fund-distribution/) ; [PR Newswire, version française](https://www.prnewswire.com/news-releases/calastone-lance-une-solution-de-distribution-tokenisee-pour-construire-lavenir-de-la-distribution-de-fonds-302419813.html) ; [Ledger Insights](https://www.ledgerinsights.com/fund-distribution-firm-calastone-now-enables-any-fund-to-be-tokenized/)
- **Polygon (12 novembre 2025).** Ajout de Polygon pour la distribution d'actifs tokenisés. — [The Block](https://www.theblock.co/news/business/2025-11-12-global-funds-network-calastone-taps-polygon-tokenized-asset-distribution-378463) ; [Ledger Insights](https://www.ledgerinsights.com/calastone-launches-tokenized-fund-shares-on-polygon/)
- **Legal & General (avril 2026).** Les fonds de liquidité de L&G sont live sur le réseau Tokenised Distribution de « SS&C's Calastone », sur Ethereum : parts USD, EUR et GBP de fonds monétaires. Certaines sources secondaires parlent de « plus de 50 Md£ tokenisés ». Il s'agit très probablement de la **taille des fonds concernés, pas d'encours effectivement détenus en tokens** (à vérifier sur le communiqué L&G). — [L&G, communiqué 04.2026](https://group.legalandgeneral.com/newsroom/press-releases/2026/4/lg-liquidity-funds-now-live-on-sscs-calastone-tokenised-distribution-network/) ; [Blockchain.news](https://blockchain.news/news/legal-general-50b-liquidity-funds-tokenized-calastone-network) ; [SpazioCrypto (source secondaire)](https://en.spaziocrypto.com/rwa/legal-general-50-billion-tokenized-funds-calastone/)
- Calastone publie des analyses sur l'accélération de la tokenisation vers 2030. — [Calastone, Insights](https://www.calastone.com/insights/tokenisation-accelerates-along-the-road-to-2030/) ; [Calastone, « A significant step forward »](https://www.calastone.com/insights/a-significant-step-forward-for-tokenised-fund-distribution/)

### Inferences
- La « DMI » de 2019 a **remplacé la technologie interne** de Calastone sans créer de registre multi-parties de référence. **[HYPOTHÈSE]** La blockchain y joue le rôle de base de données du réseau opérée par Calastone, et les participants ne tiennent pas de nœuds. Le « Sub-Register » donnait une vue partagée, pas un registre légal.
- Tokenised Distribution consiste à **émettre un « jumeau » token d'une part dont le registre de référence reste chez le TA**. Ce qui le montre : « sans changer l'administration ni les prestataires ». Le token sert à la distribution vers des canaux crypto, pas à supprimer la réconciliation TA-distributeur.
- Avec SS&C (agent de transfert majeur), Calastone devient **intégré verticalement** (réseau + TA). Même logique que Deutsche Börse avec Vestima, FundsDLT et Allfunds. Le marché se consolide en **deux blocs** : SS&C/Calastone et Deutsche Börse/Clearstream/Allfunds, plus Euroclear FundsPlace.
- La Suisse ne figure pas dans les cas publics de tokenisation Calastone.

### Gaps
- Nombre de fonds tokenisés via Calastone et encours réellement détenus en tokens : non trouvés.
- Statut actuel de la DMI blockchain (toujours en service ou remplacée) : non trouvé.
- Tarifs Calastone (par message ou par ordre) : non publics dans les résultats.
- L'expression « DLS (Distributed Ledger Services) » citée dans la question n'a pas été retrouvée comme nom de produit.

---

## 5. Clearstream D7 et Euroclear (D-SI, FundsPlace / Fundnode, Pythagore)

### Takeaway
Ni D7 DLT (Clearstream) ni D-SI (Euroclear) ne visent aujourd'hui les ordres sur fonds. Ils ciblent l'émission de dette : CP, MTN, obligations. Sur les fonds, Clearstream passe par FundsDLT et le digital TA. Euroclear passe par FundsPlace (ex-FundSettle) et sa participation dans le réseau DLT singapourien Fundnode (Marketnode). Les deux ICSD standardisent ensemble une taxonomie de tokens pour les euro-obligations.

### Cited Findings
- **D7 DLT (fin 2025).** Clearstream lance D7 DLT, plateforme d'émission et de gestion de titres tokenisés conforme à CSDR, après les essais BCE de 2024.
  - Premières émissions attendues : commercial papers et MTN.
  - Partenaire infrastructure : Google Cloud.
  - Complète « D7 Digital », émission numérique non-DLT.
  — [Deutsche Börse, communiqué](https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/D7-DLT-Clearstream-Launches-Tokenized-Securities-Platform-4757912) ; [Crowdfund Insider, 11.2025](https://www.crowdfundinsider.com/2025/11/255301-clearstream-introduces-tokenized-securities-platform-leveraging-dlt/) ; [Ledger Insights](https://www.ledgerinsights.com/deutsche-borses-clearstream-launches-d7-dlt-tokenization-platform/) ; [Securities Finance Times](https://www.securitiesfinancetimes.com/securitieslendingnews/technologyarticle.php?article_id=228278)
- **Euroclear D-SI (septembre 2023).** Service DLT d'émission, distribution et règlement de « Digitally Native Notes ». — [Euroclear, communiqué 2023](https://www.euroclear.com/newsandinsights/en/press/2023/2023-mr-14-euroclear-launches-dlt-solution.html) ; [Posttrade360](https://posttrade360.com/news/technology/euroclear-launches-digital-securities-issuance-platform-d-si/)
- **Euroclear FundsPlace** (ex-FundSettle) : plus de 250 000 fonds de plus de 2 500 gérants. Intégration avec **Fundnode**, l'infrastructure DLT de règlement de fonds de Marketnode à Singapour (lancée au T2 2024), pour une solution d'ordres de fonds retail et institutionnels à Singapour. Euroclear a investi dans Marketnode. — [Ledger Insights, intégration](https://www.ledgerinsights.com/euroclear-integrates-fundsplace-with-singapores-dlt-based-fundnode/) ; [Ledger Insights, investissement](https://www.ledgerinsights.com/euroclear-invests-in-singapore-dlt-fund-platform-marketnode/)
- Euroclear a racheté Goji (fintech de fonds de marchés privés) et intégré ce service à sa plateforme fonds. — [Asset Servicing Times](https://www.assetservicingtimes.com/assetservicesnews/fundservicesarticle.php?article_id=14896) ; [Euroclear, résultats T3 2025](https://www.euroclear.com/newsandinsights/en/press/2025/mr-29-strong-third-quarter-results.html)
- **Pythagore (Banque de France et Euroclear).** Tokenisation des NEU CP, avec une phase pilote prévue fin 2026. — [Euroclear, communiqué 2025](https://www.euroclear.com/newsandinsights/en/press/2025/mr-26-banque-de-france-and-euroclear.html)
- **Euro-obligations.** Euroclear et Clearstream digitalisent ce marché et devaient publier en décembre 2025 une extension de l'IPT intégrant une taxonomie de tokens DLT. — [Euroclear, communiqué 2025](https://www.euroclear.com/newsandinsights/en/press/2025/mr-25-euroclear-and-clearstream-to-digitise-eurobond-market.html)
- Euroclear est actionnaire et partenaire de Fnality. — [Euroclear, Fnality](https://www.euroclear.com/innovation/en/fnality.html)
- **Politique de l'Eurosystème.** La BCE a publié en avril 2026 une analyse sur la tokenisation et sa réponse de politique. — [BCE, Macroprudential Bulletin, 04.2026](https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/ecb.mpbu202604_02.en.html)

### Inferences
- Les ICSD réservent la DLT « native » à la dette à court terme, où la vitesse d'émission crée de la valeur. Pour les fonds, ils préfèrent **greffer de la DLT sur leurs hubs existants** : Vestima avec FundsDLT, FundsPlace avec Fundnode. Ils protègent ainsi leurs revenus de règlement et de conservation.
- Aucune initiative ICSD trouvée ne cible spécifiquement les **fonds de droit suisse**.

### Gaps
- Fonds éventuellement émis sur D7 DLT : rien trouvé.
- Volumes et nombre de fonds actifs sur Fundnode : non trouvés.
- Tarifs DLT des ICSD : non trouvés. Les grilles Vestima et FundsPlace relèvent d'une autre note.

---

## 6. Fonds tokenisés et fonds monétaires : signaux de maturité et modèle de registre

### Takeaway
Les fonds tokenisés « live » sont presque tous des **fonds monétaires en USD**, distribués à des investisseurs crypto-natifs ou institutionnels (collatéral, trésorerie). Ordres de grandeur :
- BUIDL : environ 2,2 à 2,9 Md$ en 2026 ;
- BENJI : de 0,7 à 2,5 Md$ selon les sources, chiffres contradictoires ;
- titres d'État américains tokenisés au total : environ 12,9 Md$ (avril 2026) à 16 Md$ (juillet 2026), selon des agrégateurs citant rwa.xyz.

C'est une goutte d'eau rapportée aux encours fonds mondiaux. Deux modèles de registre coexistent :
- **registre de référence on-chain tenu par le TA** : Franklin BENJI/FOBXX, Sygnum/Fidelity FILQ, BNPP AM via Allfunds ;
- **« jumeau numérique » ou représentation tokenisée** d'un registre off-chain : abrdn/Archax, Aviva/XRPL, Calastone/L&G.

Signal Suisse : UBS AM (uMINT, domicilié à Singapour) et Sygnum (plateforme de Fidelity FILQ) sont des acteurs suisses, mais **aucun fonds de droit suisse** ne figure parmi les grands fonds tokenisés identifiés.

### Cited Findings
- **BlackRock BUIDL**
  - Lancé en mars 2024 avec plus de 500 M$ ; 1 Md$ en quelques semaines ; 2 Md$ fin 2025 ; 2,5 Md$ début 2026 ; 2,87 Md$ sur neuf blockchains à la mi-juillet 2026. — [Eco (agrégateur)](https://eco.com/support/en/articles/15483226-what-is-buidl-blackrock-s-tokenized-treasury-fund)
  - 2,24 Md$ fin septembre 2026. — [RWA.xyz, BUIDL](https://app.rwa.xyz/assets/BUIDL)
  - Environ 2,7 Md$ selon DeFiLlama au 15.09.2026. — [DeFiLlama](https://defillama.com/protocol/blackrock-buidl)
  - Les écarts reflètent des dates et des méthodes différentes (« distributed » vs total). **À recouper.**
  - Mai 2026 : BlackRock aurait déposé auprès de la SEC deux nouveaux fonds tokenisés et des parts on-chain pour un fonds monétaire de 7 Md$. — [Markets Media](https://www.marketsmedia.com/blackrock-fires-starting-gun-for-a-new-financial-era/) (attribution à vérifier)
- **Franklin Templeton FOBXX / BENJI**
  - Premier fonds monétaire enregistré aux États-Unis porté on-chain. L'agent de transfert tient le registre officiel des parts via un système intégré à la blockchain, sur réseaux publics. Un token BENJI = une part. Neuf chaînes : Stellar, Polygon, Arbitrum, Aptos, Avalanche, Base, Solana, Ethereum, BNB Chain. — [Eco (agrégateur)](https://eco.com/support/en/articles/15254016-benji-deep-dive-2026-franklin-templeton-s-tokenized-money-market) ; [Stellar, cinq ans de BENJI](https://stellar.org/press/franklin-templeton-stellar-development-foundation-mark-five-years-of-benji-the-first-u-s-registered-tokenized-money-market-fund)
  - La même source agrégée décrit une **réconciliation quotidienne** entre soldes on-chain et registre officiel (modèle « hybride »). Contradiction partielle avec l'idée d'un registre on-chain de référence : à vérifier dans les documents réglementaires du fonds. — [Eco](https://eco.com/support/en/articles/15254016-benji-deep-dive-2026-franklin-templeton-s-tokenized-money-market)
  - **Encours contradictoires** : 1,98 Md$ pour la « suite BENJI » au 29.04.2026 et 2,5 Md$ au 30.04.2026 (source Eco) ; environ 828 M$ (agrégateur) ; 687 M$ pour le fonds apporté sur Bybit au 28.09.2026. — [Eco](https://eco.com/support/en/articles/15254016-benji-deep-dive-2026-franklin-templeton-s-tokenized-money-market) ; [Stablecoin Insider](https://stablecoininsider.org/top-10-tokenized-treasury-funds-in-2026-buidl-benji-and-the-highest-yielding-on-chain-options/) ; [crypto.news, 28.09.2026](https://crypto.news/franklin-templeton-brings-687m-tokenized-fund-to-bybit/)
  - Historique : 270 M$ en 2023. — [Franklin Resources](https://investors.franklinresources.com/news-center/press-releases/press-release-details/2023/Franklin-Templeton-Announces-the-Franklin-OnChain-U.S.-Government-Money-Fund-Surpasses-270-Million-in-Assets-Under-Management/default.aspx)
  - Frais de gestion de 0,15 %, donnés comme le plus bas de la catégorie. — [Stablecoin Insider (agrégateur)](https://stablecoininsider.org/7-best-tokenized-money-market-funds-right-now-ranked-by-yield-liquidity-and-aum/) (à vérifier)
- **UBS Asset Management uMINT (1er novembre 2024)**
  - « UBS USD Money Market Investment Fund Token », bâti sur Ethereum, domicilié à Singapour.
  - Distribué via des partenaires autorisés, DigiFT en premier. Lien avec le Project Guardian de la MAS.
  — [UBS, communiqué 01.11.2024](https://www.ubs.com/global/en/media/display-page-ndp/en-20241101-first-tokenized-investment-fund.html) ; [Ledger Insights](https://www.ledgerinsights.com/ubs-issues-tokenized-usd-money-market-fund-on-ethereum/) ; [Funds Europe](https://funds-europe.com/ubs-am-launches-tokenised-investment-fund/)
  - KuCoin accepte uMINT comme collatéral. — [Ledger Insights](https://www.ledgerinsights.com/kucoin-exchange-to-support-ubs-umint-tokenized-money-market-fund-as-collateral/)
- **Fidelity International FILQ (mai 2026)**
  - Fidelity USD Digital Liquidity Fund, lancé via **Desygnate, la plateforme de tokenisation de Sygnum (banque suisse)**.
  - Évaluation AAA-mf de Moody's (Moody's Switzerland) ; VNI on-chain fournie par Chainlink ; accès 24/7 ; règlement quasi instantané.
  - Selon Sygnum, la plateforme assure « registre de fonds on-chain, règlement par smart contract et souscription en stablecoin ».
  — [Sygnum, communiqué](https://www.sygnum.com/news/sygnum-powers-fidelity-internationals-first-tokenized-product-launch-with-moodys-aaa-mf-assessment/) ; [FXStreet, 13.05.2026](https://www.fxstreet.com/cryptocurrencies/news/fidelity-international-launches-first-tokenized-usd-liquidity-fund-powered-by-chainlink-202605132058) ; [Ledger Insights](https://www.ledgerinsights.com/chainlink-provides-nav-feed-for-tokenized-fidelity-international-fund/) ; [Cointelegraph](https://cointelegraph.com/news/fidelity-filq-tokenized-fund-chainlink-sygnum)
  - Antécédent (2024) : environ 50 M$ de parts d'un fonds monétaire institutionnel Fidelity tokenisées sur Ethereum avec Sygnum. — [Handelszeitung, 2024](https://www.handelszeitung.ch/specials/anlegen-2024/tokenisierung-von-fonds-ein-blick-in-die-zukunft-der-geldanlage-880884) ; [Asset Servicing Times](https://www.assetservicingtimes.com/assetservicesnews/digitalassetsarticle.php?article_id=15685)
- **abrdn / Archax.** Une partie du fonds monétaire Lux Sterling (environ 15 à 16 Md£) a été tokenisée sur Hedera via le moteur de tokenisation d'Archax, sous forme de « représentation tokenisée ». Atouts mis en avant : paiements le jour même, revenus réinvestis par « airdrop » de tokens. — [Ledger Insights](https://www.ledgerinsights.com/abrdn-tokenize-money-market-fund-hedera/) ; [Funds Europe](https://www.funds-europe.com/news/abrdn-completes-tokenisation-project-with-digital-exchange-archax) ; [Investment Week](https://www.investmentweek.co.uk/news/4117523/digital-asset-exchange-tokenises-stake-gbp16bn-abrdn-money-market-fund)
- **Schroders SOAR (Schroders Onchain Active Returns).** Approbation de la Banque centrale d'Irlande pour une part tokenisée d'un fonds monétaire USD, via Kinexys by J.P. Morgan. — [Structured Retail Products](https://www.structuredretailproducts.com/insights/84378/schroders-secures-irish-central-bank-approval-to-debut-tokenised-share-class) ; [Private Banker International](https://www.privatebankerinternational.com/news/schroders-irish-nod-tokenised-market-fund/) (date non vérifiée)
- **Aviva Investors (29 juillet 2026).** Part tokenisée du US Dollar Liquidity Fund sur le XRP Ledger, approuvée par la Banque centrale d'Irlande. Modèle de **« digital twin »** : les avoirs du fonds restent off-chain dans le cadre réglementé, les tokens représentent les positions des investisseurs. — [Bitcoin.com News](https://news.bitcoin.com/featured/ripple-brings-avivas-first-tokenized-fund-to-the-xrp-ledger/) ; [Coinpaprika](https://coinpaprika.com/news/ireland-clears-avivas-first-tokenized-fund/)
- **Taille de marché (agrégateurs citant rwa.xyz)**
  - Titres d'État américains tokenisés : environ 12,88 Md$ début avril 2026 ; environ 16,16 Md$ (valeur « distributed ») en juillet 2026 ; environ 5 Md$ fin 2024.
  - Ensemble des actifs réels tokenisés : 34,67 Md$ fin juillet 2026 ; 38,76 Md$ au 3 septembre 2026.
  - Attribution exacte des chiffres non vérifiée.
  — [KuCoin News](https://www.kucoin.com/news/flash/tokenized-treasuries-dip-to-34-67-billion-as-rwa-sector-expands) ; [Yellow Research](https://yellow.com/research/rwa-tokenization-concentration-treasury-dominance-2026) ; [InvestaX, T1 2026](https://investax.io/blog/q1-2026-real-world-asset-tokenization-market-report)
- KPMG France analyse « l'essor des fonds monétaires tokenisés ». — [KPMG France](https://kpmg.com/fr/fr/articles/crypto/essor-fonds-monetaires-tokenises.html)
- J.P. Morgan a lancé un fonds monétaire tokenisé sur Ethereum. — [Crypto Valley Journal](https://cvj.ch/fokus/blockchain/jp-morgan-lanciert-tokenisierten-geldmarktfonds-auf-ethereum/) (détails non vérifiés)

### Inferences
- **Le marché valide le produit « fonds monétaire tokenisé comme collatéral ou trésorerie »**, pas encore la distribution tokenisée de fonds UCITS ou suisses classiques en banque privée ou retail.
- Le levier de ces fonds est la **compatibilité crypto** : stablecoins, plateformes d'échange, DeFi. Ce n'est pas la réduction des coûts de réconciliation banque-TA, qui est la promesse de FundChain. Ce sont deux marchés différents.
- Le modèle dominant en Europe est le **jumeau numérique** (Aviva, abrdn, Calastone/L&G). Il ajoute une couche mais ne supprime pas la réconciliation. **Espace ouvert** : un registre unique de référence partagé entre banque, TA et plateforme.
- Sygnum (FILQ) montre qu'une **banque suisse sait déjà opérer un registre de fonds on-chain avec souscription en stablecoin**. C'est un partenaire ou concurrent potentiel pour la jambe titres et la jambe cash. **[HYPOTHÈSE]**

### Gaps
- Encours actuels d'uMINT, de FILQ, de SOAR et du token Aviva : non trouvés.
- Encours exact de BENJI au 1er octobre 2026 : sources contradictoires.
- Modèle juridique exact du registre pour FILQ (fonds de droit luxembourgeois ou irlandais ? registre de référence on-chain ?) : non vérifié.
- Schroders, Fidelity et UBS : aucun fonds de droit suisse tokenisé identifié.

---

## 7. Écosystème suisse : SIX/SDX, BX Digital, Taurus, Sygnum, banques, Helvetia, DLT Act

### Takeaway
La Suisse a le cadre juridique (DLT Act de 2021 : droits-valeurs inscrits, art. 973d CO), une jambe cash de banque centrale en pilote (Helvetia : wCBDC sur l'ex-SDX, au moins jusqu'à mi-2027) et des infrastructures licenciées : BX Digital (Ethereum + SIC), Taurus TDX, Sygnum. Mais **aucun fonds de droit suisse émis en droits-valeurs inscrits, ni aucun registre de parts multi-parties en production, n'a pu être identifié publiquement**. Les seuls flux « ordres sur fonds » DLT entre banques suisses sont les pilotes FundsDLT (ZKB 2021, ZKB-UBS 2025). En parallèle, SIX a dissous la marque SDX (octobre 2025), et les banques testent des deposit tokens (2025) et un stablecoin CHF (CHFD, sandbox 2026).

### Cited Findings
- **DLT Act.** Entrée en vigueur le 1er février 2021, avec des dispositions complémentaires au 1er août 2021. Il crée le **droit-valeur inscrit** (Registerwertrecht, art. 973d CO), transférable uniquement via le registre. Le texte est technologiquement neutre et vaut pour toutes les classes d'actifs. Il crée aussi la licence de « système de négociation fondé sur la TRD ». — [Apollo-8](https://www.apollo-8.ch/post/swiss-dlt-act-and-tokenized-securities) ; [SIF, DLT/Blockchain](https://www.sif.admin.ch/de/dlt-blockchain) ; [Deloitte Suisse](https://www.deloitte.com/ch/en/Industries/financial-services/blogs/tokenised-securities.html)
- **Parts de fonds.** Selon le cabinet MME, une part tokenisée est une valeur mobilière si le droit n'est transférable que via le token et si l'offre est standardisée. La tokenisation peut porter sur des droits non titrisables, y compris des parts de placements collectifs. — [MME, « Tokenization of Investment Fund Units »](https://www.mme.ch/en/magazine/articles/tokenization-of-investment-fund-units)
- PwC Suisse estime que la Suisse dispose d'un cadre cohérent permettant de tokeniser directement des parts de fonds sous la LPCC / KAG. — [PwC Suisse, « Tokenised funds »](https://www.pwc.ch/en/insights/fs/tokenised-funds.html) (attribution issue d'un résumé de recherche)
- **AMAS**
  - Projet avec la Multichain Asset Managers Association (MAMA) : véhicule géré on-chain, structuré en « Swiss Investment Club ». Conservation, souscriptions et rachats, valorisation et reporting passent par des smart contracts. — [AMAS, événement « Fund tokenisation »](https://www.am-switzerland.ch/en/amas-meet-eat-geneva-fund-tokenisation-setting-up-an-asset-management-on-chain-fund)
  - L'étude AMAS / zeb 2026 cite la tokenisation parmi les transformations structurelles. Elle cite aussi une estimation de 235 Md$ d'encours de fonds tokenisés d'ici 2029 (estimation sectorielle). — [AMAS, Swiss Asset Management Study 2026](https://www.am-switzerland.ch/en/services/data-and-reports/swiss-asset-management-study/swiss-asset-management-study-2026)
- **Pilotes FundsDLT en Suisse** (ZKB en 2021, ZKB-UBS en mars 2025) : voir la section 1. — [ZKB, 11.03.2025](https://www.zkb.ch/de/ueber-uns/medien/medienmitteilungen/2025/instruktionen-fondsanteile-blockchain.html)
- **SDX dissous dans SIX (octobre 2025).** SIX retire la marque SDX et rapatrie les activités : le trading va à la bourse principale, le règlement et la conservation d'actifs numériques à la division post-trade (SIX SIS). — [Bloomberg, 06.10.2025](https://www.bloomberg.com/news/articles/2025-10-06/swiss-exchange-group-to-bring-digital-assets-unit-sdx-in-house) ; [Ledger Insights](https://www.ledgerinsights.com/six-merges-digital-exchange-sdx-into-securities-services-group/) ; [Posttrade360](https://posttrade360.com/news/infrastructure/six-dissolves-sdx-takes-over-operations/)
- SDX avait tokenisé des actions dans son CSD. — [Ledger Insights](https://www.ledgerinsights.com/six-digital-exchange-sdx-tokenizes-ethereum-stocks-csd/) ; [Private Equity Wire](https://www.privateequitywire.co.uk/six-digital-exchange-successfully-tokenises-private-shares-blockchain-based/)
- **Pilote SIX-Pictet (10 juillet 2025).** Tokenisation d'obligations d'entreprise en EUR et CHF conservées chez SIX SIS, puis allocation de fractions aux portefeuilles de Pictet AM. Présenté comme la première fractionnalisation de titres sur une FMI blockchain réglementée en production. Usage annoncé : de nouveaux modèles de gestion de fonds (rééquilibrage fractionné automatisé). — [SIX, communiqué 10.07.2025](https://www.six-group.com/en/newsroom/media-releases/2025/20250710-six-pictet-pilot-project.html)
- **Project Helvetia III**
  - La BNS fournit de la wCBDC sur la plateforme SDX depuis fin 2023. Fin juin 2025, six émissions obligataires numériques pour un total de 750 MCHF avaient été réglées en franc numérique de gros.
  - Extension du pilote **jusqu'à au moins mi-2027**, avec élargissement à d'autres transactions et actifs tokenisés, et sans engagement de pérennisation.
  - Les sources divergent sur la durée : « deux ans » selon Ledger Insights, « une année supplémentaire » selon un autre résumé.
  — [BNS, communiqué 30.06.2025](https://www.snb.ch/en/publications/communication/press-releases/2025/pre_20250630) ; [Ledger Insights](https://www.ledgerinsights.com/swiss-wholesale-cbdc-trial-with-sdx-extended-by-2-years/) ; [FintechNewsCH](https://fintechnews.ch/blockchain_bitcoin/snb-project-helvetia-extension-tokenised-asset-settlement/77261/)
  - SIX précise que la wCBDC permet de régler des transactions sur actifs tokenisés directement sur la Digital Assets Platform du CSD SIX SIS, pilote prévu jusqu'à au moins juin 2027. — [SIX, Digital Securities](https://www.six-group.com/en/products-services/securities-services/digital-assets/digital-securities.html)
  - Antécédent : Helvetia phase II. — [BRI, Helvetia Phase II](https://www.bis.org/publ/othp45.htm)
  - Émission numérique de la Banque mondiale avec la BNS et SDX (mai 2024). — [Banque mondiale, 15.05.2024](https://www.worldbank.org/en/news/press-release/2024/05/15/world-bank-partners-with-swiss-national-bank-and-six-digital-exchange-to-advance-digitalization-in-capital-markets)
- **BX Digital (Boerse Stuttgart Group)**
  - Premier système de négociation fondé sur la TRD autorisé par la FINMA : licence le 12 mars 2025, effective le 14 mai 2025.
  - Règlement sur Ethereum (public), **connexion au SIC**, DvP par smart contract.
  - Licence de « petit » système (seuils OIMF), participants réservés aux entités régulées, démarrage annoncé au T4 2025.
  — [FINMA, communiqué 18.03.2025](https://www.finma.ch/en/news/2025/03/20250318-mm-dlt-handelssystem/) ; [CapLaw](https://caplaw.ch/2025/bx-digital-the-first-dlt-trading-facility-in-switzerland/) ; [Baker McKenzie](https://blockchain.bakermckenzie.com/2025/04/16/swiss-regulator-issues-a-first-dlt-trading-facility-license-to-bx-digital-ag/) ; [MME](https://www.mme.ch/en/magazine/articles/new-license-bx-digital)
  - Onboarding des premiers participants. — [Posttrade360](https://posttrade360.com/news/infrastructure/bx-digital-onboards-first-participants-for-regulated-dlt-trading-venue/)
- **Taurus TDX**
  - Système organisé de négociation régulé par la FINMA, pour actifs numériques et titres privés tokenisés, ouvert au retail en janvier 2024.
  - Taurus fournit de la technologie de conservation à Credit Suisse, Deutsche Bank et Pictet.
  — [Ledger Insights](https://www.ledgerinsights.com/taurus-okenized-securities-exchange-tdx-retail-investors/) ; [CoinDesk, 23.01.2024](https://www.coindesk.com/business/2024/01/23/crypto-custody-specialist-taurus-brings-tokenized-securities-to-retail-customers-in-switzerland) ; [finews](https://www.finews.com/news/english-news/45915-taurus-digital-assets-tdx-finma-cryptocurrency-sdx)
  - Actions tokenisées RealUnit négociées sur TDX ; partenariat avec Aktionariat pour les PME. — [FundsTech](https://fundstech.com/realunits-tokenised-shares-begin-trading-on-taurus-tdx/) ; [The Fintech Times](https://thefintechtimes.com/aktionariat-and-taurus-partner-to-boost-liquidity-for-tokenised-swiss-smes/)
  - Contenu Taurus sur les fonds tokenisés en 2026. — [Taurus, blog 2026](https://www.taurushq.com/blog/tokenized-funds-what-they-are-how-they-work-in-2026/)
- **Sygnum.** Licences FINMA de banque et de maison de titres, licence CMS de la MAS. Plateforme Desygnate (FILQ, voir la section 6). — [Sygnum](https://www.sygnum.com/news/sygnum-powers-fidelity-internationals-first-tokenized-product-launch-with-moodys-aaa-mf-assessment/)
- **Deposit tokens (SwissBanking, PostFinance, Sygnum, UBS).**
  - Preuve de concept achevée en septembre 2025 : premier paiement interbancaire juridiquement contraignant en dépôts bancaires sur blockchain publique (Ethereum).
  - Les tokens déclenchaient des paiements conventionnels off-chain.
  - Cas d'usage : paiement P2P, et séquestre pour le règlement DvP d'actifs financiers.
  — [SwissBanking, communiqué](https://www.swissbanking.ch/en/media-politics/press-releases/milestone-for-the-swiss-financial-center-deposit-token-proof-of-concept-successfully-completed) ; [Sygnum](https://www.sygnum.com/news/milestone-for-the-swiss-financial-center-deposit-token-proof-of-concept-successfully-completed/) ; [Ledger Insights](https://www.ledgerinsights.com/ubs-swiss-banks-complete-tokenized-deposit-trial-on-public-blockchain/)
- **Stablecoin CHFD (2026).** Sandbox d'un stablecoin CHF menée par UBS avec cinq banques. Techniquement live en sandbox depuis fin juin 2026. SIX et TWINT ont rejoint la phase de test (septembre 2026). — [The Paypers](https://thepaypers.com/crypto-web3-and-cbdc/news/swiss-stablecoin-pilot-adds-six-and-twint-enters-testing-phase) ; [SpendNode, 09.2026](https://www.spendnode.io/blog/swiss-stablecoin-sandbox-six-twint-testing-phase-september-2026/) ; [TradingView / Cointelegraph](https://www.tradingview.com/news/cointelegraph:0890225c7094b:0-ubs-partners-with-five-banks-for-swiss-franc-stablecoin-sandbox/)
- **Autres signaux.** Obligation numérique en CHF du canton de Bâle-Ville avec la Basler Kantonalbank ; tests de produits d'investissement tokenisés relayés par la presse spécialisée. — [Bitcoin News CH](https://bitcoinnews.ch/37868/basler-kantonalbank-begibt-chf-anleihe-ueber-die-blockchain/) ; [investrends.ch](https://investrends.ch/aktuell/news/erfolgreicher-test-von-tokenisierten-anlageprodukten/) ; [investrends.ch, transformation de l'industrie des fonds](https://investrends.ch/aktuell/news/die-schweiz-steht-an-der-schwelle-zur-digitalen-transformation-der-fondsindustrie/)

### Inferences
- **Le vide suisse est réel.** Le droit existe depuis 2021 et des plateformes sont licenciées depuis 2024-2025. Pourtant, aucune direction de fonds suisse n'a publiquement émis de parts en droits-valeurs inscrits avec un registre partagé banque-TA. Raisons probables **[HYPOTHÈSE]** :
  - parts suisses déjà dématérialisées et conservées chez SIX SIS en titres intermédiés, donc pas de « douleur » de registre visible ;
  - absence de jambe CHF tokenisée permanente ;
  - coût de la double infrastructure pendant la transition.
- **La jambe cash CHF est l'élément le plus avancé, mais encore en pilote** : wCBDC limitée à la plateforme SIX SIS jusqu'à mi-2027, deposit tokens en PoC, CHFD en sandbox. BX Digital montre qu'un **DvP par smart contract relié au SIC** est licenciable dès aujourd'hui, ce qui est pertinent pour l'architecture de FundChain.
- La dissolution de SDX signale que l'**incumbent suisse (SIX) réintègre le digital dans son cœur post-trade**. SIX est à la fois le partenaire naturel (SIX SIS, SIC, Helvetia) et le concurrent le plus dangereux s'il décidait de tokeniser des parts de fonds suisses. **[HYPOTHÈSE]**

### Gaps
- Premier fonds suisse (FCP ou SICAV, LPCC) émis en droits-valeurs inscrits : **non trouvé**. À vérifier directement auprès de la FINMA et de l'AMAS.
- Position de la FINMA sur la tenue du registre de parts de fonds sur DLT (circulaire, FAQ) : non trouvée.
- Volume et participants réels de BX Digital depuis son lancement : non trouvés.
- Bilan financier de SDX avant sa dissolution (pertes, dépréciations) : non vérifié, budget de recherche épuisé.
- Activité fonds de SIX Fund Services ou d'un routage d'ordres de fonds SIX sur DLT : non trouvée.

---

## 8. Luxembourg, Irlande et Régime pilote DLT de l'UE

### Takeaway
Le Luxembourg a le cadre le plus explicite : lois blockchain I à IV, la loi « Blockchain IV » de début 2025 crée le rôle d'agent de contrôle, et une Q&A de la CSSF admet un registre de parts tenu par le TA sur DLT. Ses cas concrets restent des parts de fonds monétaires (BNPP AM via Allfunds, abrdn via Archax). L'Irlande approuve depuis 2025-2026 des parts tokenisées sur le modèle du jumeau numérique : Schroders SOAR avec Kinexys, Aviva sur XRPL en juillet 2026. Le Régime pilote DLT de l'UE reste marginal (six infrastructures en janvier 2026) et plafonne les fonds éligibles à 500 M€ d'encours.

### Cited Findings
- **Luxembourg**
  - La loi « Blockchain IV », entrée en vigueur début 2025, crée un processus simplifié d'émission de titres dématérialisés avec le rôle d'**agent de contrôle**. Elle précise que les actions et les parts de fonds peuvent être traitées sur blockchain. — [Luxembourg for Finance](https://www.luxembourgforfinance.com/portfolio/fund-tokenisation-a-competitive-edge/) ; [Funds Europe](https://funds-europe.com/luxembourg-finds-ways-to-maintain-leadership-in-fund-tokenisation/)
  - La loi de 1915 ne mentionne pas explicitement le registre DLT, mais un registre DLT peut en remplir les exigences. La **CSSF a précisé par Q&A qu'un agent de transfert peut tenir le registre des parts d'un fonds sur DLT**. — [S&P Global, guest opinion 25.07.2024](https://spglobal.com/ratings/en/research/articles/240725-guest-opinion-exploring-luxembourg-s-legal-framework-for-tokenization-13171778) ; [Luxembourg for Finance](https://www.luxembourgforfinance.com/portfolio/fund-tokenisation-a-competitive-edge/)
  - Le passage de l'expérimentation à l'exécution est attendu en 2026-2027. — [Damalion, 2026](https://www.damalion.com/tokenized-funds-digital-asset-luxembourg-2026/) ; [CSSF, rapport annuel 2025](https://www.cssf.lu/wp-content/uploads/CSSF_RA_2025_EN.pdf)
  - Cas luxembourgeois : la part nativement tokenisée du fonds monétaire de BNPP AM (section 2) et le fonds Lux Sterling d'abrdn (section 6). — [BNPP AM](https://www.bnpparibas-am.com/en/press/mediaroom-en-bnp-paribas-asset-management-launches-first-natively-tokenised-money-market-fund-shares-on-allfunds-blockchain/) ; [Ledger Insights](https://www.ledgerinsights.com/abrdn-tokenize-money-market-fund-hedera/)
- **Irlande**
  - Schroders SOAR : part tokenisée d'un fonds monétaire USD approuvée par la Banque centrale d'Irlande, via Kinexys (J.P. Morgan). — [Structured Retail Products](https://www.structuredretailproducts.com/insights/84378/schroders-secures-irish-central-bank-approval-to-debut-tokenised-share-class)
  - Aviva Investors : jumeau numérique sur XRPL, le 29 juillet 2026. — [Bitcoin.com News](https://news.bitcoin.com/featured/ripple-brings-avivas-first-tokenized-fund-to-the-xrp-ledger/)
- **Associations européennes.** L'EFAMA, l'IA (UK), BNPP AM et Irish Funds ont rencontré la Crypto Task Force de la SEC sur la tokenisation des fonds. — [SEC, mémo Crypto Task Force](https://www.sec.gov/files/ctf-memo-euro-fund-asset-mgmt-assn-investment-assn-bnp-paribas-asset-mgmt-irish-funds-asset-mgmt.pdf) ; [EFAMA, « Buy-side guide to tokenisation »](https://www.efama.org/sites/default/files/files/buy-side-guide-to-tokenisation.pdf)
- **Régime pilote DLT de l'UE**
  - Trois infrastructures autorisées en mai 2025 : CSD Prague, 21X AG, 360X AG. Six en janvier 2026, réparties entre République tchèque, Allemagne, Lituanie, France et Espagne.
  - Les parts d'OPC sont éligibles si l'encours est **inférieur à 500 M€**.
  — [Goodwin, 07.2025](https://www.goodwinlaw.com/en/insights/publications/2025/07/insights-otherindustries-reg-dlt-pilot-regime-esma-report-highlights) ; [OMFIF, 08.2025](https://www.omfif.org/2025/08/eus-dlt-pilot-can-still-take-off-if-the-rules-catch-up/) ; [DCM Core](https://dcmcore.com/en/research/eu-dlt-pilot-regime-guide.html) ; [ESMA, rapport art. 14, 06.2025](https://www.esma.europa.eu/sites/default/files/2025-06/ESMA75-117376770-460_Report_on_the_functioning_and_review_of_the_DLTR_-_Art.14.pdf)
  - La Commission européenne a publié en avril 2026 une communication sur la DLT et la tokenisation. — [Commission européenne, 21.04.2026](https://finance.ec.europa.eu/news/dlt-and-tokenisation-paving-way-internet-value-2026-04-21_en)

### Inferences
- Luxembourg et Irlande attirent des **parts tokenisées de fonds monétaires existants**, rarement de nouveaux fonds natifs. La distribution reste ICSD et TA classique, avec une couche token. Pour FundChain, la comparaison Lux/IE montre que la tokenisation y est **réglementairement possible mais commercialement concentrée sur les fonds monétaires**.
- Le Régime pilote est **inadapté** aux fonds UCITS significatifs à cause du plafond de 500 M€. Il ne concurrence pas une plateforme suisse.

### Gaps
- Liste nominative des six infrastructures du Régime pilote en 2026, et éventuels fonds admis : non trouvées.
- Nombre de fonds luxembourgeois dont le registre est tenu sur DLT selon la Q&A CSSF : non trouvé.
- Date d'approbation de SOAR : non vérifiée.

---

## 9. Consortiums et études : IA (UK), Project Guardian, Fnality, Canton, Broadridge DLR

### Takeaway
Les consortiums ont produit le **cadre conceptuel** :
- IA UK : Blueprint de novembre 2023, rapport « IF3 » de mars 2024, consultation de la FCA du 15.10.2025 ;
- MAS : Guardian Funds Framework, pilote de règlement des souscriptions et rachats avec Swift et Chainlink.

Côté cash, Fnality est le seul système de paiement de gros DLT réglementé en production (en sterling, depuis décembre 2023). Canton se positionne comme réseau de convergence (fonds monétaires, Treasuries, DTCC). Aucun de ces acteurs ne vise spécifiquement les ordres sur fonds suisses.

### Cited Findings
- **IA UK**
  - Le Technology Working Group a publié le « Blueprint for Fund Tokenisation » en novembre 2023 : il montre la compatibilité avec la réglementation britannique. — [Proskauer](https://www.proskauer.com/blog/the-investment-association-publishes-a-blueprint-for-fund-tokenisation-in-the-uk) ; [IA, Tokenised Funds](https://www.theia.org/fundoperations/tokenisedfunds)
  - Second rapport « Further Fund Tokenisation: Achieving Investment Fund 3.0 Through Collaboration » en mars 2024. — [IA, PDF 03.2024](https://www.theia.org/sites/default/files/2024-03/Further%20Fund%20Tokenisation%20-%20Achieving%20IF3%20Through%20Collaboration%20%20Mar24.pdf) ; [IA, Investment Fund 3.0](https://www.theia.org/campaigns/investment-fund-3.0)
  - Le TWG est passé à l'IA (intelligence artificielle) pour sa phase 3. L'Investment Association poursuit la tokenisation sous l'angle de la mise en œuvre. — [Burges Salmon](https://www.burges-salmon.com/articles/102j4cr/fund-tokenisation-a-step-closer/) ; [IA, communiqué « green light »](https://www.theia.org/news/press-releases/uk-funds-given-green-light-tokenisation-development) ; [IA, soutien des autorités](https://www.theia.org/news/press-releases/authorities-support-fund-industry-deploying-tokenisation)
  - La **FCA a publié le 15.10.2025 une consultation sur les fonds tokenisés**, première mise en œuvre concrète du Blueprint. — [Morgan Lewis, 10.2025](https://www.morganlewis.com/blogs/finreg/2025/10/uk-fca-consults-on-fund-tokenization) ; [Macfarlanes](https://www.macfarlanes.com/what-we-think/102eli5/fund-tokenisation-in-the-uk-a-simple-guide-for-asset-managers-102kym0/)
- **MAS Project Guardian**
  - Volet fonds consacré à l'émission native de fonds VCC sur réseaux d'actifs numériques ; publication d'un Guardian Funds Framework. — [MAS, communiqué 2023](https://www.mas.gov.sg/news/media-releases/2023/mas-partners-financial-industry-to-expand-asset-tokenisation-initiatives) ; [MAS, Guardian Funds Framework](https://www.mas.gov.sg/-/media/mas-media-library/development/fintech/guardian/guardian-funds-framework.pdf) ; [FCA, statement](https://www.fca.org.uk/news/statements/fca-welcomes-project-guardian-report-tokenisation)
  - Pilote de règlement des souscriptions et rachats de fonds tokenisés : Swift pour l'orchestration des paiements, Chainlink pour la pré-conditionnalité. Résultat : STP de la jambe paiement **sans adoption globale de monnaie on-chain**. — [FinTech Futures](https://www.fintechfutures.com/tokenisation/mas-project-guardian-pilots-settlement-of-tokenised-fund-subscriptions-and-redemptions-using-swift)
- **Fnality**
  - Le Sterling FnPS a démarré des paiements live contrôlés en décembre 2023 : premier système de paiement de gros DLT réglementé, réglant en représentation numérique de fonds détenus à la Banque d'Angleterre. — [Fnality](https://fnality.com/news/fnality-commences-initial-phase-of-sterling-payment-operations-in-a-world-first)
  - Fonction d'« earmarking » (réservation de fonds pour un règlement) en avril 2025 ; DvP et PvP. — [Fnality, earmarking](https://fnality.com/news/earmarked-funds) ; [Ledger Insights](https://www.ledgerinsights.com/fnality-launches-earmarking-for-tokenized-payments-20m-funding-disclosed/)
  - Série C de 136 M$ en septembre 2025 (WisdomTree, Bank of America, Citi, KBC). Raccordement au repo intrajournalier de Broadridge DLR (avril 2025) et au DTCC Digital Launchpad. — [Fnality, série C](https://fnality.com/news/fnality-raises-136-million-in-series-c-funding) ; [Fnality et DTCC](https://fnality.com/news/fnality-integrates-its-cutting-edge-payment-rail-with-dtcc-digital-launchpad) ; [FinTech Global, 23.09.2025](https://fintech.global/2025/09/23/fnality-raises-136m-to-expand-blockchain-settlement-systems/)
- **Canton Network**
  - Calastone cite Canton parmi ses chaînes cibles (section 4). — [Calastone](https://www.calastone.com/news/calastone-launches-tokenised-distribution-solution-to-unlock-the-future-of-fund-distribution/)
  - DTCC développe la tokenisation de Treasuries conservés chez DTC sur Canton, avec un MVP au S2 2026. — [Yahoo Finance](https://finance.yahoo.com/news/dtcc-digital-asset-tokenize-u-134330846.html)
  - L'écosystème Canton revendique des initiatives de fonds monétaires tokenisés. — [Messari](https://messari.io/report/understanding-canton-network-a-comprehensive-overview)
- **Broadridge DLR.** Plateforme de repo intrajournalier connectée à Fnality en avril 2025. Elle ne porte pas sur la distribution de fonds. — [Fnality, série C](https://fnality.com/news/fnality-raises-136-million-in-series-c-funding)

### Inferences
- Le pilote Guardian Swift + Chainlink montre une **voie pragmatique pour la jambe cash** : orchestrer des paiements classiques (SIC en Suisse) conditionnés par l'état du registre DLT, plutôt qu'attendre une monnaie on-chain. C'est directement transposable à FundChain avec le SIC. **[HYPOTHÈSE]**
- Fnality n'a **pas de franc suisse** : pas d'équivalent CHF identifié hors Helvetia.

### Gaps
- Volumes de Broadridge DLR : non trouvés (hors périmètre fonds).
- Cas Canton spécifiques à un registre de parts de fonds avec TA européen : non trouvés.
- Contenu détaillé de la consultation FCA (numéro de CP, modèle de registre retenu) : non vérifié.

---

## 10. Échecs, stagnations et leçons

### Takeaway
Les échecs et stagnations suivent un même schéma. Les infrastructures DLT **indépendantes** ne survivent pas seules : FundsDLT a été absorbé par Deutsche Börse, SETL est passé par l'administration, SDX a été dissous dans SIX, Calastone vendu à SS&C. Les grands remplacements « big bang » échouent : ASX CHESS, 250 MA$ passés en perte. La DLT réussit lorsqu'elle est portée par l'incumbent du réseau ou par les clients-actionnaires (Iznes), sur un segment étroit.

### Cited Findings
- **ASX CHESS.** Projet de remplacement sur DLT démarré en 2016 et mis en pause après une revue d'Accenture. Le logiciel n'était achevé qu'à 63 %, avec des « défis significatifs de conception ». Résultats :
  - perte de capital de 245 à 255 MA$ avant impôt ;
  - plainte de l'ASIC pour déclarations trompeuses (« on track » en février 2022) ;
  - un remplacement de CHESS est toujours prévu, mais **sans DLT**.
  — [Ledger Insights](https://www.ledgerinsights.com/asx-pauses-dlt-settlement-chess/) ; [Finextra](https://www.finextra.com/newsarticle/41337/asx-takes-a250m-hit-after-scrapping-dlt-based-chess-replacement-project) ; [Ledger Insights, plainte ASIC](https://www.ledgerinsights.com/australian-regulator-sues-stock-exchange-asx-over-failed-dlt-project/) ; [Thomas Murray](https://thomasmurray.com/insights/blunder-down-under-asxs-failed-blockchain-plans)
- **SETL.** Administration début 2019, faute de capital pour financer ID2S et Iznes ; Iznes a été recapitalisé par des gérants français. — [The TRADE](https://www.thetradenews.com/blockchain-specialist-setl-calls-administrators-amid-corporate-restructuring/) ; [IPE](https://www.ipe.com/technology-roundup-blockchain-based-fund-trading-system-launches/10031307.article)
- **FundsDLT.** Startup luxembourgeoise devenue filiale à 100 % de Deutsche Börse (2023-2024), puis « entièrement intégrée » à Clearstream (2026). — [Clearstream, 10.01.2024](https://www.clearstream.com/clearstream-en/newsroom/240110-3818150) ; [Asset Servicing Times, 2026](https://www.assetservicingtimes.com/assetservicesnews/digitalassetsarticle.php?article_id=18074)
- **SDX.** Marque retirée et activités réintégrées dans SIX (octobre 2025). — [Bloomberg](https://www.bloomberg.com/news/articles/2025-10-06/swiss-exchange-group-to-bring-digital-assets-unit-sdx-in-house)
- **Calastone.** Réseau « 100 % blockchain » depuis 2019, racheté par l'agent de transfert SS&C en 2025. — [Finextra](https://www.finextra.com/newsarticle/46755/ssc-completes-1bn-acquisition-of-calastone)
- **FundsDLT en Suisse.** Premier ordre ZKB en 2021, puis un nouveau « pilote » ZKB-UBS seulement en 2025 : aucun réseau suisse constitué entre-temps. — [FintechNewsCH, 2021](https://fintechnews.ch/blockchain_bitcoin/zurcher-kantonalbank-completes-first-blockchain-based-fund-transaction/42909/) ; [Ledger Insights, 2025](https://www.ledgerinsights.com/zurcher-kantonalbank-ubs-in-fundsdlt-pilot/)
- **Régime pilote de l'UE.** Six infrastructures seulement après plus de deux ans ; l'ESMA et l'OMFIF pointent des obstacles réglementaires (seuils). — [OMFIF](https://www.omfif.org/2025/08/eus-dlt-pilot-can-still-take-off-if-the-rules-catch-up/) ; [Goodwin](https://www.goodwinlaw.com/en/insights/publications/2025/07/insights-otherindustries-reg-dlt-pilot-regime-esma-report-highlights)

### Inferences
- **Leçon 1, l'effet réseau.** Un réseau d'ordres ne vaut que par ses deux côtés. FundsDLT avait la technologie mais pas assez de banques et de TA connectés. Calastone et Allfunds avaient le réseau et y ont greffé de la DLT. FundChain doit **démarrer avec un couple banque et direction de fonds déjà engagé**, idéalement actionnaires comme chez Iznes.
- **Leçon 2, la réaction des incumbents.** Clearstream, SS&C, Euroclear et SIX ont tous **racheté ou internalisé** la DLT : ils neutralisent la menace en l'absorbant. Une plateforme suisse doit être soit rachetable (stratégie de sortie), soit neutre et portée par les banques (utilité de place).
- **Leçon 3, pas de big bang.** ASX montre qu'il ne faut pas remplacer d'un coup l'infrastructure de règlement. Mieux vaut commencer par un **segment étroit** (Iznes : institutionnels français ; BNPP AM : une part de fonds monétaire) et une coexistence avec SIX SIS.
- **Leçon 4, le risque fournisseur.** Le cas SETL montre qu'il faut sécuriser la propriété intellectuelle de la pile.

### Gaps
- Autres échecs souvent cités hors fonds (TradeLens, we.trade, Marco Polo) : non re-sourcés dans cette session, budget épuisé. **[HYPOTHÈSE]** : ils illustrent le même problème d'effet réseau.
- Bilan financier de SDX : non vérifié.
- Raisons officielles du rythme lent de FundsDLT en Suisse : non publiées.

---

## 11. Positionnement d'une plateforme suisse et espaces encore ouverts

### Takeaway
**Position : FundChain ne doit pas attaquer la distribution transfrontalière de fonds luxembourgeois et irlandais.** Ce terrain est verrouillé par deux blocs intégrés : Deutsche Börse (Vestima + FundsDLT + Allfunds, closing au S1 2027) et SS&C/Calastone, plus Euroclear FundsPlace. FundChain doit viser l'espace que personne ne couvre : **un registre de parts de fonds de droit suisse tenu en droit-valeur inscrit (art. 973d CO), partagé comme registre de référence unique entre banque distributrice, direction de fonds / banque dépositaire et plateforme, avec une jambe CHF branchée sur le SIC**. Les jambes Helvetia et deposit token restent des options à évaluer. FundChain doit rester interopérable avec Vestima/FundsDLT pour les fonds étrangers.

### Cited Findings (rappels des éléments structurants)
- FundsDLT, seul acteur DLT ayant traité des ordres entre banques suisses, fait de la **messagerie d'instructions** (ZKB vers UBS) sur Quorum, adossée à Vestima. — [Ledger Insights](https://www.ledgerinsights.com/zurcher-kantonalbank-ubs-in-fundsdlt-pilot/) ; [Clearstream](https://www.clearstream.com/clearstream-en/newsroom/240110-3818150)
- Calastone Tokenised Distribution ne change ni l'administration ni les prestataires du fonds. — [Calastone](https://www.calastone.com/news/calastone-launches-tokenised-distribution-solution-to-unlock-the-future-of-fund-distribution/)
- Iznes tient le registre on-chain (souscriptions et rachats « directement dans le registre »), pour environ 70 gérants surtout français, 32 Md€ (05.2026). — [Agefi Actifs](https://www.agefiactifs.com/investissements-financiers/article/iznes-obtient-lagrement-amf-en-tant-quentreprise-86826) ; [Boursorama](https://www.boursorama.com/bourse/actualites/iznes-franchit-le-seuil-des-32-milliards-d-euros-d-actifs-tokenises-446b40948a317fd3cec78893ddd2abd3)
- Deutsche Börse rachète Allfunds, closing attendu au S1 2027. — [Markets Media](https://www.marketsmedia.com/deutsche-borse-receives-shareholder-approvals-of-allfunds-acquisition/)
- Le droit suisse permet les droits-valeurs inscrits depuis 2021. — [Apollo-8](https://www.apollo-8.ch/post/swiss-dlt-act-and-tokenized-securities)
- BX Digital règle en DvP par smart contract avec une connexion au SIC (licence FINMA 2025). — [FINMA](https://www.finma.ch/en/news/2025/03/20250318-mm-dlt-handelssystem/)
- La wCBDC Helvetia est limitée au CSD SIX SIS et en pilote jusqu'à au moins mi-2027. — [SIX](https://www.six-group.com/en/products-services/securities-services/digital-assets/digital-securities.html)
- Le pilote Guardian a obtenu le STP de la jambe paiement via Swift sans monnaie on-chain. — [FinTech Futures](https://www.fintechfutures.com/tokenisation/mas-project-guardian-pilots-settlement-of-tokenised-fund-subscriptions-and-redemptions-using-swift)

**Tableau récapitulatif des concurrents (au 1er octobre 2026)**

| Acteur | Modèle | Registre de référence on-chain ? | Statut (date) | Traction publiée | Propriétaire | Fonds suisses | Jambe cash on-chain |
|---|---|---|---|---|---|---|---|
| FundsDLT / Clearstream | Messagerie d'ordres + digital TA SaaS (Quorum) | Partiel : le digital TA « digitalise les registres », pas de preuve de registre légal on-chain en Suisse | Production (digital TA) ; pilotes CH (2021, 03.2025) | « Jusqu'à 50 % de coûts en moins » ; 11 Md€ non confirmé | Deutsche Börse | Oui (pilotes ZKB, UBS) | Non publiée |
| Allfunds Blockchain | Blockchain privée, parts natives | Oui pour quelques fonds (BNPP AM, Azvalor) | Production limitée (2025-2026) | Non publiée | Allfunds, puis Deutsche Börse (S1 2027) | Non trouvé | Non publiée |
| Iznes | Registre partagé d'OPC | **Oui** | Production, entreprise d'investissement agréée | 32 Md€, ~70 gérants, ~7 200 opérations/mois (05.2026) | Gérants français | Non | Expérimentation MNBC Banque de France |
| Calastone Tokenised Distribution | Jumeau token sur registre TA | Non (couche de distribution) | Live (L&G, 04.2026) | Réseau : 4 500 clients, > 250 Md£/mois (10.2025) | SS&C | Non trouvé | Stablecoins côté investisseur |
| Clearstream D7 DLT / Euroclear D-SI | Émission de dette | Oui (dette), pas les fonds | Production (dette) | n.d. | ICSD | Non | Essais BCE |
| Euroclear FundsPlace + Fundnode | Hub fonds + DLT Singapour | Fundnode : DLT de règlement | Production (SG) | 250 000 fonds sur FundsPlace | Euroclear (+ part Marketnode) | Non | n.d. |
| Sygnum Desygnate (FILQ) | Fonds monétaire tokenisé, registre on-chain | Oui (selon Sygnum) | Live (05.2026) | n.d. | Sygnum (CH) | Fonds non suisse | Souscription en stablecoin |
| BX Digital | Système de négociation TRD | Titres TRD | Licence 2025, démarrage T4 2025 | n.d. | Boerse Stuttgart | Pas de fonds trouvé | DvP relié au SIC |
| SIX SIS (ex-SDX) + Helvetia | CSD d'actifs numériques + wCBDC | Oui (obligations) | Pilote wCBDC jusqu'à mi-2027 au moins | 750 MCHF en 6 émissions (06.2025) | SIX | Pas de fonds trouvé | wCBDC (pilote) |

**Espaces ouverts identifiés (classés par attractivité pour FundChain)**

| # | Espace | Pourquoi il est ouvert | Qui pourrait le fermer | Recommandation |
|---|---|---|---|---|
| 1 | Registre de référence partagé pour les **fonds de droit suisse** en droit-valeur inscrit | Aucun cas public trouvé ; FundsDLT ne fait que de la messagerie ; Iznes et Allfunds hors Suisse | SIX SIS (ex-SDX), Clearstream (digital TA) | **Cible n° 1**, avec un couple banque cantonale + direction de fonds **[HYPOTHÈSE]** |
| 2 | **Réconciliation banque-TA-plateforme supprimée** (un seul registre pour trois parties) | Les modèles européens dominants sont des jumeaux numériques (Aviva, Calastone, abrdn), qui ajoutent une couche | Iznes s'il venait en Suisse | Argument central du pitch : « pas un token de plus, un registre de moins » |
| 3 | **Jambe CHF** du règlement DvP des ordres sur fonds | Helvetia limité au CSD SIX et en pilote ; deposit tokens en PoC ; CHFD en sandbox | SIX/BNS, consortium des banques | Concevoir une jambe cash agnostique : SIC conditionné (modèle Guardian/BX Digital) dès le départ, wCBDC ou deposit token ensuite **[HYPOTHÈSE]** |
| 4 | **Neutralité** face à la consolidation (Deutsche Börse et SS&C) | Après 2027, les deux piles DLT européennes appartiennent à des incumbents intégrés | — | Gouvernance d'utilité de place, détenue par les participants (modèle Iznes) |
| 5 | Distribution **retail / banque privée suisse** de fonds suisses | Les fonds tokenisés live sont des fonds monétaires USD pour crypto-natifs et institutionnels | Sygnum, Taurus | Second temps, après la preuve sur le segment institutionnel |
| 6 | Fonds Lux / IE distribués en Suisse | Couvert par Vestima, FundsPlace, Allfunds, Calastone | — | **Ne pas attaquer** ; seulement une interopérabilité (passerelle vers Vestima/FundsDLT) |

### Inferences
- La **seule promesse vraiment différenciante** de FundChain est un registre unique et légal (droit-valeur inscrit) partagé entre trois parties en Suisse. La messagerie DLT (FundsDLT), les jumeaux numériques (Calastone, Aviva) et les fonds monétaires crypto (BUIDL, uMINT) ne la réalisent pas.
- La promesse « moins cher que Clearstream/Euroclear » est **fragile** : Clearstream revendique déjà jusqu'à 50 % d'économies avec son digital TA DLT. Il faut un argument chiffré propre à la Suisse. **[HYPOTHÈSE]**
- **Risque n° 1** : SIX tokenise lui-même les parts de fonds suisses sur son CSD numérique avec la wCBDC Helvetia. **Risque n° 2** : Clearstream vend son digital TA aux directions de fonds suisses avec ZKB et UBS comme références. **[HYPOTHÈSE]**
- **Condition de go suggérée** : un engagement écrit d'au moins une direction de fonds suisse et d'au moins une banque distributrice, plus une validation FINMA du schéma de registre. Sans cela, FundChain reproduirait le parcours de FundsDLT en Suisse : des pilotes répétés, sans réseau. **[HYPOTHÈSE]**

### Gaps
- Coûts réels de la chaîne actuelle pour un fonds suisse (SIX SIS, banque dépositaire, routage d'ordres) : relèvent de la note « infrastructures » et ne sont pas couverts ici.
- Intérêt déclaré des directions de fonds suisses (AMAS) pour un registre partagé : aucune enquête publique trouvée.
- Tarifs publics de FundsDLT, Allfunds Blockchain, Iznes et Calastone Tokenised Distribution : **aucun trouvé**. Toute comparaison tarifaire reste **[HYPOTHÈSE]**.
- Ces notes doivent être recontrôlées sur les textes intégraux une fois l'accès web rétabli, en priorité :
  - le chiffre Iznes de 32 Md€ ;
  - le chiffre Clearstream de 11 Md€ ;
  - le périmètre L&G de 50 Md£ ;
  - les encours BENJI et BUIDL ;
  - la durée de l'extension Helvetia.
