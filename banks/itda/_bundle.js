window.QCM_BANK = window.QCM_BANK || {};
window.QCM_BANK["itda"] = {
 "id": "itda",
 "titre": "IT & Data Analytics — Module 6 (ExpertSuisse)",
 "modules": [
  {
   "id": "M1",
   "titre": "1 · Importance IT & ISA-CH 315 (Révisée)",
   "questions": [
    {
     "id": "IT-001",
     "champ": "Importance de l'IT dans l'audit",
     "memento": "§1.1",
     "difficulte": 1,
     "question": "Pourquoi l'informatique gagne-t-elle sans cesse en importance dans l'audit ?",
     "options": [
      "Avec l'IT, plus aucune vérification des données d'entrée ne doit être effectuée",
      "L'extraction des données ne prend que quelques secondes, même pour de très grands volumes",
      "La connexion de l'ERP du client avec l'ERP de l'auditeur permet un meilleur échange des données",
      "Le mode de fonctionnement de l'entreprise auditée dépend de processus d'affaires informatisés ou entièrement automatisés"
     ],
     "correct": 3,
     "explications": [
      "Faux : c'est l'inverse — plus les processus sont automatisés, plus la vérification des données d'entrée et les contrôles IT gagnent en importance (mémento §1.1).",
      "Faux : la rapidité d'extraction est un avantage pratique de l'IT, pas la raison de son importance pour l'audit — elle ne crée aucun risque d'anomalie à couvrir.",
      "Faux : il n'existe pas de connexion entre l'ERP du client et un « ERP de l'auditeur » ; ce distracteur est fantaisiste (mémento §1.1, piège).",
      "Exact : le fonctionnement même de l'entité repose sur des processus d'affaires informatisés ou entièrement automatisés — l'information financière naît et se traite dans des systèmes, que l'auditeur doit comprendre pour évaluer correctement le risque (ISA-CH 315 (Révisée) ; mémento §1.1)."
     ],
     "piege": "avantages IT pris pour causes"
    },
    {
     "id": "IT-002",
     "champ": "Conséquences de la 315R",
     "memento": "§1.2",
     "difficulte": 2,
     "question": "Quelles sont les conséquences de l'ISA-CH 315 (Révisée) sur l'audit des états financiers ?",
     "options": [
      "Les auditeurs doivent systématiquement effectuer des procédures de test liées à la cybersécurité",
      "L'audit informatique gagne en importance",
      "Les contrôles généraux informatiques (ITGC) doivent désormais toujours être vérifiés, même en l'absence de contrôles d'application",
      "Les spécialistes ne sont plus autorisés à procéder à l'audit informatique, entièrement réalisé par l'expert-comptable"
     ],
     "correct": 1,
     "explications": [
      "Faux : la 315R n'impose aucun test systématique de cybersécurité ; un cyber-risque n'est pertinent que s'il peut avoir un effet potentiellement significatif sur les états financiers, apprécié par jugement professionnel (cours ch. 01).",
      "Exact : la révision de la norme a considérablement valorisé l'audit informatique — l'auditeur doit comprendre en profondeur l'environnement IT (applications, infrastructure, processus informatiques, personnel ; mémento §1.2).",
      "Faux : les ITGC ne sont pas « toujours » à vérifier — l'approche est ciblée sur les applications sujettes aux risques ; en l'absence d'ITAC identifié, la vérification se limite à l'existence du SCI (NAS-CH 890 ; mémento §3.4).",
      "Faux : le recours à un spécialiste IT reste prévu lorsque l'environnement est complexe (ISA-CH 620) ; la responsabilité de l'opinion demeure chez l'auditeur, mais les spécialistes ne sont nullement écartés."
     ],
     "piege": "obligations systématiques inventées"
    },
    {
     "id": "IT-003",
     "champ": "Risques d'audit liés à l'IT",
     "memento": "§1.3",
     "difficulte": 2,
     "question": "Quels risques d'audit découlent du recours aux technologies de l'information par le client audité ?",
     "options": [
      "Des changements non autorisés apportés aux systèmes ou aux programmes",
      "Les sauvegardes ne sont pas effectuées",
      "Les imprimantes ne fonctionnent pas",
      "Des mesures de sécurité élevées pour l'accès au système ERP"
     ],
     "correct": 0,
     "explications": [
      "Exact : les changements non autorisés apportés aux systèmes ou aux programmes sont l'exemple canonique de risque lié au recours à l'IT — catégorie « gestion des modifications » (ISA-CH 315 (Révisée), Annexe 6 ; mémento §1.3).",
      "Faux ici : une sauvegarde non effectuée est une faiblesse d'exploitation IT qui menace la disponibilité des données, mais elle ne fausse pas par elle-même l'information financière produite — ce n'est pas le risque d'anomalie recherché dans cette question à réponse unique.",
      "Faux : une panne d'imprimante est un incident matériel sans effet sur la fiabilité de l'information financière — ce n'est pas un risque d'audit (mémento §1.1, piège).",
      "Faux : des mesures de sécurité élevées réduisent le risque au lieu de le créer — le distracteur inverse la logique (mémento §1.1)."
     ],
     "piege": "incident matériel ≠ risque d'audit"
    },
    {
     "id": "IT-004",
     "champ": "Objet et diligences de la 315R",
     "memento": "§1.2",
     "difficulte": 2,
     "question": "Au sujet de l'ISA-CH 315 (Révisée), quelles affirmations sont exactes ?",
     "options": [
      "Son objet est la compréhension de l'entité et de son environnement afin d'identifier et d'évaluer les risques d'anomalies significatives (RAS).",
      "L'auditeur identifie les applications informatiques pertinentes et les autres aspects pertinents de l'environnement IT dont l'utilisation comporte des risques.",
      "L'auditeur doit acquérir une compréhension des activités de traitement de l'information de l'entreprise, y compris ses données et informations.",
      "La norme porte sur le contrôle et l'évaluation de l'efficacité opérationnelle du SCI, en particulier des contrôles généraux informatiques."
     ],
     "correct": [
      0,
      1,
      2
     ],
     "explications": [
      "Exact : l'objet de la 315R est la compréhension de l'entité et de son environnement, y compris son contrôle interne, afin d'identifier et d'évaluer les risques d'anomalies significatives au niveau des assertions (mémento §1.2).",
      "Exact : la norme impose une approche ciblée — n'examiner que les applications informatiques et les autres aspects de l'environnement IT sujets aux risques provenant du recours à l'informatique (mémento §1.2 et §2.4).",
      "Exact : l'auditeur doit acquérir une compréhension des activités de traitement de l'information de l'entité, y compris ses données et informations (ISA-CH 315 (Révisée), par. 25-26).",
      "Faux : la 315R est une norme d'évaluation des risques ; le contrôle de l'efficacité opérationnelle du SCI relève de la réponse aux risques (ISA-CH 330) et n'est requis que si l'auditeur veut s'appuyer sur les contrôles (mémento §3.4)."
     ],
     "piege": "évaluation des risques vs efficacité"
    },
    {
     "id": "IT-005",
     "champ": "Évaluation des risques IT (contrôle ordinaire)",
     "memento": "§1.2",
     "difficulte": 2,
     "question": "Vous évaluez les risques liés à l'environnement IT d'une entité soumise au contrôle ordinaire. Quelles affirmations sont correctes ?",
     "options": [
      "Les procédures d'évaluation des risques comprennent des demandes d'informations auprès de la direction, des procédures analytiques ainsi que des observations.",
      "La norme à consulter en priorité pour comprendre les systèmes d'information et les processus liés à la présentation des comptes est l'ISA-CH 315 (Révisée).",
      "Ces procédures d'évaluation des risques incluent le test unique (Test of One) des contrôles d'applications.",
      "La norme à consulter en priorité dans ce contexte est l'ISA-CH 402 (recours à une société de services)."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Exact : les procédures d'évaluation des risques comprennent les demandes d'informations auprès de la direction, les procédures analytiques et les observations/inspections (ISA-CH 315 (Révisée)).",
      "Exact : la norme pivot pour comprendre les systèmes d'information et les processus liés à la présentation des comptes est l'ISA-CH 315 (Révisée) (mémento §1.2).",
      "Faux : le « Test of One » est un test de contrôle — il vérifie l'efficacité d'un contrôle applicatif automatisé et relève de la réponse aux risques, pas de leur évaluation (mémento §4.3).",
      "Faux : l'ISA-CH 402 ne s'applique qu'en cas de recours à une société de services (externalisation) ; elle ne régit pas la compréhension générale de l'environnement IT de l'entité."
     ],
     "piege": "évaluation des risques vs tests"
    },
    {
     "id": "IT-106",
     "champ": "Les 5 dépendances informatiques",
     "memento": "§1.3",
     "difficulte": 2,
     "question": "Lors de l'évaluation des risques, vous recensez les dépendances informatiques d'un processus de vente en posant la question « What could go wrong? ». Quel ensemble correspond aux cinq types de dépendances informatiques ?",
     "options": [
      "Contrôles automatisés · rapports · calculs · interfaces · sécurité (séparation des tâches / accès restreint)",
      "Applications · bases de données · systèmes d'exploitation · réseau · postes de travail",
      "Accès · changements · opérations · développement · sauvegardes",
      "Complexité · subjectivité · changement · incertitude · biais"
     ],
     "correct": 0,
     "explications": [
      "Exact : les cinq types de dépendances informatiques sont les contrôles automatisés, les rapports, les calculs, les interfaces et la sécurité (séparation des tâches / accès restreint) ; pour chacune, la question directrice est « What could go wrong? » (support EXPERTsuisse ; mémento §1.3).",
      "Faux : cette liste correspond au modèle en couches de l'environnement IT (mémento §2.2), qui décrit l'architecture technique — pas les dépendances informatiques d'un processus.",
      "Faux : ce mélange reprend les domaines de GITC (accès, changements, opérations, développement — mémento §3.3) en y ajoutant les sauvegardes, qui sont un contrôle d'exploitation, non une dépendance informatique.",
      "Faux : complexité, subjectivité, changement, incertitude et biais sont les facteurs de risque inhérent introduits par la 315R (mémento §1.2), pas des dépendances informatiques."
     ],
     "piege": "grilles d'analyse confondues"
    }
   ]
  },
  {
   "id": "M2",
   "titre": "2 · Système d'information (ERP, couches, interfaces)",
   "questions": [
    {
     "id": "IT-006",
     "champ": "ERP : composants, processus, données de base",
     "memento": "§2.1",
     "difficulte": 1,
     "question": "Quelles affirmations sont exactes au sujet d'un système ERP ?",
     "options": [
      "La production et la comptabilité financière figurent parmi les processus/modules d'un ERP.",
      "Un « cybermodule » et une « signature numérique » sont des composants typiques d'un ERP.",
      "Les données contenant les informations de base sur les objets pertinents (produits, fournisseurs, clients, personnel) sont appelées « données de base » (Stammdaten).",
      "Le service à la clientèle ne fait pas partie des processus d'un ERP."
     ],
     "correct": [
      0,
      2
     ],
     "explications": [
      "Exact : un ERP représente l'ensemble des processus d'affaires autour d'une base de données centrale — la production et la comptabilité financière en sont des modules typiques (mémento §2.1).",
      "Faux : un « cybermodule » n'existe pas, et la signature numérique est une fonction de sécurité, pas un module ERP (mémento §2.1, piège).",
      "Exact : les données de base (Stammdaten / Master Data) décrivent les objets permanents — articles, fournisseurs, clients, comptes généraux, collaborateurs — et servent de socle à toutes les transactions (mémento §2.1).",
      "Faux : le service à la clientèle fait partie des processus d'affaires qu'un ERP couvre ; l'exclure contredit la définition même de l'ERP comme représentation des processus de l'entreprise."
     ],
     "piege": "pseudo-modules plausibles"
    },
    {
     "id": "IT-007",
     "champ": "Avantages d'un ERP",
     "memento": "§1.1",
     "difficulte": 1,
     "question": "Quel avantage découle de l'utilisation d'un système ERP ?",
     "options": [
      "Les coûts d'introduction de l'ERP peuvent être portés à l'actif et réduire le bénéfice imposable par l'amortissement",
      "Des rapports précis et complets facilitent la planification, la budgétisation et les prévisions",
      "Les tâches automatiques sont remplacées par des tâches manuelles",
      "Tous les utilisateurs de l'ERP peuvent passer des écritures"
     ],
     "correct": 1,
     "explications": [
      "Faux : l'activation et l'amortissement des coûts d'introduction relèvent du traitement comptable et fiscal de n'importe quel investissement — ce n'est pas un avantage propre à l'utilisation d'un ERP.",
      "Exact : le bénéfice-clé d'un ERP est une information centralisée, précise et complète — des rapports fiables qui facilitent la planification, la budgétisation et les prévisions (mémento §1.1).",
      "Faux : c'est l'inverse — un ERP remplace des tâches manuelles par des traitements automatisés.",
      "Faux : que tous les utilisateurs puissent passer des écritures serait une faiblesse (accès trop larges, séparation des tâches compromise), pas un avantage (mémento §1.1)."
     ]
    },
    {
     "id": "IT-008",
     "champ": "Architecture en couches",
     "memento": "§2.2",
     "difficulte": 2,
     "question": "Concernant l'architecture en couches d'un système d'information, quelles affirmations sont exactes ?",
     "options": [
      "La base de données est l'une des quatre couches du modèle (Application → Base de données → Système d'exploitation → Réseau).",
      "« Abacus » est un exemple d'application (couche Application).",
      "La « GUI » et le « front-end » constituent des couches à part entière du modèle.",
      "« SQL » et « Linux » sont des exemples d'applications financières."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Exact : le modèle distingue quatre couches empilées, de haut en bas : Application → Base de données → Système d'exploitation → Réseau/physique (mémento §2.2).",
      "Exact : Abacus est un progiciel financier, donc un exemple de la couche Application, au même titre que SAP ou Oracle Financials (mémento §2.2).",
      "Faux : la GUI et le front-end sont l'interface utilisateur de la couche Application — pas des couches à part entière du modèle.",
      "Faux : SQL est une base de données (couche 2) et Linux un système d'exploitation (couche 3) — aucun des deux n'est une application financière (mémento §2.2)."
     ],
     "piege": "composants confondus avec couches"
    },
    {
     "id": "IT-009",
     "champ": "Module SAP & interface GUI",
     "memento": "§2.3",
     "difficulte": 2,
     "question": "Au sujet de SAP et des interfaces, quelles affirmations sont exactes ?",
     "options": [
      "Une « Graphical User Interface (GUI) » est une interface utilisateur graphique.",
      "Dans le processus de vente, l'entrée du paiement (encaissement) est traitée par le module financier FI.",
      "Le module SD (Sales & Distribution) enregistre lui-même l'entrée du paiement du client.",
      "« GUI » désigne une interface de programmation (API)."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Exact : GUI (Graphical User Interface) désigne l'interface utilisateur graphique par laquelle l'utilisateur interagit avec le système (p. ex. SAP GUI).",
      "Exact : dans la chaîne order-to-cash de SAP, le module SD gère la vente et la facturation, mais l'entrée du paiement est comptabilisée dans le module financier FI (intégration SD → FI ; corrigé reconstruit par la logique d'intégration SAP, cf. divergences.md).",
      "Faux : SD (Sales & Distribution) s'arrête à la facturation ; l'encaissement est un événement comptable traité dans FI, pas dans SD.",
      "Faux : une GUI est une interface homme-machine ; une API (interface de programmation) relie des programmes entre eux — deux notions distinctes."
     ],
     "piege": "frontière modules SD / FI"
    },
    {
     "id": "IT-010",
     "champ": "Risques du transfert par interfaces",
     "memento": "§2.3",
     "difficulte": 2,
     "question": "Du point de vue de l'audit, quel risque est lié au transfert de données par une interface (notamment automatisée) ?",
     "options": [
      "Les données peuvent être transférées de manière incomplète (perte d'intégralité)",
      "La vérification de l'interface incombe exclusivement à l'auditeur informatique",
      "Une interface transmet des données chaque soir à 20 h 00",
      "Un coût d'interface élevé la rend inefficace et constitue le principal risque d'audit"
     ],
     "correct": 0,
     "explications": [
      "Exact : le risque d'audit central d'une interface est le transfert incomplet ou inexact des données d'un système à l'autre — perte d'intégralité (mémento §2.3 ; grille des risques par dépendance « interfaces », cours ch. 01).",
      "Faux : la vérification des interfaces s'inscrit dans l'audit sous la responsabilité de l'auditeur financier ; un spécialiste IT peut y contribuer (ISA-CH 620), mais elle ne lui incombe pas « exclusivement ».",
      "Faux : un transfert planifié chaque soir à 20 h 00 est une simple modalité de fonctionnement de l'interface, pas un risque.",
      "Faux : le coût d'une interface est une considération d'efficience économique, sans lien avec le risque d'anomalie significative."
     ],
     "piege": "modalité technique prise pour risque"
    },
    {
     "id": "IT-011",
     "champ": "Audit des applications/progiciels standard",
     "memento": "§2.4 · §10.3",
     "difficulte": 3,
     "question": "Concernant l'audit d'applications/progiciels standard, quelles affirmations sont correctes ?",
     "options": [
      "Le degré de paramétrage (customizing) du progiciel doit être pris en compte.",
      "Les possibilités d'extraction des données sont une considération pertinente.",
      "Pour une nouvelle version d'un progiciel standard, on peut se baser sur l'audit initial, mais les nouveaux paramètres de la version actuelle doivent être vérifiés (NAS-CH 870).",
      "Le coût et la convivialité du logiciel sont les critères déterminants de la vérification."
     ],
     "correct": [
      0,
      1,
      2
     ],
     "explications": [
      "Exact : plus un progiciel standard est paramétré (customizing), plus son traitement s'écarte du standard livré et doit être vérifié spécifiquement — le degré de paramétrage est donc à prendre en compte (mémento §2.4 et §10.3).",
      "Exact : les possibilités d'extraction des données conditionnent les analyses de l'auditeur (Data Analytics, éléments probants) — considération pertinente pour l'audit (mémento §8.1).",
      "Exact : pour une nouvelle version d'un progiciel standard, l'auditeur peut se baser sur l'audit initial en vérifiant les nouveaux paramètres de la version actuelle ; attention toutefois, le numéro « NAS-CH 870 » cité par le support reste à valider (divergences.md, point 2).",
      "Faux : le coût et la convivialité sont des critères de choix du logiciel pour l'entreprise, pas des critères de vérification pour l'auditeur."
     ]
    },
    {
     "id": "IT-012",
     "champ": "Affirmations sur l'environnement IT",
     "memento": "§2.4 · §10.1",
     "difficulte": 2,
     "question": "Sur le mandat LEX SA (contrôle ordinaire), votre assistante formule des affirmations sur l'environnement informatique. Laquelle est correcte ?",
     "options": [
      "Avec un ERP développé en interne, il est impossible de s'appuyer sur des contrôles automatiques, car ces outils ne sont soumis à aucune norme internationale",
      "Les applications gérées par l'utilisateur final (EUC/EUMA) représentent un risque, car l'accès et la possibilité de les modifier ne sont, la plupart du temps, pas strictement contrôlés",
      "Le recours à un prestataire externe impose toujours de vérifier les contrôles externalisés directement chez le prestataire",
      "Un incident de cybersécurité oblige, dans la plupart des cas, à émettre une réserve à l'assemblée générale"
     ],
     "correct": 1,
     "explications": [
      "Faux : un ERP développé en interne peut porter des contrôles automatiques fiables dès lors que les ITGC (développement, changements, accès) sont efficaces ; l'existence d'une « norme internationale » applicable au logiciel n'est pas le critère d'appui.",
      "Exact : les applications gérées par l'utilisateur final (EUC, typiquement Excel) sont un risque classique — leur accès et leur modification ne sont la plupart du temps pas strictement contrôlés (mémento §10.1).",
      "Faux : en cas d'externalisation, l'auditeur peut s'appuyer sur un rapport de type ISAE 3402 / SOC (type 1 ou 2) conformément à l'ISA-CH 402 — la vérification directe chez le prestataire n'est pas « toujours » imposée (cours ch. 01).",
      "Faux : un incident de cybersécurité n'est pertinent que s'il peut avoir un effet significatif sur les états financiers, apprécié par jugement professionnel ; il n'entraîne pas « dans la plupart des cas » une réserve à l'assemblée générale."
     ],
     "piege": "généralisations abusives (toujours, jamais)"
    },
    {
     "id": "IT-013",
     "champ": "Risques d'implémentation et de migration d'un ERP",
     "memento": "§2.1 · §3.2",
     "difficulte": 2,
     "question": "Un client (contrôle ordinaire) remplace sa comptabilité Excel par un ERP puis, plus tard, migre d'un ERP vers un autre. Quelles affirmations sur les risques sont correctes ?",
     "options": [
      "Des processus anciens non adaptés aux nouvelles structures peuvent générer des dépenses importantes et des problèmes de SCI.",
      "Lors d'une migration ERP → ERP, les données peuvent être incomplètes ou mal transmises, et des autorisations d'utilisateur reprises de façon incomplète.",
      "Dans un ERP, les écritures et transactions ne peuvent plus être retracées, ce qui empêche tout audit.",
      "La mise en œuvre d'un modèle de données complexe constitue en soi le principal risque de la migration."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Exact : des processus anciens non adaptés aux nouvelles structures génèrent des dépenses importantes et des problèmes de SCI — risque classique de l'introduction d'un ERP (mémento §2.1).",
      "Exact : lors d'une migration ERP → ERP, les risques types sont des données incomplètes ou mal transmises et des autorisations d'utilisateur reprises de façon incomplète — d'où le contrôle CM-4 « tests de la migration des données » (Guide EXPERTsuisse ITGC 2024 ; mémento §3.2).",
      "Faux : un ERP conserve la traçabilité des écritures et transactions (journaux, piste d'audit) ; il ne rend pas l'audit impossible — il le structure au contraire.",
      "Faux : la complexité du modèle de données est un défi de projet, pas le risque d'audit déterminant ; ce sont l'intégrité des données migrées et la continuité du SCI qui priment."
     ],
     "piege": "exagération : ERP non traçable"
    }
   ]
  },
  {
   "id": "M3",
   "titre": "3 · ITGC — domaines, NAS-CH 890 & SCI",
   "questions": [
    {
     "id": "IT-014",
     "champ": "Domaines & finalité des GITC",
     "memento": "§3.1 · §3.3",
     "difficulte": 2,
     "question": "Concernant les domaines et la finalité des contrôles IT généraux (GITC / ITGC), quelles affirmations sont correctes ?",
     "options": [
      "Les GITC couvrent : l'accès aux programmes et données, la modification de programmes, l'acquisition/développement de programmes et les opérations informatiques.",
      "La prestation de services IT à des clients externes fait partie des GITC.",
      "Grâce aux GITC, les activités de contrôle automatisées fonctionnent correctement dès leur premier développement/mise en œuvre et continuent de fonctionner correctement ensuite.",
      "Les paramètres et interfaces applicatifs comptent parmi les GITC essentiels au sens de la NAS-CH 890."
     ],
     "correct": [
      0,
      2
     ],
     "explications": [
      "Exact : les quatre domaines classiques des GITC sont l'accès aux programmes et données, la modification de programmes, l'acquisition/le développement de programmes et les opérations informatiques (cours ch. 01 ; l'ISA-CH 315 (Révisée), Annexe 6, les regroupe en trois processus — mémento §3.3).",
      "Faux : la prestation de services IT à des clients externes est une activité commerciale de l'entité ; les GITC visent l'environnement informatique qui produit sa propre information financière, pas les services vendus à des tiers.",
      "Exact : c'est la finalité même des GITC — garantir que les contrôles automatisés fonctionnent correctement dès leur développement/mise en œuvre et continuent de fonctionner ensuite (mémento §3.1).",
      "Faux : les paramètres et interfaces applicatifs relèvent des contrôles applicatifs (ITAC : validations, interfaces — mémento §4.1), pas des GITC ; le Guide EXPERTsuisse ITGC 2024 distingue expressément les contrôles d'application des ITGC."
     ],
     "piege": "applicatif classé en ITGC"
    },
    {
     "id": "IT-015",
     "champ": "Approche NAS-CH 890 / ITAC",
     "memento": "§3.4",
     "difficulte": 2,
     "question": "Dans le cadre d'un audit IT (contrôle ordinaire), quelles affirmations concernant la NAS-CH 890 et l'approche d'audit sont correctes ?",
     "options": [
      "L'audit informatique selon la NAS-CH 890 (vérification de l'existence du SCI) est requis même en l'absence de tout contrôle d'application automatisé (ITAC).",
      "L'audit IT selon la NAS-CH 890 n'est requis qu'en présence d'un contrôle d'application automatisé (ITAC).",
      "Le contrôle du fonctionnement durable et sans défaut du SCI (efficacité opérationnelle) fait partie de la vérification de l'existence du SCI selon l'art. 728a al. 1 ch. 3 CO.",
      "L'existence des contrôles au niveau de l'entreprise et des GITC se vérifie chaque année, tandis que les contrôles au niveau des processus (PLC) se vérifient régulièrement selon les risques significatifs qu'ils recèlent."
     ],
     "correct": [
      0,
      3
     ],
     "explications": [
      "Exact : la vérification de l'existence du SCI (art. 728a al. 1 ch. 3 CO / NAS-CH 890) s'impose dans tout contrôle ordinaire, même sans aucun ITAC — sans ITAC identifié, elle se limite au Design & Implementation (mémento §3.4).",
      "Faux : c'est l'inverse — la présence d'un ITAC déclenche l'approche basée sur l'informatique (D&I + efficacité opérationnelle) ; l'audit selon la NAS-CH 890 reste dû même sans ITAC.",
      "Faux : le contrôle du fonctionnement durable (efficacité opérationnelle) ne fait pas partie de la vérification de l'existence ; il n'est requis que si l'auditeur veut s'appuyer sur le SCI (mémento §3.4).",
      "Exact : les contrôles au niveau de l'entreprise (ELC) et les GITC se vérifient chaque année, tandis que les contrôles au niveau des processus (PLC) se vérifient régulièrement, selon les risques significatifs qu'ils recèlent (NAS 890, al. 33-35 ; cours ch. 01)."
     ],
     "piege": "inversion existence / efficacité"
    },
    {
     "id": "IT-016",
     "champ": "Scripts BD non autorisés → domaine",
     "memento": "§3.3",
     "difficulte": 2,
     "question": "Quel domaine des GITC traite essentiellement le risque lié aux scripts de base de données non autorisés susceptibles de modifier les données comptables/financières ?",
     "options": [
      "Accès aux programmes et aux données (protection / sécurité des accès)",
      "Modification de programmes (change management)",
      "Opérations informatiques (centre de calcul, exploitation du réseau)",
      "Acquisition et développement de programmes"
     ],
     "correct": 0,
     "explications": [
      "Exact : un script de base de données non autorisé modifie les données en contournant l'application — le risque naît d'un accès privilégié insuffisamment restreint (superuser pouvant modifier les tables directement) : domaine « accès aux programmes et aux données » (mémento §3.3 ; cours ch. 02, accès privilégié / ZU-5).",
      "Faux : le change management encadre les modifications de programmes via un processus (test, autorisation, mise en production) ; ici ce sont les données qui sont altérées par un accès direct à la base, pas le programme.",
      "Faux : les opérations informatiques couvrent les traitements batch, les sauvegardes et la gestion des incidents (domaine BE) — pas l'accès direct aux données.",
      "Faux : l'acquisition et le développement de programmes visent les nouveaux systèmes et leur mise en place, sans rapport avec l'exécution de scripts non autorisés sur des données existantes."
     ],
     "piege": "données modifiées ≠ programme modifié"
    },
    {
     "id": "IT-017",
     "champ": "Sous-domaines GITC à tester",
     "memento": "§3.3",
     "difficulte": 3,
     "question": "Vous voulez vous appuyer sur des configurations système (workflow d'approbation SAP, contrôle 3-way-match) et les faites vérifier par le spécialiste IT. Quelles affirmations sont correctes ?",
     "options": [
      "Pour s'appuyer sur ces contrôles automatisés, il faut vérifier les trois catégories de GITC : gestion des accès (Access Management), gestion des changements (Change Management) et opérations informatiques (Computer Operations).",
      "Seule la gestion des changements (Change Management) doit être vérifiée.",
      "Le contrôle régulier / la re-certification des accès aux systèmes et données sensibles est un exemple de contrôle de gestion des changements.",
      "Pour les opérations informatiques, seul le traitement des travaux (job processing) pertinent au regard du contrôle concerné doit être couvert."
     ],
     "correct": [
      0,
      3
     ],
     "explications": [
      "Exact : pour s'appuyer sur des contrôles automatisés/configurés, les trois processus de GITC doivent être vérifiés — gestion des accès, gestion des changements et opérations informatiques (ISA-CH 315 (Révisée), Annexe 6 ; mémento §3.3).",
      "Faux : le change management seul ne suffit pas — un contrôle configuré intact peut encore être contourné par des accès inappropriés ou perturbé par des opérations défaillantes.",
      "Faux : la re-certification (contrôle régulier) des accès aux systèmes et données sensibles est un contrôle de gestion des accès (ZU-3 « contrôle des droits d'accès », Guide EXPERTsuisse ITGC 2024 ; mémento §3.2), pas de gestion des changements.",
      "Exact : pour les opérations informatiques, l'approche est ciblée par les risques — seul le traitement des travaux (job processing) pertinent au regard du contrôle concerné doit être couvert."
     ],
     "piege": "re-certification classée en changements"
    },
    {
     "id": "IT-018",
     "champ": "Vérification de l'existence du SCI (890)",
     "memento": "§3.4",
     "difficulte": 2,
     "question": "Concernant la vérification de l'existence du SCI selon la NAS-CH 890, quelles affirmations sont correctes ?",
     "options": [
      "Le but de la vérification est d'attester l'existence du SCI (et non son efficacité).",
      "L'auditeur doit prouver l'existence des GITC en termes de conception et de mise en œuvre (Design & Implementation).",
      "La NAS-CH 890 exige de contrôler l'efficacité de toute l'infrastructure informatique.",
      "Une documentation écrite du SCI et une vue d'ensemble des systèmes informatiques ne sont pas nécessaires."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Exact : la NAS-CH 890 vise à attester l'existence du SCI, non son efficacité — c'est la mise en œuvre de l'art. 728a al. 1 ch. 3 CO (mémento §3.4).",
      "Exact : l'existence se prouve en termes de conception et de mise en œuvre (Design & Implementation) des GITC à une date donnée (mémento §3.4).",
      "Faux : la 890 n'exige pas de contrôler l'efficacité de toute l'infrastructure informatique — l'efficacité opérationnelle n'est due que si l'auditeur veut s'appuyer sur les contrôles, et le périmètre reste ciblé sur les systèmes pertinents pour les comptes.",
      "Faux : une documentation écrite du SCI et une vue d'ensemble des systèmes informatiques sont précisément des conditions de vérifiabilité du SCI (« le SCI existe et est documenté » — cours ch. 01)."
     ],
     "piege": "existence étendue à l'efficacité"
    },
    {
     "id": "IT-019",
     "champ": "Périodicité & réutilisation du test 890",
     "memento": "§3.4",
     "difficulte": 2,
     "question": "Quelles affirmations sont correctes concernant la vérification des GITC selon la NAS-CH 890 et sa réutilisation ?",
     "options": [
      "La vérification a lieu obligatoirement chaque année.",
      "La vérification n'a lieu que tous les trois ans selon un plan de rotation.",
      "Le contrôle d'efficacité opérationnelle nécessite un échantillonnage plus important que la vérification de l'existence du SCI.",
      "Le nombre d'échantillons de la vérification d'existence (890) suffit à confirmer aussi l'efficacité opérationnelle, si le contrôle n'a pas changé par rapport à l'année précédente."
     ],
     "correct": [
      0,
      2
     ],
     "explications": [
      "Exact : la vérification de l'existence du SCI a lieu chaque année dans le contrôle ordinaire (art. 728a al. 1 ch. 3 CO) ; les ELC et les GITC se vérifient annuellement (NAS 890, al. 33-35).",
      "Faux : il n'existe pas de plan de rotation triennal pour la vérification de l'existence du SCI — elle est annuelle.",
      "Exact : l'efficacité opérationnelle porte sur le fonctionnement pendant toute la période et exige donc un échantillonnage plus important que la simple constatation d'existence (D&I) à une date donnée (mémento §3.4).",
      "Faux : l'échantillon de la vérification d'existence ne suffit jamais à conclure sur l'efficacité opérationnelle, même si le contrôle n'a pas changé — l'efficacité requiert ses propres tests, plus étendus."
     ],
     "piege": "échantillon d'existence recyclé"
    },
    {
     "id": "IT-020",
     "champ": "Responsabilité du SCI & niveaux IT",
     "memento": "§2.2 · §3.1",
     "difficulte": 2,
     "question": "Vous déléguez la vérification du SCI et discutez du périmètre des niveaux de systèmes IT. Quelles affirmations sont correctes ?",
     "options": [
      "La responsabilité de la conception, de la mise en œuvre et de la maintenance du SCI incombe au conseil d'administration et à la direction.",
      "La responsabilité du SCI incombe au seul directeur général (CEO).",
      "Les niveaux de systèmes IT à vérifier dépendent des contrôles d'application concernés et du niveau système sur lequel ils opèrent.",
      "Il suffit de vérifier le niveau des applications, car les contrôles IT n'opèrent qu'à ce niveau."
     ],
     "correct": [
      0,
      2
     ],
     "explications": [
      "Exact : le conseil d'administration définit les principes et met en place un SCI approprié (art. 716a al. 1 ch. 3 CO) et la direction le met en œuvre et le surveille — responsabilité conjointe CA + direction (cours ch. 01).",
      "Faux : la responsabilité du SCI n'incombe pas au seul CEO — le CA définit les principes et la direction, collectivement, assure la mise en œuvre et la surveillance.",
      "Exact : les niveaux de systèmes IT à vérifier dépendent des contrôles d'application concernés et du niveau système sur lequel ils opèrent ou dont ils tirent leurs données (mémento §2.2).",
      "Faux : les contrôles ne vivent pas qu'en couche application — la fiabilité d'un contrôle applicatif dépend aussi des couches base de données, système d'exploitation et réseau, terrain des ITGC (mémento §2.2)."
     ]
    },
    {
     "id": "IT-021",
     "champ": "Assertions correctes en audit IT",
     "memento": "§3.4 · §5.3",
     "difficulte": 2,
     "question": "Quelles assertions sont correctes dans le cadre d'un audit IT d'une entreprise soumise au contrôle ordinaire ?",
     "options": [
      "Le choix du spécialiste IT suppose de vérifier sa compétence (connaissance pertinente du système, expérience de l'audit IT) et d'évaluer son objectivité.",
      "Si un seul GITC est inefficace, aucun audit informatisé n'est possible.",
      "Si l'auditeur veut évaluer le risque de contrôle à un niveau faible (s'appuyer sur les contrôles automatisés), il doit aussi tester l'efficacité opérationnelle des GITC.",
      "Pour un client utilisant une solution standard (SAP, Abacus), le développement de programmes doit systématiquement être testé en détail comme pour un logiciel développé en interne."
     ],
     "correct": [
      0,
      2
     ],
     "explications": [
      "Exact : le choix d'un spécialiste IT suppose de vérifier sa compétence (connaissance pertinente du système, expérience de l'audit IT) et d'évaluer son objectivité (ISA-CH 620, par. 9).",
      "Faux : un GITC inefficace n'empêche pas l'audit — l'auditeur dispose de cinq options (procédures supplémentaires, contrôles compensatoires, tests répétés, autres contrôles manuels, réévaluation combinée) et peut basculer vers une approche substantive (mémento §6.3).",
      "Exact : évaluer le risque de contrôle à un niveau faible signifie s'appuyer sur les contrôles automatisés — ce qui exige de tester aussi l'efficacité opérationnelle des GITC sous-jacents (mémento §3.4 ; ISA-CH 330).",
      "Faux : pour une solution standard (SAP, Abacus), le développement est le fait de l'éditeur — l'audit se concentre sur le paramétrage et les changements, sans tester le développement en détail comme pour un logiciel interne."
     ],
     "piege": "dramatisation d'une déficience GITC"
    },
    {
     "id": "IT-022",
     "champ": "Comptes partagés & contrôles fiables",
     "memento": "§3.2 · §4.1",
     "difficulte": 3,
     "question": "Lors de l'audit des GITC, le spécialiste IT constate que des collaborateurs métier (Ventes, Achats, RH, Finances) partagent parfois leurs identifiants, mais ne peuvent apporter aucune modification au système ni exécuter d'activités IT spécifiques. Sur quels contrôles système pouvez-vous néanmoins vous appuyer ?",
     "options": [
      "L'approbation des commandes dans le service Achats (Commande approval).",
      "Le contrôle 3-way-match dans les Achats (quantité facturée = quantité livrée et prix facturé = commande).",
      "La configuration des interfaces entre la banque et le système ERP.",
      "L'approbation des factures d'achat (Facture approval)."
     ],
     "correct": [
      1,
      2
     ],
     "explications": [
      "Faux : l'approbation des commandes est un contrôle d'autorisation qui repose sur l'identité de l'approbateur ; avec des identifiants partagés, on ne peut plus démontrer qui a approuvé — la séparation des fonctions n'est plus garantie.",
      "Exact : le 3-way-match est un contrôle automatisé configuré ; les collaborateurs concernés ne pouvant apporter aucune modification au système, le contrôle reste fiable malgré le partage d'identifiants (mémento §3.2/§4 ; corrigé reconstruit par raisonnement, cf. divergences.md).",
      "Exact : la configuration des interfaces banque–ERP est un paramétrage système que ces utilisateurs ne peuvent pas altérer — on peut continuer de s'y fier.",
      "Faux : comme l'approbation des commandes, l'approbation des factures d'achat dépend de l'identité de l'approbateur, que le partage d'identifiants rend indémontrable."
     ],
     "piege": "contrôles manuels vs contrôles configurés"
    },
    {
     "id": "IT-023",
     "champ": "Séparation des fonctions & authentification",
     "memento": "§3.2",
     "difficulte": 2,
     "question": "Identifiez le problème de GITC (protection des accès) dans les deux situations suivantes. Quelles affirmations sont correctes ?",
     "options": [
      "Un comptable chargé de gérer les accès du service comptable crée un risque de violation de la séparation des fonctions (contournement du SCI).",
      "Le partage des mots de passe au sein de l'équipe RH enfreint le sous-domaine « authentification » des GITC.",
      "Le partage des mots de passe enfreint avant tout le sous-domaine « systèmes d'exploitation ».",
      "Le risque principal du comptable gérant les accès est le non-respect de la politique des mots de passe des nouveaux utilisateurs."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Exact : un comptable qui gère lui-même les accès de son service cumule des fonctions incompatibles — il pourrait s'octroyer des droits et contourner le SCI : violation de la séparation des fonctions (mémento §3.2, domaine ZU).",
      "Exact : le partage des mots de passe empêche l'identification univoque des utilisateurs — il enfreint le sous-domaine « authentification » (ZU-1, Guide EXPERTsuisse ITGC 2024 ; mémento §3.2).",
      "Faux : les « systèmes d'exploitation » sont une couche technique du modèle (mémento §2.2), pas un sous-domaine de la protection des accès — le manquement porte sur l'authentification des personnes.",
      "Faux : le risque principal n'est pas le non-respect de la politique des mots de passe, mais la possibilité pour le comptable de s'attribuer des droits et de contourner la séparation des fonctions."
     ],
     "piege": "risque secondaire promu principal"
    },
    {
     "id": "IT-024",
     "champ": "Constatations d'accès & compensation",
     "memento": "§3.2 · §6.3",
     "difficulte": 3,
     "question": "Constatations sur la gestion des accès — quelles assertions sont correctes ?",
     "options": [
      "Accès à l'ERP par SSO / Active Directory sans mot de passe ERP distinct, avec des règles de mot de passe AD conformes aux bonnes pratiques : ce n'est pas une constatation, l'accès étant sécurisé au niveau de l'Active Directory.",
      "Des comptes de partants restés actifs après le départ sont une déficience, mais on peut encore se fier aux GITC si l'on exécute une procédure réductrice de risque (vérifier l'absence de connexion après le départ, sur toute l'année).",
      "Qu'un compte de partant soit resté actif deux semaines rend d'emblée impossible tout appui sur les contrôles automatisés et impose un contrôle purement substantif.",
      "L'accès à l'ERP par SSO sans mot de passe ERP empêche tout appui sur les contrôles automatisés, car l'accès n'est pas sécurisé."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Exact : avec un SSO via Active Directory et des règles de mot de passe AD conformes aux bonnes pratiques, l'authentification est sécurisée au niveau de l'AD — ce n'est pas une constatation (corrigé reconstruit, confiance moyenne, cf. divergences.md).",
      "Exact : des comptes de partants restés actifs sont une déficience, mais compensable — le « leaver testing » (vérifier l'absence de connexion après le départ, sur toute la période) permet encore de se fier aux GITC (cours ch. 02, contrôles compensatoires ; mémento §6.3).",
      "Faux : un compte de partant resté actif deux semaines est une déficience à traiter, pas un motif de bascule automatique vers le tout-substantif — une procédure réductrice de risque peut préserver l'appui sur l'automatisé.",
      "Faux : le SSO ne supprime pas l'authentification, il la déplace vers l'Active Directory ; si les règles AD sont robustes, l'accès est sécurisé et l'appui sur les contrôles automatisés reste possible."
     ],
     "piege": "SSO pris pour faille"
    },
    {
     "id": "IT-025",
     "champ": "Constatations de change management",
     "memento": "§3.2",
     "difficulte": 3,
     "question": "Constatations de gestion des changements — quelles assertions sont correctes ?",
     "options": [
      "Une modification d'urgence sans aucun élément probant (test, validation, documentation), effectuée par un collaborateur depuis parti, oblige l'auditeur IT à demander au client des éléments probants additionnels pour vérifier ces modifications.",
      "Cette modification d'urgence n'a aucune incidence sur l'audit puisque le collaborateur a quitté l'entreprise.",
      "Une validation d'un changement utilisateur donnée par erreur par e-mail au lieu du workflow prévu est une faiblesse de contrôle du SCI, mentionnée dans le rapport détaillé au conseil d'administration.",
      "Cette validation par e-mail hors workflow n'a aucune conséquence."
     ],
     "correct": [
      0,
      2
     ],
     "explications": [
      "Exact : une modification d'urgence sans aucun élément probant (test, validation, documentation) constitue une déviation du change management — l'auditeur demande des éléments probants additionnels pour vérifier ces modifications (logique de l'ISA-CH 330.17 : investigations spécifiques ; cours ch. 02, scénario change management).",
      "Faux : le départ du collaborateur ne supprime pas le risque — la modification a pu produire des effets sur les données financières pendant la période et doit être vérifiée (p. ex. via le log d'audit).",
      "Exact : une validation donnée par e-mail hors du workflow prévu est une déviation du contrôle — faiblesse du SCI à mentionner dans le rapport détaillé au conseil d'administration (art. 728b al. 1 CO ; distinction réserve vs simple mention, cf. divergences.md).",
      "Faux : même isolée, une validation hors workflow est un écart à apprécier et à communiquer — « aucune conséquence » est exclu."
     ]
    },
    {
     "id": "IT-026",
     "champ": "Interprétation des résultats GITC/SCI",
     "memento": "§3.4",
     "difficulte": 3,
     "question": "Interprétation des résultats de la vérification des GITC / du SCI — quelles assertions sont correctes ?",
     "options": [
      "Si la matrice SCI d'un client ne mentionne aucun GITC et que ces GITC sont pertinents pour le SCI financier, le SCI fait l'objet d'une limitation (réserve) dans ce secteur.",
      "Des travaux par lots non pertinents pour les finances (p. ex. imprimante) laissés hors surveillance n'ont pas d'incidence sur la vérification des GITC, dès lors que les batchs financièrement pertinents sont surveillés.",
      "Des résultats GITC médiocres, non encore finalisés avec les responsables IT, doivent être présentés directement au conseil d'administration avant toute discussion avec l'IT.",
      "Lorsqu'un contrôle non exécuté selon le SCI est corrigé par le client avant la date du bilan, son efficacité est confirmée pour toute la période sous revue."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Exact : si la matrice SCI ne mentionne aucun GITC alors que ceux-ci sont pertinents pour le SCI financier, le SCI présente une lacune → limitation (réserve ciblée) dans la conclusion sur l'existence du SCI pour ce secteur (mémento §3.4).",
      "Exact : des travaux par lots sans pertinence financière (p. ex. impression) laissés hors surveillance sont hors périmètre — seuls les batchs financièrement pertinents comptent pour la vérification des GITC (approche ciblée, cf. « job processing pertinent », IT-017).",
      "Faux : des résultats médiocres non finalisés se valident d'abord avec les responsables IT (exactitude factuelle, contrôles compensatoires éventuels) avant toute présentation au conseil d'administration.",
      "Faux : une correction avant la date du bilan ne prouve pas le fonctionnement du contrôle sur toute la période sous revue — l'efficacité opérationnelle s'apprécie dans la durée."
     ],
     "piege": "correction tardive ≠ efficacité annuelle"
    },
    {
     "id": "IT-107",
     "champ": "Les 5 domaines EXPERTsuisse d'ITGC",
     "memento": "§3.2",
     "difficulte": 2,
     "question": "Selon le Guide pratique EXPERTsuisse « Contrôles IT généraux (ITGC) » du 19.11.2024, quels sont les cinq domaines d'ITGC ?",
     "options": [
      "Exploitation IT (BE) · contrôles secondaires d'application (AN) · protection des accès (ZU) · sécurité physique et IT (SI) · Change Management (CM)",
      "Accès aux programmes et données · modification de programmes · acquisition et développement de programmes · opérations informatiques · cybersécurité",
      "Gestion des accès · gestion des changements · gestion des opérations IT · gestion des incidents · gestion des sauvegardes",
      "Authentification · administration des droits · contrôle des droits · comptes impersonnels · fonctions IT privilégiées"
     ],
     "correct": 0,
     "explications": [
      "Exact : le Guide pratique EXPERTsuisse ITGC (19.11.2024) structure les ITGC en 5 domaines et 18 contrôles : BE Exploitation IT, AN contrôles secondaires d'application, ZU protection des accès, SI sécurité physique et IT, CM Change Management (mémento §3.2).",
      "Faux : les quatre premiers éléments sont les 4 catégories classiques de GITC (autre référentiel, cours ch. 01), et la cybersécurité n'est pas un domaine d'ITGC — mélange de référentiels.",
      "Faux : gestion des accès, des changements et des opérations IT sont les 3 processus de l'ISA-CH 315 (Révisée), Annexe 6 (mémento §3.3) ; les incidents et les sauvegardes sont des contrôles du domaine BE, pas des domaines.",
      "Faux : ce sont les cinq contrôles du seul domaine ZU (protection des accès), ZU-1 à ZU-5 — des contrôles, pas des domaines (mémento §3.2)."
     ],
     "piege": "référentiels 4 / 5 domaines confondus"
    }
   ]
  },
  {
   "id": "M4",
   "titre": "4 · Contrôles applicatifs",
   "questions": [
    {
     "id": "IT-027",
     "champ": "Préventif vs détectif",
     "memento": "§4.1",
     "difficulte": 2,
     "question": "Concernant les contrôles préventifs et détectifs, quelles affirmations sont correctes ?",
     "options": [
      "La différence principale entre un contrôle préventif et un contrôle détectif tient au moment où la mesure agit.",
      "Seuls les contrôles détectifs peuvent être automatisés ou manuels ; les préventifs sont toujours automatisés.",
      "Les contrôles préventifs comme détectifs peuvent être soit automatisés, soit manuels.",
      "La différence principale entre préventif et détectif tient au degré d'automatisation de la mesure."
     ],
     "correct": [
      0,
      2
     ],
     "explications": [
      "Exact : l'axe de l'OBJECTIF distingue les contrôles selon le moment où la mesure agit — le préventif empêche l'information erronée avant qu'elle ne se produise, le détectif l'identifie après coup (mémento §4.1).",
      "Faux : le degré d'automatisation (TYPE) est un axe indépendant de l'objectif. Il existe des contrôles préventifs manuels (p. ex. une approbation préalable) comme des détectifs automatisés — l'échelle de fiabilité du mémento §4.1 combine d'ailleurs les quatre variantes.",
      "Exact : les deux axes TYPE (automatisé/manuel) et OBJECTIF (préventif/détectif) se croisent librement ; chaque objectif existe sous forme automatisée comme manuelle (mémento §4.1).",
      "Faux : cette option confond les deux axes. La distinction préventif/détectif tient au moment d'action de la mesure, pas à son degré d'automatisation, qui relève de l'axe du TYPE."
     ],
     "piege": "confusion des axes TYPE / OBJECTIF"
    },
    {
     "id": "IT-028",
     "champ": "Sous-types d'ITAC",
     "memento": "§4.1",
     "difficulte": 1,
     "question": "Qu'est-ce qui n'est PAS un type de contrôle (en partie ou entièrement) automatisé d'application (ITAC) ?",
     "options": [
      "Edit Checks",
      "Validation Check",
      "Calculation Check",
      "Review Check"
     ],
     "correct": 3,
     "explications": [
      "Les edit checks (contrôles de saisie) figurent bien parmi les cinq sous-types d'ITAC du mémento §4.1 — ce n'est donc pas la bonne réponse.",
      "Les validations (p. ex. le three-way-match) sont un sous-type d'ITAC reconnu (mémento §4.1) — option à écarter.",
      "Les calculations (calculs automatiques, p. ex. calcul du montant de facture ou de la TVA) sont un sous-type d'ITAC (mémento §4.1) — option à écarter.",
      "Bonne réponse : « Review Check » ne figure pas dans la liste. Les cinq sous-types d'ITAC sont Edit checks, Validations, Calculations, Interfaces et Authorizations ; une revue (review) est une action humaine qui relève du contrôle manuel ou de l'ITDM, pas d'un contrôle automatisé."
     ]
    },
    {
     "id": "IT-029",
     "champ": "Contrôles ITDM",
     "memento": "§4.1",
     "difficulte": 2,
     "question": "Concernant les contrôles manuels dépendants de l'informatique (ITDM), quelles affirmations sont correctes ?",
     "options": [
      "Le rapprochement manuel mensuel, par le responsable de processus, d'un rapport de positions ouvertes produit par l'ERP est un ITDM.",
      "Un « test unique » (test of one) est un exemple de contrôle manuel dépendant de l'informatique.",
      "Les contrôles ITDM peuvent fournir des éléments probants moins convaincants, car ils peuvent être contournés ou exposés à l'erreur humaine.",
      "Un three-way-match exécuté automatiquement par l'ERP est un exemple d'ITDM."
     ],
     "correct": [
      0,
      2
     ],
     "explications": [
      "Exact : un rapprochement manuel effectué par une personne à partir d'un rapport produit par l'ERP est la définition même de l'ITDM — un contrôle manuel qui s'appuie sur une information générée par une application (mémento §4.1).",
      "Faux : le « test of one » n'est pas un contrôle de l'entité, mais une technique d'AUDIT servant à tester un contrôle automatisé (ITAC) déterministe (mémento §4.3). L'option confond le contrôle et la procédure de l'auditeur.",
      "Exact : la composante humaine de l'ITDM l'expose au contournement et à l'erreur, ce qui rend ses éléments probants moins convaincants que ceux d'un ITAC entièrement programmé (mémento §4.1 — le détectif manuel est le moins fiable de l'échelle).",
      "Faux : un three-way-match exécuté automatiquement par l'ERP, sans aucune action humaine, est un ITAC (sous-type Validation), pas un ITDM. L'ITDM exige une composante manuelle."
     ],
     "piege": "ITAC confondu avec ITDM"
    },
    {
     "id": "IT-030",
     "champ": "Test des ITAC",
     "memento": "§4.3 · §5.1",
     "difficulte": 1,
     "question": "Laquelle de ces opérations d'audit n'est PAS une opération typique de vérification d'un contrôle applicatif automatisé (ITAC) ?",
     "options": [
      "Test direct (réexécution)",
      "Baselining et benchmarking",
      "Observation",
      "Analyse de données"
     ],
     "correct": 2,
     "explications": [
      "La réexécution (test direct) est une opération typique : l'ITAC étant déterministe, l'auditeur rejoue le contrôle et compare le résultat obtenu au résultat attendu — c'est l'inspection/réexécution citée au mémento §4.3. Pas la bonne réponse.",
      "Le baselining/benchmarking est typique pour un ITAC stable : on valide le contrôle une fois, puis on vérifie sur les exercices suivants qu'il n'a pas été modifié — c'est le benchmarking qui prolonge le « test of one » (mémento §5.1, tableau de stratégie). Pas la bonne réponse.",
      "Bonne réponse : l'observation figure certes parmi les procédures ISA-CH 330 listées au mémento §4.3, mais elle sert à constater un contrôle exécuté par une PERSONNE. Un ITAC est déterministe et sans manifestation visible : il n'y a rien à « regarder fonctionner » — on le teste par réexécution, benchmarking ou analyse des données. C'est donc la seule opération de la liste qui n'est pas typique d'un contrôle automatisé.",
      "L'analyse de données est une opération typique : elle permet de vérifier sur l'ensemble de la population que le contrôle automatisé a produit les effets attendus (Data Analytics, mémento §7). Pas la bonne réponse."
     ],
     "piege": "observation = contrôle exécuté par une personne"
    },
    {
     "id": "IT-031",
     "champ": "Préventif vs détectif : apports",
     "memento": "§4.1",
     "difficulte": 2,
     "question": "Comment classer les contrôles préventifs et détectifs, et quels sont leurs apports/limites ? (2 affirmations correctes)",
     "options": [
      "Un contrôle préventif empêche l'apparition d'une information erronée dès la phase de traitement, évitant les erreurs ultérieures.",
      "Un contrôle détectif identifie a posteriori les erreurs déjà survenues ; son inconvénient est d'agir trop tard pour empêcher l'anomalie.",
      "Un contrôle détectif empêche l'erreur avant qu'elle ne se produise.",
      "Avec des contrôles préventifs efficaces, les contrôles détectifs deviennent inutiles."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Exact : le contrôle préventif empêche l'information erronée d'apparaître dès la saisie ou le traitement (p. ex. blocage de saisie), ce qui évite les erreurs en aval (mémento §4.1).",
      "Exact : le contrôle détectif identifie et corrige a posteriori les erreurs déjà survenues (p. ex. rapprochement) ; sa limite est d'intervenir trop tard pour empêcher l'anomalie de se produire (mémento §4.1).",
      "Faux : c'est l'inversion des définitions — empêcher l'erreur avant qu'elle ne se produise est le propre du contrôle PRÉVENTIF ; le détectif n'agit qu'après coup.",
      "Faux : préventifs et détectifs sont complémentaires. Même efficaces, les préventifs ne couvrent pas tout (contournements, erreurs résiduelles) ; les détectifs, souvent appliqués à des groupes de transactions (rapprochements, suivi des postes non soldés), restent nécessaires."
     ],
     "piege": "inversion préventif / détectif"
    },
    {
     "id": "IT-032",
     "champ": "Contrôles programmés",
     "memento": "§4.3",
     "difficulte": 2,
     "question": "Concernant les contrôles programmés (automatisés) et leur vérification, quelles affirmations sont correctes ?",
     "options": [
      "Leur exécution est automatisée et présente un faible risque d'erreur ; l'auditeur en teste souvent l'efficacité par un « test of one ».",
      "Comme ils fonctionnent « en temps réel », il n'est pas toujours possible, ou difficile, d'en fournir une preuve directe.",
      "Un contrôle programmé ne peut être vérifié que si les GITC sont inefficaces.",
      "L'exécution d'un contrôle programmé varie à chaque fois, d'où un risque d'erreur élevé."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Exact : un contrôle programmé est déterministe, donc son exécution présente un faible risque d'erreur ; l'auditeur peut en tester l'efficacité par un « test of one », pour autant que les GITC tiennent et que le contrôle n'ait pas été modifié (mémento §4.3).",
      "Exact : un contrôle automatisé préventif agit « en temps réel », transaction par transaction, si bien qu'il n'en reste souvent aucune trace directe exploitable — d'où la difficulté de fournir une preuve directe de son exécution.",
      "Faux : c'est l'inverse — la vérification d'un contrôle programmé (notamment par « test of one ») suppose des GITC EFFICACES. Des GITC inefficaces privent justement l'auditeur de tout appui sur le contrôle automatisé.",
      "Faux : un contrôle programmé jugé correct une fois s'exécute ensuite toujours de la même façon (tant que les GITC fonctionnent et qu'aucune modification n'intervient) — son risque d'erreur d'exécution est faible, pas élevé."
     ]
    },
    {
     "id": "IT-110",
     "champ": "Conditions du « test of one »",
     "memento": "§4.3",
     "difficulte": 2,
     "question": "Un contrôle applicatif automatisé (ITAC) a été testé avec succès sur un seul cas (« test of one »). À quelles conditions ce test unique prouve-t-il l'efficacité du contrôle pour toute la période ?",
     "options": [
      "Aucune condition supplémentaire : l'ITAC étant déterministe, un cas correctement traité suffit toujours.",
      "Les ITGC sous-jacents doivent être efficaces ET le contrôle ne doit pas avoir été modifié pendant la période.",
      "Il suffit qu'une demande d'informations auprès du responsable IT confirme que le contrôle n'a pas changé.",
      "Le test unique doit être répété chaque trimestre pour couvrir l'ensemble de la période."
     ],
     "correct": 1,
     "explications": [
      "Faux : le caractère déterministe de l'ITAC est nécessaire mais pas suffisant — sans environnement maîtrisé, rien ne garantit que le contrôle n'a pas été modifié ou contourné après le test (mémento §4.3).",
      "Exact : les deux conditions cumulatives du « test of one » sont (1) des ITGC sous-jacents efficaces (accès, changements, opérations) et (2) l'absence de modification du contrôle durant la période (mémento §4.2-4.3).",
      "Faux : selon l'ISA-CH 330, la demande d'informations seule ne suffit jamais comme élément probant sur l'efficacité ; elle doit être combinée à l'inspection/réexécution ou à l'observation (mémento §4.3).",
      "Faux : l'intérêt même du « test of one » est qu'un seul test vaut pour toute la période ; une nouvelle vérification n'est requise que si le contrôle a été modifié (on re-teste alors)."
     ]
    }
   ]
  },
  {
   "id": "M5",
   "titre": "5 · Stratégie d'audit & procédure IT",
   "questions": [
    {
     "id": "IT-033",
     "champ": "Modèle en couches — contenu",
     "memento": "§5.2",
     "difficulte": 2,
     "question": "Le modèle de procédure d'audit des applications repose sur un modèle en couches à quatre niveaux (de haut en bas : processus d'affaires → applications → systèmes de base → infrastructure). Quelles affirmations sur le contenu des couches sont correctes ?",
     "options": [
      "La 1re couche (la plus haute) regroupe les processus d'affaires (manuels) pertinents.",
      "La 2e couche correspond aux éléments automatisés des processus d'affaires, c'est-à-dire les applications informatiques.",
      "La 3e couche (en partant du haut) correspond aux systèmes informatiques de base (plateformes, composantes techniques de traitement).",
      "La 4e couche correspond aux données de base (master data) de l'ERP."
     ],
     "correct": [
      0,
      1,
      2
     ],
     "explications": [
      "Exact : la couche la plus haute du modèle regroupe les processus d'affaires (manuels) pertinents pour l'audit (mémento §5.2).",
      "Exact : la 2e couche correspond aux éléments automatisés des processus d'affaires, c'est-à-dire les applications informatiques (avec leurs contrôles applicatifs et ITDM).",
      "Exact : la 3e couche regroupe les systèmes informatiques de base — plateformes et composantes techniques de traitement telles que SGBD (SQL/Oracle), SAP Basis ou middleware.",
      "Faux : la 4e couche est l'infrastructure IT (matériel, réseau, surveillance technique), pas les données de base. Les master data résident dans les couches application/base de données et relèvent d'un autre sujet (interfaces et extraction de données)."
     ]
    },
    {
     "id": "IT-034",
     "champ": "Couches examinées en priorité",
     "memento": "§5.2",
     "difficulte": 3,
     "question": "Selon la finalité de l'audit, quelles couches du modèle à quatre niveaux l'auditeur examine-t-il en priorité ? Indiquez les affirmations correctes.",
     "options": [
      "Pour le contrôle des applications (identifier les contrôles dépendant de l'application), l'auditeur examine d'abord les couches supérieures : processus d'affaires (manuels) pertinents et parties automatisées de l'application.",
      "Pour l'analyse des risques des systèmes IT (GITC), l'auditeur examine d'abord les couches inférieures : systèmes informatiques de base et infrastructure assurant la surveillance des systèmes.",
      "Dans tous les cas, l'auditeur commence par l'infrastructure réseau physique, quelle que soit la finalité.",
      "Les couches supérieures ne sont constituées que des parties purement manuelles de l'application."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Exact : pour le contrôle des applications, la démarche part des couches supérieures — processus d'affaires (manuels) pertinents puis parties automatisées de l'application — car c'est là que résident les contrôles dépendant de l'application (mémento §5.2).",
      "Exact : pour l'analyse des risques des systèmes IT (GITC), l'auditeur cible les couches inférieures — systèmes informatiques de base et infrastructure — car c'est à ces niveaux qu'opèrent les contrôles IT généraux.",
      "Faux : on ne commence jamais systématiquement par l'infrastructure : la démarche est descendante depuis les postes significatifs des comptes, et la couche d'entrée dépend de la finalité (applications en haut, GITC en bas). On n'audite pas « l'informatique en général ».",
      "Faux : les couches supérieures comprennent les processus manuels ET les parties automatisées (applications) ; les réduire aux seuls éléments purement manuels ampute le modèle de la couche applicative."
     ],
     "piege": "orientation haut / bas du modèle"
    },
    {
     "id": "IT-035",
     "champ": "Walk-through, efficacité, conclusion",
     "memento": "§5.2",
     "difficulte": 2,
     "question": "Concernant les dernières étapes du modèle de procédure (walk-through, évaluation de la conception et de l'efficacité, appréciation globale), quelles affirmations sont correctes ?",
     "options": [
      "Le test de cheminement (walk-through, étape 4/5) confirme que la compréhension du processus s'applique aux risques et contrôles-clés, en suivant une transaction type du début à la fin.",
      "L'appréciation globale évalue et synthétise les résultats des différentes étapes en fonction de leur influence sur les états financiers.",
      "L'évaluation de l'efficacité vérifie qu'un contrôle applicatif fonctionne conformément à sa conception et a été mis en œuvre de manière effective, intégrale et correcte.",
      "Le test de cheminement vise avant tout à tester l'efficacité opérationnelle des contrôles.",
      "L'appréciation globale débouche toujours sur une opinion d'audit positive."
     ],
     "correct": [
      0,
      1,
      2
     ],
     "explications": [
      "Exact : le walk-through suit une transaction type du début à la fin pour confirmer que la compréhension du processus, des risques et des contrôles-clés est correcte (mémento §5.2).",
      "Exact : l'appréciation globale, dernière étape, synthétise les résultats des étapes précédentes selon leur influence sur les états financiers et débouche sur le risque de contrôle et l'étendue des contrôles de substance (mémento §5.2).",
      "Exact : l'évaluation de l'efficacité (operating effectiveness) vérifie que le contrôle fonctionne conformément à sa conception et a été appliqué de manière effective, intégrale et correcte durant la période.",
      "Faux : le walk-through confirme la conception et la mise en œuvre — il ne teste PAS l'efficacité opérationnelle durable (mémento §4.3). Celle-ci se vérifie ensuite selon l'ISA-CH 330 (inspection/réexécution, observation — jamais la seule demande d'informations).",
      "Faux : l'appréciation globale peut tout à fait conclure à un risque de contrôle élevé et à un renforcement des contrôles de substance ; elle ne garantit jamais une issue favorable."
     ],
     "piege": "walk-through ≠ test d'efficacité"
    },
    {
     "id": "IT-036",
     "champ": "Phase de planification — contenu",
     "memento": "§5.2",
     "difficulte": 2,
     "question": "Le modèle de procédure de contrôle des applications débute par la phase de planification et d'identification des risques. Quelles affirmations sont correctes sur cette phase ?",
     "options": [
      "Elle comprend l'identification des processus & flux de données, des applications de base & interfaces pertinentes, et des risques & contrôles-clés.",
      "Le test de cheminement et l'évaluation de la conception des contrôles font partie de cette première phase.",
      "Les contrôles purement manuels, non dépendants de l'IT, ne sont pas pris en compte dans ce modèle de contrôle des applications.",
      "L'énumération exhaustive des systèmes d'exploitation constitue le point de départ obligatoire de cette phase."
     ],
     "correct": [
      0,
      2
     ],
     "explications": [
      "Exact : la phase 1 (planification et identification des risques) regroupe les trois premières étapes : identification des processus & flux de données, des applications de base & interfaces pertinentes, puis des risques & contrôles-clés (mémento §5.2).",
      "Faux : le test de cheminement (walk-through) et l'évaluation de la conception appartiennent à la phase suivante (stratégie & évaluation des risques), pas à la phase de planification.",
      "Exact : le modèle vise les contrôles dépendant de l'informatique (automatisés et ITDM) ; les contrôles purement manuels, sans aucune dépendance IT, sont hors du périmètre de ce modèle de contrôle des applications.",
      "Faux : la démarche est descendante — on part des postes significatifs des comptes, puis des processus et des applications. L'énumération exhaustive des systèmes d'exploitation n'est ni le point de départ, ni même nécessaire (mémento §5.2)."
     ]
    },
    {
     "id": "IT-037",
     "champ": "Nombre de phases du modèle",
     "memento": "§5.2",
     "difficulte": 2,
     "question": "En combien de phases se structure le modèle de démarche couramment utilisé en pratique pour l'audit des applications informatiques ?",
     "options": [
      "2 phases",
      "3 phases",
      "4 phases",
      "5 phases"
     ],
     "correct": 1,
     "explications": [
      "Faux : deux phases (préparation/conclusion) ne rendent pas compte du modèle, qui distingue au minimum l'identification des risques, l'évaluation des contrôles et l'appréciation finale.",
      "Bonne réponse (version du cours) : le cours détaillé regroupe explicitement les 7 étapes en TROIS phases — (I) planification / identification des risques (étapes 1-3), (II) stratégie & évaluation des risques (étapes 4-6), (III) appréciation / conclusion (étape 7). C'est le découpage à retenir (mémento §5.2).",
      "Découpage alternatif plausible : d'anciennes clés reconstruites isolaient l'évaluation de l'efficacité comme 4e phase. Mais le cours énonce 3 phases — à l'examen, s'en tenir au regroupement en 3 phases du support. Ne pas confondre les 3 phases avec les 6-7 ÉTAPES.",
      "Faux : cinq ne correspond ni au nombre de phases ni au nombre d'étapes (6-7 selon le support) ; ce chiffre évoque plutôt les 5 domaines ITGC (BE/AN/ZU/SI/CM), une autre taxonomie."
     ],
     "piege": "3 phases (cours) vs 4 (clé reconstruite)"
    },
    {
     "id": "IT-038",
     "champ": "Objectif identification processus",
     "memento": "§5.2",
     "difficulte": 2,
     "question": "Dans les premières étapes du modèle (identification des processus d'affaires ; phase stratégie & évaluation des risques), quelles affirmations sont correctes ?",
     "options": [
      "L'identification des processus d'affaires vise à repérer les processus/transactions pertinents ayant une influence directe sur les flux financiers.",
      "La phase stratégie & évaluation des risques vise à vérifier que les processus, risques et contrôles afférents sont bien compris et à évaluer si le SCI couvre les risques pertinents.",
      "L'identification des processus d'affaires vise à recenser tous les processus ayant une influence sur les employés de l'entreprise.",
      "La phase stratégie & évaluation des risques a pour seul objet de produire une opinion d'audit anticipée."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Exact : l'identification des processus d'affaires cible les processus et transactions ayant une influence directe sur les flux financiers — cohérent avec la démarche descendante qui part des postes significatifs des comptes (mémento §5.2).",
      "Exact : la phase stratégie & évaluation des risques (walk-through, conception, efficacité) vérifie que processus, risques et contrôles afférents sont bien compris et évalue si le SCI couvre les risques pertinents.",
      "Faux : le critère de sélection est l'influence sur les flux financiers et les états financiers, pas l'influence sur les employés — un processus sans incidence financière directe n'entre pas dans le périmètre de l'audit des comptes.",
      "Faux : cette phase alimente l'évaluation du risque de contrôle et le calibrage des contrôles de substance ; l'opinion d'audit n'est émise qu'au terme de l'audit, jamais par anticipation."
     ]
    },
    {
     "id": "IT-039",
     "champ": "Cas Oracle — niveaux & type",
     "memento": "§2.2 · §4.1",
     "difficulte": 3,
     "question": "Risque : des modifications non autorisées des données de base fournisseurs (Oracle) faussent les dettes fournisseurs. Un contrôle automatique géré par Oracle restreint l'accès à la base de données (3 collaborateurs autorisés) ; la base se situe au niveau base de données d'Oracle, et deux administrateurs système accèdent à la BD et à l'application. Quels niveaux technologiques sont pertinents pour vérifier ce contrôle automatisé, et de quel type de contrôle s'agit-il ?",
     "options": [
      "Niveau applications ; type : configuration du système.",
      "Niveaux applications et base de données ; type : configuration du système.",
      "Niveau applications ; type : contrôle d'accès au système.",
      "Niveaux applications et base de données ; type : contrôle d'accès au système."
     ],
     "correct": 3,
     "explications": [
      "Faux sur les deux volets : le niveau base de données ne peut être ignoré (la base fournisseurs y réside et deux administrateurs y accèdent), et restreindre qui peut modifier des données est un contrôle d'accès, pas une configuration.",
      "Faux : les deux niveaux sont bien pertinents, mais le type est erroné — l'attribution/restriction de droits n'est pas une « configuration » du système (piège signalé au mémento §4.1) : c'est un contrôle d'accès.",
      "Faux : le type (contrôle d'accès) est correct, mais limiter la vérification au niveau application est insuffisant — les données de base et les accès des administrateurs se situent aussi au niveau base de données.",
      "Exact : le contrôle limite les droits de modification (3 collaborateurs autorisés) — c'est un contrôle d'accès au système ; et comme la base réside au niveau base de données et que les administrateurs accèdent à la BD comme à l'application, les deux niveaux technologiques sont pertinents."
     ]
    },
    {
     "id": "IT-040",
     "champ": "Recours au spécialiste IT",
     "memento": "§5.3",
     "difficulte": 2,
     "question": "Le recours à un spécialiste informatique. Quelles affirmations sont correctes ?",
     "options": [
      "Le recours à un spécialiste IT dépend davantage de la nature et de la complexité de l'environnement informatique que de la taille de l'entreprise.",
      "On recourt à un spécialiste lorsque l'environnement IT se complexifie (multiples applications et interfaces pertinentes, architecture informatique).",
      "Le spécialiste fait partie de l'équipe d'audit et doit posséder l'expertise requise ; la responsabilité du résultat de l'audit reste à l'auditeur responsable.",
      "Le recours au spécialiste dépend surtout de la taille de l'entreprise et de l'organigramme du département informatique."
     ],
     "correct": [
      0,
      1,
      2
     ],
     "explications": [
      "Exact : le recours au spécialiste dépend de la nature et de la complexité de l'environnement informatique, pas de la taille de l'entreprise (ISA-CH 620 ; mémento §5.3, piège explicitement signalé).",
      "Exact : la multiplication des applications et interfaces pertinentes et la complexité de l'architecture informatique sont des facteurs typiques de recours au spécialiste (ISA-CH 620, par. 7 ss).",
      "Exact : le spécialiste intégré à l'équipe doit posséder la compétence requise (profil type : IT Assurance/Risk Advisory, certifications CISA/CISM), mais la responsabilité du résultat de l'audit reste à l'auditeur responsable — elle n'est jamais transférée (ISA-CH 620).",
      "Faux : c'est précisément le piège — ni la taille de l'entreprise ni l'organigramme du département informatique ne sont déterminants ; une petite entité à l'environnement IT complexe peut exiger un spécialiste, et inversement."
     ],
     "piege": "taille ≠ complexité IT"
    },
    {
     "id": "IT-041",
     "champ": "Implication & objectivité du spécialiste",
     "memento": "§5.3",
     "difficulte": 2,
     "question": "Lors de la planification, vous discutez du recours à un auditeur informatique et à un spécialiste en Data Analytics (DA). Quelles affirmations sont correctes (ISA-CH 620) ?",
     "options": [
      "L'auditeur IT et le spécialiste DA devraient être impliqués très tôt dans la planification, y compris pour la planification du budget et du calendrier.",
      "Les spécialistes de l'équipe de révision sont soumis aux mêmes exigences d'indépendance que les membres de l'équipe, qu'ils aient ou non accès à des informations financières.",
      "Les spécialistes soutiennent l'équipe d'audit ; la responsabilité de l'opinion d'audit incombe à l'auditeur.",
      "Le même spécialiste DA peut aussi contrôler les GITC de l'entreprise, à condition de disposer de l'expérience et des connaissances appropriées.",
      "Les résultats de l'analyse de données font l'objet d'une opinion d'audit indépendante émise par les spécialistes DA."
     ],
     "correct": [
      0,
      1,
      2,
      3
     ],
     "explications": [
      "Exact : l'implication du spécialiste dès la planification — y compris pour le budget et le calendrier — est requise pour définir la nature, l'étendue et les objectifs de ses travaux (ISA-CH 620, par. 10-11 ; mémento §5.3).",
      "Exact : l'objectivité du spécialiste s'apprécie selon les mêmes exigences d'indépendance que pour les membres de l'équipe d'audit, indépendamment de son accès aux informations financières (ISA-CH 620, par. 9).",
      "Exact : les spécialistes soutiennent l'équipe, mais la responsabilité de l'opinion d'audit incombe exclusivement à l'auditeur responsable de la mission (ISA-CH 620).",
      "Exact : rien n'interdit au spécialiste DA de tester aussi les GITC, dès lors qu'il satisfait à la condition de compétence et d'aptitudes de l'ISA-CH 620 (expérience et connaissances appropriées).",
      "Faux : il n'existe qu'UNE opinion d'audit, émise par l'auditeur responsable. Les travaux des spécialistes intègrent la documentation d'audit, que l'auditeur revoit et comprend — ils ne donnent jamais lieu à une opinion indépendante."
     ]
    },
    {
     "id": "IT-042",
     "champ": "Complexité IT & besoin d'un auditeur IT",
     "memento": "§5.3",
     "difficulte": 3,
     "question": "Évaluation de la complexité de l'environnement IT et du besoin d'un auditeur informatique. Quelles affirmations sont correctes ?",
     "options": [
      "Des processus de validation et de calcul entièrement automatisés pour l'exécution des contrôles indiquent un environnement IT plus complexe.",
      "Le fait que la direction s'appuie sur une application pour traiter les données et en maintenir l'intégrité met en évidence un risque IT potentiel.",
      "Pour évaluer l'incidence d'une faiblesse GITC, l'efficacité de ce contrôle lors de la période d'audit précédente n'est pas un facteur pertinent.",
      "Un indicateur typique du besoin d'un auditeur IT est qu'un seul système constitue la population et que la plupart des écritures sont saisies manuellement."
     ],
     "correct": [
      0,
      1,
      2
     ],
     "explications": [
      "Exact : des processus de validation et de calcul entièrement automatisés pour l'exécution des contrôles sont un indicateur d'environnement IT plus complexe, donc de besoin accru d'un auditeur informatique (mémento §5.3).",
      "Exact : la dépendance de la direction à une application pour traiter les données et en maintenir l'intégrité constitue un risque lié à l'IT au sens de l'ISA-CH 315 (Révisée).",
      "Exact : l'incidence d'une faiblesse GITC s'apprécie sur la période auditée ; l'efficacité du contrôle lors de la période d'audit précédente n'est pas un facteur pertinent — elle ne compense pas la faiblesse actuelle.",
      "Faux : c'est l'indicateur INVERSE — un seul système constituant la population et des écritures majoritairement manuelles décrivent un environnement simple, où le besoin d'un auditeur IT est faible. Ce sont l'automatisation et la complexité qui l'appellent."
     ],
     "piege": "indicateur de complexité inversé"
    },
    {
     "id": "IT-043",
     "champ": "GITC↔ITAC & dépendances IT",
     "memento": "§1.3 · §4.2",
     "difficulte": 2,
     "question": "Relations entre GITC, contrôles d'applications et dépendances informatiques. Quelles affirmations sont correctes ?",
     "options": [
      "Les GITC constituent la base de contrôles d'applications IT automatisés (ITAC) fonctionnant correctement.",
      "Les cinq types de dépendances informatiques sont : contrôles automatisés, rapports, calculs, interfaces, et sécurité (séparation des tâches / accès restreint).",
      "Les contrôles d'applications IT constituent la base sur laquelle reposent les GITC.",
      "La paramétrabilité (personnalisation) figure parmi les cinq types de dépendances informatiques."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Exact : les GITC sécurisent l'environnement (accès, changements, exploitation) et constituent ainsi le socle sur lequel les ITAC peuvent fonctionner durablement (mémento §4.2).",
      "Exact : les cinq types de dépendances informatiques sont les contrôles automatisés, les rapports, les calculs, les interfaces et la sécurité (séparation des tâches / accès restreint) (mémento §1.3).",
      "Faux : c'est l'inversion classique de la relation — les ITAC reposent sur les GITC, jamais l'inverse ; si les GITC sous-jacents sont déficients, la fiabilité des ITAC s'effondre (mémento §4.2).",
      "Faux : la paramétrabilité (personnalisation) ne figure pas parmi les cinq dépendances informatiques ; la liste se limite à contrôles automatisés, rapports, calculs, interfaces et sécurité."
     ],
     "piege": "inversion GITC ↔ ITAC"
    },
    {
     "id": "IT-044",
     "champ": "Identification processus & périmètre systèmes",
     "memento": "§5.2",
     "difficulte": 2,
     "question": "Identification des processus/flux et périmètre des systèmes à vérifier. Un client utilise Abacus (RH), Basware (achats), un SAP centralisé (ventes, stocks, immobilisations, Record to Report) et un Excel de consolidation ; les risques importants portent sur le chiffre d'affaires et les immobilisations corporelles. Quelles affirmations sont correctes ?",
     "options": [
      "L'énumération des systèmes d'exploitation n'est pas nécessaire pour identifier les processus d'affaires et flux de données pertinents.",
      "Si des contrôles automatisés existent, on vérifie généralement SAP, car chiffre d'affaires et immobilisations y sont tous deux gérés.",
      "L'identification des processus exige au préalable l'énumération exhaustive des systèmes d'exploitation et du matériel réseau.",
      "Dès qu'un contrôle automatisé existe, il faut systématiquement vérifier l'ensemble des systèmes (SAP, Basware, Abacus, Excel de consolidation)."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Exact : l'identification des processus d'affaires et des flux de données repose sur les demandes d'informations, les flow charts et le diagramme du système d'information — pas sur l'inventaire des systèmes d'exploitation (mémento §5.2).",
      "Exact : le périmètre des systèmes à vérifier suit les risques identifiés : le chiffre d'affaires et les immobilisations corporelles étant tous deux gérés dans SAP, c'est SAP que l'on vérifie si des contrôles automatisés existent.",
      "Faux : contre-pied de la bonne réponse — l'énumération exhaustive des systèmes d'exploitation et du matériel réseau n'est pas un préalable ; la démarche descendante part des postes significatifs, pas de la technique.",
      "Faux : le périmètre se limite aux systèmes portant les risques importants. Abacus (RH), Basware (achats) et l'Excel de consolidation ne portent pas les risques identifiés (chiffre d'affaires, immobilisations) : la présence d'un contrôle automatisé n'impose jamais de vérifier TOUS les systèmes."
     ]
    },
    {
     "id": "IT-045",
     "champ": "Cas Salesforce — population & risque",
     "memento": "§5.1 · §6.2",
     "difficulte": 3,
     "question": "Sales Walkthrough (Salesforce) : vous aviez documenté 2 personnes comptabilisant les ventes, mais l'auditeur IT constate 10 personnes habilitées (dont 2 parties et 4 hors département), et le contrôle de revue n'a été testé que pour 2 d'entre elles. Quelles affirmations sont correctes ?",
     "options": [
      "Le risque le plus élevé mis en évidence est le risque lié à la manipulation des données (trop d'utilisateurs peuvent comptabiliser).",
      "Le contrôle ne couvrant que 2 des utilisateurs habilités, l'analyse ne peut porter que sur les transactions couvertes ; les écritures des autres utilisateurs doivent être filtrées et vérifiées séparément.",
      "Le contrôle ayant été testé sans faiblesse pour 2 personnes, l'analyse peut être menée en toute confiance sur l'ensemble de la population.",
      "Le risque le plus élevé est le risque lié à l'extraction des données."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Exact : le constat central est que 10 personnes (au lieu des 2 documentées, dont 4 hors département et 2 ayant quitté l'entreprise) peuvent comptabiliser des ventes : c'est un risque lié à la manipulation des données (Data Manipulation Risk).",
      "Exact : le contrôle de revue n'ayant été testé que pour 2 des utilisateurs habilités, seules leurs transactions sont couvertes ; les écritures des autres utilisateurs forment une population non couverte, à filtrer et à vérifier séparément.",
      "Faux : extrapoler un test réussi sur 2 utilisateurs à l'ensemble de la population n'est pas fondé — les transactions des 8 autres personnes habilitées ne sont couvertes par aucun contrôle testé.",
      "Faux : rien n'indique un problème de téléchargement des données (Data Extraction Risk) ; le constat porte sur des habilitations excessives à comptabiliser, donc sur le risque de manipulation des données."
     ],
     "piege": "extrapolation d'un test partiel"
    },
    {
     "id": "IT-111",
     "champ": "Approche contrôles vs substantive",
     "memento": "§5.1",
     "difficulte": 2,
     "question": "Selon l'ISA-CH 330, dans quelle situation l'auditeur choisit-il de tester les contrôles IT (ITGC + ITAC) plutôt que de rester purement substantif ?",
     "options": [
      "Lorsque l'entité dépend fortement de processus informatisés et que l'auditeur veut s'appuyer sur les contrôles automatisés pour réduire ses contrôles de substance.",
      "Lorsque les ITGC se sont révélés déficients, le test des contrôles devenant alors obligatoire.",
      "Dans tous les audits, l'ISA-CH 330 imposant de tester l'efficacité opérationnelle des contrôles chaque année.",
      "Lorsque l'entreprise dépasse une certaine taille, l'approche basée sur les contrôles étant alors imposée."
     ],
     "correct": 0,
     "explications": [
      "Exact : l'approche basée sur l'informatique (test de l'efficacité opérationnelle des ITGC + ITAC) se justifie en cas de forte dépendance aux processus IT combinée à la volonté de s'appuyer sur l'automatisé pour réduire le substantif (ISA-CH 330 ; mémento §5.1).",
      "Faux : c'est la situation inverse — des ITGC déficients (comme une faible dépendance à l'IT ou un test non rentable) conduisent à une approche substantive renforcée, éventuellement appuyée par la Data Analytics (mémento §5.1).",
      "Faux : le test de l'efficacité opérationnelle n'est pas systématique — il ne s'impose que si l'auditeur entend s'appuyer sur les contrôles ; à défaut, l'audit des états financiers ne requiert que la vérification de l'existence du SCI.",
      "Faux : la taille de l'entreprise n'est pas le critère — comme pour le recours au spécialiste, ce sont la dépendance à l'IT et la stratégie d'appui qui déterminent le choix (mémento §5.1 et §5.3)."
     ]
    }
   ]
  },
  {
   "id": "M6",
   "titre": "6 · Interprétation des déficiences ITGC",
   "questions": [
    {
     "id": "IT-046",
     "champ": "Déficience d'un contrôle automatisé",
     "memento": "§6.2 · §6.3",
     "difficulte": 3,
     "question": "Un contrôle automatisé (p. ex. three-way-match SAP) est jugé inefficace / un déficit de GITC est constaté, alors qu'on souhaitait s'appuyer sur l'IT. Quelles marches à suivre sont correctes ?",
     "options": [
      "Identifier quels contrôles automatisés et informations liés aux GITC déficients sont concernés.",
      "Réaliser des procédures d'audit supplémentaires pour couvrir les comptes concernés, aucun contrôle efficace n'ayant été identifié.",
      "Convertir immédiatement l'ensemble de l'audit en vérifications de détail.",
      "Continuer à se fier au contrôle, les collaborateurs étant compétents et bien organisés."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Exact : la première étape consiste à délimiter l'impact — identifier quels contrôles automatisés et quelles informations (rapports, IPE) dépendent des GITC déficients (mémento §6.2-6.3).",
      "Exact : à défaut de contrôle efficace identifié, des procédures d'audit supplémentaires ciblées couvrent les comptes concernés — première des cinq options face à une faiblesse d'ITGC (mémento §6.3).",
      "Faux : basculer immédiatement TOUT l'audit en vérifications de détail est disproportionné — la réponse se calibre sur les comptes et assertions réellement touchés ; contrôles compensatoires, tests répétés et procédures ciblées restent possibles.",
      "Faux : la compétence des collaborateurs ne remplace pas un test d'efficacité concluant — continuer à se fier à un contrôle jugé inefficace est contraire à l'ISA-CH 330 (l'appui suppose des éléments probants sur l'efficacité)."
     ],
     "piege": "réaction tout ou rien"
    },
    {
     "id": "IT-047",
     "champ": "Conséquences de GITC inefficaces",
     "memento": "§6.2",
     "difficulte": 2,
     "question": "Des GITC inefficaces entament la confiance dans les contrôles automatisés et l'intégrité des données. Quelle assertion est correcte ?",
     "options": [
      "Ils peuvent avoir une incidence sur l'évaluation combinée des risques et sur le risque d'anomalies significatives.",
      "On peut néanmoins se fier pleinement aux contrôles automatisés.",
      "Ils rendent les comptes annuels non auditables.",
      "Ils sont sans incidence sur la confiance dans les contrôles automatisés."
     ],
     "correct": 0,
     "explications": [
      "Exact : des GITC inefficaces modifient l'évaluation combinée des risques et peuvent accroître le risque d'anomalies significatives, car la confiance dans l'automatisé et dans l'intégrité des données est entamée (mémento §6.2).",
      "Faux : c'est précisément la conséquence inverse — sans GITC efficaces, on ne peut plus se fier aux contrôles automatisés (ni à l'exhaustivité/exactitude des données extraites) sans mesures supplémentaires.",
      "Faux : des GITC déficients ne rendent pas les comptes inauditables — l'auditeur adapte sa réponse (contrôles compensatoires, approche substantive renforcée) ; ils ne prouvent d'ailleurs même pas l'existence d'une anomalie (mémento §6.2).",
      "Faux : l'incidence est directe — les contrôles automatisés reposent sur les GITC ; leur défaillance sape le socle même de la confiance dans l'automatisé (mémento §4.2 et §6.2)."
     ],
     "piege": "portée exacte d'une déficience"
    },
    {
     "id": "IT-048",
     "champ": "Contrôles compensatoires & qualité des données",
     "memento": "§6.2 · §6.3",
     "difficulte": 2,
     "question": "GITC déficients : quelles affirmations sur les contrôles compensatoires et la qualité des données sont correctes ?",
     "options": [
      "Si les GITC sont inefficaces, l'exhaustivité et l'exactitude des données se garantissent par des contrôles et vérifications réducteurs de risques.",
      "Un contrôle redondant efficace uniquement de manière ponctuelle constitue un contrôle compensatoire valable.",
      "Un contrôle compensatoire couvre, sur toute la période, les mêmes risques que le contrôle déficient.",
      "Des GITC inefficaces n'ont aucune incidence sur l'exhaustivité et l'exactitude des données."
     ],
     "correct": [
      0,
      2
     ],
     "explications": [
      "Exact : lorsque les GITC sont inefficaces, l'exhaustivité et l'exactitude des données doivent être garanties par des contrôles et vérifications réducteurs de risques (mémento §6.2-6.3).",
      "Faux : un contrôle qui n'est efficace que de manière ponctuelle laisse des fenêtres non couvertes ; pour compenser, un contrôle doit opérer sur toute la période concernée — l'efficacité ponctuelle ne suffit pas.",
      "Exact : un contrôle compensatoire couvre, sur toute la période, les mêmes risques que le contrôle déficient ; il s'évalue d'ailleurs comme tout autre contrôle — conception/mise en œuvre puis efficacité opérationnelle (ISA-CH 330.17 ; mémento §6.3).",
      "Faux : l'incidence est directe — les GITC conditionnent l'intégrité et l'extraction des données (Data Integrity Risk, Data Extraction Risk) ; leur inefficacité remet en cause l'exhaustivité et l'exactitude des données (mémento §6.2)."
     ],
     "piege": "contrôle compensatoire seulement ponctuel"
    },
    {
     "id": "IT-049",
     "champ": "Déficit significatif ISA-CH 265",
     "memento": "§6.1",
     "difficulte": 2,
     "question": "Selon l'ISA-CH 265, quelles affirmations sur le déficit significatif et sa communication sont correctes ?",
     "options": [
      "Des déficits de conception ET d'efficacité des GITC touchant le risque d'anomalie significative constituent un déficit significatif à annoncer.",
      "La communication d'un déficit significatif se fait par écrit aux responsables de la surveillance (gouvernance), dans le rapport exhaustif.",
      "Une divergence unique et sans effet doit être communiquée comme déficit significatif.",
      "Une information orale à la direction suffit à satisfaire l'obligation de communication."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Exact : des déficits de conception et d'efficacité des GITC touchant le risque d'anomalie significative sont suffisamment importants pour mériter l'attention des responsables de la gouvernance : c'est un déficit significatif à communiquer (ISA-CH 265.6(a) ; mémento §6.1).",
      "Exact : l'ISA-CH 265 exige une communication PAR ÉCRIT aux responsables de la surveillance (gouvernance), en pratique dans le rapport exhaustif (détaillé). Nuance de révision : le mémento §6.1 définit le déficit significatif et renvoie à la communication (ISA-CH 265.6(a)), mais ne détaille pas la forme écrite — cette exigence vient de la norme ISA-CH 265 elle-même, au-delà du texte condensé.",
      "Faux : une divergence (écart) unique et sans effet n'est pas un déficit significatif — un écart ne constitue même pas toujours une déficience (mémento §6.1) ; il faut qualifier la faiblesse avant de décider de sa communication.",
      "Faux : pour un déficit significatif, une information orale à la direction ne suffit pas — la forme écrite et le destinataire (responsables de la surveillance) sont tous deux requis par l'ISA-CH 265."
     ]
    },
    {
     "id": "IT-050",
     "champ": "Faiblesse GITC → stratégie & DA",
     "memento": "§6.2 · §6.3",
     "difficulte": 3,
     "question": "Vous ne pouvez confirmer que la conception/mise en œuvre — non l'efficacité — de certains GITC/contrôles, et vous souhaitez recourir à la Data Analytics. Quelles affirmations sont correctes ?",
     "options": [
      "La stratégie d'audit, le calcul du caractère significatif et la taille de l'échantillon doivent être réévalués.",
      "Une analyse de données reste possible, mais seulement si les éléments pertinents des données sont testés directement par échantillonnage.",
      "Une faiblesse dans l'efficacité des GITC n'a aucune incidence sur la stratégie d'audit.",
      "Sans GITC vérifiés, une analyse de données n'apporte rien de plus et doit être écartée."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Exact : sans confirmation de l'efficacité des GITC, l'appui prévu sur les contrôles disparaît : la stratégie d'audit, le calcul du caractère significatif et la taille de l'échantillon doivent être réévalués (réévaluation de l'appréciation combinée des risques, mémento §6.3).",
      "Exact : la Data Analytics reste possible, mais l'exhaustivité et l'exactitude des données ne pouvant plus être présumées, les éléments pertinents des données doivent être testés directement par échantillonnage (mémento §6.2).",
      "Faux : une faiblesse dans l'efficacité des GITC a une incidence directe sur la stratégie — l'auditeur bascule vers une approche substantive renforcée (mémento §5.1 et §6.2).",
      "Faux : la Data Analytics n'est pas à écarter — elle demeure utile à condition de sécuriser directement la fiabilité des données utilisées ; c'est l'appui aveugle sur des données non vérifiées qui est proscrit, pas l'analyse elle-même."
     ],
     "piege": "GITC déficients ≠ DA exclue"
    },
    {
     "id": "IT-112",
     "champ": "Compensatoire pour accès déjà accordé",
     "memento": "§6.3",
     "difficulte": 3,
     "question": "La directrice financière dispose, à tort, d'un accès administrateur (lecture/écriture) à la base de données du système comptable. Quel contrôle compensatoire est valable face à ce risque ?",
     "options": [
      "La vérification substantielle des journaux (logs) retraçant toutes ses actions sur la période, pour s'assurer que l'accès n'a pas eu d'incidence financière.",
      "Le blocage systématique des accès des collaborateurs quittant l'entreprise.",
      "La limitation du nombre d'accès privilégiés accordés dans le système.",
      "La revue périodique des autorisations avant tout nouvel octroi de droits."
     ],
     "correct": 0,
     "explications": [
      "Exact : pour un accès déjà accordé à tort, seul un contrôle DÉTECTIF portant sur la période concernée compense le risque : la vérification substantielle des journaux permet de s'assurer que l'accès n'a pas eu d'incidence financière (mémento §6.3).",
      "Faux : le blocage des accès lors des départs est un contrôle préventif standard de gestion des accès (ITGC du domaine « protection des accès ») ; il agit pour l'avenir et ne couvre pas l'accès déjà ouvert pendant la période.",
      "Faux : limiter les accès privilégiés est une mesure préventive générale ; elle réduit le risque futur mais ne dit rien de ce que la directrice financière a réellement fait de son accès pendant la période.",
      "Faux : la revue périodique des autorisations est un contrôle de routine sur l'attribution des droits ; elle n'apporte aucune assurance sur les actions déjà effectuées via l'accès administrateur accordé à tort."
     ],
     "piege": "compensatoire ≠ préventif d'accès"
    }
   ]
  },
  {
   "id": "M7",
   "titre": "7 · Data Analytics — typologie & cycle",
   "questions": [
    {
     "id": "IT-051",
     "champ": "Phases d'application de la DA",
     "memento": "§7 · §7.3",
     "difficulte": 1,
     "question": "À quelles étapes du processus d'audit la Data Analytics (et, plus largement, l'automatisation de l'audit) peut-elle être utilisée ?",
     "options": [
      "Uniquement en planification et en réalisation, jamais à l'acceptation du mandat ni au reporting.",
      "Le potentiel est propre à chaque audit ; aucune considération de principe ne peut être posée.",
      "Dans toutes les phases : acceptation du mandat, planification, réalisation, rapport, ainsi que traitement ultérieur et assurance qualité.",
      "Dans toutes les phases sauf le rapport d'audit, où l'automatisation présente nettement moins d'avantages."
     ],
     "correct": 2,
     "explications": [
      "Faux : la DA n'est pas cantonnée à la planification et à la réalisation. Le mémento §7 la décrit comme transversale à tout le cycle, y compris l'acceptation du mandat (exploitation de données publiques : notations, avis) et le rapport.",
      "Faux : le potentiel varie certes d'un audit à l'autre, mais une considération de principe existe bel et bien — la DA est utilisable dans toutes les phases de l'audit (mémento §7), les NA-CH ne l'imposant ni ne l'interdisant.",
      "Correct : la DA est transversale à tout le cycle d'audit — acceptation du mandat, planification, réalisation, rapport, traitement ultérieur et assurance qualité (mémento §7 et §7.3). Les NA-CH reconnaissent l'usage de la technologie sans l'imposer ni l'interdire.",
      "Faux : le rapport et l'achèvement ne sont pas exclus — les procédures finales mobilisent aussi la DA (corroboration des conclusions, évaluation globale des états financiers ; ISA-CH 520 §6 et 330 §25, mémento §7.3)."
     ]
    },
    {
     "id": "IT-052",
     "champ": "Défis des outils DA",
     "memento": "§7",
     "difficulte": 2,
     "question": "Qu'est-ce qui n'est PAS un défi typiquement lié à l'utilisation des outils d'analyse de données et d'audit automatisés ?",
     "options": [
      "Connaissances insuffisantes de l'équipe d'audit (direction de projet, formation aux outils).",
      "Préparation et flux des données.",
      "Différents niveaux de standardisation des systèmes chez les mandants.",
      "L'interprétation des résultats d'analyse."
     ],
     "correct": 3,
     "explications": [
      "Ce n'est pas la réponse : les connaissances insuffisantes de l'équipe d'audit (direction de projet, formation aux outils) figurent bien parmi les défis typiques des outils DA — c'est le facteur « expert-comptable » du cours (connaissance des outils, recours à des experts DA).",
      "Ce n'est pas la réponse : la préparation et le flux des données constituent un défi central et récurrent des outils DA (extraction, transfert, nettoyage — mémento §8).",
      "Ce n'est pas la réponse : l'hétérogénéité des niveaux de standardisation des systèmes chez les mandants est un défi réel — un paysage IT fragmenté complique la DA (mémento §7.3).",
      "Correct : l'interprétation des résultats d'analyse relève du jugement professionnel de l'auditeur — c'est le cœur de son métier, pas un défi propre à l'outil. Les défis typiques listés par le support sont la préparation/le flux des données, les compétences de l'équipe et l'hétérogénéité des systèmes clients."
     ]
    },
    {
     "id": "IT-053",
     "champ": "Process Mining & compréhension du processus",
     "memento": "§7.3",
     "difficulte": 1,
     "question": "Que permet le Process Mining (et, de même, la consultation des configurations système) dans le cadre de la Data Analytics ?",
     "options": [
      "Il optimise automatiquement et à lui seul toutes les divergences des processus.",
      "Il analyse automatiquement les données de journalisation (event logs) pour reconstituer les étapes du processus, en améliorer la compréhension et détecter les divergences.",
      "Il remplace intégralement les contrôles manuels.",
      "Il établit les rapports financiers de l'entité."
     ],
     "correct": 1,
     "explications": [
      "Faux : le Process Mining détecte les divergences des processus, il ne les « optimise » pas automatiquement — corriger un processus relève de l'entité, et la conclusion d'audit relève du jugement de l'auditeur.",
      "Correct : le Process Mining exploite les données de journalisation (event logs) pour reconstituer les étapes du processus, en améliorer la compréhension et repérer les divergences (mémento §7.3) ; la consultation des configurations système poursuit le même but de compréhension du processus.",
      "Faux : le Process Mining complète les procédures mais ne remplace pas intégralement les contrôles manuels — la DA ne se substitue jamais entièrement aux autres procédures ni au jugement (mémento §7).",
      "Faux : établir les rapports financiers incombe à l'entité auditée, jamais à un outil d'analyse de l'auditeur ; le Process Mining sert la compréhension du processus, pas la production comptable."
     ]
    },
    {
     "id": "IT-054",
     "champ": "Définition de Big Data",
     "memento": "§7.3",
     "difficulte": 1,
     "question": "Que signifie le terme « Big Data » ?",
     "options": [
      "Des données peu diversifiées.",
      "Des données analysées manuellement.",
      "Des volumes de données trop importants ou trop complexes pour être traités par les méthodes traditionnelles.",
      "De faibles volumes de données, faciles à gérer."
     ],
     "correct": 2,
     "explications": [
      "Faux : c'est le contraire — le Big Data se caractérise notamment par une grande diversité (variété) des données, pas par leur homogénéité.",
      "Faux : des données analysées manuellement sont précisément ce que le Big Data exclut — son volume et sa complexité dépassent les capacités d'un traitement manuel ou traditionnel.",
      "Correct : le Big Data désigne des ensembles de données dont le volume ou la complexité dépassent les capacités des méthodes de traitement traditionnelles. Nuance de révision : le terme « Big Data » n'est pas défini comme tel dans le mémento condensé (le §7.3 évoque le Data Mining et les predictive analytics) ; la définition retenue ici est la définition standard, à connaître au-delà du texte du mémento.",
      "Faux : définition inversée — de faibles volumes de données faciles à gérer sont exactement l'opposé du Big Data."
     ]
    },
    {
     "id": "IT-055",
     "champ": "Predictive Analytics",
     "memento": "§7.3",
     "difficulte": 2,
     "question": "Qu'est-ce qui caractérise les « Predictive Analytics » (et leur champ d'application en audit) ?",
     "options": [
      "Elles décrivent ce qui s'est passé (analyse rétrospective — Descriptive).",
      "Elles reconnaissent des schémas dans les données via des algorithmes de Data Mining pour prévoir aussi précisément que possible la situation future (« que va-t-il probablement se passer ? »).",
      "Elles déterminent ce qu'il faut faire (recommandation d'action — Prescriptive).",
      "Elles expliquent pourquoi un événement s'est produit (analyse causale — Diagnostic)."
     ],
     "correct": 1,
     "explications": [
      "Faux : décrire ce qui s'est passé (analyse rétrospective) relève de la famille Descriptive, la plus simple des quatre familles d'analyses (mémento §7.3 : Descriptive → Diagnostic → Predictive → Prescriptive).",
      "Correct : les Predictive Analytics reconnaissent des schémas dans les données via des algorithmes de Data Mining pour prévoir aussi précisément que possible la situation future — « que va-t-il probablement se passer ? » (mémento §7.3) ; en audit, elles servent notamment à construire des prédictions confrontées ensuite aux valeurs réelles.",
      "Faux : déterminer ce qu'il faut faire (recommandation d'action) caractérise la famille Prescriptive, la plus complexe de la typologie — pas la Predictive.",
      "Faux : expliquer pourquoi un événement s'est produit (analyse causale) relève de la famille Diagnostic, pas de la Predictive."
     ]
    },
    {
     "id": "IT-056",
     "champ": "Facteurs d'influence de la DA",
     "memento": "§7",
     "difficulte": 2,
     "question": "Parmi les éléments suivants, lesquels influencent réellement l'analyse de données (DA) en audit ?",
     "options": [
      "La capacité des serveurs / de stockage.",
      "La connaissance qu'a l'auditeur des outils utilisés.",
      "Le facteur temps (calendrier) ainsi que la protection des données (nLPD) et les redevances de licence.",
      "L'ISA-CH 550 (confirmations externes)."
     ],
     "correct": [
      0,
      1,
      2
     ],
     "explications": [
      "Juste : la capacité des serveurs et de stockage relève de la famille de facteurs « outils » qui conditionne la faisabilité d'une DA (cours ch04 : quatre familles de facteurs — client, outils, expert-comptable, prescriptions légales).",
      "Juste : la connaissance qu'a l'auditeur des outils utilisés est un facteur « expert-comptable » explicitement cité, aux côtés du facteur temps et du recours à des experts DA.",
      "Juste : le facteur temps (expert-comptable), la protection des données (nLPD) et les redevances de licence (prescriptions légales / outils) influencent tous la faisabilité et le déroulement d'une DA.",
      "Faux : une norme de procédure d'audit spécifique n'est pas un facteur d'influence de la faisabilité d'une DA — les déterminants sont le client (environnement IT, volume et qualité des données), les outils, l'expert-comptable et les prescriptions légales (protection des données, licences). (Au passage, l'intitulé de l'option est inexact : les confirmations externes relèvent de l'ISA-CH 505 ; l'ISA-CH 550 traite des parties liées.)"
     ]
    },
    {
     "id": "IT-057",
     "champ": "Stade : évaluation des risques vs procédure",
     "memento": "§7.2",
     "difficulte": 3,
     "question": "Concernant l'usage de la DA selon le stade de l'audit, quelles affirmations sont correctes ?",
     "options": [
      "C'est le stade de l'audit (planification vs réalisation) qui détermine l'objectif de l'analyse : évaluation des risques ou procédure d'audit.",
      "En planification, la DA sert à l'évaluation des risques : couverture intégrale de la population, stratification, visualisation.",
      "En réalisation, la DA appuie les contrôles de substance : analyses du chiffre d'affaires, des marges, de l'ancienneté des créances avec valeurs de comparaison.",
      "Une couverture de 100 % de la population procure une assurance de 100 %, ce qui rend le jugement de l'auditeur superflu."
     ],
     "correct": [
      0,
      1,
      2
     ],
     "explications": [
      "Juste : c'est le stade de l'audit (planification vs réalisation) qui détermine l'objectif de l'analyse — évaluation des risques ou procédure d'audit ; distinction très testée (mémento §7.2).",
      "Juste : en planification, la DA sert l'évaluation des risques (ISA-CH 300 ss / 315) — couverture intégrale de la population, stratification et visualisation pour cibler la stratégie d'audit.",
      "Juste : en réalisation, la DA appuie les contrôles de substance (ISA-CH 500 ss ; procédures analytiques substantives, ISA-CH 520) — analyses du chiffre d'affaires, des marges, de l'ancienneté des créances comparées à des valeurs de référence.",
      "Faux : couvrir 100 % de la population n'apporte pas une assurance de 100 % et ne rend jamais le jugement de l'auditeur superflu — la DA oriente le risque et exécute des procédures, mais elle ne remplace pas le jugement (mémento §7, 🎯 But)."
     ],
     "piege": "couverture 100 % ≠ assurance 100 %"
    },
    {
     "id": "IT-058",
     "champ": "ISA-CH pivots par phase",
     "memento": "§7.3",
     "difficulte": 2,
     "question": "Reliez la DA à la bonne ISA-CH selon la phase d'audit. Quelles affirmations sont correctes ?",
     "options": [
      "À l'acceptation du mandat (ISA-CH 220), la DA exploite des données accessibles au public (notations, avis).",
      "En planification (ISA-CH 300), la DA sert à obtenir la compréhension de l'entité et de son environnement.",
      "En réalisation (tests de détail), on se réfère à l'ISA-CH 500 ss.",
      "La DA en planification relève de l'ISA-CH 230 (documentation d'audit)."
     ],
     "correct": [
      0,
      1,
      2
     ],
     "explications": [
      "Juste : à l'acceptation du mandat, la DA exploite des données accessibles au public (notations, avis). La source rattache cette phase à l'ISA-CH 220 ; le mémento §7.3 cite pour sa part l'ISA-CH 210 (termes de la mission) — les deux touchent l'acceptation, et le fond de la réponse (données publiques) reste inchangé.",
      "Juste : en planification, la norme pivot est l'ISA-CH 300 (avec les 300 ss / 315) — la DA y sert à obtenir la compréhension de l'entité et de son environnement (mémento §7.3, phase exploratoire).",
      "Juste : en réalisation, les tests de détail (3-way-match rejoué, mutations de données de base, écritures au crédit) se réfèrent à l'ISA-CH 500 ss (mémento §7.3).",
      "Faux : l'ISA-CH 230 régit la documentation d'audit, pas la planification — la norme pivot de la planification est l'ISA-CH 300 (ss). La documentation s'applique certes à toute DA, mais elle n'est pas la norme de la phase."
     ]
    },
    {
     "id": "IT-059",
     "champ": "Applicabilité & conditions de faisabilité",
     "memento": "§7.3",
     "difficulte": 3,
     "question": "Quels facteurs et conditions influencent l'applicabilité d'une procédure analytique et la faisabilité d'une DA ?",
     "options": [
      "Le caractère significatif de l'objet du contrôle, l'évaluation du risque inhérent et du risque de contrôle, la précision des résultats escomptés et l'étendue d'autres procédures visant le même objectif.",
      "Un paysage informatique fragmenté comportant de nombreuses interfaces manuelles (complique la DA).",
      "Un paysage informatique homogène avec des interfaces automatiques (au contraire, cela facilite la DA).",
      "La seule date à laquelle l'audit doit être terminé."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Juste : l'applicabilité d'une procédure analytique dépend du caractère significatif de l'objet du contrôle, de l'évaluation du risque inhérent et du risque de contrôle, de la précision des résultats escomptés et de l'étendue des autres procédures visant le même objectif d'audit.",
      "Juste : un paysage informatique fragmenté comportant de nombreuses interfaces manuelles complique la faisabilité d'une DA — les données y sont hétérogènes et leur fiabilité plus difficile à établir (mémento §7.3 et §8).",
      "Non retenue par le corrigé : l'affirmation est exacte sur le fond (un environnement homogène à interfaces automatiques facilite effectivement la DA), mais la question source visait les conditions qui compliquent ou limitent la faisabilité — un environnement facilitant n'est pas une contrainte à prendre en compte.",
      "Faux : la seule date de fin d'audit ne détermine pas l'applicabilité d'une procédure analytique — le facteur temps joue sur l'organisation de la DA, mais jamais seul : matérialité, risques inhérent et de contrôle, précision attendue et autres procédures priment."
     ]
    },
    {
     "id": "IT-060",
     "champ": "Assertions correctes sur la DA",
     "memento": "§7 (chapô & 🔗 Connexions)",
     "difficulte": 2,
     "question": "Quelles affirmations sur l'utilisation de la Data Analytics dans l'audit des états financiers sont correctes ?",
     "options": [
      "La DA peut être utilisée dans toutes les phases de l'audit.",
      "Pour se fier aux résultats d'une DA, les ITGC (contrôles IT généraux) doivent être efficaces et vérifiés.",
      "Les NA-CH réglementent en détail l'usage de la DA, laquelle peut remplacer complètement les contrôles de substance.",
      "La DA n'est pertinente que pour les très grands clients d'audit."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Juste : la DA peut être utilisée dans toutes les phases de l'audit — elle est transversale au cycle, de l'acceptation du mandat à l'assurance qualité (mémento §7, chapô).",
      "Juste : pour se fier aux résultats d'une DA, les ITGC doivent être efficaces et vérifiés — sans eux, l'exhaustivité et l'exactitude des données analysées ne sont pas garanties (mémento §7, 🔗 Connexions vers §3-6 et §8).",
      "Faux, double erreur : les NA-CH ne réglementent pas la DA en détail (elles reconnaissent l'usage de la technologie sans l'imposer ni l'encourager, la classification des opérations étant laissée à la pratique), et la DA ne peut jamais remplacer complètement les contrôles de substance.",
      "Faux : la DA n'est pas réservée aux très grands clients — sa faisabilité dépend de l'environnement IT, des données et des outils (des modes d'extraction existent même pour les petits systèmes, mémento §8.1), pas de la seule taille du mandant."
     ],
     "piege": "DA ≠ remplacement des contrôles"
    },
    {
     "id": "IT-061",
     "champ": "Planification & documentation d'une DA",
     "memento": "§7.1 · §8.2",
     "difficulte": 2,
     "question": "Bonnes pratiques pour planifier une DA chez un client soumis au contrôle ordinaire — quelles affirmations sont correctes ?",
     "options": [
      "Impliquer le spécialiste DA à toutes les étapes (budget/calendrier, validation et rapprochement des données, examen des valeurs aberrantes).",
      "Effectuer un essai (dry-run) de l'extraction et de l'analyse avant l'audit intermédiaire, en tenant compte des délais et des fuseaux horaires.",
      "Respecter toutes les exigences de documentation prévues par les NA-CH (aucune règle allégée pour la DA).",
      "Ne pas informer le client de l'approche d'audit afin de préserver l'effet de surprise."
     ],
     "correct": [
      0,
      1,
      2
     ],
     "explications": [
      "Juste : le spécialiste DA intervient à toutes les étapes du cycle — budget et calendrier (planification), validation et rapprochement des données (traitement), examen des valeurs aberrantes (analyse) — conformément au cycle DA en 5 étapes (mémento §7.1).",
      "Juste : un essai (dry-run) de l'extraction et de l'analyse avant l'audit intermédiaire, tenant compte des délais et des fuseaux horaires, prévient les échecs d'extraction et de transfert qui seraient constatés trop tard en conditions réelles (mémento §8.2).",
      "Juste : il n'existe aucune règle documentaire allégée pour la DA — toutes les exigences de documentation prévues par les NA-CH s'appliquent intégralement (documentation d'audit, ISA-CH 230).",
      "Faux : la planification d'une DA exige au contraire une coordination étroite avec le client (instructions d'extraction, ressources en personnel, sécurité des données, calendrier) ; dissimuler l'approche pour un « effet de surprise » est contraire aux bonnes pratiques et rendrait l'extraction impossible."
     ]
    },
    {
     "id": "IT-114",
     "champ": "Cycle DA en 5 étapes",
     "memento": "§7.1",
     "difficulte": 2,
     "question": "Quel est l'ordre correct des 5 étapes du cycle Data Analytics ?",
     "options": [
      "Extraction des données → Planification → Traitement → Analyse & reporting → Conclusion.",
      "Planification → Extraction des données → Traitement → Analyse & reporting → Conclusion.",
      "Planification → Traitement → Extraction des données → Analyse & reporting → Conclusion.",
      "Planification → Extraction des données → Analyse & reporting → Traitement → Conclusion."
     ],
     "correct": 1,
     "explications": [
      "Faux : l'extraction ne peut pas précéder la planification — il faut d'abord définir l'objectif, l'hypothèse et la population (ainsi que budget, calendrier, staffing et coordination avec le client) avant d'envoyer les instructions d'extraction.",
      "Correct : Planification → Extraction des données → Traitement → Analyse & reporting → Conclusion (mémento §7.1). La planification définit objectif, hypothèse et population ; l'extraction est automatique (SAP) ou manuelle (Abacus) ; le traitement couvre mapping, granularité, validation et rapprochement ; l'analyse comprend stratification, outliers et procédures analytiques ; la conclusion couvre corroboration, documentation et suite d'audit.",
      "Faux : le traitement (téléchargement, nettoyage, mapping, validation et rapprochement) porte sur des données déjà extraites — il ne peut pas intervenir avant l'extraction.",
      "Faux : l'analyse et le reporting s'exécutent sur des données préparées — placer le traitement après l'analyse inverse les étapes 3 et 4 du cycle."
     ]
    }
   ]
  },
  {
   "id": "M8",
   "titre": "8 · Extraction / transmission / fiabilité des données",
   "questions": [
    {
     "id": "IT-062",
     "champ": "Modes d'extraction selon le système",
     "memento": "§8.1",
     "difficulte": 2,
     "question": "Concernant le mode d'extraction des données à retenir selon le système audité, quelles affirmations sont correctes ?",
     "options": [
      "Pour un ERP comme SAP, on privilégie l'installation d'un programme d'extraction dédié.",
      "Pour les petits systèmes, la copie complète de la base de données est le mode privilégié.",
      "Une extraction semi-automatique s'effectue entièrement sans intervention humaine.",
      "Le téléchargement direct (ex. Abacus) est le mode le plus optimisé pour la Data Analytics."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Juste : pour un ERP comme SAP, on privilégie l'installation d'un programme d'extraction dédié (extraction automatique) — output optimisé, extraction rapide, contrôles de validation, réutilisable sur plusieurs exercices (mémento §8.1).",
      "Juste : pour les petits systèmes, la copie complète de la base de données est le mode privilégié — bloc de données complet avec dictionnaire de données, malgré le volume important et les enjeux de protection des données (mémento §8.1).",
      "Faux, contradiction dans les termes : une extraction « semi-automatique » implique par définition une intervention humaine partielle ; seule une extraction entièrement automatique s'en passe — et même celle-ci exige une installation initiale par le spécialiste DA.",
      "Faux : le téléchargement direct (Abacus) est un mode manuel dont l'output dépend du système et n'est pas optimisé pour la DA, avec une charge manuelle pour le client et l'auditeur (mémento §8.1) ; le mode optimisé est l'installation de programme (SAP)."
     ]
    },
    {
     "id": "IT-063",
     "champ": "Extraction automatique : acteurs & avantages",
     "memento": "§8.1",
     "difficulte": 2,
     "question": "Quelles affirmations sur l'extraction automatique de données sont correctes ?",
     "options": [
      "Elle requiert généralement l'intervention d'un spécialiste DA.",
      "L'installation de l'outil d'extraction est réalisée par le spécialiste DA avec le client.",
      "Elle fournit un output optimisé, réutilisable sur plusieurs exercices.",
      "Elle n'implique aucun échange de fichier entre l'équipe d'audit et l'informatique du client."
     ],
     "correct": [
      0,
      1,
      2
     ],
     "explications": [
      "Juste : l'extraction automatique requiert généralement un spécialiste DA — installation et paramétrage de l'outil, contrôles de validation (mémento §8.1).",
      "Juste : l'installation de l'outil d'extraction est réalisée par le spécialiste DA en coordination avec le client (aspects techniques et sécurité des données).",
      "Juste : l'extraction automatique fournit un output optimisé pour l'analyse, rapide, avec contrôles de validation, et réutilisable sur plusieurs exercices — avantages du mode « installation de programme » (mémento §8.1).",
      "Faux : des échanges de fichiers entre l'équipe d'audit et l'informatique du client subsistent (transfert des données extraites, instructions, contrôles d'exhaustivité) — l'automatisation de l'extraction ne supprime pas la transmission des données (mémento §8.2)."
     ]
    },
    {
     "id": "IT-064",
     "champ": "Extraction manuelle & copie de base",
     "memento": "§8.1",
     "difficulte": 2,
     "question": "Concernant l'extraction manuelle et la copie de base de données, quelles affirmations sont correctes ?",
     "options": [
      "L'extraction manuelle se fait généralement au moyen de fichiers Excel et/ou .csv.",
      "La préparation des données est plus simple avec l'extraction manuelle.",
      "L'extraction manuelle devient impraticable lorsque le volume de données augmente.",
      "La copie de base de données soulève des enjeux de protection des données."
     ],
     "correct": [
      0,
      2,
      3
     ],
     "explications": [
      "Juste : l'extraction manuelle (téléchargement direct, p. ex. Abacus) passe généralement par des fichiers Excel et/ou .csv fournis par le client.",
      "Faux : c'est l'inverse — l'output manuel dépend du système et n'est pas optimisé pour la DA, ce qui alourdit la préparation des données (charge manuelle côté client et auditeur, mémento §8.1) ; c'est l'extraction automatique qui simplifie la préparation grâce à son output standardisé.",
      "Juste : lorsque le volume de données augmente, l'extraction manuelle (Excel/.csv) devient impraticable — limites techniques des fichiers et charge de travail disproportionnée.",
      "Juste : la copie de base de données transmet un bloc de données complet, y compris des données non nécessaires à l'audit, ce qui soulève des enjeux de protection des données (mémento §8.1)."
     ]
    },
    {
     "id": "IT-065",
     "champ": "Préparation & mapping après export",
     "memento": "§7.1",
     "difficulte": 2,
     "question": "Après l'export, concernant la routine de préparation et le mapping des données :",
     "options": [
      "Le mapping (tagging) affecte les champs de données aux macros de contrôle et aux critères de validation.",
      "Compléter des écritures comptables lors d'anomalies fait partie de la routine de préparation des données.",
      "La routine inclut le regroupement (join) des données globales et par poste, et l'ajout des données de base des partenaires.",
      "Le mapping sert avant tout à crypter les données sensibles du mandant."
     ],
     "correct": [
      0,
      2
     ],
     "explications": [
      "Juste : le mapping (tagging) affecte les champs de données extraits aux macros de contrôle et aux critères de validation — étape de traitement du cycle DA (mémento §7.1, étape 3).",
      "Faux : compléter ou corriger des écritures comptables n'appartient jamais à la routine de préparation de l'auditeur — ce serait produire la comptabilité du client ; les anomalies constatées sont documentées et investiguées, pas « complétées ».",
      "Juste : la routine de préparation regroupe (join) les données globales et par poste et les enrichit des données de base des partenaires (clients, fournisseurs) pour rendre l'analyse possible.",
      "Faux : le mapping relie les champs de données aux contrôles et critères de validation, il ne crypte rien ; la protection des données sensibles relève du mode de transfert (plateforme sécurisée) et des mesures de sécurité, pas du mapping (mémento §8.2)."
     ]
    },
    {
     "id": "IT-066",
     "champ": "Documentation de l'extraction (mémorandum)",
     "memento": "§8.3",
     "difficulte": 2,
     "question": "À quoi devez-vous veiller en priorité lorsque vous documentez les résultats de l'extraction dans un mémorandum ?",
     "options": [
      "L'exhaustivité des données doit être vérifiée et la marche à suivre pour l'extraction doit être documentée.",
      "Seul un calendrier et les interactions avec le client doivent être consignés.",
      "Seul un inventaire de tous les champs de données du client et leur explication doit être enregistré.",
      "Aucune des propositions."
     ],
     "correct": 0,
     "explications": [
      "Correct : la documentation de l'extraction doit en priorité prouver l'exhaustivité des données (rapprochement du total extrait avec les soldes) et consigner la marche à suivre de l'extraction, pour la rendre vérifiable et reproductible (mémento §8.3 ; exigences de documentation, ISA-CH 230).",
      "Faux : le calendrier et les interactions avec le client sont utiles, mais « seuls » ils sont insuffisants — ils ne prouvent ni l'exhaustivité des données ni la manière dont l'extraction a été menée.",
      "Faux : un inventaire des champs de données (dictionnaire) aide à la préparation, mais « seul » il ne démontre pas que l'extraction est complète ni comment elle a été réalisée.",
      "Faux : une des propositions est bien correcte — l'exhaustivité vérifiée et la marche à suivre documentée (option A)."
     ]
    },
    {
     "id": "IT-067",
     "champ": "Problèmes de transmission des données",
     "memento": "§8.2",
     "difficulte": 1,
     "question": "Lors d'un audit des états financiers, quels problèmes peuvent survenir pendant la transmission des données dans le cadre de la Data Analytics ?",
     "options": [
      "Le job s'interrompt pendant l'extraction/transmission des données.",
      "L'extraction ne fonctionne pas (p. ex. message d'erreur).",
      "Le volume de données est trop important.",
      "Tous les problèmes mentionnés."
     ],
     "correct": 3,
     "explications": [
      "Exact en soi — le job peut s'interrompre pendant l'extraction/transmission — mais réponse incomplète : les deux autres problèmes sont tout aussi possibles, c'est l'option englobante qui est attendue.",
      "Exact en soi — l'extraction peut échouer techniquement (message d'erreur) — mais incomplet pour la même raison.",
      "Exact en soi — un volume de données trop important peut faire échouer le transfert — mais incomplet pour la même raison.",
      "Correct : les trois problèmes cités (interruption du job, échec technique de l'extraction, volume excessif) sont des risques réels et cumulables de la transmission des données (mémento §8.2) ; la réponse englobante s'impose."
     ]
    },
    {
     "id": "IT-068",
     "champ": "Transmission : responsabilité, canal & résolution",
     "memento": "§8.2",
     "difficulte": 2,
     "question": "Concernant la transmission des données entre le client et le cabinet, quelles affirmations sont correctes ?",
     "options": [
      "La transmission relève conjointement du spécialiste DA et du client.",
      "L'envoi des données par e-mail est le canal à privilégier.",
      "La plateforme de transfert sécurisée du cabinet supprime le risque de perte d'un support externe.",
      "Assurer une capacité de stockage et de transmission suffisante prévient efficacement les échecs de transfert."
     ],
     "correct": [
      0,
      2,
      3
     ],
     "explications": [
      "Juste : la transmission relève conjointement du spécialiste DA et du client — le cycle DA (mémento §7.1) attribue l'étape d'extraction/transfert aux trois acteurs auditeur / spécialiste DA / client, et le spécialiste installe l'outil avec le client.",
      "Faux : l'e-mail n'est ni sécurisé ni adapté aux volumes de données d'une DA ; le canal à privilégier est la plateforme de transfert sécurisée de la société d'audit (mémento §8.2).",
      "Juste : la plateforme de transfert sécurisée du cabinet supprime le risque de perte d'un support externe (memory stick), qui est la faiblesse typique du support physique (mémento §8.2) — sa limite étant plutôt la documentation du flux.",
      "Juste : assurer une capacité de stockage et de transmission suffisante prévient les échecs liés au volume excessif et aux interruptions de job, problèmes typiques de la transmission (mémento §8.2)."
     ]
    },
    {
     "id": "IT-069",
     "champ": "Mois manquant : risque d'extraction",
     "memento": "§8.2 · §8.3",
     "difficulte": 3,
     "question": "Le spécialiste DA vous remet un dashboard Power BI présentant toutes les entrées de chiffre d'affaires de l'année. Séduit par les graphiques, vous constatez qu'il manque tout le mois de février dans l'évolution du chiffre d'affaires. Quel risque faut-il maîtriser en priorité pour éviter une telle erreur ?",
     "options": [
      "Risque lié à la saisie des données.",
      "Risque lié à l'intégrité des données.",
      "Risque lié à l'extraction des données.",
      "Risque lié à la manipulation des données."
     ],
     "correct": 2,
     "explications": [
      "Faux : le risque de saisie (input) concerne l'enregistrement initial des données dans le système du client ; ici, les écritures de février existent dans le système — elles manquent seulement dans les données extraites.",
      "Faux : l'intégrité vise l'altération des données lors du traitement (modifications après clôture, paramètres) ; un mois entièrement absent est un défaut d'exhaustivité de l'extraction, pas une altération des données présentes.",
      "Correct : un mois manquant est un défaut d'exhaustivité (intégralité) imputable à l'extraction — c'est le risque lié à l'extraction des données qu'il faut maîtriser en priorité (mémento §8.2, risque n° 3, et §8.3 ⚠️ Piège : un « mois manquant » touche l'exhaustivité, pas l'exactitude).",
      "Faux : la manipulation suppose une modification (volontaire ou non) des données après leur extraction ; rien n'indique ici une altération — les données de février n'ont simplement pas été extraites."
     ],
     "piege": "confusion exhaustivité / exactitude"
    },
    {
     "id": "IT-070",
     "champ": "Intégrité & exhaustivité : causes d'erreur",
     "memento": "§8.2 · §8.3",
     "difficulte": 3,
     "question": "Concernant l'intégrité et l'exhaustivité des données extraites et transmises, quelles affirmations sont correctes ?",
     "options": [
      "Un échec technique de l'extraction peut provoquer un défaut d'exhaustivité des données.",
      "Des données modifiées dans le système après la clôture de la période peuvent rendre les livres auxiliaires incorrects après agrégation.",
      "Le seul fait qu'une extraction soit déclenchée manuellement menace l'intégrité des données.",
      "La saisie de paramètres erronés lors de l'extraction menace l'intégrité des données."
     ],
     "correct": [
      0,
      1,
      3
     ],
     "explications": [
      "Juste : un échec technique de l'extraction (extraction ratée, transmission erronée) est une cause typique de données incomplètes — défaut d'exhaustivité (cours ch04 §5.1, tableau des causes d'erreurs).",
      "Juste : des données modifiées dans le système après la clôture de la période (p. ex. avoirs) peuvent rendre les livres auxiliaires incorrects ou non rapprochables avec le grand livre après agrégation — atteinte à l'intégrité (cours ch04 §5.1).",
      "Faux : le simple déclenchement manuel d'une extraction n'est pas en soi une menace pour l'intégrité — c'est une modalité d'exécution, encadrée par la documentation et les contrôles ; ce sont la modification des données ou des paramètres erronés qui menacent l'intégrité.",
      "Juste : la saisie de paramètres erronés lors de l'extraction (mauvaise période, mauvais périmètre, période non clôturée) altère les données obtenues et menace leur intégrité."
     ],
     "piege": "déclenchement manuel ≠ menace d'intégrité"
    },
    {
     "id": "IT-115",
     "champ": "Réconciliation : exhaustivité vs exactitude",
     "memento": "§8.3",
     "difficulte": 2,
     "question": "Comment l'auditeur prouve-t-il l'exhaustivité, puis l'exactitude, des données extraites avant de s'en servir comme éléments probants ?",
     "options": [
      "Exhaustivité : rapprocher le total extrait avec le solde des comptes au jour de l'extraction (et contrôler la séquence des numéros) ; exactitude : rapprocher un échantillon de postes individuels avec des pièces justificatives externes.",
      "Exhaustivité : rapprocher des postes individuels avec des pièces justificatives ; exactitude : rapprocher le total extrait avec le solde des comptes.",
      "Les deux assertions sont établies dès lors que les ITGC du client ont été jugés efficaces — aucun rapprochement n'est nécessaire.",
      "Aucune preuve n'est requise pour une extraction automatique : les données issues directement d'un ERP sont fiables par nature."
     ],
     "correct": 0,
     "explications": [
      "Correct : l'exhaustivité se prouve en rapprochant le total extrait du solde des comptes au jour de l'extraction, complété par le contrôle de la séquence des numéros ; l'exactitude, en rapprochant un échantillon aléatoire de postes individuels avec des pièces justificatives externes ou des relevés bancaires, voire en observant l'extraction (mémento §8.3 ; fiabilité des éléments probants, ISA-CH 500).",
      "Faux : les deux contrôles sont inversés — le rapprochement du total avec le solde des comptes prouve l'intégralité (exhaustivité), tandis que le rapprochement de postes individuels avec des pièces prouve l'exactitude.",
      "Faux : des ITGC efficaces sont une condition nécessaire pour se fier aux données, mais ils ne dispensent pas des rapprochements — prouver l'exhaustivité et l'exactitude de l'extraction reste la condition d'admissibilité de toute DA (mémento §8, 🎯 But).",
      "Faux : une donnée sortie du système du client n'est jamais fiable par nature — elle a pu être filtrée, paramétrée ou retouchée ; même une extraction automatique doit être réconciliée avec la comptabilité (mémento §8.3 et §10)."
     ],
     "piege": "inversion exhaustivité / exactitude"
    }
   ]
  },
  {
   "id": "M9",
   "titre": "9 · Valeurs aberrantes / faux positifs",
   "questions": [
    {
     "id": "IT-071",
     "champ": "Évaluation des risques vs procédure d'audit",
     "memento": "§7.2",
     "difficulte": 2,
     "question": "Une même analyse de données (DA) peut servir à l'évaluation des risques ou de procédure d'audit. Quelles affirmations sont correctes ?",
     "options": [
      "Une même méthode d'analyse est polyvalente : elle peut servir aussi bien à l'évaluation des risques qu'à une procédure d'audit.",
      "L'évaluation des risques vise à identifier les facteurs de risque, tandis que la procédure d'audit vérifie des éléments spécifiques.",
      "Contrôler par petit échantillon les écritures du CA passées en contrepartie du compte Débiteurs, puis analyser en détail les cas exceptionnels, constitue une évaluation des risques et non une procédure d'audit.",
      "Sur l'ancienneté des créances, le but en évaluation des risques est de stratifier la population en niveaux de risque ; en procédure d'audit, c'est l'échantillonnage des valeurs aberrantes et des prédictions."
     ],
     "correct": [
      0,
      1,
      3
     ],
     "explications": [
      "Juste : une même méthode d'analyse est polyvalente — elle peut servir à l'évaluation des risques ou de procédure d'audit ; seuls le stade de l'analyse et la conclusion qu'on en tire changent (mémento §7.2, cours ch04 §3.2).",
      "Juste : l'évaluation des risques identifie les facteurs de risque (stratification, ciblage des comptes, formulation de la stratégie — ISA-CH 300 ss / 315), tandis que la procédure d'audit vérifie des éléments spécifiques (tests de détail, procédure analytique substantive — ISA-CH 500 ss / 520).",
      "Faux : contrôler par échantillon des écritures précises et analyser en détail les cas exceptionnels, c'est vérifier des éléments spécifiques — donc une procédure d'audit (réalisation), pas une évaluation des risques.",
      "Juste : sur l'ancienneté des créances, l'évaluation des risques stratifie la population en niveaux de risque pour bâtir la stratégie ; la procédure d'audit échantillonne les valeurs aberrantes et les prédictions (exemple clé du cours, Podcast 2)."
     ],
     "piege": "évaluation des risques ≠ procédure d'audit"
    },
    {
     "id": "IT-072",
     "champ": "Stratification des créances",
     "memento": "§7.2",
     "difficulte": 2,
     "question": "Concernant la stratification des créances, quelles affirmations sont correctes ?",
     "options": [
      "Le partitionnement des données est une méthode appropriée de stratification.",
      "L'analyse de l'ancienneté (tranches / buckets) est une méthode appropriée de stratification.",
      "La stratification a pour objectif de distinguer différents niveaux de risque.",
      "La régression linéaire est la méthode de stratification de référence des créances."
     ],
     "correct": [
      0,
      1,
      2
     ],
     "explications": [
      "Juste : le partitionnement des données (découpage de la population en sous-ensembles homogènes) est une méthode appropriée de stratification des créances.",
      "Juste : l'analyse d'ancienneté par tranches (buckets) est la méthode classique de stratification des créances (mémento §7.2 ; cas Bohrer : buckets d'ancienneté et rotation des débiteurs).",
      "Juste : la stratification a précisément pour objectif de distinguer différents niveaux de risque dans la population et d'orienter la stratégie d'audit (mémento §7.2, usage « évaluation des risques »).",
      "Faux : la régression linéaire construit une prédiction ou une attente (procédure analytique, p. ex. analyse des marges) ; elle ne découpe pas la population en strates de risque — ce n'est pas une méthode de stratification."
     ]
    },
    {
     "id": "IT-073",
     "champ": "Définition & identification d'une aberration",
     "memento": "§9.1",
     "difficulte": 1,
     "question": "Concernant les valeurs aberrantes (outliers), quelles affirmations sont correctes ?",
     "options": [
      "Une aberration est un point de données qui diverge significativement des autres données.",
      "L'analyse de type box-plot (boîte à moustaches) permet d'identifier les aberrations (> Q3 + 1,5×IQR ou < Q1 − 1,5×IQR).",
      "Identifier les aberrations sert à couvrir des erreurs ou irrégularités potentielles.",
      "Une aberration est simplement le point de données ayant la valeur la plus basse."
     ],
     "correct": [
      0,
      1,
      2
     ],
     "explications": [
      "Juste : une valeur aberrante est un point de données qui diverge significativement des autres — qui ne s'intègre pas dans la série de mesures ou ne correspond pas aux prédictions (mémento §9.1).",
      "Juste : le box-plot (Box & Whisker) identifie statistiquement les aberrations — toute valeur > Q3 + 1,5×IQR ou < Q1 − 1,5×IQR, avec IQR = Q3 − Q1 (mémento §9.1).",
      "Juste : identifier les aberrations sert à couvrir des erreurs ou irrégularités potentielles — une aberration est un signal à investiguer, pas encore une anomalie (mémento §9, 🎯 But).",
      "Faux : la valeur la plus basse d'une série n'est pas nécessairement aberrante — l'aberration se définit par l'écart significatif à la série (seuils IQR) ou aux prédictions, pas par le rang minimal."
     ]
    },
    {
     "id": "IT-074",
     "champ": "Planification — pic d'activations d'immobilisations",
     "memento": "§7.2 · §9.1",
     "difficulte": 3,
     "question": "Contrôle ordinaire : en janvier-février, 5 immobilisations de plus de CHF 50 000 chacune ont été activées, alors que le reste de l'année ~100 immobilisations d'env. CHF 3 000 l'ont été (comme l'année précédente, activations régulières). Quelle conclusion pour la planification du contrôle ?",
     "options": [
      "Les immobilisations sont un risque important couvert par sondage.",
      "Ségrégation : contrôle intégral des grandes activations atypiques (jan.-fév.) + petit échantillon aléatoire du reste.",
      "Ségrégation : contrôle intégral des grandes activations atypiques (jan.-fév.) + procédure analytique simple par rapport à l'année précédente (attente) sur le reste.",
      "Aucune distinction : échantillonnage statistique uniforme, tous les éléments ayant la même chance d'être sélectionnés."
     ],
     "correct": 2,
     "explications": [
      "Faux : traiter les immobilisations comme un risque global couvert par simple sondage ignore le signal des données — les 5 grosses activations atypiques de janvier-février doivent être isolées et contrôlées intégralement.",
      "Presque, mais non optimal : la ségrégation avec contrôle intégral des grandes activations est juste, mais couvrir le reste par un petit échantillon aléatoire est moins efficient — le reste est régulier et comparable à l'année précédente, donc une attente analytique suffit.",
      "Correct : ségrégation de la population — contrôle intégral des activations atypiques (jan.-fév.) et procédure analytique simple (attente fondée sur l'année précédente, activations régulières) sur le reste : c'est la combinaison la plus efficace et efficiente (logique de ségrégation du mémento §9.1, distinction des usages §7.2).",
      "Faux : un échantillonnage statistique uniforme dilue les 5 activations atypiques dans la masse des ~100 petites — elles risquent de ne jamais être sélectionnées alors qu'elles concentrent le risque."
     ],
     "piege": "échantillon uniforme vs ségrégation"
    },
    {
     "id": "IT-075",
     "champ": "Cycle de paie — traitement des aberrantes",
     "memento": "§9.1",
     "difficulte": 2,
     "question": "Analyse des valeurs aberrantes du cycle de paie (décomposée par collaborateur). Quelles démarches sont correctes ?",
     "options": [
      "Un mois aux salaires anormalement élevés → auditionner le client et contrôler séparément les mois divergents dans les opérations de contrôle.",
      "Aucune aberrante détectée → aucune procédure d'audit supplémentaire n'est nécessaire.",
      "Aucune aberrante détectée → pas d'autres procédures sur les aberrantes, mais des procédures sur l'ensemble de la population (comparaison N-1, évolution des effectifs).",
      "Aucune aberrante détectée → réserve de l'opinion et, le cas échéant, démission de l'organe de révision."
     ],
     "correct": [
      0,
      2
     ],
     "explications": [
      "Juste : face à un mois aux salaires anormalement élevés, on auditionne le client et on contrôle séparément les mois divergents — une aberration est un signal à investiguer (mémento §9.1).",
      "Faux : « aucune aberrante » ne signifie pas « aucune procédure » — le traitement des aberrations n'est qu'un produit accessoire de l'analyse, et la population résiduelle doit aussi être évaluée (cours ch04, pièges sur les aberrations).",
      "Juste : sans aberrante détectée, il n'y a pas de procédure supplémentaire sur les aberrantes, mais des procédures sur l'ensemble de la population restent nécessaires (comparaison avec l'année précédente, évolution des effectifs).",
      "Faux : l'absence d'aberrante n'est en rien un motif de réserve ou de démission — c'est un résultat neutre de l'analyse ; réserve et démission répondent à des anomalies significatives non corrigées ou à des irrégularités, jamais à un résultat d'analyse sans signal."
     ],
     "piege": "aucune aberrante ≠ aucune procédure"
    },
    {
     "id": "IT-076",
     "champ": "Arbre — aberrante vs montant tolérable",
     "memento": "§9.1 (arbre de décision)",
     "difficulte": 3,
     "question": "Traitement des valeurs aberrantes selon le montant tolérable (seuil de non-détection). Quelles démarches sont correctes ?",
     "options": [
      "Aberrantes au-dessus du montant tolérable (A, B) → vérification par pièces justificatives ; l'aberrante en dessous (C, qualité non douteuse) et le reste de la population → échantillon aléatoire sur pièces.",
      "Aberrante inférieure au montant tolérable → apprécier si des facteurs qualitatifs impliquent un risque d'erreur potentiel.",
      "Aberrante inférieure au montant tolérable → aucune mesure supplémentaire n'est nécessaire puisqu'elle est sous le seuil.",
      "Deux aberrantes sous le seuil de non-détection → demander les justificatifs des deux et ne rien faire sur le reste de la population."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Juste : conforme à l'arbre du mémento §9.1 — les aberrantes au-dessus du montant tolérable font l'objet d'opérations complémentaires (vérification par pièces) ; celle en dessous, sans facteur qualitatif douteux, rejoint le reste de la population, couvert par échantillon aléatoire sur pièces.",
      "Juste : une aberrante inférieure au montant tolérable déclenche l'examen des facteurs qualitatifs — s'ils impliquent un risque d'erreur potentiel, on réévalue l'évaluation des risques initiale et on ajoute des opérations complémentaires (mémento §9.1).",
      "Faux : « sous le seuil » n'autorise jamais un classement sans examen — l'arbre impose l'appréciation des facteurs qualitatifs avant de conclure qu'aucune opération supplémentaire n'est nécessaire ; jamais d'écartement silencieux.",
      "Faux, double erreur : sous le seuil, la démarche prévue est l'appréciation des facteurs qualitatifs (pas une vérification systématique par pièces), et « ne rien faire sur le reste de la population » est exclu — la population résiduelle doit aussi être couverte."
     ],
     "piege": "sous le seuil ≠ écartement silencieux"
    },
    {
     "id": "IT-077",
     "champ": "Faux positifs / faux négatifs",
     "memento": "§9.2",
     "difficulte": 3,
     "question": "Concernant les faux positifs et faux négatifs dans l'analyse des valeurs aberrantes / le JET, quelles affirmations sont correctes ?",
     "options": [
      "Des écritures « Monthly Payroll Secretary » ressorties par le mot-clé « secret » sont des faux positifs : sauf autre signal, elles peuvent être écartées de l'échantillon (avec jugement professionnel et documentation).",
      "Une machine ajustée en cours d'année sans aucun écart d'amortissement détecté est un faux négatif : une procédure d'audit alternative s'impose (l'outil peut être mal calibré).",
      "Le faux positif est le plus dangereux car il masque une véritable anomalie.",
      "Un faux négatif peut être écarté sans autre procédure s'il n'y a pas d'autres « flags »."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Juste : des écritures « Monthly Payroll Secretary » ressorties par le mot-clé « secret » sont un faux positif classique (le test signale à tort une condition) ; sans autre signal, elles peuvent être écartées de l'échantillon — mais uniquement avec jugement professionnel et documentation, jamais en silence (mémento §9.2 ⚠️).",
      "Juste : une machine ajustée en cours d'année sans aucun écart détecté est un faux négatif — le test signale à tort l'absence d'anomalie ; l'outil est peut-être mal calibré et une procédure d'audit alternative s'impose (mémento §9.2 ; cas Bohrer, cours ch04 §5.3).",
      "Faux : c'est l'inverse — le faux négatif est le plus dangereux car il masque une véritable anomalie et peut falsifier l'opinion d'audit ; le faux positif ne fait « que » gaspiller du temps et des ressources (mémento §9.2).",
      "Faux : c'est le faux positif que l'on peut écarter avec jugement et documentation ; un faux négatif suspecté exige au contraire une procédure d'audit alternative et un recalibrage prudent de l'outil — l'écarter laisserait passer une anomalie réelle."
     ],
     "piege": "confusion faux positif / faux négatif"
    },
    {
     "id": "IT-078",
     "champ": "Aberrantes identifiées — suite & signification",
     "memento": "§9.1",
     "difficulte": 2,
     "question": "Vous avez identifié des valeurs aberrantes (frais d'un manager, factures d'un fournisseur, montant extrême, aberrantes DA). Quelles démarches sont correctes ?",
     "options": [
      "Des aberrantes concentrées sur les frais d'un seul manager appellent des procédures d'audit supplémentaires (elles ne prouvent pas à elles seules une infraction).",
      "Des factures anormalement élevées d'un fournisseur → procédures complémentaires pour comprendre la relation client-fournisseur (ne pas supprimer ni ignorer l'aberration).",
      "Un montant très supérieur aux autres aberrations signifie nécessairement une fraude.",
      "Des aberrantes identifiées → demandes d'informations auprès de la direction pour les comprendre, puis autres procédures nécessaires."
     ],
     "correct": [
      0,
      1,
      3
     ],
     "explications": [
      "Juste : des aberrantes concentrées sur les frais d'un seul manager appellent des procédures d'audit supplémentaires — une aberration est un signal à investiguer, elle ne prouve pas à elle seule une infraction (mémento §9, 🎯 But : une aberration n'est pas une anomalie).",
      "Juste : des factures anormalement élevées d'un fournisseur déclenchent des procédures complémentaires pour comprendre la relation client-fournisseur ; supprimer ou ignorer l'aberration est exclu — jamais d'écartement silencieux (mémento §9.2 ⚠️).",
      "Faux : un montant très supérieur aux autres ne signifie jamais « nécessairement » une fraude — c'est un signal à qualifier par l'arbre de décision (montant tolérable, facteurs qualitatifs, explications), pas une conclusion automatique.",
      "Juste : les aberrantes identifiées appellent des demandes d'informations auprès de la direction pour les comprendre, puis les autres procédures d'audit nécessaires selon les explications obtenues (mémento §9.1)."
     ]
    },
    {
     "id": "IT-079",
     "champ": "Analyse de marge — régression linéaire",
     "memento": "§7.3 (procédures analytiques)",
     "difficulte": 3,
     "question": "Analyse des marges par régression linéaire (charges de marchandises = variable x indépendante ; chiffre d'affaires = variable y dépendante). Quelle affirmation est FAUSSE ?",
     "options": [
      "À pente égale, une droite décalée verticalement vers le haut (ordonnée à l'origine plus élevée) traduit une marge globalement supérieure sur tous les CA.",
      "Si deux droites de tendance se croisent, l'une a nécessairement une pente différente de l'autre.",
      "Une pente plus élevée traduit une marge plus élevée (rapport charges/CA plus faible).",
      "Si deux droites de tendance se croisent, cela signifie qu'elles ont la même pente et une marge identique."
     ],
     "correct": 3,
     "explications": [
      "Affirmation exacte, donc pas la réponse : à pente égale, une ordonnée à l'origine plus élevée décale la droite vers le haut — pour chaque niveau de charges, le CA est supérieur, donc la marge globalement plus élevée.",
      "Affirmation exacte, donc pas la réponse : deux droites qui se croisent ont nécessairement des pentes différentes — deux droites de même pente sont parallèles (ou confondues) et ne se croisent jamais en un seul point.",
      "Affirmation exacte, donc pas la réponse : avec les charges en x et le CA en y, une pente plus élevée signifie plus de CA par franc de charges, donc un rapport charges/CA plus faible et une marge plus élevée.",
      "C'est l'affirmation FAUSSE recherchée : des droites qui se croisent ne peuvent pas avoir la même pente (elles seraient parallèles), et des pentes différentes traduisent des marges différentes — l'option contredit la géométrie élémentaire de la régression."
     ],
     "piege": "lecture des droites de régression"
    },
    {
     "id": "IT-080",
     "champ": "Nouveau produit haut de gamme — stratégie aberrantes",
     "memento": "§9.1",
     "difficulte": 3,
     "question": "Analyse des marges : ~276 écritures « PROD…KARAT » (nouveau produit haut de gamme connu, prix ~CHF 8 500) forment un amas serré parmi les aberrantes hautes ; restent quelques aberrantes non expliquées (3 basses, 2 hautes). Comment concevez-vous la stratégie d'audit sur les aberrantes ?",
     "options": [
      "Les écritures « KARAT » ne sont pas de vraies aberrantes (population distincte, explicable) : elles rejoignent le reste de la population, contrôlé analytiquement (attente sur données antérieures) ; les aberrantes restantes (3 basses, 2 hautes) sont vérifiées individuellement (auditions + pièces).",
      "Les valeurs limites des aberrantes sont fixées d'entrée et non révisables ; le texte comptable est sans importance : les ~281 aberrantes sont toutes vérifiées par pièces, l'échantillon de toute la population étant le plus efficace.",
      "Les aberrantes étant identifiées, aucune évaluation plus poussée n'est pertinente ; vu leur nombre, on applique simplement un échantillon à l'ensemble des aberrantes.",
      "L'analyse ne pouvant être menée, la population n'est pas ségréguée et un échantillon de toute la population est contrôlé."
     ],
     "correct": 0,
     "explications": [
      "Correct : l'amas « KARAT » s'explique intégralement par un nouveau produit haut de gamme connu — ce ne sont pas de vraies aberrantes mais une population distincte, reclassée avec le reste contrôlé analytiquement ; seules les aberrantes réellement inexpliquées (3 basses, 2 hautes) sont vérifiées individuellement par auditions et pièces (logique de ségrégation, mémento §9.1).",
      "Faux : les valeurs limites des aberrantes sont révisables au vu des explications obtenues, et le texte comptable (« PROD…KARAT ») est précisément l'information qui permet de qualifier l'amas ; vérifier par pièces ~281 « aberrantes » dont 276 sont expliquées est inefficient.",
      "Faux : l'identification n'est que la première des trois étapes (identification → évaluation → conclusion, cours ch04 §5.3) ; l'évaluation des aberrantes (explications, montant tolérable, facteurs qualitatifs) est obligatoire — échantillonner indistinctement toutes les aberrantes ignore leur qualification.",
      "Faux : l'analyse peut parfaitement être menée — les données permettent de ségréguer la population (amas KARAT expliqué / reste régulier / aberrantes inexpliquées) ; renoncer à la ségrégation gaspille l'information obtenue et dilue le risque."
     ],
     "piege": "aberrante expliquée = population distincte"
    },
    {
     "id": "IT-081",
     "champ": "Granularité & agrégation (Salesforce → SAP)",
     "memento": "§7.1 · §9.1",
     "difficulte": 3,
     "question": "Dans Salesforce, quantité, prix de vente et prix coûtant sont saisis par vente ; chaque jour les données sont cumulées puis chargées dans SAP (CA et charges de marchandises agrégés). Marge = (CA − charges) / CA. Quelle affirmation sur les valeurs aberrantes de marge est FAUSSE ?",
     "options": [
      "Les valeurs aberrantes présentes dans Salesforce peuvent être perdues lors du cumul et donc ne pas être identifiées dans SAP.",
      "Les données de Salesforce sont plus granulaires que celles de SAP, donc moins comprimées.",
      "Les deux structures de données peuvent en principe être utilisées pour une analyse de la marge.",
      "La marge moyenne quotidienne est identique dans SAP et dans Salesforce."
     ],
     "correct": 3,
     "explications": [
      "Affirmation exacte, donc pas la réponse : le cumul quotidien compense les ventes extrêmes entre elles — des marges aberrantes visibles au niveau de la vente individuelle dans Salesforce peuvent disparaître dans les agrégats SAP.",
      "Affirmation exacte, donc pas la réponse : les données saisies par vente dans Salesforce sont plus granulaires, donc moins comprimées, que les agrégats quotidiens chargés dans SAP.",
      "Affirmation exacte, donc pas la réponse : les deux structures permettent en principe une analyse de la marge — mais avec une puissance de détection des aberrantes très différente selon la granularité.",
      "C'est l'affirmation FAUSSE recherchée : la marge quotidienne calculée sur les agrégats SAP est une moyenne pondérée par le CA, différente en général de la moyenne des marges individuelles de Salesforce — l'agrégation modifie la mesure et masque les aberrantes."
     ],
     "piege": "l'agrégation masque les aberrantes"
    },
    {
     "id": "IT-082",
     "champ": "Walk-through vente — catégorie de risque des données",
     "memento": "§8.2 (4 risques de qualité)",
     "difficulte": 2,
     "question": "Test de cheminement (walk-through) du processus de vente : seules deux personnes définies devaient comptabiliser les transactions dans Salesforce, mais l'auditeur informatique constate que la direction pouvait modifier des écritures via une autorisation individuelle. Quel risque cette constatation illustre-t-elle ?",
     "options": [
      "Risque lié à la saisie des données.",
      "Risque lié à l'extraction des données.",
      "Risque lié à l'intégrité des données.",
      "Risque lié à la manipulation des données."
     ],
     "correct": 2,
     "explications": [
      "Faux : le risque de saisie (input) concerne l'enregistrement initial correct des transactions ; ici, les ventes sont saisies par les deux personnes prévues — le problème est la possibilité de modification ultérieure des écritures.",
      "Faux : l'extraction n'est pas en cause — la constatation porte sur ce qui peut arriver aux données dans le système source, avant toute extraction pour la DA.",
      "Correct : une direction capable de modifier des écritures au-delà des personnes autorisées met en cause l'intégrité des données à la source (traitement) — la population servant de base à la DA peut avoir été altérée (mémento §8.2, risque n° 2).",
      "Faux : dans la taxonomie des 4 risques de qualité (mémento §8.2), la « manipulation des données » vise typiquement l'altération par le spécialiste DA ou l'équipe d'audit après extraction ; la possibilité d'altération par la direction dans le système source relève de l'intégrité des données."
     ],
     "piege": "confusion intégrité / manipulation"
    }
   ]
  },
  {
   "id": "M10",
   "titre": "10 · IPE / EUC & rapports",
   "questions": [
    {
     "id": "IT-083",
     "champ": "Définitions IPE / EUC / IUC",
     "memento": "§10.1",
     "difficulte": 2,
     "question": "Votre assistant confond les sigles du domaine (IPE, EUC, IUC). Parmi les affirmations suivantes, lesquelles sont correctes ?",
     "options": [
      "IPE (Information Produced by the Entity) : toute information créée par l'entité via ses applications IT, ses outils EUC ou manuellement, dès lors qu'elle sert de base à un contrôle, d'élément probant ou de population de sélection.",
      "EUC (End-User Computing) : outil individuel autonome (typiquement Excel) ; l'information qui y est créée ou modifiée risque de ne pas être complète, exacte ou pertinente.",
      "IUC (Information Used by Control) : les informations utilisées par l'entité pour mettre en œuvre ou exécuter ses contrôles internes.",
      "IUC désigne les informations utilisées par l'auditeur pour vérifier les contrôles de l'entité."
     ],
     "correct": [
      0,
      1,
      2
     ],
     "explications": [
      "Correct : l'IPE désigne toute information créée par l'entité — via ses applications IT, ses outils EUC ou manuellement — dès lors qu'elle sert de base à un contrôle, d'élément probant ou de population de sélection (mémento §10.1, ISA-CH 500.9).",
      "Correct : l'EUC est un outil individuel autonome, typiquement Excel ; l'information qui y est créée ou modifiée risque de ne pas être complète, exacte ou pertinente — c'est précisément le 5e risque IPE (mémento §10.2).",
      "Correct : l'IUC (Information Used by Control) désigne les informations que l'entité utilise pour mettre en œuvre ou exécuter ses propres contrôles internes ; c'est un concept voisin de l'IPE mais distinct — l'IPE sert de preuve à l'auditeur, l'IUC sert aux contrôles de l'entité. Tension à connaître : le mémento §10.1 (⚠️ Piège) signale « IUC » comme un sigle ABSENT de son corpus (piège de vocabulaire importé) ; la définition donnée ici reste néanmoins exacte sur le fond, raison pour laquelle la source d'examen la retient comme affirmation correcte.",
      "Faux : l'IUC concerne les contrôles exécutés par l'entité, pas la vérification faite par l'auditeur ; attribuer ces informations à l'auditeur confond l'IUC avec les éléments probants qu'il collecte lui-même. Le sigle IUC n'appartient d'ailleurs pas au corpus IPE/EUC du mémento (§10.1) — c'est un faux ami de vocabulaire."
     ],
     "piege": "Sigle IUC : faux ami"
    },
    {
     "id": "IT-084",
     "champ": "Ce qui ne relève PAS de l'IPE",
     "memento": "§10.1",
     "difficulte": 2,
     "question": "L'IPE regroupe les informations produites par l'entité elle-même et utilisées lors de l'audit. Parmi les éléments suivants, lesquels ne relèvent PAS de l'IPE de l'entité auditée ?",
     "options": [
      "Les messages publiés sur les réseaux sociaux.",
      "Les factures reçues des fournisseurs.",
      "Une liste d'ancienneté des créances éditée par le système du client.",
      "Un calcul de provisions pour créances douteuses établi par l'entité."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "À juste titre exclu : les messages publiés sur les réseaux sociaux ne sont pas des informations issues des applications ou traitements de l'entité servant d'élément probant ou de population d'audit — ils ne relèvent donc pas de l'IPE au sens du mémento §10.1.",
      "À juste titre exclu : les factures reçues des fournisseurs sont des documents produits par des tiers ; elles constituent des éléments probants externes, et non de l'information produite PAR l'entité.",
      "Relève bien de l'IPE : la liste d'ancienneté des créances éditée par le système du client est l'exemple fil rouge du mémento (§10.2) — information produite par l'entité et utilisée comme preuve ou population de sélection.",
      "Relève bien de l'IPE : un calcul de provisions établi par l'entité (souvent via un EUC comme Excel) est une information produite par l'entité servant d'élément probant ; l'auditeur doit en prouver l'exhaustivité et l'exactitude."
     ]
    },
    {
     "id": "IT-085",
     "champ": "Les 5 risques IPE",
     "memento": "§10.2",
     "difficulte": 3,
     "question": "Lors du contrôle d'une IPE (exemple : liste d'ancienneté des créances), l'auditeur recense cinq risques types. Parmi les affirmations suivantes, lesquelles sont correctes ?",
     "options": [
      "Les données extraites de l'application IT peuvent ne pas correspondre aux données prévues ou être incomplètes (extraction manipulée, lignes supprimées).",
      "Les paramètres saisis par l'utilisateur peuvent être inappropriés (p. ex. tranches d'ancienneté 30/60/90 non conformes au manuel du groupe).",
      "Les calculs et catégorisations effectués à la création de l'IPE sont, par principe, toujours corrects.",
      "Le risque de perte ou de modification lors du transfert vers l'outil de l'utilisateur final (EUC) n'est pas directement lié à l'application IT."
     ],
     "correct": [
      0,
      1,
      3
     ],
     "explications": [
      "Correct : c'est le risque d'extraction — les données extraites peuvent ne pas correspondre aux données prévues ou être incomplètes (extraction manipulée, lignes supprimées par le responsable finances) ; risque n°2 du mémento §10.2.",
      "Correct : c'est le risque des paramètres utilisateur inappropriés — par exemple des tranches d'ancienneté 30/60/90 non conformes au manuel du groupe ; risque n°3 du mémento §10.2.",
      "Faux : l'un des 5 risques IPE porte précisément sur des calculs et catégorisations incorrects à la création de l'IPE (p. ex. tranches 30/60/90 appliquées au lieu de 35/65/95 jours) ; affirmer qu'ils sont « par principe toujours corrects » nie ce risque.",
      "Correct : le risque de perte ou de modification lors du transfert vers l'EUC tient aux interfaces et aux manipulations en aval, pas à l'application IT source elle-même — risque n°4 du mémento §10.2 (transfert entre applications)."
     ],
     "piege": "Risque de transfert hors application"
    },
    {
     "id": "IT-086",
     "champ": "Audit de l'IPE : constatations & réactions",
     "memento": "§10.1",
     "difficulte": 2,
     "question": "Concernant l'audit d'une IPE, votre assistant liste des constatations recherchées et des réactions d'audit. Lesquelles ne sont PAS typiques dans ce cadre ?",
     "options": [
      "Vérifier que l'évaluation des informations en matière de publication (disclosure) convient à l'établissement des comptes.",
      "Se limiter à une demande d'informations auprès de la direction pour lever les risques liés à l'IPE.",
      "Obtenir l'assurance que l'information est suffisamment fiable et que les éléments probants sont suffisants et appropriés.",
      "Réaliser des contrôles de substance comparant l'information avec les documents sources."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Non typique (donc à cocher) : l'évaluation de la présentation et des informations à publier (disclosure) relève de l'audit des états financiers dans son ensemble, pas du contrôle de fiabilité d'une IPE, qui vise l'exhaustivité et l'exactitude (ISA-CH 500.9).",
      "Non typique (donc à cocher) : une simple demande d'informations (inquiry) auprès de la direction ne constitue jamais un élément probant suffisant pour lever les risques IPE — il faut des tests de contrôles ou des contrôles de substance (approche combinée, mémento §10.2).",
      "Typique : l'objectif du contrôle d'une IPE est précisément d'obtenir l'assurance que l'information est suffisamment fiable et que les éléments probants sont suffisants et appropriés (ISA-CH 500.9).",
      "Typique : les contrôles de substance comparant l'information avec les documents sources sont l'une des deux réponses d'audit standard sur l'IPE (approche combinée contrôles + substance, mémento §10.2)."
     ]
    },
    {
     "id": "IT-087",
     "champ": "Assertions IPE via GITC & EUC Excel",
     "memento": "§10.1 · §10.2",
     "difficulte": 3,
     "question": "Pour un client soumis au contrôle ordinaire, vous vous appuyez sur un fichier Excel (EUC) d'évaluation des engagements de leasing, ainsi que sur des rapports système (IPE). Quelles affirmations sont correctes ?",
     "options": [
      "Les assertions d'une IPE couvertes par les GITC sont l'exhaustivité et l'exactitude.",
      "Pour garantir l'exactitude du fichier Excel, on vérifie les formules et l'exhaustivité des données saisies.",
      "L'exactitude du fichier Excel se prouve en vérifiant les contrôles généraux informatiques (GITC) portant sur Excel.",
      "La vérification de l'existence physique des objets de leasing garantit l'exactitude du fichier Excel."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Correct : les assertions d'une IPE couvertes par les GITC (contrôles généraux informatiques) sont l'exhaustivité et l'exactitude — ce que l'auditeur doit prouver pour toute IPE (mémento §10.1, ISA-CH 500.9).",
      "Correct : un fichier Excel est un EUC autonome, hors du périmètre des GITC ; son exactitude se vérifie directement, par revue des formules et contrôle de l'exhaustivité des données saisies (5e risque IPE : retouche via l'outil).",
      "Faux : il n'existe pas de GITC « portant sur Excel » — l'EUC est par définition un outil individuel autonome qui échappe aux contrôles généraux informatiques ; c'est précisément pourquoi des vérifications directes (formules, saisies) sont nécessaires.",
      "Faux : la vérification de l'existence physique des objets de leasing couvre l'assertion d'existence des actifs, pas l'exactitude des calculs du fichier Excel (formules, paramètres, données saisies)."
     ],
     "piege": "GITC ne couvrent pas l'EUC"
    },
    {
     "id": "IT-088",
     "champ": "Définition du rapport standard",
     "memento": "§10.3",
     "difficulte": 1,
     "question": "Vous vérifiez des informations produites par l'entité (IPE) à l'aide de rapports système. Qu'entend-on par « rapport standard » ?",
     "options": [
      "Un rapport certifié par un auditeur informatique et servant à l'évaluation de processus standard.",
      "Un rapport fourni avec le système et qui n'a été ni modifié ni adapté.",
      "Un rapport créé et testé par le partenaire de mise en œuvre du système.",
      "Un rapport fourni avec le système mais adapté par la suite aux besoins de l'entreprise."
     ],
     "correct": 1,
     "explications": [
      "Faux : la certification par un auditeur informatique ne définit pas le rapport standard ; cette option évoque plutôt un rapport d'assurance (type SOC / ISAE 3402), qui relève des sociétés de services (§12).",
      "Correct : un rapport standard est fourni avec le système et n'a été ni modifié ni adapté (p. ex. FBL3N dans SAP) ; après confirmation des ITGC, l'auditeur peut s'appuyer dessus (mémento §10.3).",
      "Faux : un rapport créé (et même testé) par le partenaire de mise en œuvre est un développement spécifique pour l'entreprise — donc un rapport personnalisé (p. ex. un « Z_FB » dans SAP), pas un rapport standard.",
      "Faux : dès qu'un rapport fourni avec le système est adapté aux besoins de l'entreprise, il devient un rapport personnalisé (customized) et exige des procédures d'audit alternatives (mémento §10.3)."
     ],
     "piege": "Rapport adapté ≠ standard"
    },
    {
     "id": "IT-089",
     "champ": "Traitement d'audit des rapports",
     "memento": "§10.3",
     "difficulte": 2,
     "question": "Les processus IT du client sont jugés efficaces et fiables. Quelles affirmations sont correctes concernant le traitement d'audit des rapports (standard / personnalisés) ?",
     "options": [
      "L'auditeur teste un échantillon adéquat des rapports standard pertinents pour l'audit des états financiers, une ou plusieurs fois au cours de chaque période d'audit.",
      "Un rapport personnalisé (customized) exige des procédures alternatives pour confirmer les points de données (= IPE).",
      "Pour un rapport standard comme pour un rapport personnalisé, une démarche individuelle est systématiquement requise.",
      "Comme les processus IT sont jugés fiables, aucune procédure d'audit complémentaire n'est nécessaire sur les rapports."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Correct : lorsque les processus IT sont jugés fiables (ITGC confirmés), l'auditeur teste un échantillon adéquat des rapports standard pertinents pour l'audit des états financiers, une ou plusieurs fois par période d'audit (mémento §10.3).",
      "Correct : un rapport personnalisé (customized) — adapté ou créé sur mesure — exige toujours des procédures alternatives pour confirmer les points de données, qui constituent une IPE (mémento §10.3).",
      "Faux : la démarche individuelle n'est requise que pour les rapports personnalisés ; pour un rapport standard, l'auditeur s'appuie sur les ITGC confirmés puis confirme le rapport pertinent, sans démarche systématiquement individuelle.",
      "Faux : la fiabilité des processus IT allège les procédures mais ne les supprime pas — les rapports standard pertinents doivent malgré tout être confirmés (échantillon testé) et les rapports personnalisés exigent des procédures alternatives."
     ],
     "piege": "IT fiable ≠ zéro test"
    },
    {
     "id": "IT-118",
     "champ": "Réconciliation d'une IPE",
     "memento": "§10.2",
     "difficulte": 2,
     "question": "Vous devez valider une extraction système (IPE) servant de population d'audit, par exemple une liste d'ancienneté des créances. Comment se réconcilient respectivement l'exhaustivité et l'exactitude de cette IPE ?",
     "options": [
      "L'exhaustivité se vérifie en rapprochant le total de l'extraction avec le solde des comptes concernés ; l'exactitude en rapprochant des postes choisis aléatoirement avec les pièces justificatives.",
      "L'exhaustivité se vérifie en rapprochant des postes choisis aléatoirement avec les pièces justificatives ; l'exactitude en rapprochant le total de l'extraction avec le solde des comptes.",
      "L'exhaustivité et l'exactitude se vérifient toutes deux par une demande d'informations auprès du responsable informatique du client.",
      "L'exhaustivité et l'exactitude sont réputées acquises dès lors que l'extraction provient d'un rapport standard, sans autre procédure."
     ],
     "correct": 0,
     "explications": [
      "Correct : la réconciliation d'une IPE associe l'exhaustivité au rapprochement du total extrait avec le solde des comptes, et l'exactitude au rapprochement de postes aléatoires avec les pièces justificatives — le tout dans une approche combinée contrôles + substance (mémento §10.2).",
      "Faux : les deux procédures sont inversées — rapprocher des postes individuels avec les pièces prouve l'exactitude des lignes, tandis que seul le rapprochement du total avec le solde des comptes démontre qu'aucune ligne ne manque (exhaustivité).",
      "Faux : une demande d'informations (inquiry) seule n'est jamais un élément probant suffisant pour valider une IPE ; il faut des procédures de rapprochement effectives (contrôles ou substance).",
      "Faux : même pour un rapport standard, l'auditeur doit d'abord confirmer les ITGC puis confirmer le rapport pertinent (mémento §10.3) ; le statut « standard » ne dispense pas de valider l'exhaustivité et l'exactitude de l'extraction utilisée."
     ],
     "piege": "Exhaustivité ↔ exactitude inversées"
    }
   ]
  },
  {
   "id": "M11",
   "titre": "11 · Journal Entry Testing (ISA-CH 240)",
   "questions": [
    {
     "id": "IT-090",
     "champ": "Objectif du JET & management override",
     "memento": "§11.1 · §11.2",
     "difficulte": 2,
     "question": "Concernant l'objectif du Journal Entry Testing (ISA-CH 240), lesquelles des affirmations suivantes sont correctes ?",
     "options": [
      "L'objectif de l'auditeur est de traiter le risque de contournement des contrôles par la direction (management override) et de manipulation ou fraude.",
      "L'audit des écritures annulées au début de la période suivante vise précisément ce risque de management override.",
      "Le JET vise uniquement à identifier les fraudes commises par le conseil d'administration.",
      "Le JET traite avant tout le risque de défaillance technique du système comptable."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Correct : le JET est une procédure obligatoire de l'ISA-CH 240, quelle que soit l'évaluation du risque de fraude ; il traite le risque de contournement des contrôles par la direction (management override) et de manipulation des états financiers (mémento §11.1).",
      "Correct : une écriture passée juste avant la clôture puis annulée au début de la période suivante est un marqueur classique de manipulation du résultat — son audit vise précisément le risque de management override (mémento §11.2, critère « fin de période / post-clôture »).",
      "Faux : le JET ne se limite pas aux fraudes du conseil d'administration ; il vise le forçage des contrôles par la direction au sens large et toute écriture présentant un risque accru de manipulation, quel qu'en soit l'auteur.",
      "Faux : le JET est une procédure anti-fraude, pas un test de fiabilité technique ; les défaillances du système comptable relèvent des ITGC et des contrôles applicatifs (§3-§4), non de l'ISA-CH 240."
     ]
    },
    {
     "id": "IT-091",
     "champ": "Caractéristiques de la fraude (ISA-CH 240)",
     "memento": "§11.1",
     "difficulte": 1,
     "question": "Quelles sont les caractéristiques des fraudes selon les normes d'audit internationales et suisses (ISA-CH 240) ?",
     "options": [
      "Les fraudes sont des erreurs qui conduisent à des anomalies significatives dans les états financiers.",
      "Les fraudes sont des actes menant à des anomalies intentionnelles résultant d'informations financières mensongères ou de détournements d'actifs.",
      "Les fraudes sont un comportement pénalement répréhensible ayant causé un préjudice à l'entreprise.",
      "Les fraudes sont la saisie incorrecte d'écritures due au manque de connaissances des personnes qui les effectuent."
     ],
     "correct": 1,
     "explications": [
      "Faux : une erreur est par définition non intentionnelle ; l'ISA-CH 240 distingue précisément la fraude (acte intentionnel) de l'erreur, même si les deux peuvent conduire à des anomalies significatives.",
      "Correct : selon l'ISA-CH 240, la fraude est un acte intentionnel conduisant à des anomalies, sous deux formes : l'information financière mensongère (fraudulent financial reporting) et le détournement d'actifs. [Écart mémento : le §11 rappelle l'obligation du JET face au management override mais n'énumère pas ces deux formes — définition issue directement de l'ISA-CH 240.]",
      "Faux : la qualification pénale et le préjudice causé à l'entreprise relèvent du droit pénal, pas de la définition d'audit ; l'auditeur ne se prononce pas juridiquement, et la fraude au sens ISA-CH 240 n'exige ni infraction constatée ni préjudice direct pour l'entité.",
      "Faux : une saisie incorrecte due au manque de connaissances est une erreur (non intentionnelle), pas une fraude — l'intention est le critère distinctif de l'ISA-CH 240."
     ]
    },
    {
     "id": "IT-092",
     "champ": "Intégrité des données & exécution",
     "memento": "§11.3",
     "difficulte": 3,
     "question": "Vous réalisez le JET pour un contrôle ordinaire. Quelles affirmations sont correctes concernant le contrôle d'intégrité des données reçues et l'évaluation des écritures individuelles ?",
     "options": [
      "Le contrôle d'intégrité vérifie notamment que tous les champs demandés sont fournis et remplis, que le nombre de line items correspond exactement au nombre convenu et que débit = crédit (soldes à zéro).",
      "Chaque écriture doit reposer sur une transaction commerciale réelle, être dûment autorisée et correctement comptabilisée ; pour les ajustements « top-side », on évalue les raisons invoquées par la direction.",
      "Le contrôle d'intégrité est satisfait dès lors que les champs sont en majorité remplis et que le nombre de line items correspond globalement au nombre convenu.",
      "Un justificatif manquant peut être abandonné s'il concerne une écriture inférieure au seuil de matérialité."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Correct : le contrôle d'intégrité du fichier JET exige une correspondance exacte — tous les champs demandés fournis et remplis, nombre de line items strictement égal au nombre convenu, débit = crédit (soldes à zéro), fourchette de dates et codes conformes aux attentes (mémento §11.3).",
      "Correct : à l'exécution, chaque écriture doit reposer sur une opération réelle, être dûment autorisée et correctement comptabilisée dans la bonne période (justificatif + discussion avec la direction) ; pour les ajustements « top-side », l'auditeur évalue les raisons invoquées par la direction (mémento §11.3).",
      "Faux : « en majorité remplis » et « globalement correspondant » ne suffisent pas — l'intégrité exige une correspondance exacte ; tout écart (champ vide, line item manquant) doit être élucidé avant d'exploiter les données.",
      "Faux : un justificatif manquant ne s'abandonne jamais pour motif de matérialité — le JET vise la fraude, pas le seuil de signification ; toute pièce manquante impose une enquête (mémento §11.1, piège classique)."
     ],
     "piege": "Matérialité n'excuse aucun justificatif"
    },
    {
     "id": "IT-093",
     "champ": "Échantillon de suivi & scepticisme",
     "memento": "§11.1 · §11.3",
     "difficulte": 2,
     "question": "Face à un rapport présentant de nombreuses divergences potentielles, comment sélectionner l'échantillon de suivi et appliquer le scepticisme professionnel dans le JET ?",
     "options": [
      "Réaliser un test unique (« test of one ») pour la compréhension, puis étendre les tests aux schémas et écritures peu clairs ou suspects.",
      "Intégrer l'imprévisibilité (taille et type d'écritures) dans la sélection.",
      "Limiter les tests aux écritures qui dépassent l'erreur tolérable (TE).",
      "Se contenter d'un aperçu général puis étendre les tests aux seules transactions courantes."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Correct : l'approche du JET consiste en un « test of one » pour comprendre le schéma d'écritures, puis une extension des tests aux schémas et écritures peu clairs ou suspects (mémento §11.3).",
      "Correct : l'imprévisibilité — dans la taille ET le type des écritures sélectionnées — est un élément requis de la sélection, précisément pour déjouer une direction qui anticiperait les critères de l'auditeur (mémento §11.1 et §11.2).",
      "Faux : limiter les tests aux écritures dépassant l'erreur tolérable (TE) est l'erreur classique du JET — la sélection doit inclure des écritures sous le seuil, car la fraude se dissimule souvent dans des montants non significatifs (mémento §11.1).",
      "Faux : le scepticisme professionnel impose d'étendre les tests aux écritures inhabituelles ou suspectes, pas aux transactions courantes ; un simple aperçu général ne traite pas le risque de management override."
     ],
     "piege": "Sélection limitée à la TE"
    },
    {
     "id": "IT-094",
     "champ": "Critères de sélection des écritures (SCOT/FSCP)",
     "memento": "§11.2",
     "difficulte": 2,
     "question": "Le réviseur sélectionne les écritures à tester selon des critères de risque (terminologie : SCOT = Significant Class of Transactions ; FSCP = Financial Statement Close Process). Quelles affirmations sont correctes ?",
     "options": [
      "Les facteurs de sélection incluent : types d'écritures, type/complexité des SCOT et du FSCP, écritures à caractéristique unique, complexité des applications IT et introduction d'un élément d'imprévisibilité.",
      "On prête une attention particulière aux appariements de comptes inhabituels et aux montants ronds ou à numéro final unique.",
      "Les écritures qui semblent a priori plausibles et aisément explicables requièrent la même attention renforcée que les écritures inhabituelles.",
      "Le caractère significatif des montants est le principal critère de sélection des écritures à tester."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Correct : les facteurs de sélection énumérés (types d'écritures, type et complexité des SCOT et du FSCP, écritures à caractéristique unique, complexité des applications IT, imprévisibilité) correspondent aux critères de risque du JET (mémento §11.2).",
      "Correct : les appariements de comptes inhabituels (p. ex. débit d'actif / crédit de charges) et les montants ronds ou à numéro final unique sont des caractéristiques « à risque » typiques évoquant une fraude (ISA-CH 240, mémento §11.2).",
      "Faux : les écritures plausibles et aisément explicables présentent un risque faible ; l'attention renforcée se porte sur les écritures inhabituelles — manuelles hors marche normale, de fin de période, passées par des utilisateurs inattendus (mémento §11.2).",
      "Faux : la sélection du JET repose sur des critères de risque, pas sur la seule matérialité des montants — l'imprévisibilité impose même d'inclure des écritures sous le seuil de signification (mémento §11.1)."
     ],
     "piege": "Matérialité ≠ critère principal"
    }
   ]
  },
  {
   "id": "M12",
   "titre": "12 · Sociétés de services & externalisation",
   "questions": [
    {
     "id": "IT-095",
     "champ": "Modèles de service cloud",
     "memento": "§12.2",
     "difficulte": 2,
     "question": "Deux situations d'externalisation sont soumises à l'auditeur. Quelles affirmations sur le modèle de service cloud concerné sont correctes ?",
     "options": [
      "Une application de comptabilité en ligne utilisée via le cloud, dont l'infrastructure n'est pas gérée par le client, relève du modèle SaaS (Software as a Service).",
      "Lorsque le client reste responsable de l'exploitation de tout le système, hormis le serveur physique ou virtuel, il s'agit d'un modèle IaaS (Infrastructure as a Service).",
      "Dans un modèle PaaS, le fournisseur ne met à disposition que le réseau et le matériel physique, le client gérant lui-même le système d'exploitation et la base de données.",
      "Le modèle « WaaS » constitue le modèle standard d'externalisation cloud pour la comptabilité."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Correct : une application utilisée via le cloud sans que le client ne gère l'infrastructure relève du SaaS — le prestataire prend en charge toutes les couches jusqu'à l'application incluse (spectre empilé Housing → IaaS → PaaS → SaaS, cité au mémento §12.2 connexions ; le détail couche par couche n'y est pas développé).",
      "Correct : si le prestataire ne fournit que le serveur (physique ou virtuel) et que le client exploite tout le reste (système d'exploitation, base de données, application), il s'agit de l'IaaS — seule l'infrastructure est externalisée.",
      "Faux : dans un PaaS, le fournisseur met à disposition la plateforme complète (infrastructure + système d'exploitation + base de données/middleware), le client ne gérant que ses applications ; la description donnée (réseau et matériel seuls, OS et base de données chez le client) correspond plutôt au housing/IaaS.",
      "Faux : « WaaS » n'est pas un modèle du spectre d'externalisation cloud — les modèles standard sont Housing, IaaS, PaaS et SaaS ; c'est un sigle inventé qui sert de distracteur."
     ],
     "piege": "Empilement des couches cloud"
    },
    {
     "id": "IT-096",
     "champ": "Contrôles de l'usage du cloud",
     "memento": "§12",
     "difficulte": 2,
     "question": "Un client audité recourt au cloud (y compris pour un ERP). Quels contrôles/mesures sont appropriés face aux risques liés au cloud ?",
     "options": [
      "Classification des données autorisées à être traitées ou sauvegardées dans le cloud.",
      "Définition des pays dans lesquels les données peuvent être stockées.",
      "Chiffrement des données lors du transfert et du stockage par des procédés cryptographiques.",
      "Traiter le cloud privé de l'organisation et le cloud public comme un seul et même environnement."
     ],
     "correct": [
      0,
      1,
      2
     ],
     "explications": [
      "Correct : le passage au cloud est un changement significatif de l'environnement IT ; classifier les données autorisées à être traitées ou sauvegardées dans le cloud est une mesure de gouvernance clé — toutes les données n'ont pas vocation à quitter l'entreprise. [Écart mémento : ces mesures de gouvernance cloud — classification, localisation, chiffrement — ne sont pas détaillées au §12, centré sur les rapports SOC ; réponse fondée sur la source d'examen.]",
      "Correct : définir les pays dans lesquels les données peuvent être stockées répond aux exigences de localisation des données (protection des données, accès d'autorités étrangères, conservation) — mesure standard d'encadrement du cloud.",
      "Correct : le chiffrement des données lors du transfert et du stockage par des procédés cryptographiques est un contrôle standard face aux risques de confidentialité et d'intégrité liés au cloud.",
      "Faux : le cloud privé (dédié à l'organisation) et le cloud public présentent des profils de risque différents (mutualisation, degré de contrôle, localisation) ; les traiter comme un seul environnement ignore cette différence et ne constitue pas une mesure de maîtrise des risques."
     ]
    },
    {
     "id": "IT-097",
     "champ": "ISAE 3402 Type 1 vs Type 2",
     "memento": "§12.2",
     "difficulte": 2,
     "question": "Selon l'ISAE 3402, deux types de rapports existent pour les services externalisés. Quel énoncé décrit correctement un rapport de Type 2 ?",
     "options": [
      "Il décrit la conception des contrôles IT à une date de référence, sans se prononcer sur leur efficacité opérationnelle.",
      "Il décrit l'exécution et l'efficacité opérationnelle des contrôles IT sur une période définie (description des contrôles + évaluation de leur efficacité).",
      "Il examine l'existence, la conception des contrôles et la description du système, mais pas leur efficacité opérationnelle.",
      "Il confirme, à un moment indéterminé, l'exhaustivité des contrôles et se fonde toujours sur un rapport de Type 1 préalable."
     ],
     "correct": 1,
     "explications": [
      "Faux : la conception des contrôles à une date de référence, sans jugement sur leur efficacité opérationnelle, définit le rapport de Type 1, pas le Type 2 (mémento §12.2).",
      "Correct : le rapport de Type 2 décrit la conception ET l'efficacité opérationnelle des contrôles, testée sur une période définie (max 12 mois) ; c'est le seul type sur lequel l'auditeur peut s'appuyer pour faire confiance aux contrôles de la société de services (ISAE 3402, mémento §12.2).",
      "Faux : existence, conception des contrôles et description du système sans test d'efficacité opérationnelle — c'est encore la définition du Type 1 ; le Type 2 ajoute précisément les tests d'efficacité opérationnelle (TOE).",
      "Faux : le Type 2 couvre une période définie (jusqu'à 12 mois), pas « un moment indéterminé », et il n'exige aucun rapport de Type 1 préalable — les deux types sont indépendants."
     ],
     "piege": "SOC Type 1 ≠ Type 2"
    },
    {
     "id": "IT-098",
     "champ": "BCM vs ORM",
     "memento": "§12",
     "difficulte": 2,
     "question": "Lors de la planification, la direction distingue « Business Continuity Management » (BCM) et « gestion des risques opérationnels » (ORM). Comment la BCM se distingue-t-elle de l'ORM ?",
     "options": [
      "La BCM ne porte que sur les risques non financiers menaçant la survie de l'entreprise ; l'ORM se concentre sur les risques financiers et non financiers avant toute crise.",
      "La BCM garantit que l'entreprise reste opérationnelle en situation de crise et se rétablit après des pertes (protection des fonctions critiques) ; l'ORM identifie et prévient les risques avant la survenance des crises.",
      "La BCM se concentre sur l'identification et la prévention des risques de processus ; l'ORM est plus large et inclut des aspects stratégiques.",
      "La BCM porte sur les risques que l'entreprise ne peut pas influencer ; l'ORM sur ceux qu'elle peut activement gérer et éviter."
     ],
     "correct": 1,
     "explications": [
      "Faux : la distinction BCM/ORM n'oppose pas risques financiers et non financiers — la BCM protège les fonctions critiques en cas de crise quelle que soit la nature du risque, et l'ORM couvre l'ensemble des risques opérationnels en amont.",
      "Correct : la BCM (norme de référence ISO 22301) garantit que l'entreprise reste opérationnelle en situation de crise et se rétablit après des pertes — protection des fonctions critiques, plans de crise/urgence/continuité/rétablissement, objectifs RTO/RPO — tandis que l'ORM identifie et prévient les risques avant la survenance des crises. [Écart mémento : la distinction BCM/ORM (ISO 22301, RTO/RPO) n'est pas traitée dans le mémento §12 ; réponse fondée sur la source d'examen.]",
      "Faux : c'est l'inverse — l'identification et la prévention des risques en amont caractérisent l'ORM ; la BCM intervient sur la continuité et le rétablissement en cas de crise, pas sur la prévention des risques de processus.",
      "Faux : la distinction ne porte pas sur le caractère influençable des risques — la BCM prépare la réponse à la crise, y compris pour des risques maîtrisables, et l'ORM gère aussi des risques externes que l'entreprise ne contrôle pas."
     ]
    },
    {
     "id": "IT-119",
     "champ": "Schéma SOC : CUEC / CSOC",
     "memento": "§12.1",
     "difficulte": 3,
     "question": "Un rapport SOC avec opinion non qualifiée (« propre ») est remis à l'auditeur de l'entité utilisatrice. Concernant les contrôles complémentaires CUEC et CSOC, quelle affirmation est correcte ?",
     "options": [
      "Les CUEC sont les contrôles que l'entité utilisatrice doit elle-même exercer ; si elle ne les met pas en œuvre, le rapport SOC, même sans réserve, ne garantit rien pour l'audit.",
      "Les CUEC sont des contrôles à la charge de la société de services, testés dans la section IV du rapport SOC.",
      "Les CSOC désignent les contrôles complémentaires que l'auditeur de l'entité utilisatrice doit exécuter lui-même chez les sous-traitants.",
      "Une opinion non qualifiée couvre automatiquement les contrôles des sous-traitants, même en méthode carve-out."
     ],
     "correct": 0,
     "explications": [
      "Correct : les CUEC (Complementary User Entity Controls) sont les contrôles que la société de services suppose mis en œuvre chez l'entité utilisatrice, sans lesquels son propre dispositif ne suffit pas ; un rapport SOC « propre » ne garantit donc rien pour l'audit si le client n'exerce pas ses CUEC (mémento §12.1, ISA-CH 402).",
      "Faux : les CUEC sont précisément à la charge de l'entité utilisatrice, pas de la société de services ; l'auditeur des services ne les teste pas — la section IV du rapport SOC couvre les contrôles de la société de services elle-même.",
      "Faux : les CSOC (Complementary Subservice Organization Controls) sont les contrôles supposés à la charge des sous-traitants de la société de services (méthode carve-out) ; ce ne sont pas des procédures que l'auditeur de l'entité utilisatrice exécute lui-même.",
      "Faux : en méthode carve-out, les contrôles des sous-traitants sont exclus du périmètre du rapport SOC ; l'opinion, même non qualifiée, ne les couvre pas — c'est justement pourquoi les CSOC existent comme hypothèses complémentaires."
     ],
     "piege": "Rapport SOC propre ≠ suffisant"
    },
    {
     "id": "IT-120",
     "champ": "SOC 1 / SOC 2 / SOC 3",
     "memento": "§12.2",
     "difficulte": 2,
     "question": "Quel énoncé associe correctement les rapports SOC 1, SOC 2 et SOC 3 à leur norme et à leur contenu ?",
     "options": [
      "SOC 1 (ISAE 3402) couvre les contrôles pertinents pour le reporting financier de l'entité utilisatrice ; SOC 2 (ISAE 3000) ajoute la confidentialité et la protection des données ; SOC 3 est la version synthétique à usage général.",
      "SOC 1 est établi selon l'ISAE 3000 et porte sur la protection des données ; SOC 2 est établi selon l'ISAE 3402 et porte sur le reporting financier.",
      "SOC 3 est le rapport le plus détaillé des trois et son usage est réservé aux auditeurs des états financiers.",
      "SOC 2 se distingue de SOC 1 uniquement par sa période de couverture (douze mois au lieu d'une date de référence)."
     ],
     "correct": 0,
     "explications": [
      "Correct : SOC 1 (ISAE 3402) porte sur les contrôles pertinents pour le reporting financier de l'entité utilisatrice — c'est celui qui intéresse l'auditeur des comptes ; SOC 2 (ISAE 3000) ajoute confidentialité et protection des données pour un usage élargi ; SOC 3 (ISAE 3000) en est la version synthétique à usage général (mémento §12.2).",
      "Faux : les normes sont inversées — SOC 1 relève de l'ISAE 3402 (contrôles pertinents pour le reporting financier) et SOC 2 de l'ISAE 3000 (confidentialité, protection des données).",
      "Faux : SOC 3 est au contraire le rapport synthétique destiné à un usage général (public) ; le rapport détaillé pertinent pour l'audit des états financiers est le SOC 1.",
      "Faux : la distinction date de référence / période de couverture oppose les rapports de Type 1 et de Type 2, pas SOC 1 et SOC 2 — ces derniers se distinguent par leur objet (reporting financier vs confidentialité/protection des données) et leur norme."
     ],
     "piege": "SOC 1/2/3 ≠ Type 1/2"
    }
   ]
  },
  {
   "id": "M13",
   "titre": "13 · Cybersécurité",
   "questions": [
    {
     "id": "IT-099",
     "champ": "Cyberrisque, FAIR & pertinence audit",
     "memento": "§13.1",
     "difficulte": 2,
     "question": "Concernant le cyberrisque, sa mesure et sa pertinence pour l'audit des états financiers, quelles affirmations sont correctes ?",
     "options": [
      "Le cyberrisque est la possibilité qu'un acteur externe, à l'origine d'une cybermenace, réussisse à causer un préjudice ; pour beaucoup d'entreprises il fait partie des risques importants à considérer dans l'analyse des risques et la planification.",
      "La « threat event frequency » désigne la fréquence à laquelle l'auteur d'une menace s'en prend à un actif, y compris les tentatives infructueuses.",
      "Les cyberrisques ne font jamais partie des risques importants pour la clôture ; l'auditeur n'a donc pas à évaluer leur impact potentiel sur les états financiers.",
      "La « threat event frequency » ne comptabilise que les attaques réussies, à l'exclusion des tentatives infructueuses."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Correct : le cyberrisque est la possibilité qu'un acteur à l'origine d'une cybermenace réussisse à causer un préjudice (modèle Menace → Faille → Incidence) ; pour beaucoup d'entreprises, il fait partie des risques importants à considérer dans l'analyse des risques et la planification de l'audit (mémento §13.1).",
      "Correct : dans la taxonomie FAIR, la threat event frequency compte toutes les fois où l'auteur d'une menace s'en prend à un actif, tentatives infructueuses comprises ; Loss Event Frequency = Threat Event Frequency × Vulnerability (mémento §13.1).",
      "Faux : les cyberrisques peuvent tout à fait constituer des risques importants pour la clôture (indisponibilité ou altération des données comptables, rançongiciel) ; l'auditeur doit évaluer leur impact potentiel sur les états financiers.",
      "Faux : c'est le piège inverse de l'affirmation correcte — la threat event frequency inclut les tentatives infructueuses ; c'est la vulnérabilité (Vulnerability) qui détermine la proportion de tentatives qui aboutissent en événements de perte."
     ],
     "piege": "Tentatives infructueuses comptent"
    },
    {
     "id": "IT-100",
     "champ": "Rôle de l'auditeur (dont cloud)",
     "memento": "§13",
     "difficulte": 2,
     "question": "Quelles affirmations sont correctes concernant les responsabilités et le rôle de l'auditeur face aux cyberrisques, y compris lorsque le client externalise dans le cloud ?",
     "options": [
      "L'auditeur évalue le caractère approprié des réactions de l'entité aux risques et incidents de cybersécurité.",
      "Si un cyberincident s'est produit, l'auditeur doit le comprendre et évaluer ses répercussions sur son approche d'audit.",
      "Les cyberrisques chez un fournisseur de services cloud susceptibles d'entraîner une anomalie significative doivent être identifiés dans le cadre de l'analyse des risques.",
      "L'auditeur établit un rapport d'audit distinct sur la cybersécurité et émet une opinion sur la « Cyber Assessment » dans le rapport détaillé."
     ],
     "correct": [
      0,
      1,
      2
     ],
     "explications": [
      "Correct : l'auditeur évalue le caractère approprié des réactions de l'entité aux risques et incidents cyber, dans la mesure où ils peuvent affecter l'information financière (mémento §13.1, rôle de l'auditeur).",
      "Correct : un cyberincident survenu doit être compris et ses répercussions évaluées sur l'approche d'audit (données compromises, contrôles contournés, incidence possible sur la continuité d'exploitation).",
      "Correct : lorsque le client externalise dans le cloud, les cyberrisques chez le prestataire susceptibles d'entraîner une anomalie significative entrent dans l'analyse des risques (lien avec l'ISA-CH 402 et les rapports SOC, §12).",
      "Faux : l'auditeur financier n'établit ni rapport d'audit distinct sur la cybersécurité ni opinion sur une « Cyber Assessment » — il apprécie uniquement l'impact potentiel sur les comptes (mémento §13.1, périmètre de l'auditeur financier)."
     ]
    },
    {
     "id": "IT-101",
     "champ": "Étendue primaire vs secondaire",
     "memento": "§13",
     "difficulte": 3,
     "question": "En pratique, on distingue une « étendue primaire » et une « étendue secondaire » des procédures d'audit relatives aux cyberrisques. Comment se caractérise l'étendue primaire ?",
     "options": [
      "Elle couvre en règle générale les contrôles, données et systèmes de l'entreprise ainsi que l'ensemble des processus commerciaux.",
      "Elle ne peut être identifiée qu'après l'étendue secondaire et comprend tous les processus supérieurs utiles à la constitution de l'équipe d'audit.",
      "Elle comprend tous les risques importants pour l'audit des états financiers ainsi que l'entreprise elle-même, avec des procédures pour les contrôles d'accès, d'applications et généraux informatiques.",
      "Elle comprend les contrôles, données et systèmes présentant un intérêt pour l'audit des comptes annuels ; des procédures de contrôle sont ensuite développées pour répondre à l'environnement informatique propre à l'entreprise."
     ],
     "correct": 3,
     "explications": [
      "Faux : l'étendue primaire ne couvre pas l'ensemble des processus commerciaux — elle est bornée par la pertinence pour l'audit des comptes annuels ; y inclure tous les processus dilue le périmètre au-delà du rôle de l'auditeur financier.",
      "Faux : l'étendue primaire se définit en premier (c'est le cœur du périmètre) ; elle ne dépend pas de l'étendue secondaire et n'a pas pour objet la constitution de l'équipe d'audit.",
      "Faux : « tous les risques importants ainsi que l'entreprise elle-même » est trop large — l'étendue primaire ne vise pas l'entreprise en général, mais uniquement les contrôles, données et systèmes pertinents pour les états financiers.",
      "Correct : l'étendue primaire comprend les contrôles, données et systèmes présentant un intérêt pour l'audit des comptes annuels ; les procédures de contrôle sont ensuite développées en fonction de l'environnement informatique propre à l'entreprise — cohérent avec le périmètre restreint de l'auditeur financier (mémento §13). [La terminologie « étendue primaire/secondaire » n'apparaît pas telle quelle dans le mémento ; la conclusion découle de son principe de périmètre borné aux comptes.]"
     ],
     "piege": "Étendue bornée aux comptes"
    },
    {
     "id": "IT-102",
     "champ": "Gouvernance : CA & direction",
     "memento": "§13.1",
     "difficulte": 2,
     "question": "La gestion des cyberrisques se répartit entre la direction, l'équipe de gestion des risques et l'équipe opérationnelle. Quelles affirmations sont correctes ?",
     "options": [
      "La direction définit l'appétit et la tolérance au risque et s'assure que les risques cyber sont correctement gérés par les responsables opérationnels.",
      "La gouvernance d'entreprise, la responsabilité et le devoir de loyauté (fiduciary duty) sont des sujets stratégiques du conseil d'administration.",
      "Le stockage et le traitement techniques des données constituent des sujets stratégiques du conseil d'administration.",
      "La direction peut, en règle générale, déléguer entièrement la cyberstratégie à l'équipe de mise en œuvre opérationnelle."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Correct : la direction définit l'appétit et la tolérance au risque et supervise la gestion des cyberrisques par les responsables opérationnels — premier niveau du modèle de gouvernance à 3 lignes (Executive / Risk Management / Business & Cyber Defense, mémento §13.1).",
      "Correct : la gouvernance d'entreprise, la responsabilité et le devoir de loyauté (fiduciary duty) sont des sujets stratégiques qui relèvent du conseil d'administration.",
      "Faux : le stockage et le traitement techniques des données relèvent du niveau opérationnel (Business & Cyber Defense), pas des sujets stratégiques du conseil d'administration — l'option exploite la confusion entre niveau stratégique et niveau opérationnel.",
      "Faux : la direction ne peut pas déléguer entièrement la cyberstratégie à l'équipe opérationnelle — la définition de la stratégie et la supervision restent de sa responsabilité ; seule la mise en œuvre est déléguée."
     ],
     "piege": "Stratégique vs opérationnel"
    },
    {
     "id": "IT-103",
     "champ": "Axes d'identification des cyberrisques",
     "memento": "§13.1",
     "difficulte": 2,
     "question": "Lors de la planification d'un audit des comptes annuels, quels éléments constituent des points de départ / domaines pertinents pour identifier les cyberrisques ?",
     "options": [
      "La sécurité des données : quels systèmes de stockage sont en place ?",
      "Le stockage des données : où et comment les données sont-elles conservées ?",
      "Le traitement des données : comment les données sont-elles traitées jusqu'à leur archivage ?",
      "L'analyse de données : où puis-je utiliser des analyses de données ?"
     ],
     "correct": [
      0,
      1,
      2
     ],
     "explications": [
      "Correct : la sécurité des données (data security) est l'un des 4 axes d'identification des cyberrisques utilisés par l'auditeur en planification (data security / storage / transmission / processing, mémento §13.1).",
      "Correct : le stockage des données (data storage) — où et comment les données sont conservées — est un des 4 axes d'identification des cyberrisques.",
      "Correct : le traitement des données (data processing) — comment les données sont traitées jusqu'à leur archivage — complète les axes data security / storage / transmission / processing.",
      "Faux : l'analyse de données (Data Analytics) est un outil d'audit (§7), pas un axe d'identification des cyberrisques — le 4e axe, absent des options, est la transmission des données (data transmission)."
     ],
     "piege": "DA ≠ axe cyber"
    },
    {
     "id": "IT-104",
     "champ": "Menaces & mesures personnelles",
     "memento": "§13",
     "difficulte": 2,
     "question": "Concernant les notions de base de la cybersécurité (menaces et mesures personnelles), quelles affirmations sont correctes ?",
     "options": [
      "L'utilisation non sécurisée des services de cloud est une cyber-menace typique.",
      "La sécurité des mots de passe et la sécurité des appareils font partie des mesures personnelles typiques de cybersécurité.",
      "La suppression des contrôles par la direction (management override) est une cyber-menace typique.",
      "La « sécurité réglementaire » (regulatory security) est une mesure personnelle typique de cybersécurité."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Correct : l'utilisation non sécurisée des services cloud figure parmi les cyber-menaces typiques, aux côtés du ransomware, des attaques sur les paiements et du phishing. [Écart mémento : la liste des cyber-menaces et des mesures personnelles n'est pas énumérée dans le mémento §13 ; réponse fondée sur la source d'examen.]",
      "Correct : la sécurité des mots de passe et la sécurité des appareils font partie des mesures personnelles typiques de cybersécurité, avec la sécurité physique.",
      "Faux : le management override (suppression des contrôles par la direction) est un risque de fraude traité par l'ISA-CH 240 et le JET (§11), pas une cyber-menace — l'option mélange deux familles de risques.",
      "Faux : la « sécurité réglementaire » n'est pas une mesure personnelle — les mesures personnelles typiques sont la sécurité des mots de passe, des appareils et la sécurité physique ; la conformité réglementaire relève du niveau organisationnel."
     ],
     "piege": "Override = fraude, pas cyber"
    },
    {
     "id": "IT-105",
     "champ": "Réactions de l'auditeur (scénarios)",
     "memento": "§13",
     "difficulte": 2,
     "question": "Dans les situations suivantes (contrôle ordinaire), quelles réactions de l'auditeur sont correctes ?",
     "options": [
      "Un client demande une confirmation écrite des contrôles de cybersécurité à l'assemblée générale : l'auditeur explique qu'il n'est pas responsable de l'évaluation des cyberrisques et ne peut donc pas attester l'adéquation de ces contrôles.",
      "Face à des déficiences cyber importantes chez un client : bien qu'il ne procède pas à une évaluation des contrôles en matière de cyberrisque, l'auditeur est tenu d'informer le client de manière appropriée des risques importants.",
      "L'auditeur ajoute la confirmation des contrôles de cybersécurité à la lettre de mission afin de pouvoir l'émettre.",
      "Comme l'auditeur ne réalise pas d'audit cyber, il n'a, en cas de déficiences importantes, aucune mesure à prendre ni information à communiquer."
     ],
     "correct": [
      0,
      1
     ],
     "explications": [
      "Correct : l'auditeur financier n'est pas responsable de l'évaluation des cyberrisques du client et ne peut donc pas attester l'adéquation de ses contrôles de cybersécurité devant l'assemblée générale — cela sortirait de son périmètre (mémento §13.1, piège du périmètre de l'auditeur).",
      "Correct : même sans évaluation des contrôles cyber, l'auditeur qui constate des déficiences importantes est tenu d'en informer le client de manière appropriée (communication des faiblesses et risques importants constatés).",
      "Faux : ajouter une confirmation des contrôles de cybersécurité à la lettre de mission ne rend pas l'attestation possible — l'audit des comptes ne comporte pas d'audit de la cybersécurité, et l'auditeur ne peut pas attester ce qu'il n'a pas audité.",
      "Faux : l'absence d'audit cyber ne dispense pas l'auditeur de son devoir d'information — les risques et déficiences importants qu'il constate doivent être communiqués au client de manière appropriée."
     ]
    }
   ]
  },
  {
   "id": "M14",
   "titre": "14 · Conservation électronique & cadre suisse",
   "questions": [
    {
     "id": "IT-122",
     "champ": "Durée légale de conservation",
     "memento": "§14.1",
     "difficulte": 2,
     "question": "Quelle est la durée légale de conservation des livres et pièces comptables en droit suisse, et sur quel article repose-t-elle ?",
     "options": [
      "5 ans, selon l'art. 958f CO",
      "10 ans, selon l'art. 958f CO",
      "10 ans, selon l'art. 957a CO",
      "Aussi longtemps que le système comptable d'origine reste en exploitation"
     ],
     "correct": 1,
     "explications": [
      "Faux : la durée n'est pas de 5 ans. L'art. 958f CO fixe l'obligation et la durée de conservation à 10 ans (mémento §14.1).",
      "Exact : l'obligation et la durée de conservation — 10 ans — découlent de l'art. 958f CO [PRIMAIRE] (mémento §14.1).",
      "Faux : la durée de 10 ans est juste, mais l'article ne l'est pas. L'art. 957a CO régit la tenue régulière de la comptabilité (dont le support électronique), pas la durée de conservation — celle-ci relève de l'art. 958f CO.",
      "Faux : le délai est fixé par la loi (10 ans, art. 958f CO) et ne dépend pas de la durée de vie du système. C'est précisément pourquoi une migration doit préserver les données conservées (art. 10 Olico)."
     ],
     "piege": "Bon délai, mauvais article"
    },
    {
     "id": "IT-123",
     "champ": "Admissibilité de la tenue électronique",
     "memento": "§14.1",
     "difficulte": 2,
     "question": "La tenue et la conservation électroniques des livres comptables sont-elles admises en droit suisse ?",
     "options": [
      "Oui, sans aucune condition : la liberté des moyens de preuve dispense de toute exigence particulière",
      "Oui, mais uniquement si chaque enregistrement porte une signature électronique qualifiée",
      "Non : les livres doivent être tenus sur papier, seules les pièces justificatives peuvent être électroniques",
      "Oui, à condition de garantir la régularité (intégralité, exactitude, disponibilité, lisibilité) et la traçabilité"
     ],
     "correct": 3,
     "explications": [
      "Faux : la liberté des moyens de preuve ne supprime pas les exigences de résultat. Le droit suisse exige que les enregistrements restent vérifiables et conservés dans les délais légaux — régularité et traçabilité restent obligatoires (art. 957a CO, Olico ; mémento §14).",
      "Faux : c'était le régime de l'ancienne OeIDI, aujourd'hui abrogée. La liberté des moyens de preuve prévaut ; un contrôle interne satisfaisant suffit — aucune signature électronique n'est exigée (mémento §14.1, piège).",
      "Faux : le droit suisse ne fige aucune technologie ; la tenue électronique des livres eux-mêmes est expressément admise (art. 957a CO) — le droit exige un résultat (vérifiabilité, conservation), pas un support.",
      "Exact : la tenue régulière sur support électronique est admise par l'art. 957a CO [PRIMAIRE], et l'Olico (RS 221.431) [PRIMAIRE] précise les conditions de la tenue et de la conservation électroniques : intégrité et disponibilité, dans le respect de la régularité (intégralité, exactitude, disponibilité, lisibilité) et de la traçabilité (mémento §14/§14.1)."
     ],
     "piege": "Liberté de preuve ≠ zéro condition"
    },
    {
     "id": "IT-124",
     "champ": "Signature électronique & OeIDI abrogée",
     "memento": "§14.1",
     "difficulte": 3,
     "question": "Votre client tient l'intégralité de sa comptabilité sous forme électronique, sans aucune signature électronique. Qu'en concluez-vous ?",
     "options": [
      "Situation conforme si un contrôle interne satisfaisant existe : l'OeIDI est abrogée et la liberté des moyens de preuve prévaut",
      "Situation non conforme : l'OeIDI impose la signature électronique des livres tenus électroniquement",
      "Situation conforme uniquement si les livres sont imprimés et signés à la main à chaque clôture annuelle",
      "Situation non conforme : la tenue électronique sans signature exige une autorisation préalable de l'autorité fiscale"
     ],
     "correct": 0,
     "explications": [
      "Exact : l'ancienne obligation de signature électronique (OeIDI) est abrogée ; la liberté des moyens de preuve prévaut et un contrôle interne satisfaisant suffit à garantir l'intégrité (mémento §14.1, piège « plus d'obligation de signature électronique »).",
      "Faux : c'est le piège classique du support non actualisé. L'OeIDI (signature électronique obligatoire) est abrogée — ne jamais la citer comme droit en vigueur (mémento §14.1 ; cours ch. 01, piège « référence historique »).",
      "Faux : aucune impression ni signature manuscrite périodique n'est exigée pour les livres tenus électroniquement — le droit exige un résultat (régularité, traçabilité, conservation), pas un rituel papier (art. 957a CO, Olico).",
      "Faux : aucune autorisation préalable d'une autorité n'est prévue. Les conditions sont posées par le CO et l'Olico (intégrité, disponibilité) et se vérifient par le contrôle interne, pas par un agrément administratif."
     ],
     "piege": "OeIDI abrogée"
    },
    {
     "id": "IT-125",
     "champ": "Migration de données — art. 10 Olico",
     "memento": "§14.1",
     "difficulte": 3,
     "question": "Lors d'une migration de données comptables vers un nouveau système, qu'exige l'art. 10 Olico ?",
     "options": [
      "Le format d'origine des informations ne doit en aucun cas être modifié",
      "L'ancien système doit rester exploité en parallèle jusqu'à l'échéance du délai de conservation",
      "Les informations doivent rester complètes et exactes, disponibles et lisibles, et le transfert doit faire l'objet d'un procès-verbal conservé avec les informations",
      "Le transfert doit être autorisé au préalable par l'autorité fiscale compétente"
     ],
     "correct": 2,
     "explications": [
      "Faux : c'est le contre-pied exact de la règle. L'art. 10 Olico admet que le format soit modifié et les données transférées, à condition que l'intégralité, l'exactitude et la disponibilité/lisibilité soient garanties (cours ch. 03, §5.6).",
      "Faux : la loi n'exige pas le maintien de l'ancien système ; elle exige la reprise contrôlée des données (complètes, exactes, disponibles) avec procès-verbal. C'est précisément ce qui permet de décommissionner l'ancien environnement.",
      "Exact : l'art. 10 Olico [PRIMAIRE] autorise le changement de format et le transfert si (al. 2) les informations restent complètes et exactes et que disponibilité/lisibilité satisfont aux exigences légales, et si (al. 3) le transfert fait l'objet d'un procès-verbal conservé avec les informations (mémento §14.1 ; cours ch. 03, §5.6).",
      "Faux : aucune autorisation administrative préalable n'est prévue par l'Olico ; l'exigence est documentaire et de contrôle interne (procès-verbal de transfert, intégralité/exactitude/disponibilité)."
     ],
     "piege": "Le format peut changer"
    },
    {
     "id": "IT-126",
     "champ": "Traçabilité — référence CO exacte",
     "memento": "§14.1",
     "difficulte": 4,
     "question": "Vos supports invoquent l'art. 959a al. 2 ch. 5 CO comme fondement du principe de traçabilité (piste de vérification) d'une migration. Qu'en est-il ?",
     "options": [
      "La référence est exacte : l'art. 959a CO consacre la vérifiabilité des enregistrements comptables",
      "Coquille probable : l'art. 959a CO porte sur la structure minimale du bilan ; la vérifiabilité figure à l'art. 957a al. 2 ch. 5 CO",
      "La traçabilité n'a aucun fondement dans le CO : elle ne découle que de l'art. 10 Olico",
      "La traçabilité est fondée sur l'art. 958f CO, qui définit la piste de vérification"
     ],
     "correct": 1,
     "explications": [
      "Faux : sur Fedlex, l'art. 959a CO traite de la structure minimale du bilan, sans lien avec la traçabilité — reprendre telle quelle la référence du support serait une erreur (cours ch. 03, piège « référence à confirmer » ; divergences.md, point 1).",
      "Exact : le principe de vérifiabilité / piste de vérification figure à l'art. 957a al. 2 ch. 5 CO [PRIMAIRE, tagué À VALIDER] ; la citation « 959a » du support est une coquille probable, signalée dans le mémento §14.1 et divergences.md (point 1 — à confirmer sur Fedlex avant l'examen).",
      "Faux : le principe est bien ancré dans le CO (tenue régulière et vérifiabilité, art. 957a CO) ; l'art. 10 Olico n'en précise que les modalités pour la migration (procès-verbal, intégralité/exactitude/disponibilité).",
      "Faux : l'art. 958f CO régit l'obligation et la durée de conservation (10 ans), pas la piste de vérification — confusion entre conservation et traçabilité."
     ],
     "piege": "Coquille 959a du support"
    },
    {
     "id": "IT-127",
     "champ": "Audit de migration — objectif & socle ITGC",
     "memento": "§14.1 · §3.2",
     "difficulte": 3,
     "question": "Quel est l'objectif d'un audit de migration de données, et sur quel contrôle ITGC s'appuie-t-il ?",
     "options": [
      "Démontrer que le nouveau système est plus performant que l'ancien, sur la base du domaine BE (exploitation IT)",
      "Vérifier uniquement la reprise des données de base (paramètres, comptes), les données de mouvement étant re-saisies manuellement",
      "Obtenir de l'éditeur du logiciel une certification attestant la conformité légale de la migration",
      "Prouver que les données pertinentes ont été intégralement et correctement reprises, sans modification incontrôlée — en s'appuyant sur le contrôle CM-4 (tests de la migration des données)"
     ],
     "correct": 3,
     "explications": [
      "Faux : la performance du nouveau système n'est pas l'objet de l'audit de migration ; et les sauvegardes/restaurations relèvent du domaine BE, tandis que la migration relève du Change Management (CM-4).",
      "Faux : une migration porte sur les deux catégories de données — données de mouvement (journaux, justificatifs, factures, PDF archivés) ET données de base (paramètres, comptes, contrats, partenaires, données fiscales) ; rien n'autorise à ignorer les mouvements (cours ch. 03, §5.6).",
      "Faux : aucune certification d'éditeur ne remplace les diligences de l'auditeur ; la migration est aussi un sujet de droit comptable suisse (CO, art. 10 Olico), pas un simple sujet technique contractuel (cours ch. 03, piège n° 10).",
      "Exact : l'objectif est de prouver la reprise intégrale et correcte des données pertinentes, sans modification incontrôlée — exigence qui découle du principe de traçabilité du CO, précisé par l'art. 10 Olico ; le socle ITGC est CM-4 « Tests de la migration des données » du domaine Change Management (cours ch. 03, §5.6 et connexions ; mémento §14.1)."
     ],
     "piege": "Migration = aussi du droit"
    }
   ]
  }
 ]
};
