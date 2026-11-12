import { useState } from 'react'
import { ArrowButton } from './ui/ArrowButton'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: 'What is Colophon?',
    a: "A content management system for writing, reviewing and publishing a website's articles, built so you always know which version readers are seeing.",
  },
  {
    q: 'Why is it called Colophon?',
    a: 'Printed books end with a colophon: a short note on how, when and by whom the book was made. Colophon gives a website that same kind of record.',
  },
  {
    q: 'Can AI agents and scripts use it?',
    a: 'Yes, inside limits you set. Agents work through scoped tokens with spending caps and request quotas, and nothing they submit can be approved by another token.',
  },
  {
    q: 'What happens if it crashes mid-publish?',
    a: 'Your saved work survives, and the half-finished publish never reaches readers. Crash recovery is tested on every change.',
  },
  {
    q: 'Can I use it for my site today?',
    a: "Not yet. It is still being built, and the builder's own site goes first. The demo sites show how it works in the meantime.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <img className={styles.mosaic} src="/images/mosaic-faq.png" alt="" aria-hidden="true" />
        <div className={styles.left}>
          <div className={styles.titleBadge}>
            <p className="t-badge">FAQ</p>
            <h2 className="t-h2">
              Questions
              <br />
              answered.
            </h2>
          </div>
          <div className={styles.cta}>
            <p className="t-body">Still curious?</p>
            <ArrowButton href="#">Get in touch</ArrowButton>
          </div>
        </div>

        <div className={styles.list}>
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className={styles.item} data-open={isOpen}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="t-h5">{f.q}</span>
                  <span className={styles.icon} aria-hidden="true">
                    <img className={styles.plus} src="/icons/plus.svg" alt="" width={24} height={24} />
                    <img className={styles.close} src="/icons/close.svg" alt="" width={18} height={18} />
                  </span>
                </button>
                <div className={styles.answer}>
                  <div>
                    <p className="t-body">{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
