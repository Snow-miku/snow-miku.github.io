/** Corner brackets — FUI targeting frame. Parent needs `relative`. */
export function Corners({ size = 'w-2.5 h-2.5' }: { size?: string }) {
  const base = `absolute ${size} border-fg transition-opacity duration-300`
  return (
    <>
      <span className={`${base} top-0 left-0 border-t-2 border-l-2`} />
      <span className={`${base} top-0 right-0 border-t-2 border-r-2`} />
      <span className={`${base} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${base} bottom-0 right-0 border-b-2 border-r-2`} />
    </>
  )
}
