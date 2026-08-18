import { Link } from 'react-router-dom';
import { contactDetails, sharedSiteCopy } from '../../content/siteContent';
import styles from './Footer.module.css';

const currentYear = new Date().getFullYear();

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/training', label: 'Training' },
  { to: '/success-stories', label: 'Success Stories' },
  { to: '/media', label: 'Media' },
  { to: '/contact', label: 'Contact' },
  { to: '/book', label: 'Book Training' },
];

const legalLinks = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo} aria-label="The Lab — home">
            <span className={styles.logoText}>THE LAB</span>
            <span className={styles.logoSub}>Performance &amp; Strength</span>
          </Link>
          <p className={styles.tagline}>{sharedSiteCopy.footerTagline}</p>
          <span className="placeholder-badge">Pending Patrick review</span>
        </div>

        <nav aria-label="Footer navigation" className={styles.navSection}>
          <h2 className={styles.navHeading}>Navigate</h2>
          <ul className={styles.navList} role="list">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className={styles.navLink}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contactSection}>
          <h2 className={styles.navHeading}>Contact</h2>
          <ul className={styles.contactList} role="list">
            {contactDetails.map(({ label, value }) => (
              <li key={label}>
                <span className={styles.contactLabel}>{label}</span>
                <span className={styles.contactValue}>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            &copy; {currentYear} The Lab Performance &amp; Strength. All rights reserved.
          </p>
          <ul className={styles.legalList} role="list">
            {legalLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className={styles.legalLink}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
