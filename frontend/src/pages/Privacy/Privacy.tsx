import styles from './Privacy.module.css';

export default function Privacy() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="privacy-heading">
        <div className="container">
          <h1 id="privacy-heading">Privacy <span className="accent">Policy</span></h1>
        </div>
      </section>

      <section className="section" aria-labelledby="privacy-content-heading">
        <div className={`container ${styles.content}`}>
          <h2 id="privacy-content-heading" className="sr-only">Policy Content</h2>
          {/* TODO: Add formal privacy policy — legal content needed from Patrick */}
          <p className={styles.placeholder}><em>[Privacy policy — legal content needed from Patrick]</em></p>
        </div>
      </section>
    </div>
  );
}
