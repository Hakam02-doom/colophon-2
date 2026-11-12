import { useState } from 'react'
import { SectionHeading } from './ui/SectionHeading'
import styles from './Benefits.module.css'

const cards = [
  {
    title: 'Lose nothing',
    body: 'Pull the plug in the middle of a save and your work is still there. A publish lands once and completely, or it does not land at all.',
  },
  {
    title: 'Replayable bugs',
    body: 'When a test run finds a problem, it hands back a seed number. Run that seed and you get the exact same failure again, every time, until it is fixed.',
  },
  {
    title: 'Time travel',
    body: 'Scrub back to any release and see the site exactly as readers saw it that day. Going back is simply a new release.',
  },
  {
    title: 'Honest status',
    body: 'A page only counts as published once readers can see it. Until then, Colophon shows it as pending.',
  },
]

/** Four cards; hovering (or focusing) one opens it and it stays open. */
export function Benefits() {
  const [open, setOpen] = useState(1)

  return (
    <section className="section" id="benefits">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <SectionHeading badge="Why Colophon">
            The four promises
            <br />
            Colophon keeps on every change
          </SectionHeading>
          <p className={`t-body ${styles.intro}`}>
            Most tools trust their own progress bars. Colophon checks itself against these four promises with simulated
            crashes and network faults on every change.
          </p>
        </div>

        <div className={styles.row}>
          {cards.map((c, i) => {
            const isOpen = open === i
            return (
              <article
                key={c.title}
                className={styles.card}
                data-open={isOpen}
                tabIndex={0}
                onMouseEnter={() => setOpen(i)}
                onFocus={() => setOpen(i)}
              >
                <div className={styles.closed} aria-hidden={isOpen}>
                  <p className={styles.num}>0{i + 1}.</p>
                  <div className={styles.closedImg}>
                    <img src={`/images/benefit-${i + 1}-closed.png`} alt="" loading="lazy" />
                  </div>
                  <h3 className="t-h5">{c.title}</h3>
                </div>
                <div className={styles.opened} aria-hidden={!isOpen}>
                  <div className={styles.openImg}>
                    <img src={`/images/benefit-${i + 1}-open.png`} alt="" loading="lazy" />
                  </div>
                  <div className={styles.openContent}>
                    <h3 className="t-h3">{c.title}</h3>
                    <p className="t-small" style={{ whiteSpace: 'pre-line' }}>
                      {c.body}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
