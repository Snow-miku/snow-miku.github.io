import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, User, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { caseStudies } from '@/data/projects'

export function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>()
  const study = caseStudies.find((s) => s.id === id)

  if (!study) {
    return (
      <div className="py-20">
        <div className="container-main text-center">
          <h1 className="text-3xl font-medium text-ink mb-4">
            Case Study Not Found
          </h1>
          <p className="text-ink-muted mb-8">
            The case study you're looking for doesn't exist.
          </p>
          <Button asChild variant="outline" className="border-ink text-ink">
            <Link to="/case-study">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="aspect-[21/9] overflow-hidden">
          <img
            src={study.coverImage}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container-main">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-cream/80 hover:text-cream hover:bg-cream/10 mb-4"
            >
              <Link to="/case-study">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Link>
            </Button>
            <span className="text-cream/70 text-sm uppercase tracking-wider block mb-2">
              {study.subtitle}
            </span>
            <h1 className="text-4xl md:text-5xl font-medium text-cream">
              {study.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-main">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-ink-muted mb-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm uppercase tracking-wider">Duration</span>
                </div>
                <p className="text-ink font-medium">{study.duration}</p>
              </div>

              <Separator className="bg-ink/10" />

              <div>
                <div className="flex items-center gap-2 text-ink-muted mb-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm uppercase tracking-wider">Role</span>
                </div>
                <p className="text-ink font-medium">{study.role}</p>
              </div>

              <Separator className="bg-ink/10" />

              <div>
                <div className="flex items-center gap-2 text-ink-muted mb-2">
                  <Wrench className="h-4 w-4" />
                  <span className="text-sm uppercase tracking-wider">Tools</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="secondary"
                      className="bg-kraft/30 text-ink-light"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="bg-ink/10" />

              <div>
                <span className="text-sm uppercase tracking-wider text-ink-muted block mb-2">
                  Tags
                </span>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-ink/20 text-ink-light"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3 space-y-12">
              <p className="text-xl text-ink-light leading-relaxed">
                {study.description}
              </p>

              {study.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-medium text-ink mb-4">
                    {section.title}
                  </h2>
                  <p className="text-ink-muted leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                  {section.images && section.images.length > 0 && (
                    <div className="mt-6 grid gap-4">
                      {section.images.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={image}
                          alt={`${section.title} - Image ${imgIndex + 1}`}
                          className="w-full rounded-lg shadow-md"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </main>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-ink/10">
        <div className="container-main text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-ink text-ink hover:bg-ink hover:text-cream"
          >
            <Link to="/case-study">
              <ArrowLeft className="mr-2 h-4 w-4" />
              View All Case Studies
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
