const methods = {
  get: 'GET',
  post: 'POST',
  delete: 'DELETE',
} as const;

const contentTypes = {
  json: 'application/json',
  form: 'multipart/form-data',
} as const;

const headerNames = {
  ct: 'Content-Type',
  accept: 'Accept',
};

const headers = {
  [headerNames.ct]: {
    json: { [headerNames.ct]: contentTypes.json },
  },
  [headerNames.accept]: {
    json: { [headerNames.accept]: contentTypes.json },
  },
} as const;

const httpStatus = {
  ok: 200,
  created: 201,
  noContent: 204,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  methodNotAllowed: 405,
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
  contentTypes,
  headerNames,
};
