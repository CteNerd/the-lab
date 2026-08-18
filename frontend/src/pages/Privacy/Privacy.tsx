import { legalPlaceholderSections, placeholderLabel } from '../../content/siteContent';
import styles from './Privacy.module.css';

export default function Privacy() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="privacy-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Legal</p>
            <h1 id="privacy-heading">Privacy <span className="accent">Policy</span></h1>
            <p className={`section-lead ${styles.subtitle}`}>
              This page is intentionally a placeholder until final privacy-policy language is approved, but the information architecture is ready for review.
            </p>
          </div>
          <span className="placeholder-badge">{placeholderLabel}</span>
        </div>
      </section>

      <section className="section" aria-labelledby="privacy-content-heading">
        <div className={`container ${styles.content}`}>
          <article className="surface-panel">
            <h2 id="privacy-content-heading">Planned policy topics</h2>
            <ul className="inline-list" role="list">
              {legalPlaceholderSections.privacy.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
