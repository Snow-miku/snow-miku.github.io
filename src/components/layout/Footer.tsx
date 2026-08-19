import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/common/BrandIcons'

const socialLinks = [
  {
    href: 'https://github.com/snow-miku',
    icon: GithubIcon,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/yuhong-zhou/',
    icon: LinkedinIcon,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:4lanzhou@gmail.com',
    icon: Mail,
    label: 'Email',
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="container-main py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="font-mono text-[11px] tracking-[0.15em] text-mute">
            © {currentYear} AZ_STUDIO // ALL_RIGHTS_RESERVED
          </p>

          {/* Status line */}
          <p className="hidden md:flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] text-mute">
            <span className="inline-block w-1.5 h-1.5 bg-fg animate-blink" />
            SYS.STATUS — ONLINE
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mute hover:text-fg transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
