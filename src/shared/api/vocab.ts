const methods = {
  get: 'GET',
  post: 'POST',
  delete: 'DELETE',
} as const;

const headers = {
  appJson: { 'Content-Type': 'application/json' },
} as const;

const httpStatus = {
  ok: 200,
  created: 201,
  noContent: 204,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  serverError: 500,
} as const;

type Method = (typeof methods)[keyof typeof methods];
type Header = (typeof headers)[keyof typeof headers];
type HttpStatus = (typeof httpStatus)[keyof typeof httpStatus];

export {
  methods,
  type Method,
  headers,
  type Header,
  httpStatus,
  type HttpStatus,
};
