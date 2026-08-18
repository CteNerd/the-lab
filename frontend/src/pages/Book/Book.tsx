import { Link } from 'react-router-dom';
import { placeholderLabel } from '../../content/siteContent';
import styles from './Book.module.css';

export default function Book() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="book-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Book Training</p>
            <h1 id="book-heading">Book <span className="accent">Training</span></h1>
            <p className={`section-lead ${styles.subtitle}`}>
              The booking page intentionally stays in placeholder mode so visitors have a clear inquiry path without the site implying a live reservation system.
            </p>
          </div>
          <span className="placeholder-badge">{placeholderLabel}</span>
        </div>
      </section>

      <section className="section" aria-labelledby="booking-section-heading">
        <div className="container">
          <div className={styles.notice} role="note" aria-labelledby="booking-section-heading">
            <h2 id="booking-section-heading">Online Booking Coming Soon</h2>
            <p>
              Final booking workflow, calendar rules, confirmations, and payment handling are intentionally deferred. Until then, this page points visitors to direct outreach.
            </p>
            <div className={styles.actions}>
              <Link to="/contact" className="button-primary">Contact Us</Link>
              <Link to="/training" className="button-secondary">Review Programs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
