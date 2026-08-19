interface PlexusProps {
  className?: string
}

const nodes: [number, number][] = [
  [400, 10], [330, 30], [380, 60], [300, 80], [350, 110], [410, 90],
  [260, 40], [240, 120], [310, 150], [390, 160], [200, 70], [170, 140],
  [250, 200], [330, 220], [150, 220], [410, 230], [100, 60], [60, 150],
]

const edges: [number, number][] = [
  [0, 1], [0, 2], [1, 2], [1, 3], [2, 4], [2, 5], [3, 4], [4, 5],
  [4, 8], [3, 6], [6, 10], [1, 6], [3, 7], [7, 8], [8, 9], [9, 5],
  [8, 13], [7, 11], [10, 11], [11, 14], [7, 12], [12, 13], [12, 14],
  [13, 15], [9, 15], [10, 16], [16, 17], [17, 11], [17, 14], [6, 16],
]

/**
 * PRTS-style network node decoration (plexus).
 * Deterministic layout; lines glow in dark mode via .plexus css.
 */
export function Plexus({ className = '' }: PlexusProps) {
  return (
    <svg viewBox="0 0 420 320" className={`plexus ${className}`} aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          className="stroke-line-strong"
          strokeWidth="0.8"
          opacity="0.6"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" className="fill-faint" />
      ))}
    </svg>
  )
}
