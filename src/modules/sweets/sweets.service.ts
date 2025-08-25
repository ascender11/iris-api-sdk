import { IValidatedClient } from 'src/client/validated-client.interface';
import { IrisApiEndpoints } from 'src/constants';

import {
  SweetsGiveParamsDto,
  SweetsGiveParamsDtoSchema,
  SweetsGiveResponseDto,
  SweetsGiveResponseDtoSchema,
} from './dto/give-sweets.dto';
import {
  SweetsHistoryParamsDto,
  SweetsHistoryParamsDtoSchema,
  SweetsHIstoryResponseDto,
  SweetsHistoryResponseDtoSchema,
} from './dto/history.dto';

export class SweetsService {
  constructor(private client: IValidatedClient) {}

  async give(params: SweetsGiveParamsDto): Promise<SweetsGiveResponseDto> {
    return this.client.get(IrisApiEndpoints.giveSweets, {
      params,
      paramsSchema: SweetsGiveParamsDtoSchema,
      responseSchema: SweetsGiveResponseDtoSchema,
    });
  }

  async history(params?: SweetsHistoryParamsDto): Promise<SweetsHIstoryResponseDto> {
    return this.client.get(IrisApiEndpoints.sweetsHistory, {
      params,
      paramsSchema: SweetsHistoryParamsDtoSchema,
      responseSchema: SweetsHistoryResponseDtoSchema,
    });
  }
}
