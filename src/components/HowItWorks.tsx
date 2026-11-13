import { useState } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { SectionHeading } from './ui/SectionHeading'
import styles from './HowItWorks.module.css'

const tabs = ['Write and review', 'Publish a release', 'Prove it was seen']

/**
 * Three product screens, one per step. The active screen fades in and
 * drifts slowly so the panel still feels alive without a video.
 */
export function HowItWorks() {
  const [active, setActive] = useState(0)
  // phones get a tighter crop of each screen
  const phone = useMediaQuery('(max-width: 809px)')
  const dir = phone ? '/images/how/mobile' : '/images/how'

  return (
    <section className="section">
      <div className={`container ${styles.inner}`}>
        <SectionHeading badge="How it works" align="center" width={700}>
          From draft to live, <span className="soft">and proof that it got there.</span>
        </SectionHeading>

        <div className={styles.stage}>
          <div className={styles.tabs} role="tablist" aria-label="How it works">
            {tabs.map((t, i) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={active === i}
                className={styles.tab}
                data-active={active === i}
                onClick={() => setActive(i)}
              >
                {t}
              </button>
            ))}
          </div>
          <div className={styles.screen} role="tabpanel" aria-label={tabs[active]}>
            {tabs.map((t, i) => (
              <img
                key={t}
                src={`${dir}/how-${i + 1}.jpg`}
                alt=""
                data-active={active === i}
                loading={i === 0 ? 'eager' : 'lazy'}
                aria-hidden={active !== i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
