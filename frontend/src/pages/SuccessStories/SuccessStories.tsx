import { placeholderLabel, successStoryCards } from '../../content/siteContent';
import styles from './SuccessStories.module.css';

export default function SuccessStories() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="stories-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Success Stories</p>
            <h1 id="stories-heading">Success <span className="accent">Stories</span></h1>
            <p className={`section-lead ${styles.subtitle}`}>
              The content model is ready for real testimonials. Each card keeps placeholder fields visible until Patrick approves story copy and publishing permission.
            </p>
          </div>
          <span className="placeholder-badge">{placeholderLabel}</span>
        </div>
      </section>

      <section className="section" aria-labelledby="stories-list-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Story Framework</p>
            <h2 id="stories-list-heading">Review the structure before real stories are added</h2>
          </div>

          <div className={styles.grid}>
            {successStoryCards.map((story, index) => (
              <article key={`${story.name}-${index}`} className="surface-panel">
                <h3>{story.name}</h3>
                <dl className={styles.meta}>
                  <div>
                    <dt className="meta-label">Athlete Type</dt>
                    <dd>{story.athleteType}</dd>
                  </div>
                  <div>
                    <dt className="meta-label">Goal</dt>
                    <dd>{story.goal}</dd>
                  </div>
                  <div>
                    <dt className="meta-label">Challenge</dt>
                    <dd>{story.challenge}</dd>
                  </div>
                  <div>
                    <dt className="meta-label">Result</dt>
                    <dd>{story.result}</dd>
                  </div>
                </dl>
                <blockquote className={styles.quote}>{story.quote}</blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Athletes at The Lab">
        <div className="container">
          <figure className={styles.communityFigure}>
            <img
              src="/images/the-lab-athlete-group.jpg"
              alt="Athletes learn to work and grow together, community."
              className={styles.communityImage}
              loading="lazy"
              width="800"
              height="533"
            />
          </figure>
        </div>
      </section>
    </div>
  );
}
