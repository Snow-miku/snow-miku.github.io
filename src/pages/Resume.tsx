import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { SectionTitle } from '@/components/common/SectionTitle'
import { experiences, education, skills } from '@/data/resume'

export function Resume() {
  return (
    <div className="py-20">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <SectionTitle
            title="Resume"
            subtitle="My professional journey and skills"
          />
          <Button
            variant="outline"
            className="border-ink text-ink hover:bg-ink hover:text-cream w-fit"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Experience */}
            <section>
              <h2 className="text-2xl font-medium text-ink mb-6">Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <Card key={exp.id} className="border-ink/10 bg-cream/50">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-medium text-ink">
                            {exp.position}
                          </h3>
                          <p className="text-ink-light">{exp.company}</p>
                        </div>
                        <span className="text-sm text-ink-muted font-mono">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-ink-muted mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="text-sm text-ink-light flex items-start gap-2"
                          >
                            <span className="text-kraft-dark mt-1">-</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-medium text-ink mb-6">Education</h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <Card key={edu.id} className="border-ink/10 bg-cream/50">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <h3 className="text-lg font-medium text-ink">
                            {edu.degree}
                          </h3>
                          <p className="text-ink-light">{edu.school}</p>
                          {edu.description && (
                            <p className="text-sm text-ink-muted mt-2">
                              {edu.description}
                            </p>
                          )}
                        </div>
                        <span className="text-sm text-ink-muted font-mono">
                          {edu.duration}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Skills */}
          <aside className="space-y-8">
            <h2 className="text-2xl font-medium text-ink">Skills</h2>
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-sm font-medium text-ink-light uppercase tracking-wider mb-3">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-kraft/30 text-ink-light hover:bg-kraft/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Separator className="mt-6 bg-ink/10" />
              </div>
            ))}
          </aside>
        </div>
      </div>
    </div>
  )
}
