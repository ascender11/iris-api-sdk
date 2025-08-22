import { IHttpClient } from './http-client.interface';
import {
  HttpStatus,
  IrisBadRequestError,
  IrisConflictError,
  IrisForbiddenError,
  IrisHttpError,
  IrisNotFoundError,
  IrisServerError,
  IrisUnauthorizedError,
} from '../errors';

export class HttpClient implements IHttpClient {
  constructor(private baseUrl: string) {}

  async checkResponse(response: Response) {
    const body = await response.json();
    const status = response.status;
    const message = response.statusText;

    if (!response.ok) {
      switch (status) {
        case HttpStatus.BadRequest:
          throw new IrisBadRequestError(message, body);
        case HttpStatus.Unauthorized:
          throw new IrisUnauthorizedError(message, body);
        case HttpStatus.Forbidden:
          throw new IrisForbiddenError(message, body);
        case HttpStatus.NotFound:
          throw new IrisNotFoundError(message, body);
        case HttpStatus.Conflict:
          throw new IrisConflictError(message, body);
        default:
          if (status >= 500) {
            throw new IrisServerError(status, message, body);
          }
          throw new IrisHttpError(status, message, body);
      }
    }

    return body;
  }

  async get<T>(method: string, params?: Record<string, any>): Promise<T> {
    const query = params ? '?' + new URLSearchParams(params) : '';
    const url = `${this.baseUrl}/${method}${query}`;

    const response: Response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return this.checkResponse(response);
  }
}
