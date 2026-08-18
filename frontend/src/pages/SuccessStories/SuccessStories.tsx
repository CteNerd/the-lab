import styles from './SuccessStories.module.css';

export default function SuccessStories() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="stories-heading">
        <div className="container">
          <h1 id="stories-heading">Success <span className="accent">Stories</span></h1>
          <p className={styles.subtitle}>
            Real athletes. Real results.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="stories-list-heading">
        <div className="container">
          <h2 id="stories-list-heading" className="sr-only">Athlete Stories</h2>
          {/* TODO: Add real success stories from Patrick in Session 4 */}
          <p className={styles.placeholder}><em>[Success stories — content and athlete testimonials needed from Patrick]</em></p>
        </div>
      </section>
    </div>
  );
}
