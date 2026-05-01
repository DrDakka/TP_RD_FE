import { NextRequest } from 'next/server';
import { RouteConfig, router } from '../router';
import {
  BadRequestError,
  MethodNotAllowedError,
  NotFoundError,
} from '../errors/errors';
import { hasBody, normalizePath, parse } from '../utils';
import validate from './validators';

async function validateRequest(req: NextRequest) {
  // validate path & method
  const rawPath = req.nextUrl.pathname.replace('/api/', '').replace(/\/$/, '');
  const endpoint = normalizePath(rawPath);

  if (!validate.ep(endpoint)) {
    throw new NotFoundError();
  }

  const method = req.method;

  if (!validate.method(endpoint, method)) {
    throw new MethodNotAllowedError();
  }

  const routeConfig = (router as Record<string, Record<string, RouteConfig>>)[
    endpoint
  ][method];

  // validate searchParams
  const spSchema = routeConfig.searchParams;
  const rawParams = parse.searchParams(req.nextUrl.searchParams);

  const hasParams = Object.keys(rawParams).length > 0;

  if (hasParams && !spSchema) {
    throw new BadRequestError('Unexpected search parameters');
  }

  if (spSchema) {
    validate.object(hasParams ? rawParams : {}, spSchema);
  }

  const queryString = req.nextUrl.searchParams.toString();

  // validate body

  const bodySchema = routeConfig.schema;
  const hb = hasBody(req);

  if (!bodySchema && hb) {
    throw new BadRequestError('Unexpected body');
  }

  if (bodySchema && !hb) {
    throw new BadRequestError('Expected request body');
  }

  const body = bodySchema
    ? validate.object(await parse.body(req), bodySchema)
    : null;

  return {
    endpoint,
    method,
    queryString,
    body,
    auth: routeConfig.auth,
    headers: routeConfig.headers,
  };
}

export { validateRequest };
