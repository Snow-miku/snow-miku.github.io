export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
}

export interface PaletteColor {
  hex: string
  name: string
}

export interface TypeSpecimen {
  /** e.g. "Header 1" */
  label: string
  /** e.g. "Rubik Bold · 30px" */
  spec: string
  fontFamily: string
  sizePx: number
  weight: number
  uppercase?: boolean
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
    /** Native color swatch grid rendered as HTML (no image needed) */
    palette?: PaletteColor[]
    /** Native type-scale specimen rendered with the project's real webfont */
    typeScale?: TypeSpecimen[]
  }[]
}

export const featuredProjects: Project[] = [
  {
    id: 'tilth-alliance',
    title: 'Tilth Alliance Rebranding',
    description:
      'A complete Visual Brand Language for a Seattle food-community nonprofit — brand mark, color, typography, imagery, and graphic elements, codified in a brand book.',
    image: '/images/case-studies/tilth/cover.svg',
    tags: ['Branding', 'Visual Identity', 'UI/UX'],
    link: '/case-study/tilth-alliance-rebrand',
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
    id: 'tilth-alliance-rebrand',
    title: 'Tilth Alliance Rebranding',
    subtitle: 'Visual Brand Language',
    description:
      'A complete Visual Brand Language (VBL) for Tilth Alliance — a Seattle-based nonprofit building a sustainable, equitable, and healthy food culture. Five essentials — brand mark, color, typography, imagery, and graphic elements — codified into a brand book, then pressure-tested in a redesigned mobile experience.',
    coverImage: '/images/case-studies/tilth/cover.svg',
    tags: ['Rebranding', 'Visual Identity', 'Brand Book', 'Mobile UI', 'UX Design'],
    duration: '3 months · Oct – Dec 2021',
    role: 'Visual Designer',
    tools: ['Figma'],
    sections: [
      {
        title: 'Background',
        content:
          'Tilth Alliance is a nonprofit organization located in Seattle that supports Washington growers and producers. Its audience spans farmers — who grow a considerable portion of food for the Washington community — as well as consumers, gardeners, cooks, and environmental advocates.\n\nIts mission is to create a sustainable, equitable, and healthy food culture and community: advocating for healthy soil, farmer training programs, local farmer markets, and good eating habits. The rebrand set three communication goals — Friendly (the embrace of the Washington community), Lively & Energetic (the growth of agriculture and the beauty of nature), and Natural & Healthy (advocating sustainable food and a good diet).',
      },
      {
        title: 'Brand Audit',
        content:
          "The audit looked at every audience touchpoint — the website, the legacy wordmark, and event collateral. The existing identity no longer matched the organization's energy: the logo and interface felt dated, pages were cluttered with dense text set too small to read comfortably, the layout was not adapted for mobile, and there was no clear path to the event pages — one of the most important destinations for the community.\n\nThe brief that emerged: rebuild the identity as a cohesive Visual Brand Language — five essentials (brand mark, color, typography, imagery, and graphic elements) working together as one system, codified so the organization can apply it consistently across every surface.",
        images: ['/images/case-studies/tilth/current.webp'],
      },
      {
        title: 'Brand Mark',
        content:
          'The brand mark is the identity in its simplest form — a unique signifier built from two overlapping leaves: life, health, and sustainability. The leaves intersect to form a heart, conveying the love and warmth of a community that embraces everyone who loves food, cooking, and farming; the overlay implies that all members inside the community are closely bonded together.\n\nThe mark is designed to hold up from a website favicon to an event banner, and anchors every other element in the system.',
        images: ['/images/case-studies/tilth/logo-sheet.svg'],
      },
      {
        title: 'Color Palette',
        content:
          'Color differentiates, signals belonging, and triggers emotion — all at once. The core palette uses monochromatic variants of green inspired by vegetables — the most beloved products of the farmer’s market. Brown grounds body text and titles, representing the soil that nourishes everything Tilth Alliance does, while a vibrant orange accent adds liveliness, symbolizing the growth of life. Sage and white keep long-form content breathable.',
        palette: [
          { hex: '#ABB837', name: 'Leaf Green' },
          { hex: '#5D8233', name: 'Deep Green' },
          { hex: '#DBE5CE', name: 'Sage Tint' },
          { hex: '#FFFFFF', name: 'White' },
          { hex: '#F79420', name: 'Vibrant Orange' },
          { hex: '#593C36', name: 'Soil Brown' },
        ],
      },
      {
        title: 'Typography',
        content:
          'Typography is the brand’s visual voice. All text is set in Rubik — a soft typeface with smooth, rounded corners that conveys the gentleness of farmers growing their plants and crops; its encompassing character symbolizes the friendliness within the community. A five-level hierarchy keeps dense nonprofit content scannable, and because Rubik is an open Google Font, the same voice carries into presentations, documents, and the web without licensing fallbacks.',
        typeScale: [
          { label: 'Header 1', spec: 'Rubik Bold · 30px', fontFamily: 'Rubik', sizePx: 30, weight: 700 },
          { label: 'Header 2', spec: 'Rubik Medium · 25px', fontFamily: 'Rubik', sizePx: 25, weight: 500 },
          { label: 'Header 3', spec: 'Rubik Regular · 25px', fontFamily: 'Rubik', sizePx: 25, weight: 400 },
          { label: 'Button Text', spec: 'Rubik Medium · 22px', fontFamily: 'Rubik', sizePx: 22, weight: 500, uppercase: true },
          { label: 'Body Text', spec: 'Rubik Regular · 15px', fontFamily: 'Rubik', sizePx: 15, weight: 400 },
        ],
      },
      {
        title: 'Imagery',
        content:
          'Imagery carries the brand’s tone faster than any words. Rather than turning to stock, the guideline draws on Tilth Alliance’s own event archive — playful, colorful, information-rich poster art and photography of real events, real food, and real community. The existing art already resonated with the new palette, so the system leans into what makes the organization authentic instead of replacing it.',
        images: ['/images/case-studies/tilth/imagery.webp'],
      },
      {
        title: 'Graphic Elements & Application',
        content:
          'Leaf-shaped color chips, generous white space, and image-led section dividers extend the mark into a flexible set of graphic elements that keep layouts unmistakably on-brand.\n\nThe system was then pressure-tested where it matters most: a mobile flow for registering for the Tilth Conference, the organization’s major fall event. The original pages crammed dense, tiny text into a layout never adjusted for mobile — the new flow applies minimal design, trims copy, and uses Uniform Connectedness to build an intuitive hierarchy. A redesigned menu bar with imagery and divided sections finally gives events a clear, discoverable home.',
        images: ['/images/case-studies/tilth/mobile.webp'],
      },
      {
        title: 'Outcome',
        content:
          'The final deliverable is a complete Visual Brand Language, codified in a brand book: brand mark, color system, type system, imagery guidelines, and graphic element treatments — plus application templates and the mobile event-registration flow that shows the identity living inside a real product surface. Codifying the rules is what turns five good elements into one durable brand.\n\nA validating footnote: the organization’s live brand has since evolved toward the same territory — warm orange, foliage green, and soil brown. Key takeaway: for a mission-driven organization, brand and UX are the same project. The friendliest identity system fails if a supporter cannot find the register button.',
      },
    ],
  },
]
