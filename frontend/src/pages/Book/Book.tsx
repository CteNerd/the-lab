import { Link } from 'react-router-dom';
import styles from './Book.module.css';

export default function Book() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="book-heading">
        <div className="container">
          <h1 id="book-heading">Book <span className="accent">Training</span></h1>
          <p className={styles.subtitle}>
            Start your journey with The Lab.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="booking-section-heading">
        <div className="container">
          <h2 id="booking-section-heading" className="sr-only">Booking</h2>
          <div className={styles.notice} role="status">
            <h3>Online Booking Coming Soon</h3>
            <p>
              Our online booking system is currently being set up. To reserve your training session,
              please reach out directly by phone or email.
            </p>
            <Link to="/contact" className={styles.cta}>Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
