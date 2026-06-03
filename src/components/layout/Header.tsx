import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/case-study', label: 'Case Study' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/resume', label: 'Resume' },
  { href: '/about', label: 'About' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper-blue/80 backdrop-blur-md border-b border-ink/10">
      <div className="container-main">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-medium text-ink hover:text-ink-light transition-colors"
          >
            AZ Studio
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`text-sm transition-colors ${
                    isActive(link.href)
                      ? 'text-ink font-medium'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-paper-blue-light">
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg transition-colors ${
                      isActive(link.href)
                        ? 'text-ink font-medium'
                        : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
