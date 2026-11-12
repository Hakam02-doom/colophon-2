import { useLayoutEffect, useRef, useState } from 'react'
import { ArrowButton } from './ui/ArrowButton'
import styles from './Pricing.module.css'

type View = 'phase' | 'proof'

type Stage = {
  name: string
  value: Record<View, string>
  unit: Record<View, string>
  description: string
  features: { label: string; done: boolean }[]
  cta: { label: string; variant: 'primary' | 'secondary' }
  featured?: boolean
}

// Colophon has no pricing yet; these cards report build status instead.
const stages: Stage[] = [
  {
    name: 'Core',
    value: { phase: 'P0–P3', proof: '1 seed' },
    unit: { phase: 'Done', proof: 'replays any failure exactly' },
    description: 'The base layer that every later phase builds on, finished and covered by tests.',
    features: [
      { label: 'Numbered releases', done: true },
      { label: 'Pinned-release reads', done: true },
      { label: 'Reviewed rollbacks', done: true },
      { label: 'Locales and localization groups', done: true },
      { label: 'Email-and-password accounts', done: true },
      { label: 'Mirrored references', done: true },
      { label: 'Import and export', done: true },
      { label: 'Type builder', done: true },
    ],
    cta: { label: 'Read the build log', variant: 'secondary' },
  },
  {
    name: 'Automation',
    value: { phase: 'P5', proof: '0' },
    unit: { phase: 'Closed', proof: 'unauthorized actions in the eval' },
    description: 'Tokens, budgets and quotas that keep scripts and AI agents inside clear limits.',
    features: [
      { label: 'No token self-approval', done: true },
      { label: 'Budgets reserved in Postgres', done: true },
      { label: 'Per-day cost ceilings', done: true },
      { label: 'Crash-safe bulk jobs', done: true },
      { label: 'Per-token request quotas', done: true },
      { label: 'CLI and MCP parity with the API', done: true },
      { label: 'Adversarial eval gate', done: true },
      { label: 'JSONL content export and import', done: true },
    ],
    cta: { label: 'See a demo site', variant: 'primary' },
    featured: true,
  },
  {
    name: 'Operations',
    value: { phase: 'P6–P7', proof: '400s' },
    unit: { phase: 'Proven, one soak test to go', proof: 'from backup capture to serving' },
    description: 'Backups, load tests and member accounts, each exercised against real failures.',
    features: [
      { label: 'Encrypted backups', done: true },
      { label: 'Continuous WAL archiving', done: true },
      { label: '540,063-request load run', done: true },
      { label: '10,000-record import', done: true },
      { label: 'Argon2id member accounts', done: true },
      { label: 'Row-level visibility gates', done: true },
      { label: 'Hourly retention sweep', done: true },
      { label: '24-hour soak test', done: false },
    ],
    cta: { label: 'Get in touch', variant: 'secondary' },
  },
]

const views: { id: View; label: string }[] = [
  { id: 'phase', label: 'Phase' },
  { id: 'proof', label: 'Proof' },
]

export function Pricing() {
  const [view, setView] = useState<View>('phase')
  const tabs = useRef<Record<View, HTMLButtonElement | null>>({ phase: null, proof: null })
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null)

  // slide the white pill under whichever label is active, whatever its width
  useLayoutEffect(() => {
    const el = tabs.current[view]
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth })
  }, [view])

  return (
    <section className="section" id="pricing">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <div className={styles.titleBadge}>
            <p className="t-badge">Status</p>
            <h2 className="t-h2">
              Where it stands, <span className="soft">with the evidence.</span>
            </h2>
          </div>
          <p className={`t-body ${styles.intro}`}>
            A phase only closes when its test results are stored. The 24-hour soak is the last open item in the load
            tests.
          </p>
        </div>

        <div className={styles.plans}>
          <div className={styles.tabsRow}>
            <div className={styles.tabs} role="radiogroup" aria-label="Show phase or proof">
              <span
                className={styles.tabBg}
                style={pill ? { left: pill.left, width: pill.width } : undefined}
                aria-hidden="true"
              />
              {views.map((v) => (
                <button
                  key={v.id}
                  ref={(el) => {
                    tabs.current[v.id] = el
                  }}
                  type="button"
                  role="radio"
                  aria-checked={view === v.id}
                  className={styles.tab}
                  data-active={view === v.id}
                  onClick={() => setView(v.id)}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            {stages.map((p) => (
              <article key={p.name} className={`${styles.card} ${p.featured ? styles.featured : ''}`}>
                {p.featured && <img className={styles.cardBg} src="/images/pricing-pro.png" alt="" loading="lazy" />}
                <h3 className={`t-h4 ${styles.planName}`}>{p.name}</h3>
                <div className={styles.price}>
                  <p className={`t-h3 ${styles.amount}`}>{p.value[view]}</p>
                  <p className="t-body">{p.unit[view]}</p>
                </div>
                <p className={`t-body ${styles.desc}`}>{p.description}</p>
                <ul className={styles.list}>
                  {p.features.map((f) => (
                    <li key={f.label} className={styles.feature} data-included={f.done}>
                      <span className={styles.square} aria-hidden="true" />
                      <span className="t-body">
                        {f.label}
                        {!f.done && <span className="visually-hidden"> (outstanding)</span>}
                      </span>
                    </li>
                  ))}
                </ul>
                <ArrowButton href="#" variant={p.cta.variant} block>
                  {p.cta.label}
                </ArrowButton>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
