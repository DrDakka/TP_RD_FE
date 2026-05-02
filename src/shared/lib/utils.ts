import z from 'zod';
import { BadRequestError } from '../errors';

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

function validateObject<T extends z.ZodSchema>(
  body: unknown,
  schema: T,
): z.infer<T> {
  try {
    return schema.parse(body);
  } catch (e) {
    if (e instanceof z.ZodError) {
      throw new BadRequestError(
        JSON.stringify(
          e.issues.map(i => ({ path: i.path, message: i.message })),
        ),
      );
    }

    throw e;
  }
}

export { parseSearchParams, validateObject };
