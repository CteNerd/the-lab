import { contactDetails, mapLinks, placeholderLabel, socialLinks } from '../../content/siteContent';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} aria-labelledby="contact-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Contact</p>
            <h1 id="contact-heading">Get In <span className="accent">Touch</span></h1>
            <p className={`section-lead ${styles.subtitle}`}>
              Ready-to-review contact structure is in place now, with phone, email, address, maps, and social profiles still clearly marked until Patrick confirms them.
            </p>
          </div>
          <span className="placeholder-badge">{placeholderLabel}</span>
        </div>
      </section>

      <section className="section" aria-label="Contact information">
        <div className="container">
          <div className={styles.info}>
            {contactDetails.map((detail) => (
              <div key={detail.label} className="surface-panel">
                <p className="meta-label">{detail.label}</p>
                <p>{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Location and social links">
        <div className="container">
          <div className={styles.supportGrid}>
            <article className="surface-panel" aria-labelledby="maps-heading">
              <h2 id="maps-heading">Maps</h2>
              <ul className="inline-list" role="list">
                {mapLinks.map((link) => (
                  <li key={link.label}>
                    <p className="meta-label">{link.label}</p>
                    <p>{link.status}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="surface-panel" aria-labelledby="social-heading">
              <h2 id="social-heading">Social Links</h2>
              <ul className="inline-list" role="list">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <p className="meta-label">{link.label}</p>
                    <p>{link.status}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="inquiry-heading">
        <div className="container">
          <div className={styles.formNote}>
            <h2 id="inquiry-heading">Inquiry Form Placeholder</h2>
            <p>
              Online inquiry and booking forms remain intentionally non-functional until the backend exists. For now, this section keeps the future flow visible without implying live submission.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
