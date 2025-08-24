import { z } from 'zod';

export const GetBalanceResponseDtoSchema = z.object({
  gold: z.number(),
  sweets: z.number(),
  donate_score: z.number(),
});

export type GetBalanceResponseDto = z.infer<typeof GetBalanceResponseDtoSchema>;
