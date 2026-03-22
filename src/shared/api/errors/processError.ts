import { httpStatus } from '../vocab';

const processError = (e: unknown): void => {
  if (e instanceof DOMException && e.name === 'AbortError') {
    return;
  }

  if (e instanceof Response) {
    if (e.status === httpStatus.unauthorized) {
      // TODO: redir on auth / token refr
    }

    if (e.status === httpStatus.notFound) {
      // TODO: redir 404
    }
  }

  throw e;
};

export { processError };
