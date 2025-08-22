export class GoldHistoryParamsDto {
  offset: number;
}

export class GoldGiveTransactionDto {
  date: number;
  amount: number;
  balance: number;
  to_user_id: number;
  id: number;
  type: 'give';
  info: {
    gold: number;
    commission: number;
  };
}

export class GoldTakeTransactionDto {
  date: number;
  amount: number;
  balance: number;
  to_user_id: number;
  id: number;
  type: 'take';
  info: {};
}
