export class ValidationError extends Error {
  constructor(param?: string) {
    super(`Invalid search param: "${param}"`);
    this.name = 'ValidationError';
  }
}
