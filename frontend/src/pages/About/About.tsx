import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="about-heading">
        <div className="container">
          <h1 id="about-heading">About <span className="accent">The Lab</span></h1>
          <p className={styles.subtitle}>
            {/* TODO: Confirm Patrick's bio and The Lab origin story */}
            [Patrick Robertson bio and The Lab origin story — content needed from Patrick]
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="philosophy-heading">
        <div className="container">
          <h2 id="philosophy-heading">Coaching Philosophy</h2>
          {/* TODO: Patrick's coaching philosophy and methodology */}
          <p>[Coaching philosophy — content needed from Patrick]</p>
        </div>
      </section>
    </div>
  );
}
