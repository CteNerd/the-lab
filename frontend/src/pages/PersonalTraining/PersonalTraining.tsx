import { Link } from 'react-router-dom';
import { placeholderLabel, programDetails } from '../../content/siteContent';
import styles from './PersonalTraining.module.css';

export default function PersonalTraining() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="personal-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Program Detail</p>
            <h1 id="personal-heading"><span className="accent">Personal</span> Training</h1>
            <p className={`section-lead ${styles.subtitle}`}>{programDetails.personal.intro}</p>
          </div>
          <span className="placeholder-badge">{placeholderLabel}</span>
        </div>
      </section>

      <section className="section" aria-labelledby="details-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Program Details</p>
            <h2 id="details-heading">What still needs Patrick review</h2>
          </div>
          <div className={styles.grid}>
            <div className="surface-panel">
              <h3>Key Details</h3>
              <ul className="inline-list" role="list">
                {programDetails.personal.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
            <div className="surface-panel">
              <h3>Next Step</h3>
              <p>The booking pathway is available now as a clearly marked placeholder until the final intake flow is approved.</p>
              <Link to="/book" className="button-primary">Book a Session</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
