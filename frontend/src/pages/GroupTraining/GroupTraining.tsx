import styles from './GroupTraining.module.css';

export default function GroupTraining() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="group-heading">
        <div className="container">
          <h1 id="group-heading"><span className="accent">Group</span> Training</h1>
          <p className={styles.subtitle}>
            {/* TODO: Group training details from Patrick */}
            [Group training program details — content needed from Patrick]
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="group-details-heading">
        <div className="container">
          <h2 id="group-details-heading">Program Details</h2>
          <p>[Format, session length, group size, availability, pricing — content needed from Patrick]</p>
          <a href="/book" className={styles.cta}>Book a Session</a>
        </div>
      </section>
    </div>
  );
}
