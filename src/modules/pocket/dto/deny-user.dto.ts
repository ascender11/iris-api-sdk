import { z } from 'zod';

export const DenyUserParamsDtoSchema = z.object({
  user_id: z.number().int(),
});

export type DenyUserParamsDto = z.infer<typeof DenyUserParamsDtoSchema>;

export const DenyUserResponseDtoSchema = z.object({
  result: z.boolean(),
});

export type DenyUserResponseDto = z.infer<typeof DenyUserResponseDtoSchema>;
