import { matchRoutes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { appRoutes } from '../appRoutes';
import { getRouterBasename, resolveAssetPath } from '../utils/sitePaths';

describe('GitHub Pages preview configuration', () => {
  it('keeps the AWS/root deployment basename unchanged by default', () => {
    expect(getRouterBasename('/')).toBeUndefined();
  });

  it('derives the GitHub Pages basename from the configured Vite base', () => {
    expect(getRouterBasename('/the-lab/')).toBe('/the-lab');
  });

  it('prefixes public asset paths with the active base URL', () => {
    expect(resolveAssetPath('/images/Patrick-Robertson.jpg', '/the-lab/')).toBe('/the-lab/images/Patrick-Robertson.jpg');
  });

  it('normalizes asset base URLs without a trailing slash', () => {
    expect(resolveAssetPath('/images/Patrick-Robertson.jpg', '/the-lab')).toBe('/the-lab/images/Patrick-Robertson.jpg');
  });

  it.each([
    '/',
    '/about',
    '/training',
    '/training/personal',
    '/training/group',
    '/success-stories',
    '/media',
    '/contact',
    '/book',
    '/privacy',
    '/terms',
  ])('matches the review route %s', (pathname) => {
    expect(matchRoutes(appRoutes, pathname)).not.toBeNull();
  });
});
