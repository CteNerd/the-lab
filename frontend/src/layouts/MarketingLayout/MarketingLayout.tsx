import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './MarketingLayout.module.css';

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'The Lab Performance & Strength',
    description:
      'Review-ready marketing site structure for The Lab Performance & Strength, with final copy and media pending Patrick review.',
  },
  '/about': {
    title: 'About | The Lab Performance & Strength',
    description:
      'Review the About page structure for The Lab, including placeholders for Patrick Robertson\'s story, mission, and methodology.',
  },
  '/training': {
    title: 'Training | The Lab Performance & Strength',
    description:
      'Review the training overview for The Lab, including personal and group training pathways with clearly marked placeholder details.',
  },
  '/training/personal': {
    title: 'Personal Training | The Lab Performance & Strength',
    description:
      'Review the personal training page structure for The Lab, with schedule and pricing details still pending Patrick review.',
  },
  '/training/group': {
    title: 'Group Training | The Lab Performance & Strength',
    description:
      'Review the group training page structure for The Lab, with final group-session details still pending Patrick review.',
  },
  '/success-stories': {
    title: 'Success Stories | The Lab Performance & Strength',
    description:
      'Review the success story content structure for The Lab, with final testimonials pending Patrick approval and publication permission.',
  },
  '/media': {
    title: 'Media | The Lab Performance & Strength',
    description:
      'Review the future media gallery structure for The Lab, including image and video placeholders with accessibility-minded behavior.',
  },
  '/contact': {
    title: 'Contact | The Lab Performance & Strength',
    description:
      'Review the contact page structure for The Lab, including placeholders for phone, email, address, maps, and social links.',
  },
  '/book': {
    title: 'Book Training | The Lab Performance & Strength',
    description:
      'Review the booking placeholder flow for The Lab while online booking is still being defined.',
  },
  '/privacy': {
    title: 'Privacy Policy | The Lab Performance & Strength',
    description:
      'Review the privacy policy placeholder page for The Lab while final legal language is still pending.',
  },
  '/terms': {
    title: 'Terms of Service | The Lab Performance & Strength',
    description:
      'Review the terms of service placeholder page for The Lab while final legal language is still pending.',
  },
};

export default function MarketingLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  useEffect(() => {
    const meta = pageMeta[pathname] ?? {
      title: 'Page Not Found | The Lab Performance & Strength',
      description: 'The requested page could not be found on The Lab Performance & Strength website.',
    };

    document.title = meta.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', meta.description);
    }
  }, [pathname]);

  return (
    <div className={styles.layout}>
      <a href="#main-content" className={styles.skipLink}>Skip to main content</a>
      <Header />
      <main id="main-content" className={styles.main} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
