import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface Crystal3DProps {
  className?: string
  annotations?: boolean
}

/** Deterministic PRNG so the crystal shape is stable across renders */
function mulberry32(seed: number) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function buildCrystalGeometry(): THREE.BufferGeometry {
  const rand = mulberry32(20260709)
  const geo = new THREE.IcosahedronGeometry(1, 0)

  // Displace each unique vertex radially -> irregular low-poly stone
  const pos = geo.getAttribute('position') as THREE.BufferAttribute
  const seen = new Map<string, number>()
  const v = new THREE.Vector3()
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i)
    const key = `${v.x.toFixed(4)},${v.y.toFixed(4)},${v.z.toFixed(4)}`
    let scale = seen.get(key)
    if (scale === undefined) {
      scale = 0.82 + rand() * 0.45
      seen.set(key, scale)
    }
    v.multiplyScalar(scale)
    pos.setXYZ(i, v.x, v.y, v.z)
  }

  // Elongate vertically (originium silhouette), flat-shade via non-indexed normals
  geo.scale(1, 1.3, 1)
  const flat = geo.toNonIndexed()
  flat.computeVertexNormals()
  geo.dispose()
  return flat
}

/**
 * Clay-render low-poly crystal, real 3D:
 * slow spin + pointer parallax + float, hard facet lighting,
 * hairline edges, theme-aware lights (glow handled in CSS).
 */
export function Crystal3D({ className = '', annotations = true }: Crystal3DProps) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50)
    camera.position.set(0, 0.15, 5.2)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // --- Crystal ---
    const geometry = buildCrystalGeometry()
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      flatShading: true,
      roughness: 0.6,
      metalness: 0.05,
    })
    const mesh = new THREE.Mesh(geometry, material)

    const edgesGeo = new THREE.EdgesGeometry(geometry, 1)
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0xb9bcbf,
      transparent: true,
      opacity: 0.55,
    })
    const edges = new THREE.LineSegments(edgesGeo, edgesMat)
    mesh.add(edges)

    const group = new THREE.Group()
    group.add(mesh)
    scene.add(group)

    // --- Lights (clay render: cool ambient + hard key) ---
    const ambient = new THREE.AmbientLight(0xdfe3e6, 0.85)
    const key = new THREE.DirectionalLight(0xffffff, 1.6)
    key.position.set(3, 4, 4)
    const rim = new THREE.DirectionalLight(0xcfd4d8, 0.5)
    rim.position.set(-4, -1, -3)
    scene.add(ambient, key, rim)

    const applyTheme = () => {
      const dark = document.documentElement.classList.contains('dark')
      ambient.intensity = dark ? 0.55 : 1.15
      key.intensity = dark ? 2.1 : 1.5
      rim.intensity = dark ? 0.9 : 0.7
      edgesMat.color.set(dark ? 0xffffff : 0xb9bcbf)
      edgesMat.opacity = dark ? 0.3 : 0.55
    }
    applyTheme()
    const themeObserver = new MutationObserver(applyTheme)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    // --- Sizing ---
    const resize = () => {
      const size = Math.min(mount.clientWidth, mount.clientHeight) || 1
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(size, size)
    }
    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(mount)

    // --- Pointer parallax ---
    let targetX = 0
    let targetY = 0
    const onPointerMove = (e: PointerEvent) => {
      targetY = (e.clientX / window.innerWidth - 0.5) * 0.7
      targetX = (e.clientY / window.innerHeight - 0.5) * 0.45
    }
    window.addEventListener('pointermove', onPointerMove)

    // --- Loop ---
    let raf = 0
    const clock = new THREE.Clock()
    const animate = () => {
      raf = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      mesh.rotation.y = t * 0.25
      group.rotation.x += (targetX - group.rotation.x) * 0.04
      group.rotation.y += (targetY - group.rotation.y) * 0.04
      group.position.y = Math.sin(t * 0.9) * 0.09
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      themeObserver.disconnect()
      resizeObserver.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      geometry.dispose()
      edgesGeo.dispose()
      material.dispose()
      edgesMat.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div className={`crystal3d relative aspect-square ${className}`}>
      {/* FUI overlay: orbit rings, shadow, annotations */}
      <svg viewBox="0 0 340 340" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <circle cx="170" cy="170" r="150" fill="none" className="stroke-line" strokeWidth="1" />
        <g className="animate-ring-spin" style={{ transformOrigin: '170px 170px' }}>
          <circle
            cx="170"
            cy="170"
            r="126"
            fill="none"
            className="stroke-line-strong"
            strokeWidth="1"
            strokeDasharray="3 6"
            opacity="0.7"
          />
        </g>
        <ellipse cx="170" cy="296" rx="66" ry="8" className="fill-fg" opacity="0.08" />
        {annotations && (
          <g className="font-mono" fontSize="10">
            <line x1="164" y1="14" x2="176" y2="14" className="stroke-line-strong" strokeWidth="1" />
            <line x1="170" y1="8" x2="170" y2="20" className="stroke-line-strong" strokeWidth="1" />
            <circle cx="272" cy="140" r="2.5" fill="none" className="stroke-mute" strokeWidth="1" />
            <line x1="275" y1="138" x2="306" y2="122" className="stroke-mute" strokeWidth="0.8" />
            <text x="284" y="114" className="fill-mute">MAT_01</text>
            <circle cx="72" cy="212" r="2.5" fill="none" className="stroke-mute" strokeWidth="1" />
            <line x1="69" y1="215" x2="38" y2="236" className="stroke-mute" strokeWidth="0.8" />
            <text x="2" y="252" className="fill-mute">SHADOW_SIDE</text>
          </g>
        )}
      </svg>

      {/* WebGL canvas */}
      <div
        ref={mountRef}
        className="absolute inset-[12%] flex items-center justify-center [&>canvas]:max-w-full [&>canvas]:max-h-full"
      />
    </div>
  )
}
