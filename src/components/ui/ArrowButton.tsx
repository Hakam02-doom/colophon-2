import styles from './ArrowButton.module.css'

type ArrowButtonProps = {
  href: string
  children: string
  variant?: 'primary' | 'secondary'
  /** stretch to the parent's width (pricing cards) */
  block?: boolean
}

/**
 * Dark (or white) pill with an orange square. On hover the pixel arrow
 * slides out to the right while a twin slides in, and the label rolls up.
 */
export function ArrowButton({ href, children, variant = 'primary', block = false }: ArrowButtonProps) {
  return (
    <a href={href} className={`${styles.button} ${styles[variant]} ${block ? styles.block : ''}`}>
      <span className={styles.content}>
        <span className={styles.square} aria-hidden="true">
          <span className={styles.arrows}>
            <span className={styles.arrow} />
            <span className={styles.arrow} />
          </span>
        </span>
        <span className={styles.text}>
          <span className={styles.roll}>
            <span>{children}</span>
            <span aria-hidden="true">{children}</span>
          </span>
        </span>
      </span>
    </a>
  )
}
