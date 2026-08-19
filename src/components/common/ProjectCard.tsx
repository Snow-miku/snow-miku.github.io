import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Corners } from '@/components/common/Corners'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  variant?: 'default' | 'featured'
  index?: number
}

export function ProjectCard({ project, variant = 'default', index = 0 }: ProjectCardProps) {
  const isFeatured = variant === 'featured'
  const [imgError, setImgError] = useState(false)
  const num = String(index + 1).padStart(2, '0')

  return (
    <div className="group relative p-[3px]">
      <span className="absolute inset-[3px] border border-line bg-surface transition-colors duration-300 group-hover:border-line-strong" />
      <Corners />

      <div className="relative">
        {/* Image / fallback */}
        <div
          className={`relative overflow-hidden border-b border-line ${
            isFeatured ? 'aspect-[16/10]' : 'aspect-video'
          }`}
        >
          {!imgError ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-bg">
              <span className="w-8 h-8 rotate-45 border-2 border-faint" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-faint">
                IMG_PENDING
              </span>
            </div>
          )}
          {/* Scanline number overlay */}
          <span className="absolute top-2 left-3 font-mono text-[10px] tracking-[0.2em] text-mute">
            PRJ_{num}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3
              className={`font-medium text-fg ${
                isFeatured ? 'text-xl' : 'text-lg'
              }`}
            >
              {project.title}
            </h3>
            {project.link && (
              <ArrowUpRight className="h-4 w-4 text-mute group-hover:text-fg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
            )}
          </div>
          <p className="text-sm text-mute mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] tracking-[0.1em] px-2 py-0.5 border border-line text-mute group-hover:border-line-strong transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
