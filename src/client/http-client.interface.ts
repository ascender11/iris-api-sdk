export interface IHttpClient {
  get: <T>(method: string, params?: Record<string, any>) => Promise<T>;
}
