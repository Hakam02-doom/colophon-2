import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { SectionHeading } from './ui/SectionHeading'
import styles from './HowItWorks.module.css'

const tabs = ['Write and review', 'Publish a release', 'Prove it was seen']

/**
 * Three looping product demos. The source animates an SVG frame by frame;
 * here each demo is a recorded, seamlessly looping 2x video.
 */
export function HowItWorks() {
  const [active, setActive] = useState(0)
  const videos = useRef<(HTMLVideoElement | null)[]>([])
  // phones get the source's separate, tighter-cropped mobile animations
  const phone = useMediaQuery('(max-width: 809px)')
  const dir = phone ? '/videos/mobile' : '/videos'

  useEffect(() => {
    videos.current.forEach((v, i) => {
      if (!v) return
      if (i === active) {
        v.currentTime = 0
        void v.play().catch(() => {})
      } else {
        v.pause()
      }
    })
  }, [active, phone])

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
              <video
                key={t}
                ref={(el) => {
                  videos.current[i] = el
                }}
                src={`${dir}/how-${i + 1}.mp4`}
                poster={`${dir}/how-${i + 1}-poster.jpg`}
                data-active={active === i}
                muted
                loop
                playsInline
                autoPlay={i === 0}
                preload={i === 0 ? 'auto' : 'metadata'}
                aria-hidden={active !== i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
