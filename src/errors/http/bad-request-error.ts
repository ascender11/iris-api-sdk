import { HttpStatus } from './http-status';
import { IrisHttpError } from './iris-http-error';

export class IrisBadRequestError extends IrisHttpError {
  constructor(message: string, context?: string) {
    super(HttpStatus.BadRequest, message, context);
  }
}
