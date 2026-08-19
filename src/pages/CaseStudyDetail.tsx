import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { FuiImage } from '@/components/common/FuiImage'
import { caseStudies } from '@/data/projects'

function MetaBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line pt-4">
      <span className="block font-mono text-[10px] tracking-[0.25em] text-mute mb-2">
        {label}
      </span>
      {children}
    </div>
  )
}

export function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>()
  const study = caseStudies.find((s) => s.id === id)

  if (!study) {
    return (
      <div className="py-32">
        <div className="container-main text-center">
          <span className="inline-block w-8 h-8 rotate-45 border-2 border-faint mb-6" />
          <h1 className="font-display font-semibold text-2xl tracking-[0.04em] text-fg uppercase mb-3">
            File not found
          </h1>
          <p className="font-mono text-xs tracking-[0.2em] text-mute mb-10">
            ERR_404 // RECORD_DOES_NOT_EXIST
          </p>
          <Link
            to="/case-study"
            className="inline-flex items-center gap-3 h-11 px-7 border border-line-strong text-fg font-display font-semibold text-sm tracking-[0.2em] uppercase hover:bg-fg hover:text-bg hover:border-fg"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to archive
          </Link>
        </div>
      </div>
    )
  }

  const studyIndex = caseStudies.indexOf(study)
  const num = String(studyIndex + 1).padStart(2, '0')

  return (
    <div className="py-24">
      <div className="container-main">
        {/* Back link */}
        <Link
          to="/case-study"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-mute hover:text-fg mb-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          ARCHIVE // FILE_{num}
        </Link>

        {/* Title */}
        <div className="mb-10">
          <span className="block font-mono text-[11px] tracking-[0.25em] text-mute mb-3">
            // {study.subtitle.toUpperCase()}
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl tracking-[0.02em] text-fg glow uppercase">
            {study.title}
          </h1>
        </div>

        {/* Cover */}
        <FuiImage
          src={study.coverImage}
          alt={study.title}
          label={`FILE_${num} // COVER`}
          className="aspect-[21/9] border border-line mb-14"
        />

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar meta */}
          <aside className="lg:col-span-1 space-y-6 lg:sticky lg:top-24 self-start">
            <MetaBlock label="DURATION">
              <p className="text-fg font-medium">{study.duration}</p>
            </MetaBlock>
            <MetaBlock label="ROLE">
              <p className="text-fg font-medium">{study.role}</p>
            </MetaBlock>
            <MetaBlock label="TOOLS">
              <div className="flex flex-wrap gap-1.5">
                {study.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-[10px] tracking-[0.1em] px-2 py-0.5 border border-line text-mute"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </MetaBlock>
            <MetaBlock label="TAGS">
              <div className="flex flex-wrap gap-1.5">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-[0.1em] px-2 py-0.5 border border-line text-mute"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </MetaBlock>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-3 space-y-14">
            <p className="text-xl text-fg leading-relaxed">{study.description}</p>

            {study.sections.map((section, index) => (
              <div key={index}>
                <div className="flex items-baseline gap-3 border-b border-line pb-3 mb-5">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-mute">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display font-semibold text-xl md:text-2xl tracking-[0.03em] text-fg uppercase">
                    {section.title}
                  </h2>
                </div>
                <p className="text-mute leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>

                {/* Native color palette */}
                {section.palette && (
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {section.palette.map((color) => (
                      <div key={color.hex} className="border border-line bg-surface">
                        <div
                          className="aspect-square border-b border-line"
                          style={{ backgroundColor: color.hex }}
                        />
                        <div className="p-2.5">
                          <p className="text-xs font-medium text-fg leading-tight">
                            {color.name}
                          </p>
                          <p className="font-mono text-[10px] tracking-[0.1em] text-mute mt-1">
                            {color.hex.toUpperCase()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Native type-scale specimen */}
                {section.typeScale && (
                  <div className="mt-6 border border-line bg-surface">
                    {section.typeScale.map((t, i) => (
                      <div
                        key={t.label}
                        className={`grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-6 items-baseline px-5 py-4 ${
                          i > 0 ? 'border-t border-line' : ''
                        }`}
                      >
                        <span className="font-mono text-[10px] tracking-[0.15em] text-mute">
                          {t.spec.toUpperCase()}
                        </span>
                        <span
                          className="text-fg leading-snug truncate"
                          style={{
                            fontFamily: `'${t.fontFamily}', sans-serif`,
                            fontSize: `${t.sizePx}px`,
                            fontWeight: t.weight,
                            textTransform: t.uppercase ? 'uppercase' : 'none',
                          }}
                        >
                          {t.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {section.images && section.images.length > 0 && (
                  <div className="mt-6 grid gap-4">
                    {section.images.map((image, imgIndex) => (
                      <FuiImage
                        key={imgIndex}
                        src={image}
                        alt={`${section.title} — image ${imgIndex + 1}`}
                        label={`IMG_${String(imgIndex + 1).padStart(2, '0')}`}
                        className="border border-line"
                        natural
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </main>
        </div>

        {/* Footer nav */}
        <div className="mt-20 pt-8 border-t border-line flex justify-center">
          <Link
            to="/case-study"
            className="inline-flex items-center gap-3 h-11 px-7 border border-line-strong text-fg font-display font-semibold text-sm tracking-[0.2em] uppercase hover:bg-fg hover:text-bg hover:border-fg"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All case studies
          </Link>
        </div>
      </div>
    </div>
  )
}
