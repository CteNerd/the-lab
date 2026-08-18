import { legalPlaceholderSections, placeholderLabel } from '../../content/siteContent';
import styles from './Terms.module.css';

export default function Terms() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="terms-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Legal</p>
            <h1 id="terms-heading">Terms of <span className="accent">Service</span></h1>
            <p className={`section-lead ${styles.subtitle}`}>
              This page is intentionally a placeholder until final terms language is approved, but the information architecture is ready for review.
            </p>
          </div>
          <span className="placeholder-badge">{placeholderLabel}</span>
        </div>
      </section>

      <section className="section" aria-labelledby="terms-content-heading">
        <div className={`container ${styles.content}`}>
          <article className="surface-panel">
            <h2 id="terms-content-heading">Planned terms topics</h2>
            <ul className="inline-list" role="list">
              {legalPlaceholderSections.terms.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
