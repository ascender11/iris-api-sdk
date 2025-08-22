import { IHttpClient } from './http-client.interface';

export class HttpClient implements IHttpClient {
  constructor(private baseUrl: string) {}

  async get<T>(method: string, params?: Record<string, any>): Promise<T> {
    const query = params ? '?' + new URLSearchParams(params) : '';
    const url = `${this.baseUrl}/${method}${query}`;

    const response: Response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  }
}
