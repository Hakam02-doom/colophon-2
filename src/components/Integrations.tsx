import styles from './Integrations.module.css'

// icon order per row, as on the source page
const rows = [
  { icons: [1, 2, 3, 4, 5, 6, 7, 8], dir: 'right' as const },
  { icons: [4, 5, 3, 2, 8, 6, 1, 7], dir: 'left' as const },
]

export function Integrations() {
  return (
    <section className="section">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <div className={styles.titleBadge}>
            <p className="t-badge">For developers</p>
            <h2 className="t-h2">
              One API, every surface. <span className="soft">Same rules on each.</span>
            </h2>
          </div>
          <p className={`t-body ${styles.intro}`}>
            REST, GraphQL, the TypeScript SDK, the CLI and an MCP server all follow the same permissions. Test a
            Strapi or Sanity import before you commit to it.
          </p>
        </div>

        <div className={styles.animation} aria-hidden="true">
          {rows.map((row, r) => (
            <div key={r} className={styles.row}>
              <div className={`${styles.track} ${row.dir === 'right' ? styles.toRight : styles.toLeft}`}>
                {[0, 1].map((copy) => (
                  <ul key={copy} className={styles.list}>
                    {row.icons.map((n) => (
                      <li key={n} className={styles.icon}>
                        <img src={`/integrations/icon-${n}.svg`} alt="" width={96} height={96} />
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
