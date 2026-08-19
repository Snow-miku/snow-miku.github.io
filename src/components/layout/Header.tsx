import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navLinks = [
  { href: '/', label: 'INDEX', num: '00' },
  { href: '/case-study', label: 'CASE', num: '01' },
  { href: '/gallery', label: 'GALLERY', num: '02' },
  { href: '/resume', label: 'RESUME', num: '03' },
  { href: '/about', label: 'ABOUT', num: '04' },
]

function useTheme() {
  const [dark, setDark] = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : false
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return { dark, toggle: () => setDark((d) => !d) }
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { dark, toggle } = useTheme()
  const location = useLocation()

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-md border-b border-line">
      <div className="container-main">
        <nav className="flex items-center justify-between h-16">
          {/* Logo — diamond mark, PRTS style */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="relative flex items-center justify-center w-6 h-6">
              <span className="absolute inset-0.5 rotate-45 border-2 border-fg transition-transform duration-500 group-hover:rotate-[135deg]" />
            </span>
            <span className="leading-none">
              <span className="block font-display font-bold text-base tracking-[0.1em] text-fg glow uppercase">
                AZ Studio
              </span>
              <span className="block font-mono text-[9px] tracking-[0.3em] text-mute">
                PORTFOLIO OS
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`group/nav font-display font-semibold text-xs tracking-[0.18em] uppercase transition-colors ${
                    isActive(link.href) ? 'text-fg' : 'text-mute hover:text-fg'
                  }`}
                >
                  <span className="mr-1 text-[9px] align-top opacity-60">{link.num}</span>
                  {link.label}
                  <span
                    className={`block h-px mt-1 bg-fg transition-all duration-300 ${
                      isActive(link.href) ? 'w-full' : 'w-0 group-hover/nav:w-full'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggle}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="text-mute hover:text-fg hover:bg-fg/5"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="text-mute hover:text-fg hover:bg-fg/5"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-bg border-line">
                <nav className="flex flex-col gap-6 mt-10 px-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-mono text-sm tracking-[0.2em] transition-colors ${
                        isActive(link.href) ? 'text-fg' : 'text-mute hover:text-fg'
                      }`}
                    >
                      <span className="mr-2 text-[10px] opacity-60">{link.num}</span>
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
