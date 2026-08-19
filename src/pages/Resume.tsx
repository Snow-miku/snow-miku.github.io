import { useState } from 'react'
import { ArrowUpRight, Download } from 'lucide-react'
import { FuiSection } from '@/components/common/FuiSection'
import { experiences, education, skills } from '@/data/resume'
import type { Experience } from '@/data/resume'

function SubHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3 border-b border-line pb-3 mb-8">
      <span className="font-mono text-[11px] tracking-[0.2em] text-mute">{num}</span>
      <h2 className="font-display font-semibold text-xl md:text-2xl tracking-[0.03em] text-fg uppercase">
        {title}
      </h2>
    </div>
  )
}

/** Company/school logo in a FUI frame; falls back to a diamond mark. */
function LogoBox({ logo, alt }: { logo?: string; alt: string }) {
  const [error, setError] = useState(false)
  const showImg = logo && !error

  return (
    <span className="flex items-center justify-center w-11 h-11 border border-line bg-surface shrink-0">
      {showImg ? (
        <img
          src={logo}
          alt={`${alt} logo`}
          onError={() => setError(true)}
          className="w-7 h-7 object-contain"
          loading="lazy"
        />
      ) : (
        <span className="w-3.5 h-3.5 rotate-45 border-2 border-faint" aria-hidden="true" />
      )}
    </span>
  )
}

/** Company name — external link when url exists. */
function OrgLink({ name, url }: { name: string; url?: string }) {
  if (!url) {
    return (
      <span className="font-mono text-[11px] tracking-[0.15em] text-mute uppercase">
        @ {name}
      </span>
    )
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="group/org inline-flex items-center gap-1 font-mono text-[11px] tracking-[0.15em] text-mute uppercase hover:text-fg transition-colors"
    >
      @ {name}
      <ArrowUpRight className="h-3 w-3 opacity-60 group-hover/org:opacity-100 group-hover/org:translate-x-0.5 group-hover/org:-translate-y-0.5 transition-all" />
    </a>
  )
}

function ExperienceRow({ exp, divider }: { exp: Experience; divider: boolean }) {
  return (
    <div
      className={`grid md:grid-cols-[140px_1fr] gap-3 md:gap-8 py-8 ${
        divider ? 'border-t border-line' : ''
      }`}
    >
      <div className="pt-1">
        <span className="block font-mono text-[11px] tracking-[0.15em] text-mute">
          {exp.duration}
        </span>
        {exp.location && (
          <span className="block font-mono text-[10px] tracking-[0.1em] text-faint mt-1">
            {exp.location}
          </span>
        )}
      </div>

      <div>
        <div className="flex items-start gap-4 mb-4">
          <LogoBox logo={exp.logo} alt={exp.company} />
          <div className="min-w-0">
            <h3 className="font-display font-semibold text-lg tracking-[0.02em] text-fg uppercase leading-tight">
              {exp.position}
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
              <OrgLink name={exp.company} url={exp.url} />
              {exp.employmentType && (
                <span className="font-mono text-[10px] tracking-[0.1em] text-faint">
                  // {exp.employmentType.toUpperCase()}
                </span>
              )}
            </div>
          </div>
        </div>

        <ul className="space-y-2">
          {exp.highlights.map((highlight, index) => (
            <li
              key={index}
              className="text-sm text-fg/80 flex items-start gap-3 leading-relaxed"
            >
              <span className="font-mono text-[10px] text-faint pt-1 shrink-0">▸</span>
              {highlight}
            </li>
          ))}
        </ul>

        {exp.projects && exp.projects.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 mt-6 border-t border-line pt-4">
            <span className="font-mono text-[11px] tracking-[0.25em] text-fg">
              ▸ SHIPPED //
            </span>
            {exp.projects.map((project) => (
              <a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/prj inline-flex items-center gap-2 h-8 px-4 bg-fg text-bg font-mono text-xs tracking-[0.15em] hover:opacity-85 transition-opacity"
              >
                {project.name.toUpperCase()}
                <ArrowUpRight className="h-3.5 w-3.5 group-hover/prj:translate-x-0.5 group-hover/prj:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export function Resume() {
  const [earlyOpen, setEarlyOpen] = useState(false)

  const mainExperiences = experiences.filter((e) => !e.earlyCareer)
  const earlyExperiences = experiences.filter((e) => e.earlyCareer)
  const earlyCount = String(earlyExperiences.length).padStart(2, '0')

  return (
    <div className="py-24">
      <div className="container-main">
        <div className="relative">
          <FuiSection num="03" title="Resume" />
          <button
            className="absolute right-0 -top-1 hidden md:inline-flex items-center gap-2 h-9 px-4 border border-line-strong text-fg font-mono text-[11px] tracking-[0.2em] hover:bg-fg hover:text-bg hover:border-fg print:hidden"
            onClick={() => window.print()}
          >
            <Download className="h-3.5 w-3.5" />
            EXPORT_PDF
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-14">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-16">
            {/* Experience */}
            <section>
              <SubHeader num="A" title="Experience" />
              <div>
                {mainExperiences.map((exp, i) => (
                  <ExperienceRow key={exp.id} exp={exp} divider={i > 0} />
                ))}
              </div>

              {/* Early career — collapsed archive drawer */}
              <div className="mt-4">
                <button
                  onClick={() => setEarlyOpen((o) => !o)}
                  aria-expanded={earlyOpen}
                  className="w-full flex items-center gap-3 py-4 border-y border-line font-mono text-[11px] tracking-[0.25em] text-mute hover:text-fg transition-colors print:hidden"
                >
                  <span
                    className={`inline-block transition-transform duration-300 ${
                      earlyOpen ? 'rotate-90' : ''
                    }`}
                  >
                    ▸
                  </span>
                  EARLY_CAREER // {earlyCount}_RECORDS
                  <span className="ml-auto text-faint">
                    {earlyOpen ? '[ COLLAPSE ]' : '[ EXPAND ]'}
                  </span>
                </button>

                {/* Keep in DOM so EXPORT_PDF always prints the full resume */}
                <div className={earlyOpen ? 'block' : 'hidden print:block'}>
                  {earlyExperiences.map((exp, i) => (
                    <ExperienceRow key={exp.id} exp={exp} divider={i > 0} />
                  ))}
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <SubHeader num="B" title="Education" />
              <div>
                {education.map((edu, i) => (
                  <div
                    key={edu.id}
                    className={`grid md:grid-cols-[140px_1fr] gap-3 md:gap-8 py-8 ${
                      i > 0 ? 'border-t border-line' : ''
                    }`}
                  >
                    <div className="pt-1">
                      <span className="block font-mono text-[11px] tracking-[0.15em] text-mute">
                        {edu.duration}
                      </span>
                      {edu.location && (
                        <span className="block font-mono text-[10px] tracking-[0.1em] text-faint mt-1">
                          {edu.location}
                        </span>
                      )}
                    </div>

                    <div>
                      <div className="flex items-start gap-4 mb-3">
                        <LogoBox logo={edu.logo} alt={edu.school} />
                        <div className="min-w-0">
                          <h3 className="font-display font-semibold text-lg tracking-[0.02em] text-fg uppercase leading-tight">
                            {edu.degree}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                            <OrgLink name={edu.school} url={edu.url} />
                            {edu.gpa && (
                              <span className="font-mono text-[10px] tracking-[0.1em] text-faint">
                                // GPA {edu.gpa}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      {edu.description && (
                        <p className="text-sm text-mute leading-relaxed">{edu.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Skills sidebar */}
          <aside className="lg:sticky lg:top-24 self-start">
            <SubHeader num="C" title="Skills" />
            <div className="space-y-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <span className="block font-mono text-[10px] tracking-[0.25em] text-mute mb-3">
                    // {skillGroup.category.toUpperCase()}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[11px] tracking-[0.05em] px-2.5 py-1 border border-line text-fg/80 hover:border-line-strong transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
