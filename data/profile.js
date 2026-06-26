// data/profile.js
// Source unique de données — toutes les informations proviennent du CV réel
// de Horacio NANI. Aucune donnée n'est inventée.

export const profile = {
  name: "Horacio NANI",
  role: "Économiste-Statisticien",
  tagline:
    "Recherche appliquée, évaluation d'impact & suivi-évaluation de programmes de développement en Afrique de l'Ouest",
  location: "Abomey-Calavi, Bénin",
  email: "nanihoracio2@gmail.com",
  phone: "+229 01 68 16 66 52",
  phoneAlt: "+229 01 96 50 61 98",
  nationality: "Béninoise",
  bio: `Titulaire d'un Master Recherche en Économie de l'Université d'Abomey-Calavi, je conjugue rigueur académique et expérience opérationnelle de terrain. Depuis 2019, j'ai collaboré avec des institutions nationales et internationales sur des projets touchant à l'autonomisation économique des femmes et des jeunes, l'inclusion financière, la sécurité alimentaire, la santé publique et le changement climatique. Je conçois des outils de collecte, coordonne des enquêtes de terrain, forme des équipes et rédige des rapports d'évaluation, avec une attention constante à la qualité des données et à la rigueur méthodologique.`,
};

export const stats = [
  { value: "6+", label: "Années de terrain" },
  { value: "27", label: "Missions & études" },
  { value: "3", label: "Publications" },
  { value: "10", label: "Certifications" },
  { value: "C2 / B2", label: "Français / Anglais" },
];

export const researchDomains = [
  "Inclusion financière",
  "Autonomisation des femmes",
  "Évaluation d'impact",
  "Sécurité alimentaire",
  "Changement climatique",
  "Économie du développement",
];

export const sectorDomains = [
  "Santé publique & paludisme",
  "Agriculture & chaînes de valeur",
  "Politiques publiques régionales",
  "Suivi-évaluation (M&E)",
  "Modélisation systèmes dynamiques",
  "Collecte de données numériques",
];

export const affiliations = [
  "EvalForward",
  "Africa Evidence Network",
  "International Society for Development and Sustainability (ISDS)",
  "BetterEvaluation",
  "Réseau Francophone des Évaluateurs émergents",
];

export const education = [
  {
    period: "2020 – 2024",
    institution:
      "Université d'Abomey-Calavi — École Doctorale des Sciences Économiques et de Gestion",
    degree: "Master Recherche en Économie",
    detail:
      "Mémoire : « Inclusion financière et autonomisation des femmes résidant en milieu rural au Sud-Bénin »",
  },
  {
    period: "2016 – 2019",
    institution:
      "Université d'Abomey-Calavi — Faculté des Sciences Économiques et de Gestion (FASEG)",
    degree: "Licence Professionnelle en Économie Appliquée",
    detail:
      "Mémoire : « Investissements Publics et développement économique au Bénin : une analyse sectorielle »",
  },
  {
    period: "2016",
    institution: "Bénin",
    degree: "Baccalauréat, Série D (Sciences)",
    detail: "",
  },
];

// Expériences récentes mises en avant sur la page d'accueil
export const featuredExperience = [
  {
    period: "11/2025 – 12/2025",
    org: "CERMAQ SARL (financé par le Global Development Network)",
    role: "Co-chercheur",
    desc: "Revue critique de littérature quasi-systématique et analyse des politiques publiques régionales en Afrique de l'Ouest.",
  },
  {
    period: "10/2025 – 01/2026",
    org: "BEATA CONSULT-Ingénieurs Conseils",
    role: "Consultant Associé — Étude socio-économique",
    desc: "Faisabilité de la réhabilitation des complexes karité dans trois pôles de production.",
  },
  {
    period: "04/2025 – 05/2025",
    org: "Conférence Internationale sur la Planification Familiale (ICFP) 2025",
    role: "Réviseur de résumés — Comité scientifique",
    desc: "Évaluation par les pairs des résumés scientifiques soumis à l'édition 2025.",
  },
  {
    period: "2024 – 2025",
    org: "Social Watch Bénin",
    role: "Personne ressource — Évaluation de projet",
    desc: "Évaluation des indicateurs de base du projet « Leadership féminin dans la vaccination » au Bénin.",
  },
  {
    period: "01/2025 – 03/2025",
    org: "Prof. Alain Babatounde (UEMOA)",
    role: "Assistant de recherche",
    desc: "Projet « Diagnostic pays pour la Côte d'Ivoire » : collecte, analyse et rédaction de rapports.",
  },
  {
    period: "11/2024 – 12/2024",
    org: "BACOS AFRIC SARL",
    role: "Consultant associé — Évaluation finale",
    desc: "Évaluation finale du Projet PAVPHA (Périmètres Hydro-Agricoles), de la digitalisation à la rédaction du rapport.",
  },
  {
    period: "Depuis 12/2024",
    org: "LABEF, Université d'Abomey-Calavi (J-PAL)",
    role: "Assistant de recherche — Essai contrôlé randomisé",
    desc: "Projet « Social Origins and Mathematical Performance in Benin », financé par J-PAL.",
  },
  {
    period: "03/2024 – 06/2024",
    org: "Cabinet Group KAK Ingénieurs-Conseils",
    role: "Économiste, Assistant Chef de mission",
    desc: "Élaboration de 59 Plans de Gestion Environnementale et Sociale pour des Centres de Santé.",
  },
  {
    period: "Depuis 2021",
    org: "Chaire OMC-CIDI, Université d'Abomey-Calavi",
    role: "Assistant de recherche",
    desc: "Recherche appliquée sur l'autonomisation économique des femmes et la sécurité alimentaire ; coordination d'enquêtes nationales (ECR).",
  },
];

// Missions antérieures (2019-2024) — affichées dans une section dépliable
export const earlierExperience = [
  {
    period: "02/2024",
    org: "Direction Générale de l'Environnement et du Climat (DGEC)",
    role: "Superviseur",
    desc: "Collecte de données pour la mise en œuvre de l'amendement de Kigali du Bénin.",
  },
  {
    period: "07/2023 – 02/2024",
    org: "URMAPha, Université d'Abomey-Calavi",
    role: "Économiste-Statisticien",
    desc: "Faisabilité d'un système de certification microbiologique (MICS) financé par ICARS.",
  },
  {
    period: "11/2023 – 12/2023",
    org: "APESSA",
    role: "Consultant-Statisticien",
    desc: "Suivi de l'expérimentation de l'éducation à la santé sexuelle dans les écoles béninoises.",
  },
  {
    period: "07/2021 – 12/2023",
    org: "Chaire OMC-CIDI (financement CRDI)",
    role: "Membre de l'équipe technique",
    desc: "Projet GUEV COOKER sur l'autonomisation économique des femmes par les foyers améliorés.",
  },
  {
    period: "12/2021 – 02/2024",
    org: "Chaire OMC-CIDI (financement J-PAL)",
    role: "Assistant de recherche",
    desc: "« Adoption of improved cook stove and women decision-making empowerment in rural Benin ».",
  },
  {
    period: "10/2022 – 12/2022",
    org: "MCDI │ USAID │ PMI │ MS",
    role: "Enquêteur-Superviseur",
    desc: "Étude transversale finale CPN_G / Traitement Préventif Intermittent du Paludisme.",
  },
  {
    period: "02/2022 – 03/2022",
    org: "FIVA & Technopolis Group",
    role: "Gestionnaire de données",
    desc: "Évaluation des effets du programme OMIDELTA (2018-2022, financement Pays-Bas).",
  },
  {
    period: "02/2022 – 03/2022",
    org: "Aide à la Décision Économique (ADE), Belgique",
    role: "Expert enquêteur",
    desc: "Évaluation finale du projet BeniBiz (Ambassade des Pays-Bas / Coopération Suisse).",
  },
  {
    period: "10/2021 – 08/2022",
    org: "Institut Universitaire Les Cours Sonou",
    role: "Consultant Principal",
    desc: "Évaluation des enseignements, année académique 2021-2022, huit sites.",
  },
  {
    period: "11/2021",
    org: "Consultation OXFAM",
    role: "Statisticien",
    desc: "Projet « Voix et Leadership des Femmes » (VLF) — suivi du renforcement de capacités des ODDF.",
  },
  {
    period: "10/2020 – 08/2021",
    org: "Institut Universitaire Les Cours Sonou",
    role: "Consultant Principal",
    desc: "Évaluation des enseignements, année académique 2020-2021, huit sites.",
  },
  {
    period: "08/2021",
    org: "NOVEC │ Ingénieurs Conseils",
    role: "Superviseur",
    desc: "Aménagement hydro-agricole et adaptation climatique dans la basse vallée de l'Ouémé.",
  },
  {
    period: "04/2021",
    org: "OMIDELTA-INE",
    role: "Agent de terrain",
    desc: "Évaluation du potentiel économique de l'eau dans le Delta de l'Ouémé.",
  },
  {
    period: "05/2021 – 07/2021",
    org: "GIZ Consultation",
    role: "Statisticien",
    desc: "Résilience des communautés d'Adjohou, Bonou et Dangbo face au changement climatique.",
  },
  {
    period: "01/2021 – 02/2021",
    org: "Consultance IBM Consulting",
    role: "Statisticien",
    desc: "Sondage du bien-être des ménages au Bénin.",
  },
  {
    period: "11/2020 – 12/2020",
    org: "MCDI │ USAID │ PMI │ MS",
    role: "Enquêteur",
    desc: "Étude transversale de base CPN_G / paludisme chez la femme enceinte.",
  },
  {
    period: "09/2019 – 11/2020",
    org: "AfricaRice / Université d'Abomey-Calavi",
    role: "Gestionnaire de données",
    desc: "Performance du marché local du riz et bien-être des consommateurs (emballage labellisé).",
  },
];

export const publications = {
  journals: [
    {
      text:
        "NANI, H., KOGBEDJI, U.S., FASSINOU, J., FIAMOHE, R., IGUE, C.B. (2024). Autonomisation des femmes résidant en milieu rural au Sud-Bénin : mise en évidence du rôle de l'inclusion financière. Actes des JSEB 2024, p. 49.",
    },
    {
      text:
        "Affo, M.A., Dansou, J., Acotcheou, E.P., Zinsou, Z.J., Nani, H., Ligan, E. (2025). Impact of Covid-19 on the Economic Situation of Women in the Non-Formal Sector in Southern Benin. International Journal of Humanities and Social Science, 15, 390-406.",
    },
    {
      text:
        "Ahogni, I.B., Agbla, M., Agboho, P., et al. Impact of Preventive Strategies in Malaria Control in Children Under 5 Years Old in Sèmè-Podji in Southern Benin. (en cours de publication)",
    },
  ],
  conferences: [
    {
      text:
        "Global Development Conference 2025 (GDC), Clermont-Ferrand, France — « Inclusive Digital Transformation: Social Impacts and Technological Innovations » (octobre 2025)",
    },
    {
      text:
        "Journées Scientifiques de l'Économie Béninoise (JSEB) 2024 — « L'autonomisation des femmes vivant en milieu rural dans le Sud du Bénin : le rôle de l'inclusion financière » (décembre 2024)",
    },
    {
      text:
        "VIIIe Colloque des Sciences, Cultures et Technologie, Université d'Abomey-Calavi — « Adaptation des communautés agricoles face aux changements climatiques » (septembre 2023)",
    },
    {
      text:
        "Journées Scientifiques du Centre Béninois de la Recherche Scientifique et de l'Innovation (CBRSI) — « Covid-19 et l'état de la sécurité alimentaire des ménages au Bénin » (mai 2022)",
    },
  ],
  ongoing: [
    "Determinants of financial inclusion for rural women in South Benin",
    "Household food security in Southern Benin: highlighting the role of women's decision-making empowerment",
    "Designing poverty alleviation policies in West Africa: are market and home-oriented consumption relevant? — Evaluation in Economic Analysis and Policy",
    "Financial Inclusion and Empowerment of Rural Women in Southern Benin: A Multidimensional Analysis — Evaluation in Developing Worlds",
  ],
  distinction:
    "Government Analytics Virtual Fellowship — The World Bank Group Institute for Economic Development (2025)",
};

export const certifications = [
  {
    year: "2025",
    title: "Autonomisation des femmes et des jeunes dans l'agriculture (ZLECAf)",
    org: "Secrétariat de la ZLECAf / Union Africaine",
  },
  {
    year: "2024",
    title: "La prospective stratégique et la modélisation des systèmes dynamiques",
    org: "Institut Africain de Développement Économique et de Planification (IDEP)",
  },
  {
    year: "2024",
    title: "Gérer une recherche de terrain réussie",
    org: "Development Impact Evaluation (DIME) / Banque mondiale",
  },
  {
    year: "2024",
    title: "Junior Evaluator Certificate",
    org: "Plateforme internationale d'évaluation",
  },
  {
    year: "2023",
    title:
      "Politique sociale pour planificateur du développement dans un contexte d'incertitude et de crise",
    org: "IDEP",
  },
  {
    year: "2023",
    title: "Gérer les risques dans un contexte d'incertitude et de crises",
    org: "IDEP",
  },
  {
    year: "2023",
    title: "Évaluation de la qualité des données (Data Quality)",
    org: "Programme de formation en ligne",
  },
  {
    year: "2023",
    title: "Genre, Suivi et Rapportage (M&R)",
    org: "Programme de formation en ligne",
  },
  {
    year: "2022",
    title: "Évaluation des programmes sociaux",
    org: "MIT / Abdul Latif Jameel Poverty Action Lab (J-PAL)",
  },
  {
    year: "2019-2025",
    title:
      "Maîtrise d'outils TIC avancés (KoboToolbox, CommCare, Survey CTO, Power BI…)",
    org: "Pratique professionnelle continue",
  },
];

export const tools = [
  "STATA",
  "SPSS",
  "Eviews",
  "Power BI",
  "Jamovi",
  "CsPro",
  "KoboToolbox",
  "CommCare",
  "Survey CTO",
  "My Survey Solution",
  "StatPlus",
  "MS Office",
];

export const coreSkills = [
  "Suivi-évaluation (M&E)",
  "Conception d'outils de collecte",
  "Analyse de données quanti/quali",
  "Coordination d'équipes terrain",
  "Animation de focus groups",
  "Rédaction de rapports techniques",
];

export const languages = [
  { name: "Français", level: "C2 — Excellent", pct: 100 },
  { name: "Anglais", level: "B2 — Bon", pct: 65 },
];
