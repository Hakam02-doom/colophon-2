import { ArrowButton } from './ui/ArrowButton'
import styles from './CTA.module.css'

export function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.image} aria-hidden="true">
          <div className={styles.overlay} />
        </div>
        <div className={styles.title}>
          <h2 className={`t-h2 ${styles.heading}`}>
            Follow the build.
            <br />
            <em>Mistakes included</em>
          </h2>
          <p className={`t-body ${styles.sub}`}>
            Colophon is being built in public, one write-up at a time. Read along as it comes together, or poke around
            the demo sites.
          </p>
          <ArrowButton href="#">Read the build log</ArrowButton>
        </div>
      </div>
    </section>
  )
}
