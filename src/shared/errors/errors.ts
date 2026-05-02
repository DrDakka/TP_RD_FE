abstract class AppError extends Error {
  abstract status: number;
}

class BadRequestError extends AppError {
  status = 400;
  constructor(message = 'Bad Request') {
    super(message);
    this.name = 'BadRequestError';
  }
}

class NotFoundError extends AppError {
  status = 404;
  constructor(message = 'Not Found') {
    super(message);
    this.name = 'NotFoundError';
  }
}

class UnauthorizedError extends AppError {
  status = 401;
  constructor(message = 'Unauthorized') {
    super(message);
    this.name = 'Unauthorized';
  }
}

class MethodNotAllowedError extends AppError {
  status = 405;
  constructor(message = 'Method not allowed') {
    super(message);
    this.name = 'MethodNNotAllowedError';
  }
}

class InternalServerError extends AppError {
  status = 500;
  constructor(message = 'Internal Server Error') {
    super(message);
    this.name = 'InternalServerError';
  }
}

class ServiceUnavailableError extends AppError {
  status = 502;
  constructor(message = 'Service unavailable') {
    super(message);
    this.name = 'Service unavailable';
  }
}
export {
  AppError,
  BadRequestError,
  NotFoundError,
  InternalServerError,
  MethodNotAllowedError,
  UnauthorizedError,
  ServiceUnavailableError,
};
