import { Link } from 'react-router-dom';
import {
  contactDetails,
  homeProgramPreview,
  homeReasons,
  placeholderLabel,
  sharedSiteCopy,
  successStoryCards,
} from '../../content/siteContent';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="hero-heading">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Welcome to</p>
            <h1 id="hero-heading">
              <span className="accent">The Lab</span> Performance &amp; Strength
            </h1>
            <p className={styles.subtitle}>{sharedSiteCopy.heroSubtitle}</p>
            <div className={styles.actions}>
              <Link to="/book" className="button-primary">Book Training</Link>
              <Link to="/training" className="button-secondary">Explore Programs</Link>
            </div>
          </div>

          <aside className={`surface-panel ${styles.heroPanel}`} aria-label="Review status">
            <span className="placeholder-badge">Review-ready structure</span>
            <p>
              Session 3 content is now scaffolded for review. Final voice, imagery, and offer specifics remain clearly marked until Patrick approves them.
            </p>
          </aside>
        </div>
      </section>

      <section className="section" aria-labelledby="media-preview-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Media Preview</p>
            <h2 id="media-preview-heading">Short training-media section</h2>
            <p className="section-lead">
              The gallery structure is in place for photos and short clips. Final approved assets will drop into this framework after review.
            </p>
          </div>

          <div className={styles.mediaPreviewGrid}>
            <div className={`surface-panel ${styles.mediaPanel}`}>
              <h3>Future Photo Grid</h3>
              <p>{placeholderLabel}</p>
            </div>
            <div className={`surface-panel ${styles.mediaPanel}`}>
              <h3>Future Video Clip Shelf</h3>
              <p>Poster images, user-controlled playback, and no autoplay audio will be used once clips are approved.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="training-preview-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Training Preview</p>
            <h2 id="training-preview-heading">Clear entry points into training</h2>
          </div>

          <div className={styles.cardGrid}>
            {homeProgramPreview.map((program) => (
              <article key={program.title} className="surface-panel">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <Link to={program.href} className={styles.inlineLink}>Review page structure</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Why The Lab</p>
            <h2 id="why-heading">Built for iteration without guessing</h2>
          </div>

          <div className={styles.reasonGrid}>
            {homeReasons.map((reason) => (
              <div key={reason} className="surface-panel">
                <p>{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="stories-preview-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Success Stories</p>
            <h2 id="stories-preview-heading">Story structure is ready for real results later</h2>
          </div>

          <div className={styles.cardGrid}>
            {successStoryCards.map((story, index) => (
              <article key={`${story.name}-${index}`} className="surface-panel">
                <h3>{story.name}</h3>
                <dl className={styles.storyMeta}>
                  <div>
                    <dt className="meta-label">Athlete Type</dt>
                    <dd>{story.athleteType}</dd>
                  </div>
                  <div>
                    <dt className="meta-label">Goal</dt>
                    <dd>{story.goal}</dd>
                  </div>
                </dl>
                <p>{story.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="patrick-heading">
        <div className="container">
          <div className={styles.profileGrid}>
            <div className="section-header">
              <p className="section-kicker">Patrick Robertson</p>
              <h2 id="patrick-heading">Coach introduction placeholder</h2>
              <p className="section-lead">
                [Patrick introduction placeholder — final bio, background, and positioning statement pending Patrick review.]
              </p>
            </div>
            <div className={styles.profileImageWrap}>
              <img
                src="/images/Patrick-Robertson.jpg"
                alt="Patrick Robertson standing on a football field during a training session"
                className={styles.profileImage}
                loading="lazy"
                width="560"
                height="840"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-preview-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Contact Preview</p>
            <h2 id="contact-preview-heading">Contact and location details stay visible, even as placeholders</h2>
          </div>

          <div className={styles.contactGrid}>
            {contactDetails.map((detail) => (
              <div key={detail.label} className="surface-panel">
                <p className="meta-label">{detail.label}</p>
                <p>{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="final-cta-heading">
        <div className="container">
          <div className={`surface-panel ${styles.finalCta}`}>
            <div>
              <p className="section-kicker">Final CTA</p>
              <h2 id="final-cta-heading">Ready to keep iterating?</h2>
              <p>{sharedSiteCopy.reviewNote}</p>
            </div>
            <div className={styles.actions}>
              <Link to="/book" className="button-primary">Book Training</Link>
              <Link to="/contact" className="button-secondary">Review Contact Page</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
