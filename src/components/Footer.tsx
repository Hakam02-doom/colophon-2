import { MaskIcon } from './ui/MaskIcon'
import { BrandLogo, BrandWordmark } from './ui/Brand'
import styles from './Footer.module.css'

const columns = [
  { title: 'Product', links: ['Features', 'Status', 'Demo sites'] },
  { title: 'Build', links: ['Build log', 'Contact'] },
  { title: 'Legal', links: ['Privacy', 'Terms'] },
]

const socials = [
  { icon: '/icons/x.svg', label: 'X', href: 'https://x.com/' },
  { icon: '/icons/threads.svg', label: 'Threads', href: 'https://www.threads.com/' },
  { icon: '/icons/linkedin.svg', label: 'LinkedIn', href: 'https://www.linkedin.com/' },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <a href="#" aria-label="Colophon home">
            <BrandLogo />
          </a>
          <div className={styles.social}>
            <p className="t-tiny">Social media</p>
            <div className={styles.socialButtons}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className={styles.socialBtn}>
                  <MaskIcon src={s.icon} size={24} color="var(--c-ink)" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.links}>
          <p className={`t-tiny ${styles.tagline}`}>
            Publishing you can check afterwards. Every release is recorded and every change can be reviewed.
          </p>
          <nav className={styles.menu} aria-label="Footer">
            {columns.map((c) => (
              <div key={c.title} className={styles.column}>
                <p className={`t-label ${styles.colTitle}`}>
                  <span className={styles.square} aria-hidden="true" />
                  {c.title}
                </p>
                {c.links.map((l) => (
                  <a key={l} href="#" className={`t-tiny ${styles.link}`}>
                    {l}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.wordmark}>
          <BrandWordmark className={styles.wordmarkImg} />
          <img className={styles.mosaic} src="/images/mosaic-footer.png" alt="" aria-hidden="true" />
          <div className={styles.legal}>
            <p className="t-small">
              © 2026 Colophon · Made with <a href="#">Rust and Svelte</a>
            </p>
            <a href="#" className="t-small" style={{ color: 'var(--c-ink)' }}>
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
