import { Fragment, useState } from 'react'
import { ArrowButton } from './ui/ArrowButton'
import { BrandLogo } from './ui/Brand'
import styles from './Nav.module.css'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Status', href: '#pricing' },
  { label: 'Contact', href: '#' },
  { label: 'Build log', href: '#' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.wrap}>
      <nav className={styles.nav} aria-label="Primary">
        <div className={styles.container}>
          <a href="#" className={styles.logo} aria-label="Colophon home">
            <BrandLogo />
          </a>
          <div className={styles.menu}>
            <div className={styles.links}>
              {links.map((l, i) => (
                <Fragment key={l.label}>
                  {i > 0 && <span className={styles.dot} aria-hidden="true" />}
                  <a href={l.href} className={`t-label ${styles.link}`}>
                    {l.label}
                  </a>
                </Fragment>
              ))}
            </div>
            <ArrowButton href="#">See a demo</ArrowButton>
          </div>
          <button
            type="button"
            className={styles.burger}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
        {open && (
          <div className={styles.mobileMenu}>
            {links.map((l) => (
              <a key={l.label} href={l.href} className="t-h5" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <ArrowButton href="#">See a demo</ArrowButton>
          </div>
        )}
      </nav>
    </header>
  )
}
