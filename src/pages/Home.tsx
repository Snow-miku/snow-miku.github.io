import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/common/ProjectCard'
import { SectionTitle } from '@/components/common/SectionTitle'
import { featuredProjects } from '@/data/projects'

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center">
        <div className="container-main py-20">
          <div className="max-w-4xl">
            {/* Identity Tags - shimekiri-techo style with #393939 */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-sm font-mono text-white bg-tag-bg px-3 py-1">
                Engineer
              </span>
              <span className="text-sm font-mono text-white bg-tag-bg px-3 py-1">
                Designer
              </span>
              <span className="text-sm font-mono text-white bg-tag-bg px-3 py-1">
                Creator
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-medium text-ink mb-6 leading-tight">
              Hi, I'm Alan Zhou
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-ink-light mb-8 max-w-2xl leading-relaxed">
              Full Stack Engineer & UI/UX Designer crafting digital experiences
              that bridge technology and human-centered design.
            </p>

            {/* Personal Statement */}
            <p className="text-lg text-ink-muted mb-10 max-w-xl">
              I believe in creating products that are not only functional but
              also delightful to use. Every pixel matters, every interaction
              counts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-ink text-cream hover:bg-ink-light"
              >
                <Link to="/case-study">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-ink text-ink hover:bg-ink hover:text-cream"
              >
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section - Cream separator */}
      <section className="py-20 bg-cream">
        <div className="container-main">
          <blockquote className="text-center max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl text-ink italic leading-relaxed">
              "Design is not just what it looks like and feels like. Design is
              how it works."
            </p>
            <footer className="mt-4 text-ink-muted">— Steve Jobs</footer>
          </blockquote>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container-main">
          <div className="flex items-end justify-between mb-10">
            <SectionTitle
              title="Featured Work"
              subtitle="Selected projects that showcase my skills"
            />
            <Link
              to="/case-study"
              className="hidden md:flex items-center gap-2 text-ink-muted hover:text-ink transition-colors"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="featured" />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="border-ink text-ink">
              <Link to="/case-study">
                View all projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Overview - Cream separator */}
      <section className="py-20 bg-cream">
        <div className="container-main">
          <SectionTitle
            title="What I Do"
            subtitle="Bridging the gap between design and development"
            align="center"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-kraft/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{'</>'}</span>
              </div>
              <h3 className="text-lg font-medium text-ink mb-2">Development</h3>
              <p className="text-ink-muted text-sm">
                Building scalable applications with modern technologies and best
                practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-kraft/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">UI</span>
              </div>
              <h3 className="text-lg font-medium text-ink mb-2">UI/UX Design</h3>
              <p className="text-ink-muted text-sm">
                Creating intuitive interfaces that users love to interact with.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-kraft/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">Art</span>
              </div>
              <h3 className="text-lg font-medium text-ink mb-2">Creative Art</h3>
              <p className="text-ink-muted text-sm">
                Expressing ideas through illustration and digital art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-ink mb-4">
            Let's work together
          </h2>
          <p className="text-ink-muted mb-8 max-w-md mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-ink text-cream hover:bg-ink-light"
          >
            <Link to="/about">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
