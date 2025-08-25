import { ZodType, output } from 'zod';

export interface ValiadatedClientOptions<
  InputSchema extends ZodType<Record<string, any>> = ZodType<Record<string, any>>,
  OutputSchema extends ZodType = ZodType,
> {
  params?: Record<string, any>;
  paramsSchema?: InputSchema;
  responseSchema?: OutputSchema;
  validate?: boolean;
}

export interface IValidatedClient {
  get<InputSchema extends ZodType<Record<string, any>>, OutputSchema extends ZodType>(
    method: string,
    options?: ValiadatedClientOptions<InputSchema, OutputSchema>,
  ): Promise<output<OutputSchema>>;
}
