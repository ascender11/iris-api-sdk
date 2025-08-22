import { HttpStatus } from './http-status';
import { IrisHttpError } from './iris-http-error';

export class IrisForbiddenError extends IrisHttpError {
  constructor(message: string, context?: string) {
    super(HttpStatus.Forbidden, message, context);
  }
}
