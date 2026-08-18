import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Footer from '../components/Footer';
import { sharedSiteCopy } from '../content/siteContent';
import Header from '../components/Header';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import SuccessStories from '../pages/SuccessStories';

function renderWithRouter(node: React.ReactNode) {
  return renderToStaticMarkup(<MemoryRouter>{node}</MemoryRouter>);
}

describe('site shell', () => {
  it('renders primary navigation links', () => {
    const markup = renderWithRouter(<Header />);

    expect(markup).toContain('href="/about"');
    expect(markup).toContain('href="/training"');
    expect(markup).toContain('href="/contact"');
    expect(markup).toContain('Book Training');
  });

  it('renders footer legal links', () => {
    const markup = renderWithRouter(<Footer />);

    expect(markup).toContain('href="/privacy"');
    expect(markup).toContain('href="/terms"');
    expect(markup).toContain(sharedSiteCopy.footerTagline);
  });
});

describe('review pages', () => {
  it('renders key home sections', () => {
    const markup = renderWithRouter(<Home />);

    expect(markup).toContain('Short training-media section');
    expect(markup).toContain('Clear entry points into training');
    expect(markup).toContain('Coach introduction placeholder');
    expect(markup).toContain('Ready to keep iterating?');
  });

  it('renders contact placeholders for maps and social links', () => {
    const markup = renderWithRouter(<Contact />);

    expect(markup).toContain('Google Maps');
    expect(markup).toContain('Apple Maps');
    expect(markup).toContain('Instagram');
    expect(markup).toContain('Inquiry Form Placeholder');
  });

  it('renders structured success story placeholders', () => {
    const markup = renderWithRouter(<SuccessStories />);

    expect(markup).toContain('Story Framework');
    expect(markup).toContain('Athlete Type');
    expect(markup).toContain('Goal');
    expect(markup).toContain('Result');
  });
});
