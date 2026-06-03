export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
}

export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  description: string
  coverImage: string
  tags: string[]
  duration: string
  role: string
  tools: string[]
  sections: {
    title: string
    content: string
    images?: string[]
  }[]
}

export const featuredProjects: Project[] = [
  {
    id: 'project-1',
    title: 'Project Name',
    description: 'A brief description of this project and what it accomplishes.',
    image: '/images/case-studies/placeholder.jpg',
    tags: ['React', 'TypeScript', 'UI/UX'],
    link: '#',
  },
  {
    id: 'project-2',
    title: 'Another Project',
    description: 'Description of another amazing project you have worked on.',
    image: '/images/case-studies/placeholder.jpg',
    tags: ['Figma', 'Design System'],
    link: '#',
  },
  {
    id: 'project-3',
    title: 'Third Project',
    description: 'Yet another project showcasing your skills and expertise.',
    image: '/images/case-studies/placeholder.jpg',
    tags: ['Full Stack', 'Node.js'],
    link: '#',
  },
]

export const caseStudies: CaseStudy[] = [
  {
    id: 'case-study-1',
    title: 'Case Study Title',
    subtitle: 'UX Research & Design',
    description: 'A comprehensive case study about a design project.',
    coverImage: '/images/case-studies/placeholder.jpg',
    tags: ['UX Research', 'UI Design', 'Prototyping'],
    duration: '3 months',
    role: 'Lead Designer',
    tools: ['Figma', 'Maze', 'Notion'],
    sections: [
      {
        title: 'Background',
        content: 'Describe the context and background of this project.',
      },
      {
        title: 'Problem',
        content: 'What problem were you trying to solve?',
      },
      {
        title: 'Solution',
        content: 'How did you approach and solve the problem?',
      },
      {
        title: 'Results',
        content: 'What were the outcomes and learnings?',
      },
    ],
  },
]
