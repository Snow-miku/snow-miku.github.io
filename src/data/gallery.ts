export interface GalleryItem {
  id: string
  title: string
  description?: string
  image: string
  category: 'illustration' | 'painting' | 'digital' | 'sketch' | 'other'
  date?: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'art-1',
    title: 'Artwork Title',
    description: 'Description of this artwork.',
    image: '/images/gallery/placeholder.jpg',
    category: 'illustration',
    date: '2024',
  },
  {
    id: 'art-2',
    title: 'Another Piece',
    description: 'Description of this piece.',
    image: '/images/gallery/placeholder.jpg',
    category: 'digital',
    date: '2024',
  },
  {
    id: 'art-3',
    title: 'Sketch Work',
    image: '/images/gallery/placeholder.jpg',
    category: 'sketch',
    date: '2023',
  },
]

export const categories = [
  { value: 'all', label: 'All' },
  { value: 'illustration', label: 'Illustration' },
  { value: 'painting', label: 'Painting' },
  { value: 'digital', label: 'Digital Art' },
  { value: 'sketch', label: 'Sketch' },
  { value: 'other', label: 'Other' },
] as const
