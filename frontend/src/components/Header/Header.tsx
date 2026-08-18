import { useCallback, useEffect, useRef, useState } from 'react';
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
  const navRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const shouldRestoreFocusRef = useRef(false);

  const closeMenu = useCallback((restoreFocus = false) => {
    shouldRestoreFocusRef.current = restoreFocus;
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      if (shouldRestoreFocusRef.current) {
        menuToggleRef.current?.focus();
        shouldRestoreFocusRef.current = false;
      }

      return;
    }

    const getFocusableElements = () => Array.from(
      navRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ) ?? [],
    );

    const focusableElements = getFocusableElements();
    const firstFocusable = focusableElements[0];

    firstFocusable?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu(true);
        return;
      }

      if (
        event.key !== 'Tab'
        || !getFocusableElements().length
      ) {
        return;
      }

      const updatedFocusableElements = getFocusableElements();
      const updatedFirstFocusable = updatedFocusableElements[0];
      const updatedLastFocusable = updatedFocusableElements[updatedFocusableElements.length - 1];

      if (
        !updatedFocusableElements.length
        || !updatedFirstFocusable
        || !updatedLastFocusable
      ) {
        return;
      }

      if (event.shiftKey && document.activeElement === updatedFirstFocusable) {
        event.preventDefault();
        updatedLastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === updatedLastFocusable) {
        event.preventDefault();
        updatedFirstFocusable.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeMenu, menuOpen]);

  return (
    <header className={styles.header} role="banner">
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} onClick={() => closeMenu()} aria-label="The Lab — home">
          <span className={styles.logoText}>THE LAB</span>
          <span className={styles.logoSub}>Performance &amp; Strength</span>
        </Link>

        <nav
          id="primary-nav"
          ref={navRef}
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
                  onClick={() => closeMenu()}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/book" className={styles.ctaButton} onClick={() => closeMenu()}>
                Book Training
              </Link>
            </li>
          </ul>
        </nav>

        <button
          ref={menuToggleRef}
          type="button"
          className={styles.menuToggle}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => {
            if (menuOpen) {
              closeMenu(true);
              return;
            }

            setMenuOpen(true);
          }}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => closeMenu(true)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
