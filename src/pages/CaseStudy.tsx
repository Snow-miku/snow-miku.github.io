import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FuiSection } from '@/components/common/FuiSection'
import { Corners } from '@/components/common/Corners'
import { FuiImage } from '@/components/common/FuiImage'
import { caseStudies } from '@/data/projects'

export function CaseStudy() {
  return (
    <div className="py-24">
      <div className="container-main">
        <FuiSection
          num="01"
          title="Case studies"
          note={`ARCHIVE_QUERY // ${String(caseStudies.length).padStart(3, '0')}_RECORDS`}
        />

        <div className="space-y-10">
          {caseStudies.map((study, index) => {
            const num = String(index + 1).padStart(2, '0')
            return (
              <Link key={study.id} to={`/case-study/${study.id}`} className="block group">
                <div className="relative p-[3px]">
                  <Corners />

                  <div className="relative grid md:grid-cols-2 border border-line bg-surface transition-colors duration-300 group-hover:border-line-strong">
                    {/* Image — absolutely filled so it never drives the row height */}
                    <div
                      className={`relative aspect-[16/10] md:aspect-auto border-line ${
                        index % 2 === 1
                          ? 'md:order-2 md:border-l'
                          : 'md:border-r'
                      } border-b md:border-b-0`}
                    >
                      <div className="absolute inset-0">
                        <FuiImage
                          src={study.coverImage}
                          alt={study.title}
                          label={`FILE_${num}`}
                          className="w-full h-full"
                          imgClassName="object-[center_30%] transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`p-7 md:p-8 flex flex-col justify-center ${
                        index % 2 === 1 ? 'md:order-1' : ''
                      }`}
                    >
                      <span className="font-mono text-[11px] tracking-[0.25em] text-mute mb-2">
                        // {study.subtitle.toUpperCase()}
                      </span>
                      <h2 className="font-display font-semibold text-2xl md:text-3xl tracking-[0.02em] text-fg uppercase mb-3">
                        {study.title}
                      </h2>
                      <p className="text-mute leading-relaxed mb-4 line-clamp-2">
                        {study.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {study.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] tracking-[0.1em] px-2 py-0.5 border border-line text-mute"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-fg group-hover:translate-x-2 transition-transform">
                        OPEN_FILE
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {caseStudies.length === 0 && (
          <div className="text-center py-24">
            <span className="inline-block w-8 h-8 rotate-45 border-2 border-faint mb-6" />
            <p className="font-mono text-xs tracking-[0.25em] text-mute">
              NO_RECORDS_FOUND
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
