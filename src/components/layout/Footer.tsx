import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  {
    href: 'https://github.com/snow-miku',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/yourprofile',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:your@email.com',
    icon: Mail,
    label: 'Email',
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-paper-blue-dark/30">
      <div className="container-main py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-ink-muted">
            {currentYear} AZ Studio. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted hover:text-ink transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
