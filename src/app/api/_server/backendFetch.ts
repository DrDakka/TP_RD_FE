import { cookies, headers } from 'next/headers';

const API_URL = process.env.API_URL;
const INTERNAL_SECRET = process.env.INTERNAL_SECRET!;

const AUTH_COOKIES = ['access_token', 'refresh_token'] as const;

export async function backendFetch(
  path: string,
  options: RequestInit = {},
): Promise<Response> {
  const cookieStore = await cookies();
  const headersList = await headers();

  const cookieHeader = AUTH_COOKIES.map(name => {
    const value = cookieStore.get(name)?.value;

    return value ? `${name}=${value}` : null;
  })
    .filter(Boolean)
    .join('; ');

  const xff = headersList.get('x-forwarded-for') ?? undefined;

  const reqHeaders = new Headers(options.headers);

  reqHeaders.set('Accept', 'application/json');
  reqHeaders.set('X-Internal-Secret', INTERNAL_SECRET);
  reqHeaders.set('X-Request-Id', crypto.randomUUID());
  if (xff) {
    reqHeaders.set('X-Forwarded-For', xff);
  }

  if (cookieHeader) {
    reqHeaders.set('Cookie', cookieHeader);
  }

  return fetch(`${API_URL}${path}`, {
    ...options,
    headers: reqHeaders,
    signal: AbortSignal.timeout(10_000),
  });
}
