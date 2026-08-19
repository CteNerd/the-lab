export function getRouterBasename(baseUrl: string) {
  if (baseUrl === '/') {
    return undefined;
  }

  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
}

export function resolveAssetPath(path: string, baseUrl = import.meta.env.BASE_URL) {
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  return `${normalizedBaseUrl}${path.replace(/^\//, '')}`;
}
