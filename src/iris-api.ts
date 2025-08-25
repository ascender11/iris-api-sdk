import { HttpClient, IHttpClient } from './client';
import { ValidatedHttpClient } from './client/validated-http-client';
import { SweetsService, GoldService, PocketService, BalanceService } from './modules';

export interface IrisOptions {
  client?: IHttpClient;
  version?: string;
}

export class IrisAPI {
  public readonly sweets: SweetsService;
  public readonly gold: GoldService;
  public readonly pocket: PocketService;
  public readonly balance: BalanceService;

  constructor(botId: string, irisToken: string, options: IrisOptions = {}) {
    const { version = '0.1', client } = options;
    const baseUrl = `https://iris-tg.ru/api/${botId}_${irisToken}/v${version}`;
    const httpClient = client ?? new HttpClient(baseUrl);
    const validatedClient = new ValidatedHttpClient(httpClient);

    this.sweets = new SweetsService(validatedClient);
    this.gold = new GoldService(validatedClient);
    this.pocket = new PocketService(validatedClient);
    this.balance = new BalanceService(validatedClient);
  }
}
