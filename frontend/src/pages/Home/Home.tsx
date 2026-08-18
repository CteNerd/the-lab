import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="hero-heading">
        <div className="container">
          <p className={styles.eyebrow}>Welcome to</p>
          <h1 id="hero-heading">
            <span className="accent">The Lab</span> Performance &amp; Strength
          </h1>
          <p className={styles.subtitle}>
            {/* TODO: Confirm hero message with Patrick */}
            [Hero tagline — content needed from Patrick]
          </p>
          <div className={styles.actions}>
            <a href="/book" className={styles.primaryCta}>Book Training</a>
            <a href="/training" className={styles.secondaryCta}>Explore Programs</a>
          </div>
        </div>
      </section>

      {/* TODO: Session 3 — Training preview, success stories preview, Patrick section */}
      <div className={`container ${styles.placeholder}`}>
        <p><em>Home page sections (training preview, success stories, Patrick intro) will be added in Session 3.</em></p>
      </div>
    </div>
  );
}
