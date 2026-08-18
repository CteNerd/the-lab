import { Link } from 'react-router-dom';
import { homeProgramPreview, placeholderLabel } from '../../content/siteContent';
import styles from './Training.module.css';

export default function Training() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="training-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Training</p>
            <h1 id="training-heading">Training <span className="accent">Programs</span></h1>
            <p className={`section-lead ${styles.subtitle}`}>
              The program overview is structured for review now, with final descriptions, durations, and pricing details still clearly marked as placeholders.
            </p>
          </div>
          <span className="placeholder-badge">{placeholderLabel}</span>
        </div>
      </section>

      <section className="section" aria-labelledby="programs-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Program Paths</p>
            <h2 id="programs-heading">Choose the right training page to review</h2>
          </div>

          <div className={styles.cards}>
            {homeProgramPreview.map((program) => (
              <article key={program.title} className="surface-panel">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <Link to={program.href} className={styles.cardLink}>Learn More</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
