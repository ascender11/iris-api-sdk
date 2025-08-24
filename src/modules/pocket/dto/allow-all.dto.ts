import { z } from 'zod';

export const AllowAllResponseDtoSchema = z.object({
  result: z.boolean(),
});

export type AllowAllResponseDto = z.infer<typeof AllowAllResponseDtoSchema>;
