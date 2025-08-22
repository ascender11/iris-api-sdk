import { IHttpClient } from 'src/client';
import { IrisApiEndpoints } from 'src/constants';

import { GetBalanceResponseDto } from './dto/get-balance.dto';

export class BalanceService {
  constructor(private client: IHttpClient) {}

  async get(): Promise<GetBalanceResponseDto> {
    return this.client.get(IrisApiEndpoints.balance);
  }
}
