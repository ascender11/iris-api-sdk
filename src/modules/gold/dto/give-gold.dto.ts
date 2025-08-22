export class GoldGiveParamsDto {
  user_id: number;
  gold: number;
  without_donate_score?: boolean;
  comment?: string;
}

export class GoldGiveResponseDto {
  result: boolean;
}
