import type { CSSProperties } from 'react'

type MaskIconProps = { src: string; size?: number; color?: string; className?: string }

/** Tintable icon: an SVG used as a CSS mask over a solid colour. */
export function MaskIcon({ src, size = 24, color = 'currentColor', className }: MaskIconProps) {
  const style: CSSProperties = {
    display: 'block',
    width: size,
    height: size,
    flexShrink: 0,
    backgroundColor: color,
    WebkitMask: `url("${src}") center / 100% 100% no-repeat`,
    mask: `url("${src}") center / 100% 100% no-repeat`,
  }
  return <span aria-hidden="true" className={className} style={style} />
}
