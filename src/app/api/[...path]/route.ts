import { NextRequest, NextResponse } from 'next/server';
import { validateRequest } from '../_server/validation';
import { getAuthHeader } from '../_server/utils';
import { AppError, UnauthorizedError } from '../_server/errors/errors';

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

async function handler(req: NextRequest) {
  try {
    const { endpoint, method, queryString, body, auth, headers } =
      await validateRequest(req);

    const authHeader = getAuthHeader(req);

    if (auth && !authHeader) {
      throw new UnauthorizedError();
    }

    const qs = queryString ? `?${queryString}` : '';

    const url = `${NEXT_PUBLIC_API_URL}/${endpoint}${qs}`;

    const mergedHeaders = Object.assign({}, ...headers, authHeader);

    const res = await fetch(url, {
      method,
      headers: { ...mergedHeaders },
      body: body !== null ? JSON.stringify(body) : undefined,
    });

    const data = await res.json();

    const response = NextResponse.json(data, { status: res.status });

    res.headers.getSetCookie().forEach(cookie => {
      response.headers.append('set-cookie', cookie);
    });

    return response;
  } catch (e) {
    if (e instanceof AppError) {
      return NextResponse.json({ error: e.message }, { status: e.status });
    }

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}

export { handler as GET, handler as POST, handler as DELETE };
