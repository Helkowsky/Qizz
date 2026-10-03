# Point 10 (volet juridique) : une base centrale peut-elle être un registre de droits-valeurs (art. 973d CO) ?

*Agent `juriste-reglementaire`, phase 2. Ce document couvre uniquement l'interprétation juridique du point 10 (rapport, §7.1). L'architecture est traitée à part. État au 1er octobre 2026. Il prolonge le point 9 (go juridique sous conditions pour un L-QIF contractuel en droits-valeurs inscrits).*

> **Méthode et limites.** J'ai fait environ 37 recherches web. **Aucun texte n'a pu être lu en entier** : le proxy bloque WebFetch sur fedlex.admin.ch, newsd.admin.ch (message du Conseil fédéral), bundesblatt.weblaw.ch, blockchainfederation.ch et bakermckenzie.com. Chaque citation porte donc un statut :
> - **[Lu]** : texte lu en entier. *Aucune occurrence dans ce document.*
> - **[Extrait]** : libellé ou paraphrase proche tiré d'un extrait de moteur de recherche. Le sens est fiable, la lettre ne l'est pas. Quand l'extrait attribue un passage au message, l'attribution est notée « attribuée au message » : elle reste à confirmer.
> - **[Connaissance]** : cité de mémoire, sans lecture dans cette session. **À relire sur Fedlex avant tout usage externe.**
>
> Ce qui n'est pas sourcé est marqué [HYPOTHÈSE], abrégé [H] dans les tableaux.

---

## 1. Verdict

1. **Une base centrale pure, opérée par la plateforme, ne qualifie pas.** La loi ne nomme aucune technologie. Elle exige toutefois que ni le débiteur ni une instance centrale unique ne puisse disposer des parts ou modifier seul le registre, et que le créancier puisse vérifier sans dépendre de l'opérateur (art. 973d al. 2 ch. 1, 2 et 4).
2. **Le droit n'exige pas « une blockchain », il exige trois propriétés :** (i) aucune écriture sans la signature du créancier, sauf exceptions encadrées ; (ii) aucun acteur ne peut modifier le registre seul ; (iii) le créancier vérifie lui-même, sans l'aide de l'opérateur.
3. **Le minimum juridiquement sûr est une DLT à permission avec au moins trois opérateurs de nœud indépendants** : la plateforme, la banque dépositaire et au moins un acteur côté créanciers. Les clés restent chez les créanciers ou chez leurs dépositaires, **jamais chez la plateforme**.
4. **L'option « base centrale + clés des créanciers + journal signé + ancrage public » reste incertaine.** Elle détecte une fraude de l'opérateur sans l'empêcher. Elle ne devient défendable qu'avec un cosignataire indépendant, et revient alors à une DLT à deux ou trois nœuds.
5. **La qualification est vitale.** Sans elle, les parts sont au mieux des droits-valeurs simples, transférables par cession écrite, et le registre ne fait plus foi. La direction de fonds en répond (art. 973i), et cette responsabilité ne peut pas être exclue.

| Option | Ch. 1 Disposition | Ch. 2 Intégrité | Ch. 3 Consignation | Ch. 4 Vérification sans tiers | **Verdict** |
|---|---|---|---|---|---|
| **(a) Base centrale pure** (la plateforme écrit sur instruction) | ✗ | ✗ | ✓ | ✗ | **Ne qualifie pas** |
| **(b) Base centrale + clés des créanciers + journal signé + ancrage public** | ~ Le créancier signe, mais l'opérateur peut encore écrire seul (fraude détectable, non empêchée) | ~ / ✗ La détection n'est pas une protection ; probablement en deçà du standard de la « gestion commune » | ✓ | ~ La vérification locale est possible, mais l'accès aux données dépend de l'opérateur | **Incertain** (penche vers le non sans cosignataire indépendant) |
| **(c) DLT à permission multi-nœuds** (banque dépositaire, plateforme, banques) | ✓ si les clés sont chez les créanciers et qu'aucune écriture n'est possible sans leur signature | ✓ C'est l'exemple de la loi, à condition qu'aucun nœud ne valide seul | ✓ | ✓ si le créancier lit sur un nœud qui n'est pas celui de l'opérateur | **Qualifie probablement** (minimum sûr) |
| **(d) Blockchain publique** | ✓ | ✓ | ✓ | ✓ Tout le monde peut faire tourner un nœud | **Qualifie** au regard de l'art. 973d. Écartée pour d'autres motifs : secret bancaire et confidentialité (point 12) |

**Conséquence pour le rapport (§2.4).** La « blockchain à permission à opérateur central », où la plateforme opère le séquenceur et héberge les nœuds, n'est juridiquement acceptable qu'à trois conditions (détail au §8) : le séquenceur ne peut ni créer ni modifier une écriture sans les signatures des parties ; les clés hébergées n'appartiennent pas à la plateforme ; au moins un nœud complet est tenu hors de la plateforme.

---

## 2. Question 1 : les quatre exigences de l'art. 973d al. 2 CO

### 2.1 Le texte

Libellé reconstitué à partir d'extraits français et allemands ([droit-bilingue](https://www.droit-bilingue.ch/fr-de/2/22/220-973d-1383.html) ; [lawbrary](https://lawbrary.ch/law/art/CO-v2021.07-fr-art-973d/) ; [swissrights, DE](https://www.swissrights.ch/gesetze/Artikel-973d-OR-2025-DE.php)), complété de mémoire pour la lettre exacte. **[Extrait + Connaissance]**

> **Al. 1.** Le droit-valeur inscrit est un droit qui, en vertu d'une convention passée entre les parties, 1. est inscrit dans un registre de droits-valeurs **conformément à l'al. 2**, et 2. ne peut être exercé et transféré à autrui que par ce registre.
> **Al. 2.** Le registre de droits-valeurs doit satisfaire aux exigences suivantes :
> 1. il confère aux créanciers, **mais non au débiteur**, le pouvoir de disposer de leurs droits **au moyen de procédés techniques** (*« vermittelt den Gläubigern, nicht aber dem Schuldner, mittels technischer Verfahren die Verfügungsmacht »*) ;
> 2. son intégrité est protégée contre toute modification non autorisée par des mesures techniques et organisationnelles adéquates, **telles que la gestion commune par plusieurs participants indépendants les uns des autres** ;
> 3. le contenu des droits, le fonctionnement du registre et la convention d'inscription y sont consignés directement ou dans des données d'accompagnement qui y sont liées ;
> 4. il permet aux créanciers de consulter les informations et inscriptions qui les concernent et de **vérifier l'intégrité** du contenu du registre qui les concerne **sans l'intervention d'un tiers** (*« ohne Zutun Dritter »*).
> **Al. 3.** Le débiteur veille à ce que le registre soit organisé conformément à son objet. Il s'assure notamment qu'il fonctionne **en tout temps** conformément à la convention d'inscription.

**À noter.** L'al. 1 ch. 1 renvoie à l'al. 2 (« conformément à l'al. 2 ») : **les quatre exigences sont cumulatives et conditionnent la qualification** (§7).

### 2.2 Interprétation, exigence par exigence

| Exigence | Ce qu'en disent le message et la doctrine | Statut | Ce que cela exclut pour FundChain [H] |
|---|---|---|---|
| **Ch. 1 : pouvoir de disposition** | (1) Le pouvoir de disposition (*Verfügungsmacht*) est une **maîtrise de fait**, comparable à la possession d'une chose ([Baker McKenzie, *Die Registrierungsvereinbarung*](https://www.bakermckenzie.com/-/media/files/people/mauchle-yves/die-registrierungsvereinbarung--insbesondere-bei-tokenisierten-forderungsre.pdf?sc_lang=en&rev=ea0d351a749d47a5bb0b3fd6159b9bb3&hash=08E6B6CBFEE013A48524A4A3C5384F62), attribution exacte à confirmer). (2) Le pouvoir de disposition du débiteur **doit être exclu impérativement**. C'est ce qui distingue ce régime des **registres purement centraux, déjà couverts par la LTI** ([Pestalozzi EN](https://pestalozzilaw.com/en/insights/news/legal-insights/ledger-based-securities-introduction-dlt-shares-switzerland/)). (3) Attribué au message (BBl 2020, p. 278) : le transfert doit pouvoir se faire **« en principe sans l'intervention d'une instance centrale de confiance qui gère seule le registre »** (« *grundsätzlich ohne Zutun einer vertrauenswürdigen zentralen Instanz, welche das Register alleine verwaltet* ») ([OAPEN, *Elektronische Wertpapiere*](https://library.oapen.org/bitstream/handle/20.500.12657/52167/external_content.pdf?sequence=1&isAllowed=y), citant le message). (4) Rien n'empêche le créancier de confier la garde de son droit (sa clé) à un tiers, **même à l'émetteur** ([Baker McKenzie](https://www.bakermckenzie.com/-/media/files/people/mauchle-yves/die-registrierungsvereinbarung--insbesondere-bei-tokenisierten-forderungsre.pdf?sc_lang=en&rev=ea0d351a749d47a5bb0b3fd6159b9bb3&hash=08E6B6CBFEE013A48524A4A3C5384F62), attribution à confirmer) | [Extrait] | Exclut le modèle « l'opérateur passe l'écriture sur instruction du créancier ». Le créancier (une banque) doit signer lui-même ou par le dépositaire **qu'il a choisi**. Une clé détenue par la plateforme, sous-traitante du débiteur, met le pouvoir de disposition du côté du débiteur |
| **Ch. 2 : intégrité** | (1) La gestion commune par plusieurs participants indépendants n'est **qu'un exemple** ([Pestalozzi EN](https://pestalozzilaw.com/en/insights/news/legal-insights/ledger-based-securities-introduction-dlt-shares-switzerland/)). (2) Attribué au message : **« d'autres solutions éventuelles devraient au moins atteindre ce standard de sécurité »** (« *Allfällige andere Lösungen müssten mindestens diesen Sicherheitsstandard erfüllen können* ») ([message, version préimprimée](https://www.newsd.admin.ch/newsd/message/attachments/59304.pdf)) | [Extrait], attribution au message **à confirmer en priorité** | La protection doit valoir **aussi contre l'opérateur**, car c'est lui qui peut modifier une base centrale. Il faut un niveau équivalent à celui de plusieurs gestionnaires indépendants : empêcher, pas seulement détecter [H] |
| **Ch. 3 : consignation** | Exigence de transparence : contenu du droit, fonctionnement du registre et convention liés au registre ([Pestalozzi EN](https://pestalozzilaw.com/en/insights/news/legal-insights/ledger-based-securities-introduction-dlt-shares-switzerland/)) | [Extrait] | **Non discriminante** : toute technologie peut la remplir (documents liés par empreinte) |
| **Ch. 4 : vérification sans tiers** | (1) Les parties doivent pouvoir vérifier l'intégrité des inscriptions qui les concernent **« sans le concours de tiers (y compris le débiteur) »** ([von der Crone / Baumgartner, SZW 2020](https://www.ius.uzh.ch/dam/jcr:70677f21-bf08-4338-9706-57bd6abbe2f9/SZW_4_2020_vonderCrone&Baumgartner.pdf), attribution à confirmer avec Pestalozzi DE). (2) « **Malgré une formulation technologiquement neutre, le renvoi à une propriété centrale de la DLT, et notamment de la blockchain, est reconnaissable** » ([Pestalozzi DE](https://pestalozzilaw.com/de/insights/aktuell/legal-insights/registerwertrechte-einfuhrung-von-dlt-aktien-der-schweiz/)) | [Extrait] | L'opérateur est un **tiers** pour le créancier. Un écran ou une API de l'opérateur ne suffit pas (§5) |
| **Al. 3 : fonctionnement** | Le débiteur veille à l'organisation du registre et à son fonctionnement en tout temps ([Pestalozzi EN](https://pestalozzilaw.com/en/insights/news/legal-insights/ledger-based-securities-introduction-dlt-shares-switzerland/)) | [Extrait] | Ne prescrit aucune architecture. Il rend toutefois la **direction de fonds responsable** de l'opérateur (§6) |

**Swiss Blockchain Federation.** La circulaire 2021/01 « Registerwertrechte », mise à jour en septembre 2021 et approuvée le 23 septembre 2021, sert de guide aux émetteurs ([SBF, DE](https://new.blockchainfederation.ch/wp-content/uploads/2024/04/Zirkular-2021_01-Registerwertrechte.pdf) ; [SBF, EN](https://blockchainfederation.ch/wp-content/uploads/2024/07/SBF-2021-01-Ledger_Based_Securities_2021-10-12.pdf)) **[Extrait : titre et date seulement]**. **Son contenu sur les registres centraux n'a pas pu être lu.** C'est la première source à relire (§9).

**FINMA.** **Je n'ai trouvé aucune prise de position de la FINMA sur la qualification d'un registre au regard de l'art. 973d.** C'est logique : la qualification relève du droit privé et donc, en dernier ressort, des tribunaux civils, pas de l'autorité de surveillance [Connaissance]. La FINMA n'intervient qu'indirectement, sur trois terrains :
- la surveillance de la direction de fonds et de la banque dépositaire (externalisation, risques opérationnels, garde de clés) ;
- l'admission de valeurs mobilières TRD sur un système de négociation TRD. Le premier a été autorisé en mars 2025 ([FINMA](https://www.finma.ch/en/news/2025/03/20250318-mm-dlt-handelssystem/)) ;
- la communication 01/2026 sur la garde (point 9, §2.4).

**Cabinets.**
- **Pestalozzi** est la source la plus explicite trouvée.
- **Lenz & Staehelin** : l'article d'Iffland (CEDIDAC 107) est identifié, mais son contenu n'a pas pu être exploité ([Iffland](https://www.lenzstaehelin.com/fileadmin/user_upload/Iffland_La_tokenisation_des_valeurs_mobilieres_CEDIDAC_107.pdf)).
- **MME** traite les parts de fonds (point 9).
- **Bär & Karrer, Homburger, Walder Wyss, Kellerhals Carrard, NKF** : **aucun texte public sur la question « base centrale ou DLT » n'a été trouvé.** Un article Mondaq reprend les quatre exigences sans les discuter ([Mondaq](https://www.mondaq.com/securities/1218414/shares-in-the-form-of-ledger-based-securities), cabinet non confirmé).

---

## 3. Question 2 : neutralité technologique et place de la base centrale

**Réponse.** Oui, le législateur a voulu la neutralité technologique. **Mais c'est une neutralité sur la technologie, pas sur le modèle de confiance.** Le texte n'admet ni n'exclut expressément une base centrale. Le message en restreint fortement l'espace, par trois passages (selon les extraits).

| # | Passage | Sens | Statut | Source |
|---|---|---|---|---|
| 1 | Le Conseil fédéral a respecté autant que possible la neutralité technologique en ne mentionnant pas la technologie elle-même, mais **seulement celles de ses caractéristiques qui méritent de figurer dans le droit des papiers-valeurs** | La loi codifie des **propriétés** de la DLT, pas la DLT | [Extrait], source exacte à confirmer (message en français, version provisoire, ou étude ESSEC) | [Message FR, version provisoire](https://www.newsd.admin.ch/newsd/message/attachments/59302.pdf) ; [ESSEC](https://essec.hal.science/hal-02991122v1/document) |
| 2 | Après la consultation, le texte parle de « droits-valeurs inscrits » et ne vise plus expressément les registres électroniques distribués | Neutralité renforcée en cours de procédure | [Extrait, secondaire] | [ESSEC](https://essec.hal.science/hal-02991122v1/document) |
| 3 | Les dispositions sont **neutres** : aucune spécification technique, seulement des exigences matérielles sur le registre et le transfert | Pas de technologie imposée | [Extrait, doctrine] | [Pestalozzi DE](https://pestalozzilaw.com/de/insights/aktuell/legal-insights/registerwertrechte-einfuhrung-von-dlt-aktien-der-schweiz/) |
| 4 | L'art. 973d al. 2 **laisse ouvertes la structure et la conception** du registre | Pas d'architecture imposée | [Extrait, doctrine] | [Pestalozzi EN](https://pestalozzilaw.com/en/insights/news/legal-insights/ledger-based-securities-introduction-dlt-shares-switzerland/) |
| 5 | Selon le Conseil fédéral, des **DLT à cercle restreint de participants, comme Corda et Hyperledger Fabric** (*permissioned*), peuvent remplir les exigences, au même titre que des systèmes ouverts comme Ethereum | **Option (c) expressément envisagée** | [Extrait, doctrine citant le message] | [Pestalozzi EN](https://pestalozzilaw.com/en/insights/news/legal-insights/ledger-based-securities-introduction-dlt-shares-switzerland/) |
| 6 | Transfert « en principe sans une **instance centrale de confiance qui gère seule le registre** » (BBl 2020, p. 278) | **Vise exactement le modèle (a)** | [Extrait], attribué au message | [OAPEN](https://library.oapen.org/bitstream/handle/20.500.12657/52167/external_content.pdf?sequence=1&isAllowed=y) |
| 7 | Les autres solutions d'intégrité doivent **au moins** atteindre le standard de la gestion commune par plusieurs participants indépendants | Barre d'équivalence pour (a) et (b) | [Extrait], attribué au message | [Message, version préimprimée](https://www.newsd.admin.ch/newsd/message/attachments/59304.pdf) |
| 8 | La disposition par les créanciers à l'exclusion du débiteur **distingue ce régime des registres purement centraux, déjà régis par la LTI** | Le « central » relève des titres intermédiés et d'un dépositaire réglementé | [Extrait, doctrine], probablement repris du message | [Pestalozzi EN](https://pestalozzilaw.com/en/insights/news/legal-insights/ledger-based-securities-introduction-dlt-shares-switzerland/) |

**Lecture d'ensemble.** Le droit suisse connaît déjà un registre central qui fait foi : **le titre intermédié**, tenu par un dépositaire réglementé (LTI) [Connaissance]. L'art. 973d crée l'autre voie, **sans intermédiaire de confiance**. Une base tenue par un seul opérateur non réglementé n'entre dans aucune des deux. Elle n'a ni la garantie réglementaire de la LTI, ni la confiance répartie de l'art. 973d [HYPOTHÈSE juridique raisonnée].

**Comparaisons utiles (droit étranger, pour la lecture seulement).**
- **Allemagne (eWpG)** : la loi distingue le registre central, tenu par un dépositaire central ou un dépositaire et **admis sur une base de données classique**, du registre de crypto-titres, qui exige un système d'enregistrement infalsifiable, en pratique une blockchain ([anwalt.de](https://www.anwalt.de/rechtstipps/zentralregisterwertpapier-vs-kryptowertpapier-welche-form-fuer-welchen-emittenten-267579.html)) [Extrait, secondaire]. Là-bas, la base centrale n'est admise que tenue par un intermédiaire réglementé.
- **Autriche (projet DiWpG, 2025)** : le projet fixe des objectifs neutres, atteignables **« soit avec un teneur de registre de confiance, soit avec un système DLT »**, en s'inspirant en partie de l'art. 973d ([WU Wien](https://www.wu.ac.at/fileadmin/wu/d/i/privatrecht/Kalss_Mitarbeiter/DiWpG/OpenAccess_GesRZ_2025_03_Diskussionsentwurf_DiWpG_Teil_I.pdf)) [Extrait]. **Le texte suisse ne contient pas cette ouverture au teneur de confiance.** C'est un argument a contrario, faible mais réel [H].

**Position.** La base centrale est **ouverte en droit, fermée en pratique** quand un seul acteur l'opère. Seule une base centrale dont l'opérateur ne peut ni écrire seul ni empêcher la vérification serait défendable. Elle ne serait alors plus vraiment « centrale ».

---

## 4. Question 3 : le débiteur ou l'opérateur peut-il écrire seul ? Les opérations sans le créancier

### 4.1 Principe

- **Débiteur (direction de fonds).** La lettre est claire : le registre ne lui confère **aucun** pouvoir de disposer des droits des créanciers. Une clé d'administration qui lui permet de déplacer ou de détruire des parts à volonté viole le ch. 1 [Extrait, voir §2.2 ; application : H].
- **Opérateur (plateforme).** La lettre n'exclut que le débiteur. **L'opérateur ne doit pas non plus pouvoir écrire seul**, pour trois raisons :
  1. il agit pour le débiteur, qui répond de l'organisation du registre (al. 3). Ses pouvoirs techniques sont donc imputables au débiteur, par analogie avec l'auxiliaire (art. 101 CO) [Connaissance ; application : H] ;
  2. le message écarte l'« instance centrale de confiance qui gère seule le registre » (§3, n° 6) ;
  3. le ch. 2 protège contre **toute** modification non autorisée, y compris celle de l'opérateur.
- **Création et radiation.** Émettre des parts n'est pas disposer du droit d'un créancier. La banque dépositaire peut créer des parts sur le registre (point 9). Le **rachat ordinaire** doit partir d'un transfert signé par le détenteur [H].

### 4.2 Opérations légitimes sans le créancier

La pratique de place admet des fonctions de l'émetteur. Le standard CMTA prévoit le gel, la destruction (*burn*) et le transfert forcé ([CMTAT](https://cmta.ch/standards/cmta-token-cmtat)). Il réserve en principe **le gel à une décision formelle d'une autorité compétente** ([CMTA, standard actions 2024, DE](https://cmta.ch/content/cd0a3a39e4156130adc03d4e72b12033/cmta-standard-fur-die-tokenisierung-von-beteiligungspapieren-von-schweizer-gesellschaften-12-september-2024.pdf)) [Extrait]. Les guides de place citent la liste blanche, le gel d'adresses et la récupération de tokens perdus parmi les interventions possibles sur le registre ([Aurum](https://aurum.law/newsroom/Guide-to-Swiss-Ledger-Based-Securities-Tokenised-Stocks-Debt-and-RWAs)) [Extrait, secondaire]. **Aucune jurisprudence ne valide ces fonctions au regard du ch. 1.**

| Opération | Fondement | Compatible avec le ch. 1 ? | Condition proposée [H] |
|---|---|---|---|
| **Rachat forcé** (clause du contrat de fonds) | Contenu du contrat, art. 35a OPCC (point 9) [Extrait] | **Oui si encadré.** C'est l'exécution d'un droit contractuel préexistant, consigné (ch. 3) | Cas limitatifs dans le contrat et la convention. **Double signature indépendante** (banque dépositaire + direction, ou + plateforme). Journal et notification au détenteur. Paiement du prix selon l'art. 973e |
| **Gel judiciaire ou administratif** (séquestre, saisie pénale, sanctions) | Ordre d'une autorité | **Oui** : le débiteur n'y dispose pas de son propre chef ([CMTA](https://cmta.ch/content/cd0a3a39e4156130adc03d4e72b12033/cmta-standard-fur-die-tokenisierung-von-beteiligungspapieren-von-schweizer-gesellschaften-12-september-2024.pdf)) | Seulement sur décision écrite. Gel sans transfert. Levée sur décision |
| **Perte de clé** | **Art. 973h CO** : le juge annule le droit-valeur si l'ayant droit rend vraisemblables son pouvoir de disposition initial et sa perte. Il peut alors faire valoir son droit hors registre ou exiger du débiteur, à ses frais, un **nouveau droit-valeur inscrit**. Les parties peuvent **simplifier la procédure** (moins de publications, délais plus courts) ([projet 19.074, FR](https://www.parlament.ch/centers/eparl/curia/2019/20190074/S2%20F.pdf) ; [Aurum](https://aurum.law/newsroom/Guide-to-Swiss-Ledger-Based-Securities-Tokenised-Stocks-Debt-and-RWAs)) [Extrait, **texte du projet**] | **Oui par la voie légale** (jugement, puis réémission). **Une récupération purement contractuelle, sans juge, est risquée** : la loi permet d'alléger la procédure, pas de la supprimer [H] | Utiliser l'art. 973h avec la procédure simplifiée inscrite dans la convention. Pour les banques, prévenir la perte côté créancier : HSM, multisignature, dépositaire. Une récupération organisée par le créancier ne touche pas au ch. 1 |
| **Annulation par jugement** (art. 973h) | Jugement | **Oui** : base légale expresse | Exécution par la banque dépositaire sur présentation du jugement |
| **Succession** | Succession universelle de plein droit (art. 560 CC) [Connaissance] | **Oui** : le droit passe par la loi, le registre se met à jour ensuite | Mise à jour sur certificat d'héritier. Sans accès à la clé, art. 973h. Cas rare : les détenteurs sont des banques [H] |
| **Faillite ou liquidation d'une banque détentrice** | Une disposition est opposable si elle est devenue irrévocable selon les règles du registre et a été inscrite dans les 24 heures ([Pestalozzi EN](https://pestalozzilaw.com/en/insights/news/legal-insights/ledger-based-securities-introduction-dlt-shares-switzerland/)) [Extrait] | Sans objet pour le ch. 1, mais **le registre doit définir un moment d'irrévocabilité** | Règle de finalité écrite dans la convention |
| **Correction d'erreur opérationnelle** | Aucun fondement spécifique | **Non**, s'il s'agit d'un retour arrière par l'opérateur | Écriture compensatoire signée par les parties concernées |

**Règle de conception juridique** [H] : chaque fonction d'exception (1) figure dans une liste fermée de la convention d'inscription, (2) se déclenche sur un événement objectif (décision d'autorité, jugement, cas contractuel), (3) **ne peut pas être exécutée par le débiteur seul ni par l'opérateur seul**, et (4) est journalisée et notifiée au détenteur. La doctrine n'a pas encore tranché la tension entre ces fonctions et le ch. 1. Le point doit figurer dans l'avis de droit (§10).

---

## 5. Question 4 : « sans intervention d'un tiers », preuve fournie ou nœud propre ?

**Ce que dit le texte.** Le créancier doit pouvoir (a) **consulter** les informations et inscriptions qui le concernent et (b) **vérifier l'intégrité** de ce contenu sans le concours d'un tiers, débiteur compris (§2.2). Le texte n'exige pas que le créancier **détienne une copie** du registre ni qu'il **opère un nœud**. **Aucune source trouvée ne tranche la question de la preuve fournie par l'opérateur.** Ce qui suit est mon interprétation [HYPOTHÈSE juridique raisonnée].

**Critère proposé.** La vérification doit être **autonome et opposable à l'opérateur**, c'est-à-dire :
1. **Calcul local.** Le créancier vérifie lui-même, avec un outil qu'il maîtrise (ou qui est ouvert), sans dépendre de l'honnêteté de l'opérateur.
2. **Référence non altérable.** La référence de comparaison (racine, état, historique) ne peut être ni modifiée ni présentée différemment à chaque créancier (équivocation) par l'opérateur seul.
3. **Accès indépendant.** Le créancier obtient ses données sans dépendre du bon vouloir de l'opérateur : au moins une source indépendante existe.
4. **Historique complet.** Il vérifie **tout le contenu qui le concerne**, pas seulement un solde. Une preuve d'inclusion ne prouve pas l'absence de débit non autorisé : il faut un historique en ajout seul, vérifiable dans sa continuité.

| Moyen de vérification | Critère 1 | Critère 2 | Critère 3 | Critère 4 | Suffit pour le ch. 4 ? |
|---|---|---|---|---|---|
| Écran ou API de l'opérateur | ✗ | ✗ | ✗ | ✗ | **Non** |
| Preuve (Merkle, signature) fournie par l'opérateur, racine publiée par lui seul | ✓ | ✗ (équivocation possible) | ✗ | ~ | **Non** |
| Preuve fournie par l'opérateur + racine **ancrée sur une blockchain publique** | ✓ | ✓ | ✗ (l'opérateur peut ne pas répondre) | ~ (selon la structure) | **Incertain** |
| Idem + **copie ou accès garanti chez un tiers indépendant** (banque dépositaire) ou envoi automatique et irrévocable des preuves | ✓ | ✓ | ✓ | ✓ si historique complet | **Probablement oui** |
| Lecture sur un **nœud d'un participant indépendant** de l'opérateur, ou sur son propre nœud (DLT à permission) | ✓ | ✓ | ✓ | ✓ | **Oui** |
| Nœud propre sur une blockchain publique | ✓ | ✓ | ✓ | ✓ | **Oui** |

**Position.**
- **Un nœud propre n'est pas une exigence légale.** Le créancier doit en revanche **pouvoir** vérifier sans l'opérateur, et cette possibilité doit exister **en droit** (convention) et **en fait** (technique).
- Lire sur une blockchain publique via un explorateur tiers est admis en pratique parce que le créancier *pourrait* faire tourner son nœud [H]. Par analogie, sur une DLT à permission, **le créancier doit avoir le droit et le moyen d'opérer un nœud ou de lire sur celui d'un participant indépendant**.
- Une preuve fournie par la seule plateforme, sans ancrage ni source indépendante, **ne suffit pas**.

---

## 6. Question 5 : responsabilité (art. 973i CO) et effet du choix d'architecture

### 6.1 Le régime

| Règle | Contenu | Statut | Source |
|---|---|---|---|
| Art. 973i al. 1 | Le débiteur d'un droit-valeur inscrit **« ou d'un droit offert comme tel »** communique à chaque acquéreur le contenu du droit, le fonctionnement du registre et les mesures de protection de son fonctionnement et de son intégrité | [Extrait, **texte du projet**] | [Projet 19.074, FR](https://www.parlament.ch/centers/eparl/curia/2019/20190074/S2%20F.pdf) |
| Art. 973i al. 2 | Il répond du dommage causé par des informations **inexactes, trompeuses ou contraires aux exigences légales**, sauf s'il prouve avoir agi avec la diligence requise | [Extrait] | [Projet 19.074, FR](https://www.parlament.ch/centers/eparl/curia/2019/20190074/S2%20F.pdf) ; [Schulthess, mise à jour 973a–973i](https://zgbor.schulthess.info/de/update-service/obligationenrecht/die-wertpapiere/art-973a-973c-973d-973i-1153-1153a-or) |
| Art. 973i al. 3 | **Toute convention qui limite ou exclut cette responsabilité est nulle** | [Extrait] | idem |
| Art. 973d al. 3 | Obligation du débiteur : organisation conforme et fonctionnement en tout temps | [Extrait] | [Pestalozzi EN](https://pestalozzilaw.com/en/insights/news/legal-insights/ledger-based-securities-introduction-dlt-shares-switzerland/) |
| Art. 973e | Le débiteur est libéré s'il paie la personne désignée par le registre, **sauf dol ou faute grave**. L'acquéreur de bonne foi est protégé | [Extrait, projet] | [Projet 19.074, FR](https://www.parlament.ch/centers/eparl/curia/2019/20190074/S2%20F.pdf) |

### 6.2 Qui répond

| Acteur | Fondement | Exposition [H, sauf mention] |
|---|---|---|
| **Direction de fonds (débiteur)** | Art. 973i (information), art. 973d al. 3 (organisation), responsabilité contractuelle envers les investisseurs (art. 97 CO) et pour ses auxiliaires (art. 101 CO), responsabilité LPCC (art. 145) [Connaissance] | **Responsable en premier rang, sans exclusion possible.** La formule « droit offert comme tel » la rend responsable **même si le registre ne qualifie pas** |
| **Plateforme (opérateur)** | Contrat avec la direction (recours), éventuellement responsabilité délictuelle (art. 41 CO) envers les détenteurs [Connaissance] | Recours de la direction, plafonné par contrat entre professionnels. La direction exigera garantie et assurance |
| **Banque dépositaire** | Ses tâches d'émission et de rachat (art. 73 LPCC, point 9), ses propres actes sur le registre | Responsable de ses signatures et contrôles |
| **Opérateurs de nœud tiers** (option c) | Convention de gouvernance du réseau | Responsables de leur nœud. Responsabilité répartie par contrat |

### 6.3 Ce que change l'architecture

| Risque juridique | Base centrale (a, b) | DLT multi-nœuds (c) |
|---|---|---|
| Information « contraire aux exigences légales » (973i) si la qualification est contestée | **Élevé** : la non-qualification est plausible, donc la description du registre comme « droit-valeur inscrit » devient fautive | **Faible** : option envisagée par le message |
| Preuve de la diligence (973i al. 2) | Difficile si la direction a choisi un schéma notoirement discuté | Plus facile : choix aligné sur l'exemple légal et sur un avis de droit |
| Libération du débiteur (973e) | Contestable si l'opérateur, auxiliaire du débiteur, peut modifier le registre : on pourra plaider la **faute grave** du débiteur | Mieux défendue : l'état du registre ne dépend pas d'un seul acteur |
| Défaillance unique (fonctionnement « en tout temps », al. 3) | Point unique de défaillance porté par un seul prestataire | Répartie. Le séquenceur reste critique |
| Fraude interne de l'opérateur | Possible, seulement détectée en (b) | Empêchée si aucune écriture n'est possible sans signatures |
| Complexité et erreurs de code | Faible | Plus élevée : relève du devoir de diligence technique |

**Position.** La décentralisation ne supprime pas la responsabilité de la direction. Elle **déplace le risque** d'un risque de **qualification**, qui est binaire, qui touche tout le stock de parts et que la loi ne permet pas d'exclure, vers un risque **opérationnel**, qui se gère par contrat et par assurance. C'est un meilleur risque.

---

## 7. Question 6 : conséquences si le registre ne qualifie pas

| Effet | Détail | Statut / source |
|---|---|---|
| **Qualification** | Si l'une des exigences de l'al. 2 manque, le droit inscrit **n'est pas un droit-valeur inscrit**, mais **au mieux un droit-valeur simple ou une simple créance** | [Extrait, doctrine] ([von der Crone / Baumgartner](https://www.ius.uzh.ch/dam/jcr:70677f21-bf08-4338-9706-57bd6abbe2f9/SZW_4_2020_vonderCrone&Baumgartner.pdf), attribution à confirmer). Cohérent avec l'al. 1 ch. 1 (« conformément à l'al. 2 ») [Connaissance] |
| **Transfert** | Le droit-valeur simple (art. 973c) se transfère par **déclaration écrite de cession** [Connaissance]. La forme écrite exige une signature manuscrite ou électronique qualifiée (art. 14 CO) [Connaissance]. **Une signature cryptographique ordinaire sur le registre ne suffit pas** [H]. Les transferts inscrits sur la plateforme pourraient donc être **inefficaces** | [Connaissance] / [H] |
| **Légitimation et libération** | Pas d'effet de l'art. 973e : le débiteur qui paie le détenteur inscrit **n'est pas libéré de plein droit**. Risque de **double paiement** si le titulaire réel diffère | [Extrait, doctrine] |
| **Bonne foi de l'acquéreur** | Pas de protection : l'acquéreur supporte le vice de la chaîne de transferts | [Extrait] |
| **Droits des investisseurs** | **Ils ne disparaissent pas** : la part reste une créance contre la direction de fonds (LPCC, point 9). C'est la **chaîne de propriété** qui devient incertaine | [H] |
| **Statut de valeur mobilière TRD** | Les règles sur les valeurs mobilières TRD (LIMF) et l'admission sur un système de négociation TRD supposent en principe la qualification | [Connaissance], à vérifier |
| **Responsabilité** | Art. 973i (« droit offert comme tel ») : la direction répond de l'information inexacte. La plateforme répond par contrat envers elle | [Extrait] |
| **Repli** | Conversion en titres intermédiés via SIX SIS ou une banque (LTI) : on retombe sur le modèle actuel | Point 9, §2.5 |
| **Qui tranche** | **Aucune autorité ne certifie un registre à l'avance.** La qualification se décide après coup, devant un juge civil, souvent lors d'un litige (faillite d'une banque, succession, saisie) | [Connaissance] |

**Effet sur le pitch.**
- La promesse « un registre qui fait foi, sans réconciliation » **repose entièrement sur la qualification**. Sans elle, le registre FundChain redevient un livre de plus à réconcilier : c'est la leçon de Project Ion (rapport §2.1).
- Annoncer des « droits-valeurs inscrits » sur un registre qui ne qualifie pas serait **trompeur** au sens de l'art. 973i.
- L'argument juridique est donc un argument de vente seulement si l'architecture est la plus sûre (option c).

---

## 8. Question 7 : verdict par option et minimum juridiquement sûr

| Option | Verdict | Justification | Ce qui la ferait basculer |
|---|---|---|---|
| **(a) Base centrale pure** | **Ne qualifie pas** | Ch. 1 : l'opérateur, auxiliaire du débiteur, dispose seul. Le message écarte l'« instance centrale de confiance qui gère seule le registre ». Ch. 2 : aucune protection contre l'opérateur. Ch. 4 : la vérification dépend de l'opérateur. Le « purement central » relève de la LTI | Rien, sauf à devenir (b) ou (c) |
| **(b) Base centrale + clés des créanciers + journal signé + ancrage public** | **Incertain** | Le ch. 1 progresse (le créancier signe) sans être acquis : l'opérateur peut encore écrire, et l'ancrage ne fait que révéler la fraude. Ch. 2 : la détection est probablement en deçà du standard « gestion commune » exigé selon le message. Ch. 4 : l'accès aux données dépend de l'opérateur. **Aucune doctrine ne valide ce modèle** | Vers « qualifie probablement » si un **tiers indépendant** (banque dépositaire) **cosigne chaque changement d'état** et **tient une copie** consultable par les créanciers. C'est alors une DLT à deux nœuds, qui ne dit pas son nom |
| **(c) DLT à permission multi-nœuds** | **Qualifie probablement** | Le message envisage les DLT à permission (Corda, Fabric). La gestion commune est l'exemple légal du ch. 2. Les signatures des créanciers remplissent le ch. 1. La lecture sur un nœud indépendant remplit le ch. 4 | Vers « incertain » si la plateforme héberge **tous** les nœuds **et** détient les clés, ou si son séquenceur peut écrire sans signatures |
| **(d) Blockchain publique** | **Qualifie** | Cas d'école de la doctrine et du message. Pratique des actions tokenisées (CMTA) | Ne bascule pas sur l'art. 973d. **Écartée pour d'autres motifs** : secret bancaire (art. 47 LB) et protection des données, visibilité des positions entre banques concurrentes (point 12) [Connaissance / H] |

### Minimum juridiquement sûr : option (c), avec sept conditions juridiques

Ces conditions s'adressent à l'architecte. Elles ne prescrivent pas de technologie [HYPOTHÈSE juridique, à faire valider par l'avis de droit C2 du point 9].

| # | Condition | Exigence couverte |
|---|---|---|
| J1 | **Aucune modification d'un solde sans la signature du créancier** (ou de son dépositaire), sauf fonctions d'exception du §4.2 | Ch. 1 |
| J2 | **Aucune clé de créancier chez la plateforme ni chez la direction de fonds.** Les banques signent elles-mêmes ou via un dépositaire qu'elles choisissent | Ch. 1 (et point 9, C5) |
| J3 | **Au moins trois opérateurs de nœud indépendants les uns des autres** : la plateforme, la banque dépositaire et au moins un acteur côté créanciers (banque distributrice ou tiers neutre). Aucun ne peut valider seul un changement d'état. Le séquenceur ou notaire de la plateforme **ordonne sans pouvoir créer ni modifier** | Ch. 2 |
| J4 | **Fonctions d'exception** (rachat forcé, gel, art. 973h) : liste fermée dans la convention, déclenchement objectif, **double signature indépendante** dont jamais le débiteur seul, journal et notification | Ch. 1 |
| J5 | **Chaque créancier a le droit contractuel et le moyen technique** de lire l'historique complet qui le concerne sur un nœud qui n'est pas celui de la plateforme, ou sur son propre nœud, et de le vérifier localement | Ch. 4 |
| J6 | Contrat de fonds, convention d'inscription, description du registre et règle d'irrévocabilité **liés au registre par empreinte et versionnés** | Ch. 3, art. 973f |
| J7 | Information aux acquéreurs (art. 973i) **fidèle à l'architecture réelle**, plan de continuité et de migration. La direction exige de la plateforme garantie et assurance | Al. 3, art. 973i |

**Ce que cela implique pour le périmètre de la blockchain.** Le droit impose une DLT (ou un équivalent démontré) **pour le registre des parts seulement**. Le moteur d'ordres, les cut-offs, les rétrocessions et le reporting ne créent pas de droit : ils peuvent rester en base centrale (rapport §2.4) [H]. Le modèle hybride du rapport tient juridiquement, **à condition que J2, J3 et J5 soient respectés**.

---

## 9. À relire sur les sources primaires

Aucune source n'a été lue en entier. Par ordre de priorité :

| # | Texte | Point à vérifier | Statut | Lien |
|---|---|---|---|---|
| 1 | **Message du Conseil fédéral 19.074** (BBl 2020 233 ; FF 2020 223 [Connaissance]), commentaire de l'art. 973d | Lettre exacte et page de : « instance centrale de confiance qui gère seule le registre » (BBl 2020, p. 278 ?) ; « autres solutions au moins à ce standard de sécurité » ; mention de Corda et Fabric ; distinction avec la LTI ; commentaire du ch. 4 | [Extrait] | [Message DE](https://www.newsd.admin.ch/newsd/message/attachments/59301.pdf) ; [version préimprimée](https://www.newsd.admin.ch/newsd/message/attachments/59304.pdf) ; [FR provisoire](https://www.newsd.admin.ch/newsd/message/attachments/59302.pdf) ; [Weblaw](https://bundesblatt.weblaw.ch/?bbl_id=29802&format=pdf&method=dump) |
| 2 | **Circulaire SBF 2021/01** | Position sur les registres centraux, les fonctions de l'émetteur et le ch. 4 | Non lue | [SBF DE](https://new.blockchainfederation.ch/wp-content/uploads/2024/04/Zirkular-2021_01-Registerwertrechte.pdf) ; [SBF EN](https://blockchainfederation.ch/wp-content/uploads/2024/07/SBF-2021-01-Ledger_Based_Securities_2021-10-12.pdf) |
| 3 | Art. 973c à 973i CO (texte en vigueur) | Lettre finale (les extraits viennent en partie du **projet** de 2019) ; numérotation ; procédure simplifiée de l'art. 973h ; formule « droit offert comme tel » de l'art. 973i | [Extrait] / [Connaissance] | [Fedlex CO](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr) |
| 4 | von der Crone / Baumgartner, SZW 2020 | Attribution des formules « sans tiers, y compris le débiteur » et « au mieux un droit-valeur simple » | [Extrait] | [UZH](https://www.ius.uzh.ch/dam/jcr:70677f21-bf08-4338-9706-57bd6abbe2f9/SZW_4_2020_vonderCrone&Baumgartner.pdf) |
| 5 | Mauchle, *Die Registrierungsvereinbarung* ; Bandilang / Mauchle / Spörle, GesKR 2021 | Pouvoir de disposition délégable à l'émetteur ; fonctions de gel et de récupération | [Extrait] | [Baker McKenzie](https://www.bakermckenzie.com/-/media/files/people/mauchle-yves/die-registrierungsvereinbarung--insbesondere-bei-tokenisierten-forderungsre.pdf?sc_lang=en&rev=ea0d351a749d47a5bb0b3fd6159b9bb3&hash=08E6B6CBFEE013A48524A4A3C5384F62) ; [GesKR](https://www.bakermckenzie.com/-/media/files/people/mauchle-yves/bandilang-mauchle-spoerle-geskr-2021-238.pdf?rev=bedfc850ba444147b839c08ac543f79c&sc_lang=en&hash=EDB08E0F4135CF4F7AC9B1B41DD1F5DD) |
| 6 | Pestalozzi (FR/DE/EN) | Reprise exacte des passages du message (Corda, Fabric, LTI) | [Extrait] | [EN](https://pestalozzilaw.com/en/insights/news/legal-insights/ledger-based-securities-introduction-dlt-shares-switzerland/) ; [DE](https://pestalozzilaw.com/de/insights/aktuell/legal-insights/registerwertrechte-einfuhrung-von-dlt-aktien-der-schweiz/) |
| 7 | Standards CMTA (actions 2024, titres de dette 2025, CMTAT) | Justification de la compatibilité des fonctions de l'émetteur (gel, burn, transfert forcé) avec le ch. 1 | [Extrait] | [CMTA actions DE](https://cmta.ch/content/cd0a3a39e4156130adc03d4e72b12033/cmta-standard-fur-die-tokenisierung-von-beteiligungspapieren-von-schweizer-gesellschaften-12-september-2024.pdf) ; [CMTA actions EN](https://cmta.ch/content/e4984caa761352d4cfc901ba78941142/cmta-standard-for-the-tokenization-of-equity-securities-en.pdf) |
| 8 | Doctrine en français : Iffland (CEDIDAC 107), Vraca (QFLR 2022) | Lecture romande des ch. 1 et 4 | Non lue | [Iffland](https://www.lenzstaehelin.com/fileadmin/user_upload/Iffland_La_tokenisation_des_valeurs_mobilieres_CEDIDAC_107.pdf) ; [Vraca](https://student.unifr.ch/quid/fr/assets/public/files/publications/QFLR_2:2022_Vraca.pdf) |
| 9 | *Elektronische Wertpapiere* (OAPEN), partie suisse | Citation exacte du message, p. 278 | [Extrait] | [OAPEN](https://library.oapen.org/bitstream/handle/20.500.12657/52167/external_content.pdf?sequence=1&isAllowed=y) |
| 10 | Art. 973c al. 4, 14 et 101 CO ; art. 560 CC ; art. 145 LPCC ; art. 47 LB | Cession écrite, signature qualifiée, auxiliaire, succession, responsabilité LPCC, secret bancaire | [Connaissance] | [Fedlex CO](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr) |
| 11 | Commentaires (Basler Kommentar, Commentaire romand, CHK) sur l'art. 973d | Lecture des ch. 1, 2 et 4 ; base centrale | Non trouvés en accès libre | Bibliothèque juridique |

---

## 10. Questions pour un avocat suisse ou la FINMA

**À un cabinet suisse (à intégrer à l'avis de droit C2 du point 9).**
1. Une base de données centrale opérée par un prestataire du débiteur peut-elle remplir l'art. 973d al. 2 ch. 1, 2 et 4 ? Le message (BBl 2020, p. 278) l'exclut-il en visant « l'instance centrale de confiance qui gère seule le registre » ?
2. L'exclusion du débiteur (ch. 1) s'étend-elle à l'opérateur technique mandaté par lui, par imputation de type art. 101 CO ?
3. Quel est le seuil du ch. 2 ? Une protection par **détection** (journal chaîné, ancrage public, audit) équivaut-elle à la « gestion commune par plusieurs participants indépendants », ou faut-il une **prévention** (aucune écriture possible par un seul acteur) ?
4. Ch. 4 : une preuve cryptographique fournie par l'opérateur et vérifiable contre une racine ancrée publiquement suffit-elle ? Faut-il un accès à un nœud indépendant ? Combien de nœuds, et quel degré d'indépendance (la direction de fonds et sa banque dépositaire comptent-elles comme deux participants indépendants) ?
5. Le rachat forcé, le gel sur décision d'autorité et une procédure d'annulation simplifiée (art. 973h) exécutés par double signature (banque dépositaire + direction) sont-ils compatibles avec le ch. 1 ? Une récupération de clé purement contractuelle, sans juge, l'est-elle ?
6. Si le registre ne qualifie pas, les transferts inscrits valent-ils au moins cession (art. 973c, forme écrite) ? Une clause de repli dans le contrat de fonds peut-elle limiter les dégâts ?
7. Quelle formulation de l'information (art. 973i) protège la direction de fonds sans induire en erreur sur le degré de décentralisation ?

**À la FINMA (par la direction de fonds et la banque dépositaire, condition C6 du point 9).**
1. La FINMA a-t-elle des attentes sur l'architecture d'un registre de parts tenu par un prestataire externalisé de la direction de fonds (externalisation, continuité, garde des clés) ?
2. La banque dépositaire peut-elle opérer un nœud validant et cosigner les fonctions d'exception sans adapter son autorisation ?
3. Les parts d'un L-QIF en droits-valeurs inscrits sur une DLT à permission seraient-elles admissibles comme valeurs mobilières TRD sur un système de négociation TRD (perspective d'un marché secondaire) ?

**À la Swiss Blockchain Federation et à la CMTA.**
1. La circulaire 2021/01 traite-t-elle des registres centraux ou hybrides (base + ancrage) ? Une mise à jour est-elle prévue ?
2. La CMTA envisage-t-elle un standard pour les parts de fonds suisses, avec un modèle de convention d'inscription et des fonctions d'exception adaptées au rachat forcé ?
