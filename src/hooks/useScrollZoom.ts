import { useEffect, useRef } from 'react'

/**
 * Writes `--zoom` on the element, interpolated from `from` to `to` across the
 * whole page's scroll range — the same scroll-linked zoom the source hero uses.
 */
export function useScrollZoom<T extends HTMLElement>(from: number, to: number) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      el.style.setProperty('--zoom', String(from + (to - from) * p))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [from, to])

  return ref
}
