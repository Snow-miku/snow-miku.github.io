import { ArrowUpRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  variant?: 'default' | 'featured'
}

export function ProjectCard({ project, variant = 'default' }: ProjectCardProps) {
  const isFeatured = variant === 'featured'

  return (
    <Card className="group overflow-hidden border-ink/10 bg-cream/50 hover:bg-cream/80 transition-all duration-300 hover:shadow-lg">
      <div className={`relative overflow-hidden ${isFeatured ? 'aspect-[16/10]' : 'aspect-video'}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />
      </div>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className={`font-medium text-ink ${isFeatured ? 'text-xl' : 'text-lg'}`}>
            {project.title}
          </h3>
          {project.link && (
            <ArrowUpRight className="h-4 w-4 text-ink-muted group-hover:text-ink transition-colors flex-shrink-0" />
          )}
        </div>
        <p className="text-sm text-ink-muted mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-paper-blue-light text-ink-light text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
