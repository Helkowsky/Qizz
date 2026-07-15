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
     "explication": "L'IT pèse sur l'audit parce que l'information financière naît et se traite dans des systèmes ; l'auditeur doit comprendre l'environnement IT pour évaluer correctement le risque.",
     "piege": true
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
     "explication": "Effet central de la 315R : l'environnement IT doit être compris en profondeur, ce qui accroît le poids de l'audit informatique — sans obligation systématique de tester les ITGC ni de contrôler la cybersécurité.",
     "piege": true
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
     "explication": "Le risque d'audit IT se lit selon les domaines d'ITGC ; l'exemple canonique est la modification non autorisée des systèmes/programmes.",
     "piege": true
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
     "explication": "La 315R vise l'identification et l'évaluation des risques via la compréhension de l'entité et de son environnement IT — à ne pas confondre avec la vérification de l'efficacité du SCI.",
     "piege": true
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
     "explication": "Comprendre l'environnement IT = procédures d'évaluation des risques (inquiry, analytique, observation) cadrées par l'ISA-CH 315 (Révisée) ; à ne pas confondre avec les tests de contrôles (Test of One) ni avec l'ISA-CH 402.",
     "piege": true
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
     "explication": "Un ERP couvre l'ensemble des processus d'affaires autour d'une base centrale ; ses données de base (Stammdaten) sont le socle des transactions, tandis que « cybermodule » et « signature numérique » n'en sont pas des modules.",
     "piege": true
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
     "explication": "Le bénéfice-clé d'un ERP est l'information centralisée, précise et complète pour piloter l'entreprise."
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
     "explication": "Le modèle à 4 couches (Application/BD/OS/Réseau) sert à situer chaque composant : Abacus = application, SQL = BD, Linux = OS.",
     "piege": true
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
     "explication": "GUI = interface graphique utilisateur ; dans la chaîne order-to-cash de SAP, la facturation relève de SD mais l'entrée du paiement est comptabilisée dans FI.",
     "piege": true
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
     "explication": "Plus une interface est automatisée, plus l'intégralité/exactitude sont gérées par le système ; le risque d'audit central est le transfert incomplet des données.",
     "piege": true
    },
    {
     "id": "IT-011",
     "champ": "Audit des applications/progiciels standard",
     "memento": "§2.4",
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
     "explication": "L'audit d'un progiciel standard s'apprécie via son paramétrage et ses capacités d'extraction ; l'audit initial peut être réutilisé pour les nouvelles versions moyennant vérification des nouveaux paramètres (NAS-CH 870)."
    },
    {
     "id": "IT-012",
     "champ": "Affirmations sur l'environnement IT",
     "memento": "§2.4",
     "difficulte": 2,
     "question": "Sur le mandat LEX SA (contrôle ordinaire), votre assistante formule des affirmations sur l'environnement informatique. Laquelle est correcte ?",
     "options": [
      "Avec un ERP développé en interne, il est impossible de s'appuyer sur des contrôles automatiques, car ces outils ne sont soumis à aucune norme internationale",
      "Les applications gérées par l'utilisateur final (EUC/EUMA) représentent un risque, car l'accès et la possibilité de les modifier ne sont, la plupart du temps, pas strictement contrôlés",
      "Le recours à un prestataire externe impose toujours de vérifier les contrôles externalisés directement chez le prestataire",
      "Un incident de cybersécurité oblige, dans la plupart des cas, à émettre une réserve à l'assemblée générale"
     ],
     "correct": 1,
     "explication": "Le vrai risque cité ici est celui des applications EUC faiblement contrôlées ; les autres affirmations exagèrent des obligations inexistantes.",
     "piege": true
    },
    {
     "id": "IT-013",
     "champ": "Risques d'implémentation et de migration d'un ERP",
     "memento": "§2.1",
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
     "explication": "L'introduction/migration d'un ERP expose surtout à des risques de SCI et d'intégrité/transmission des données ; la traçabilité subsiste et la complexité du modèle n'est pas le risque déterminant.",
     "piege": true
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
     "memento": "§3.2–3.3",
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
     "explication": "Les GITC se structurent en accès / modification de programmes / développement-acquisition / opérations informatiques ; ils rendent fiables les contrôles automatisés mais n'incluent ni la prestation IT externe ni les paramètres/interfaces applicatifs.",
     "piege": true
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
     "explication": "La NAS-CH 890 impose la confirmation annuelle de l'existence du SCI dans tout contrôle ordinaire, indépendamment de la présence d'un ITAC ; l'efficacité durable n'est requise que si l'auditeur veut s'appuyer sur les contrôles automatisés.",
     "piege": true
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
     "explication": "Le risque « scripts BD non autorisés modifiant les données » se rattache au domaine Accès aux programmes et aux données (accès privilégié), pas au change management ni aux opérations.",
     "piege": true
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
     "explication": "Pour s'appuyer sur un contrôle automatisé, on teste accès + changements + opérations (job processing pertinent) ; la re-certification des accès est un contrôle d'accès, pas de change management.",
     "piege": true
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
     "explication": "La NAS-CH 890 confirme l'existence (D&I) du SCI, appuyée sur une documentation écrite et une vue d'ensemble des systèmes ; elle ne teste pas l'efficacité de toute l'infrastructure.",
     "piege": true
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
     "explication": "La 890 se vérifie annuellement ; l'échantillon d'existence ne suffit pas à conclure sur l'efficacité opérationnelle, qui requiert davantage de tests.",
     "piege": true
    },
    {
     "id": "IT-020",
     "champ": "Responsabilité du SCI & niveaux IT",
     "memento": "§3.4",
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
     "explication": "Le SCI est de la responsabilité du CA et de la direction ; les niveaux IT à tester dépendent des contrôles d'application concernés et du niveau système où ils opèrent."
    },
    {
     "id": "IT-021",
     "champ": "Assertions correctes en audit IT",
     "memento": "§3.1",
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
     "explication": "Le spécialiste IT s'évalue en compétence + objectivité ; s'appuyer sur l'automatisé exige de tester l'efficacité des GITC ; un GITC inefficace n'empêche pas l'audit ; le développement n'est pas testé en détail sur logiciel standard.",
     "piege": true
    },
    {
     "id": "IT-022",
     "champ": "Comptes partagés & contrôles fiables",
     "memento": "§3.2",
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
     "explication": "Le partage d'identifiants casse les contrôles d'approbation manuels (SoD), mais pas les contrôles automatisés/configurés (3-way-match, interfaces) que ces utilisateurs ne peuvent pas modifier.",
     "piege": true
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
     "explication": "Le comptable gérant les accès rompt la séparation des fonctions (risque primaire) ; le partage de mots de passe enfreint l'authentification.",
     "piege": true
    },
    {
     "id": "IT-024",
     "champ": "Constatations d'accès & compensation",
     "memento": "§3.2",
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
     "explication": "Le SSO via AD avec règles de mot de passe conformes n'est pas une déficience ; un compte de partant tardif est une déficience compensable par la vérification des connexions post-départ.",
     "piege": true
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
     "explication": "Une modification d'urgence sans preuve exige des éléments probants additionnels ; une validation isolée hors workflow est une faiblesse de contrôle mentionnée au CA dans le rapport détaillé."
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
     "explication": "Absence de GITC pertinents → limitation ciblée du SCI ; un batch non financier hors scope est sans incidence ; les résultats se discutent d'abord avec l'IT ; une correction tardive ne prouve pas l'efficacité sur toute la période.",
     "piege": true
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
     "explication": "Deux axes indépendants : l'OBJECTIF (préventif = avant/pendant, détectif = après) et le TYPE (automatisé ou manuel). Les deux objectifs existent sous forme automatisée comme manuelle.",
     "piege": true
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
     "explication": "Les 5 sous-types d'ITAC sont Edit checks, Validations, Calculations, Interfaces et Authorizations. « Review Check » n'en fait pas partie."
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
     "explication": "Un ITDM combine une composante applicative et une action manuelle ; sa part humaine le rend moins fiable qu'un ITAC. Un contrôle 100 % automatisé (three-way-match) est un ITAC, pas un ITDM.",
     "piege": true
    },
    {
     "id": "IT-030",
     "champ": "Test des ITAC",
     "memento": "§4.3",
     "difficulte": 1,
     "question": "Laquelle de ces opérations d'audit n'est PAS une opération typique de vérification d'un contrôle applicatif automatisé (ITAC) ?",
     "options": [
      "Test direct (réexécution)",
      "Baselining et benchmarking",
      "Observation",
      "Analyse de données"
     ],
     "correct": 2,
     "explication": "Un ITAC déterministe se teste par réexécution, baselining/benchmarking ou analyse de données. L'observation vise les contrôles manuels ou physiques."
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
     "explication": "Préventif = empêcher l'erreur dès le traitement ; détectif = la repérer après coup (donc trop tard pour la prévenir). Les deux sont complémentaires.",
     "piege": true
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
     "explication": "Un contrôle programmé est déterministe (faible risque, « test of one »), mais son fonctionnement en temps réel rend la preuve directe difficile."
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
     "explication": "Le modèle à 4 couches va, de haut en bas : processus d'affaires → applications IT (couche 2) → systèmes de base (couche 3) → infrastructure/réseau (couche 4). Les couches 3-4 relèvent des GITC."
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
     "explication": "Piège d'orientation : contrôle d'application → couches HAUTES (processus + application) ; analyse des systèmes IT / GITC → couches BASSES (systèmes de base + infrastructure).",
     "piege": true
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
     "explication": "Walk-through = confirmer la compréhension/conception (≠ efficacité). L'appréciation globale synthétise les résultats au regard des états financiers et débouche sur le risque de contrôle.",
     "piege": true
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
     "explication": "La phase 1 (planification/identification des risques) couvre processus, applications, interfaces, risques et contrôles-clés — mais pas le walk-through ni l'évaluation de la conception (étapes suivantes), ni les contrôles purement manuels non liés à l'IT."
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
     "correct": 2,
     "explication": "Le modèle enchaîne planification/identification des risques → stratégie & évaluation des risques → évaluation de l'efficacité → appréciation globale/conclusion, soit quatre phases (structure à confirmer sur le support)."
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
     "explication": "L'identification des processus cible ce qui influence les flux financiers ; la phase stratégie/risques valide la compréhension et l'aptitude du SCI à couvrir les risques."
    },
    {
     "id": "IT-039",
     "champ": "Cas Oracle — niveaux & type",
     "memento": "§5.2",
     "difficulte": 3,
     "question": "Risque : des modifications non autorisées des données de base fournisseurs (Oracle) faussent les dettes fournisseurs. Un contrôle automatique géré par Oracle restreint l'accès à la base de données (3 collaborateurs autorisés) ; la base se situe au niveau base de données d'Oracle, et deux administrateurs système accèdent à la BD et à l'application. Quels niveaux technologiques sont pertinents pour vérifier ce contrôle automatisé, et de quel type de contrôle s'agit-il ?",
     "options": [
      "Niveau applications ; type : configuration du système.",
      "Niveaux applications et base de données ; type : configuration du système.",
      "Niveau applications ; type : contrôle d'accès au système.",
      "Niveaux applications et base de données ; type : contrôle d'accès au système."
     ],
     "correct": 3,
     "explication": "Le contrôle restreint les droits de modification : c'est un contrôle d'accès (pas une configuration). Comme les données et les administrateurs opèrent au niveau BD comme au niveau application, les deux niveaux technologiques sont pertinents."
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
     "explication": "Le recours au spécialiste IT est fonction de la nature/complexité de l'environnement informatique (et non de la taille) ; il n'exonère jamais l'auditeur de sa responsabilité.",
     "piege": true
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
     "explication": "Les spécialistes IT/DA sont impliqués tôt, soumis aux mêmes règles d'indépendance que l'équipe, et compétents ; la responsabilité de l'opinion demeure à l'auditeur, qui n'émet qu'une seule opinion."
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
     "explication": "L'automatisation et la dépendance aux applications élèvent la complexité/le risque IT et le besoin d'un spécialiste. L'efficacité GITC de l'exercice précédent n'entre pas dans l'appréciation d'une faiblesse courante.",
     "piege": true
    },
    {
     "id": "IT-043",
     "champ": "GITC↔ITAC & dépendances IT",
     "memento": "§5.1",
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
     "explication": "Les GITC sont la base des ITAC (relation à ne pas inverser). Les 5 dépendances IT : contrôles automatisés, rapports, calculs, interfaces, sécurité.",
     "piege": true
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
     "explication": "L'identification des processus/flux repose sur les demandes, flow charts et diagramme du SI (pas sur la liste des OS). Le périmètre des systèmes à tester suit les risques : ici SAP, qui porte ventes et immobilisations."
    },
    {
     "id": "IT-045",
     "champ": "Cas Salesforce — population & risque",
     "memento": "§5.1",
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
     "explication": "Trop d'habilitations = risque de manipulation. Comme le contrôle ne couvre qu'une partie des utilisateurs, la population n'est pas entièrement contrôlée : il faut segmenter et vérifier séparément les transactions non couvertes.",
     "piege": true
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
     "memento": "§6.3",
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
     "explication": "Face à un GITC/contrôle automatisé déficient : délimiter l'impact puis mener des procédures supplémentaires ciblées — ni fermer les yeux, ni basculer aveuglément tout l'audit en détail.",
     "piege": true
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
     "explication": "Un GITC déficient ne prouve pas une anomalie mais interdit de se fier à l'automatisé et modifie l'évaluation combinée des risques.",
     "piege": true
    },
    {
     "id": "IT-048",
     "champ": "Contrôles compensatoires & qualité des données",
     "memento": "§6.3",
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
     "explication": "Un contrôle compensatoire doit couvrir toute la période et les mêmes risques ; un contrôle seulement ponctuel n'en est pas un. À défaut, des contrôles réducteurs de risques sécurisent la qualité des données.",
     "piege": true
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
     "explication": "Un déficit significatif (conception et/ou efficacité, lié au risque d'anomalie significative) se communique par écrit aux responsables de la surveillance, dans le rapport exhaustif."
    },
    {
     "id": "IT-050",
     "champ": "Faiblesse GITC → stratégie & DA",
     "memento": "§6.2",
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
     "explication": "Sans efficacité des GITC, on réévalue la stratégie (matérialité, échantillon) ; la Data Analytics demeure possible à condition de tester directement les données pertinentes.",
     "piege": true
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
     "memento": "§7.3",
     "difficulte": 1,
     "question": "À quelles étapes du processus d'audit la Data Analytics (et, plus largement, l'automatisation de l'audit) peut-elle être utilisée ?",
     "options": [
      "Uniquement en planification et en réalisation, jamais à l'acceptation du mandat ni au reporting.",
      "Le potentiel est propre à chaque audit ; aucune considération de principe ne peut être posée.",
      "Dans toutes les phases : acceptation du mandat, planification, réalisation, rapport, ainsi que traitement ultérieur et assurance qualité.",
      "Dans toutes les phases sauf le rapport d'audit, où l'automatisation présente nettement moins d'avantages."
     ],
     "correct": 2,
     "explication": "La DA est transversale à tout le cycle d'audit : les NA-CH ne l'imposent ni ne l'interdisent, et son potentiel se retrouve de l'acceptation du mandat jusqu'à l'assurance qualité."
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
     "explication": "Les défis typiques des outils DA sont la préparation/le flux des données, les compétences de l'équipe et l'hétérogénéité des systèmes clients ; l'interprétation des résultats est une tâche de jugement, non un défi propre à l'outil."
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
     "explication": "Le Process Mining exploite les journaux (event logs) pour reconstruire et comprendre les processus et repérer les divergences ; la consultation des configurations système poursuit le même but de compréhension du processus."
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
     "explication": "Big Data = des ensembles de données dont le volume ou la complexité dépassent les capacités des méthodes de traitement traditionnelles."
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
     "explication": "Predictive Analytics : reconnaissance de schémas par Data Mining pour prévoir la situation future (« que va-t-il probablement se passer ? »), à distinguer des familles Descriptive / Diagnostic / Prescriptive."
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
     "explication": "Les facteurs d'influence de la DA sont la capacité technique (serveurs/stockage), la connaissance des outils, le temps, la protection des données (nLPD) et les licences ; l'ISA-CH 550 (confirmations externes) n'en fait pas partie."
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
     "explication": "Le stade d'audit détermine l'objectif de la DA : évaluation des risques en planification (300 ss / 315), procédure d'audit en réalisation (500 ss / 520). Couvrir toute la population ne dispense jamais du jugement.",
     "piege": true
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
     "explication": "Norme pivot par phase : acceptation → ISA-CH 220 (données publiques), planification → ISA-CH 300 (compréhension de l'entité), réalisation → ISA-CH 500 ss (tests de détail). L'ISA-CH 230 ne vise que la documentation."
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
     "explication": "L'applicabilité d'une procédure analytique dépend de la matérialité, du RI/RC, de la précision attendue et des autres procédures ; côté faisabilité, un paysage fragmenté à interfaces manuelles complique la DA, alors qu'un environnement homogène et automatisé la facilite."
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
     "explication": "La DA s'emploie dans toutes les phases et suppose des ITGC efficaces ; les NA-CH ne la réglementent pas en détail, elle ne remplace pas les contrôles de substance et n'est pas réservée aux grands clients. Rappel : quatre familles (Descriptive / Diagnostic / Predictive / Prescriptive), pas trois.",
     "piege": true
    },
    {
     "id": "IT-061",
     "champ": "Planification & documentation d'une DA",
     "memento": "§7.1",
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
     "explication": "Planifier une DA suppose d'impliquer le spécialiste à toutes les étapes, de réaliser un dry-run avant l'audit intermédiaire et de respecter l'intégralité des exigences documentaires NA-CH ; l'effet de surprise ne justifie pas de dissimuler l'approche."
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
     "explication": "SAP → installation d'un programme (automatique) ; petits systèmes → copie de base de données ; le manuel (Abacus/téléchargement direct) n'est ni sans intervention ni optimisé DA."
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
     "explication": "L'extraction automatique mobilise le spécialiste DA (installation avec le client) et offre un output optimisé et réutilisable ; elle n'exclut pas les échanges de fichiers avec l'IT."
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
     "explication": "L'extraction manuelle (Excel/.csv) devient impraticable au fort volume et n'allège PAS la préparation ; la copie de base de données pose un enjeu de protection des données."
    },
    {
     "id": "IT-065",
     "champ": "Préparation & mapping après export",
     "memento": "§8.1",
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
     "explication": "Le mapping relie les champs aux contrôles/critères de validation ; la routine de préparation joint et enrichit les données, mais ne consiste pas à passer des écritures comptables."
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
     "explication": "La documentation de l'extraction doit d'abord prouver l'exhaustivité des données et consigner la procédure suivie ; calendrier et inventaire sont secondaires."
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
     "explication": "Les problèmes de transmission cumulent l'interruption du job, l'échec technique (message d'erreur) et le volume excessif de données : la réponse englobante est correcte."
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
     "explication": "La transmission incombe au spécialiste DA avec le client ; on privilégie une plateforme sécurisée (pas d'e-mail) et une capacité de transfert suffisante pour éviter les échecs."
    },
    {
     "id": "IT-069",
     "champ": "Mois manquant : risque d'extraction",
     "memento": "§8.3",
     "difficulte": 3,
     "question": "Le spécialiste DA vous remet un dashboard Power BI présentant toutes les entrées de chiffre d'affaires de l'année. Séduit par les graphiques, vous constatez qu'il manque tout le mois de février dans l'évolution du chiffre d'affaires. Quel risque faut-il maîtriser en priorité pour éviter une telle erreur ?",
     "options": [
      "Risque lié à la saisie des données.",
      "Risque lié à l'intégrité des données.",
      "Risque lié à l'extraction des données.",
      "Risque lié à la manipulation des données."
     ],
     "correct": 2,
     "explication": "Un « mois manquant » est un défaut d'exhaustivité (et non d'exactitude) : il découle du risque d'extraction. Faux-ami classique à ne pas requalifier en exactitude/intégrité.",
     "piege": true
    },
    {
     "id": "IT-070",
     "champ": "Intégrité & exhaustivité : causes d'erreur",
     "memento": "§8.3",
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
     "explication": "Défaut d'exhaustivité (échec technique) et écarts d'intégrité (modifs post-clôture, paramètres erronés) sont des menaces réelles ; le simple déclenchement manuel de l'extraction n'en est pas une.",
     "piege": true
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
     "explication": "La même méthode DA change de finalité selon le stade : évaluation des risques (planification, ISA-CH 300 ss/315, stratification) ou procédure d'audit (réalisation, ISA-CH 500 ss/520).",
     "piege": true
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
     "explication": "On stratifie les créances par partitionnement et par ancienneté afin de distinguer les niveaux de risque et d'orienter l'audit ; régression et arbre décisionnel ne sont pas des méthodes de stratification."
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
     "explication": "Aberration = point s'écartant significativement de la série ; identifiée statistiquement (box-plot, IQR) pour révéler erreurs/irrégularités."
    },
    {
     "id": "IT-074",
     "champ": "Planification — pic d'activations d'immobilisations",
     "memento": "§9.1",
     "difficulte": 3,
     "question": "Contrôle ordinaire : en janvier-février, 5 immobilisations de plus de CHF 50 000 chacune ont été activées, alors que le reste de l'année ~100 immobilisations d'env. CHF 3 000 l'ont été (comme l'année précédente, activations régulières). Quelle conclusion pour la planification du contrôle ?",
     "options": [
      "Les immobilisations sont un risque important couvert par sondage.",
      "Ségrégation : contrôle intégral des grandes activations atypiques (jan.-fév.) + petit échantillon aléatoire du reste.",
      "Ségrégation : contrôle intégral des grandes activations atypiques (jan.-fév.) + procédure analytique simple par rapport à l'année précédente (attente) sur le reste.",
      "Aucune distinction : échantillonnage statistique uniforme, tous les éléments ayant la même chance d'être sélectionnés."
     ],
     "correct": 2,
     "explication": "Le pic atypique de grosses activations est ségrégué et testé intégralement ; le reste, régulier et comparable à l'année précédente, est couvert analytiquement — efficacité et efficience.",
     "piege": true
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
     "explication": "Aberrante détectée → audition + contrôle séparé ; aucune aberrante → des procédures générales sur l'ensemble restent nécessaires (jamais rien, jamais de réserve automatique).",
     "piege": true
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
     "explication": "Arbre DA : > montant tolérable → opérations complémentaires (pièces) ; < montant tolérable → facteurs qualitatifs → réévaluer si risque potentiel ; jamais d'écartement silencieux.",
     "piege": true
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
     "explication": "Faux positif = alerte à tort (peut être écarté avec jugement + doc) ; faux négatif = manque une vraie anomalie, le plus risqué → procédure alternative obligatoire, calibrage prudent.",
     "piege": true
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
     "explication": "Face à une aberrante, on investigue (demande d'informations, procédures complémentaires) sans présumer l'infraction ou la fraude ; l'écartement ou l'ignorance sont exclus."
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
     "explication": "Deux droites de tendance qui se croisent ont des pentes différentes ; affirmer qu'elles ont la même pente et une marge identique est faux.",
     "piege": true
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
     "explication": "Un amas d'« aberrantes » entièrement expliqué par un nouveau produit connu est reclassé (population distincte, non aberrante) ; seules les aberrantes réellement inexpliquées font l'objet d'une vérification individuelle.",
     "piege": true
    },
    {
     "id": "IT-081",
     "champ": "Granularité & agrégation (Salesforce → SAP)",
     "memento": "§8.3 (granularité / réconciliation)",
     "difficulte": 3,
     "question": "Dans Salesforce, quantité, prix de vente et prix coûtant sont saisis par vente ; chaque jour les données sont cumulées puis chargées dans SAP (CA et charges de marchandises agrégés). Marge = (CA − charges) / CA. Quelle affirmation sur les valeurs aberrantes de marge est FAUSSE ?",
     "options": [
      "Les valeurs aberrantes présentes dans Salesforce peuvent être perdues lors du cumul et donc ne pas être identifiées dans SAP.",
      "Les données de Salesforce sont plus granulaires que celles de SAP, donc moins comprimées.",
      "Les deux structures de données peuvent en principe être utilisées pour une analyse de la marge.",
      "La marge moyenne quotidienne est identique dans SAP et dans Salesforce."
     ],
     "correct": 3,
     "explication": "L'agrégation quotidienne masque les aberrantes et modifie la marge : la marge cumulée (pondérée par le CA) diffère de la moyenne des marges individuelles.",
     "piege": true
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
     "explication": "Une direction capable de modifier des écritures au-delà des personnes autorisées met en cause l'intégrité des données servant de population à la DA.",
     "piege": true
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
     "explication": "IPE et EUC sont les deux termes du corpus ; l'IUC (information servant à un contrôle de l'entité) est un concept voisin à ne pas confondre avec l'IPE, ni attribuer à l'auditeur.",
     "piege": true
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
     "explication": "L'IPE est produite PAR l'entité ; les documents externes (factures fournisseurs) et les contenus non issus de ses systèmes (réseaux sociaux) n'en font pas partie."
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
     "explication": "Parmi les 5 risques IPE, certains portent sur l'application IT (traitement, extraction, calcul) et d'autres non (transfert entre applications, retouche via l'EUC) ; affirmer que les calculs sont toujours corrects nie l'un des risques."
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
     "explication": "Sur une IPE, on cherche fiabilité, exhaustivité et exactitude via des contrôles de substance ou de contrôles ; l'inquiry seule ne suffit pas, et l'évaluation de la présentation/disclosure sort du champ de fiabilité de l'IPE."
    },
    {
     "id": "IT-087",
     "champ": "Assertions IPE via GITC & EUC Excel",
     "memento": "§10.1",
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
     "explication": "Les GITC garantissent exhaustivité et exactitude d'une IPE issue d'une application, mais pas d'un EUC autonome (Excel), dont l'exactitude se vérifie par revue des formules et contrôle d'exhaustivité.",
     "piege": true
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
     "explication": "Le rapport standard est fourni tel quel avec le système ; dès qu'il est adapté ou créé pour l'entreprise, il devient un rapport personnalisé exigeant des procédures alternatives.",
     "piege": true
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
     "explication": "Processus IT fiables → test d'un échantillon de rapports standard une fois par période ; le rapport personnalisé impose toujours des procédures alternatives, tandis que le standard n'exige pas de démarche individuelle.",
     "piege": true
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
     "memento": "§11.1",
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
     "explication": "Le JET est obligatoire pour traiter le risque de management override ; les écritures annulées en début de période suivante en sont un marqueur classique."
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
     "explication": "L'ISA-CH 240 définit la fraude comme un acte intentionnel générant une anomalie, sous deux formes : information financière frauduleuse et détournement d'actifs ; l'erreur (non intentionnelle) en est exclue."
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
     "explication": "L'intégrité des données JET exige une correspondance exacte (line items, champs, débit=crédit) ; à l'exécution, chaque écriture doit être justifiée et autorisée, et un justificatif manquant impose une enquête, jamais un abandon pour matérialité.",
     "piege": true
    },
    {
     "id": "IT-093",
     "champ": "Échantillon de suivi & scepticisme",
     "memento": "§11.1 et §11.3",
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
     "explication": "On comprend via un « test of one » puis on étend aux schémas suspects, en intégrant l'imprévisibilité ; limiter le JET à l'erreur tolérable ou aux transactions courantes est l'erreur à éviter.",
     "piege": true
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
     "explication": "La sélection repose sur des critères de risque (SCOT/FSCP, complexité IT, imprévisibilité, comptes/montants inhabituels), non sur la seule matérialité ; les écritures plausibles restent à faible risque.",
     "piege": true
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
     "memento": "§12 (couches d'externalisation §2)",
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
     "explication": "Spectre d'externalisation empilé Housing → IaaS → PaaS → SaaS : plus on monte, plus le prestataire prend en charge de couches. SaaS = tout jusqu'à l'application ; IaaS = infrastructure seulement.",
     "piege": true
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
     "explication": "Le passage au cloud est un changement significatif : il faut classifier les données, encadrer leur localisation et les chiffrer, sans jamais assimiler cloud privé et cloud public."
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
     "explication": "Type 1 = conception à une date donnée ; Type 2 = conception + efficacité opérationnelle testée sur une période (jusqu'à 12 mois). Seul le Type 2 permet à l'auditeur de s'appuyer sur les contrôles.",
     "piege": true
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
     "explication": "BCM = rester opérationnel en crise et se rétablir (fonctions critiques, RTO/RPO) ; ORM = identifier et prévenir les risques en amont, avant la survenance des crises."
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
     "explication": "Cyberrisque = un acteur externe causant un préjudice, souvent risque important pour l'audit. Modèle FAIR : Loss Event Frequency = Threat Event Frequency (toutes tentatives, réussies ou non) × Vulnerability.",
     "piege": true
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
     "explication": "L'auditeur intègre le cyber à son analyse des risques et à son approche d'audit (y compris chez le prestataire cloud), sans produire d'audit ni d'opinion cyber séparés."
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
     "explication": "L'étendue primaire est bornée par la pertinence pour les états financiers ; les procédures sont ensuite calibrées sur l'environnement IT propre à l'entreprise.",
     "piege": true
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
     "explication": "CA/direction : sujets stratégiques (gouvernance, responsabilité, appétit au risque) et supervision. Le stockage/traitement technique est opérationnel et la cyberstratégie ne se délègue pas « en bloc ».",
     "piege": true
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
     "explication": "Les axes d'identification des cyberrisques sont : sécurité, stockage, transmission et traitement des données. L'analyse de données (DA) n'en fait pas partie.",
     "piege": true
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
     "explication": "Cyber-menaces typiques : ransomware, attaques de paiement, usage non sécurisé du cloud, phishing. Le management override est un risque de fraude. Mesures personnelles : mots de passe, appareils, sécurité physique.",
     "piege": true
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
     "explication": "Périmètre de l'auditeur : il n'atteste pas les contrôles cyber (pas de confirmation à l'AG) mais reste tenu d'informer le client des risques importants qu'il constate."
    }
   ]
  }
 ]
};
