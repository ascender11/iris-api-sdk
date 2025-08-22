export class SweetsGiveParamsDto {
  user_id: number;
  sweets: number;
  without_donate_score?: boolean;
  comment?: string;
}

export class SweetsGiveResponseDto {
  result: boolean;
}
