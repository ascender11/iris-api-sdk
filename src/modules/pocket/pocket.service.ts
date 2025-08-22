import { IHttpClient } from 'src/client';
import { IrisApiEndpoints } from 'src/constants';

import { AllowAllResponseDto } from './dto/allow-all.dto';
import { AllowUserParamsDto, AllowUserResponseDto } from './dto/allow-user.dto';
import { DenyAllResponseDto } from './dto/deny-all.dto';
import { DenyUserParamsDto, DenyUserResponseDto } from './dto/deny-user.dto';
import { DisablePocketResponseDto } from './dto/disable-pocket.dto';
import { EnablePocketResponseDto } from './dto/enable-pocket.dto';

export class PocketService {
  constructor(private client: IHttpClient) {}

  async enable(): Promise<EnablePocketResponseDto> {
    return this.client.get(IrisApiEndpoints.pocketEnable);
  }

  async disable(): Promise<DisablePocketResponseDto> {
    return this.client.get(IrisApiEndpoints.pocketDisable);
  }

  async allowAll(): Promise<AllowAllResponseDto> {
    return this.client.get(IrisApiEndpoints.allowAll);
  }

  async denyAll(): Promise<DenyAllResponseDto> {
    return this.client.get(IrisApiEndpoints.denyAll);
  }

  async allowUser(params: AllowUserParamsDto): Promise<AllowUserResponseDto> {
    return this.client.get(IrisApiEndpoints.allowUser, params);
  }

  async denyUser(params: DenyUserParamsDto): Promise<DenyUserResponseDto> {
    return this.client.get(IrisApiEndpoints.denyUser, params);
  }
}
