import { IValidatedClient } from 'src/client/validated-client.interface';
import { IrisApiEndpoints } from 'src/constants';

import {
  GoldGiveParamsDto,
  GoldGiveParamsDtoSchema,
  GoldGiveResponseDto,
  GoldGiveResponseDtoShema,
} from './dto/give-gold.dto';
import {
  GoldHistoryParamsDto,
  GoldHistoryParamsDtoSchema,
  GoldHistoryResponseDto,
  GoldHistoryResponseSchema,
} from './dto/history.dto';

export class GoldService {
  constructor(private client: IValidatedClient) {}

  async give(params: GoldGiveParamsDto): Promise<GoldGiveResponseDto> {
    return this.client.get(IrisApiEndpoints.giveGold, {
      params,
      paramsSchema: GoldGiveParamsDtoSchema,
      responseSchema: GoldGiveResponseDtoShema,
    });
  }

  async history(params?: GoldHistoryParamsDto): Promise<GoldHistoryResponseDto> {
    return this.client.get(IrisApiEndpoints.goldHistory, {
      params,
      paramsSchema: GoldHistoryParamsDtoSchema,
      responseSchema: GoldHistoryResponseSchema,
    });
  }
}
