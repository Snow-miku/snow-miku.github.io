import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SectionTitle } from '@/components/common/SectionTitle'
import { caseStudies } from '@/data/projects'

export function CaseStudy() {
  return (
    <div className="py-20">
      <div className="container-main">
        <SectionTitle
          title="Case Studies"
          subtitle="Deep dives into my UI/UX design projects"
        />

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <Link key={study.id} to={`/case-study/${study.id}`}>
              <Card className="group overflow-hidden border-ink/10 bg-cream/50 hover:bg-cream/80 hover:shadow-lg transition-all duration-300">
                <div
                  className={`grid md:grid-cols-2 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative aspect-[16/10] md:aspect-auto overflow-hidden ${
                      index % 2 === 1 ? 'md:order-2' : ''
                    }`}
                  >
                    <img
                      src={study.coverImage}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <CardContent
                    className={`p-8 flex flex-col justify-center ${
                      index % 2 === 1 ? 'md:order-1' : ''
                    }`}
                  >
                    <span className="text-sm text-ink-muted uppercase tracking-wider mb-2">
                      {study.subtitle}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-medium text-ink mb-3 group-hover:text-ink-light transition-colors">
                      {study.title}
                    </h2>
                    <p className="text-ink-muted mb-6">{study.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.slice(0, 4).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-paper-blue-light text-ink-light"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-ink group-hover:translate-x-2 transition-transform">
                      <span className="font-medium">Read Case Study</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {caseStudies.length === 0 && (
          <div className="text-center py-20">
            <p className="text-ink-muted">No case studies available yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
