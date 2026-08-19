import { Mail, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionTitle } from '@/components/common/SectionTitle'
import { GithubIcon, LinkedinIcon } from '@/components/common/BrandIcons'

const socialLinks = [
  {
    href: 'https://github.com/snow-miku',
    icon: GithubIcon,
    label: 'GitHub',
    handle: '@snow-miku',
  },
  {
    href: 'https://www.linkedin.com/in/yuhong-zhou/',
    icon: LinkedinIcon,
    label: 'LinkedIn',
    handle: 'Yuhong (Alan) Zhou',
  },
  {
    href: 'mailto:4lanzhou@gmail.com',
    icon: Mail,
    label: 'Email',
    handle: '4lanzhou@gmail.com',
  },
]

export function About() {
  return (
    <div className="py-20">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Photo & Contact */}
          <div className="space-y-8">
            {/* Photo */}
            <div className="aspect-[4/5] bg-kraft/30 rounded-lg overflow-hidden">
              <img
                src="/images/profile-placeholder.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="w-full h-full flex items-center justify-center text-ink-muted">
                {/* Placeholder if no image */}
              </div>
            </div>

            {/* Contact Card */}
            <Card className="border-ink/10 bg-cream/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-ink mb-4">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-ink-muted hover:text-ink transition-colors"
                    >
                      <link.icon className="h-5 w-5" />
                      <span>{link.handle}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Bio */}
          <div className="space-y-8">
            <div>
              <SectionTitle title="About Me" />
              <div className="flex items-center gap-2 text-ink-muted mb-6">
                <MapPin className="h-4 w-4" />
                <span>Your Location</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-ink-light leading-relaxed">
                Hello! I'm an Automation Engineer and Visual Designer with a
                passion for creating digital experiences that are both beautiful
                and functional.
              </p>

              <p className="text-ink-light leading-relaxed">
                My journey in tech started with a curiosity for how things work
                and evolved into a career where I get to build products that
                make a difference. I believe that great design is invisible -
                it just works, seamlessly guiding users to their goals.
              </p>

              <p className="text-ink-light leading-relaxed">
                When I'm not coding or designing, you can find me drawing,
                exploring new coffee shops, or learning about the latest in
                technology. I'm always open to new opportunities and
                collaborations.
              </p>
            </div>

            {/* What I Value */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-ink">What I Value</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="border-ink/10 bg-kraft/20">
                  <CardContent className="p-5">
                    <h4 className="font-medium text-ink mb-2">
                      User-Centered Design
                    </h4>
                    <p className="text-sm text-ink-muted">
                      Every decision should be made with the user in mind.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-ink/10 bg-kraft/20">
                  <CardContent className="p-5">
                    <h4 className="font-medium text-ink mb-2">Clean Code</h4>
                    <p className="text-sm text-ink-muted">
                      Code should be readable, maintainable, and scalable.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-ink/10 bg-kraft/20">
                  <CardContent className="p-5">
                    <h4 className="font-medium text-ink mb-2">
                      Continuous Learning
                    </h4>
                    <p className="text-sm text-ink-muted">
                      The tech world evolves fast, and so should we.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-ink/10 bg-kraft/20">
                  <CardContent className="p-5">
                    <h4 className="font-medium text-ink mb-2">Collaboration</h4>
                    <p className="text-sm text-ink-muted">
                      Great products are built by great teams working together.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Interests */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-ink">Beyond Work</h3>
              <p className="text-ink-muted">
                Besides my professional work, I enjoy creating art (which you
                can see in my gallery), exploring new places, reading about
                design and technology, and contributing to open-source projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
