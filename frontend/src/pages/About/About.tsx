import { aboutSections, placeholderLabel, sharedSiteCopy } from '../../content/siteContent';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="about-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">About The Lab</p>
            <h1 id="about-heading">About <span className="accent">The Lab</span></h1>
            <p className={`section-lead ${styles.subtitle}`}>
              The page structure is ready for Patrick Robertson’s bio, background, and philosophy without inventing claims before that content is approved.
            </p>
          </div>
          <span className="placeholder-badge">{placeholderLabel}</span>
        </div>
      </section>

      <section className="section" aria-labelledby="story-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Story & Philosophy</p>
            <h2 id="story-heading">Everything needed for a strong About page is scaffolded</h2>
            <p className="section-lead">{sharedSiteCopy.reviewNote}</p>
          </div>

          <div className={styles.grid}>
            {aboutSections.map((section) => (
              <article key={section.title} className="surface-panel">
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
