import { IValidatedClient } from 'src/client/validated-client.interface';
import { IrisApiEndpoints } from 'src/constants';

import { AllowAllResponseDto, AllowAllResponseDtoSchema } from './dto/allow-all.dto';
import {
  AllowUserParamsDto,
  AllowUserParamsDtoSchema,
  AllowUserResponseDto,
  AllowUserResponseDtoSchema,
} from './dto/allow-user.dto';
import { DenyAllResponseDto, DenyAllResponseDtoSchema } from './dto/deny-all.dto';
import {
  DenyUserParamsDto,
  DenyUserParamsDtoSchema,
  DenyUserResponseDto,
  DenyUserResponseDtoSchema,
} from './dto/deny-user.dto';
import { DisablePocketResponseDto, DisablePocketResponseDtoSchema } from './dto/disable-pocket.dto';
import { EnablePocketResponseDto, EnablePocketResponseDtoSchema } from './dto/enable-pocket.dto';

export class PocketService {
  constructor(private client: IValidatedClient) {}

  async enable(): Promise<EnablePocketResponseDto> {
    return this.client.get(IrisApiEndpoints.pocketEnable, {
      responseSchema: EnablePocketResponseDtoSchema,
    });
  }

  async disable(): Promise<DisablePocketResponseDto> {
    return this.client.get(IrisApiEndpoints.pocketDisable, {
      responseSchema: DisablePocketResponseDtoSchema,
    });
  }

  async allowAll(): Promise<AllowAllResponseDto> {
    return this.client.get(IrisApiEndpoints.allowAll, {
      responseSchema: AllowAllResponseDtoSchema,
    });
  }

  async denyAll(): Promise<DenyAllResponseDto> {
    return this.client.get(IrisApiEndpoints.denyAll, {
      responseSchema: DenyAllResponseDtoSchema,
    });
  }

  async allowUser(params: AllowUserParamsDto): Promise<AllowUserResponseDto> {
    return this.client.get(IrisApiEndpoints.allowUser, {
      params,
      paramsSchema: AllowUserParamsDtoSchema,
      responseSchema: AllowUserResponseDtoSchema,
    });
  }

  async denyUser(params: DenyUserParamsDto): Promise<DenyUserResponseDto> {
    return this.client.get(IrisApiEndpoints.denyUser, {
      params,
      paramsSchema: DenyUserParamsDtoSchema,
      responseSchema: DenyUserResponseDtoSchema,
    });
  }
}
