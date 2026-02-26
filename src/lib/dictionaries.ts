export const dictionary = {
  sidebar: {
    available: 'Available For hire !',
    menu: 'Menu',
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    achievements: 'Achievements',
    writings: 'Writings',
    uses: 'Uses',
  },
  home: {
    subtitle: 'Backend & AI Engineer Cohort',
    location: 'Yogyakarta, ID',
    summary: 'I build secure and efficient end-to-end web solutions.',
    description:
      'An Information Technology student focused on Fullstack Development and AI Engineering. Focused on scalability, clean architecture, and developer experience.',
    experience: 'Experience',
    present: 'Present',
    key_responsibilities: 'Key Responsibilities:',
    view_details: 'View Details',
    stack: 'Stack',
    projects: 'Projects',
    view_all_projects: 'View all projects',
    writings: 'Writings',
    view_all_articles: 'View all Articles',
    experienceList: [
      {
        company: 'Pijak in collaboration with IBM SkillsBuild',
        status: 'Present',
        date: 'Feb 2026',
        role: 'AI Engineer Cohort',
        description:
          'As an AI Engineer Cohort participant, I focus on building practical and industry-oriented AI solutions through structured learning and hands-on projects. I work with real-world datasets and apply machine learning concepts to solve meaningful problems.',
        responsibilities: [
          'Develop AI models using Python and machine learning frameworks',
          'Analyze data, perform preprocessing, and evaluate model performance',
          'Build an end-to-end Capstone Project, from problem definition to deployment-ready output',
          'Collaborate in a remote learning environment and present project outcomes clearly',
        ],
      },
      {
        company: 'Baparekraf Digital Talent',
        status: '',
        date: 'May 2023',
        role: 'Program Participant',
        description: 'Baparekraf Digital Talent 2023',
        responsibilities: [],
      },
    ],
    projectList: [
      {
        title: 'SRIM - Rekam Medis',
        description:
          'Web-based application designed to digitize and streamline administrative processes and clinical data management in healthcare facilities.',
        link: '/projects/sirm-rekam-medis',
      },
      {
        title: 'AirLink IoT',
        description:
          'A web-based dashboard built to control and monitor a smart IoT fan device in real time.',
        link: '/projects/airlink-iot',
      },
      {
        title: 'Club affection ecommerce',
        description: 'An app for storing and sharing favorite recipes.',
        link: '/projects/club-affection',
      },
      {
        title: 'Jepretin Aja!',
        description:
          'The premium online photobooth experience and create timeless memories.',
        link: '/projects/jepretin-aja',
      },
      {
        title: 'ACU Kriptografi',
        description:
          'A web-based security application designed to protect text data using cryptographic algorithms.',
        link: '/projects/acu-kriptografi',
      },
    ],
    writingList: [
      {
        title: 'Best Practices for Optimizing Nextjs\nPerformance',
        date: '10 September 2024',
        tags: [
          'Performance Optimization',
          'Web Performance',
          'Frontend Development',
        ],
        link: '/writings/optimizing-nextjs',
      },
      {
        title: 'Implementing SEO Strategies in\nNextjs Projects',
        date: '5 October 2024',
        tags: ['SEO', 'Search Engine Optimization', 'Digital Marketing'],
        link: '/writings/seo-nextjs',
      },
    ],
  },
  projectsPage: {
    title: 'Projects',
    subtitle: 'Selected works and experiments.',
    categories: 'Categories',
    techStack: 'Tech Stack',
    details: 'Details',
  },
  about: {
    title: 'Who am i?',
    subtitle: 'Backend & AI Engineer Cohort',
    p1: 'I build secure and efficient end-to-end web solutions with a strong focus on scalability and data-driven systems. As a Backend and AI Engineer, I design reliable architectures, optimize performance, and develop intelligent features that solve real-world problems.',
    p2: 'I continuously learn and adapt to new technologies, combining system design, algorithmic thinking, and practical AI implementation to create efficient, maintainable, and production-ready software that delivers measurable impact.',
    skills: 'Skills & Expertise',
    languages: 'Languages',
    databases: 'Databases',
    streaming: 'Streaming Platforms',
    containerization: 'Containerization',
    cloud: 'Cloud Providers',
    technical_skills: 'Technical Skills',
    experience: 'Experience',
    date_header: 'Date',
    role_header: 'Role',
    company_header: 'Company',
    honors: 'Honors & Certifications',
    honorsList: [
      {
        title: 'Graduated with Distinction (Top 10%) from the',
        linkText: 'Bangkit Machine Learning Path',
        linkUrl: '#',
      },
      {
        title: 'Microsoft PL-300',
        linkText: 'PowerBI Data Analyst',
        linkUrl: '#',
      },
      {
        title: 'Finalist of',
        linkText: 'Hology Competitive Programming',
        linkUrl: '#',
      },
    ],
    online_presence: 'Online Presence',
    connect: 'Connect',
  },
  common: {
    back_to_home: 'Back to Home',
    back_to_projects: 'Back to Projects',
    back_to_writings: 'Back to Writings',
    source_code: 'Source Code',
    live_demo: 'Live Demo',
    unknown_date: 'Unknown Date',
  },
  writingsPage: {
    title: 'Writing',
    subtitle: 'Selected works and experiments.',
    no_writings: 'No writings found for the selected tag.',
    sort_by: 'Sort By',
    newest: 'Newest',
    oldest: 'Oldest',
    topics: 'Topics',
    all_writing: 'All Writing',
  },
  usesPage: {
    title: 'Uses',
    subtitle:
      'A documented list of all the hardware and software I use to build things.',
    setupList: [
      {
        category: 'Hardware',
        items: [
          {
            name: 'Lenovo Ideapad Slim 3 15ALC6',
            description:
              'My reliable daily driver for all coding and AI tasks.',
          },
          {
            name: 'Reddragon K617RGB 60%',
            description:
              'Mechanical keyboard with Red switches for an optimal typing experience.',
          },
        ],
      },
      {
        category: 'Software & Editor',
        items: [
          {
            name: 'VS Code',
            description:
              'My primary editor with a customized dark theme and strictly curated extensions.',
          },
          {
            name: 'Windows Subsystem for Linux (WSL2)',
            description:
              'For seamless Linux development within the Windows ecosystem.',
          },
          {
            name: 'Docker Desktop',
            description:
              'Essential for containerizing my backend applications and running local databases.',
          },
          {
            name: 'Google Chrome',
            description:
              'Main browser for development with critical React/Next.js dev tools.',
          },
        ],
      },
      {
        category: 'Design',
        items: [
          {
            name: 'Figma',
            description:
              'Used for system architecture diagrams, basic UI wireframing, and inspecting design tokens.',
          },
        ],
      },
    ],
  },
};

export type Dictionary = typeof dictionary;
