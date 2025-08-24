import { z } from 'zod';

export const AllowUserParamsDtoSchema = z.object({
  user_id: z.number().int(),
});

export type AllowUserParamsDto = z.infer<typeof AllowUserParamsDtoSchema>;

export const AllowUserResponseDtoSchema = z.object({
  result: z.boolean(),
});

export type AllowUserResponseDto = z.infer<typeof AllowUserResponseDtoSchema>;
