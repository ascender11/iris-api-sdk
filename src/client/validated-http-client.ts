import { ZodType, output } from 'zod';

import { IHttpClient } from './http-client.interface';
import { IValidatedClient, ValiadatedClientOptions } from './validated-client.interface';

export class ValidatedHttpClient implements IValidatedClient {
  constructor(private readonly httpClient: IHttpClient) {}

  async get<InputSchema extends ZodType<Record<string, any>>, OutputSchema extends ZodType>(
    method: string,
    options: ValiadatedClientOptions<InputSchema, OutputSchema> = {},
  ): Promise<output<OutputSchema>> {
    const { params, paramsSchema, responseSchema, validate = true } = options;

    const validatedParams = validate && paramsSchema ? paramsSchema.parse(params) : params;

    const response = await this.httpClient.get<output<OutputSchema>>(method, validatedParams);

    return validate && responseSchema ? responseSchema.parse(response) : response;
  }
}
