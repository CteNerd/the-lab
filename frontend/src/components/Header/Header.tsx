import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/training', label: 'Training' },
  { to: '/success-stories', label: 'Success Stories' },
  { to: '/media', label: 'Media' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header} role="banner">
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} onClick={closeMenu} aria-label="The Lab — home">
          <span className={styles.logoText}>THE LAB</span>
          <span className={styles.logoSub}>Performance &amp; Strength</span>
        </Link>

        <nav
          id="primary-nav"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
          aria-label="Primary navigation"
        >
          <ul className={styles.navList} role="list">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    [styles.navLink, isActive ? styles.navLinkActive : ''].join(' ')
                  }
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/book" className={styles.ctaButton} onClick={closeMenu}>
                Book Training
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className={styles.menuToggle}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={closeMenu}
          role="button"
          tabIndex={-1}
          aria-label="Close navigation menu"
          onKeyDown={(e) => e.key === 'Escape' && closeMenu()}
        />
      )}
    </header>
  );
}
