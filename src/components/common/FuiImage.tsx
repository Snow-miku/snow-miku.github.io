import { useState } from 'react'

interface FuiImageProps {
  src: string
  alt: string
  label?: string
  className?: string
  imgClassName?: string
  /** Render at the image's natural aspect ratio instead of cropping to the container */
  natural?: boolean
}

/** Image with FUI fallback (diamond + IMG_PENDING) and optional mono label overlay. */
export function FuiImage({
  src,
  alt,
  label,
  className = '',
  imgClassName = '',
  natural = false,
}: FuiImageProps) {
  const [error, setError] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!error ? (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          className={natural ? `w-full h-auto ${imgClassName}` : `w-full h-full object-cover ${imgClassName}`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-bg">
          <span className="w-8 h-8 rotate-45 border-2 border-faint" />
          <span className="font-mono text-[10px] tracking-[0.25em] text-faint">
            IMG_PENDING
          </span>
        </div>
      )}
      {label && (
        <span className="absolute top-2 left-3 font-mono text-[10px] tracking-[0.2em] text-mute">
          {label}
        </span>
      )}
    </div>
  )
}
