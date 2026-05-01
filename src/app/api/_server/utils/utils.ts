import { NextRequest } from 'next/server';

const normalizePath = (path: string): string => path.replace(/\/\d+$/, '/:id');

function hasBody(req: NextRequest): boolean {
  const cl = req.headers.get('content-length');
  const te = req.headers.get('transfer-encoding');

  return (cl !== null && cl !== '0') || te !== null;
}

const AUTH_COOKIES = ['access_token', 'refresh_token'] as const;

function getAuthHeader(
  req: NextRequest,
): { Cookie: string } | Record<never, never> {
  const parts = AUTH_COOKIES.map(name => {
    const value = req.cookies.get(name)?.value;

    return value ? `${name}=${value}` : null;
  }).filter(Boolean);

  return parts.length ? { Cookie: parts.join('; ') } : {};
}

export { normalizePath, hasBody, getAuthHeader };
