interface FuiSectionProps {
  num: string
  title: string
  note?: string
}

/** FUI section header: // 001 — TITLE ---------------- NOTE */
export function FuiSection({ num, title, note }: FuiSectionProps) {
  return (
    <div className="flex items-baseline gap-4 border-b border-line pb-4 mb-12">
      <span className="font-mono text-xs text-mute tracking-[0.2em]">// {num}</span>
      <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-[0.02em] text-fg glow uppercase">
        {title}
      </h2>
      {note && (
        <span className="ml-auto hidden md:block font-mono text-[10px] tracking-[0.2em] text-faint">
          {note}
        </span>
      )}
    </div>
  )
}
