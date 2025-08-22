import { HttpClient, IHttpClient } from './client';

export interface IrisOptions {
  client?: IHttpClient;
  version?: string;
}

export class IrisAPI {
  constructor(botId: string, irisToken: string, options: IrisOptions = {}) {
    const { version = '0.1', client } = options;
    const baseUrl = `https://iris-tg.ru/api/${botId}_${irisToken}/v${version}`;
    const httpClient = client ?? new HttpClient(baseUrl);
    console.log(httpClient);
  }
}
