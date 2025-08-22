import { IHttpClient } from 'src/client';
import { IrisApiEndpoints } from 'src/constants';

import { GoldGiveParamsDto, GoldGiveResponseDto } from './dto/give-gold.dto';
import {
  GoldGiveTransactionDto,
  GoldHistoryParamsDto,
  GoldTakeTransactionDto,
} from './dto/history.dto';

export class GoldService {
  constructor(private client: IHttpClient) {}

  async give(params: GoldGiveParamsDto): Promise<GoldGiveResponseDto> {
    return this.client.get(IrisApiEndpoints.giveGold, params);
  }

  async history(
    params?: GoldHistoryParamsDto,
  ): Promise<(GoldGiveTransactionDto | GoldTakeTransactionDto)[]> {
    return this.client.get(IrisApiEndpoints.goldHistory, params);
  }
}
