export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string
  highlights: string[]
}

export interface Education {
  id: string
  school: string
  degree: string
  duration: string
  description?: string
}

export interface Skill {
  category: string
  items: string[]
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Company Name',
    position: 'Full Stack Engineer & UI/UX Designer',
    duration: '2022 - Present',
    description: 'Brief description of your role and responsibilities.',
    highlights: [
      'Accomplishment or responsibility 1',
      'Accomplishment or responsibility 2',
      'Accomplishment or responsibility 3',
    ],
  },
  {
    id: 'exp-2',
    company: 'Previous Company',
    position: 'Software Engineer',
    duration: '2020 - 2022',
    description: 'Description of your previous role.',
    highlights: [
      'Key achievement 1',
      'Key achievement 2',
    ],
  },
]

export const education: Education[] = [
  {
    id: 'edu-1',
    school: 'University Name',
    degree: 'Bachelor of Science in Computer Science',
    duration: '2016 - 2020',
    description: 'Relevant coursework or achievements.',
  },
]

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
  },
  {
    category: 'Design',
    items: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'Design Systems'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'Jira'],
  },
]
