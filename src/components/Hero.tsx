import { ArrowButton } from './ui/ArrowButton'
import { useScrollZoom } from '../hooks/useScrollZoom'
import styles from './Hero.module.css'

const logos = [
  { src: '/logos/logo-1.svg', w: 156, h: 58, name: 'Cloudplex' },
  { src: '/logos/logo-2.svg', w: 135, h: 22, name: 'Tytotone' },
  { src: '/logos/logo-3.svg', w: 139, h: 28, name: 'Bloopglow' },
  { src: '/logos/logo-4.svg', w: 133, h: 27, name: 'Zingzap' },
  { src: '/logos/logo-5.svg', w: 113, h: 25, name: 'Junotwig' },
]

export function Hero() {
  const zoomRef = useScrollZoom<HTMLDivElement>(1.5, 3.9)

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.card}>
          <div ref={zoomRef} className={styles.bg} aria-hidden="true" />
          <div className={styles.overlay} aria-hidden="true" />
          <div className={styles.title}>
            <h1 className="t-hero">
              A CMS where every publish leaves a&nbsp;<em className={styles.em}>receipt</em>
            </h1>
            <p className={`t-body ${styles.sub}`}>
              Write, review and ship your site's articles, then see exactly what went live, when it went live, and
              where readers saw it.
            </p>
            <ArrowButton href="#">See a demo site</ArrowButton>
          </div>
        </div>
      </section>

      <section className={styles.trusted}>
        <p className="t-small" style={{ color: 'var(--c-ink)' }}>
          Built in the open.
        </p>
        <div className={styles.logos}>
          {logos.map((l) => (
            <div key={l.src} className={styles.logoBox}>
              <img src={l.src} alt={l.name} width={l.w} height={l.h} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
