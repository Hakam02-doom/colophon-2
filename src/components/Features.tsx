import { Fragment, useState } from 'react'
import { SectionHeading } from './ui/SectionHeading'
import styles from './Features.module.css'

const items = [
  {
    title: 'Sites without custom CSS',
    body: 'Build pages, menus and themes from a fixed set of sections and design tokens, then publish them like any article.',
  },
  {
    title: "Media that can't break a page",
    body: 'Every upload is checked before anyone can use it, so a release never goes out pointing at a broken image.',
  },
  {
    title: 'Rollbacks that get reviewed',
    body: 'Returning to an older version opens a normal change for review instead of skipping the process.',
  },
  {
    title: "APIs that can't drift",
    body: 'API docs and the TypeScript SDK are generated from the server itself, and the CLI and MCP tools match the API.',
  },
]

export function Features() {
  const [active, setActive] = useState(0)

  return (
    <section className="section" id="features">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <SectionHeading badge="What's built" className={styles.heading}>
            The core is done.
            <br />
            <span className="soft">The rest is in arcs.</span>
          </SectionHeading>
          <p className={`t-body-lg ${styles.intro}`}>
            Writing, editing, publishing and delivery checks are finished. Newer work arrives in arcs, and each one is
            tested against failure before it counts.
          </p>
        </div>

        <div className={styles.body}>
          <div className={styles.menu} role="tablist" aria-label="Capabilities">
            {items.map((it, i) => (
              <Fragment key={it.title}>
              <button
                type="button"
                role="tab"
                aria-selected={active === i}
                className={styles.item}
                data-active={active === i}
                onClick={() => setActive(i)}
              >
                <img src="/icons/double-arrow.svg" alt="" width={24} height={24} className={styles.arrow} />
                <span className={styles.content}>
                  <span className={`t-h4 ${styles.title}`}>{it.title}</span>
                  <span className={styles.desc}>
                    <span className="t-small">{it.body}</span>
                  </span>
                </span>
              </button>
              {active === i && (
                <div className={styles.inlineImage}>
                  <img src="/images/feature-mobile.png" alt="" loading="lazy" />
                </div>
              )}
              </Fragment>
            ))}
          </div>

          <div className={styles.image} role="tabpanel">
            {items.map((it, i) => (
              <img
                key={it.title}
                src={`/images/feature-${i + 1}.png`}
                alt={active === i ? `${it.title} in the Colophon Studio` : ''}
                data-active={active === i}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
