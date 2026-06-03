interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionTitle({ title, subtitle, align = 'left' }: SectionTitleProps) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-medium text-ink mb-2">{title}</h2>
      {subtitle && <p className="text-ink-muted text-lg">{subtitle}</p>}
    </div>
  )
}
