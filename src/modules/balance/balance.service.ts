import { IValidatedClient } from 'src/client';
import { IrisApiEndpoints } from 'src/constants';

import { GetBalanceResponseDto, GetBalanceResponseDtoSchema } from './dto/get-balance.dto';

export class BalanceService {
  constructor(private client: IValidatedClient) {}

  async get(): Promise<GetBalanceResponseDto> {
    return this.client.get(IrisApiEndpoints.balance, {
      responseSchema: GetBalanceResponseDtoSchema,
    });
  }
}
