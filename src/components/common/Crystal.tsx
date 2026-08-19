interface CrystalProps {
  className?: string
  annotations?: boolean
}

/**
 * Low-poly clay-render crystal (Arknights originium style).
 * Flat gray facets simulate hard-surface lighting; facet colors
 * are defined in index.css (.crystal .f1–.f9) and glow in dark mode.
 */
export function Crystal({ className = '', annotations = true }: CrystalProps) {
  return (
    <svg
      viewBox="0 0 340 360"
      className={`crystal ${className}`}
      role="img"
      aria-label="Low-poly crystal"
    >
      {/* Orbit rings */}
      <circle
        cx="170"
        cy="180"
        r="145"
        fill="none"
        className="stroke-line"
        strokeWidth="1"
      />
      <g className="animate-ring-spin" style={{ transformOrigin: '170px 180px' }}>
        <circle
          cx="170"
          cy="180"
          r="120"
          fill="none"
          className="stroke-line-strong"
          strokeWidth="1"
          strokeDasharray="3 6"
          opacity="0.7"
        />
      </g>

      {/* Ground shadow */}
      <ellipse cx="166" cy="288" rx="70" ry="9" className="fill-fg" opacity="0.08" />

      {/* Crystal body */}
      <g className="animate-crystal-float">
        <polygon className="f1" points="170,70 225,120 200,185" />
        <polygon className="f2" points="170,70 200,185 135,165" />
        <polygon className="f3" points="170,70 135,165 105,120" />
        <polygon className="f4" points="225,120 255,170 200,185" />
        <polygon className="f5" points="200,185 255,170 220,250" />
        <polygon className="f6" points="200,185 220,250 150,270" />
        <polygon className="f7" points="135,165 200,185 150,270" />
        <polygon className="f8" points="105,120 135,165 95,210" />
        <polygon className="f9" points="135,165 150,270 95,210" />
      </g>

      {annotations && (
        <g className="font-mono" fontSize="10">
          {/* Crosshair above */}
          <line x1="164" y1="38" x2="176" y2="38" className="stroke-line-strong" strokeWidth="1" />
          <line x1="170" y1="32" x2="170" y2="44" className="stroke-line-strong" strokeWidth="1" />

          {/* MAT_01 callout */}
          <circle cx="255" cy="170" r="2.5" fill="none" className="stroke-mute" strokeWidth="1" />
          <line x1="258" y1="168" x2="292" y2="150" className="stroke-mute" strokeWidth="0.8" />
          <text x="270" y="142" className="fill-mute">MAT_01</text>

          {/* SHADOW_SIDE callout */}
          <circle cx="95" cy="210" r="2.5" fill="none" className="stroke-mute" strokeWidth="1" />
          <line x1="92" y1="213" x2="58" y2="236" className="stroke-mute" strokeWidth="0.8" />
          <text x="12" y="252" className="fill-mute">SHADOW_SIDE</text>
        </g>
      )}
    </svg>
  )
}
