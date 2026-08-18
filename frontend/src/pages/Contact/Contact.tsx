import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="contact-heading">
        <div className="container">
          <h1 id="contact-heading">Get In <span className="accent">Touch</span></h1>
          <p className={styles.subtitle}>
            Ready to start training? Reach out and we'll connect.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-info-heading">
        <div className="container">
          <h2 id="contact-info-heading" className="sr-only">Contact Information</h2>
          <div className={styles.info}>
            {/* TODO: Replace with actual contact details from Patrick */}
            <div className={styles.infoItem}>
              <h3>Phone</h3>
              <p>[Phone number — needed from Patrick]</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Email</h3>
              <p>[Email address — needed from Patrick]</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Location</h3>
              <p>[Address — needed from Patrick]</p>
            </div>
          </div>

          {/* Contact form shell — non-functional until backend is ready */}
          <div className={styles.formNote} role="note">
            <p>Online inquiry form coming soon. In the meantime, please call or email directly.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
