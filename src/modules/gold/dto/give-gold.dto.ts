import { z } from 'zod';

export const GoldGiveParamsDtoSchema = z.object({
  user_id: z.number().int(),
  gold: z.number(),
  without_donate_score: z.boolean().optional(),
  comment: z.string().max(128).optional(),
});

export type GoldGiveParamsDto = z.infer<typeof GoldGiveParamsDtoSchema>;

export const GoldGiveResponseDtoShema = z.object({
  result: z.boolean(),
});

export type GoldGiveResponseDto = z.infer<typeof GoldGiveResponseDtoShema>;
