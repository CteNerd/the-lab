import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './MarketingLayout.module.css';

export default function MarketingLayout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className={styles.layout}>
      <Header />
      <main id="main-content" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
