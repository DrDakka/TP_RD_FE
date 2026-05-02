import { NextRequest } from 'next/server';
import { randomUUID } from 'node:crypto';

const INTERNAL_SECRET = process.env.INTERNAL_SECRET;
const AUTH_COOKIES = ['access_token', 'refresh_token'] as const;

function getAuthHeaders(
  req: NextRequest,
): { Cookie: string } | Record<never, never> {
  const parts = AUTH_COOKIES.map(name => {
    const value = req.cookies.get(name)?.value;

    return value ? `${name}=${value}` : null;
  }).filter(Boolean);

  return parts.length ? { Cookie: parts.join('; ') } : {};
}

const defaultHeaders = (
  xForwarded: string,
  accept: string = 'application/json',
) => {
  if (!INTERNAL_SECRET) {
    throw new Error();
  }

  return {
    Accept: accept,
    'X-Internal-Secret': INTERNAL_SECRET,
    'X-Forwarded-For': xForwarded,
    'X-Request-Id': randomUUID(),
  };
};

export { getAuthHeaders, defaultHeaders };
