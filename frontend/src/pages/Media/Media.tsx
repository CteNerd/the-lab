import { Link } from 'react-router-dom';
import { mediaImageCards, mediaVideoGuidelines, placeholderLabel } from '../../content/siteContent';
import styles from './Media.module.css';

export default function Media() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="media-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Media</p>
            <h1 id="media-heading">Media <span className="accent">Gallery</span></h1>
            <p className={`section-lead ${styles.subtitle}`}>
              The gallery is scaffolded for optimized images and future short video clips while approved media assets are still being gathered.
            </p>
          </div>
          <span className="placeholder-badge">{placeholderLabel}</span>
        </div>
      </section>

      <section className="section" aria-labelledby="gallery-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Image Layout</p>
            <h2 id="gallery-heading">Lazy-loaded image placeholders</h2>
          </div>

          <div className={styles.grid}>
            {mediaImageCards.map((card) => (
              <figure key={card.title} className="surface-panel">
                <img
                  className={styles.image}
                  src="/media-placeholder.svg"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
                <figcaption className={styles.caption}>
                  <strong>{card.title}</strong>
                  <span>{card.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="video-behavior-heading">
        <div className="container">
          <div className={styles.videoPanel}>
            <div className="section-header">
              <p className="section-kicker">Video Behavior</p>
              <h2 id="video-behavior-heading">Future clips will stay user-controlled</h2>
            </div>
            <div className={`surface-panel ${styles.posterCard}`}>
              <img
                className={styles.image}
                src="/video-poster-placeholder.svg"
                alt=""
                loading="lazy"
                width="640"
                height="400"
              />
              <ul className="inline-list" role="list">
                {mediaVideoGuidelines.map((guideline) => (
                  <li key={guideline}>{guideline}</li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/contact" className="button-secondary">Request final media details</Link>
        </div>
      </section>
    </div>
  );
}
