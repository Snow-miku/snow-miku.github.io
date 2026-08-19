import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ProjectCard } from '@/components/common/ProjectCard'
import { Crystal3D } from '@/components/common/Crystal3D'
import { Plexus } from '@/components/common/Plexus'
import { FuiSection } from '@/components/common/FuiSection'
import { featuredProjects } from '@/data/projects'

const services = [
  {
    num: '01',
    title: 'Development',
    desc: 'Building scalable applications with modern technologies and best practices. React / TypeScript / Node.js.',
  },
  {
    num: '02',
    title: 'UI / UX design',
    desc: 'Creating intuitive interfaces that users love to interact with. From research to pixel-perfect delivery.',
  },
  {
    num: '03',
    title: 'Creative art',
    desc: 'Expressing ideas through illustration and digital art. Where engineering precision meets artistic intuition.',
  },
]

export function Home() {
  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Plexus decoration — top right */}
        <Plexus className="absolute -top-4 -right-8 w-[380px] md:w-[480px] opacity-70 pointer-events-none" />

        <div className="container-main pt-24 pb-32 relative">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            {/* Left — identity block */}
            <div>
              {/* System label, PRTS banner style */}
              <div className="mb-10 font-mono text-[11px] tracking-[0.25em] text-mute leading-relaxed">
                <p className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 bg-fg animate-blink" />
                  AZ-STUDIO // INDEX_00
                </p>
                <p className="mt-1 text-faint">SYNTHESIZE DESIGN × ENGINEERING</p>
              </div>

              {/* Name */}
              <h1 className="font-display font-bold text-5xl md:text-7xl tracking-[0.02em] text-fg glow leading-none mb-4 uppercase">
                Alan Zhou
              </h1>
              <p className="text-base md:text-lg text-mute mb-10">
                Automation engineer + Visual designer
              </p>

              {/* Identity tags */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {['ENGINEER', 'DESIGNER', 'CREATOR'].map((tag) => (
                  <span
                    key={tag}
                    className="font-display font-semibold text-xs tracking-[0.18em] uppercase px-3 py-1.5 border border-line-strong text-fg"
                  >
                    [ {tag} ]
                  </span>
                ))}
              </div>

              {/* Statement */}
              <p className="text-mute max-w-md leading-relaxed mb-12">
                Crafting digital experiences that bridge technology and
                human-centered design. Every pixel matters, every interaction
                counts.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/case-study"
                  className="inline-flex items-center gap-3 h-11 px-7 bg-fg text-bg font-display font-semibold text-sm tracking-[0.2em] uppercase hover:opacity-85"
                >
                  Works
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center h-11 px-7 border border-line-strong text-fg font-display font-semibold text-sm tracking-[0.2em] uppercase hover:bg-fg hover:text-bg hover:border-fg"
                >
                  About
                </Link>
              </div>
            </div>

            {/* Right — crystal */}
            <div className="hidden lg:block">
              <Crystal3D className="w-full max-w-[420px] mx-auto" />
            </div>
          </div>

        </div>

        {/* Bottom HUD line — anchored to section */}
        <div className="absolute bottom-6 inset-x-0">
          <div className="container-main flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-faint">
            <span>SCROLL ▼ 001 / 004</span>
            <span className="hidden md:block">37.77N / 122.41W</span>
            <span>v2.0 // 2026</span>
          </div>
        </div>
      </section>

      {/* ============ FEATURED WORKS ============ */}
      <section className="py-24 border-t border-line">
        <div className="container-main">
          <FuiSection num="001" title="Featured works" note="SELECTED_PROJECTS // DB_QUERY" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} variant="featured" index={i} />
            ))}
          </div>

          <div className="mt-12 flex justify-end">
            <Link
              to="/case-study"
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-mute hover:text-fg"
            >
              VIEW_ALL
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHAT I DO ============ */}
      <section className="py-24 border-t border-line">
        <div className="container-main">
          <FuiSection num="002" title="Capabilities" note="MODULE_LIST // 3_ENTRIES" />

          <div>
            {services.map((s) => (
              <div
                key={s.num}
                className="group grid md:grid-cols-[120px_1fr_2fr] gap-4 md:gap-8 items-baseline border-b border-line py-8 transition-colors hover:bg-surface"
              >
                <span className="font-mono text-3xl md:text-4xl text-faint group-hover:text-fg transition-colors">
                  {s.num}
                </span>
                <h3 className="font-display font-semibold text-xl md:text-2xl tracking-[0.03em] text-fg uppercase">
                  {s.title}
                </h3>
                <p className="text-sm text-mute leading-relaxed max-w-lg">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT CTA ============ */}
      <section className="relative py-32 border-t border-line overflow-hidden">
        <Plexus className="absolute -bottom-16 -left-12 w-[360px] opacity-40 rotate-180 pointer-events-none" />

        <div className="container-main text-center relative">
          {/* Diamond mark */}
          <div className="flex justify-center mb-8">
            <span className="relative w-10 h-10">
              <span className="absolute inset-0 rotate-45 border-2 border-fg" />
              <span className="absolute inset-2.5 rotate-45 border border-line-strong" />
            </span>
          </div>

          <p className="font-mono text-[11px] tracking-[0.3em] text-mute mb-4">
            // TRANSMISSION_OPEN
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-[0.02em] text-fg glow mb-6 uppercase">
            Let's work together
          </h2>
          <p className="text-mute mb-10 max-w-md mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-3 h-11 px-8 bg-fg text-bg font-display font-semibold text-sm tracking-[0.2em] uppercase hover:opacity-85"
          >
            Get in touch
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
