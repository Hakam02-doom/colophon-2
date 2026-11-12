import { MaskIcon } from './ui/MaskIcon'
import { SectionHeading } from './ui/SectionHeading'
import styles from './Testimonials.module.css'

// SAMPLE QUOTES. Colophon has no public users yet: these illustrate what each
// audience gets from real features. Replace with real, attributed quotes before launch.
const reviews = [
  {
    quote:
      'I used to refresh the live site after every publish, just in case. Now the release page tells me when readers can actually see the change, so I stopped checking.',
    name: 'Hannah P.',
    role: 'Managing editor',
    link: '#',
    avatar: '/images/avatar-sophie.png',
  },
  {
    quote:
      'Our frontend talks to Colophon through the TypeScript SDK. It is generated from the server itself, so it has never quietly fallen out of date on us.',
    name: 'Omar S.',
    role: 'Backend engineer',
    link: '#',
    avatar: '/images/avatar-james.png',
  },
  {
    quote:
      'Rolling back used to mean a nervous manual fix at night. Here it is just another change that goes through review like everything else.',
    name: 'Theo M.',
    role: 'Content lead',
    link: '#',
    avatar: '/images/avatar-daniel.png',
  },
  {
    quote:
      'Restores were always a guess. Watching one come back up on clean machines, with every step logged, changed how release nights feel.',
    name: 'Lukas W.',
    role: 'Site reliability engineer',
    link: '#',
    avatar: '/images/avatar-paul.png',
  },
  {
    quote:
      'We let a script draft and tag articles, and it has no way to approve its own work. That single rule is why I was comfortable switching it on.',
    name: 'Priya N.',
    role: 'Platform engineer',
    link: '#',
    avatar: '/images/avatar-emily.png',
  },
]

function Card({ r }: { r: (typeof reviews)[number] }) {
  return (
    <figure className={styles.card}>
      <img className={styles.hoverBg} src="/images/review-bg.jpg" alt="" loading="lazy" aria-hidden="true" />
      <blockquote className={styles.quote}>{r.quote}</blockquote>
      <div className={styles.bottom}>
        <figcaption className={styles.person}>
          <span className={styles.avatar}>
            <img src={r.avatar} alt="" width={52} height={52} loading="lazy" />
          </span>
          <span className={styles.name}>
            <span className="t-h5">{r.name}</span>
            <span className={styles.role}>{r.role}</span>
          </span>
        </figcaption>
        <a href={r.link} className={styles.readOn} target="_blank" rel="noreferrer" aria-label={`Read ${r.name}'s post on X`}>
          <span>Read on</span>
          <MaskIcon src="/icons/x.svg" size={14} color="#ebe8e4" />
        </a>
      </div>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="section">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <SectionHeading badge="What people say" align="center" width={700}>
            Made for people who
            <br />
            like to double-check
          </SectionHeading>
          <p className={`t-body ${styles.intro}`}>
            Editors, engineers and whoever is on call each lean on a different part of Colophon. Here is how it lands
            for each of them.
          </p>
        </div>

        <div className={styles.viewport}>
          <div className={styles.track}>
            {[0, 1].map((copy) => (
              <ul key={copy} className={styles.list} aria-hidden={copy === 1 || undefined}>
                {reviews.map((r) => (
                  <li key={r.name}>
                    <Card r={r} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
