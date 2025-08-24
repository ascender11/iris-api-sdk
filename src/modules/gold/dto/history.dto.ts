import { z } from 'zod';

export const GoldTransactionInfoDtoSchema = z.object({
  gold: z.number().int(),
  commission: z.number(),
});

export type GoldTransactionInfoDto = z.infer<typeof GoldTransactionInfoDtoSchema>;

export const GoldGiveTransactionDtoSchema = z.object({
  date: z.number().int(),
  amount: z.number().int(),
  balance: z.number().int(),
  to_user_id: z.number(),
  id: z.number().int(),
  type: z.literal('give'),
  info: GoldTransactionInfoDtoSchema,
});

export type GoldGiveTransactionDto = z.infer<typeof GoldGiveTransactionDtoSchema>;

export const GoldTakeTransactionDtoSchema = z.object({
  date: z.number(),
  amount: z.number().int(),
  balance: z.number().int(),
  to_user_id: z.number(),
  id: z.number().int(),
  type: z.literal('take'),
  info: z.object({}),
});

export type GoldTakeTransactionDto = z.infer<typeof GoldTakeTransactionDtoSchema>;

export const GoldHistoryParamsDtoSchema = z.object({
  offset: z.number().int(),
});

export type GoldHistoryParamsDto = z.infer<typeof GoldHistoryParamsDtoSchema>;

export const GoldTransactionSchema = z.union([
  GoldGiveTransactionDtoSchema,
  GoldTakeTransactionDtoSchema,
]);

export type GoldTransactionDto = z.infer<typeof GoldTransactionSchema>;

export const GoldHistoryResponseSchema = z.array(GoldTransactionSchema);

export type GoldHistoryResponseDto = z.infer<typeof GoldHistoryResponseSchema>;
