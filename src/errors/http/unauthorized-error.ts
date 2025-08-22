import { HttpStatus } from './http-status';
import { IrisHttpError } from './iris-http-error';

export class IrisUnauthorizedError extends IrisHttpError {
  constructor(message: string, context?: string) {
    super(HttpStatus.Unauthorized, message, context);
  }
}
