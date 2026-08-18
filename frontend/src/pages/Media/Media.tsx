import styles from './Media.module.css';

export default function Media() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="media-heading">
        <div className="container">
          <h1 id="media-heading">Media <span className="accent">Gallery</span></h1>
          <p className={styles.subtitle}>
            Training in action.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="gallery-heading">
        <div className="container">
          <h2 id="gallery-heading" className="sr-only">Photos and Videos</h2>
          {/* TODO: Add real media assets from Patrick in Session 4 */}
          <p className={styles.placeholder}><em>[Media gallery — photos and video clips needed from Patrick]</em></p>
        </div>
      </section>
    </div>
  );
}
