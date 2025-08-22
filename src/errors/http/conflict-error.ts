import { HttpStatus } from './http-status';
import { IrisHttpError } from './iris-http-error';

export class IrisConflictError extends IrisHttpError {
  constructor(message: string, context?: string) {
    super(HttpStatus.Conflict, message, context);
  }
}
