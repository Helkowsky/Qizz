# Chaîne actuelle de traitement des ordres sur fonds et nombre d'intermédiaires (CH en priorité, comparaison LU / IE / ETF)

> **Note méthodologique (lis-la avant d'utiliser ces notes).** Recherche faite le 1er octobre 2026. Le proxy de sortie a **bloqué WebFetch sur tous les domaines testés** (swift.com, cssf.lu, clearstream.com, euroclear.com, six-group.com, calastone.com, globalcustodian.com). Les constats ci-dessous s'appuient donc sur les **extraits renvoyés par le moteur de recherche** pour chaque URL citée, et non sur une lecture intégrale des documents. Les chiffres clés (EFAMA-Swift, ESMA, Calastone, Allfunds) doivent être revérifiés sur la source primaire avant de figurer dans un pitch. Quelques références réglementaires (directive UCITS sur EUR-Lex, LPCC sur Fedlex) sont citées à partir du texte primaire connu, sans l'avoir relu dans cette session. Tout ce qui n'est pas sourcé est marqué `[HYPOTHÈSE]`. Les faits antérieurs à 2024 sont datés.
>
> **Convention de comptage utilisée partout.** Un **intermédiaire de chaîne** est une entité juridiquement distincte, ni l'investisseur final ni le véhicule de fonds, qui **transmet l'ordre** ou **tient un livre** (positions en parts ou espèces) entre l'investisseur et le registre du fonds. Les **prestataires du fonds** (agent de transfert ou registraire, banque dépositaire, ManCo / Fondsleitung, administrateur) sont comptés à part. Le « total » correspond au nombre d'entités distinctes qui touchent l'ordre ou sa position.

---

## 1. Chaîne type d'un ordre sur fonds traditionnel (hors ETF) et nombre d'intermédiaires (minimum, typique, pire cas)

### Takeaway
Un ordre sur un fonds **suisse** peut ne passer que par **1 à 2 intermédiaires** quand la banque du client appartient au même groupe que la Fondsleitung et la banque dépositaire, ce qui est fréquent mais pas chiffré. Il en traverse **2 à 3** via une banque tierce et SIX SIS, et **jusqu'à 6** pour un investisseur étranger passant par Clearstream, dont le lien vers les fonds suisses passe encore par UBS AG. Pour un fonds **LU / IE** distribué en Suisse, la chaîne typique compte **2 à 3 intermédiaires** (banque, plateforme ou hub, parfois global custodian) avant l'agent de transfert, et **5 à 6** dans le pire cas avec des couches de nominees. En comptant les prestataires du fonds, **4 à 9 entités distinctes** touchent un même ordre.

### Cited Findings

**Fonds suisses : qui reçoit l'ordre et où vivent les parts**
- En Suisse, la **banque dépositaire** est légalement chargée de la garde des actifs du fonds, de **l'émission et du rachat des parts** et du trafic des paiements (art. 73 LPCC / KAG) — [FINMA, banques dépositaires de placements collectifs](https://www.finma.ch/en/authorisation/asset-management/custodian-banks-of-collective-investment-schemes/) ; [LPCC, RS 951.31 (Fedlex)](https://www.fedlex.admin.ch/eli/cc/2006/822/en) ; [copie anglaise de la LPCC](https://eips.ethereum.org/assets/eip-2980/Swiss-Confederation-CISA.pdf)
- La banque dépositaire peut déléguer la garde à des tiers dépositaires ou à des dépositaires centraux (CSD) en Suisse ou à l'étranger, à condition d'en informer les investisseurs dans le prospectus et le document d'information clé (KID) — [Chambers, Investment Funds 2026 – Switzerland](https://practiceguides.chambers.com/practice-guides/investment-funds-2026/switzerland/trends-and-developments)
- Dans un fonds contractuel suisse, les **demandes de souscription et de rachat sont reçues par la banque dépositaire** chaque jour bancaire (« jour de passation de l'ordre ») jusqu'à l'heure fixée dans le prospectus. Le **clearing** des parts passe par **SIX SIS AG**, à Zurich. Les parts sont attribuées dès que la banque dépositaire reçoit le prix d'émission, puis livrées par inscription dans un dépôt — prospectus avec contrat de fonds intégré de [ZKB Gold ETF (déc. 2024)](https://www.swissfunddata.ch/sfdpub/docs/fpd-70501-20241218-de.pdf) et de [Raiffeisen ETF (oct. 2024)](https://www.swissfunddata.ch/sfdpub/docs/fpd-1654-20241024-de.pdf). L'extrait de recherche fusionnait les deux documents et n'a pas permis de savoir lequel contient chaque phrase.
- Exemple de chaîne intégrée : les parts du PostFinance Fonds 4 **ne sont en principe pas matérialisées** (tenue en compte uniquement) et ne peuvent être détenues **qu'en dépôt chez PostFinance ou l'un de ses canaux de distribution** — [prospectus PostFinance Fonds 4 (juin 2021, document ancien)](https://www.swissfunddata.ch/sfdpub/docs/fpd-8271_04-20210617-de.pdf)
- SIX SIS est à la fois le **CSD national suisse** et un **ICSD**. Il exploite SECOM, un système de règlement-livraison en temps réel — [SIX, About SIX SIS AG](https://www.six-group.com/en/products-services/securities-services/settlement-and-custody/info-center/about-six-sis-ag.html) ; [CPSS/BIS, Switzerland (document ancien)](https://www.bis.org/publ/cpss97_ch.pdf)
- **Investisseur étranger via Clearstream** : Clearstream a activé un **lien direct avec SIX SIS en février 2026**. Les **fonds éligibles au routage d'ordres Vestima restent toutefois détenus sur l'ancien lien indirect via UBS AG** et ne migrent pas. Le lien direct couvre notamment les fonds fermés et les **ETF sans routage d'ordres** — [Clearstream, Settlement services – Direct link to SIX SIS](https://www.clearstream.com/clearstream-en/res-library/market-coverage/settlement-services-direct-link-to-six-sis-switzerland-4927274) ; [Clearstream, migration procedure a25096](https://www.clearstream.com/clearstream-en/res-library/settlement/a25096-4863794)
- Une alliance SIX–Euroclear (FundSettle) réunit **routage des ordres et règlement des parts** sur une même plateforme pour tous les types de transactions sur fonds, pour les banques privées suisses. Elle donne accès au réseau Euroclear de **plus de 500 agents de transfert** (annonce de ~2015, à revérifier) — [Funds Europe, SIX and Euroclear in Swiss funds deal](https://funds-europe.com/six-and-euroclear-in-swiss-funds-deal/) ; [Asset Servicing Times](https://www.assetservicingtimes.com/assetservicesnews/fundservicesarticle.php?article_id=5088)

**Hubs et plateformes (LU / IE et transfrontalier)**
- Clearstream Vestima se présente comme la plus grande plateforme de traitement de fonds : exécution d'ordres, règlement et conservation pour **plus de 245 000 fonds** sur **plus de 55 marchés de fonds** — [Clearstream, Vestima Service Model](https://www.clearstream.com/clearstream-en/funds-services/fund-centre/execution/vestima/vestima-service-model-1302278)
- Allfunds a intégré **24 nouveaux distributeurs et 51 sociétés de gestion** au 1er semestre 2025. Les encours administrés (AuA) diffèrent selon les sources : environ **1 600 Md€** au S1 2025 selon un résumé, **1 760 Md€**, puis **1 800 Md€** à fin 2025 selon d'autres (**chiffres contradictoires**, à vérifier dans le communiqué) — [Allfunds, communiqué S1 2025](https://app.allfunds.com/docs/cms/Allfunds_1_H_2025_Press_Release_VF_3c6479853a.pdf) ; [WealthBriefing](https://www.wealthbriefing.com/html/article.php/allfunds-posts-positive-financial-results-in-2025) ; [Investment International (« AUA grows 13% »)](https://investment-international.com/News/allfunds-reports-record-ebitda-of-e422m-as-aua-grows-13/)
- Clearstream décrit la chaîne de distribution de fonds comme composée de **nombreux intermédiaires, chacun avec ses propres silos technologiques**, qui ajoutent des coûts et des inefficacités opérationnelles — [Clearstream, Fund tokenization: building stronger foundations (sept. 2025)](https://www.clearstream.com/clearstream-en/250925-4962862) ; [Clearstream, Unlocking the future of fund distribution](https://www.clearstream.com/clearstream-en/newsroom/250925-4873304)

**Diagrammes (construits à partir des faits cités ; les couches marquées `[H]` sont des hypothèses de structure)**

```
SCÉNARIO CH-1 — Fonds suisse, chaîne intégrée (minimum)
Investisseur ──ordre──> Banque X (conseil + dépôt titres)                 [intermédiaire 1]
                          │ (même groupe que Fondsleitung et Depotbank) [H]
                          ▼
                 Depotbank du fonds (émission/rachat, art. 73 LPCC)     [prestataire fonds]
                          │
                 Fondsleitung (VNI, administration)                     [prestataire fonds]
Parts : tenues en compte chez Banque X (cf. PostFinance Fonds 4), éventuellement chez SIX SIS [H]
=> Intermédiaires de chaîne : 1 (2 si SIX SIS) | Total d'entités : 2–4

SCÉNARIO CH-2 — Fonds suisse acheté via une banque suisse tierce (typique)
Investisseur ──> Banque B (dépôt client) ──ordre (SWIFT / plateforme / e-mail-fax [H])──> Depotbank du fonds
                                                                             │ émission au jour d'ordre + 1
Fondsleitung (VNI) <─────────────────────────────────────────────────────────┘
Livraison des parts : Depotbank ──> SIX SIS (SECOM) ──> compte de Banque B chez SIX SIS
Espèces : Banque B ──> Depotbank (CHF via SIC [H])
=> Intermédiaires de chaîne : 2 (Banque B, SIX SIS) ; 3 si une plateforme (SIX/FundSettle, Allfunds) route l'ordre
=> Total d'entités : 4–5

SCÉNARIO CH-3 — Fonds suisse, investisseur étranger ou gérant indépendant (pire cas)
Investisseur ──> Gérant indépendant (EAM) [H] ──> Banque dépositaire ──> Global custodian [H]
   ──> Clearstream Banking (Vestima, routage) ──> UBS AG (lien indirect CBL) ──> SIX SIS
   ──> Depotbank du fonds ──> Fondsleitung
=> Intermédiaires de chaîne : 6 (EAM, banque, global custodian, Clearstream, UBS AG, SIX SIS)
=> Total d'entités : 8

SCÉNARIO LU/IE-1 — Fonds LU/IE, souscription en nom propre auprès du TA (minimum, rare en retail [H])
Investisseur ──> Agent de transfert / registraire (inscription au registre) ──> Fonds (ManCo, dépositaire)
=> Intermédiaires de chaîne : 0 | Total d'entités : 3 (TA, ManCo, dépositaire)

SCÉNARIO LU/IE-2 — Fonds LU/IE distribué par une banque privée suisse (typique)
Investisseur ──> Banque privée CH ──> Hub ou plateforme (Allfunds / Vestima / FundSettle / Calastone)
   ──> TA-registraire (LU : RTA ; IE : administrateur-TA) ──> Fonds (ManCo + dépositaire)
Registre : inscrit la plateforme ou son nominee, pas l'investisseur
=> Intermédiaires de chaîne : 2 (3 avec un global custodian) | Total d'entités : 5–6

SCÉNARIO LU/IE-3 — Fonds LU/IE, couches de nominees (pire cas)
Investisseur ──> EAM ──> Banque dépositaire ──> Global custodian ──> Sous-dépositaire / agent local [H]
   ──> Plateforme nominee (ex. Allfunds) ──> Réseau de routage (Calastone / Swift) [H] ──> TA ──> Fonds (ManCo + dépositaire)
=> Intermédiaires de chaîne : 5–6 | Total d'entités : 8–9
```

### Inferences
- **Récapitulatif des comptages** (dérivé des diagrammes ci-dessus) :

| Scénario | Intermédiaires de chaîne | Prestataires du fonds | Total d'entités | Livres de positions distincts |
|---|---|---|---|---|
| CH-1 intégré | 1 (2 avec SIX SIS) | 2 | 2–4 | 2–3 |
| CH-2 banque tierce | 2–3 | 2 | 4–5 | 3–4 |
| CH-3 Clearstream / EAM | 6 | 2 | 8 | 5–6 |
| LU/IE-1 en nom propre | 0 | 3 | 3 | 1 |
| LU/IE-2 typique | 2–3 | 3 | 5–6 | 3–4 |
| LU/IE-3 nominees | 5–6 | 3 | 8–9 | 5–7 |

- La Suisse se distingue : pour un fonds suisse, la **banque dépositaire** assure le rôle que tient l'agent de transfert au Luxembourg ou en Irlande. Les parts circulent comme des titres dans **SIX SIS**. La chaîne domestique est donc courte, mais elle **double le monde « fonds » (ordre adressé à la banque dépositaire) et le monde « titres » (livraison des parts via le CSD)**. C'est un point de réconciliation propre au marché suisse `[HYPOTHÈSE fondée sur les prospectus ZKB / Raiffeisen et Clearstream cités]`.
- Le pire cas suisse n'est pas théorique : il découle directement du maintien des fonds routés par Vestima sur le **lien indirect via UBS AG** en 2026 (fait sourcé). Un ordre transfrontalier sur un fonds suisse ajoute donc deux couches (Clearstream et UBS) par rapport à un ordre domestique.
- Pour le pitch FundChain, la cible naturelle est de ramener la chaîne à **banque ↔ registre partagé ↔ fonds (TA ou banque dépositaire)**, soit 1 intermédiaire et 1 seul livre. Le gain se mesure en livres supprimés (de 3–7 à 1) plus qu'en nombre d'entités `[HYPOTHÈSE]`.

### Gaps
- Je n'ai trouvé **aucune statistique publique sur la part des fonds suisses distribués par le groupe bancaire promoteur** (chaîne intégrée) par rapport aux banques tierces. Ce point est clé pour pondérer CH-1 et CH-2.
- Aucune source publique ne donne la **part des ordres sur fonds suisses routés via SIX/FundSettle, Allfunds ou Vestima** par rapport aux ordres envoyés directement à la banque dépositaire.
- Les volumes d'ordres de Vestima, FundSettle et Allfunds (nombre d'ordres par an) ne figuraient pas dans les extraits accessibles.
- Je n'ai pas pu vérifier si l'alliance SIX–FundSettle est toujours active en 2026 sous cette forme : l'article date d'environ 2015.

---

## 2. L'agent de transfert est-il le fonds ? Nomination, internalisation ou externalisation, registraire vs agent de transfert, et différences CH / LU / IE

### Takeaway
Non. L'agent de transfert (TA) est un **prestataire nommé par le fonds ou sa ManCo / AIFM**, presque toujours **externalisé** auprès d'un administrateur agréé : State Street/IFDS, CACEIS (qui a repris RBC Investor Services), BNP Paribas, etc. Au Luxembourg, la « fonction de registraire » est l'une des trois fonctions réglementées de l'administration d'OPC (circulaire CSSF 22/811). En Irlande, le TA est généralement **l'administrateur** agréé par la Banque centrale. En Suisse, il n'y a **pas de TA au sens LU/IE** pour les fonds contractuels : la **banque dépositaire émet et rachète les parts**, la **Fondsleitung** calcule la VNI et administre, et la propriété des parts se lit dans la **chaîne de conservation** (SIX SIS puis banques), pas dans un registre nominatif central.

### Cited Findings

**Luxembourg**
- La circulaire **CSSF 22/811** (16 mai 2022, modifiée par la **CSSF 25/900**) encadre les administrateurs d'OPC. Elle remplace le chapitre D de la circulaire IML 91/75 — [CSSF 22/811 (version consolidée)](https://www.cssf.lu/wp-content/uploads/cssf22_811eng.pdf) ; [CSSF 25/900](https://www.cssf.lu/wp-content/uploads/cssf25_900eng.pdf) ; [BSP, alerte juridique](https://www.bsp.lu/lu/publications/newsletters-legal-alerts/cssf-circular-22811-uci-administrators)
- L'administration d'OPC se divise en **trois fonctions** : (1) la **fonction de registraire**, qui couvre toutes les tâches nécessaires à la tenue du registre des porteurs de parts ou actionnaires ; (2) le calcul de la VNI et la comptabilité ; (3) la communication avec les clients — [CMS, mise à jour juridique Luxembourg](https://cms.law/en/lux/legal-updates/Luxembourg-regulator-publishes-circular-providing-the-UCI-administration-industry-with-a-modernised-and-comprehensive-framework) ; [Mondaq](https://www.mondaq.com/financial-services/1226974/cssf-circular-on-uci-administrator)
- Peuvent être administrateurs d'OPC les établissements de crédit, les **agents teneurs de registre** et les agents administratifs ou de communication (ces deux derniers pour certaines fonctions seulement), agréés selon la loi du 5 avril 1993. La nomination est soumise à une **autorisation préalable de la CSSF** — [CMS](https://cms.law/en/lux/legal-updates/Luxembourg-regulator-publishes-circular-providing-the-UCI-administration-industry-with-a-modernised-and-comprehensive-framework) ; [Lexgo](https://www.lexgo.lu/en/news-and-articles/11868-cssf-circular-22-811-on-uci-administrators)
- La directive UCITS place l'« administration » parmi les fonctions de la **société de gestion**, déléguables. Elle comprend notamment la **tenue du registre des porteurs**, **l'émission et le rachat des parts** et le **règlement des contrats** — [Directive 2009/65/CE, annexe II (EUR-Lex)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32009L0065)
- Marché luxembourgeois des TA (classement Monterey Insight) : **State Street domine** l'administration, la conservation et, avec **IFDS** (coentreprise State Street / SS&C), l'agence de transfert. **CACEIS est n° 2 des TA** après avoir repris RBC Investor Services, et **BNP Paribas est 4e** — [Delano, State Street tops Luxembourg rankings](https://delano.lu/article/state-street-tops-luxembourg-r) ; [Delano, Monterey Insight](https://delano.lu/article/monterey-insight-lux-fund-repo) ; [CACEIS, transfer agency services](https://www.caceis.com/news/transfer-agency-services-a-business-on-its-own-that-requires-a-high-level-of-expertise)
- Dans les prospectus de SICAV luxembourgeoises, c'est le **« Registrar and Transfer Agent »** qui reçoit les ordres et applique le cut-off (exemple : ordres reçus avant 15h30 CET un jour de valorisation, traités à la VNI de ce jour) — [prospectus Fidelity Funds SICAV](https://www.fidelityinternational.com/legal/documents/FF/FI-en/pr.ff.en.FI.pdf) ; [prospectus State Street GA Luxembourg SICAV (2024)](https://www.ssga.com/library-content/products/fund-docs/mf/emea/prospectus/prospectus-emea-en_gb-state-street-global-advisors-luxembourg-sicav-22052024090425.pdf). L'attribution exacte de chaque phrase à l'un ou l'autre prospectus n'a pas pu être vérifiée.
- Clearstream propose un **« Digital Transfer Agent »** (FundsDLT) avec registre d'investisseurs adossé à une blockchain. Il revendique **jusqu'à 50 % de réduction des coûts opérationnels** chez certains clients et une réconciliation réduite — [Clearstream, Digital Transfer Agent](https://www.clearstream.com/clearstream-en/funds-services/asset-managers-and-transfer-agents/digital/fundsdlt-digital-transfer-agent) ; [Clearstream, Evolving transfer agency for digital age (mai 2025)](https://www.clearstream.com/clearstream-en/newsroom/250530-4543336)

**Irlande**
- Les administrateurs de fonds sont **agréés et supervisés par la Banque centrale d'Irlande**. Ils gèrent les opérations courantes et se coordonnent avec le dépositaire, l'auditeur et les **agents de transfert**. Le service d'agence de transfert comprend la **tenue du registre des actionnaires** et le traitement des demandes de modification des investisseurs — [Irish Funds, Fund Services](https://www.irishfunds.ie/set-up-distribution/fund-services/)
- Dans un ICAV à compartiments, l'affectation des actions à un compartiment se lit dans le **registre des actionnaires, tenu par l'agent de transfert de l'ICAV (en général l'administrateur)** — [Cadwalader, The Irish Collective Asset-Management Vehicle (2019)](https://www.cadwalader.com/fund-finance-friday/index.php?nid=23&eid=153&tag=2019-03-01-The+Irish+Collective+Asset-Management+Vehicle+)
- L'ICAV est régi par l'ICAV Act 2015 et supervisé par la Banque centrale, qui en est aussi le registre d'immatriculation. Les ICAV et unit trusts déclarent leurs bénéficiaires effectifs dans un registre central tenu par la Banque centrale — [Banque centrale d'Irlande, ICAV guidance](https://www.centralbank.ie/regulation/industry-market-sectors/funds/introduction-to-icav/guidance) ; [Dechert, AML update (2020)](https://www.dechert.com/knowledge/onpoint/2020/9/aml-update--new-icav-and-unit-trust-central-register-of-benefici.html)

**Suisse**
- Le fonds contractuel est la structure la plus courante. Il repose sur un **contrat de fonds** entre les investisseurs, la **direction de fonds (Fondsleitung)** et la **banque dépositaire** — [Chambers, Switzerland: An Investment Funds Overview](https://chambers.com/content/item/6915)
- L'**administration du fonds** fait partie des tâches principales de la direction de fonds (pour un FCP, une SICAV à gestion externe, etc.). Elle peut être **déléguée**, y compris à des tiers non régulés s'ils sont qualifiés, avec **autorisation préalable de la FINMA**. La VNI est calculée par la direction de fonds et **contrôlée par la banque dépositaire** — [Lexology, Fund Management in Switzerland](https://www.lexology.com/library/detail.aspx?g=518c7d70-bf66-447b-a081-71f879b4791a)
- Pour les L-QIF (fonds non soumis à autorisation), l'administration doit être assurée par un établissement suisse sous surveillance prudentielle. La garde dépend de la forme juridique (fonds contractuel, SICAV, SCPC) — [Lexology, Fund Management in Switzerland](https://www.lexology.com/library/detail.aspx?g=518c7d70-bf66-447b-a081-71f879b4791a)
- La banque dépositaire émet et rachète les parts (art. 73 LPCC). Les parts sont **non matérialisées et tenues en compte** — [FINMA](https://www.finma.ch/en/authorisation/asset-management/custodian-banks-of-collective-investment-schemes/) ; [prospectus PostFinance Fonds 4 (2021)](https://www.swissfunddata.ch/sfdpub/docs/fpd-8271_04-20210617-de.pdf)

### Inferences
- **Le TA n'est pas le fonds.** Le fonds (SICAV, ICAV, FCP) ou sa ManCo / AIFM **nomme** le TA ou registraire par contrat de délégation. Le TA tient le registre **pour le compte du fonds**, et ce registre fait foi juridiquement de la qualité d'actionnaire. Les cas « internalisés » sont des TA filiales du groupe de gestion `[HYPOTHÈSE : pas de statistique trouvée sur la part internalisée]`.
- **Registraire vs agent de transfert** : au Luxembourg, la « fonction de registraire » de la CSSF 22/811 regroupe la tenue du registre **et** le traitement des ordres (réception, exécution, confirmations). Dans le langage courant, le « Registrar and Transfer Agent » (RTA) est la même entité. Dans les structures ETF à certificat global, le **registraire** ne fait que tenir le registre (un seul porteur inscrit, le nominee du dépositaire commun), tandis que le **TA** gère les mouvements avec les participants autorisés (voir §4). La distinction existe donc surtout côté ETF `[HYPOTHÈSE de synthèse]`.
- **Suisse** : il n'y a **pas de registre nominatif d'investisseurs tenu par un TA** pour les fonds contractuels classiques. La propriété est prouvée par la chaîne de dépôts (SIX SIS, puis la banque, puis l'investisseur), comme pour une action au porteur. Pour une blockchain partagée, le **« fonds ou son TA »** de la vision FundChain correspond donc en Suisse à **la banque dépositaire, et accessoirement à la Fondsleitung**, et non à un TA `[HYPOTHÈSE fondée sur les sources citées ; à confirmer par le juriste]`. Les parts suisses tenues en compte relèveraient de la loi sur les titres intermédiés (LTI/BEG) `[HYPOTHÈSE non sourcée ici]`.

### Gaps
- Je n'ai trouvé aucune statistique publique sur la part des TA **internalisés** vs **externalisés**, ni de classement des TA en Irlande.
- Apex et FundRock (cités dans la demande) n'apparaissent pas dans les sources trouvées. Je n'ai rien sur leur part de marché TA.
- Je n'ai pas pu lire le texte intégral de la CSSF 22/811 (fetch bloqué) pour citer la liste détaillée des tâches de la fonction de registraire (réception des ordres, avis d'opéré, contrôles LBC/KYC).
- Pour les SICAV suisses (forme sociétaire), je n'ai pas confirmé s'il existe un registre d'actionnaires investisseurs distinct de la chaîne de dépôts.

---

## 3. Comptes omnibus / nominee : qui figure au registre du fonds, et quelles conséquences (transparence, rétrocessions, KYC, réconciliation)

### Takeaway
Dans la distribution intermédiée, le registre du TA inscrit **la plateforme, le hub ou un nominee** (Allfunds, Clearstream, Euroclear, banque), **pas l'investisseur final**. Le fonds ne voit plus ses investisseurs. Le KYC repose sur l'intermédiaire, ce qu'on appelle le « KYC en cascade » `[HYPOTHÈSE de terminologie]`. Le calcul des **rétrocessions et trailer fees** impose de « re-splitter » les comptes omnibus à partir des positions déclarées par chaque niveau, ce qui ajoute une réconciliation **mensuelle** distincte de la réconciliation des ordres.

### Cited Findings
- Dans un compte omnibus, les parts sont **inscrites chez le TA au nom de l'intermédiaire**, qui tient seul l'information sur les actionnaires sous-jacents. Les sociétés de gestion **n'ont généralement pas d'information identifiant les clients** qui achètent et vendent via ces comptes (contexte américain, ICI déc. 2022) — [ICI, Navigating Intermediary Relationships (2022)](https://www.ici.org/system/files/2022-12/22-ppr-navigating-intermediary-relationships.pdf)
- Les comptes omnibus ou nominee, où les actifs sont détenus au nom du dépositaire plutôt qu'au nom du bénéficiaire effectif, sont dans le viseur des régulateurs pour trois raisons : protection des investisseurs, transparence fiscale et contrôle géopolitique (sanctions) — [Global Custodian, The Omnibus Dilemma](https://www.globalcustodian.com/the-omnibus-dilemma/)
- Pratiques de ségrégation des comptes dans les CSD européens (omnibus vs ségrégués) — [ECSDA, Account segregation practices at European CSDs (2015)](https://ecsda.eu/wp-content/uploads/2015_10_13_ECSDA_Segregation_Report.pdf)
- Les outils de gestion des commissions de distribution proposent une **réconciliation et un calcul numérisés des trailer fees**, des **« omnibus splits »** et une vue de la **hiérarchie de distribution**, signe que ces données ne sont pas disponibles nativement au registre — [FE fundinfo, Fee and Distribution Channel Management](https://www.fefundinfo.com/products/institutions/fee-distribution-channel-management)
- Les trailer fees se calculent selon plusieurs méthodes (date de transaction ou de règlement, moyenne quotidienne ou fin de mois, méthodes propriétaires), selon les **données de positions** utilisées — [ISITC, Mutual Fund Trailer Fee Payments Market Practice](https://isitc.org/wp-content/uploads/Mutual-Fund-Trailer-Fee-Payment-Market-Practice.pdf)
- Dans un ETF au modèle ICSD, le registre ne contient qu'**un seul porteur** : le certificat global est détenu par le **dépositaire commun** sous son compte « CD Nominees » auprès du registraire — [Clearstream, conversion de 83 ETF Invesco (structure ETF internationale)](https://www.clearstream.com/clearstream-en/products-and-services/settlement/a19059-1546586)
- En Suisse, la commission d'émission (max. 3 % dans l'exemple cité) peut revenir à la direction de fonds, à la banque dépositaire et/ou aux **distributeurs**. Les flux de rémunération des distributeurs sont donc prévus dès le contrat de fonds — [prospectus ZKB Gold ETF / Raiffeisen ETF](https://www.swissfunddata.ch/sfdpub/docs/fpd-70501-20241218-de.pdf)

### Inferences
- **Conséquences concrètes** `[HYPOTHÈSE de synthèse fondée sur les sources ci-dessus]` :

| Conséquence | Mécanisme | Coût / friction |
|---|---|---|
| Transparence | Le TA ne voit que le nominee de la plateforme | La société de gestion ne connaît pas ses investisseurs finaux et doit acheter des données de distribution |
| Rétrocessions | Calcul sur des positions omnibus à ventiler par distributeur et sous-distributeur | Réconciliation mensuelle ou trimestrielle des positions, litiges sur les montants, outils dédiés (FE fundinfo, etc.) |
| KYC / LBC | Le TA fait le KYC du nominee, le nominee celui de ses clients, etc. | Diligence en cascade, dépendance aux attestations, exposition aux sanctions |
| Réconciliation | Chaque niveau tient son propre livre (registre TA, livre de la plateforme, livre du dépositaire, livre de la banque) | N–1 réconciliations bilatérales de positions pour N livres |
| Restrictions de vente | Le TA ne peut pas vérifier l'éligibilité de l'investisseur final | Contrôle délégué au distributeur |

- Pour FundChain, un registre partagé qui porte **l'identifiant (pseudonymisé) du bénéficiaire ou au moins du distributeur final** permettrait de supprimer le split omnibus et de calculer les rétrocessions directement sur le registre. C'est un argument fort, mais il touche à la confidentialité bancaire suisse : à soumettre au juriste `[HYPOTHÈSE]`.

### Gaps
- Je n'ai trouvé aucune donnée publique européenne ou suisse sur la **part des encours détenus via omnibus vs comptes nominatifs** chez les TA LU/IE.
- Je n'ai trouvé aucun chiffre public sur le **coût de la réconciliation des rétrocessions** (ETP, taux de litiges).
- Les sources omnibus trouvées sont surtout américaines (ICI, FINRA) ; l'équivalent EFAMA/ALFI n'a pas été trouvé.

---

## 4. Chaîne ETF : marché primaire (AP, création/rachat), marché secondaire (bourse, CCP, CSD/ICSD), modèle ICSD irlandais et règlement SIX

### Takeaway
Le **marché primaire** ne concerne que les participants autorisés (AP), qui créent ou rachètent des **unités de création** en nature ou en espèces auprès du fonds via l'administrateur/TA (T+2 pour le cash dans les prospectus irlandais). Le **marché secondaire** passe par la bourse, une CCP et un CSD/ICSD. Les ETF irlandais sont émis selon le **modèle ICSD** : un certificat global est détenu par un dépositaire commun, le CSD émetteur est **Euroclear Bank ou Clearstream Banking Luxembourg**, et toute la chaîne de place (SIX x-clear / LCH / Cboe Clear Europe, puis SIX SIS) s'y ajoute pour une cotation suisse. Les échecs de règlement des ETF restent élevés : **17,32 % des instructions de règlement d'ETF en moyenne mensuelle dans l'EEE** (juin 2023 – mai 2024).

### Cited Findings

**Marché primaire**
- Un AP est une grande institution, typiquement un broker-dealer, liée par contrat à l'ETF et autorisée à créer ou racheter des parts directement auprès du fonds — [etf.com, Authorized Participant](https://www.etf.com/authorized-participant)
- **En nature** : l'AP livre le panier de titres sous-jacents et reçoit en échange de nouvelles parts ETF, en blocs prédéfinis (**unités de création**, typiquement **10 000 à 100 000 parts**). Le rachat suit le chemin inverse — [Optiver, ETF creation/redemption and authorised participants](https://www.optiver.com/explainers/etf-creation-redemption-and-authorised-participants/)
- Prospectus d'ETF irlandais : le fonds émet et rachète des parts auprès des AP en gros volumes. L'**unité de création** est un nombre prédéfini de parts. Le **cut-off** est l'heure limite à laquelle une demande doit être reçue par le **« Portal Operator »** pour transmission à **l'Administrateur** et traitement le jour de négociation. Une exigence de **règlement espèces à T+2** s'applique, avec un coussin pour la volatilité de marché et de change sur les droits et frais estimés — [SSGA SPDR ETFs Europe I plc, prospectus (19 février 2026)](https://www.ssga.com/library-content/products/fund-docs/etfs/emea/2-GENERIC-EN-FP-IRISH-SPDR-I.pdf) ; [Vanguard Funds plc, prospectus ETF](https://fund-docs.vanguard.com/etf-prospectus-en.pdf) (l'attribution exacte de chaque clause à l'un ou l'autre prospectus n'a pas été vérifiée)
- **Tous les AP concernés sont connectés à Euroclear Bank**, qui règle le marché primaire, de l'amorçage aux créations (« mark-ups ») et aux rachats (« mark-downs ») du certificat global — [Euroclear, ETFs – Transfer Agents](https://www.euroclear.com/services/en/funds/etf/transfer-agents.html)

**Modèle ICSD irlandais**
- Les ETF irlandais représentent **environ 62 % des ETF européens, soit environ 430 Md€** (chiffre du livre blanc Euroclear, vers 2020, ancien) — [Euroclear, Europe's ETF industry geared for the next level](https://www.euroclear.com/content/dam/euroclear/news%20&%20insights/Format/Whitepapers-Reports/Europe%E2%80%99s%20ETF%20industry.pdf)
- Après le Brexit, Euroclear UK & Ireland (CREST) ne pouvait plus être CSD émetteur des titres irlandais. **Depuis le 15 mars 2021, Euroclear Bank est le CSD émetteur** de la plupart des titres de sociétés irlandaises. **Tous les ETF irlandais étaient déjà passés au modèle ICSD** avant cette migration — [Euroclear, Successful migration of Irish securities (2021)](https://www.euroclear.com/newsandinsights/en/press/2021/2021-mr-07-irish-securities-migration.html) ; [Euroclear, Delivering continuity of Irish securities settlement](https://www.euroclear.com/content/dam/euroclear/About/regulatory-landscape/EuroclearBankWhitePaper-DeliveringcontinuityofIrishsecuritiessettlementinthelongtermpostBrexit.pdf) ; [Funds Europe, Irish ETF issuer migrates to ICSD](https://funds-europe.com/irish-etf-issuer-migrates-to-icsd-as-deadline-looms/)
- **Mécanique** : un **certificat global** est créé et détenu par le **dépositaire commun** sous son compte « CD Nominees » auprès du **registraire**. À l'émission, l'ETF est distribué via le **compte du TA chez Euroclear Bank**. L'AP instruit le TA de livrer les titres sur ses comptes dans les ICSD. Les conversions concernaient par exemple **83 ETF Invesco, 39 iShares, 27 Legal & General** — [Clearstream, Invesco 83 ETF](https://www.clearstream.com/clearstream-en/products-and-services/settlement/a19059-1546586) ; [Clearstream, iShares 39 ETF](https://www.clearstream.com/clearstream-en/products-and-services/settlement/d16017-1288806) ; [LuxCSD, Legal & General 27 ETF](https://www.luxcsd.com/resource/blob/1876692/d8dbe8503a76ced1a7d11fcb42f8ef4d/a20040-d20011-conversion-legal-general-etfs-data.pdf)
- State Street a migré ses SPDR ETF domiciliés en Irlande vers le modèle ICSD d'Euroclear en 2018 — [Euroclear, State Street completes migration (2018)](https://www.euroclear.com/newsandinsights/en/press/2018/2018_mr-07-StateStreetETF.html)
- Le modèle ICSD, lancé conjointement par Clearstream et Euroclear il y a une dizaine d'années, permet un règlement en un point paneuropéen et évite aux teneurs de marché de réaligner sans cesse leurs titres entre CSD nationaux — [Euroclear, A decade of ETF innovation](https://www.euroclear.com/newsandinsights/en/Format/Articles/euroclear-icsd-solution-and-the-road-ahead.html) ; [Clearstream, Why post-trade matters in Europe's ETF growth (25 sept. 2025)](https://www.clearstream.com/clearstream-en/newsroom/250925-4692200)

**Marché secondaire et fragmentation**
- **Taux d'échec** : les échecs de règlement des ETF ont représenté en moyenne **17,32 % du volume mensuel d'instructions de règlement d'ETF dans l'EEE** entre juin 2023 et mai 2024 — [ESMA, rapport final (juin 2025)](https://www.esma.europa.eu/sites/default/files/2025-06/ESMA74_1_1.PDF). Clearstream ajoute que **jusqu'à une transaction ETF sur cinq** peut échouer en période de tension — [Clearstream, Why post-trade matters (2025)](https://www.clearstream.com/clearstream-en/newsroom/250925-4692200)
- Cause : chaque pays a ses propres pratiques de règlement, sa fiscalité et son cadre opérationnel. Un ETF coté sur plusieurs bourses exige une coordination avec plusieurs CSD locaux et des réalignements fréquents — [Clearstream, Why post-trade matters (2025)](https://www.clearstream.com/clearstream-en/newsroom/250925-4692200)
- Pour un émetteur, les coûts de back-office s'empilent : règlement, **réconciliation**, gestion des rebates, opérations sur titres et données sont gérés séparément par marché — [Clearstream, Asset managers – ETF](https://www.clearstream.com/clearstream-en/funds-services/asset-managers-and-transfer-agents/etf)
- En 2025, les régulateurs français et belge ont demandé à Euronext de retirer les conditions de règlement de son projet de plateforme ETF, après les critiques d'Euroclear sur le risque de fragmentation — [ETF Stream, Regulators block Euronext's settlement plans](https://www.etfstream.com/articles/regulators-block-euronext-s-settlement-plans-for-new-etf-venue-reports)

**SIX Swiss Exchange**
- Une transaction sur SIX Swiss Exchange est envoyée pour **compensation à une CCP**, puis les parts ETF et les espèces sont échangées **dans SIX SIS** lors du règlement — [SIX, Clearing & Settlement Provisions](https://www.six-group.com/en/products-services/the-swiss-stock-exchange/trading/trading-provisions/clearing-and-settlement.html)
- **Trois CCP** sont reconnues pour SIX Swiss Exchange : **SIX x-clear, LCH Ltd, Cboe Clear Europe** (modèle interopérable) — [SIX, Recognised Clearing (CCP) and Settlement Organisations](https://www.six-group.com/dam/download/the-swiss-stock-exchange/trading/trading-provisions/clearing-and-settlement/rec-settlement-orgs.pdf)
- SIX x-clear utilise SECOM, le système de règlement de SIX SIS — [SIX x-clear, Operational Manual (fév. 2026)](https://www.six-group.com/dam/download/securities-services/clearing/download-center/operational/clr-xcl-510-en.pdf)
- Les ETF sans routage d'ordres sont réglables via le nouveau lien direct Clearstream–SIX SIS (2026) — [Clearstream, Direct link to SIX SIS](https://www.clearstream.com/clearstream-en/res-library/market-coverage/settlement-services-direct-link-to-six-sis-switzerland-4927274)

**Diagrammes**

```
ETF — MARCHÉ PRIMAIRE (ETF UCITS irlandais, modèle ICSD)
AP ──demande de création/rachat──> Portal Operator ──> Administrateur / TA (cut-off J, VNI J)
                                                          │
       panier titres ou cash (T+2) ──> Dépositaire du fonds (garde)
                                                          │
Registraire : certificat global au nom de « CD Nominees » (dépositaire commun)
   mark-up / mark-down du certificat global <──> Euroclear Bank (CSD émetteur, ICSD)
TA : livre les parts depuis son compte Euroclear Bank ──> compte de l'AP (Euroclear Bank ou Clearstream)
=> Intermédiaires (hors fonds) : AP, Portal Operator, ICSD (+ dépositaire commun) = 3–4
=> Prestataires du fonds : Administrateur/TA, Registraire (souvent le même [H]), Dépositaire, ManCo

ETF — MARCHÉ SECONDAIRE (ETF irlandais coté sur SIX Swiss Exchange)
Investisseur ──> Banque ──> Courtier membre de SIX [H : parfois la banque elle-même]
  ──> SIX Swiss Exchange (exécution) ──> CCP (SIX x-clear | LCH | Cboe Clear Europe)
  ──> SIX SIS (règlement local, SECOM) ──lien [H]──> ICSD émetteur (Euroclear Bank / CBL)
  ──> Dépositaire commun / CD Nominees ──> Registraire du fonds
=> Intermédiaires de chaîne : 6–7 | mais un seul porteur inscrit au registre (CD Nominees)
```

### Inferences
- Pour un ETF, le registre du fonds est **dégénéré** : il ne contient qu'un seul porteur, et la vérité opérationnelle est dans les livres ICSD et CSD. La tokenisation porte donc moins sur l'émission (déjà centralisée par le certificat global) que sur la **fragmentation du règlement secondaire** et les **taux d'échec** (17 %) `[HYPOTHÈSE]`.
- Le **lien entre SIX SIS et l'ICSD émetteur** pour les ETF irlandais cotés à Zurich est probable (SIX SIS est lui-même un ICSD), mais son mode exact (lien direct, réalignement, compte chez Euroclear Bank) n'est pas sourcé ici `[HYPOTHÈSE]`.
- Les ETF suisses de droit suisse (ZKB, Raiffeisen) suivent le modèle suisse : banque dépositaire puis SIX SIS, avec un « clearing via SIX SIS AG » dans le prospectus (cf. §1). Leur chaîne primaire est donc nationale et plus courte que celle des ETF irlandais `[HYPOTHÈSE de synthèse]`.

### Gaps
- Je n'ai trouvé aucun chiffre sur les **taux d'échec ETF propres à SIX** ou à la Suisse.
- Le **nombre d'AP actifs par ETF** en Europe et la part en nature vs en espèces ne sont pas disponibles publiquement dans les sources consultées.
- Le contenu du livre blanc Euroclear sur les ETF et du guide de règlement ETF de Clearstream (document de déc. 2021) n'a pas pu être lu en entier.

---

## 5. Délais : cut-off, VNI, avis d'opéré, règlement espèces et parts (fonds D+2/D+3, ETF T+2 puis T+1), et étapes encore manuelles (fax, e-mail)

### Takeaway
**Suisse** : ordre à J avant le cut-off de la banque dépositaire, VNI calculée **J+1** (forward pricing), valeur **au plus J+3** dans l'exemple cité. **Luxembourg** : cut-off du RTA (exemple 15h30 CET), VNI J, règlement **≤ 3 jours ouvrés** (jusqu'à 5 pour les rachats). **ETF** : T+2 aujourd'hui, **T+1 le 11 octobre 2027** dans l'UE, au Royaume-Uni **et en Suisse/Liechtenstein**, marché primaire compris côté cash. Les transferts entre plateformes (ré-immatriculation) prennent encore **6 à 8 semaines, parfois plus de 45 jours ouvrés** (données britanniques). Fax et e-mail persistent : **67 % des entreprises interrogées utilisaient encore un fax** (enquête de 2022).

### Cited Findings

**Fonds suisses**
- Les demandes de souscription et de rachat sont acceptées le **jour de passation de l'ordre**, jusqu'à l'heure fixée au prospectus. Le prix est déterminé au plus tôt le **jour bancaire suivant** (jour d'évaluation), en **forward pricing**. Le paiement intervient **au plus tard 3 jours bancaires** après le jour de l'ordre — [prospectus PostFinance Fonds 4 (2021)](https://www.swissfunddata.ch/sfdpub/docs/fpd-8271_04-20210617-de.pdf) ; voir aussi [GKB (CH) fonds ombrelle (2025)](https://www.swissfunddata.ch/sfdpub/docs/fpd-70700-20250623-de.pdf) et [BLKB Selection (CH) (2025)](https://swissfunddata.ch/sfdpub/docs/fpd-200342-20250214-de.pdf) (même structure J / J+1 / valeur, termes exacts non vérifiés fonds par fonds)
- Les demandes sont reçues par la banque dépositaire jusqu'à l'heure limite. Les parts sont attribuées à réception du prix d'émission — [prospectus ZKB Gold ETF (2024)](https://www.swissfunddata.ch/sfdpub/docs/fpd-70501-20241218-de.pdf)

**Fonds luxembourgeois**
- Exemple de prospectus : ordres reçus par le **Registrar and Transfer Agent avant 15h30 CET** un jour de valorisation, traités à la VNI de ce jour ; après 15h30, à la VNI suivante. La société de gestion vise un **règlement dans les 3 jours ouvrés** (sans dépasser **5 jours ouvrés**) après réception des instructions écrites. Le paiement des souscriptions et rachats intervient normalement **dans les trois jours ouvrés** — [prospectus Fidelity Funds SICAV](https://www.fidelityinternational.com/legal/documents/FF/FI-en/pr.ff.en.FI.pdf) ; [prospectus State Street GA Luxembourg SICAV (2024)](https://www.ssga.com/library-content/products/fund-docs/mf/emea/prospectus/prospectus-emea-en_gb-state-street-global-advisors-luxembourg-sicav-22052024090425.pdf) (attribution exacte par prospectus non vérifiée)
- Le RTA de la SICAV doit mettre en place des procédures garantissant que les ordres sont reçus **avant le cut-off** du jour de valorisation (contrôle anti market-timing / late trading) — mêmes prospectus

**ETF et T+1**
- Les ETF européens se règlent aujourd'hui à **T+2**. L'UE, avec le Royaume-Uni et la Suisse, passe à **T+1** — [ETF Stream, ETF settlement and its importance](https://www.etfstream.com/education/advanced/etf-settlement-and-its-importance)
- **La Suisse et le Liechtenstein passeront à T+1 le 11 octobre 2027**, de façon coordonnée avec l'UE et le Royaume-Uni. SIX demandera l'adaptation du règlement de SIX Swiss Exchange — [The TRADE, Switzerland confirms October 2027 move to T+1](https://www.thetradenews.com/switzerland-confirms-october-2027-move-to-t1/) ; [SIX, communiqué du 12 sept. 2025](https://www.six-group.com/en/newsroom/media-releases/2025/20250912-settlement-cycle-six-swissstpc.html) ; [swissSPTC, rapport final de recommandations T+1 (14 nov. 2025)](https://www.six-group.com/dam/download/sites/swiss-sptc/t1/swiss-sptc-tf-t1-recommendations-20251114-final-report.pdf) ; [AMAS, T+1 settlement](https://www.am-switzerland.ch/en/topics/regulation/t-1-settlement)
- Euroclear identifie des défis propres aux ETF pour le passage à T+1, notamment le décalage entre primaire et secondaire — [Euroclear, The challenges of T+1 for ETFs](https://www.euroclear.com/newsandinsights/en/Format/Articles/the-challenges-of-t1-for-etfs.html) ; [Clearstream, Journey to T+1](https://www.clearstream.com/clearstream-en/securities-services/custody-and-investor-solutions/journey-to-t1)

**Étapes manuelles**
- Selon une enquête mondiale Funds Europe × Calastone auprès de **plus de 600 professionnels des fonds**, **67 % des entreprises utilisent encore un fax** (2022). L'article relève le paradoxe avec un taux STP de 93 % chez les TA LU/IE — [Funds Europe, Dealing with the 'fax offenders' (sept. 2022)](https://www.funds-europe.com/september-2022/technology-dealing-with-fax-offenders)
- En Suède, une grande partie de l'administration des ordres sur fonds se fait **encore par fax et e-mail**, avec des coûts administratifs élevés et des risques opérationnels (Euroclear Sweden, page produit) — [Euroclear Sweden, digital fondorderhantering](https://www.euroclear.com/sweden/en/banker/digital-fondorderhantering.html)
- **Transferts (ré-immatriculation) – Royaume-Uni** : un transfert en nature simple prend souvent **six semaines**, en moyenne **6 à 8 semaines**, parfois **plus de 45 jours ouvrés**, et les cas complexes **six mois ou plus**. Le processus reste **manuel et en partie papier**. Trois dispositifs automatisés existent : **Calastone, Altus, Origo** — [Quilter, Re-registration of assets](https://www.quilter.com/help-and-support/platform-support/platform-articles/re-registration-of-assets/) ; [Fidelity Adviser Solutions, Re-registration and cash transfers compared](https://adviserservices.fidelity.co.uk/media/fnw/guides/fas-rereg-transfers-compared-05.pdf) ; [Willis Owen, Re-registration](https://www.willisowen.co.uk/help/reregistration-of-assets) (attribution exacte de chaque chiffre non vérifiée)

### Inferences
- **Calendrier type** `[HYPOTHÈSE de synthèse à partir des prospectus cités ; les heures exactes varient par fonds]` :

| Étape | Fonds CH (contractuel) | Fonds LU (SICAV UCITS) | Fonds IE (ICAV/plc UCITS) | ETF (secondaire) |
|---|---|---|---|---|
| Cut-off | J, heure fixée par la banque dépositaire (souvent le matin [H]) ; la banque distributrice applique un cut-off interne plus tôt [H] | J, heure du RTA (ex. 15h30 CET) ; cut-off plus tôt chez le hub/distributeur [H] | J, heure de l'administrateur/TA [H] | Continu (heures de bourse) |
| VNI | J+1 (forward pricing, sur les cours de J [H]) | J (ou J+1 selon les fonds [H]) | J ou J+1 [H] | iNAV intrajournalière ; VNI officielle J |
| Avis d'opéré | J+1 / J+2 [H] | J+1 [H] | J+1 [H] | J (confirmation d'exécution) |
| Règlement espèces / parts | ≤ J+3 (ex. PostFinance), souvent J+2 [H] | ≤ J+3 (rachats ≤ J+5) | J+2 / J+3 [H] | T+2 → **T+1 au 11/10/2027** |
| Transfert entre dépositaires | Jours à semaines [H] | Semaines (UK : 6–8 semaines) | idem | T+2 (livraison franco) [H] |

- Le cycle « fonds » (J+2/J+3) **n'est pas aligné** sur le passage à T+1 des titres, et une banque qui finance un achat de fonds par la vente d'un ETF ou d'une action supportera un **décalage de trésorerie de 1 à 2 jours**. C'est un argument pour un règlement atomique (DvP sur registre partagé) `[HYPOTHÈSE]`.
- Le paradoxe « 93 % STP mais 67 % ont encore un fax » s'explique : le taux STP EFAMA-Swift mesure les **ordres reçus par les TA LU/IE** (bout de chaîne). Les maillons amont (EAM → banque, banque → hub) et les **opérations non standard** (transferts, corrections, rachats en nature, KYC) restent manuels `[HYPOTHÈSE]`.

### Gaps
- Je n'ai trouvé **aucune statistique publique suisse** sur la part d'ordres sur fonds passés par fax ou e-mail (ni AMAS, ni SIX, ni l'ASB).
- Les heures de cut-off typiques des banques dépositaires suisses ne sont pas consolidées publiquement : il faudrait un échantillon de prospectus Swiss Fund Data.
- Les délais de transfert de portefeuille de fonds en Suisse (changement de banque) ne sont pas documentés publiquement ; seules des données britanniques ont été trouvées.
- Je n'ai pas trouvé de position AMAS sur l'alignement du **cycle de règlement des fonds** (et pas seulement des ETF) sur T+1 ; la page AMAS existe mais n'a pas pu être lue.

---

## 6. Points de réconciliation, taux de STP, échecs et coûts publiés

### Takeaway
Le taux d'automatisation des ordres **reçus par les TA LU/IE** atteignait **93,2 % fin 2020** (LU 91,2 %, IE 95,9 %). Il restait **8,8 % d'ordres manuels au Luxembourg** et 4,1 % en Irlande, et **seuls 33,6 % des ordres irlandais** utilisaient la norme ISO. Il n'existe **aucune donnée publique plus récente ni suisse**. Les chiffrages de coûts disponibles émanent surtout de **fournisseurs**, donc biaisés : **5,28 £ d'impact par ordre** passé du manuel à l'automatisé (Forrester pour Calastone), **1,3 Md€/an** de coûts de mise en marché des fonds réductibles de 70 % (Deloitte, 2016), économies de **1,9 Md£** (Calastone, DLT) et **135 Md$** (Calastone, 2025). Le seul chiffre de régulateur est l'échec de règlement ETF (ESMA : 17,32 %). Chaque frontière entre deux livres implique une réconciliation de positions, une réconciliation espèces et un rapprochement de confirmation. Avec 3 à 7 livres par chaîne, on compte **environ 6 à 18 contrôles de réconciliation par cycle d'ordre** (modèle).

### Cited Findings

**Taux d'automatisation (EFAMA – Swift)**
- EFAMA et Swift publient **deux fois par an** l'évolution des taux de standardisation et d'automatisation des ordres sur fonds **reçus par les TA au Luxembourg et en Irlande** — [EFAMA, Fund processing standardisation](https://www.efama.org/policy/fund-processing-standardisation)
- **T4 2020** : automatisation totale **93,2 %** (91,8 % au T4 2019) ; TA luxembourgeois **91,2 %** (90,2 %) ; TA irlandais **95,9 %** (94,6 %). Taux d'**automatisation ISO** au Luxembourg : 78,4 % (76,6 %), **ordres manuels 8,8 %** (9,8 %). En Irlande : **ISO 33,6 %** (36,6 %), manuel **4,1 %** (5,4 %), avec une hausse des transferts de fichiers propriétaires. Manuel total : **6,8 %** (8,2 %). **29 TA** participants, couvrant **80 % du marché irlandais et 75 % du marché luxembourgeois** — [EFAMA, Funds processing automation rises to new heights (2021)](https://www.efama.org/index.php/newsroom/news/funds-processing-automation-rises-new-heights-new-joint-report-efama-and-swift-shows) ; [EFAMA, Joint EFAMA SWIFT Standardisation Survey 2020 Annual Report](https://www.efama.org/newsroom/news/joint-efama-swift-standardisation-survey-2020-annual-report)
- **Fin juin 2016** : automatisation de **84,4 %** sur **16,6 millions d'ordres** suivis chez les TA (85,4 % fin 2015). Les messages ISO passaient d'un peu plus de 51 % à exactement 50 % (fait ancien) — [Funds Europe, Small fall in Lux/Ireland fund automation rates](http://www.funds-europe.com/news/small-fall-in-luxireland-fund-automation-rates)
- Swift a annoncé un taux d'automatisation des ordres transfrontaliers de « près de 87 % » (date non vérifiée, vers 2017-2018) — [Swift, Industry automation rates for cross-border fund orders rise to nearly 87%](https://www.swift.com/news-events/press-releases/industry-automation-rates-cross-border-fund-orders-rise-nearly-87)

**Coûts publiés (à lire avec le biais de la source)**
- **Forrester pour Calastone** (Total Economic Impact, **234 organisations** interrogées) : **5,28 £ d'impact par ordre** passé du traitement manuel au réseau Calastone, soit **458 624 974 £** sur six ans (étude commandée par le fournisseur, date non vérifiée) — [Calastone, Total Economic Impact report](https://www2.calastone.com/totaleconomicimpactreport)
- **Deloitte** : mettre des fonds sur le marché coûte à l'industrie **1,3 Md€ par an**, réductibles de **70 % (≈ 1 Md€)** (rapporté en 2016) — [Funds Europe, Luxembourg report 2016 – Distribution: the central question](https://www.funds-europe.com/luxembourg-report-2016/17775-distribution-the-central-question)
- **Calastone** : la DLT pourrait éliminer **jusqu'à 70 % des coûts de la chaîne de distribution**, soit **plus de 1,9 Md£** d'économies sur quelques marchés clés (prévision de vers 2019) — [Calastone, forecasts over £1.9bn savings](https://www.calastone.com/news/calastone-forecasts-over-1-9bn-savings-for-the-mutual-funds-market-in-move-to-blockchain/)
- **Calastone (2025)**, étude auprès de **26 gestionnaires mondiaux** : la tokenisation réduirait les coûts de **23 %**, soit plus de **135 Md$** pour l'industrie et jusqu'à **7,9 M$ d'amélioration du P&L par fonds**. Elle raccourcirait aussi de trois semaines le lancement d'un fonds (sur 12) — [Calastone, Decoding the Economics of Tokenisation](https://www.calastone.com/insights/white-paper-decoding-the-economics-of-tokenisation-transforming-cost-dynamics-in-asset-management/) ; [Funds Europe, Tokenisation could save asset managers $135bn](https://funds-europe.com/tokenisation-could-save-asset-managers-135bn-calastone/)
- Calastone a lancé en **avril 2025** une solution de **« Tokenised Distribution »** — [Calastone, communiqué de lancement](https://www.calastone.com/news/calastone-launches-tokenised-distribution-solution-to-unlock-the-future-of-fund-distribution/)
- **Clearstream Digital TA** : jusqu'à **50 % de réduction des coûts opérationnels** chez certains clients, grâce à un registre d'investisseurs auditable sur blockchain qui réduit la réconciliation — [Clearstream, Digital Transfer Agent](https://www.clearstream.com/clearstream-en/funds-services/asset-managers-and-transfer-agents/digital/fundsdlt-digital-transfer-agent)
- **Échecs de règlement ETF** : **17,32 %** des instructions (moyenne mensuelle EEE, juin 2023 – mai 2024) — [ESMA (juin 2025)](https://www.esma.europa.eu/sites/default/files/2025-06/ESMA74_1_1.PDF)

**Messages échangés**
- ISO 20022, domaine « setr » : **setr.010** ordre de souscription, **setr.012** confirmation de souscription, **setr.004** ordre de rachat, **setr.006** confirmation de rachat, **setr.003 / setr.009** confirmations groupées (bulk), **setr.057** rapport de statut de confirmation. L'ordre de rachat est envoyé par la partie instructrice (gérant ou mandataire) à la partie exécutante (**agent de transfert**) — [iotafinance, ISO 20022 setr](https://www.iotafinance.com/en/SWIFT-ISO20022-Business-area-setr-Securities-Trade.html) ; [iotafinance, setr.057](http://www.iotafinance.com/en/SWIFT-ISO20022-Message-setr-057-001-Order-Confirmation-Status-Report.html)

### Inferences
- **Messages par étape** `[HYPOTHÈSE : en dehors des setr cités ci-dessus, connaissance métier non re-sourcée dans cette session]` :

| Étape | ISO 20022 | ISO 15022 (encore très utilisé) | Hors standard |
|---|---|---|---|
| Ordre | setr.010 / setr.004 (switch : setr.013) | MT502 | Fax, e-mail, fichiers propriétaires (cf. IE : hausse des fichiers propriétaires) |
| Accusé / statut | setr.016 | MT509 | Appel téléphonique |
| Confirmation (avis d'opéré) | setr.012 / setr.006 | MT515 | PDF |
| Instruction de règlement parts | sese.023 (hubs) | MT540–543 | — |
| Confirmation de règlement | sese.025 | MT544–547, MT548 (statut) | — |
| Paiement espèces | pacs.008 / pacs.009 | MT103 / MT202 | — |
| Relevé de positions (réconciliation) | semt.002 / semt.003 | MT535 / MT536 | Fichiers Excel |
| Transfert de portefeuille | sese.001 / sese.002 et suivants | MT540/542 franco | Formulaire papier |

- **Modèle de réconciliation par ordre** `[HYPOTHÈSE de modélisation, à valider avec les praticiens]`. Pour une chaîne de N livres, chaque frontière bilatérale génère : (a) un rapprochement ordre ↔ confirmation (prix, parts, frais), (b) un rapprochement des espèces (montant, date de valeur), (c) une réconciliation des positions (quotidienne ou mensuelle). On y ajoute (d) une réconciliation mensuelle des rétrocessions sur le maillon distributeur–société de gestion.

| Scénario | Livres (N) | Frontières (N–1) | Contrôles par ordre (3 × (N–1)) | + rétrocessions | Total indicatif |
|---|---|---|---|---|---|
| CH-1 intégré | 2–3 | 1–2 | 3–6 | 0–1 (intragroupe) | **3–7** |
| CH-2 banque tierce + SIX SIS | 3–4 | 2–3 | 6–9 | 1 | **7–10** |
| CH-3 Clearstream / UBS / EAM | 6–7 | 5–6 | 15–18 | 1–2 | **16–20** |
| LU/IE-2 typique | 3–4 | 2–3 | 6–9 | 1 | **7–10** |
| LU/IE-3 nominees | 6–7 | 5–6 | 15–18 | 1–2 | **16–20** |
| Registre partagé (cible FundChain) | 1 | 0 (lecture commune) | 0–1 (contrôle de cohérence) | 0 (calcul sur le registre) | **≈1** |

- **Lieux des « breaks » typiques** `[HYPOTHÈSE]` : (1) ordre reçu après le cut-off du TA alors qu'il était dans les temps chez la banque (late trading / mauvaise VNI) ; (2) écart sur les parts à cause de l'arrondi des décimales, des frais d'entrée ou des swing/dilution levies ; (3) espèces arrivées en retard (correspondants, devises), ce qui pousse le TA à annuler ou différer l'ordre ; (4) positions omnibus non alignées entre le registre du TA et le livre de la plateforme après des opérations sur titres (distributions, fusions de compartiments) ; (5) rétrocessions calculées sur des bases de positions différentes (date de transaction vs date de règlement, moyenne vs fin de mois, cf. ISITC).
- **Ordre de grandeur du coût** `[HYPOTHÈSE]` : avec ~7 % d'ordres manuels chez les TA LU/IE (2020) et 5,28 £ de surcoût par ordre manuel (Forrester), le surcoût direct est faible par ordre. Le **gros du coût est structurel** : équipes de réconciliation à chaque niveau, gestion des échecs, rétrocessions, KYC en cascade. C'est ce que visent les chiffrages de 1,3 Md€ (Deloitte), 23 % (Calastone 2025) et 50 % (Clearstream DTA). Pour le pitch, mieux vaut s'appuyer sur la **suppression de livres** que sur le taux STP, déjà élevé en bout de chaîne.

### Gaps
- Je n'ai trouvé **aucun rapport EFAMA-Swift postérieur à 2020** dans les résultats. La série a peut-être été arrêtée ou n'est plus publique : à vérifier sur efama.org.
- Je n'ai trouvé **aucune donnée STP pour la Suisse** (fonds suisses) : ni SIX, ni AMAS, ni l'ASB ne publient de taux.
- Un chiffre de « **330 M€ de coûts annuels d'erreurs au Luxembourg** » attribué à une enquête Deloitte est apparu dans un résumé de recherche lié à Calastone. Je n'ai pu identifier ni la page exacte ni l'étude primaire : **à ne pas utiliser sans vérification**.
- Je n'ai trouvé aucune étude publique d'Oliver Wyman, PwC ou Broadridge sur le **coût par ordre** ou le **coût de réconciliation** en distribution de fonds (le budget de recherche s'est épuisé avant).
- Aucune donnée publique sur les **taux de breaks** ou d'intervention manuelle par étape (hors ETF/ESMA).

---

## 7. Tableau comparatif CH / LU / IE (formes juridiques, modèle TA/registre, hubs, CSD, nombre d'intermédiaires, frictions)

### Takeaway
La Suisse est le seul des trois marchés où **la banque dépositaire, et non un TA, émet et rachète les parts**, et où les parts de fonds classiques se règlent **comme des titres dans SIX SIS**. Le Luxembourg et l'Irlande reposent sur un **registre tenu par un TA ou administrateur agréé** et atteint via des hubs (Vestima, FundSettle, Allfunds, Calastone). Les ETF irlandais, qui dominent le marché européen, reposent sur le **modèle ICSD** (certificat global, Euroclear Bank / CBL). Les deux points d'entrée possibles pour FundChain sont donc **la banque dépositaire suisse** et **le TA LU/IE**.

### Cited Findings
- Fonds domiciliés en Europe à fin 2024 : **Luxembourg n° 1**, **Irlande 27 %**, Royaume-Uni 10 %, France 6 %, **Suisse 5 %**. Fonds UCITS actions : **Irlande 29 %**, Luxembourg 27 %, Royaume-Uni 14 %, Suède et **Suisse 6 %** chacune — [EFAMA, Fact Book 2025](https://www.efama.org/sites/default/files/fact-book-2025_lowres.pdf) ; voir aussi [J.P. Morgan, A Tale of Two Domiciles](https://www.jpmorgan.com/insights/securities-services/fund-services/a-tale-of-two-domiciles)
- Marché suisse des fonds : **1 740 Md CHF à fin 2025 (+10 %)** — [AMAS, communiqués de presse](https://www.am-switzerland.ch/en/media-positions/media-corner/press-releases). Le périmètre exact (fonds suisses seuls ou suisses + étrangers autorisés à la distribution) n'a pas été vérifié.
- Formes suisses : fonds contractuel (le plus courant), SICAV, SCPC (société en commandite de placements collectifs), SICAF, L-QIF — [Chambers, Switzerland overview](https://chambers.com/content/item/6915) ; [Lexology, Fund Management in Switzerland](https://www.lexology.com/library/detail.aspx?g=518c7d70-bf66-447b-a081-71f879b4791a)
- Les autres faits du tableau sont sourcés aux sections 1 à 6.

### Inferences
**Tableau comparatif** (les cellules marquées `[H]` sont des hypothèses ; les autres renvoient aux sources des §1 à 6)

| Critère | Suisse (CH) | Luxembourg (LU) | Irlande (IE) |
|---|---|---|---|
| Formes juridiques principales | Fonds contractuel (FCP) dominant ; SICAV ; SCPC ; SICAF ; L-QIF | SICAV, FCP, SICAF (UCITS Partie I, Partie II, SIF, RAIF) [H pour la liste détaillée] | ICAV, plc (société d'investissement), unit trust, CCF [H pour la liste détaillée] |
| Régulateur | FINMA | CSSF | Banque centrale d'Irlande |
| Qui traite l'ordre | **Banque dépositaire** (émission/rachat, art. 73 LPCC) ; Fondsleitung pour la VNI | **RTA** (fonction de registraire, CSSF 22/811), nommé par le fonds ou la ManCo, autorisation CSSF | **Administrateur = TA** (en général), agréé par la Banque centrale |
| Registre | Pas de registre nominatif TA pour le FCP [H] ; propriété via SIX SIS puis la banque | Registre des porteurs tenu par le RTA ; nominees/plateformes inscrits | Registre tenu par le TA/administrateur ; ETF : un seul porteur (CD Nominees) |
| Principaux TA | n/a (banques dépositaires : UBS, ZKB, banques cantonales, PostFinance… [H]) | State Street/IFDS, CACEIS (ex-RBC), BNP Paribas | Administrateurs mondiaux (State Street, BNY, Northern Trust, Citi… [H]) |
| Hubs / routage | Envoi direct à la banque dépositaire ; SIX + Euroclear FundSettle ; Vestima (via UBS AG) ; Allfunds [H] | Vestima, FundSettle, Allfunds, Calastone, Swift | Idem LU [H] ; ETF : Portal Operator puis administrateur |
| CSD des parts | **SIX SIS** (CSD + ICSD, SECOM) | Pas de CSD pour les fonds classiques (registre TA) ; parts dans les livres des hubs (Clearstream/Euroclear) [H] | Idem LU pour les fonds classiques [H] ; **ETF : Euroclear Bank / CBL (modèle ICSD)** |
| VNI / règlement fonds | J+1 forward ; valeur ≤ J+3 | VNI J (ex.) ; règlement ≤ J+3 (≤ J+5 rachats) | J/J+1 ; T+2 cash pour le primaire ETF |
| ETF secondaire | SIX Swiss Exchange → CCP (x-clear/LCH/Cboe) → SIX SIS ; T+2 → **T+1 le 11/10/2027** | Bourse de Luxembourg marginale [H] ; ICSD | Cotation multiple (LSE, Xetra, SIX, Euronext…) ; ICSD ; T+1 le 11/10/2027 |
| Automatisation connue | Aucune donnée publique | 91,2 % (T4 2020), 8,8 % manuel | 95,9 % (T4 2020), 4,1 % manuel ; ISO seulement 33,6 % |
| Intermédiaires de chaîne (min / typ. / max) | **1 / 2–3 / 6** | **0 / 2–3 / 5–6** | **0 / 2–3 / 5–6** ; ETF secondaire 6–7 |
| Total d'entités (avec prestataires du fonds) | 2–4 / 4–5 / 8 | 3 / 5–6 / 8–9 | 3 / 5–6 / 8–9 |
| Frictions spécifiques | Double monde ordre (banque dépositaire) / titres (SIX SIS) ; investisseurs étrangers via lien indirect UBS ; ordres par e-mail ou fax probables (non mesurés) [H] | Omnibus et nominees en cascade ; RTA comme goulot de cut-off ; rétrocessions ; ~9 % manuel (2020) | Faible adoption ISO (fichiers propriétaires) ; fragmentation ETF (17 % d'échecs EEE) ; décalage primaire / secondaire ETF à T+1 |

**Position (pour la synthèse)** : le terrain le plus simple pour un premier pilote FundChain est le **fonds contractuel suisse distribué par une banque tierce** (scénario CH-2). La chaîne est courte (banque, SIX SIS, banque dépositaire), un seul acteur exécute l'ordre (la banque dépositaire) et il n'y a pas de registre TA à faire migrer. Le gain démontrable est la fusion du circuit d'ordre et du circuit de règlement dans SIX SIS. Le **LU/IE via hub** offre un gain plus élevé (davantage de livres à supprimer), mais il se heurte à des acteurs installés (Clearstream, Allfunds, Calastone), qui proposent déjà leurs propres offres DLT (Clearstream DTA, Calastone Tokenised Distribution) `[HYPOTHÈSE de positionnement, à challenger en phase 4]`.

### Gaps
- Je n'ai pas trouvé de **statistiques de distribution en Suisse** (part des fonds étrangers LU/IE dans les encours vendus en Suisse vs fonds suisses) au-delà du total AMAS.
- La liste des **principaux administrateurs/TA irlandais** et leurs parts de marché ne figurent pas dans les sources trouvées.
- Je n'ai pas de confirmation sourcée du mode de détention des fonds LU/IE classiques dans les hubs (compte du hub au registre du TA) ; la logique est connue mais non re-sourcée ici `[HYPOTHÈSE]`.
- Les publications ALFI et Irish Funds sur les processus opérationnels n'ont pas été trouvées dans les résultats, et le budget de recherche s'est épuisé avant.
