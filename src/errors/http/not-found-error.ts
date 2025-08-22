import { HttpStatus } from './http-status';
import { IrisHttpError } from './iris-http-error';

export class IrisNotFoundError extends IrisHttpError {
  constructor(message: string, context?: string) {
    super(HttpStatus.NotFound, message, context);
  }
}
