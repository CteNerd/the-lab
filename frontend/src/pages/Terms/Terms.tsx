import styles from './Terms.module.css';

export default function Terms() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="terms-heading">
        <div className="container">
          <h1 id="terms-heading">Terms of <span className="accent">Service</span></h1>
        </div>
      </section>

      <section className="section" aria-labelledby="terms-content-heading">
        <div className={`container ${styles.content}`}>
          <h2 id="terms-content-heading" className="sr-only">Terms Content</h2>
          {/* TODO: Add formal terms of service — legal content needed from Patrick */}
          <p className={styles.placeholder}><em>[Terms of service — legal content needed from Patrick]</em></p>
        </div>
      </section>
    </div>
  );
}
