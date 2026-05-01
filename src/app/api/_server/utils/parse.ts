import { NextRequest } from 'next/server';
import { contentTypes } from '@/shared/api/vocab';

function parseSearchParams(
  params: URLSearchParams,
): Record<string, string | string[]> {
  const result: Record<string, string | string[]> = {};

  params.forEach((value, key) => {
    const existing = result[key];

    if (existing) {
      result[key] = Array.isArray(existing)
        ? [...existing, value]
        : [existing, value];
    } else {
      result[key] = value;
    }
  });

  return result;
}

async function parseBody(req: NextRequest): Promise<unknown> {
  const ct = req.headers.get('content-type') ?? '';

  switch (true) {
    case ct.includes(contentTypes.json):
      return req.json();
    case ct.includes(contentTypes.form):
      return req.formData();
    default:
      return req.text();
  }
}

const parse = {
  searchParams: parseSearchParams,
  body: parseBody,
};

export { parse };
