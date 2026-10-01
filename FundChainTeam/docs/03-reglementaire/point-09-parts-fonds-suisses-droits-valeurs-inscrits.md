# Point 9 : parts de fonds suisses (FCP, L-QIF) en droits-valeurs inscrits

*Agent `juriste-reglementaire`, phase 2. Traite uniquement le point 9 de la liste priorisée (rapport, §7.1). État au 1er octobre 2026.*

> **Méthode et limites.** Environ 40 recherches web. **Aucun texte légal n'a pu être lu en entier.** Le proxy a refusé l'accès (403 au CONNECT) à fedlex.admin.ch, fedlex.data.admin.ch, droit-bilingue.ch, lawbrary.ch, swissrights.ch, lexfind.ch et blockchainfederation.ch. Chaque article cité porte donc un statut :
> - **[Extrait]** : le libellé (ou une paraphrase proche) vient d'un extrait de moteur de recherche. C'est fiable sur le sens, pas sur la lettre.
> - **[Secondaire]** : l'information vient d'un cabinet, de la presse ou d'un prestataire.
> - **[Connaissance]** : citation de mémoire, non lue en session. **À relire sur Fedlex avant tout usage externe.**
>
> Ce qui n'est pas sourcé est marqué [HYPOTHÈSE], abrégé [H] dans les tableaux.

---

## 1. Verdict

1. **Go juridique sous conditions** pour « Suisse × L-QIF contractuel, parts émises en droits-valeurs inscrits ».
2. Le droit le permet : l'art. 973d CO vaut pour tout droit, aucune règle LPCC contraire n'a été trouvée, et le L-QIF se lance sans approbation FINMA.
3. Le risque n'est pas l'interdiction. Il tient à la conception du registre (art. 973d al. 2 ch. 1 et 4), à l'absence de tout précédent public, et au risque que les banques ramènent les parts chez SIX SIS (art. 6 LTI), ce qui viderait le « registre unique ».
4. Je bascule vers le Luxembourg dans trois cas : aucun couple direction de fonds + banque dépositaire ne s'engage, l'avis de droit rejette le schéma de registre, ou les banques exigent SIX SIS dès le départ.

| # | Question | Réponse | Solidité | Source clé |
|---|---|---|---|---|
| 1 | Parts de FCP / L-QIF en droits-valeurs inscrits ? | **Oui en principe.** La part est une créance contre la direction de fonds, donc un droit inscriptible. Aucune interdiction LPCC trouvée. SICAV possible ; SCPC sans intérêt | Moyenne : doctrine (MME), aucun texte FINMA, aucun précédent | [MME](https://www.mme.ch/en/magazine/articles/tokenization-of-investment-fund-units) ; art. 973d CO [Extrait] |
| 2 | Exigences du registre | 4 exigences (art. 973d al. 2 ch. 1 à 4) + fonctionnement garanti par le débiteur (al. 3) + information et responsabilité (art. 973i). Les ch. 1 (pouvoir de disposer du créancier) et 4 (vérification sans tiers) structurent l'architecture | Bonne sur le sens, lettre à relire | [Pestalozzi](https://pestalozzilaw.com/de/insights/aktuell/legal-insights/registerwertrechte-einfuhrung-von-dlt-aktien-der-schweiz/) ; [droit-bilingue](https://www.droit-bilingue.ch/fr-de/2/22/220-973d-1383.html) |
| 3 | Contrat de fonds et approbation | Clauses : forme des parts, registre, convention d'inscription. **L-QIF : pas d'approbation FINMA**, annonce au DFF dans les 14 jours. FCP classique : approbation FINMA (art. 15 et 27 LPCC) | Bonne | [CapLaw](https://caplaw.ch/2024/l-qif-new-innovative-swiss-fund-structure-in-practice/) ; [CDBF](https://cdbf.ch/1077/) |
| 4 | Banque dépositaire et opérateur du registre | La banque dépositaire émet et rachète : elle « crée » les parts sur le registre. Le **débiteur responsable du registre est la direction de fonds**. La plateforme est un opérateur technique, **sans licence** tant qu'elle ne détient ni clés de créanciers ni fonds, et n'organise pas de négociation multilatérale | Moyenne : [H] juridique à confirmer | [FINMA](https://www.finma.ch/en/authorisation/asset-management/custodian-banks-of-collective-investment-schemes/) ; [Lexology](https://www.lexology.com/library/detail.aspx?g=c0a1500c-4912-4093-bc49-426f1c67ae18) |
| 5 | Coexistence avec SIX SIS / LTI | **Oui.** Un droit-valeur inscrit transféré à un dépositaire et crédité en compte devient un titre intermédié, et il est immobilisé dans le registre. **Risque de double registre** si la part SIX SIS devient majoritaire | Bonne sur le principe | [SIX SIS, CG](https://www.six-group.com/dam/download/securities-services/custody-and-settlement/info-center/clients/gtc/mg-general-agb-220201.pdf) ; LTI art. 6 [Extrait] |
| 6 | Précédents | **Aucun fonds de droit suisse (FCP, SICAV, L-QIF) en droits-valeurs inscrits n'a été trouvé.** Les cas voisins concernent des actions, des produits structurés, des fonds étrangers ou des pilotes | Constat de recherche | §2.6 |
| 7 | Verdict | **Go sous conditions** (7 conditions, §3) ; plan B : Luxembourg | Position | — |

---

## 2. Analyse par question

### 2.1 Base légale

**Le principe.** Un droit-valeur inscrit est un droit inscrit dans un registre de droits-valeurs en vertu d'une convention entre les parties. Il ne peut être exercé et transféré que par ce registre (art. 973d al. 1 CO) [Extrait : [Lexology DE](https://www.lexology.com/library/detail.aspx?g=9a6963d3-6ed1-4cd4-ba1a-ef6ab1c49240) ; [hnblaw](https://www.hnblaw.ch/know-how/ledger-based-securities-swiss-code-of-obligations)]. Le régime est en vigueur depuis le 1er février 2021 ([Library of Congress](https://www.loc.gov/item/global-legal-monitor/2021-03-03/switzerland-new-amending-law-adapts-several-acts-to-developments-in-distributed-ledger-technology/)). Il est neutre sur la technologie et sur la classe d'actifs ([Aurum Law](https://aurum.law/newsroom/Guide-to-Swiss-Ledger-Based-Securities-Tokenised-Stocks-Debt-and-RWAs)).

**Application aux parts de fonds.**
- Pour le cabinet MME, la tokenisation vise aussi des droits non incorporables, « y compris des parts de placements collectifs ». La LPCC est « sans pertinence pour le processus de tokenisation » : elle s'applique au fonds, que ses parts soient tokenisées ou non ([MME](https://www.mme.ch/en/magazine/articles/tokenization-of-investment-fund-units) [Secondaire]).
- Dans un fonds contractuel, l'investisseur acquiert, au prorata de ses parts, une **créance contre la direction de fonds** portant sur la fortune et le revenu du fonds (LPCC, art. 25 [Extrait via [lexfind](https://www.lexfind.ch/tolv/141820/de), numéro d'article à vérifier]). Une créance est le cas d'école d'un droit inscriptible. **Le « débiteur » au sens de l'art. 973d est donc la direction de fonds** [HYPOTHÈSE juridique raisonnée].
- Aujourd'hui, les contrats de fonds prévoient que les parts « ne sont pas incorporées dans des titres mais tenues en compte » et que l'investisseur ne peut pas exiger de certificat (par ex. [AKB Portfoliofonds](https://www.swissfunddata.ch/sfdpub/docs/fpd-70534-20241101-de.pdf), [BKB Sustainable](https://swissfunddata.ch/sfdpub/docs/fpd-12312_01_03-20250305-de.pdf) [Extrait]). **C'est une clause contractuelle, pas une interdiction légale.** Je n'ai trouvé aucune règle LPCC ou OPCC qui impose cette forme [HYPOTHÈSE : absence non prouvée, à relire].
- Le message du Conseil fédéral (FF 2020 223, objet 19.074) mentionne que les applications DLT touchent notamment le droit des placements collectifs ([message, DE](https://www.newsd.admin.ch/newsd/message/attachments/59301.pdf) [Extrait]). Aucun passage propre aux parts de fonds n'a été trouvé. Je ne sais pas si la loi TRD a modifié la LPCC [Connaissance : probablement non, à vérifier].
- **Aucune prise de position de la FINMA ni de l'AMAS** sur des parts de fonds en droits-valeurs inscrits n'a été trouvée. L'AMAS s'est contentée d'un événement sur un véhicule « on-chain » monté avec MAMA ([AMAS](https://www.am-switzerland.ch/en/amas-meet-eat-geneva-fund-tokenisation-setting-up-an-asset-management-on-chain-fund)).

**L-QIF.**
- En vigueur depuis le 1er mars 2024, le L-QIF est réservé aux investisseurs qualifiés et n'est soumis ni à approbation ni à autorisation de la FINMA (art. 118a LPCC) ([CDBF](https://cdbf.ch/1077/) ; [Lexology FR](https://www.lexology.com/library/detail.aspx?g=d9ea2bf9-ad7c-4d36-9f8d-0f3e36b62cbc) [Secondaire]).
- Le L-QIF contractuel doit être géré par une **direction de fonds suisse** (art. 118g al. 1 LPCC). La SICAV doit déléguer administration et décisions de placement à une même direction de fonds (art. 118h al. 1). Le FCP et la SICAV ont une **banque dépositaire** surveillée par la FINMA ([CapLaw](https://caplaw.ch/2024/l-qif-new-innovative-swiss-fund-structure-in-practice/) ; [Koller](https://koller.law/en/news/l-qif) [Secondaire]).
- Rien dans ce régime ne touche à la forme des parts. **La voie est donc ouverte, sans contrôle préalable du produit.**

**Articles qui permettent, articles qui compliquent.**

| Texte | Effet | Statut |
|---|---|---|
| Art. 973d al. 1 CO | **Permet** : tout droit, par convention | [Extrait] |
| Art. 25 LPCC (créance contre la direction) | **Permet** : la part est un droit inscriptible ; la direction de fonds est le débiteur | [Extrait], numéro à vérifier |
| Art. 118a, 118f, 118g LPCC (L-QIF) | **Permet** : pas d'approbation FINMA. **Complique** : l'administration revient à la direction de fonds, il faut donc cadrer la sous-traitance du registre | [Secondaire] |
| Art. 973d al. 2 et 3, art. 973i CO | **Complique** : exigences du registre et responsabilité du débiteur (§2.2) | [Extrait] / [Secondaire] |
| Art. 73 LPCC (la banque dépositaire émet et rachète) | **Complique** : l'émetteur opérationnel (banque dépositaire) n'est pas le débiteur (direction) ; leurs rôles sur le registre sont à répartir | [Secondaire] ([FINMA](https://www.finma.ch/en/authorisation/asset-management/custodian-banks-of-collective-investment-schemes/)) |
| Art. 15 et 27 LPCC | **Complique** les fonds classiques : approbation FINMA du contrat et de ses modifications | [Extrait] (art. 27), [Connaissance] (art. 15) |
| Art. 6 LTI | **Complique** : la conversion en titres intermédiés crée un risque de double registre (§2.5) | [Extrait] |
| Art. 73a LIMF | **Complique** si la plateforme organise une négociation multilatérale : licence de système de négociation TRD | [Secondaire] (rapport §5) |

**SICAV et SCPC (en bref).**

| Forme | Droits-valeurs inscrits possibles ? | Ce qui complique | Position |
|---|---|---|---|
| **FCP / L-QIF contractuel** | Oui (voir ci-dessus) | Clause du contrat de fonds ; sous-traitance du registre | **Retenu** |
| **SICAV** (y c. L-QIF) | Oui en principe : depuis 2021, des actions peuvent être émises en droits-valeurs inscrits ([ZHAW](https://digitalcollection.zhaw.ch/items/520e32eb-6b2b-4d89-b77a-e4105823db2d) [Secondaire] ; art. 622 CO [Connaissance]) | Les art. 40 et 42 LPCC imposent la libération en espèces et la **libre transférabilité** des actions ([ZHAW](https://digitalcollection.zhaw.ch/items/520e32eb-6b2b-4d89-b77a-e4105823db2d) [Secondaire]), en tension avec une liste blanche de détenteurs [H]. Le droit de la SA s'ajoute (statuts, registre des actions) [Connaissance] | Étape ultérieure |
| **SCPC** | Possible en théorie, comme droit non incorporable ([MME](https://www.mme.ch/en/magazine/articles/tokenization-of-investment-fund-units)) | Le transfert d'une part de commanditaire dépend du contrat de société ; volumes faibles [H] | **Exclure** |

### 2.2 Exigences du registre (art. 973d al. 2 et 3 CO)

Le libellé ci-dessous est reconstitué à partir d'extraits français et allemands ([droit-bilingue](https://www.droit-bilingue.ch/fr-de/2/22/220-973d-1383.html) ; [lawbrary](https://lawbrary.ch/law/art/CO-v2021.07-fr-art-973d/) ; [swissrights](https://www.swissrights.ch/gesetze/Artikel-973d-OR-2025-DE.php) ; [Pestalozzi DE](https://pestalozzilaw.com/de/insights/aktuell/legal-insights/registerwertrechte-einfuhrung-von-dlt-aktien-der-schweiz/)) [Extrait : sens fiable, lettre à relire sur Fedlex].

| Exigence | Contenu (extrait) | Ce que cela impose au registre FundChain [H] |
|---|---|---|
| **Ch. 1 : pouvoir de disposition** | Le registre confère aux **créanciers, mais non au débiteur**, le pouvoir de disposer de leurs droits **au moyen de procédés techniques** (« Verfügungsmacht … mittels technischer Verfahren ») | Chaque détenteur inscrit signe ses transferts avec **sa propre clé** : banque distributrice, ou son dépositaire pour elle. La direction de fonds (débiteur) et la plateforme ne peuvent pas déplacer une part. **Le rachat se fait par un transfert du détenteur** vers l'adresse de rachat de la banque dépositaire, pas par un débit d'office. Les exceptions (rachat forcé, gel sur décision judiciaire, perte de clé) sont prévues dans la convention d'inscription. Leur compatibilité avec le ch. 1 doit être validée par un avocat |
| **Ch. 2 : intégrité** | Intégrité protégée contre toute modification non autorisée par des mesures techniques et organisationnelles adéquates, « **telles que** la gestion commune par plusieurs participants indépendants les uns des autres » | La gestion multipartite n'est **qu'un exemple**. Il faut toutefois des mesures démontrables : au moins un nœud ou validateur hors de la plateforme (banque dépositaire, une banque distributrice), journaux signés, audit |
| **Ch. 3 : contenu consigné** | Le contenu des droits, le fonctionnement du registre et la convention d'inscription sont consignés dans le registre ou dans des données d'accompagnement qui y sont liées | Contrat de fonds, convention d'inscription et description technique **liés au registre**, par empreinte (hash) et lien, et versionnés |
| **Ch. 4 : accès et vérification** | Les créanciers peuvent consulter les informations et inscriptions qui les concernent, et **vérifier l'intégrité du contenu qui les concerne sans intervention d'un tiers** (« ohne Zutun Dritter ») | La plateforme est un tiers pour le créancier. Chaque détenteur doit pouvoir vérifier **sans faire confiance à l'opérateur** : son propre nœud, ou des preuves cryptographiques vérifiables localement. Un simple écran de l'opérateur ne suffit pas |
| **Al. 3 : fonctionnement** | Le débiteur s'assure que le registre est organisé conformément à son objet et qu'il fonctionne **en tout temps** conformément à la convention d'inscription | La direction de fonds porte cette obligation. Elle la répercute à la plateforme par contrat : niveaux de service, continuité, plan de sortie et de migration du registre |
| **Art. 973i : information et responsabilité** | Le débiteur informe les acquéreurs sur les caractéristiques du droit, le fonctionnement du registre et les mesures d'intégrité ; il répond du dommage ([Aurum Law](https://aurum.law/newsroom/Guide-to-Swiss-Ledger-Based-Securities-Tokenised-Stocks-Debt-and-RWAs) [Secondaire]) | Description du registre et des risques dans le contrat ou le prospectus du L-QIF. La direction exigera de la plateforme une garantie et une assurance de responsabilité |
| **Art. 973e : effets** | Le débiteur n'est tenu de payer **qu'à la personne que le registre désigne comme créancier**, et seulement contre adaptation du registre ; chaque acquéreur est lié par la convention d'inscription ([projet 19.074, FR](https://www.parlament.ch/centers/eparl/curia/2019/20190074/S2%20F.pdf) [Extrait du **projet**, texte final à vérifier]) | Les distributions et le prix de rachat sont versés selon l'état du registre. Le modèle « paiement contre confirmation du registre » (PvC via SIC) colle à ce texte |

**Ce que le texte dit pour le point 10 (base centrale ou DLT), sans le trancher.**
1. La loi ne prescrit pas de technologie. Selon Pestalozzi, l'art. 973d al. 2 laisse ouvertes la structure et la conception du registre ([Pestalozzi EN](https://pestalozzilaw.com/en/insights/news/legal-insights/ledger-based-securities-introduction-dlt-shares-switzerland/) [Secondaire]). Une base centrale n'est donc pas exclue par principe.
2. La « gestion commune par plusieurs participants indépendants » n'est qu'un **exemple** de mesure d'intégrité (ch. 2).
3. Les vrais filtres sont le **ch. 1** (disposition par procédé technique, par le créancier et non par le débiteur) et le **ch. 4** (vérification sans tiers). Une base centrale où l'opérateur passe les écritures sur instruction et seul montre l'état du registre est **fragile sur ces deux points** [HYPOTHÈSE juridique].
4. Un extrait de recherche affirmait qu'une disposition « sur instruction à un teneur de registre » ne nuisait pas. Il provenait de projets de loi **autrichien et allemand**, pas du droit suisse : je ne l'utilise pas.

### 2.3 Contrat de fonds et approbation

**Ce que dit le droit.** Le contenu minimal du contrat de fonds découle de l'art. 26 al. 3 LPCC et de l'art. 35a OPCC. La liste comprend notamment : le nom, la direction, la banque dépositaire, le cercle des investisseurs, la politique de placement, les commissions, la durée, les organes de publication, et les conditions de suspension du rachat et de **rachat forcé** ([OPCC, CDBF](https://cdbf.ch/wp-content/uploads/2024/02/fedlex-data-admin-ch-eli-cc-2006-859-20240301-fr-pdf-a-1.pdf) [Extrait]). **La forme des parts n'y figure pas expressément.** La pratique l'insère quand même (voir §2.1).

**Clauses à écrire dans le contrat du L-QIF** [HYPOTHÈSE de rédaction, à faire valider] :

| Clause | Contenu proposé |
|---|---|
| Forme des parts | Les parts sont des **droits-valeurs inscrits** au sens de l'art. 973d CO. Pas de certificat ; aucun droit à une autre forme, sauf conversion prévue ci-dessous |
| Registre | Désignation du registre (technologie, opérateur, nœuds), mesures d'intégrité (ch. 2), modalités d'accès et de vérification par les détenteurs (ch. 4), avec un renvoi lié par empreinte |
| Convention d'inscription | Adoptée par la direction de fonds avec l'accord de la banque dépositaire, intégrée par renvoi. Elle lie tout acquéreur (art. 973e). C'est l'équivalent des « tokenization terms » du standard CMTA ([CMTA](https://cmta.ch/standards/standard-for-the-tokenization-of-debt-instruments-using-distributed-ledger-technology) ; [Lenz & Staehelin](https://www.lenzstaehelin.com/news-and-insights/browse-thought-leadership-insights/insights-detail/cmta-publishes-its-debt-tokenization-standard/) [Secondaire]) |
| Détenteurs admissibles | Liste blanche limitée aux **banques et maisons de titres suisses** qui détiennent pour leurs clients, tous investisseurs qualifiés. Transferts bloqués hors liste |
| Émission et rachat | La banque dépositaire inscrit les parts après réception du prix. Le rachat passe par un transfert du détenteur vers l'adresse de rachat, puis la radiation des parts. Cut-off et VNI inchangés |
| Exceptions au pouvoir de disposer | Rachat forcé, gel sur décision judiciaire, perte de clé et annulation (art. 973h CO [Connaissance]), puis réinscription : cas limités, procédure et contrôle (double signature banque dépositaire + direction) |
| Conversion | Transfert possible à un dépositaire (SIX SIS ou banque) avec immobilisation dans le registre (art. 6 LTI) ; retour possible ; plafond éventuel (§2.5) |
| Migration et continuité | Changement de technologie ou d'opérateur, plan de sortie, reconstitution du registre en cas de défaillance |
| Paiements | Distributions et prix de rachat versés au créancier désigné par le registre (art. 973e) |
| Information (art. 973i) | Description du registre, des risques techniques et de la répartition des responsabilités |

**Approbation.**

| Cas | Approbation FINMA | Procédure | Délai estimé |
|---|---|---|---|
| **Nouveau L-QIF contractuel** | **Non.** La direction de fonds renonce expressément à l'approbation et annonce le fonds au DFF **dans les 14 jours** suivant la signature du contrat (art. 118f al. 1 LPCC, art. 126g OPCC). Le DFF tient un registre public ([Lexology FR](https://www.lexology.com/library/detail.aspx?g=d9ea2bf9-ad7c-4d36-9f8d-0f3e36b62cbc) ; [CDBF](https://cdbf.ch/1077/) [Secondaire]) | Contrat signé par la direction avec l'accord de la banque dépositaire [Connaissance] | Quelques semaines pour un gestionnaire déjà autorisé ([Goldblum](https://goldblum.ch/knowledgebase/cisa-switzerland/) [Secondaire]). **3 à 6 mois** jusqu'au premier ordre, avis de droit et documentation compris, hors développement du registre [H] |
| Nouveau FCP classique | **Oui** (art. 15 LPCC [Connaissance]) | La FINMA vise deux mois sur dossier complet, selon Goldblum citant l'art. 17 OPCC ([Goldblum](https://goldblum.ch/knowledgebase/cisa-switzerland/) [Secondaire, à vérifier]) | **6 à 12 mois** pour une première sans précédent [H] |
| FCP existant converti | **Oui** (art. 27 LPCC) : la direction soumet la modification à la FINMA avec l'accord de la banque dépositaire, publie un résumé, ouvre un délai d'**opposition de 30 jours** ; entrée en vigueur au plus tôt 30 jours après publication ([LPCC 2024, Fedlex](https://fedlex.data.admin.ch/filestore/fedlex.data.admin.ch/eli/cc/2006/822/20240301/fr/pdf-a/fedlex-data-admin-ch-eli-cc-2006-822-20240301-fr-pdf-a-1.pdf) [Extrait]) | Il faut aussi migrer le stock de parts tenues chez SIX SIS | **4 à 9 mois**, migration non comprise [H] |

**Mise en garde.** Le L-QIF échappe au contrôle du produit, pas à celui des institutions. La direction de fonds et la banque dépositaire restent surveillées par la FINMA, et leur nouveau processus (émission sur registre, sous-traitance à la plateforme, garde de clés) relève de leur gestion des risques. **Un échange préalable informel avec la FINMA est recommandé**, même s'il n'est pas obligatoire [HYPOTHÈSE].

### 2.4 Rôle de la banque dépositaire et opérateur du registre

**La banque dépositaire peut-elle émettre en droits-valeurs inscrits ?** Oui en principe. Elle assure la garde, l'émission et le rachat des parts et le trafic des paiements (art. 73 LPCC ; [FINMA](https://www.finma.ch/en/authorisation/asset-management/custodian-banks-of-collective-investment-schemes/) [Secondaire]). La loi ne fixe pas la forme des parts émises. Elle émet sous la forme que prévoit le contrat [HYPOTHÈSE juridique, aucune source contraire trouvée].

**Répartition des rôles recommandée** [HYPOTHÈSE] :

| Rôle | Qui | Fondement |
|---|---|---|
| Débiteur, responsable du registre (art. 973d al. 3, 973i) | **Direction de fonds** | Débitrice de la créance de l'investisseur (§2.1) ; administration du L-QIF (art. 118g LPCC) |
| Émission et rachat (création et radiation des parts) ; contrôle | **Banque dépositaire**, qui signe avec sa clé | Art. 73 LPCC |
| Exploitation technique du registre (nœuds, séquençage, interfaces, preuves) | **Plateforme FundChain**, sous-traitante technique de la direction et de la banque dépositaire | Contrat ; ne reçoit pas de délégation de l'administration [H] |
| Détention des parts pour les clients | **Banques distributrices**, avec leurs propres clés ou celles de leur dépositaire | Art. 973d al. 2 ch. 1 ; LTI (§2.5) |

**Faut-il une licence pour l'opérateur du registre ?**
- **Non par principe.** L'émission de droits-valeurs inscrits ne requiert aucune institution réglementée ; c'est même leur trait distinctif par rapport aux titres intermédiés ([Lexology, « New DLT law in practice »](https://www.lexology.com/library/detail.aspx?g=c0a1500c-4912-4093-bc49-426f1c67ae18) [Secondaire]).
- Seules les activités visées par une loi sur les marchés financiers exigent une autorisation. En pratique, des maisons de titres agréées vendent un service de teneur de registre, par exemple ISP Securities ([ISP](https://ispgroup.com/services/tokenization) [Secondaire]). C'est un usage commercial, pas une obligation.

**Seuils qui déclenchent une obligation** [HYPOTHÈSE, sauf mention] :

| Si la plateforme… | Alors… |
|---|---|
| met en relation des intérêts acheteurs et vendeurs multiples (marché secondaire) | licence de **système de négociation TRD** (art. 73a LIMF), 12 à 24 mois (rapport §5) |
| détient les clés de créanciers ou transfère des valeurs pour des tiers | intermédiaire financier au sens de l'art. 2 al. 3 LBA : affiliation à un **OAR** ([VQF](https://www.vqf.ch/de/sro/unterstellungspflicht) [Secondaire]). La future licence d'**institut crypto** (consultation close le 6 février 2026) est à surveiller ; son champ semble viser les cryptoactifs, pas les valeurs mobilières ([Lexology](https://www.lexology.com/library/detail.aspx?g=f0e2b261-e0c2-49ce-93ff-c17796b7d4b7) ; [VE Law](https://www.velaw.ch/finig-vernehmlassung/) [Secondaire] ; exclusion des valeurs mobilières [H]) |
| négocie des parts en son nom pour le compte de clients | **maison de titres** (LEFin) |
| reçoit l'administration du L-QIF par délégation | question ouverte au regard de l'art. 118g LPCC : à éviter |

**Position.** La plateforme est **non dépositaire** : aucune clé de créancier, aucun flux d'espèces, pas de marché secondaire multilatéral. Elle n'a alors **pas de licence ni d'obligation LBA propre**. Il faut le confirmer par une demande d'assujettissement (non-assujettissement) à la FINMA ou à un OAR [HYPOTHÈSE].

**Point de vigilance banques.** Les banques qui gardent des parts DLT (clés, HSM) entrent dans le champ de la communication FINMA 01/2026 sur la garde des actifs crypto, si les parts en droits-valeurs inscrits y sont assimilées ([FINMA](https://www.finma.ch/de/~/media/finma/dokumente/dokumentencenter/myfinma/4dokumentation/finma-aufsichtsmitteilungen/20260112-finma-aufsichtsmitteilung-01-2026.pdf?sc_lang=de&hash=04A4D2F011A496ECDEDF21C618B6FDF4) ; [Goldblum](https://goldblum.ch/de/nachrichten-und-medien/finma-aufsichtsmitteilung-01-2026) [Secondaire] ; assimilation [H]).

### 2.5 Coexistence avec SIX SIS et la LTI

**Le droit organise la conversion.**
- Les titres intermédiés naissent notamment lorsque des **droits-valeurs inscrits sont transférés à un dépositaire et crédités sur un ou plusieurs comptes de titres**. Lors de ce transfert, les droits-valeurs inscrits doivent être **immobilisés dans le registre** (art. 6 LTI, modifié par la loi TRD) ([LTI, copie SIX](https://www.six-group.com/dam/download/securities-services/custody-and-settlement/info-center/main-register/scu-mainregiger-federal-intermediated-securities-act-de.pdf) [Extrait, lettre et alinéa à vérifier] ; [Lexology](https://www.lexology.com/library/detail.aspx?g=c0a1500c-4912-4093-bc49-426f1c67ae18) [Secondaire]).
- Les conditions générales de SIX SIS reprennent ce mécanisme : un titre intermédié naît quand un droit-valeur inscrit est transféré à SIX SIS et crédité en compte. SIX SIS fixe les critères d'éligibilité ([SIX SIS, CG 2022](https://www.six-group.com/dam/download/securities-services/custody-and-settlement/info-center/clients/gtc/mg-general-agb-220201.pdf) [Extrait]).
- SIX a absorbé le dépositaire central DLT de SDX dans SIX SIS ([Ledger Insights](https://www.ledgerinsights.com/six-gets-approval-to-merge-sdx-dlt-csd-into-securities-services-adds-crypto-custody/)). Ses conditions « Digital Asset Platform » datent du 16 juillet 2026 ([SIX](https://www.six-group.com/dam/download/securities-services/custody-and-settlement/info-center/clients/gtc/sis-503-sda-six-digital-platform-gtc-260716.pdf), non lues).

**Conséquences pour la promesse de « registre unique ».**

| Configuration | Livres en jeu | Effet sur la promesse [H] |
|---|---|---|
| **A. Banques distributrices inscrites au registre** ; elles créditent les comptes de leurs clients | Registre FundChain (niveau interbancaire) + livre client de chaque banque | **Tient.** Le livre client de la banque subsiste ; il est légalement nécessaire et existe déjà. Le registre supprime les couches banque dépositaire, SIX SIS et hub. Si la banque crédite des comptes de titres, ses clients détiennent probablement des **titres intermédiés** (art. 6 LTI) : à confirmer |
| **B. Passerelle SIX SIS minoritaire** pour les banques hors plateforme | Registre + position immobilisée « SIX SIS » + comptes SECOM | **Tient partiellement** : un point de réconciliation (registre ↔ SIX SIS), quotidien et unique |
| **C. Passerelle SIX SIS majoritaire** | Le registre devient un simple registre d'émission dormant | **Échoue** : on retombe sur le modèle actuel du registre principal, avec un livre de plus |

**Position.**
- Pas de passerelle SIX SIS au lancement du pilote : deux à trois banques, toutes inscrites au registre.
- La passerelle s'ouvre ensuite comme **voie de sortie minoritaire**. Elle a un seuil d'alerte, par exemple au-delà de 25 % des parts immobilisées chez SIX SIS [HYPOTHÈSE de seuil], et une procédure de retour (dé-immobilisation) écrite dans la convention d'inscription.
- Le mécanisme de retour depuis SIX SIS n'est documenté dans aucune source lue [à vérifier auprès de SIX].

### 2.6 Précédents

**Aucun fonds de droit suisse (FCP, SICAV, SCPC ou L-QIF) dont les parts sont émises en droits-valeurs inscrits n'a été identifié publiquement.** Les recherches ont visé L-QIF, Taurus, Sygnum, SIX/SDX, BX Digital, banques cantonales, ISP et directions de fonds, en allemand, en français et en anglais. Cela confirme le constat du rapport (§1.5) et des notes de recherche.

Cas voisins, qui ne sont **pas** des précédents :

| Cas | Ce que c'est | Pourquoi ce n'est pas un précédent | Source |
|---|---|---|---|
| Cité Gestion (Taurus, standard CMTA) | Actions d'une banque privée en droits-valeurs inscrits | Actions d'une société, pas des parts de fonds | [finews](https://www.finews.com/news/english-news/55454-cite-gestion-taurus-tokenization-stock) |
| UBS uMINT | Fonds monétaire tokenisé, code CMTAT | VCC de **Singapour** | [Wikipedia, CMTA](https://en.wikipedia.org/wiki/Capital_Markets_and_Technology_Association) |
| TokenFactory / Bank Frick (2020) | « Premier fonds immobilier réglementé tokenisé » | FIA du **Liechtenstein** (FMA) | [BTC-Echo](https://www.btc-echo.de/token-factory-tokenisiert-ersten-regulierten-immobilienfonds/) |
| AMAS × MAMA | Véhicule géré on-chain, « Swiss Investment Club » | Club d'investissement, a priori hors LPCC [H] | [AMAS](https://www.am-switzerland.ch/en/amas-meet-eat-geneva-fund-tokenisation-setting-up-an-asset-management-on-chain-fund) |
| Credit Suisse, Pictet, Vontobel sur BX Swiss | Preuve de concept, produits d'investissement tokenisés, cash via SIC | Certificats et produits structurés, pas des fonds | [PR Newswire](https://www.prnewswire.com/news-releases/the-swiss-financial-industry-has-successfully-traded-and-settled-tokenized-investment-products-301700559.html) |
| Premier fonds crypto suisse approuvé par la FINMA | Fonds qui **investit** dans des cryptoactifs | Parts classiques, non tokenisées [H] | [Crypto Finance / finews](https://www.crypto-finance.com/finews-erster-schweizer-kryptofonds-erhaelt-gruenes-licht-von-der-finma/) |
| Colb (août 2026) | Produits structurés pré-IPO en droits-valeurs inscrits | Produits structurés | [Daily Tribune](https://www.daily-tribune.com/online_features/press_releases/colb-becomes-switzerland-s-first-provider-of-pre-ipo-structured-products-as-ledger-based-securities/article_00fe6d58-fc04-5b24-92d6-4c0691904402.html) |
| BX Digital | Système de négociation TRD ; les « fonds » sont cités parmi les actifs visés | Aucune cotation de parts de fonds trouvée | [Ledger Insights](https://www.ledgerinsights.com/bx-digital-gets-green-light-for-swiss-dlt-trading/) |
| Pilotes FundsDLT ZKB / UBS | Messagerie d'ordres sur DLT | Pas un registre de parts | Rapport §1.5 |

**Conséquence.** FundChain serait le premier. Il n'existe ni pratique de rédaction, ni doctrine FINMA, ni position de place. C'est un avantage commercial, mais cela impose un avis de droit et un échange avec la FINMA **avant** de construire.

---

## 3. Conditions du go juridique et bascule vers le plan B

**Verdict : go sous conditions.** Le cadre légal suisse suffit pour un L-QIF contractuel dont les parts sont des droits-valeurs inscrits. Aucune de ces conditions n'exige de changement de loi.

| # | Condition du go | Responsable | Critère de levée |
|---|---|---|---|
| C1 | Une direction de fonds suisse **et** sa banque dépositaire acceptent d'être, l'une débitrice responsable du registre (art. 973d al. 3, 973i), l'autre émettrice sur le registre | Orchestrateur, point 7 | Lettre d'engagement |
| C2 | Un avis de droit d'un cabinet suisse valide le schéma : qualification de la part, rôles, conformité aux ch. 1 à 4, exceptions au pouvoir de disposer | Juriste + cabinet | Avis écrit sans réserve bloquante |
| C3 | Le contrat de fonds et la convention d'inscription sont rédigés selon le §2.3 | Direction + cabinet | Projets validés |
| C4 | Au moins deux banques distributrices peuvent **détenir des parts DLT** (clés propres ou dépositaire) et les comptabiliser chez leurs clients | Point 7 + architecte | Accord des banques et de leurs auditeurs |
| C5 | La plateforme reste **non dépositaire** (aucune clé de créancier, aucun cash, pas de marché multilatéral) ; son non-assujettissement est confirmé | Juriste, point 11 | Réponse FINMA ou OAR |
| C6 | Échange préalable informel avec la FINMA, mené par la direction et la banque dépositaire | Partenaires | Pas d'objection de principe |
| C7 | Passerelle SIX SIS fermée au lancement, puis plafonnée (§2.5) | Architecte | Règle écrite dans la convention |

**Bascule vers le plan B (Luxembourg)** si l'un de ces déclencheurs survient [HYPOTHÈSE de calibrage] :

| Déclencheur | Seuil proposé |
|---|---|
| Aucun couple direction de fonds + banque dépositaire engagé (C1) | 6 mois après le début des entretiens (point 7) |
| L'avis de droit conclut que les ch. 1 et 4 ne peuvent pas être respectés à un coût raisonnable, ou que la plateforme a besoin d'une licence (système de négociation TRD, banque) dans le modèle du pilote | Dès réception de l'avis |
| Les banques distributrices exigent de passer par SIX SIS dès le départ (configuration C du §2.5) | Plus de la moitié des banques cibles |
| La FINMA exige, pour la banque dépositaire ou la direction, une procédure d'autorisation dépassant 12 mois | Dès réception du retour FINMA |

Le plan B reste celui du rapport (§6.2) : un fonds non coté luxembourgeois avec un agent administratif partenaire qui tient le registre sur DLT (FAQ CSSF 22/811), avec Clearstream et Allfunds comme concurrents directs.

**Ce qui ne déclenche pas la bascule.** L'absence de précédent, l'absence de doctrine FINMA, ou la nécessité d'un échange FINMA. Ce sont des coûts de premier entrant, pas des bloquants.

---

## 4. À relire sur les sources primaires

Aucun de ces textes n'a été lu en entier (accès bloqué). À relire avant tout usage externe (comité, pitch, contrat).

| Texte | Point à vérifier | Statut actuel | Lien |
|---|---|---|---|
| Art. 973c CO | Forme actuelle des parts suisses (droits-valeurs simples ?) | [Connaissance] | [Fedlex CO](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr) |
| Art. 973d al. 1 à 3 CO | Lettre exacte des ch. 1 à 4 et de l'al. 3 | [Extrait] | [Fedlex, art. 973d](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_973_d) |
| Art. 973e à 973i CO | Effets, transfert, sûretés, annulation, information et responsabilité. **Les extraits divergent sur la numérotation** (973f = transfert ou sûretés ?) ; 973e lu dans le **projet** de 2019 | [Extrait] / [Connaissance] | [Fedlex CO](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr) ; [projet 19.074](https://www.parlament.ch/centers/eparl/curia/2019/20190074/S2%20F.pdf) |
| Art. 622 et 686 CO | Actions en droits-valeurs inscrits ; registre des actions (SICAV) | [Connaissance] | Fedlex CO |
| Art. 15, 25, 26, 27 LPCC | Approbation ; créance contre la direction ; contenu ; modification | [Extrait] (27) / [Connaissance] | [Fedlex LPCC](https://www.fedlex.admin.ch/eli/cc/2006/822/fr) |
| Art. 40, 42 LPCC | SICAV : libération en espèces, libre transférabilité vs liste blanche | [Secondaire] | Fedlex LPCC |
| Art. 73 LPCC | Tâches de la banque dépositaire | [Secondaire] | Fedlex LPCC |
| Art. 118a à 118h LPCC ; art. 126g OPCC | Régime L-QIF, délégation de l'administration, annonce au DFF | [Secondaire] | Fedlex LPCC ; [OPCC](https://www.fedlex.admin.ch/eli/cc/2006/859/fr) |
| Art. 17 et 35a OPCC | Délai d'approbation FINMA ; contenu minimal du contrat | [Secondaire] / [Extrait] | [OPCC (copie CDBF)](https://cdbf.ch/wp-content/uploads/2024/02/fedlex-data-admin-ch-eli-cc-2006-859-20240301-fr-pdf-a-1.pdf) |
| Art. 4 et 6 LTI (+ règles de conversion) | Alinéa et lettre exacts ; immobilisation ; retour d'un titre intermédié vers le registre | [Extrait] | [Fedlex LTI](https://www.fedlex.admin.ch/eli/cc/2009/450/fr) |
| Art. 2 let. b et bbis, art. 73a LIMF | Valeur mobilière TRD ; système de négociation TRD | [Connaissance] / [Secondaire] | [Fedlex LIMF](https://www.fedlex.admin.ch/eli/cc/2015/853/fr) |
| Art. 2 al. 3 LBA | Garde de clés ou transfert pour des tiers | [Connaissance] | [Fedlex LBA](https://www.fedlex.admin.ch/eli/cc/1998/892_892_892/fr) |
| LEFin, délégation par la direction de fonds | Sous-traitance du registre | [Connaissance] | Fedlex LEFin |
| Message loi TRD (FF 2020 223) | Passages sur les ch. 1 et 4, registres centralisés, placements collectifs ; liste des lois modifiées (LPCC ?) | [Extrait] | [Message DE](https://www.newsd.admin.ch/newsd/message/attachments/59301.pdf) |
| Circulaire SBF 2021/01 | Pratique recommandée pour les registres | Non lue | [SBF](https://blockchainfederation.ch/wp-content/uploads/2024/07/SBF-2021-01-Ledger_Based_Securities_2021-10-12.pdf) |
| Article MME (texte intégral) | Raisonnement sur la LPCC | Extrait seulement | [MME](https://www.mme.ch/en/magazine/articles/tokenization-of-investment-fund-units) |
| Doctrine en français | Iffland (CEDIDAC 107) ; Vraca (QFLR 2022) | Non lue | [Lenz & Staehelin](https://www.lenzstaehelin.com/fileadmin/user_upload/Iffland_La_tokenisation_des_valeurs_mobilieres_CEDIDAC_107.pdf) ; [Unifr](https://student.unifr.ch/quid/fr/assets/public/files/publications/QFLR_2:2022_Vraca.pdf) |
| CG de SIX SIS (2022) et de la Digital Asset Platform (juillet 2026) | Éligibilité des parts DLT ; immobilisation et retour | Extrait / non lue | [SIX SIS](https://www.six-group.com/dam/download/securities-services/custody-and-settlement/info-center/clients/gtc/mg-general-agb-220201.pdf) ; [SIX DAP](https://www.six-group.com/dam/download/securities-services/custody-and-settlement/info-center/clients/gtc/sis-503-sda-six-digital-platform-gtc-260716.pdf) |
| Communication FINMA 01/2026 | Champ : les droits-valeurs inscrits y sont-ils inclus ? | [Secondaire] | [FINMA](https://www.finma.ch/de/~/media/finma/dokumente/dokumentencenter/myfinma/4dokumentation/finma-aufsichtsmitteilungen/20260112-finma-aufsichtsmitteilung-01-2026.pdf?sc_lang=de&hash=04A4D2F011A496ECDEDF21C618B6FDF4) |
| Projet LEFin (institut crypto) | Les valeurs mobilières sont-elles exclues ? | [Secondaire] | [VE Law](https://www.velaw.ch/finig-vernehmlassung/) |
| Standards CMTA (CMTAT, titres de dette) | Fonctions émetteur (rachat forcé, gel) vs ch. 1 | Non lus | [CMTAT](https://cmta.ch/standards/cmta-token-cmtat) |

---

## 5. Questions à poser à un avocat suisse ou à la FINMA

**À un cabinet suisse (avis de droit, condition C2).**
1. Les parts d'un L-QIF contractuel peuvent-elles être des droits-valeurs inscrits avec la direction de fonds comme débitrice ? La convention d'inscription peut-elle être intégrée au contrat de fonds et lier chaque acquéreur ?
2. Comment concilier l'émission par la banque dépositaire (art. 73 LPCC) et la responsabilité du débiteur (art. 973d al. 3, 973i CO) ? Qui répond de quoi en cas de panne du registre ?
3. Le rachat forcé, le gel judiciaire, la perte de clé et la réinscription sont-ils compatibles avec le ch. 1 (« aux créanciers, mais non au débiteur ») s'ils sont limités et prévus par la convention ?
4. Quel est le minimum pour respecter le ch. 4 (vérification « sans intervention d'un tiers ») ? Nœud chez chaque détenteur, nœuds hébergés à clés propres, ou preuves cryptographiques vérifiables localement ? *Cette réponse alimente directement le point 10.*
5. Une banque distributrice qui détient des parts DLT pour ses clients crée-t-elle automatiquement des titres intermédiés (art. 6 LTI) ? Une détention directe par le client, avec clés gardées par la banque, est-elle possible et préférable ?
6. La sous-traitance de l'exploitation technique du registre est-elle compatible avec l'art. 118g LPCC (administration par la direction de fonds) et les règles de délégation de la LEFin ?
7. Une plateforme non dépositaire, sans cash et limitée aux transferts bilatéraux entre banques, échappe-t-elle à la LBA, à la LEFin, au statut de système de négociation TRD et au futur statut d'institut crypto ?
8. Comment traiter l'impôt anticipé et les droits de timbre si les distributions sont versées selon l'état du registre ? (À confirmer avec un fiscaliste.)

**À la FINMA (par la direction de fonds et la banque dépositaire, condition C6).**
1. L'émission de parts d'un L-QIF en droits-valeurs inscrits par une banque dépositaire suppose-t-elle une notification ou une adaptation de son autorisation ?
2. Quelles attentes en matière de garde de clés, d'externalisation et de risque opérationnel pour la banque dépositaire, la direction de fonds et les banques distributrices (champ de la communication 01/2026) ?
3. Pour l'étape 2 (FCP classique ou conversion d'un FCP existant), quelles pièces et quel délai pour une approbation au titre des art. 15 ou 27 LPCC avec un registre de droits-valeurs inscrits ?

**À SIX SIS.**
1. Les parts de fonds en droits-valeurs inscrits sont-elles éligibles au transfert vers SIX SIS et à l'immobilisation ? Le retour vers le registre est-il prévu ?
2. À quel coût, et avec quelle obligation de réconciliation quotidienne ?

**À l'AMAS.**
1. Le contrat type ou les directives de l'AMAS contiennent-ils une clause imposant la forme « parts tenues en compte » ? L'AMAS est-elle prête à publier une recommandation pour les parts en droits-valeurs inscrits ?
