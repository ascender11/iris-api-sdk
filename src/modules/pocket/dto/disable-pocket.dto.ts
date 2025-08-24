import { z } from 'zod';

export const DisablePocketResponseDtoSchema = z.object({
  result: z.boolean(),
});

export type DisablePocketResponseDto = z.infer<typeof DisablePocketResponseDtoSchema>;
