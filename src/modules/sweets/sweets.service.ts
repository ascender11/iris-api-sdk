import { IHttpClient } from 'src/client';
import { IrisApiEndpoints } from 'src/constants';

import { SweetsGiveParamsDto, SweetsGiveResponseDto } from './dto/give-sweets.dto';
import { SweetsHistoryParamsDto, SweetsHIstoryResponseDto } from './dto/history.dto';

export class SweetsService {
  constructor(private client: IHttpClient) {}

  async give(params: SweetsGiveParamsDto): Promise<SweetsGiveResponseDto> {
    return this.client.get(IrisApiEndpoints.giveSweets, params);
  }

  async history(params?: SweetsHistoryParamsDto): Promise<SweetsHIstoryResponseDto> {
    return this.client.get(IrisApiEndpoints.sweetsHistory, params);
  }
}
