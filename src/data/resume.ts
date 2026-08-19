export interface Experience {
  id: string
  company: string
  /** Company website — rendered as a link when present */
  url?: string
  /** Logo image URL (hotlinked); falls back to a diamond mark if missing/broken */
  logo?: string
  position: string
  duration: string
  location?: string
  employmentType?: string
  highlights: string[]
  /** Shipped projects at this company — rendered as external link chips */
  projects?: { name: string; url: string }[]
  /** Early-career entries are grouped into a collapsed section */
  earlyCareer?: boolean
}

export interface Education {
  id: string
  school: string
  url?: string
  logo?: string
  degree: string
  duration: string
  location?: string
  gpa?: string
  description?: string
}

export interface Skill {
  category: string
  items: string[]
}

export const experiences: Experience[] = [
  {
    id: 'exp-unis',
    company: 'Unis, LLC',
    url: 'https://www.unisco.com',
    logo: 'https://www.google.com/s2/favicons?domain=unisco.com&sz=128',
    position: 'AI Automation Engineer',
    duration: 'Oct 2024 - Present',
    location: 'Buena Park, CA',
    employmentType: 'Full-time · On-site',
    highlights: [
      'Implement and provide support for OCR and Supply Chain applications, including Logistics, Inventory, Engineering, Planning, and Purchasing.',
      'Utilize Agile development methodologies to identify critical functionality or performance gaps and translate them into actionable epics and stories.',
      'Research industry best practices; compile and categorize quantitative and qualitative data to provide actionable insights and formulate system design models.',
      'Gather, update, and document user and business requirements for alignment across systems within the company.',
      'Analyze data to identify trends and insights that inform decision-making for supply chain operations.',
      'Perform validation and testing of new system applications to ensure successful implementation of proposed solutions.',
    ],
  },
  {
    id: 'exp-cims',
    earlyCareer: true,
    company: 'Collegiate Influencer Marketing Systems, Inc.',
    url: 'https://cims.ai',
    logo: 'https://www.google.com/s2/favicons?domain=cims.ai&sz=128',
    position: 'UX Designer',
    duration: 'Aug 2023 - May 2024',
    location: 'Denver, CO',
    employmentType: 'Remote',
    highlights: [
      'Created user flows and prototypes based on user feedback and business requirements.',
      'Collaborated closely with the product team, integrating user-friendly design with frontend functionality.',
      'Conducted A/B tests on different UI versions, drawing insights and implementing changes to the front-end using HTML/CSS, JavaScript, and Python scripts.',
    ],
  },
  {
    id: 'exp-focuskpi',
    company: 'FocusKPI, Inc.',
    url: 'https://focuskpi.com',
    logo: 'https://www.google.com/s2/favicons?domain=focuskpi.com&sz=128',
    position: 'Full Stack Software Developer',
    duration: 'Dec 2023 - Jan 2024',
    location: 'Santa Clara, CA',
    employmentType: 'Part-time · Remote',
    highlights: [
      'Built and deployed RESTful APIs in Python using FastAPI for data science projects, streamlining data processing and analysis.',
      'Developed an interactive and user-friendly web platform to present data visualization in various formats with Bubble.io and customized JavaScript.',
      'Designed and queried relational databases using SQL and Python dataframes for efficient data management.',
      'Participated in regular code reviews, emphasizing best practices and version control processes.',
    ],
  },
  {
    id: 'exp-netprism',
    earlyCareer: true,
    company: 'NetPrism, Inc.',
    url: 'https://www.netprism.com',
    logo: 'https://www.google.com/s2/favicons?domain=netprism.com&sz=128',
    position: 'Visual Designer',
    duration: 'Jan 2023 - Jun 2023',
    location: 'Seattle, WA',
    employmentType: 'Capstone · Hybrid',
    highlights: [
      "Developed a project vision from a sponsor's brief.",
      'Conducted user research to identify pain points of online shoppers.',
      'Collaborated with team members to ideate and prototype the application using Sketch and Figma.',
      'Conducted usability testing to gather feedback from current users.',
      'Worked closely with sponsors to manage relationships and establish clear expectations and boundaries for work.',
    ],
    projects: [{ name: 'BuyScout', url: 'https://www.buyscout.ai' }],
  },
  {
    id: 'exp-runch',
    earlyCareer: true,
    company: 'Greatwall Park',
    url: 'https://greatwallpark.com',
    logo: 'https://www.google.com/s2/favicons?domain=greatwallpark.com&sz=128',
    position: 'UX Engineer Intern',
    duration: 'Jul 2022 - Sep 2022',
    location: 'New York, NY',
    employmentType: 'Remote',
    highlights: [
      'Analyzed UX requirements with the product manager and proactively proposed design solutions.',
      'Delivered design solutions compatible with desktop and mobile platforms.',
      'Collaborated with the feature crew on software evaluations for the iterative testing process.',
      'Drove design critiques and reviews by collecting feedback from both users and the feature crew.',
    ],
  },
  {
    id: 'exp-microsoft',
    earlyCareer: true,
    company: 'Microsoft Corporation',
    url: 'https://www.microsoft.com',
    logo: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128',
    position: 'Cloud Solution Architect Intern',
    duration: 'Jul 2021 - Sep 2021',
    location: 'Shanghai, China',
    highlights: [
      'Localized 50+ marketing assets such as presentation slides, banners, welcome emails, and promotion packages.',
      'Actively participated in the kick-off event with relevant activities and material setups, learning the latest Azure-related solutions.',
    ],
  },
]

export const education: Education[] = [
  {
    id: 'edu-uw',
    school: 'University of Washington',
    url: 'https://www.washington.edu',
    logo: 'https://www.google.com/s2/favicons?domain=washington.edu&sz=128',
    degree: 'B.S. Human Centered Design & Engineering',
    duration: 'Graduated Jun 2023',
    location: 'Seattle, WA',
    gpa: '3.82 / 4.0',
    description:
      'Relevant courses: Interactive Systems Design and Technology, Data Structures and Algorithms, Database Systems, Web Programming, Interaction Programming, Information Visualization, Organizational Teamwork, Visual Communication.',
  },
]

export const skills: Skill[] = [
  {
    category: 'AI Tools',
    items: [
      'Codex',
      'Claude Code',
      'Gemini',
      'Cursor',
      'OpenClaw',
      'Hermes Agent',
      'n8n',
      'Make',
      'Zapier',
    ],
  },
  {
    category: 'Programming',
    items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Node.js'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'FastAPI', 'RESTful API', 'SQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Design',
    items: ['Figma', 'Sketch', 'Adobe AI', 'Prototyping', 'Usability Testing'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Agile', 'DevOps', 'CI/CD', 'AWS', 'Azure', 'Tableau', 'Stable Diffusion'],
  },
]
