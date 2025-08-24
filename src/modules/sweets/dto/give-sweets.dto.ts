import { z } from 'zod';

export const SweetsGiveParamsDtoSchema = z.object({
  user_id: z.number().int(),
  sweets: z.number(),
  without_donate_score: z.boolean().optional(),
  comment: z.string().optional(),
});

export type SweetsGiveParamsDto = z.infer<typeof SweetsGiveParamsDtoSchema>;

export const SweetsGiveResponseDtoSchema = z.object({
  result: z.boolean(),
});

export type SweetsGiveResponseDto = z.infer<typeof SweetsGiveResponseDtoSchema>;
