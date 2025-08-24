import { z } from 'zod';

export const SweetsHistoryParamsDtoSchema = z.object({
  offset: z.number().int(),
});

export type SweetsHistoryParamsDto = z.infer<typeof SweetsHistoryParamsDtoSchema>;

export const SweetsTransactionInfoDtoSchema = z.object({
  donateScore: z.number().int(),
  sweets: z.number().int(),
  commission: z.number(),
});

export type SweetsTransactionInfoDto = z.infer<typeof SweetsTransactionInfoDtoSchema>;

export const SweetsTransactionDtoSchema = z.object({
  date: z.number().int(),
  amount: z.number().int(),
  balance: z.number(),
  to_user_id: z.number().int(),
  id: z.number().int(),
  type: z.enum(['take', 'give']),
  info: SweetsTransactionInfoDtoSchema,
});

export type SweetsTransactionDto = z.infer<typeof SweetsTransactionDtoSchema>;

export const SweetsHistoryResponseDtoSchema = z.array(SweetsTransactionDtoSchema);

export type SweetsHIstoryResponseDto = z.infer<typeof SweetsHistoryResponseDtoSchema>;
