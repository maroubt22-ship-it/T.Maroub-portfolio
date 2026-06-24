export const profile = {
  name: 'Taoufiq Maroub',
  title: 'Étudiant en Infrastructures Digitales & Intelligence Artificielle',
  tagline: 'Passionné par l\'IA, les réseaux et l\'automatisation',
  summary:
    'Étudiant marocain en infrastructures digitales, actuellement en formation qualifiante en intelligence artificielle. Passionné par les technologies innovantes, je cherche à mettre en pratique mes acquis théoriques à travers un stage stimulant dans le domaine de l\'IA. Mes précédentes expériences de stage m\'ont permis de développer des compétences solides en réseaux informatiques, tout en cultivant une approche rigoureuse, polyvalente et orientée solution.',
  email: 'taoufiq.maroub25@gmail.com',
  phone: '+212 696 496 645',
  phoneDial: '+212696496645',
  location: 'Salé, Maroc',
  photo: '/ok.png',
  cv: '/CV%20Taoufiq%20MAROUB%202626.pdf',
};

export const experiences = [
  {
    role: 'Stagiaire en Data Analytics & Business Intelligence',
    company: 'TownTeam',
    location: 'Rabat',
    period: 'Nov 2025 & Janv. 2026',
    tasks: [
      'Analyse et visualisation des données de vente',
      'Automatisation des processus avec n8n',
      'Développement de solutions BI pour l\'optimisation des performances',
      'Exploitation des données pour la prise de décision',
      'Création de tableaux de bord interactifs',
    ],
    tags: ['Power BI', 'n8n', 'Data Analytics', 'Data Visualization'],
  },
  {
    role: 'Technicien Réseaux',
    company: 'NOVAYATEC',
    location: 'Rabat',
    period: 'Mars – Avril 2025',
    tasks: [
      'Audit du réseau local, sécurisation du Wi-Fi et configuration des équipements (switchs, routeurs, pare-feux)',
      'Déploiement d\'Active Directory, GPO, PRA et automatisation des sauvegardes',
    ],
    tags: ['Windows Server', 'Active Directory', 'PowerShell'],
  },
  {
    role: 'Cybersécurité & Réseaux',
    company: 'FAMALUX',
    location: 'Rabat',
    period: 'Mars – Avril 2024',
    tasks: [
      'Configuration des VLANs, sécurité des ports Cisco, optimisation du trafic',
      'Installation de pare-feux Fortinet, règles VPN/IDS, analyse OWASP & WAF',
    ],
    tags: ['FortiGate', 'Cisco', 'Kali Linux', 'OWASP ZAP'],
  },
  {
    role: 'Admin Systèmes & Support',
    company: 'ISTA Jbel Lakhdar',
    location: 'Marrakech',
    period: 'Mai – Juin 2020',
    tasks: [
      'Audit du parc informatique, maintenance préventive, assistance utilisateurs',
      'Gestion des comptes, correctifs systèmes, documentation technique',
    ],
    tags: ['Windows Server', 'AD', 'Diagnostics réseau'],
  },
];

export const education = [
  {
    degree: 'Formation en Intelligence Artificielle',
    school: 'IDS Incubateur Digitale Solidaire',
    location: 'Salé',
    period: 'Oct. 2025 – Juin 2026',
    note: 'En cours',
  },
  {
    degree: 'Formation en Infrastructures Digitales',
    school: 'ISTA Sala Al Jadida',
    location: 'Salé, Maroc',
    period: 'Sep. 2023 – Juin 2025',
    note: '',
  },
  {
    degree: 'Formation en Réseaux Informatiques',
    school: 'ISTA Jbel Lakhder Marrakech',
    location: 'Marrakech, Maroc',
    period: 'Sep. 2019 – Juin 2021',
    note: '',
  },
  {
    degree: 'Baccalauréat en Sciences Physiques',
    school: 'Lycée Ezzahra',
    location: 'Marrakech, Maroc',
    period: 'Sep. 2018 – Juin 2019',
    note: '',
  },
];

export const skillCategories = [
  {
    label: 'IA & Automation',
    skills: ['n8n & Agents Autonomes', 'Power BI & Data Analytics', 'Design'],
  },
  {
    label: 'Infrastructure & Cloud',
    skills: ['Windows Server', 'Linux', 'Cloud', 'Microsoft 365', 'VMware & VirtualBox', 'Active Directory & GPO', 'Maintenance'],
  },
  {
    label: 'Réseaux & Sécurité',
    skills: ['CCNA', 'VLANs', 'OWASP ZAP', 'Sécurité ports'],
  },
  {
    label: 'Programmation',
    skills: ['Python & Langage C', 'PowerShell'],
  },
];

export const languages = [
  { lang: 'Arabe', level: 'Natif', pct: 100 },
  { lang: 'Français', level: 'Courant', pct: 85 },
  { lang: 'Anglais', level: 'Intermédiaire', pct: 65 },
];

export const projects = [
  {
    title: 'Automatisation & BI des données de vente',
    org: 'TownTeam — 2026',
    desc: 'Analyse, virtualisation et automatisation complète des données de vente via n8n et Power BI.',
    tags: ['n8n', 'Power BI', 'Automation'],
  },
  {
    title: 'Visualisation des données de vente',
    org: 'TownTeam — 2025',
    desc: 'Création de dashboards interactifs pour le suivi des performances commerciales.',
    tags: ['Data Visualization', 'Power BI'],
  },
  {
    title: 'Mise à Niveau du parc Informatique & Intranet',
    org: 'Avril 2025',
    desc: 'Audit, refonte et déploiement d\'un intranet avec infrastructure réseau modernisée.',
    tags: ['Windows Server', 'Active Directory', 'Réseau'],
  },
  {
    title: 'Scan de failles de sécurité d\'une APK Web',
    org: 'Avril 2024',
    desc: 'Analyse de vulnérabilités d\'une application web à l\'aide de techniques de cybersécurité avancées.',
    tags: ['OWASP ZAP', 'Kali Linux', 'Sécurité'],
  },
  {
    title: 'Configuration Windows Server 2019',
    org: 'Juillet 2020',
    desc: 'Déploiement et configuration de services réseau sous Windows Server 2019.',
    tags: ['Windows Server', 'AD', 'GPO'],
  },
];

export const certifications = [
  {
    issuer: 'Cisco Badges — ISTA Sala Al Jadida',
    items: [
      { name: 'Computer Hardware Basics', date: '27/03/2024' },
      { name: 'Endpoint Security', date: '13/03/2024' },
      { name: 'Introduction to Cybersecurity', date: '06/03/2024' },
      { name: 'Operating Systems', date: '27/03/2024' },
      { name: 'Python Essentials', date: '26/03/2024' },
    ],
  },
  {
    issuer: 'ISC2 — Certified in Cybersecurity',
    items: [
      { name: 'Domain 1: Security Principles', date: '03/06/2024' },
      { name: 'Domain 2: Incident Response, BC & DR', date: '04/06/2024' },
      { name: 'Domain 3: Access Control Concepts', date: '04/06/2024' },
      { name: 'Domain 4: Network Security', date: '05/06/2024' },
      { name: 'Domain 5: Security Operations', date: '07/06/2024' },
      { name: 'Final Assessment', date: '08/06/2024' },
    ],
  },
  {
    issuer: 'Cisco CCNA — ISTA Jbel Lakhder Marrakech',
    items: [
      { name: 'IT Essentials', date: '07/02/2020' },
      { name: 'CCNA 1 — Introduction to Networks', date: '30/04/2020' },
      { name: 'CCNA 2 — Routing & Switching Essentials', date: '02/07/2020' },
      { name: 'NDG Linux Essentials', date: '22/08/2020' },
      { name: 'CCNA 3 — Scaling Networks', date: '02/07/2021' },
      { name: 'CCNA 4 — Connecting Networks', date: '29/10/2021' },
    ],
  },
];
