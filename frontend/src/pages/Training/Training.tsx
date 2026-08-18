import { Link } from 'react-router-dom';
import styles from './Training.module.css';

export default function Training() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="training-heading">
        <div className="container">
          <h1 id="training-heading">Training <span className="accent">Programs</span></h1>
          <p className={styles.subtitle}>
            {/* TODO: Confirm program descriptions with Patrick */}
            [Training overview — content needed from Patrick]
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="programs-heading">
        <div className="container">
          <h2 id="programs-heading" className="sr-only">Programs</h2>
          <div className={styles.cards}>
            <article className={styles.card} aria-labelledby="personal-training-card">
              <h3 id="personal-training-card">Personal Training</h3>
              <p>[Personal training description — content needed from Patrick]</p>
              <Link to="/training/personal" className={styles.cardLink}>Learn More</Link>
            </article>
            <article className={styles.card} aria-labelledby="group-training-card">
              <h3 id="group-training-card">Group Training</h3>
              <p>[Group training description — content needed from Patrick]</p>
              <Link to="/training/group" className={styles.cardLink}>Learn More</Link>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
