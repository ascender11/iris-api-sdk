export class SweetsHistoryParamsDto {
  offset: number;
}

export class SweetsTransactionInfoDto {
  donateScore: number;
  sweets: number;
  commission: number;
}

export class SweetsTransactionDto {
  date: number;
  amount: number;
  balance: number;
  to_user_id: number;
  id: number;
  type: 'take' | 'give';
  info: SweetsTransactionInfoDto;
}

export type SweetsHistoryResponseDto = SweetsTransactionDto[];
