import type { CSSProperties, ReactNode } from 'react'

type SectionHeadingProps = {
  badge: string
  children: ReactNode
  align?: 'start' | 'center'
  width?: number
  className?: string
}

/** Small orange label above a large display heading. */
export function SectionHeading({ badge, children, align = 'start', width = 540, className }: SectionHeadingProps) {
  const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    alignItems: align === 'center' ? 'center' : 'flex-start',
    textAlign: align,
    maxWidth: width,
    width: '100%',
  }
  return (
    <div style={style} className={className}>
      <p className="t-badge">{badge}</p>
      <h2 className="t-h2">{children}</h2>
    </div>
  )
}
