import { IrisHttpError } from './iris-http-error';

export class IrisServerError extends IrisHttpError {
  constructor(statusCode: number, message: string, context?: string) {
    super(statusCode, message, context);
  }
}
