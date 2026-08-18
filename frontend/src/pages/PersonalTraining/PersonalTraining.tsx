import styles from './PersonalTraining.module.css';

export default function PersonalTraining() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="personal-heading">
        <div className="container">
          <h1 id="personal-heading"><span className="accent">Personal</span> Training</h1>
          <p className={styles.subtitle}>
            {/* TODO: Personal training details from Patrick */}
            [Personal training program details — content needed from Patrick]
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="details-heading">
        <div className="container">
          <h2 id="details-heading">Program Details</h2>
          <p>[Format, session length, availability, pricing — content needed from Patrick]</p>
          <a href="/book" className={styles.cta}>Book a Session</a>
        </div>
      </section>
    </div>
  );
}
