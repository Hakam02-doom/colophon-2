import type { CSSProperties } from 'react'

const logoStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  height: 32,
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: 17,
  letterSpacing: '-0.02em',
  color: 'var(--c-ink)',
  whiteSpace: 'nowrap',
}

/** Text logo used in the nav and footer. */
export function BrandLogo() {
  return <span style={logoStyle}>Colophon</span>
}

/** Oversized, soft-gradient wordmark that sits behind the footer's legal line. */
export function BrandWordmark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1240 347" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="wordmark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ebebeb" />
          <stop offset="1" stopColor="#e2e2e2" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="262"
        textLength="1240"
        lengthAdjust="spacingAndGlyphs"
        fill="url(#wordmark-fill)"
        fontFamily="DM Sans, sans-serif"
        fontWeight="700"
        fontSize="360"
      >
        Colophon
      </text>
    </svg>
  )
}
